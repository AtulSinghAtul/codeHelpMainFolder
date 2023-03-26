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

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log("printing the form data");
    console.log(formData);
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full" htmlFor="email">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>
      </label>
      <input
        className="bg-richblack-800 rounded-[.5rem] text-richblack-5 w-full p-[12px] border border-gray-600"
        placeholder="Enter Your Email"
        required
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={changeHandler}
      />

      <label className="relative w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          className="bg-richblack-800 rounded-[.5rem] text-richblack-5 w-full p-[12px] border border-gray-600"
          placeholder="Enter Your Password"
          required
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
        />
        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 ml-auto max-w-max ">
            Forget Password
          </p>
        </Link>
      </label>

      <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
