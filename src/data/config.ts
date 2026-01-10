
import { Award, GraduationCap, Briefcase, Lightbulb } from 'lucide-react';
import { Highlight, SiteConfig } from '../types/portfolio';

export const siteConfig: SiteConfig = {
    name: 'Lakshmi Moksha Boya',
    title: 'Aspiring Software Engineer | AI & Data Science',
    subtitle: 'Developer',
    description: 'A driven Computer Science graduate with a strong academic foundation, SAP ABAP Global Certification, and hands-on experience building innovative software and AI-powered solutions.',
    resumeFileName: 'moksha_resume_.pdf',
    resumePath: '/moksha_resume_.pdf',
    contactEmail: 'lakshmimoksha.132@gmail.com',
    socials: {
        linkedin: 'https://www.linkedin.com/in/lakshmi-moksha-boya-77bb9b294/',
        github: 'https://github.com/Moksha-132',
        youtube: 'https://www.youtube.com/@sl_lyricals',
    },
};

export const highlights: Highlight[] = [
    {
        icon: Award,
        title: 'SAP ABAP Global Certified',
        description: 'Enterprise programming expertise',
    },
    {
        icon: GraduationCap,
        title: 'B.Tech CSE (Data Science)',
        description: 'Strong academic foundation',
    },
    {
        icon: Briefcase,
        title: 'Real-World Projects',
        description: 'Practical experience building solutions',
    },
    {
        icon: Lightbulb,
        title: 'Strong Problem-Solving',
        description: 'Analytical and creative thinking',
    },
];
