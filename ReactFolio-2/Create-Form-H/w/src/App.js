import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    stateAddress: "",
    city: "",
    state: "",
    zipCode: "",
    comments: "false",
    candidates: "false",
    offers: "false",
    pushNotifications: "",
  });

  console.log(formData);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-center items-center"
    >
      <div>
        <label htmlFore="firstName">First Name:</label>
        <br />

        <input
          className="mx-2 outline"
          type="text"
          name="firstName"
          value={FormData.firstName}
          placeholder="FirstName"
          id="firstName"
          onChange={changeHandler}
        />
        <br />
        <br />
        <label htmlFore="lastName">Last Name:</label>
        <br />
        <input
          className="mx-2 outline"
          type="text"
          name="lastName"
          value={FormData.lastName}
          placeholder="LastName"
          id="lastName"
          onChange={changeHandler}
        />
        <br />
        <br />
        <label htmlFore="email">Email:</label>
        <br />
        <input
          className="mx-2 outline"
          type="text"
          name="email"
          value={FormData.email}
          placeholder="Enter Your Email"
          id="email"
          onChange={changeHandler}
        />
        <br />
        <br />
        <label htmlFore="dropdown">Country:</label>
        <br />
        <select
          name="country"
          value={formData.dropdown}
          id="country"
          onChange={changeHandler}
          className="outline"
        >
          <option value="India "> India</option>
          <option value="Nepal "> Nepal</option>
          <option value="China "> China</option>
          <option value="Bhutan "> Bhutan</option>
        </select>

        <br />
        <br />
        <label htmlFore="stateAddress">Street Address:</label>
        <br />
        <input
          className="mx-2 outline"
          type="text"
          name="stateAddress"
          value={FormData.stateAddress}
          placeholder="LastName"
          id="stateAddress"
          onChange={changeHandler}
        />

        <br />
        <br />
        <label htmlFore="city">City:</label>
        <br />
        <input
          className="mx-2 outline"
          type="text"
          name="city"
          value={FormData.city}
          placeholder="LastName"
          id="city"
          onChange={changeHandler}
        />
        <br />
        <br />
        <label htmlFore="state">State/Province:</label>
        <br />
        <input
          className="mx-2 outline"
          type="text"
          name="state"
          value={FormData.state}
          placeholder="state"
          id="state"
          onChange={changeHandler}
        />

        <br />
        <br />
        <label htmlFore="zipCode">Zip Code:</label>
        <br />
        <input
          className="mx-2 outline"
          type="number"
          name="zipCode"
          value={FormData.zipCode}
          placeholder="zipCode"
          id="zipCode"
          onChange={changeHandler}
        />
        <br />
        <br />
        <fieldset>
          <br />
          <legend>By Email</legend>
          <div>
            <input
              type="checkbox"
              name="comments"
              checked={FormData.comments}
              placeholder="comments"
              id="comments"
              onChange={changeHandler}
            />
            <label htmlFore="comments">Comments:</label>
            <p>Note that the development build is not optimized.</p>

            <br />
            <input
              type="checkbox"
              name="candidates"
              checked={FormData.candidates}
              placeholder="candidates"
              id="candidates"
              onChange={changeHandler}
            />
            <label htmlFore="candidates">Candidates:</label>
            <p>Note that the development build is not optimized.</p>

            <br />
            <input
              type="checkbox"
              name="offers"
              checked={FormData.offers}
              placeholder="offers"
              id="offers"
              onChange={changeHandler}
            />
            <label htmlFore="offers">Offers:</label>
            <p>Note that the development build is not optimized.</p>
          </div>
        </fieldset>

        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <br />
          <input
            type="radio"
            name="pushNotifications"
            id="pushEverything"
            value="everything"
            onChange={changeHandler}
            // checked={formData.everything === "everything"}
          />
          <label htmlFore="pushEverything">Everything:</label>

          <br />
          <input
            type="radio"
            name="pushNotifications"
            id="pushEmail"
            value="Same as email"
            onChange={changeHandler}
            // checked={formData.everything === "everything"}
          />
          <label htmlFore="pushEverything">Same as email:</label>

          <br />
          <input
            type="radio"
            name="pushNotifications"
            id="pushNothing"
            value="No Push Notifications"
            onChange={changeHandler}
            // checked={formData.everything === "everything"}
          />
          <label htmlFore="pushNothing">No Push Notifications:</label>
        </fieldset>
      </div>
      <br />
      <br />
      <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
        Save
      </button>
    </form>
  );
}

export default App;
