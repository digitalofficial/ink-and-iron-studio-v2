import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  ArrowDown,
  Shield,
  CreditCard,
  MessageCircle,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import HorizontalGallery from "@/components/HorizontalGallery";

/* ─── DATA ──────────────────────────────────────────── */

const services = [
  {
    name: "Custom Tattoos",
    desc: "Original designs crafted from your vision. Every piece is one-of-a-kind.",
    size: "bento-large",
    image: "https://images.unsplash.com/photo-1590246815117-a4e636f28ddf?w=800&h=300&fit=crop",
  },
  {
    name: "Cover-Ups",
    desc: "Expert transformations that give old ink new life.",
    size: "",
    image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=200&fit=crop",
  },
  {
    name: "Fine Line & Micro",
    desc: "Delicate precision work. Intricate detail at the smallest scale.",
    size: "",
    image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?w=600&h=200&fit=crop",
  },
  {
    name: "Traditional & Neo-Trad",
    desc: "Bold lines, rich color, timeless style.",
    size: "",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=200&fit=crop",
  },
  {
    name: "Professional Piercing",
    desc: "Sterile technique. Premium jewelry. All placements available.",
    size: "bento-large",
    image: "https://images.unsplash.com/photo-1630993907600-b4a11cd7fa5a?w=800&h=300&fit=crop",
  },
  {
    name: "Touch-Ups",
    desc: "Refresh and restore your existing work.",
    size: "",
    image: "https://images.unsplash.com/photo-1542556398-95fb5b9f9304?w=600&h=200&fit=crop",
  },
];

const artists = [
  {
    name: "Marcus Reyes",
    specialty: "Black & Grey Realism",
    years: 12,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "Elena Voss",
    specialty: "Fine Line & Botanical",
    years: 8,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "Diego Tanaka",
    specialty: "Japanese & Neo-Traditional",
    years: 10,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
  },
];

const marqueeText =
  "EST. 2019  \u00B7  CUSTOM TATTOO  \u00B7  PROFESSIONAL PIERCING  \u00B7  WALK-INS WELCOME  \u00B7  TUCSON AZ  \u00B7  ";

/* ─── PAGE ──────────────────────────────────────────── */

