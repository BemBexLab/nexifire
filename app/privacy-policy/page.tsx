import Hero from "./components/Hero";
import PrivacyContent from "./components/PrivacyContent";

const page = () => {
    return (
        <section className="bg-white">
            <Hero
                title="Privacy Policy"
                description="At NexiFire, we value your privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or interact with our ecosystem of brands."
            />
            <PrivacyContent />
        </section>
    );
};

export default page;
