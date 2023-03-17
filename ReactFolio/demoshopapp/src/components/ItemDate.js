import "./ItemDate.css";

// first way passing hardcode
// function ItemDate() {
//   return (
//     <div className="date">
//       {/* sending hard core data */}
//       <span>20</span>
//       <span>June</span>
//       <span>1998</span>
//     </div>
//   );
// }

// using props to send dynamically data
function ItemDate(props) {
  return (
    <div className="date">
      <span>{props.day}</span>
      <span>{props.month}</span>
      <span>{props.year}</span>
    </div>
  );
}

export default ItemDate;
