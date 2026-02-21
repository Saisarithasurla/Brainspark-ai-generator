import React from "react";

function Privacy() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8">
<h1 className="text-4xl font-bold text-center text-green-600 mb-8">Privacy Policy</h1>
<p className="text-gray-700 mb-4">
          At <span className="font-semibold">BrainSpark</span>, your privacy is important to us.
          This policy explains how we handle user information.</p>
<h2 className="text-2xl font-bold mt-6 mb-2 text-orange-600"> 1. Information Collection</h2>
        <p className="text-gray-700">
          BrainSpark does not collect personal information unless voluntarily provided
          (e.g., contact form submissions).</p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-orange-600">
          2. Use of Information
        </h2>
        <p className="text-gray-700">
          Any information provided is used only to improve user experience
          and enhance platform functionality.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-orange-600">
          3. Third-Party Services
        </h2>
        <p className="text-gray-700">
          BrainSpark may use third-party APIs. These services may have their own privacy policies.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-2 text-orange-600">
          4. Data Security
        </h2>
        <p className="text-gray-700">
          We do not sell, trade, or share personal data with third parties.
        </p>
        <p className="text-gray-500 text-sm mt-8 text-center">
          Last Updated: February 2026
        </p>
     </div>
    </div>
  );
}export default Privacy;
