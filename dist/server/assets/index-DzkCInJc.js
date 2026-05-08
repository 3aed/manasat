import { r as reactExports, T as jsxRuntimeExports } from "./server-BN3_8PH1.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const logoImg = "/assets/logo-D69RIXZM.png";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$e = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$e);
const __iconNode$d = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$d);
const __iconNode$c = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$c);
const __iconNode$b = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$b);
const __iconNode$a = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode$a);
const __iconNode$9 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Navbar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-primary transition-colors", children: "خدماتنا" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-primary transition-colors", children: "لماذا منصات" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-primary transition-colors", children: "تواصل معنا" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-bold hover:bg-primary-glow transition-colors", children: "استشارة مجانية" })
  ] }) });
}
function Logo({
  variant = "auto"
}) {
  const [overDark, setOverDark] = reactExports.useState(true);
  const isLight = variant === "light";
  reactExports.useEffect(() => {
    if (isLight) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const els = document.querySelectorAll("[data-nav-theme='dark']");
      let dark = false;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.top <= 32 && r.bottom >= 32) {
          dark = true;
          break;
        }
      }
      setOverDark(dark);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isLight]);
  const markColor = isLight ? "#FFFFFF" : overDark ? "#9DC964" : "#2A4C3C";
  const textColor = isLight ? "#FFFFFF" : overDark ? void 0 : "#2A4C3C";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", onClick: (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, className: "flex items-center gap-2.5", "aria-label": "منصات - الذهاب لأعلى الصفحة", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "block w-10 h-10 transition-colors duration-300", style: {
      backgroundColor: markColor,
      WebkitMaskImage: `url(${logoImg})`,
      maskImage: `url(${logoImg})`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight transition-colors duration-300", style: {
      color: textColor
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-lg", children: "منصات" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-wide opacity-70", children: "MANASSAT" })
    ] })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-nav-theme": "dark", className: "relative pt-32 pb-24 md:pt-40 md:pb-32 bg-hero text-primary-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pattern-arabesque opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-primary-glow/40 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-gold" }),
        "متوافقون مع رؤية المملكة 2030"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.15] mb-6", children: [
        "منصات: شريككم الاستراتيجي",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "لتعزيز أثر ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold-gradient", children: "القطاع غير الربحي" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed", children: "نُمكّن الجمعيات والمنظمات غير الربحية في المملكة من توسيع نطاق وصولها، وتطوير حضورها الرقمي باحترافية، وقياس أثرها بدقة مدفوعة بالبيانات." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-3 rounded-full bg-gold-gradient text-gold-foreground px-8 py-4 font-bold shadow-gold hover:scale-[1.03] active:scale-[0.99] transition-transform", children: [
          "ابدأ رحلة الأثر الآن",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5 group-hover:-translate-x-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-4 font-bold hover:bg-white/10 transition-colors", children: "تعرّف على خدماتنا" })
      ] })
    ] }) })
  ] });
}
function Stats() {
  const items = [{
    value: "+120",
    label: "جمعية ومنظمة"
  }, {
    value: "+450",
    label: "مشروع مُنجَز"
  }, {
    value: "98%",
    label: "رضا الشركاء"
  }, {
    value: "24/7",
    label: "دعم متواصل"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8", children: items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-3xl md:text-4xl text-primary", children: s.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: s.label })
  ] }, s.label)) }) });
}
const services = [{
  icon: ChartColumn,
  title: "قياس الأثر",
  desc: "نُحوّل بيانات مبادراتكم إلى رؤى واضحة وتقارير احترافية تُبرز الأثر الحقيقي وتدعم اتخاذ القرار.",
  points: ["مؤشرات أداء دقيقة", "تقارير أثر معتمدة", "لوحات بيانات تفاعلية"]
}, {
  icon: CodeXml,
  title: "برمجة المنصات",
  desc: "حلول تقنية مُخصّصة للقطاع غير الربحي: منصات تبرّع، أنظمة متطوعين، وبوابات مستفيدين متكاملة.",
  points: ["منصات تبرع آمنة", "أنظمة إدارة المتطوعين", "تكامل مع المنصات الحكومية"]
}, {
  icon: Palette,
  title: "تصاميم السوشيال ميديا",
  desc: "هوية بصرية احترافية ومحتوى رقمي يُعزّز حضوركم ويُلهم جمهوركم على جميع المنصات.",
  points: ["هوية بصرية متكاملة", "محتوى شهري مدروس", "حملات بصرية مؤثرة"]
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "خدماتنا", title: "حلول متكاملة للقطاع غير الربحي", desc: "ثلاث ركائز أساسية صُمِّمت خصيصًا لتُمكّن جمعيتكم من تحقيق أثر مستدام وقابل للقياس." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mt-16", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300", style: {
      animationDelay: `${i * 100}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-8 w-16 h-1 bg-gold-gradient rounded-b-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-7 h-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl mb-3", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: s.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: s.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
      ] }, p)) })
    ] }, s.title)) })
  ] }) });
}
const features = [{
  icon: Target,
  title: "فهم عميق للقطاع السعودي",
  desc: "خبرة ميدانية مع عشرات الجمعيات السعودية، نعرف تحدياتكم التنظيمية والتشغيلية."
}, {
  icon: ShieldCheck,
  title: "متوافقون مع رؤية 2030",
  desc: "حلولنا مُصمّمة لدعم مستهدفات التحول الوطني وتمكين القطاع غير الربحي."
}, {
  icon: Users,
  title: "فريق سعودي متخصص",
  desc: "خبراء في التقنية، التصميم، وتحليل الأثر يفهمون الثقافة المحلية."
}, {
  icon: Star,
  title: "جودة عالمية بلمسة محلية",
  desc: "معايير تنفيذ احترافية مع مراعاة دقيقة للهوية البصرية والثقافية السعودية."
}];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "features", className: "py-24 md:py-32 bg-secondary/40 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -left-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "لماذا منصات", title: "شركاء يفهمون رسالتكم", desc: "نحن لسنا مجرد مزوّد خدمة — نحن امتداد لفريقكم في رحلة بناء أثر مستدام." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 p-7 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 shrink-0 rounded-xl bg-gold-gradient grid place-items-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-6 h-6 text-gold-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg mb-2", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: f.desc })
        ] })
      ] }, f.title)) })
    ] })
  ] });
}
function Contact() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "تواصل معنا", title: "اطلب استشارتك المجانية", desc: "املأ النموذج وسيتواصل معكم فريقنا خلال 24 ساعة لمناقشة احتياجات جمعيتكم.", align: "start" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Phone, label: "الهاتف", value: "‎+966 11 000 0000" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Mail, label: "البريد الإلكتروني", value: "hello@manassat.sa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: MapPin, label: "المقر", value: "الرياض، المملكة العربية السعودية" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
      e.preventDefault();
      setSubmitted(true);
    }, className: "lg:col-span-3 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-soft", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-primary/10 grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl mb-2", children: "شكرًا لتواصلكم" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "سنعود إليكم في أقرب وقت ممكن." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "الاسم الكامل", name: "name", placeholder: "مثال: محمد العتيبي", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "اسم الجمعية", name: "org", placeholder: "جمعية...", icon: Building2, required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "البريد الإلكتروني", name: "email", type: "email", placeholder: "name@example.sa", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "رقم الجوال", name: "phone", type: "tel", placeholder: "‎+966 5X XXX XXXX", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "الخدمة المطلوبة" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full h-12 rounded-xl border border-input bg-background px-4 focus:outline-none focus:ring-2 focus:ring-ring", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "قياس الأثر" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "برمجة المنصات" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "تصاميم السوشيال ميديا" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "باقة متكاملة" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "تفاصيل المشروع" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, placeholder: "حدّثنا قليلاً عن احتياجاتكم...", className: "w-full rounded-xl border border-input bg-background p-4 focus:outline-none focus:ring-2 focus:ring-ring resize-none" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-7 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-4 font-bold hover:bg-primary-glow transition-colors shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
        "إرسال الطلب"
      ] })
    ] }) })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { "data-nav-theme": "dark", className: "bg-primary text-primary-foreground pt-16 pb-8 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pattern-arabesque opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-10 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: "light" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/70 leading-relaxed max-w-md", children: "منصات — وكالة سعودية متخصصة في تمكين القطاع غير الربحي عبر حلول رقمية مدروسة، تصاميم احترافية، وقياس أثر دقيق." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "روابط سريعة", links: ["خدماتنا", "لماذا منصات", "تواصل معنا"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "خدماتنا", links: ["قياس الأثر", "برمجة المنصات", "تصاميم السوشيال ميديا"] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " منصات. جميع الحقوق محفوظة."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-gold" }),
          "صُنع بفخر في المملكة العربية السعودية"
        ] })
      ] })
    ] })
  ] });
}
function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center"
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-start";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-2xl ${alignCls}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold mb-4", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-3xl md:text-5xl leading-tight mb-4", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: desc })
  ] });
}
function ContactItem({
  icon: Icon2,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-4 rounded-xl bg-card border border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-lg bg-primary/10 text-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-5 h-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: value })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  icon: Icon2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      Icon2 && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, placeholder, required, className: `w-full h-12 rounded-xl border border-input bg-background px-4 ${Icon2 ? "pr-10" : ""} focus:outline-none focus:ring-2 focus:ring-ring` })
    ] })
  ] });
}
function FooterCol({
  title,
  links
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold mb-4", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-white/70 text-sm", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition-colors", children: l }) }, l)) })
  ] });
}
export {
  Index as component
};
