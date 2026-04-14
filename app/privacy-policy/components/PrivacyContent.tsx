"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const sections = [
    { id: 'info-collect', title: 'Information We Collect' },
    { id: 'how-use', title: 'How We Use Your Information' },
    { id: 'sharing', title: 'Information Sharing' },
    { id: 'security', title: 'Data Security' },
    { id: 'cookies', title: 'Cookies and Tracking' },
    { id: 'brand-links', title: 'Brand Page Links' },
    { id: 'updates', title: 'Updates to This Policy' },
    { id: 'contact', title: 'Contact' },
];

const PrivacyContent = () => {
    const [activeTab, setActiveTab] = useState('info-collect');

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
            <div className="flex flex-col md:flex-row gap-16">

                {/* --- Sidebar (Table of Contents) --- */}
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

                {/* --- Main Content Area --- */}
                <main className="md:w-3/4 space-y-5 md:space-y-10">

                    <section id="info-collect">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Information We Collect</h2>
                        <div className="text-gray-500 text-sm leading-relaxed space-y-4">
                            <p>
                                We may collect personal information that you voluntarily provide to us, such as your name, email
                                address, phone number, company details, or any information submitted through contact forms,
                                consultation requests, career applications, or other website forms.
                            </p>
                            <p>
                                We may also collect non-personal information such as browser type, device information, IP address,
                                pages visited, and website usage data to help us improve our platform and user experience.
                            </p>
                        </div>
                    </section>

                    <section id="how-use">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">How We Use Your Information</h2>
                        <div className="text-gray-500 text-sm leading-relaxed space-y-4">
                            <p>
                                The information we collect is used to respond to your inquiries, improve our services, manage
                                communication, process applications, and enhance website functionality.
                            </p>
                            <p>
                                We may also use the information for internal analysis, performance monitoring, and to provide
                                updates related to our brands, services, and content where appropriate.
                            </p>
                        </div>
                    </section>

                    <section id="sharing">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Information Sharing</h2>
                        <div className="text-gray-500 text-sm leading-relaxed space-y-4">
                            <p>NexiFire does not sell, trade, or rent your personal information to third parties.</p>
                            <p>
                                However, information may be shared internally within our ecosystem of specialized brands where
                                necessary to better address your inquiry or align you with the appropriate team.
                            </p>
                        </div>
                    </section>

                    <section id="security">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Data Security</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We take reasonable steps to protect your information from unauthorized access, misuse, or
                            disclosure. While no digital platform can guarantee complete security, we are committed to
                            maintaining secure systems and processes.
                        </p>
                    </section>

                    <section id="cookies">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Cookies and Tracking</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our website may use cookies and similar technologies to improve user experience, analyze traffic,
                            and optimize website performance.
                        </p>
                    </section>

                    <section id="brand-links">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Brand Page Links</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our website may contain links to the official pages of brands operating within the NexiFire
                            ecosystem. While these pages are part of our broader network, each brand may maintain its own
                            content, policies, and practices related to its operations.
                        </p>
                    </section>

                    <section id="updates">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Updates to This Policy</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            NexiFire may update this Privacy Policy from time to time. Any changes will be reflected on this page.
                        </p>
                    </section>

                    <section id="contact">
                        <h2 className="text-3xl font-medium text-gray-800 mb-6">Contact</h2>
                        <p className="text-gray-500 text-sm mb-8">
                            If you have any questions regarding this Privacy Policy, please contact us through our official contact page.
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

export default PrivacyContent;