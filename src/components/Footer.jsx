import React from "react";

const Footer = () => (
    <footer className="border-t border-slate-800 py-8 text-center text-sm font-medium text-slate-500">
        <p className="mb-2">© {new Date().getFullYear()} Shreyas Shirsawade. Built with React & Tailwind CSS.</p>
        <p className="text-xs">Mumbai, India • (+91) 7350615121</p>
    </footer>
);

export default Footer;
