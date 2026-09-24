// Traducciones de la web. El español está directamente en index.html;
// aquí solo van el catalán y el inglés, con las mismas claves que los data-i18n.
const TRANSLATIONS = {
  ca: {
    "meta.title": "VALTEX | Automatització amb IA per a hotels",
    "meta.desc": "VALTEX és l'agència especialitzada en automatitzacions amb intel·ligència artificial per a hotels: recepció 24/7, reserves directes, ressenyes, upselling i operacions connectades al teu PMS.",

    "nav.services": "Serveis",
    "nav.how": "Com funciona",
    "nav.method": "Mètode",
    "nav.areas": "Àrees",
    "nav.cta": "Auditoria gratis",

    "hero.pillTag": "Nou",
    "hero.pill": "Agents de veu per a recepció",
    "hero.title": 'El teu hotel atén, ven i s\'organitza <em class="grad">sol. 24/7.</em>',
    "hero.lead": "Agents d'IA i automatitzacions connectades al teu PMS, WhatsApp i canals de venda. El teu equip deixa les tasques repetitives i se centra en el que importa: l'hoste.",
    "hero.cta1": "Sol·licitar auditoria gratuïta",
    "hero.cta2": "Veure com funciona",
    "hero.live": "● En directe",

    "chat.m1": "Hola! Teniu una habitació doble del 12 al 14 d'octubre? 🌊",
    "chat.m2": "Sí! Tenim la Deluxe Vista Mar disponible 2 nits a 148 €/nit, amb esmorzar inclòs. Te la reservo?",
    "chat.m3": "Perfecte, endavant!",
    "chat.sys": "✓ Reserva creada al PMS &nbsp;·&nbsp; ✓ Pagament enviat &nbsp;·&nbsp; ✓ Housekeeping avisat",

    "fc.response": "Resposta mitjana",
    "fc.direct": "Reserva directa",
    "fc.noFee": "Sense comissió",
    "fc.lang": "Idioma detectat",
    "fc.langValue": "Català",

    "stats.s1": "atenció a l'hoste, també de matinada",
    "stats.s2": "temps de resposta a WhatsApp i web",
    "stats.s3": "idiomes atesos pel mateix agent",
    "stats.s4": "consultes sense resposta fora d'horari",

    "marquee.title": "Connectem amb les eines que ja fas servir",

    "manifesto.eyebrow": "El problema",
    "manifesto.text": "Cada missatge sense resposta és una reserva que se'n va a un altre hotel. Recepció saturada, correus que esperen fins demà i comissions d'OTA que es mengen el teu marge. La IA no substitueix el teu equip: li retorna el temps.",

    "compare.badTitle": "Sense automatitzar",
    "compare.b1": "Consultes nocturnes perdudes",
    "compare.b2": "Reserves via OTA amb comissió",
    "compare.b3": "Upselling només si hi ha temps",
    "compare.b4": "Ressenyes sense resposta",
    "compare.goodTitle": 'Amb <span class="grad">VALTEX</span>',
    "compare.g1": "Resposta immediata en qualsevol idioma",
    "compare.g2": "Més venda directa des del web i WhatsApp",
    "compare.g3": "Upgrades i extres oferts a cada hoste",
    "compare.g4": "Reputació online gestionada cada dia",

    "services.eyebrow": "Serveis",
    "services.title": "Automatitzacions pensades per a l'operativa hotelera",
    "s1.t": "Concierge IA 24/7",
    "s1.d": "Un agent a WhatsApp, web i email que resol dubtes, recomana i reserva en l'idioma de l'hoste.",
    "s1.q": "A quina hora és l'esmorzar?",
    "s1.a": "De 7:30 a 11:00 a la terrassa ☀️ Et reservo taula?",
    "s2.t": "Motor de venda directa",
    "s2.d": "Converteix converses en reserves amb enllaç de pagament, sense OTA.",
    "s3.t": "Pre check-in automàtic",
    "s3.d": "Dades, documentació i preferències abans de l'arribada. Adeu a les cues.",
    "s4.t": "Gestió de ressenyes",
    "s4.d": "Respostes personalitzades a Google, Booking i TripAdvisor, amb alertes.",
    "s5.t": "Upselling intel·ligent",
    "s5.d": "Upgrades, late check-out, spa o trasllats en el moment just.",
    "s6.t": "Agent de veu",
    "s6.d": "Atén trucades de reserves i consultes freqüents amb veu natural i passa al teu equip el que és important.",
    "s7.t": "Informes per a direcció",
    "s7.d": "Ocupació, ingressos per canal i satisfacció resumits cada matí al teu email o WhatsApp.",
    "s8.t": "Operacions connectades",
    "s8.d": "Housekeeping, manteniment i F&amp;B reben les tasques a l'instant des del PMS o del mateix hoste.",
    "s9.t": "Email màrqueting i fidelització",
    "s9.d": "Campanyes post-estada, aniversaris i recuperació de reserves abandonades, en pilot automàtic.",

    "how.eyebrow": "Com funciona",
    "how.title": "Un cervell d'IA al centre del teu hotel",
    "how.lead": "Rep tot el que entra pels teus canals, entén què necessita cada hoste i executa l'acció als teus sistemes.",
    "how.calls": "Trucades",
    "how.o1": "Reserva al PMS",
    "how.o2": "Cobrament amb Stripe",
    "how.o3": "Tasca a housekeeping",
    "how.o4": "Avís a l'equip",

    "method.eyebrow": "Mètode VALTEX",
    "method.title": 'De la idea a la IA funcionant <span class="grad">en 4 passos</span>',
    "m1.t": "Auditoria",
    "m1.d": "Analitzem la teva operativa, canals i eines per detectar on es perd temps i diners.",
    "m2.t": "Disseny",
    "m2.d": "Definim els fluxos, el to de la teva marca i les regles de l'agent juntament amb el teu equip.",
    "m3.t": "Implementació",
    "m3.d": "Connectem la IA al teu PMS i canals, i la provem amb casos reals abans del llançament.",
    "m4.t": "Optimització",
    "m4.d": "Mesurem resultats cada mes i ajustem perquè el sistema rendeixi cada vegada millor.",

    "dept.eyebrow": "Per departament",
    "dept.title": "Què guanya cada àrea del teu hotel",
    "dept.t0": "Recepció",
    "dept.t1": "Reserves",
    "dept.t5": "Direcció",
    "p0.t": "Menys trucades repetitives, check-ins més ràpids",
    "p0.1": "Respostes automàtiques a preguntes freqüents",
    "p0.2": "Pre check-in digital amb documentació",
    "p0.3": "Derivació intel·ligent al personal",
    "p1.t": "Cada consulta resposta i convertida",
    "p1.1": "Disponibilitat i preus en temps real",
    "p1.2": "Enllaç de pagament a la mateixa conversa",
    "p1.3": "Seguiment de pressupostos no tancats",
    "p2.t": "Habitacions i peticions sincronitzades",
    "p2.1": "Tasques automàtiques segons els check-outs",
    "p2.2": "Peticions de l'hoste enviades a l'instant",
    "p2.3": "Incidències de manteniment prioritzades",
    "p3.t": "Restaurant i room service sense fricció",
    "p3.1": "Reserves de taula per WhatsApp",
    "p3.2": "Comandes a l'habitació amb carta digital",
    "p3.3": "Avisos d'al·lèrgies i preferències",
    "p4.t": "Campanyes i ressenyes que treballen soles",
    "p4.1": "Emails post-estada personalitzats",
    "p4.2": "Sol·licitud de ressenyes en el millor moment",
    "p4.3": "Recuperació de reserves abandonades",
    "p5.t": "Dades clares per decidir cada dia",
    "p5.1": "Resum diari d'ocupació i ingressos",
    "p5.2": "Alertes de ressenyes negatives",
    "p5.3": "Anàlisi de converses i demanda",

    "why.eyebrow": "Per què VALTEX",
    "why.title": "Especialistes en hotels, no en tot",
    "w1.t": "100% hoteler",
    "w1.d": "Parlem el teu idioma: ocupació, RevPAR, OTA i temporades.",
    "w2.t": "Dades protegides",
    "w2.d": "Sistemes dissenyats segons el RGPD i amb accés restringit.",
    "w3.t": "L'humà té el control",
    "w3.d": "L'agent sap quan ha de passar la conversa al teu equip.",
    "w4.t": "Sense permanència",
    "w4.d": "Treballem per resultats. Si no t'aporta, no et lliguem.",

    "faq.eyebrow": "Preguntes freqüents",
    "faq.title": "Resolem els teus dubtes",
    "faq.lead": 'No trobes la teva resposta? <a href="#contacto" class="link">Escriu-nos</a>.',
    "f1.q": "La IA substitueix el meu personal de recepció?",
    "f1.a": "No. S'encarrega de les tasques repetitives i de les hores en què no hi ha ningú, perquè el teu equip se centri en l'atenció presencial i en els casos que requereixen criteri humà.",
    "f2.q": "Funciona amb el meu PMS?",
    "f2.a": "Treballem amb els PMS més habituals. A l'auditoria revisem el teu sistema i et confirmem quines integracions són possibles.",
    "f3.q": "Quant triga la implementació?",
    "f3.a": "Un primer agent a WhatsApp o web pot estar operatiu en poques setmanes. Els projectes més complets es llancen per fases per veure resultats des del principi.",
    "f4.q": "Què passa si l'agent no sap respondre?",
    "f4.a": "Deriva la conversa al teu equip amb tot el context, pel canal que prefereixis, perquè ningú hagi de repetir res.",
    "f5.q": "És segur per a les dades dels meus hostes?",
    "f5.a": "Dissenyem cada sistema seguint el RGPD, amb accessos limitats i proveïdors que ofereixen garanties de protecció de dades.",
    "f6.q": "Serveix per a hotels petits?",
    "f6.a": "Sí. Adaptem l'abast a la mida de l'establiment, des d'hotels boutique i apartaments turístics fins a cadenes.",

    "cta.eyebrow": "Auditoria gratuïta · 30 min",
    "cta.title": 'A punt perquè el teu hotel treballi <span class="grad">en pilot automàtic</span>?',
    "cta.lead": "Et mostrem quins processos del teu hotel pots automatitzar primer i quant de temps recuperaria el teu equip.",
    "cta.l1": "Sense compromís",
    "cta.l2": "Resposta en menys de 24 h",
    "cta.l3": "Proposta adaptada al teu hotel",
    "form.name": "Nom",
    "form.hotel": "Hotel",
    "form.phone": "Telèfon",
    "form.msg": "Què t'agradaria automatitzar?",
    "form.privacy": "Accepto la política de privacitat",
    "form.submit": "Vull la meva auditoria",
    "form.ok": "Gràcies! Et contactarem en menys de 24 h.",

    "form.error": 'No s\'ha pogut enviar. Escriu-nos a <a href="mailto:info@valtex.agency">info@valtex.agency</a> o truca\'ns al <a href="tel:+34665080707">+34 665 080 707</a>.',
    "footer.talk": "Parlem",
    "footer.write": "Escriu-nos",
    "footer.call": "Truca'ns",
    "footer.tagline": "Automatització amb IA per a hotels.",
    "footer.nav": "Navegació",
    "footer.contact": "Contacte",
    "footer.legal": "Avís legal",
    "footer.privacy": "Privacitat",
    "footer.rights": "Tots els drets reservats.",
  },

  en: {
    "meta.title": "VALTEX | AI Automation for Hotels",
    "meta.desc": "VALTEX is the agency specialised in AI automation for hotels: 24/7 reception, direct bookings, reviews, upselling and operations connected to your PMS.",

    "nav.services": "Services",
    "nav.how": "How it works",
    "nav.method": "Method",
    "nav.areas": "Departments",
    "nav.cta": "Free audit",

    "hero.pillTag": "New",
    "hero.pill": "Voice agents for your front desk",
    "hero.title": 'Your hotel answers, sells and runs itself <em class="grad">24/7.</em>',
    "hero.lead": "AI agents and automations connected to your PMS, WhatsApp and sales channels. Your team stops doing repetitive tasks and focuses on what matters: the guest.",
    "hero.cta1": "Get a free audit",
    "hero.cta2": "See how it works",
    "hero.live": "● Live",

    "chat.m1": "Hi! Do you have a double room from 12 to 14 October? 🌊",
    "chat.m2": "Yes! The Deluxe Sea View is available for 2 nights at €148/night, breakfast included. Shall I book it for you?",
    "chat.m3": "Perfect, go ahead!",
    "chat.sys": "✓ Booking created in PMS &nbsp;·&nbsp; ✓ Payment link sent &nbsp;·&nbsp; ✓ Housekeeping notified",

    "fc.response": "Average response",
    "fc.direct": "Direct booking",
    "fc.noFee": "Zero commission",
    "fc.lang": "Language detected",
    "fc.langValue": "English",

    "stats.s1": "guest support, even in the middle of the night",
    "stats.s2": "response time on WhatsApp and web",
    "stats.s3": "languages handled by the same agent",
    "stats.s4": "unanswered enquiries after hours",

    "marquee.title": "We connect with the tools you already use",

    "manifesto.eyebrow": "The problem",
    "manifesto.text": "Every unanswered message is a booking that goes to another hotel. A swamped front desk, emails left until tomorrow and OTA commissions eating into your margin. AI doesn't replace your team: it gives them their time back.",

    "compare.badTitle": "Without automation",
    "compare.b1": "Lost night-time enquiries",
    "compare.b2": "OTA bookings with commission",
    "compare.b3": "Upselling only when there's time",
    "compare.b4": "Unanswered reviews",
    "compare.goodTitle": 'With <span class="grad">VALTEX</span>',
    "compare.g1": "Instant replies in any language",
    "compare.g2": "More direct sales from web and WhatsApp",
    "compare.g3": "Upgrades and extras offered to every guest",
    "compare.g4": "Online reputation managed daily",

    "services.eyebrow": "Services",
    "services.title": "Automations built for hotel operations",
    "s1.t": "24/7 AI Concierge",
    "s1.d": "An agent on WhatsApp, web and email that answers questions, recommends and books in the guest's language.",
    "s1.q": "What time is breakfast?",
    "s1.a": "From 7:30 to 11:00 on the terrace ☀️ Shall I book you a table?",
    "s2.t": "Direct sales engine",
    "s2.d": "Turns conversations into bookings with a payment link, no OTAs.",
    "s3.t": "Automated pre check-in",
    "s3.d": "Details, documents and preferences before arrival. No more queues.",
    "s4.t": "Review management",
    "s4.d": "Personalised replies on Google, Booking and TripAdvisor, with alerts.",
    "s5.t": "Smart upselling",
    "s5.d": "Upgrades, late check-out, spa or transfers at exactly the right moment.",
    "s6.t": "Voice agent",
    "s6.d": "Handles booking calls and frequent questions with a natural voice and passes what matters to your team.",
    "s7.t": "Management reports",
    "s7.d": "Occupancy, revenue by channel and satisfaction summarised every morning by email or WhatsApp.",
    "s8.t": "Connected operations",
    "s8.d": "Housekeeping, maintenance and F&amp;B get tasks instantly from the PMS or the guest.",
    "s9.t": "Email marketing & loyalty",
    "s9.d": "Post-stay campaigns, birthdays and abandoned booking recovery, on autopilot.",

    "how.eyebrow": "How it works",
    "how.title": "An AI brain at the heart of your hotel",
    "how.lead": "It receives everything coming in through your channels, understands what each guest needs and takes action in your systems.",
    "how.calls": "Calls",
    "how.o1": "Booking in PMS",
    "how.o2": "Payment via Stripe",
    "how.o3": "Housekeeping task",
    "how.o4": "Team alert",

    "method.eyebrow": "The VALTEX method",
    "method.title": 'From idea to working AI <span class="grad">in 4 steps</span>',
    "m1.t": "Audit",
    "m1.d": "We analyse your operations, channels and tools to find where time and money are being lost.",
    "m2.t": "Design",
    "m2.d": "Together with your team, we define the workflows, your brand's tone of voice and the agent's rules.",
    "m3.t": "Implementation",
    "m3.d": "We connect the AI to your PMS and channels, and test it with real cases before launch.",
    "m4.t": "Optimisation",
    "m4.d": "We measure results every month and fine-tune the system so it keeps getting better.",

    "dept.eyebrow": "By department",
    "dept.title": "What each area of your hotel gains",
    "dept.t0": "Front desk",
    "dept.t1": "Reservations",
    "dept.t5": "Management",
    "p0.t": "Fewer repetitive calls, faster check-ins",
    "p0.1": "Automatic answers to frequent questions",
    "p0.2": "Digital pre check-in with documents",
    "p0.3": "Smart hand-off to your staff",
    "p1.t": "Every enquiry answered and converted",
    "p1.1": "Real-time availability and prices",
    "p1.2": "Payment link in the same conversation",
    "p1.3": "Follow-up on open quotes",
    "p2.t": "Rooms and requests in sync",
    "p2.1": "Automatic tasks based on check-outs",
    "p2.2": "Guest requests sent instantly",
    "p2.3": "Prioritised maintenance issues",
    "p3.t": "Restaurant and room service without friction",
    "p3.1": "Table bookings via WhatsApp",
    "p3.2": "In-room orders with a digital menu",
    "p3.3": "Allergy and preference alerts",
    "p4.t": "Campaigns and reviews that run themselves",
    "p4.1": "Personalised post-stay emails",
    "p4.2": "Review requests at the best moment",
    "p4.3": "Abandoned booking recovery",
    "p5.t": "Clear data for everyday decisions",
    "p5.1": "Daily occupancy and revenue summary",
    "p5.2": "Negative review alerts",
    "p5.3": "Conversation and demand analysis",

    "why.eyebrow": "Why VALTEX",
    "why.title": "Hotel specialists, not generalists",
    "w1.t": "100% hospitality",
    "w1.d": "We speak your language: occupancy, RevPAR, OTAs and seasons.",
    "w2.t": "Protected data",
    "w2.d": "Systems designed under GDPR with restricted access.",
    "w3.t": "Humans in control",
    "w3.d": "The agent knows when to hand the conversation to your team.",
    "w4.t": "No lock-in",
    "w4.d": "We work for results. If it doesn't add value, you're free to leave.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Your questions, answered",
    "faq.lead": 'Can\'t find your answer? <a href="#contacto" class="link">Write to us</a>.',
    "f1.q": "Does AI replace my front desk staff?",
    "f1.a": "No. It takes care of repetitive tasks and the hours when nobody is around, so your team can focus on in-person service and cases that need human judgement.",
    "f2.q": "Does it work with my PMS?",
    "f2.a": "We work with the most common PMSs. During the audit we review your system and confirm which integrations are possible.",
    "f3.q": "How long does implementation take?",
    "f3.a": "A first agent on WhatsApp or web can be live within a few weeks. Larger projects are launched in phases so you see results from the start.",
    "f4.q": "What if the agent doesn't know the answer?",
    "f4.a": "It hands the conversation to your team with the full context, on your preferred channel, so nobody has to repeat anything.",
    "f5.q": "Is my guests' data safe?",
    "f5.a": "We design every system following GDPR, with limited access and providers that offer data protection guarantees.",
    "f6.q": "Does it work for small hotels?",
    "f6.a": "Yes. We adapt the scope to the size of the property, from boutique hotels and holiday apartments to chains.",

    "cta.eyebrow": "Free audit · 30 min",
    "cta.title": 'Ready for your hotel to run <span class="grad">on autopilot</span>?',
    "cta.lead": "We'll show you which processes in your hotel to automate first and how much time your team would get back.",
    "cta.l1": "No commitment",
    "cta.l2": "Reply within 24 h",
    "cta.l3": "Proposal tailored to your hotel",
    "form.name": "Name",
    "form.hotel": "Hotel",
    "form.phone": "Phone",
    "form.msg": "What would you like to automate?",
    "form.privacy": "I accept the privacy policy",
    "form.submit": "Get my audit",
    "form.ok": "Thank you! We'll get in touch within 24 h.",

    "form.error": 'Something went wrong. Email us at <a href="mailto:info@valtex.agency">info@valtex.agency</a> or call <a href="tel:+34665080707">+34 665 080 707</a>.',
    "footer.talk": "Let's talk",
    "footer.write": "Email us",
    "footer.call": "Call us",
    "footer.tagline": "AI automation for hotels.",
    "footer.nav": "Navigation",
    "footer.contact": "Contact",
    "footer.legal": "Legal notice",
    "footer.privacy": "Privacy",
    "footer.rights": "All rights reserved.",
  },
};

const LANGS = ["es", "ca", "en"];

function getSavedLang() {
  try {
    const saved = localStorage.getItem("valtex-lang");
    if (LANGS.includes(saved)) return saved;
  } catch (e) {}
  const nav = (navigator.language || "es").toLowerCase();
  if (nav.startsWith("ca")) return "ca";
  if (nav.startsWith("es")) return "es";
  return "en";
}

function applyLang(lang) {
  const dict = TRANSLATIONS[lang];
  if (dict) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value;
    });
    document.title = dict["meta.title"];
    document.querySelector('meta[name="description"]').setAttribute("content", dict["meta.desc"]);
  }
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
  );
}

const currentLang = getSavedLang();
applyLang(currentLang);

// Al cambiar de idioma se recarga la página (sin la pantalla de carga larga)
// para que las animaciones de texto se vuelvan a montar con el nuevo idioma.
document.querySelectorAll(".lang-switch button").forEach((btn) =>
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    if (lang === currentLang) return;
    try { localStorage.setItem("valtex-lang", lang); } catch (e) {}
    try { sessionStorage.setItem("valtex-quick", "1"); } catch (e) {}
    location.reload();
  })
);
