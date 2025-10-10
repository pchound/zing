import Header from "../global-components/header";
import ContactForm from "../services-components/contact-form";
import Footer from "../global-components/footer";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-[#000000] bg-no-repeat"
        >
            <Header />
            <ContactForm />
            <Footer />
        </main>
    );
}
