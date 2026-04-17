import PageHero from "@/components/PageHero";
import LazyPrivacyContent from "./components/LazyPrivacyContent";

const page = () => {
  return (
    <section className="overflow-x-clip bg-white">
      <PageHero
        title={`Privacy Policy`}
        description={`At NexiFire, we value your privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or interact with our ecosystem of brands.`}
      />
      <LazyPrivacyContent />
    </section>
  );
};

export default page;
