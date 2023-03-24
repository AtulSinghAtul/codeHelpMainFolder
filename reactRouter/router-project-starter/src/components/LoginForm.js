import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData);

  function changeHandler(event) {
    event.preventDefault();
    const { name, value, type } = event.target;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate("/dashboard");
    toast.success("Logged In");
  }

  function clickHandler() {
    console.log("dashboard");
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">
        <p>
          Email Address<sup>*</sup>
        </p>
      </label>
      <input
        required
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={changeHandler}
      />

      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          required
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <p>Forget Password</p>
        </Link>
      </label>

      <button onClick={clickHandler}>Sign In</button>
    </form>
  );
}

export default LoginForm;
