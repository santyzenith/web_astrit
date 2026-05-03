"use client";

import { useState, useEffect } from "react";

/* ─── Navigation data ──────────────────────────────────── */
const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Contacto", href: "#contacto" },
];

/* ─── Services data ────────────────────────────────────── */
const services = [
  {
    num: "01",
    title: "Apoyo Emocional al Paciente",
    desc: "Acompañamiento psicológico individual desde el diagnóstico hasta la remisión o cuidados paliativos, fortaleciendo los recursos internos para transitar el proceso oncológico.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Terapia Familiar",
    desc: "Herramientas terapéuticas para que la familia pueda sostener al paciente sin descuidar su propio bienestar emocional durante el proceso oncológico.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Acompañamiento en el Diagnóstico",
    desc: "Intervención psicológica inmediata ante el impacto del diagnóstico oncológico, brindando contención y claridad en un momento de gran vulnerabilidad.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Duelo Oncológico",
    desc: "Proceso terapéutico especializado para elaborar las pérdidas —físicas, funcionales y relacionales— que el cáncer y su tratamiento traen consigo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 21C6 21 10.4 11 19.5 7.5C19.5 7.5 18.9 18 6 21Z" />
        <line x1="6" y1="21" x2="14" y2="12" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Gestión del Estrés y Ansiedad",
    desc: "Técnicas basadas en evidencia científica para reducir el impacto del estrés, la ansiedad y el miedo durante el diagnóstico y el tratamiento.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Grupos de Apoyo",
    desc: "Espacios de encuentro y contención emocional donde pacientes y familias comparten experiencias y construyen una red de soporte mutuo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="12" y1="7" x2="6" y2="17" />
        <line x1="12" y1="7" x2="18" y2="17" />
        <line x1="7" y1="19" x2="17" y2="19" />
      </svg>
    ),
  },
];

