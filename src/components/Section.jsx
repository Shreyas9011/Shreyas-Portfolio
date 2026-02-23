import React from "react";

// Reusable Section Component for consistent spacing
const Section = ({ id, title, children }) => (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20">
        {title && (
            <h3 className="text-3xl font-bold mb-10 text-slate-50 tracking-tight">
                {title}
            </h3>
        )}
        {children}
    </section>
);

export default Section;
