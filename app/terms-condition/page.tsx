
import PageHero from "@/components/PageHero";
import LazyTermsContent from "./components/LazyTermsContent";

const page = () => {
  return (
    <section className="overflow-x-clip bg-white">
      <PageHero
        title={`Terms and Conditions`}
        description={`Welcome to NexiFire. By accessing or using our website, you agree to comply with the following terms and conditions.`}
      />
      <LazyTermsContent />
    </section>
  );
};

export default page;
