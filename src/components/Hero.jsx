import React from "react";
import profileImage from "../assets/profile.jpg";

const Hero = () => (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
                    React Frontend Developer
                </span>
            </h2>
            <p className="text-lg leading-relaxed mb-8">
                Hello! I'm Shreyas, a passionate Front-End Developer with a knack for transforming complex requirements into intuitive, engaging user interfaces. Over the last 4.6+ years, I have honed my skills in agile environments, utilizing technologies like JavaScript, React.js, Redux, and CSS frameworks to build responsive and scalable applications.
            </p>
            <div className="flex gap-4">
                <a
                    href="#projects"
                    className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                    View Projects
                </a>
                <a
                    href="https://www.linkedin.com/in/shreyas-shirsawade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-slate-900 border border-slate-800 text-white font-medium rounded-xl hover:bg-slate-800 transition-all duration-200"
                >
                    LinkedIn
                </a>
            </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-20 animate-pulse"></div>
                <img
                    src={profileImage}
                    alt="Shreyas Shirsawade"
                    className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl border border-slate-800 shadow-2xl"
                />
            </div>
        </div>
    </section>
);

export default Hero;
