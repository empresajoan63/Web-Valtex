(() => {
  const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Menú móvil ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- Scroll suave (Lenis) ---------- */
  let lenis = null;
  if (window.Lenis && !reduceMotion) {
    lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    if (hasGSAP) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const target = id === "#top" ? 0 : document.querySelector(id);
      if (target === null) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -90 });
      else if (target === 0) window.scrollTo({ top: 0, behavior: "smooth" });
      else target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- Nav: se oculta al bajar, aparece al subir ---------- */
  const nav = document.getElementById("nav");
  const progress = document.getElementById("scrollProgress");
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    nav.classList.toggle("hidden", y > lastY && y > 400 && !navLinks.classList.contains("open"));
    lastY = y;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Cursor ---------- */
  const cursor = document.getElementById("cursor");
  if (finePointer && !reduceMotion) {
    let cx = 0, cy = 0, tx = 0, ty = 0;
    window.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; cursor.classList.add("active"); });
    document.addEventListener("mouseleave", () => cursor.classList.remove("active"));
    const loop = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll("a, button, .card, .node, input, textarea").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
  }

  /* ---------- Botones magnéticos ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".magnetic").forEach((btn) => {
      const inner = btn.querySelector("span");
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
        if (inner) inner.style.transform = `translate(${x * 0.12}px, ${y * 0.15}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transition = "transform .6s cubic-bezier(.22,1,.36,1), box-shadow .4s";
        btn.style.transform = "";
        if (inner) { inner.style.transition = "transform .6s cubic-bezier(.22,1,.36,1)"; inner.style.transform = ""; }
        setTimeout(() => { btn.style.transition = ""; if (inner) inner.style.transition = ""; }, 600);
      });
    });
  }

  /* ---------- Tarjetas: inclinación 3D + foco de luz ---------- */
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
      if (finePointer && !reduceMotion && card.classList.contains("tilt")) {
        card.style.setProperty("--rx", `${(0.5 - py) * 8}deg`);
        card.style.setProperty("--ry", `${(px - 0.5) * 8}deg`);
      }
    });
    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });

  /* ---------- Parallax del mockup del hero ---------- */
  const heroVisual = document.getElementById("heroVisual");
  if (finePointer && !reduceMotion && heroVisual) {
    const layers = heroVisual.querySelectorAll("[data-depth]");
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      layers.forEach((l) => {
        const d = parseFloat(l.dataset.depth);
        l.style.translate = `${x * d * 30}px ${y * d * 30}px`;
      });
      heroVisual.querySelector(".window").style.rotate = `x ${-y * 6}deg`;
    });
  }

  /* ---------- Partículas del hero ---------- */
  const canvas = document.getElementById("particles");
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext("2d");
    const colors = ["25,230,212", "181,107,255"];
    let w, h, dpr, points = [], mouse = { x: -9999, y: -9999 }, running = true;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(90, Math.floor((w * h) / 16000));
      points = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.5, c: colors[Math.random() < 0.5 ? 0 : 1],
      }));
    };
    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const mdx = p.x - mouse.x, mdy = p.y - mouse.y, md = Math.hypot(mdx, mdy);
        if (md < 120) { p.x += (mdx / md) * 1.2; p.y += (mdy / md) * 1.2; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},0.8)`; ctx.fill();
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(${p.c},${0.18 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", resize);
    canvas.parentElement.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    new IntersectionObserver(([e]) => {
      const was = running; running = e.isIntersecting;
      if (running && !was) draw();
    }).observe(canvas);
  }

  /* ---------- Pestañas por departamento ---------- */
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");
  const indicator = document.getElementById("tabIndicator");
  const moveIndicator = (tab) => {
    indicator.style.width = `${tab.offsetWidth}px`;
    indicator.style.height = `${tab.offsetHeight}px`;
    indicator.style.transform = `translate(${tab.offsetLeft}px, ${tab.offsetTop}px)`;
  };
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      tabs.forEach((t) => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
      panels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active"); tab.setAttribute("aria-selected", "true");
      panels[tab.dataset.tab].classList.add("active");
      moveIndicator(tab);
    })
  );
  const initIndicator = () => moveIndicator(document.querySelector(".tab.active"));
  window.addEventListener("resize", initIndicator);
  document.fonts ? document.fonts.ready.then(initIndicator) : initIndicator();

  /* ---------- FAQ acordeón ---------- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    q.addEventListener("click", () => {
      const open = !item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((o) => {
        o.classList.remove("open"); o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      item.classList.toggle("open", open);
      q.setAttribute("aria-expanded", open);
    });
  });

  /* ---------- Formulario: se envía a info@valtex.agency vía /api/contact ---------- */
  const form = document.getElementById("contactForm");
  const formOk = document.getElementById("formOk");
  const formError = document.getElementById("formError");
  const submitLabel = document.querySelector("#formSubmit span");
  const SENDING = { es: "Enviando…", ca: "Enviant…", en: "Sending…" };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("formSubmit");
    const original = submitLabel.innerHTML;
    formOk.hidden = true;
    formError.hidden = true;
    btn.disabled = true;
    submitLabel.textContent = SENDING[document.documentElement.lang] || SENDING.es;
    const data = Object.fromEntries(new FormData(form));
    data.idioma = document.documentElement.lang;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      formOk.hidden = false;
    } catch (err) {
      formError.hidden = false;
    } finally {
      btn.disabled = false;
      submitLabel.innerHTML = original;
    }
  });

  /* ---------- Tarjetas que animan sus gráficos al entrar ---------- */
  const inView = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in-view"); inView.unobserve(en.target); } });
  }, { threshold: 0.4 });
  document.querySelectorAll(".card").forEach((c) => inView.observe(c));

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById("preloader");
  const bar = document.getElementById("preloaderBar");
  const count = document.getElementById("preloaderCount");
  document.body.classList.add("loading");

  if (!hasGSAP || reduceMotion) {
    preloader.remove();
    document.body.classList.remove("loading");
    document.querySelectorAll("[data-count]").forEach((el) => (el.textContent = el.dataset.count));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* Divide los titulares en palabras */
  const splitWords = (el) => {
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const w = document.createElement("span"); w.className = "word";
            const i = document.createElement("span"); i.className = "word-inner"; i.textContent = part;
            w.appendChild(i); frag.appendChild(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) walk(child);
      });
    };
    walk(el);
    return el.querySelectorAll(".word-inner");
  };

  // Tras cambiar de idioma, la pantalla de carga pasa casi sin verse
  let quick = false;
  try { quick = sessionStorage.getItem("valtex-quick") === "1"; sessionStorage.removeItem("valtex-quick"); } catch (e) {}

  const loader = { v: 0 };
  gsap.to(loader, {
    v: 100, duration: quick ? 0.2 : 1.4, ease: "power2.inOut",
    onUpdate: () => { count.textContent = Math.round(loader.v); bar.style.width = `${loader.v}%`; },
    onComplete: () => {
      gsap.to(preloader, {
        yPercent: -100, duration: 0.9, ease: "expo.inOut",
        onComplete: () => { preloader.remove(); document.body.classList.remove("loading"); ScrollTrigger.refresh(); },
      });
      heroIntro();
    },
  });

  function heroIntro() {
    const words = splitWords(document.querySelector(".hero-title"));
    const tl = gsap.timeline({ delay: 0.45 });
    tl.from(nav, { y: -100, opacity: 0, duration: 1, ease: "expo.out" })
      .from(words, { yPercent: 110, rotate: 4, duration: 1.1, stagger: 0.06, ease: "expo.out" }, "<0.1")
      .from(".hero-fade", { y: 30, opacity: 0, duration: 1, stagger: 0.12, ease: "expo.out" }, "<0.3")
      .from(".window", { y: 120, opacity: 0, rotateX: 25, duration: 1.4, ease: "expo.out" }, "<0.2")
      .from("#heroChat .msg", { y: 20, opacity: 0, scale: 0.95, duration: 0.6, stagger: 0.35, ease: "back.out(1.6)" }, "<0.5")
      .from(".float-card", { scale: 0.6, opacity: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.8)" }, "<0.4");
  }

  /* Titulares de sección */
  document.querySelectorAll("[data-split]:not(.hero-title)").forEach((el) => {
    const words = splitWords(el);
    gsap.from(words, {
      yPercent: 110, duration: 1, stagger: 0.05, ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });
  gsap.utils.toArray(".eyebrow").forEach((el) =>
    gsap.from(el, { x: -20, opacity: 0, duration: 0.8, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%" } })
  );

  /* Parallax al hacer scroll en el hero */
  gsap.to(".hero-visual", { yPercent: 18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".orb-1", { yPercent: 60, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".orb-2", { yPercent: -40, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  /* Contadores */
  gsap.utils.toArray("[data-count]").forEach((el) => {
    const obj = { v: 0 };
    gsap.to(obj, {
      v: +el.dataset.count, duration: 2, ease: "power3.out",
      onUpdate: () => (el.textContent = Math.round(obj.v)),
      scrollTrigger: { trigger: el, start: "top 90%" },
    });
  });
  gsap.from(".stat", { y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: "expo.out", scrollTrigger: { trigger: ".stats", start: "top 85%" } });

  /* Manifiesto: palabras que se iluminan con el scroll */
  const manifesto = document.getElementById("manifesto");
  manifesto.innerHTML = manifesto.textContent.split(" ").map((w) => `<span class="mw">${w}</span>`).join(" ");
  gsap.to("#manifesto .mw", {
    opacity: 1, stagger: 0.1, ease: "none",
    scrollTrigger: { trigger: manifesto, start: "top 80%", end: "bottom 45%", scrub: true },
  });

  /* Comparativa */
  gsap.from(".reveal-left", { x: -80, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: ".compare", start: "top 80%" } });
  gsap.from(".reveal-right", { x: 80, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: ".compare", start: "top 80%" } });
  gsap.from(".vs", { scale: 0, rotate: -180, duration: 1, ease: "back.out(2)", scrollTrigger: { trigger: ".compare", start: "top 75%" } });
  gsap.from(".compare li", { x: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ".compare", start: "top 70%" } });

  /* Bento: tarjetas entrando en cascada */
  ScrollTrigger.batch(".bento .card", {
    start: "top 88%",
    onEnter: (batch) => gsap.from(batch, { y: 80, opacity: 0, scale: 0.94, rotateX: -15, duration: 1.1, stagger: 0.1, ease: "expo.out", clearProps: "transform,opacity" }),
    once: true,
  });

  /* Diagrama de flujo */
  const flowTl = gsap.timeline({ scrollTrigger: { trigger: "#flow", start: "top 75%" } });
  flowTl.from("#flow .flow-col.in .node", { x: -60, opacity: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" })
    .from("#flow .flow-lines span", { scaleX: 0, transformOrigin: "left", duration: 0.6, stagger: 0.05, ease: "power2.out" }, "<0.3")
    .from("#flow .flow-core", { scale: 0, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.6)" }, "<0.2")
    .from("#flow .flow-col.out .node", { x: 60, opacity: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" }, "<0.4");

  /* Método: scroll horizontal fijado (escritorio) */
  const mm = gsap.matchMedia();
  mm.add("(min-width: 721px)", () => {
    const track = document.getElementById("methodTrack");
    const distance = () => track.scrollWidth - window.innerWidth;
    const tween = gsap.to(track, {
      x: () => -distance(), ease: "none",
      scrollTrigger: { trigger: ".method", pin: ".method-pin", start: "top top", end: () => `+=${distance()}`, scrub: 1, invalidateOnRefresh: true },
    });
    gsap.utils.toArray(".step").forEach((step) => {
      gsap.from(step.querySelector(".num"), {
        yPercent: 60, opacity: 0, duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: step, containerAnimation: tween, start: "left 85%" },
      });
    });
  });
  mm.add("(max-width: 720px)", () => {
    gsap.utils.toArray(".step").forEach((step) =>
      gsap.from(step, { y: 60, opacity: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: step, start: "top 88%" } })
    );
  });

  /* Resto de elementos */
  gsap.utils.toArray(".reveal-up").forEach((el) =>
    gsap.from(el, { y: 50, opacity: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%" } })
  );
  ScrollTrigger.batch(".why", {
    start: "top 88%",
    onEnter: (batch) => gsap.from(batch, { y: 60, opacity: 0, duration: 1, stagger: 0.12, ease: "expo.out", clearProps: "transform,opacity" }),
    once: true,
  });
  gsap.from(".reveal-scale", { scale: 0.9, opacity: 0, duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: ".reveal-scale", start: "top 85%" } });
  gsap.from(".cta-box .field, .cta-box .check, .cta-box .btn", { y: 20, opacity: 0, duration: 0.7, stagger: 0.06, ease: "power3.out", scrollTrigger: { trigger: ".cta-box", start: "top 70%" } });
  gsap.from(".footer-word", { yPercent: 40, opacity: 0, ease: "none", scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom bottom", scrub: true } });
})();
