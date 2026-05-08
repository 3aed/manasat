import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.png";
import {
  BarChart3,
  Code2,
  Palette,
  ArrowLeft,
  CheckCircle2,
  Target,
  ShieldCheck,
  Sparkles,
  Users,
  Phone,
  Mail,
  MapPin,
  Building2,
  Send,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "منصات | شريككم الاستراتيجي للقطاع غير الربحي" },
      {
        name: "description",
        content:
          "منصات وكالة سعودية متخصصة في تمكين الجمعيات والمنظمات غير الربحية عبر قياس الأثر، برمجة المنصات الرقمية، وتصاميم السوشيال ميديا الاحترافية.",
      },
      { property: "og:title", content: "منصات | شريككم الاستراتيجي للقطاع غير الربحي" },
      {
        property: "og:description",
        content:
          "نُمكّن الجمعيات السعودية من توسيع أثرها عبر حلول رقمية متوافقة مع رؤية 2030.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preload", href: "/fonts/handicrafts-regular.woff2", as: "font", type: "font/woff2", crossOrigin: "" },
      { rel: "preload", href: "/fonts/handicrafts-bold.woff2", as: "font", type: "font/woff2", crossOrigin: "" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-primary transition-colors">خدماتنا</a>
          <a href="#features" className="hover:text-primary transition-colors">لماذا منصات</a>
          <a href="#contact" className="hover:text-primary transition-colors">تواصل معنا</a>
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-bold hover:bg-primary-glow transition-colors"
        >
          استشارة مجانية
        </a>
      </div>
    </header>
  );
}

