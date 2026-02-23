import React from "react";
import Section from "./Section";

const Education = () => (
    <Section id="education" title="Education & Certifications">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-900/30 text-emerald-400 rounded-xl">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                </div>
                <div>
                    <h4 className="font-bold text-white">Bachelor of Engineering (CSE)</h4>
                    <p className="text-sm mt-1">Walchand Institute of Technology</p>
                    <p className="text-xs font-medium text-slate-500 mt-2">Solapur, Maharashtra • 2017-2020</p>
                </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">Certifications</h4>
                    <ul className="text-sm space-y-2 list-disc pl-5">
                        <li>React 18 Tutorial and Projects Course (Udemy)</li>
                        <li>Cloud Computing Basics (Coursera)</li>
                    </ul>
                </div>
            </div>
        </div>
    </Section>
);

export default Education;
