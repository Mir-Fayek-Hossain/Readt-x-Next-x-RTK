import Footer from "@/components/common/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";
import ContactDetails from "@/components/pages/contact/ContactDetails";
import ContactForm from "@/components/pages/contact/ContactForm";

const Contact = () => {
    return (
        <SmoothScroll>
            <ContactForm />
            <ContactDetails />

            <Footer />
        </SmoothScroll>
    );
};

export default Contact;
