import { siteConfig } from '@/data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="font-display text-xl font-bold gradient-text"
          >
            {siteConfig.name}
          </a>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            © Lakshmi Moksha Boya 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
