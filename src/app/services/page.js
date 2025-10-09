import Header from "../global-components/Header";
import ContactForm from "../services-components/contact-form";
import Footer from "../global-components/Footer";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-white bg-no-repeat"
        >
            <Header />
            <ContactForm />
            <Footer />
        </main>
    );
}
