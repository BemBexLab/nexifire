
import Hero from "../privacy-policy/components/Hero";
import TermsContent from "./components/TermsContent";

const page = () => {
  return (
    <section className="bg-white">
      <Hero
        title="Terms and Conditions"
        description="Welcome to NexiFire. By accessing or using our website, you agree to comply with the following terms and conditions."
      />
      <TermsContent />
    </section>
  );
};

export default page;
