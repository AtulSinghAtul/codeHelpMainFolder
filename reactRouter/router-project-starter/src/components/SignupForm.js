import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    event.preventDefault();
    setFormData((prevstate) => {
      return { ...prevstate, [event.target.name]: event.target.value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");

    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
      accountType,
    };
    console.log("printing final data");
    console.log(finalData);

    navigate("/dashboard");
  }

  const [accountType, setAccountType] = useState("student");

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-z-1 my-6 rounded-full max-w-max text-richblack-5">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form
        className="flex flex-col w-full gap-y-4 mt-6"
        onSubmit={submitHandler}
      >
        {/* firstname and lastname */}
        <div className="flex gap-x-2 mt-[20px]">
          <label className="w-full" htmlFor="email">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[.5rem] text-richblack-5 w-full p-[12px] border border-gray-600"
              required
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </label>

          <label className="w-full" htmlFor="email">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[.5rem] text-richblack-5 w-full p-[12px] border border-gray-600"
              required
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </label>
        </div>

        <label className="w-full mt-[20px]" htmlFor="email">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email <sup className="text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-800 rounded-[.5rem] text-richblack-5 w-full p-[12px] border border-gray-600"
            required
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={changeHandler}
            value={formData.email}
          />
        </label>

        <div className="flex gap-x-2 mt-[20px]">
          <label className="relative w-full" htmlFor="email">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[.5rem] text-richblack-5 w-full p-[12px] border border-gray-600"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => {
                return setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative w-full" htmlFor="email">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[.5rem] text-richblack-5 w-full p-[12px] border border-gray-600"
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Chonfirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
            />

            <span
              className="absolute right-3 top-[40px] cursor-pointer"
              onClick={() => {
                return setShowConfirmPassword((prev) => !prev);
              }}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
