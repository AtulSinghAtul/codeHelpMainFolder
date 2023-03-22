import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstHandler(event) {
  //   setFirstName(event.target.value);
  // }

  // function changeLastHandler(event) {
  //   setLastName(event.target.value);
  // }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
  });

  // function changeFormHandler(event) {
  //   setFormData((previousState) => {
  //     return {
  //       ...previousState,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  console.log(formData);

  function changeFormHandler(event) {
    const { value, name, type, checked } = event.target;
    console.log();
    setFormData((previousState) => {
      return {
        ...previousState,
        // learn checkbox value handle
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="first name"
        name="firstName"
        onChange={changeFormHandler}
        // controlled component
        value={formData.firstName}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="last name"
        name="lastName"
        onChange={changeFormHandler}
        // controlled component
        value={formData.lastName}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={changeFormHandler}
        // controlled component
        value={formData.email}
      />
      <br />
      <br />
      <textarea
        placeholder="enter your comments here"
        name="comments"
        onChange={changeFormHandler}
        // controlled component
        value={formData.comments}
      />

      <br />
      <br />
      <label htmlFor="isVisible">I am Visible ?</label>
      <input
        type="checkbox"
        id="isVisible"
        name="isVisible"
        onChange={changeFormHandler}
        // controlled component
        value={formData.isVisible}
      />
    </div>
  );
}

export default App;
