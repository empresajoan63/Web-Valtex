// Recibe el formulario de contacto y lo envía por email con el SMTP de Hostinger.
// Variables de entorno en Vercel:
//   SMTP_USER  -> cuenta de correo que envía (info@valtex.agency)
//   SMTP_PASS  -> contraseña de esa cuenta
//   MAIL_TO    -> (opcional) dónde llegan las solicitudes; por defecto SMTP_USER
const nodemailer = require("nodemailer");

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const clean = (v, max) => String(v || "").trim().slice(0, max);

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method" });

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

  // Campo trampa: los humanos no lo ven, los bots lo rellenan
  if (body.website) return res.status(200).json({ ok: true });

  const nombre = clean(body.nombre, 100);
  const hotel = clean(body.hotel, 150);
  const email = clean(body.email, 150);
  const telefono = clean(body.telefono, 40);
  const mensaje = clean(body.mensaje, 3000);
  const idioma = clean(body.idioma, 5);

  if (!nombre || !hotel || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "invalid" });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return res.status(500).json({ ok: false, error: "config" });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const rows = [
    ["Nombre", nombre],
    ["Hotel", hotel],
    ["Email", email],
    ["Teléfono", telefono || "—"],
    ["Idioma de la web", idioma || "—"],
  ];
  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n¿Qué quiere automatizar?\n${mensaje || "—"}`;
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#111">
      <h2 style="margin:0 0 16px">Nueva solicitud de auditoría</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows.map(([k, v]) => `<tr><td style="color:#666">${k}</td><td><strong>${esc(v)}</strong></td></tr>`).join("")}
      </table>
      <p style="margin:20px 0 6px;color:#666">¿Qué quiere automatizar?</p>
      <p style="white-space:pre-wrap;margin:0">${esc(mensaje || "—")}</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"Web VALTEX" <${user}>`,
      to: process.env.MAIL_TO || user,
      replyTo: `"${nombre.replace(/["\r\n]/g, "")}" <${email}>`,
      subject: `Nueva solicitud de auditoría: ${hotel.replace(/[\r\n]/g, " ")}`,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error enviando email:", err.message);
    return res.status(500).json({ ok: false, error: "send" });
  }
};