export default function Home() {
  return (
    <main>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Hero background image */}
        <img
          src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1600&h=900&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />

        {/* Subtle top nav bar */}
        <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
          <span className="font-display text-lg tracking-wide text-cream/80">
            Ink & Iron
          </span>
          <a
            href="tel:5205550199"
            className="text-xs uppercase tracking-[0.2em] text-muted hover:text-cream transition-colors"
          >
            (520) 555-0199
          </a>
        </nav>

        {/* Hero content */}
        <div className="relative z-[2] text-center max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block text-[0.65rem] uppercase tracking-[0.4em] text-gold mb-8">
              Tucson, Arizona
            </span>
          </div>

          <h1 className="font-display text-hero font-normal leading-[0.85] mb-8">
            <span className="block">INK</span>
            <span className="block text-cream/20">&</span>
            <span className="block">IRON</span>
          </h1>

          <p className="font-body text-hero-sub text-muted max-w-md mx-auto mb-12 leading-relaxed">
            Custom Tattoo & Piercing Studio
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-crimson hover:bg-crimson/90 text-cream text-xs uppercase tracking-[0.2em] px-10 py-4 transition-all duration-300 hover:translate-y-[-1px]"
            >
              Book a Consultation
            </a>
            <a
              href="tel:5205550199"
              className="border border-border hover:border-cream/30 text-cream/70 hover:text-cream text-xs uppercase tracking-[0.2em] px-10 py-4 transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              (520) 555-0199
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <ArrowDown className="w-4 h-4 text-muted animate-bounce" />
        </div>

        {/* Corner accents */}
        <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-border/40 z-[2]" />
        <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-border/40 z-[2]" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-border/40 z-[2]" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-border/40 z-[2]" />
      </section>

      {/* ═══════════════════ MARQUEE STRIP ═══════════════════ */}
      <div className="border-y border-border overflow-hidden py-4">
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[0.65rem] uppercase tracking-[0.35em] text-muted whitespace-nowrap px-2"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════ SERVICES — BENTO GRID ═══════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" id="services">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold block mb-3">
                  What We Do
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
                  Services
                </h2>
              </div>
              <span className="hidden md:block text-[0.6rem] uppercase tracking-[0.3em] text-muted">
                06 Offerings
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto bento-grid">
          {services.map((service, i) => (
            <ScrollReveal key={service.name} delay={Math.min(i + 1, 5)}>
              <div
                className={`${service.size} h-full bg-smoke border border-border p-8 md:p-10 flex flex-col justify-between group hover:border-cream/10 transition-colors duration-500`}
              >
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <h3 className="font-display text-xl md:text-2xl text-cream">
                      {service.name}
                    </h3>
                    <span className="text-[0.55rem] uppercase tracking-[0.2em] text-muted mt-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed max-w-sm">
                    {service.desc}
                  </p>
                </div>

                {/* Service image */}
                <div className="relative aspect-[16/6] w-full mt-8 rounded-sm overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="section-line" />

      {/* ═══════════════════ PORTFOLIO — HORIZONTAL SCROLL ═══════════════════ */}
      <section className="py-24 md:py-32" id="portfolio">
        <ScrollReveal>
          <div className="px-6 md:px-12 lg:px-20 mb-14">
            <div className="max-w-7xl mx-auto flex items-end justify-between">
              <div>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold block mb-3">
                  Our Work
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
                  Portfolio
                </h2>
              </div>
              <span className="hidden md:block text-[0.6rem] uppercase tracking-[0.3em] text-muted">
                Drag to explore
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <HorizontalGallery />
        </ScrollReveal>
      </section>

      <div className="section-line" />

      {/* ═══════════════════ SPLIT-SCREEN TESTIMONIAL ═══════════════════ */}
      <section className="split-screen" id="testimonial">
        {/* Left — Quote */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 md:py-0">
          <ScrollReveal>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold block mb-10">
              Client Words
            </span>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic leading-snug mb-8 text-cream/90">
              &ldquo;Marcus took my vague idea and turned it into something I
              stare at every single day. The detail in the shading is
              unreal&mdash;this is art on another level.&rdquo;
            </blockquote>
            <div>
              <p className="text-sm text-cream font-body">Sarah M.</p>
              <p className="text-xs text-muted font-body mt-1">
                Full sleeve &mdash; Black & Grey Realism
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right — Image */}
        <div className="relative min-h-[50vh] md:min-h-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&h=1000&fit=crop" alt="Tattoo artist at work" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>

      <div className="section-line" />

      {/* ═══════════════════ ARTISTS ═══════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" id="artists">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold block mb-3">
                The Team
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
                Artists
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {artists.map((artist, i) => (
            <ScrollReveal key={artist.name} delay={Math.min(i + 1, 3)}>
              <div className="group">
                <div className="relative aspect-[3/4] w-full mb-6 overflow-hidden border border-white/[.06] group-hover:border-white/15 transition-colors duration-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={artist.image} alt={artist.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                </div>
                <h3 className="font-display text-xl mb-1">{artist.name}</h3>
                <p className="text-sm text-muted mb-1">{artist.specialty}</p>
                <p className="text-xs text-gold">{artist.years} years experience</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="section-line" />

      {/* ═══════════════════ INFO SECTION ═══════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" id="info">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold block mb-3">
                Visit Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
                Information
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Hours */}
          <ScrollReveal delay={1}>
            <div className="border border-border p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-4 h-4 text-gold" />
                <h3 className="font-display text-lg">Hours</h3>
              </div>
              <div className="space-y-3 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Tuesday &ndash; Friday</span>
                  <span className="text-cream">11am &ndash; 8pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-cream">11am &ndash; 8pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-cream">12pm &ndash; 6pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="text-crimson">Closed</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Location */}
          <ScrollReveal delay={2}>
            <div className="border border-border p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-4 h-4 text-gold" />
                <h3 className="font-display text-lg">Location</h3>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-cream">742 E 6th Street</p>
                <p className="text-cream">Tucson, AZ 85719</p>
                <p className="text-muted mt-4">
                  Located in the heart of the 4th Avenue district.
                  Street parking available.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Policies */}
          <ScrollReveal delay={3}>
            <div className="border border-border p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-4 h-4 text-gold" />
                <h3 className="font-display text-lg">Policies</h3>
              </div>
              <div className="space-y-4 text-sm text-muted">
                <div className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 text-xs">&#9679;</span>
                  <span>Must be 18+ with valid photo ID</span>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                  <span>Non-refundable deposit required to book</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                  <span>Consultations are always free</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-line" />

      {/* ═══════════════════ CONTACT FORM ═══════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" id="contact">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA copy */}
          <ScrollReveal>
            <div>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold block mb-3">
                Get in Touch
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                Start Your
                <br />
                Next Piece
              </h2>
              <p className="text-muted text-sm leading-relaxed max-w-md mb-10">
                Ready to bring your idea to life? Fill out the form and
                we&apos;ll get back to you within 24 hours to schedule your
                free consultation.
              </p>

              <div className="space-y-4 text-sm">
                <a
                  href="tel:5205550199"
                  className="flex items-center gap-3 text-muted hover:text-cream transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  (520) 555-0199
                </a>
                <a
                  href="mailto:hello@inkandironstudio.com"
                  className="flex items-center gap-3 text-muted hover:text-cream transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  hello@inkandironstudio.com
                </a>
                <div className="flex items-center gap-3 text-muted">
                  <MapPin className="w-4 h-4 text-gold" />
                  742 E 6th Street, Tucson, AZ 85719
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo */}
            <div className="md:col-span-2">
              <span className="font-display text-2xl block mb-3">
                Ink & Iron Studio
              </span>
              <p className="text-xs text-muted leading-relaxed max-w-xs">
                Premium custom tattoo and professional piercing studio in the
                heart of Tucson, Arizona.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[0.6rem] uppercase tracking-[0.2em] text-muted mb-4">
                Contact
              </h4>
              <div className="space-y-2 text-sm text-cream/70">
                <p>(520) 555-0199</p>
                <p>hello@inkandironstudio.com</p>
                <p>742 E 6th Street</p>
                <p>Tucson, AZ 85719</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-[0.6rem] uppercase tracking-[0.2em] text-muted mb-4">
                Follow
              </h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-cream/70 hover:text-cream transition-colors block"
                >
                  TikTok
                </a>
                <a
                  href="#"
                  className="text-cream/70 hover:text-cream transition-colors block"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">
              &copy; {new Date().getFullYear()} Ink & Iron Studio. All rights
              reserved.
            </p>
            <p className="text-[0.6rem] uppercase tracking-[0.15em] text-muted/50">
              Designed by Digital Official
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
