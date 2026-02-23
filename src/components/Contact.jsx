import React from "react";

const Contact = () => (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h3 className="text-4xl font-extrabold mb-6 text-white">
            Let's Build Something Great Together
        </h3>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-slate-400">
            Actively seeking Front-End Developer opportunities to build responsive, user-centric web applications. My inbox is always open!
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
            <a
                href="mailto:shreyas7350@gmail.com"
                className="px-8 py-3.5 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:-translate-y-0.5 transition-transform"
            >
                Email Me
            </a>
            <a
                href="https://linkedin.com/in/shreyas-shirsawade/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-slate-900 border-2 border-slate-800 text-white font-bold rounded-xl hover:border-emerald-500 hover:-translate-y-0.5 transition-all"
            >
                LinkedIn
            </a>
        </div>
    </section>
);

export default Contact;
