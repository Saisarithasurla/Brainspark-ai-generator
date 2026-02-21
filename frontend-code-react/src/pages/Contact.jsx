import React from 'react'
import { useState } from 'react';
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-6 py-16 -mt-16">
      <div className="w-full max-w-4xl  shadow-xl rounded-2xl p-10 grid md:grid-cols-2 gap-10 bg-white/90 backdrop-blur-md
">
        <div className="flex flex-col justify-center">
      <h1 className='text-5xl text-center text-amber-400 font-semibold'>Get In <span className='text-fuchsia-700'>Touch</span></h1>
      <p className=' text-center mt-4  text-gray-600 mb-6'> Have an idea? Want to collaborate? Or just want to say hello?We’d love to hear from you. Let’s build something amazing together.</p>
      <div className="space-y-3 text-gray-600 text-xl">
            <p><strong>Email:</strong> surlasaritha@gmail.com</p>
            <p><strong>Location:</strong> India</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>
    </div>
    <div className="bg-gray-50 rounded-xl p-6 shadow-md">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Enter Name" required className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"/>
              <input type="email"  placeholder="Enter Email" required className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"/>
              <textarea  rows="3" placeholder="Enter Message" required className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" ></textarea>
<button type="submit" className="bg-linear-to-r from-red-800 via-red-600 to-pink-500 text-white text-sm font-semibold py-2 rounded-lg hover:opacity-90 transition">
                Send Message </button>
</form>
          ) : (
            <div className="text-center">
              <h3 className="text-lg font-semibold text-green-600 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600 text-sm">
                Thank you for reaching out to BrainSpark.Within 
              </p>
            </div>
          )}
        </div>

    </div>
    </div>
  )
}export default Contact