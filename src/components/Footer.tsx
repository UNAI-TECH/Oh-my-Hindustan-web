const footerLinks = [
  {
    title: "Product",
    links: ["Overview", "Features", "Pricing", "Changelog", "Enterprise"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Community", "Status", "Support"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground/80 py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <span className="text-xl font-extrabold text-primary-foreground">
              OHH My <span className="text-primary">Hindustan</span>
            </span>
            <p className="text-sm leading-relaxed text-primary-foreground/50">
              The modern platform for building and shipping at scale.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-primary-foreground text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/30">
            © {new Date().getFullYear()} OHH My Hindusthan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/30 hover:text-primary-foreground transition-colors">Twitter</a>
            <a href="#" className="text-sm text-primary-foreground/30 hover:text-primary-foreground transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-primary-foreground/30 hover:text-primary-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
