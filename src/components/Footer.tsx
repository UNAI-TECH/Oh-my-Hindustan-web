const footerLinks = [
  {
    title: "Platform",
    links: ["Overview", "Features", "Pricing", "Enterprise"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Community", "Blog"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background/80 py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <span className="text-xl font-extrabold text-background">
              Pulse<span className="text-primary">Hub</span>
            </span>
            <p className="text-sm leading-relaxed text-background/60">
              The modern platform for information that matters.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-background text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/50 hover:text-background transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} PulseHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/40 hover:text-background transition-colors">Twitter</a>
            <a href="#" className="text-sm text-background/40 hover:text-background transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-background/40 hover:text-background transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
