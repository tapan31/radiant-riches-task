import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import RelatedProducts from "./components/RelatedProducts";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Header />
      <div className="m-auto mt-3 max-w-[1000px]  px-6 py-6">
        <MainContent />
        <RelatedProducts />
        <SignUp />
      </div>
      <Footer />
    </>
  );
}

export default App;
