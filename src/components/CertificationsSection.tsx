import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { certifications } from '@/data';
import { SectionBackground } from './SectionBackground';
import { useState } from 'react';
import { CertificateDialog } from './CertificateDialog';

export const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<{ title: string; link: string } | null>(null);

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <SectionBackground />
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Certifications
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground">
            Industry-recognized certifications demonstrating commitment to professional development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-6">
          {/* Featured Certification */}
          {certifications
            .filter((cert) => cert.featured)
            .map((cert) => (
              <div
                key={cert.title}
                className="glass-card-elevated p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-2xl font-semibold text-foreground">
                          {cert.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                          Featured
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hidden sm:flex"
                        onClick={() => setSelectedCert({ title: cert.title, link: cert.link })}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                    <p className="text-primary font-medium mb-3">{cert.issuer}</p>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap items-center justify-between gap-6">
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-primary" />
                            {skill}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="sm:hidden w-full"
                        onClick={() => setSelectedCert({ title: cert.title, link: cert.link })}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Other Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications
              .filter((cert) => !cert.featured)
              .map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-primary hover:text-primary hover:bg-primary/10"
                    onClick={() => setSelectedCert({ title: cert.title, link: cert.link })}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateDialog
        isOpen={selectedCert !== null}
        onOpenChange={(open) => !open && setSelectedCert(null)}
        title={selectedCert?.title || ''}
        url={selectedCert?.link || ''}
      />
    </section>
  );
};
