import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-400  via-pink-500 to-red-500 p-4 text-white flex items-center justify-center">
      <div>
        <p>Task Management &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
