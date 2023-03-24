import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex flex-row justify-around items-center ">
      <Link to="/">
        <img src={logo} width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex flex-row justify-center items-center gap-x-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-row justify-center items-center gap-x-2">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/logout">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
