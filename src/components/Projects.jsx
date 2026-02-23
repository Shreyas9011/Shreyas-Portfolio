import React from "react";
import Section from "./Section";

const Projects = () => (
    <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="flex flex-col h-full p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-sm hover:border-emerald-500/50 transition-colors group">
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-500 transition-colors">Real-Time Chat Platform</h4>
                <ul className="list-disc pl-5 space-y-2 mb-8 flex-grow marker:text-slate-600">
                    <li>Built a real-time chat app with React.js and Chat-Engine, featuring a responsive UI for seamless messaging.</li>
                    <li>Enabled private/group chats, user authentication, and real-time updates to deliver a smooth communication experience.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                    {['React.js', 'Chat-Engine', 'JavaScript'].map((tech) => (
                        <span key={tech} className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg">{tech}</span>
                    ))}
                </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col h-full p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-sm hover:border-blue-500/50 transition-colors group">
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">Club Management</h4>
                <ul className="list-disc pl-5 space-y-2 mb-8 flex-grow marker:text-slate-600">
                    <li>Contributed to the development of a club management platform, specifically designing and implementing a robust feature for creating and managing promotional club vouchers.</li>
                    <li>Built modular UI components using modern frontend practices to ensure seamless integration into the larger application ecosystem, optimizing both the user interface and data flow.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                    {['React.js', 'Tailwind CSS', 'JavaScript'].map((tech) => (
                        <span key={tech} className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

export default Projects;
