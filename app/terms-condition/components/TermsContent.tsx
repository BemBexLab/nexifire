"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const sections = [
    { id: 'use-website', title: 'Use of Website' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'information-accuracy', title: 'Information Accuracy' },
    { id: 'ecosystem-brand-links', title: 'Ecosystem Brand Links' },
    { id: 'limitation-of-liability', title: 'Limitation of Liability' },
    { id: 'changes-to-terms', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact' },
];

const TermsContent = () => {
    const [activeTab, setActiveTab] = useState('use-website');

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
            <div className="flex flex-col md:flex-row gap-16">

                <aside className="md:w-1/4 md:sticky md:top-20 md:self-start">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Table Of Content</h2>
                    <div className="flex flex-col space-y-2 md:max-h-[calc(100vh-5rem)] md:overflow-auto">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById(section.id);
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    setActiveTab(section.id);
                                }}
                                className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 border border-transparent
                  ${activeTab === section.id
                                        ? 'bg-[#B24002] text-white shadow-lg shadow-orange-200'
                                        : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-100'
                                    }`}
                            >
                                {section.title}
                            </a>
                        ))}
                    </div>
                </aside>

                <main className="md:w-3/4 space-y-5 md:space-y-10">

                    <section id="use-website">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Use of Website</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            This website is intended to provide information about NexiFire, its ecosystem, brands, and related content. You agree to use this website only for lawful purposes and in a manner that does not disrupt or damage the website or its content.
                        </p>
                    </section>

                    <section id="intellectual-property">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Intellectual Property</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            All content on this website, including text, branding, logos, graphics, design elements, and other materials, is the property of NexiFire unless otherwise stated. No content may be copied, reproduced, distributed, or used without prior written permission.
                        </p>
                    </section>

                    <section id="information-accuracy">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Information Accuracy</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We aim to keep all information accurate and up to date. However, NexiFire does not guarantee that all website content will always be complete, current, or error-free.
                        </p>
                    </section>

                    <section id="ecosystem-brand-links">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Ecosystem Brand Links</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            This website may contain links to the official websites of brands operating within the NexiFire ecosystem. While these brands are part of our broader network, each website may include content, terms, or policies specific to its respective operations.
                        </p>
                    </section>

                    <section id="limitation-of-liability">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Limitation of Liability</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            NexiFire shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to, use of, or inability to use this website or any linked sites, or reliance on information provided on the website.
                        </p>
                    </section>

                    <section id="changes-to-terms">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Changes to Terms</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We reserve the right to update or modify these Terms and Conditions at any time. Continued use of the website after changes indicates acceptance of the revised terms.
                        </p>
                    </section>

                    <section id="contact">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Contact</h2>
                        <p className="text-gray-500 text-sm mb-8">
                            If you have any questions regarding these Terms and Conditions, please contact us through our official contact page.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#B24002] p-2 rounded text-white">
                                    <Phone size={18} />
                                </div>
                                <a href="tel:+14703751520" className="text-sm text-gray-500 hover:underline">(470) 375 - 1520</a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#B24002] p-2 rounded text-white">
                                    <Mail size={18} />
                                </div>
                                <a href="mailto:contact@nexifire.com" className="text-sm text-gray-500 hover:underline">contact@nexifire.com</a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#B24002] p-2 rounded text-white">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-sm text-gray-500 uppercase">2500 Lakeview Pkwy, Alpharetta, GA 30009</span>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default TermsContent;