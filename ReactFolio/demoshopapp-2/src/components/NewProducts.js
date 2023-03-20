import ProductsForm from "./ProductsForm";

function NewProducts(props) {
  function product(dataobj) {
    console.log("I am inside NewProducts.js component");
    console.log(dataobj);
    props.atul(dataobj);
  }
  return <ProductsForm luta={product} />;
}

export default NewProducts;
