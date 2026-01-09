import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, ChevronRight, Terminal } from 'lucide-react';
import { siteConfig, skillCategories, projects, certifications, education } from '@/data';

const INITIAL_HISTORY: Array<{ type: 'input' | 'output'; text: string }> = [
    { type: 'output', text: 'Hello! I am Ram AI Bot. 🤖' },
    { type: 'output', text: 'How can I help you explore Lakshmi Moksha\'s portfolio today?' },
    { type: 'output', text: 'Note: Type help to see all available commands.' }
];

export const AIInsights = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; text: string }>>(INITIAL_HISTORY);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = (cmd: string) => {
        // Strip leading slash if present
        const originalInput = cmd.trim();
        const cleanCmd = originalInput.toLowerCase().replace(/^\//, '');

        // Don't log 'clear' as input if we want to keep it clean, or keep it.
        // Usually 'clear' is not logged in terminals after execution, but here we log inputs.
        // If we want to keep initial messages, we can just reset to INITIAL_HISTORY.

        if (cleanCmd === 'clear') {
            setHistory(INITIAL_HISTORY);
            setInput('');
            return;
        }

        setHistory(prev => [...prev, { type: 'input', text: originalInput }]);

        let responses: string[] = [];

        // Handle common greetings
        if (['hi', 'hello', 'hey', 'hii'].includes(cleanCmd)) {
            responses = [
                'Hi there! I\'m Ram AI Bot. I can tell you all about Lakshmi Moksha\'s skills, projects, and certifications.',
                'Try typing "projects" to see the list, or "explain AI Data Insights" for details!'
            ];
        } else if (cleanCmd === 'help') {
            responses = [
                'Available Commands:',
                '• skills - List technical expertise',
                '• projects - Summary of featured work',
                '• cert - Professional certifications',
                '• edu - Academic background',
                '• resume - Get the resume download link',
                '• contact - Social and email links',
                '• about - Identity summary',
                '• explain [name] - Get detailed info on a project or certification',
                '• clear - Reset chat history'
            ];
        } else if (cleanCmd === 'resume') {
            responses = [
                'You can view or download Lakshmi Moksha\'s resume here:',
                `📄 [Download Resume](${siteConfig.resumePath})`
            ];
        } else if (cleanCmd === 'skills') {
            responses = [
                'Technical Expertise:',
                ...skillCategories.map(cat => `• ${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`)
            ];
        } else if (['projects', 'project'].includes(cleanCmd)) {
            responses = [
                'Featured Projects:',
                ...projects.map(p => `• ${p.title}: ${p.techStack.join(', ')}`),
                '\nTip: Type "explain [project name]" for more details!'
            ];
        } else if (['cert', 'certification', 'certifications', 'certificates'].includes(cleanCmd)) {
            responses = [
                'Professional Certifications:',
                ...certifications.map(c => `• ${c.title} (${c.issuer})`),
                '\nTip: Type "explain [certification name]" for more details!'
            ];
        } else if (['edu', 'education'].includes(cleanCmd)) {
            responses = [
                'Academic Background:',
                ...education.map(e => `• ${e.degree} in ${e.field} - ${e.cgpa} (${e.period})`)
            ];
        } else if (cleanCmd === 'contact') {
            responses = [
                'Contact Information:',
                `• Email: ${siteConfig.contactEmail}`,
                `• LinkedIn: ${siteConfig.socials.linkedin}`,
                `• GitHub: ${siteConfig.socials.github}`
            ];
        } else if (cleanCmd === 'about') {
            responses = [
                'About Lakshmi Moksha Boya:',
                `• ${siteConfig.description}`
            ];
        } else {
            // Check for specific project or certification explanation
            const searchTerms = cleanCmd
                .replace(/^explain\b/, '')
                .replace(/^tell me about\b/, '')
                .replace(/^what is\b/, '')
                .replace(/^about\b/, '')
                .trim();

            const projectMatch = projects.find(p =>
                p.title.toLowerCase().includes(searchTerms) ||
                searchTerms.includes(p.title.toLowerCase())
            );

            const certMatch = certifications.find(c =>
                c.title.toLowerCase().includes(searchTerms) ||
                searchTerms.includes(c.title.toLowerCase())
            );

            if (projectMatch) {
                responses = [
                    `Project: ${projectMatch.title}`,
                    `Description: ${projectMatch.description}`,
                    `Tech Stack: ${projectMatch.techStack.join(', ')}`,
                    projectMatch.github ? `GitHub: [${projectMatch.github}](${projectMatch.github})` : ''
                ].filter(Boolean);
            } else if (certMatch) {
                responses = [
                    `Certification: ${certMatch.title}`,
                    `Issuer: ${certMatch.issuer}`,
                    `Description: ${certMatch.description}`,
                    `Skills: ${certMatch.skills.join(', ')}`,
                    certMatch.link ? `View: [Certificate Link](${certMatch.link})` : ''
                ].filter(Boolean);
            } else {
                responses = ["I'm not sure I understand that. Try typing 'help' to see my commands, or ask me to 'explain' a specific project!"];
            }
        }

        responses.forEach(text => {
            setHistory(prev => [...prev, { type: 'output', text }]);
        });
        setInput('');
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform z-[100]"
            >
                <Bot className="w-7 h-7" />
            </button>

            {/* Terminal Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/20 dark:bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="w-[calc(100%-2rem)] sm:w-full max-w-lg bg-[#F8F7FF] dark:bg-black/40 backdrop-blur-xl border border-primary/20 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col max-h-[85vh] h-[450px] shadow-2xl transition-all duration-300">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-primary/10 dark:border-white/10 bg-primary/5 dark:bg-white/5">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-primary">
                                <Bot className="w-4 h-4" />
                                <span>RAM AI BOT</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground dark:text-white/50 dark:hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Logs */}
                        <div className="flex-1 overflow-y-auto p-6 font-mono text-sm space-y-3 custom-scrollbar">
                            {history.map((log, i) => (
                                <div key={i} className={log.type === 'input' ? 'text-primary' : 'text-foreground dark:text-white/90'}>
                                    {log.type === 'input' ? (
                                        <span className="flex items-start gap-1 font-semibold">
                                            <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                                            {log.text}
                                        </span>
                                    ) : (
                                        <div className="pl-5 space-y-1">
                                            {log.text.split('\n').map((line, j) => {
                                                const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                                                const parts = [];
                                                let lastIndex = 0;
                                                let match;

                                                while ((match = linkRegex.exec(line)) !== null) {
                                                    // Add text before the match
                                                    if (match.index > lastIndex) {
                                                        parts.push(line.substring(lastIndex, match.index));
                                                    }
                                                    // Add the link
                                                    parts.push(
                                                        <a
                                                            key={match.index}
                                                            href={match[2]}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary hover:underline underline-offset-4 break-all"
                                                        >
                                                            {match[1]}
                                                        </a>
                                                    );
                                                    lastIndex = linkRegex.lastIndex;
                                                }

                                                // Add remaining text
                                                if (lastIndex < line.length) {
                                                    parts.push(line.substring(lastIndex));
                                                }

                                                return (
                                                    <span key={j} className="block opacity-90 leading-relaxed font-medium dark:font-normal">
                                                        {parts.length > 0 ? parts : line}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-primary/5 dark:bg-white/5 border-t border-primary/10 dark:border-white/10">
                            <div className="flex items-center gap-2 font-mono text-sm bg-white dark:bg-black/20 rounded-lg px-3 py-2 border border-primary/10 dark:border-white/5 shadow-sm">
                                <ChevronRight className="w-4 h-4 text-primary" />
                                <input
                                    autoFocus
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && input) handleCommand(input);
                                    }}
                                    className="bg-transparent border-none outline-none flex-1 text-foreground dark:text-white placeholder:text-muted-foreground/30 dark:placeholder:text-white/20"
                                    placeholder="Type a command..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
