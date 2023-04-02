// import "./App.css";
// import Item from "./components/Item";
// import ItemDate from "./components/ItemDate";
// import Card from "./components/Card";

//1:- first way passing hard core data
// function App() {
//   return (
//     <div>
//       <Item></Item>
//       <ItemDate></ItemDate>
//       <div className="App">Hello Jee</div>
//     </div>
//   );
// }

// 2:- to use props showing dynamiclly data to UI
// function App() {
//   // dynamically send  data using 2nd way props
//   const itemFirstName = "SurfExcel";
//   const itemFirstDay = "20";
//   const itemFirstMonth = " June";
//   const itemFirstYear = "1998";
//   return (
//     <div>
//       {/* putting dynamically data using property(props) in custom HTML Component */}
//       <Item name={itemFirstName}></Item>
//       <ItemDate
//         day={itemFirstDay}
//         month={itemFirstMonth}
//         year={itemFirstYear}
//       ></ItemDate>
//       {/* putting hard core property(props) in custom HTML Component */}
//       <Item name="Tide"></Item>
//       <ItemDate day="22" month=" July" year="1992"></ItemDate>

//       <Item name="Wheel"></Item>
//       <ItemDate day="24" month=" August" year="3998"></ItemDate>

//       <div className="App">Hello Jee</div>
//     </div>
//   );
// }

//3:- third way making data as like JSON format and then pass data to use props
/////////////////////////////////////
// function App() {
//   const response = [
//     {
//       itemName: "SurfExcel",
//       itemDay: "20 ",
//       itemMonth: "June ",
//       itemYear: "1998",
//     },

//     {
//       itemName: "555 Nirma",
//       itemDay: "24 ",
//       itemMonth: "July ",
//       itemYear: "2000",
//     },

//     {
//       itemName: "Tide",
//       itemDay: "26 ",
//       itemMonth: "August ",
//       itemYear: "2004",
//     },
//   ];
//   return (
//     <div>
//       <Card>
//         <Item name={response[0].itemName}>First Nirma Item</Item>
//         <ItemDate
//           day={response[0].itemDay}
//           month={response[0].itemMonth}
//           year={response[0].itemYear}
//         ></ItemDate>

//         <Item name={response[1].itemName}></Item>
//         <ItemDate
//           day={response[1].itemDay}
//           month={response[1].itemMonth}
//           year={response[1].itemYear}
//         ></ItemDate>

//         <Item name={response[2].itemName}></Item>
//         <ItemDate
//           day={response[2].itemDay}
//           month={response[2].itemMonth}
//           year={response[2].itemYear}
//         ></ItemDate>

//         <div className="App">Hello Jee</div>
//       </Card>
//     </div>
//   );
// }

// //4:- component me content ko likh kar ui par show karana

// // function App() {
// //   return (
// //     <div>
// //       <Item>First Nirma Item</Item>
// //       <ItemDate></ItemDate>
// //       <div className="App">Hello Jee</div>
// //     </div>
// //   );
// // }

// export default App;
////////////////////////////////////////////
//! someone doubt
import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  return (
    <div>
      <Item name="Nirma"></Item>
      <ItemDate day="20" month="June" year="1998"></ItemDate>
      <Item name="Surf-Excel"></Item>
      <ItemDate day="22" month="July" year="1999"></ItemDate>
      <Item name="555"></Item>
      <ItemDate day="25" month="May" year="2000"></ItemDate>
      <div className="App"> Hello Jee</div>
    </div>
  );
}

export default App;
