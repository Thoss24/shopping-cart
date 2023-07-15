import Header from "./components/ui/Header";
import MainContentWrapper from "./components/ui/MainContentWrapper";
import Footer from "./components/ui/Footer";
import HomeDisplay from "./components/home/home_display/HomeDisplay";
import PageWrapper from "./components/ui/PageWrapper";

function App() {

  return (
 <PageWrapper>
  <Header title={'Home'} tabOne={'Products'} tabTwo={'Contacts'} />
  <MainContentWrapper>
    <HomeDisplay />
  </MainContentWrapper>
  <Footer />
 </PageWrapper>
  );
}

export default App;
