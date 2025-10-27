import Header from "../global-components/header";
import ContactForm from "../contact-components/contact-form";
import Footer from "../global-components/footer";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-[#ffffff] bg-no-repeat"
        >
            <Header />
            <ContactForm />
            <Footer />
        </main>
    );
}
