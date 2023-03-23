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
    mode: "",
    favCar: "",
  });

  // function changeFormHandler(event) {
  //   setFormData((previousState) => {
  //     return {
  //       ...previousState,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  // console.log(formData);

  function changeFormHandler(event) {
    const { value, name, type, checked } = event.target;
    console.log(type);
    console.log(value);
    console.log(name);
    setFormData((previousState) => {
      return {
        ...previousState,
        // learn checkbox value handle
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing all foem data....");
    console.log(formData);
  }

  return (
    <form className="App" onSubmit={submitHandler}>
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
      {/* checkbox state value handel */}
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

      <br />
      <br />
      {/* Radio state value handel */}
      <fieldset>
        <legend>Mode</legend>
        <label htmlFor="mode">Online Mode</label>
        <input
          type="radio"
          id="mode"
          name="mode"
          onChange={changeFormHandler}
          // controlled component
          value="onlineMode"
          checked={formData.mode === "onlineMode"}
        />

        <br />
        <br />
        <label htmlFor="mode">Offline Mode</label>
        <input
          type="radio"
          id="mode"
          name="mode"
          onChange={changeFormHandler}
          // controlled component
          value="offlineMode"
          checked={formData.mode === "offlineMode"}
        />
      </fieldset>

      {/* dropdown state value handel */}

      <select
        name="favCar"
        id="favCar"
        onChange={changeFormHandler}
        value={formData.favCar}
      >
        <option>Select</option>
        <option value="LandRover">LandRover</option>
        <option value="Defender">Defender</option>
        <option value="Legender">Legender</option>
        <option value="Safari">safari</option>
        <option value="Tharrr">Tharrr</option>
      </select>

      {/* handle submit button */}

      {/* <input type="submit" value="submit" /> */}
      <button>Submit</button>
    </form>
  );
}

export default App;
