import { Code2, Database, Cpu } from 'lucide-react';
import { aboutData } from '@/data';
import { SectionBackground } from './SectionBackground';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <SectionBackground />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual Element */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-sm mx-auto relative">
              {/* Subtle Background Accent */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />

              {/* Main Card - Cleaner Glassmorphism */}
              <div className="absolute inset-0 rounded-3xl bg-card border border-border shadow-lg flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-display font-bold text-foreground">
                    {aboutData.name}
                  </h3>
                  <div className="h-0.5 w-12 bg-primary mx-auto rounded-full" />
                  <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
                    {aboutData.title}
                  </p>
                </div>
              </div>

              {/* Minimalist Floating Icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center animate-float">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center animate-float delay-200">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute top-1/2 -right-6 w-12 h-12 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center animate-float delay-400">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About Me
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Passionate About Building{' '}
              <span className="gradient-text">Innovative Solutions</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {aboutData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
