import Header from "./components/ui/Header";
import PageWrapper from "./components/ui/PageWrapper";
import MainContentWrapper from "./components/ui/MainContentWrapper";
import Footer from "./components/ui/Footer";
import ContactsDisplay from "./components/contacts/contacts_display/ContactsDisplay";

const Contacts = () => {
    return (
        <PageWrapper>
            <Header title={'Contacts'} tabOne={'Products'} tabTwo={'Home'} />
            <MainContentWrapper />
            <ContactsDisplay />
            <Footer />
        </PageWrapper>
    )
};

export default Contacts;