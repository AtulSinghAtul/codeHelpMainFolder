import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Hom from "./components/Home";
import Bout from "./components/About";
import Port from "./components/Support";
import NoFound from "./components/NotFound";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    // 1:-->
    // <div className="App">
    //   <Routes>
    //     <Route path="/" element={<div>Home Page</div>} />
    //     <Route path="/about" element={<div>About Page</div>} />

    //     <Route path="/support" element={<div>Support Page</div>} />

    //     {/* agar upar k tino path nhi mile to * star wala path chalega */}

    //     <Route path="*" element={<div>Not Found Page</div>} />
    //   </Routes>
    // </div>

    //2-->
    // <div className="App">
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/support">Support</Link>
    //       </li>
    //       <li>
    //         <Link to="*">Not Found</Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<div>Home Page</div>} />
    //     <Route path="/about" element={<div>About Page</div>} />

    //     <Route path="/support" element={<div>Support Page</div>} />

    //     {/* agar upar k tino path nhi mile to * star wala path chalega */}

    //     <Route path="*" element={<div>Not Found Page</div>} />
    //   </Routes>
    // </div>

    // //3---->>>>>/////////////////////////////////////
    // <div className="App">
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/support">Support</Link>
    //       </li>
    //       <li>
    //         <Link to="*">Not Found</Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<Hom />} />
    //     <Route path="/about" element={<Bout />} />

    //     <Route path="/support" element={<Port />} />

    //     {/* agar upar k tino path nhi mile to * star wala path chalega */}

    //     <Route path="*" element={<NoFound />} />
    //   </Routes>
    //</div>

    //4---->>>>>//////////Use NavLink tag////////
    // <div className="App">
    //   <nav>
    //     <ul>
    //       <li>
    //         <NavLink to="/">Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/about">About</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/support">Support</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="*">Not Found</NavLink>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<Hom />} />
    //     <Route path="/about" element={<Bout />} />

    //     <Route path="/support" element={<Port />} />

    //     {/* agar upar k tino path nhi mile to * star wala path chalega */}

    //     <Route path="*" element={<NoFound />} />
    //   </Routes>
    // </div>

    //5:--> Nested Routing
    // <div className="App">
    //   <nav>
    //     <ul>
    //       <li>
    //         <NavLink to="/">Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/about">About</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/support">Support</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="*">Not Found</NavLink>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<MainHeader />} />
    //     {/* Default Route --> <Hom/> */}
    //     <Route index element={<Hom />} />
    //     <Route path="/about" element={<Bout />} />
    //     <Route path="/support" element={<Port />} />
    //     {/* agar upar k tino path nhi mile to * star wala path chalega */}
    //     <Route path="*" element={<NoFound />} />
    //     <Route />
    //   </Routes>
    // </div>

    //6:---> Navigate on defferent page using useNavigate hook

    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="*">Not Found</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />} />
        {/* Default Route --> <Hom/> */}
        <Route index element={<Hom />} />
        <Route path="/about" element={<Bout />} />
        <Route path="/support" element={<Port />} />
        {/* agar upar k tino path nhi mile to * star wala path chalega */}
        <Route path="*" element={<NoFound />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
