import Header from "./components/Header";
import Product from "./components/Product";
import './App.css'
function App() {
  return (
    <div >
      <Header />
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
