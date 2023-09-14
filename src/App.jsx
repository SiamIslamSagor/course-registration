import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        {/* <div className="md:flex"> */}
        <div className="flex flex-col md:flex-row">
          <Cards></Cards>
          <Cart></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
