import { Button } from '@/components/ui/button';
import { Download, FolderOpen } from 'lucide-react';
import { siteConfig } from '@/data';
import { SectionBackground } from './SectionBackground';

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SectionBackground isDynamic={true} />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name */}
          <h1 className="font-display text-2xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up opacity-0 delay-100 tracking-tight whitespace-nowrap">
            {siteConfig.name}
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-8 animate-fade-up opacity-0 delay-200">
            {siteConfig.title}
          </p>

          {/* Summary */}
          <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 delay-300">
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-400">
            <Button size="lg" className="h-12 px-8 text-base shadow-glow hover:shadow-glow/50 transition-all rounded-full min-w-[160px]" asChild>
              <a href={siteConfig.resumePath} download={siteConfig.resumeFileName}>
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5 hover:border-primary/50 rounded-full min-w-[160px]"
              onClick={scrollToProjects}
            >
              <FolderOpen className="mr-2 w-5 h-5" />
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
