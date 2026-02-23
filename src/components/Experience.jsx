import React from "react";
import Section from "./Section";

const Experience = () => (
    <Section id="experience" title="Professional Experience">
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-6">
                <div>
                    <h4 className="text-2xl font-bold text-white">Associate System Analyst</h4>
                    <p className="text-emerald-400 font-medium mt-1">TransactBox</p>
                </div>
                <p className="text-sm font-medium text-slate-400 mt-2 md:mt-0 bg-slate-800 px-3 py-1 rounded-full w-fit">
                    Jun 2021 – Present • Mumbai
                </p>
            </div>
            <ul className="space-y-3 list-disc pl-5 leading-relaxed marker:text-emerald-400">
                <li>Led end-to-end development of payment gateway dashboards (Admin, Merchant, and Agent), enhancing system reliability and operational efficiency.</li>
                <li>Actively participated in requirement analysis, design discussions, and code reviews to ensure high-quality software by identifying potential issues early.</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines.</li>
                <li>Developed and implemented a Chargeback Dispute Module, reducing resolution time by 40%.</li>
                <li>Designed and implemented a Role-Based Access Control (RBAC) system via a new Menu Management page for dynamic feature access and real-time security notifications.</li>
                <li>Enhanced Transaction pages with advanced search and filter functionalities, boosting user satisfaction by 60%.</li>
                <li>Enhanced the Web Wallet Application by adding a support ticket system, providing users with a dedicated channel for reporting issues.</li>
            </ul>
        </div>
    </Section>
);

export default Experience;
