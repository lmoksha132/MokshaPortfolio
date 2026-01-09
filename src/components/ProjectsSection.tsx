import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { projects } from '@/data';
import { SectionBackground } from './SectionBackground';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <SectionBackground />
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Featured Projects
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What I Have <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground">
            A showcase of real-world projects demonstrating practical skills and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-card-elevated group overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon Header */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.gradient}`}>
                <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Project on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
