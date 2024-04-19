import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../pages/Auth/AuthProvider";
function Header() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-purple-400 via-pink-500  to-red-500 py-4 px-8 text-white">
      <div className="flex items-center">
        <h1>
          <Link to="/" className="text-lg font-bold">
            Task Synchronizer
          </Link>
        </h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