function Logo({ variant = "auto" }: { variant?: "auto" | "light" }) {
  const [overDark, setOverDark] = useState(true);
  const isLight = variant === "light";

  useEffect(() => {
    if (isLight) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const els = document.querySelectorAll<HTMLElement>("[data-nav-theme='dark']");
      let dark = false;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.top <= 32 && r.bottom >= 32) { dark = true; break; }
      }
      setOverDark(dark);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isLight]);

  const markColor = isLight ? "#FFFFFF" : overDark ? "#9DC964" : "#2A4C3C";
  const textColor = isLight ? "#FFFFFF" : overDark ? undefined : "#2A4C3C";

  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="flex items-center gap-2.5"
      aria-label="منصات - الذهاب لأعلى الصفحة"
    >
      <span
        aria-hidden
        className="block w-10 h-10 transition-colors duration-300"
        style={{
          backgroundColor: markColor,
          WebkitMaskImage: `url(${logoImg})`,
          maskImage: `url(${logoImg})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
      <div className="leading-tight transition-colors duration-300" style={{ color: textColor }}>
        <div className="font-display font-black text-lg">منصات</div>
        <div className="text-[10px] tracking-wide opacity-70">MANASSAT</div>
      </div>
    </a>
  );
}

function Hero() {
  return (
    <section data-nav-theme="dark" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 pattern-arabesque opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-primary-glow/40 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium mb-8">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            متوافقون مع رؤية المملكة 2030
          </div>

          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.15] mb-6">
            منصات: شريككم الاستراتيجي
            <br />
            لتعزيز أثر <span className="text-gold-gradient">القطاع غير الربحي</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            نُمكّن الجمعيات والمنظمات غير الربحية في المملكة من توسيع نطاق وصولها،
            وتطوير حضورها الرقمي باحترافية، وقياس أثرها بدقة مدفوعة بالبيانات.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gold-gradient text-gold-foreground px-8 py-4 font-bold shadow-gold hover:scale-[1.03] active:scale-[0.99] transition-transform"
            >
              ابدأ رحلة الأثر الآن
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-4 font-bold hover:bg-white/10 transition-colors"
            >
              تعرّف على خدماتنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "+120", label: "جمعية ومنظمة" },
    { value: "+450", label: "مشروع مُنجَز" },
    { value: "98%", label: "رضا الشركاء" },
    { value: "24/7", label: "دعم متواصل" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display font-black text-3xl md:text-4xl text-primary">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    icon: BarChart3,
    title: "قياس الأثر",
    desc: "نُحوّل بيانات مبادراتكم إلى رؤى واضحة وتقارير احترافية تُبرز الأثر الحقيقي وتدعم اتخاذ القرار.",
    points: ["مؤشرات أداء دقيقة", "تقارير أثر معتمدة", "لوحات بيانات تفاعلية"],
  },
  {
    icon: Code2,
    title: "برمجة المنصات",
    desc: "حلول تقنية مُخصّصة للقطاع غير الربحي: منصات تبرّع، أنظمة متطوعين، وبوابات مستفيدين متكاملة.",
    points: ["منصات تبرع آمنة", "أنظمة إدارة المتطوعين", "تكامل مع المنصات الحكومية"],
  },
  {
    icon: Palette,
    title: "تصاميم السوشيال ميديا",
    desc: "هوية بصرية احترافية ومحتوى رقمي يُعزّز حضوركم ويُلهم جمهوركم على جميع المنصات.",
    points: ["هوية بصرية متكاملة", "محتوى شهري مدروس", "حملات بصرية مؤثرة"],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="خدماتنا"
          title="حلول متكاملة للقطاع غير الربحي"
          desc="ثلاث ركائز أساسية صُمِّمت خصيصًا لتُمكّن جمعيتكم من تحقيق أثر مستدام وقابل للقياس."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 right-8 w-16 h-1 bg-gold-gradient rounded-b-full" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Target,
    title: "فهم عميق للقطاع السعودي",
    desc: "خبرة ميدانية مع عشرات الجمعيات السعودية، نعرف تحدياتكم التنظيمية والتشغيلية.",
  },
  {
    icon: ShieldCheck,
    title: "متوافقون مع رؤية 2030",
    desc: "حلولنا مُصمّمة لدعم مستهدفات التحول الوطني وتمكين القطاع غير الربحي.",
  },
  {
    icon: Users,
    title: "فريق سعودي متخصص",
    desc: "خبراء في التقنية، التصميم، وتحليل الأثر يفهمون الثقافة المحلية.",
  },
  {
    icon: Star,
    title: "جودة عالمية بلمسة محلية",
    desc: "معايير تنفيذ احترافية مع مراعاة دقيقة للهوية البصرية والثقافية السعودية.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-1/2 -left-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          eyebrow="لماذا منصات"
          title="شركاء يفهمون رسالتكم"
          desc="نحن لسنا مجرد مزوّد خدمة — نحن امتداد لفريقكم في رحلة بناء أثر مستدام."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-5 p-7 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-gold-gradient grid place-items-center shadow-soft">
                <f.icon className="w-6 h-6 text-gold-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="تواصل معنا"
              title="اطلب استشارتك المجانية"
              desc="املأ النموذج وسيتواصل معكم فريقنا خلال 24 ساعة لمناقشة احتياجات جمعيتكم."
              align="start"
            />
            <div className="space-y-4 mt-8">
              <ContactItem icon={Phone} label="الهاتف" value="‎+966 11 000 0000" />
              <ContactItem icon={Mail} label="البريد الإلكتروني" value="hello@manassat.sa" />
              <ContactItem icon={MapPin} label="المقر" value="الرياض، المملكة العربية السعودية" />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-soft"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 grid place-items-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">شكرًا لتواصلكم</h3>
                <p className="text-muted-foreground">سنعود إليكم في أقرب وقت ممكن.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="الاسم الكامل" name="name" placeholder="مثال: محمد العتيبي" required />
                  <Field label="اسم الجمعية" name="org" placeholder="جمعية..." icon={Building2} required />
                  <Field label="البريد الإلكتروني" name="email" type="email" placeholder="name@example.sa" required />
                  <Field label="رقم الجوال" name="phone" type="tel" placeholder="‎+966 5X XXX XXXX" required />
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-medium mb-2">الخدمة المطلوبة</label>
                  <select className="w-full h-12 rounded-xl border border-input bg-background px-4 focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>قياس الأثر</option>
                    <option>برمجة المنصات</option>
                    <option>تصاميم السوشيال ميديا</option>
                    <option>باقة متكاملة</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-medium mb-2">تفاصيل المشروع</label>
                  <textarea
                    rows={4}
                    placeholder="حدّثنا قليلاً عن احتياجاتكم..."
                    className="w-full rounded-xl border border-input bg-background p-4 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-4 font-bold hover:bg-primary-glow transition-colors shadow-soft"
                >
                  <Send className="w-4 h-4" />
                  إرسال الطلب
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer data-nav-theme="dark" className="bg-primary text-primary-foreground pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 pattern-arabesque opacity-40" />
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              منصات — وكالة سعودية متخصصة في تمكين القطاع غير الربحي عبر حلول رقمية
              مدروسة، تصاميم احترافية، وقياس أثر دقيق.
            </p>
          </div>

          <FooterCol title="روابط سريعة" links={["خدماتنا", "لماذا منصات", "تواصل معنا"]} />
          <FooterCol title="خدماتنا" links={["قياس الأثر", "برمجة المنصات", "تصاميم السوشيال ميديا"]} />
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <div>© {new Date().getFullYear()} منصات. جميع الحقوق محفوظة.</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            صُنع بفخر في المملكة العربية السعودية
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- helpers ---------- */

function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  desc: string;
  align?: "center" | "start";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-start";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold mb-4">
        {eyebrow}
      </div>
      <h2 className="font-display font-black text-3xl md:text-5xl leading-tight mb-4">{title}</h2>
      <p className="text-muted-foreground text-lg leading-relaxed">{desc}</p>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
      <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary grid place-items-center">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  icon: Icon,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        )}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`w-full h-12 rounded-xl border border-input bg-background px-4 ${Icon ? "pr-10" : ""} focus:outline-none focus:ring-2 focus:ring-ring`}
        />
      </div>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display font-bold mb-4">{title}</h4>
      <ul className="space-y-2.5 text-white/70 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-gold transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
