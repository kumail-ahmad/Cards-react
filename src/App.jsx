import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/card";
function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Hello world" desc="i am first" />
        <Card title="Card 2" desc="Second " />
        <Card title="Card 3" desc="Third " />
        <Card title="Card 4" desc="Fourth " />
      </div>
      <Footer />
    </>
  );
}

export default App;
