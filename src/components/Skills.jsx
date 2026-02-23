import React from "react";
import Section from "./Section";

const Skills = () => (
    <Section id="skills" title="Technical Arsenal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                { category: "Core Technologies", skills: "JavaScript, HTML, CSS, Java, TypeScript" },
                { category: "Libraries & Frameworks", skills: "React.js, Redux, Tailwind CSS, Material UI, React Query" },
                { category: "Architecture & Design", skills: "Single Page Applications (SPA), Component-Driven Architecture,Responsive Design" },
                { category: "Databases", skills: "MySQL" },
                { category: "Tools & Platforms", skills: "VS Code, Git, GitHub, Bitbucket, Jira" },
                { category: "Methodologies", skills: "Agile Software Development" }
            ].map((skillBlock, index) => (
                <div key={index} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-slate-50 font-semibold mb-2">{skillBlock.category}</h4>
                    <p className="text-sm leading-relaxed">{skillBlock.skills}</p>
                </div>
            ))}
        </div>
    </Section>
);

export default Skills;