/* ─── Component ────────────────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="block">
            <p className="font-display italic text-xl text-charcoal leading-none">
              Atrit Arévalo
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-warm-gray mt-0.5">
              Psicóloga · Psicooncología
            </p>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="font-sans text-sm bg-charcoal text-ivory px-5 py-2.5 rounded-full hover:bg-rose-deep transition-colors duration-300"
            >
              Agenda una consulta
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Menú"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-ivory border-t border-border px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-base text-charcoal"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm bg-charcoal text-ivory px-5 py-3 rounded-full text-center"
            >
              Agenda una consulta
            </a>
          </div>
        )}
      </nav>

      <main>
        {/* ── HERO ────────────────────────────────────────────── */}
        <section id="inicio" className="min-h-screen bg-ivory overflow-hidden pt-20">
          <div className="max-w-6xl mx-auto px-6 min-h-[calc(100vh-5rem)] flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center py-16">
              {/* Left: text */}
              <div className="flex flex-col gap-8">
                <div className="anim-fade-up delay-1">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-8 h-px bg-rose" />
                    <span className="font-sans text-xs uppercase tracking-[0.22em] text-rose">
                      Psicóloga · Psicooncología
                    </span>
                  </div>
                </div>

                <h1 className="anim-fade-up delay-2 font-display italic text-6xl lg:text-7xl xl:text-[5.5rem] text-charcoal leading-[1.05]">
                  Cuidar la mente,
                  <br />
                  <span className="text-rose-deep">acompañar</span>
                  <br />
                  el camino.
                </h1>

                <p className="anim-fade-up delay-3 font-sans text-[15px] text-warm-gray leading-relaxed max-w-md">
                  Acompañamiento psicológico especializado para personas que
                  enfrentan un diagnóstico de cáncer y para sus familias — con
                  presencia, evidencia científica y compasión.
                </p>

                <div className="anim-fade-up delay-4 flex flex-wrap gap-3">
                  <a
                    href="#contacto"
                    className="font-sans text-sm bg-charcoal text-ivory px-7 py-3.5 rounded-full hover:bg-rose-deep transition-colors duration-300"
                  >
                    Agenda una consulta
                  </a>
                  <a
                    href="https://wa.me/593983934337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm border border-charcoal text-charcoal px-7 py-3.5 rounded-full hover:bg-charcoal hover:text-ivory transition-all duration-300 flex items-center gap-2"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>

                <div className="anim-fade-up delay-5 flex flex-wrap gap-2 pt-2 border-t border-border">
                  {[
                    "Psicóloga Clínica",
                    "Mgtr. en Oncología",
                    "Azogues, Ecuador",
                    "Atención online",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[11px] text-warm-gray bg-ivory-dim border border-border px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: photo placeholder */}
              <div className="anim-fade-in delay-3 relative flex justify-center lg:justify-end">
                {/* Organic blush shape behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[420px] rounded-[60%_40%_55%_45%/50%_60%_40%_50%] bg-blush/60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[390px] rounded-[55%_45%_60%_40%/45%_55%_45%_55%] border border-rose/20" />

                {/* Photo container — replace inner div with <Image> when ready */}
                <div className="relative z-10 w-72 lg:w-80 aspect-[4/5] rounded-2xl overflow-hidden border border-border/60 shadow-xl">
                  <div className="size-full bg-gradient-to-b from-blush/40 via-ivory-dim to-blush/20 flex flex-col items-center justify-center gap-5">
                    <span className="font-display italic text-[6.5rem] text-rose/35 leading-none select-none">
                      AA
                    </span>
                    <div className="text-center px-6">
                      <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-warm-gray/60">
                        Tu fotografía aquí
                      </p>
                      <p className="font-sans text-[10px] text-warm-gray/40 mt-1.5">
                        Medidas recomendadas: 400 × 500 px
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="anim-fade-in delay-6 hidden lg:flex justify-center pb-8">
              <div className="flex flex-col items-center gap-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray/40">
                  Explorar
                </span>
                <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ───────────────────────────────────────────── */}
        <section id="sobre-mi" className="py-24 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: credentials card */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -top-8 -left-4 font-display italic text-[9rem] text-rose/7 leading-none select-none pointer-events-none">
                  A
                </div>
                <div className="relative z-10 bg-ivory-dim rounded-2xl p-10 border border-border">
                  <p className="font-sans text-xs uppercase tracking-[0.22em] text-rose mb-7">
                    Formación y alcance
                  </p>
                  <div className="flex flex-col gap-6">
                    {[
                      { label: "Psicóloga Clínica", sub: "Titulación universitaria" },
                      { label: "Mgtr. en Oncología", sub: "Maestría especializada" },
                      { label: "Psicooncología", sub: "Subespecialidad clínica" },
                      { label: "Azogues · Ecuador", sub: "Atención presencial y online" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="mt-1.5 size-1.5 rounded-full bg-rose flex-shrink-0" />
                        <div>
                          <p className="font-sans text-sm font-medium text-charcoal">
                            {item.label}
                          </p>
                          <p className="font-sans text-xs text-warm-gray mt-0.5">
                            {item.sub}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: bio */}
              <div className="flex flex-col gap-7 order-1 lg:order-2">
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.22em] text-rose mb-4">
                    Sobre mí
                  </p>
                  <h2 className="font-display italic text-4xl lg:text-5xl text-charcoal leading-tight">
                    Atrit Arévalo
                    <br />
                    <span className="text-warm-gray/50">Sarmiento</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-4 font-sans text-[15px] text-warm-gray leading-relaxed">
                  <p>
                    Soy psicóloga clínica con maestría en Oncología. Mi vocación
                    nació del convencimiento de que el bienestar emocional no es
                    un complemento del tratamiento médico —es parte fundamental
                    de él.
                  </p>
                  <p>
                    Me especializo en acompañar a personas que enfrentan un
                    diagnóstico de cáncer y a sus familias, trabajando desde un
                    enfoque humanista, compasivo y basado en evidencia
                    científica.
                  </p>
                  <p>
                    Atiendo de forma presencial en Azogues y de manera online
                    para todo Ecuador y el exterior.
                  </p>
                </div>

                <a
                  href="#contacto"
                  className="font-sans text-sm text-rose border border-rose/40 px-6 py-3 rounded-full self-start hover:bg-rose hover:text-white transition-all duration-300"
                >
                  Agenda una primera cita →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT IS PSYCHOONCOLOGY ──────────────────────────── */}
        <section className="py-24 lg:py-32 bg-blush/25">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-rose mb-5">
                La disciplina
              </p>
              <h2 className="font-display italic text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
                ¿Qué es la Psicooncología?
              </h2>
              <p className="font-sans text-[15px] text-warm-gray leading-relaxed">
                La psicooncología estudia y atiende el impacto psicológico del
                cáncer en pacientes y sus familias. Abarca el shock del
                diagnóstico, los efectos emocionales del tratamiento, la
                incertidumbre sobre el futuro y los procesos de duelo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  num: "01",
                  title: "Cuidado integral",
                  desc: "Combina el cuidado físico con el emocional, entendiendo al paciente como una persona completa, no solo como una enfermedad.",
                },
                {
                  num: "02",
                  title: "Evidencia científica",
                  desc: "Técnicas terapéuticas respaldadas por investigación clínica y adaptadas al contexto oncológico específico.",
                },
                {
                  num: "03",
                  title: "Presencia continua",
                  desc: "Acompañamiento en todas las etapas: diagnóstico, tratamiento, supervivencia, remisión y cuidados paliativos.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-white rounded-2xl p-8 border border-border/60"
                >
                  <p className="font-display italic text-5xl text-rose/15 leading-none mb-5">
                    {item.num}
                  </p>
                  <h3 className="font-sans text-sm font-medium text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13px] text-warm-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────── */}
        <section id="servicios" className="py-24 lg:py-32 bg-ivory">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.22em] text-rose mb-4">
                  Servicios
                </p>
                <h2 className="font-display italic text-4xl lg:text-5xl text-charcoal leading-tight">
                  ¿En qué puedo
                  <br />
                  ayudarte?
                </h2>
              </div>
              <p className="font-sans text-[13px] text-warm-gray leading-relaxed max-w-xs">
                Cada proceso es único. Trabajamos juntos desde un espacio
                seguro, sin juicios y con total confidencialidad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div
                  key={s.num}
                  className="group bg-white rounded-2xl p-7 border border-border/60 hover:border-rose/40 hover:shadow-lg transition-all duration-300 flex flex-col gap-5"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-rose">{s.icon}</div>
                    <span className="font-display italic text-4xl text-charcoal/8 group-hover:text-rose/15 transition-colors duration-300 leading-none">
                      {s.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-medium text-charcoal mb-2.5">
                      {s.title}
                    </h3>
                    <p className="font-sans text-[13px] text-warm-gray leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ──────────────────────────────────────── */}
        <section id="enfoque" className="py-24 lg:py-32 bg-charcoal">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-rose mb-10">
              Mi enfoque
            </p>

            <blockquote className="font-display italic text-3xl lg:text-4xl xl:text-5xl text-ivory leading-[1.25] mb-12">
              &ldquo;Mi compromiso es estar presente en los momentos más
              difíciles, ofreciendo un espacio seguro donde el dolor pueda ser
              nombrado, el miedo pueda ser acompañado y la esperanza pueda ser
              cultivada.&rdquo;
            </blockquote>

            <div className="w-10 h-px bg-rose mx-auto mb-10" />

            <p className="font-sans text-[14px] text-ivory/50 leading-relaxed max-w-2xl mx-auto">
              Trabajo desde un enfoque humanista e integrativo, combinando
              técnicas cognitivo-conductuales, mindfulness y terapia narrativa,
              siempre adaptadas a las necesidades individuales de cada paciente
              y su familia.
            </p>

            <div className="mt-14 grid md:grid-cols-3 gap-5">
              {[
                {
                  label: "Humanista",
                  desc: "La persona es el centro, no la enfermedad.",
                },
                {
                  label: "Compasivo",
                  desc: "Presencia plena sin juicios ni respuestas fáciles.",
                },
                {
                  label: "Basado en evidencia",
                  desc: "Técnicas validadas por la investigación clínica.",
                },
              ].map((v) => (
                <div
                  key={v.label}
                  className="border border-ivory/10 rounded-xl p-6 text-left"
                >
                  <div className="size-1.5 rounded-full bg-rose mb-4" />
                  <p className="font-sans text-sm font-medium text-ivory mb-2">
                    {v.label}
                  </p>
                  <p className="font-sans text-[12px] text-ivory/45 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────────────────── */}
        <section id="contacto" className="py-24 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.22em] text-rose mb-4">
                  Contacto
                </p>
                <h2 className="font-display italic text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
                  Da el primer paso.
                  <br />
                  <span className="text-warm-gray/50">Estoy aquí.</span>
                </h2>
                <p className="font-sans text-[15px] text-warm-gray leading-relaxed max-w-md">
                  Si tú o alguien que quieres está atravesando un proceso
                  oncológico, no tienes que hacerlo solo/a. Escríbeme para
                  coordinar una primera consulta, sin compromiso.
                </p>
              </div>

              {/* Contact card */}
              <div className="bg-ivory-dim rounded-2xl p-8 border border-border flex flex-col gap-6">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-warm-gray">
                  Información de contacto
                </p>

                <div className="flex flex-col gap-5">
                  <a
                    href="mailto:astrit19998@hotmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="size-10 rounded-xl bg-white border border-border flex items-center justify-center text-rose flex-shrink-0 group-hover:bg-rose group-hover:text-white transition-all duration-300">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-warm-gray/60 mb-0.5">
                        Email
                      </p>
                      <p className="font-sans text-sm text-charcoal group-hover:text-rose transition-colors duration-200">
                        astrit19998@hotmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/593983934337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="size-10 rounded-xl bg-white border border-border flex items-center justify-center text-rose flex-shrink-0 group-hover:bg-rose group-hover:text-white transition-all duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-warm-gray/60 mb-0.5">
                        WhatsApp / Celular
                      </p>
                      <p className="font-sans text-sm text-charcoal group-hover:text-rose transition-colors duration-200">
                        +593 98 393 4337
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-white border border-border flex items-center justify-center text-rose flex-shrink-0">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-warm-gray/60 mb-0.5">
                        Ubicación
                      </p>
                      <p className="font-sans text-sm text-charcoal">
                        Azogues, Ecuador
                      </p>
                      <p className="font-sans text-[12px] text-warm-gray/60">
                        Presencial y online
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-warm-gray/60 mb-4">
                    Redes sociales
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="https://www.instagram.com/achy.as9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-sans text-sm text-charcoal border border-border bg-white rounded-full px-4 py-2 hover:border-rose/50 hover:text-rose transition-all duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      @achy.as9
                    </a>
                    <a
                      href="https://www.linkedin.com/in/astrit-ar%C3%A9valo-b697aa184/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-sans text-sm text-charcoal border border-border bg-white rounded-full px-4 py-2 hover:border-rose/50 hover:text-rose transition-all duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="py-8 bg-charcoal border-t border-ivory/8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display italic text-base text-ivory/70">
              Atrit Arévalo Sarmiento
            </p>
            <p className="font-sans text-[11px] text-ivory/30 mt-0.5">
              Psicóloga · Psicooncología · Azogues, Ecuador
            </p>
          </div>
          <p className="font-sans text-[11px] text-ivory/25">
            © {new Date().getFullYear()} · Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
