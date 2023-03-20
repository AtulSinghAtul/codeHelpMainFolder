import { useState } from "react";
import "./ProductsForm.css";

// function ProductsForm() {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");

//   function titleChangeHandler(event) {
//     // console.log(event);
//     // console.log(event.target.value);
//     setTitle(event.target.value);
//   }

//   function dateChangeHandler(event) {
//     // console.log(event);

//     setDate(event.target.value);
//     console.log(event.target.value);
//     // console.log(title);
//     console.log(date);
//   }

//   return (
//     <form>
//       <div>
//         <label>Title</label>
//         <input type="text" onChange={titleChangeHandler}></input>
//       </div>

//       <div>
//         <label>Date</label>
//         <input
//           type="date"
//           min="2023-01-01"
//           max="2023-12-12"
//           onChange={dateChangeHandler}
//         ></input>
//       </div>

//       <div>
//         <button type="submit">Add Products</button>
//       </div>

//       <p>{title}</p>
//       <p>{date}</p>
//     </form>
//   );
// }

//2:- multiple state handeling using object

// function ProductsForm() {
//   const [productObject, setProductObject] = useState({
//     title: "",
//     date: "",
//   });

//   function titleChangeHandler(event) {
//     setProductObject((preState) => {
//       return { ...preState, title: event.target.value };
//     });
//   }

//   function dateChangeHandler(event) {
//     setProductObject((preState) => {
//       return { ...preState, date: event.target.value };
//     });
//   }

//   return (
//     <form>
//       <div>
//         <label>Title</label>
//         <input type="text" onChange={titleChangeHandler}></input>
//       </div>

//       <div>
//         <label>Date</label>
//         <input
//           type="date"
//           min="2023-01-01"
//           max="2023-12-12"
//           onChange={dateChangeHandler}
//         ></input>
//       </div>

//       <div>
//         <button type="submit">Add Products</button>
//       </div>

//       <p>{productObject.title}</p>
//       <p>{productObject.date}</p>
//     </form>
//   );
// }

//3:- onSubmit props using on form and use preventDefault and create new Object and do empety input field value when object is created

function ProductsForm(props) {
  const [productObject, setProductObject] = useState({
    title: "",
    date: "",
  });

  function titleChangeHandler(event) {
    setProductObject((preState) => {
      return { ...preState, title: event.target.value };
    });
  }

  function dateChangeHandler(event) {
    setProductObject((preState) => {
      return { ...preState, date: event.target.value };
    });
  }
  function submitHandlerForm(event) {
    event.preventDefault();
    const productObj = {
      title: productObject.title,
      date: productObject.date,
    };
    // empety title and date

    props.luta(productObj);

    setProductObject((preState) => {
      return { ...preState, title: "", date: "" };
    });

    // console.log(productObj);
  }

  return (
    <form onSubmit={submitHandlerForm}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={productObject.title} // make input date field empety and show on ui
          onChange={titleChangeHandler}
        ></input>
      </div>

      <div>
        <label>Date</label>
        <input
          type="date"
          min="2023-01-01"
          max="2023-12-12"
          value={productObject.date} // make input date field empety
          onChange={dateChangeHandler}
        ></input>
      </div>

      <div>
        <button type="submit">Add Products</button>
      </div>

      <p>{productObject.title}</p>
      <p>{productObject.date}</p>
    </form>
  );
}

export default ProductsForm;
