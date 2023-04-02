import "./Item.css";
// first way passing hardcode
// function Item() {
//   return <p className="nirma">Nirma</p>;
// }

// function Item(props) {
//   const itemName = props.name;
//   return <p className="nirma">{itemName}</p>;
// }
//////////////////////////
// function Item(props) {
//   const itemName = props.name;
//   return (
//     <div>
//       <p className="nirma">{itemName}</p>
//       {props.children}
//     </div>
//   );
// }

// export default Item;
///////////////////////////////////
//! someone doubt
import "./Item.css";
function Item(props) {
  const itemName = props.name;
  return <p className="nirma">{itemName}</p>;
}
export default Item;
