import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import useCartContext from "../hooks/useCartContext";

const Navbar = () => {
  const { user, logoutUser } = useAuthContext();
  const { cart } = useCartContext();
  return (
    <div className="navbar shadow-sm sticky top-0 z-50 dark:text-white bg-white/30 backdrop-blur-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="font-bold menu menu-sm dropdown-content dark:text-white bg-white/30 backdrop-blur-sm rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            <Link to='/'>
            <li>
              <a>Home</a>
            </li>
            </Link>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
        <Link to='/'>
        <a className="btn btn-ghost font-bold text-2xl">PhiMart</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl font-semibold px-1">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to="/about">About</Link>

          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <div className="dropdown dropdown-end mr-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cart?.items?.length || 0}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-white/30 backdrop-blur-3xl  z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {cart?.items?.length || 0} Items
                  </span>
                  <span className="text-info">
                    Subtotal: ${cart?.total_price || 0}
                  </span>
                  <div className="card-actions">
                    <Link to="dashboard/cart/">
                      <button className="btn btn-secondary btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="font-bold text-xl  menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="dashboard/profile">
                  <a className="justify-between">
                    Profile
                  </a>
                  </Link>
                </li>
                <li>
              <Link to="/about">About</Link>

                </li>
                <Link to="dashboard">
                <li>
                  <a>Dashboard</a>
                </li>
                </Link>
                <li>
                  <a onClick={logoutUser}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;