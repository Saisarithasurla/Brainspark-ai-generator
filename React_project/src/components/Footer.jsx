import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-lg text-center bg-neutral-300 p-4 font-semibold space-y-2">
      
      <p>
        &copy; 2026 BrainSpark - Crafted with 💙 by Saritha
      </p>

      <div className="flex justify-center gap-4 text-base font-medium">
        <Link to="/terms" className="hover:text-indigo-600 transition">
          Terms & Conditions
        </Link>

        <span>|</span>

        <Link to="/privacy" className="hover:text-indigo-600 transition">
          Privacy Policy
        </Link>
      </div>

    </div>
  );
}

export default Footer;
