import "./App.css";
import NewProducts from "./components/NewProducts";

function App() {
  // get data from child to parent
  function printProduct(data) {
    console.log("I am inside App.js Component");
    console.log(data);
  }
  return <NewProducts atul={printProduct} />;
}

export default App;
