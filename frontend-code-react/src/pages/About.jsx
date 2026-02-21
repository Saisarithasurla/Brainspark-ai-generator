import React from 'react';

function About() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-20 px-6 md:px-20 bg-linear-to-b from-orange-50 via-white to-rose-50">
      <div className="text-5xl font-bold text-center text-gray-500 mb-6  -mt-14 max-w-3xl">
        About{" "}
        <span className="bg-linear-to-r from-teal-800 via-teal-600 to-emerald-400 bg-clip-text text-transparent">
  BrainSpark
</span>

      </div>
      <div className="text-lg text-center text-gray-700 max-w-2xl mx-auto mt-4 mb-12">
        BrainSpark is a cutting-edge platform designed to transform innovative ideas into actionable solutions. 
        We combine creativity, technology, and AI to help individuals and teams bring their visions to life.
      </div>
      <div className="flex flex-col gap-16 max-w-2xl mx-auto">
        <div id="OurMission" className="text-center">
          <div className="text-3xl font-bold mb-4 bg-linear-to-r from-red-800 via-red-600 to-pink-500 bg-clip-text text-transparent">
            Our Mission
          </div>
          <div className="text-gray-700 text-lg">
            Our mission is to empower creators, developers, and entrepreneurs to quickly prototype and generate solutions from their ideas — making innovation accessible to everyone.
          </div>
        </div>
        <div id="WhatWeOffer" className="text-center">
          <div className="text-3xl font-bold mb-4 bg-linear-to-r from-red-800 via-red-600 to-pink-500 bg-clip-text text-transparent">
            What We Offer
          </div>
          <div className="text-gray-700 text-lg">
            BrainSpark offers AI-powered idea generation, smart solution recommendations, an easy-to-use interface, and fast, efficient outputs for innovators of all levels.
          </div>
        </div>
        <div id="WhyWeBuiltIt" className="text-center">
          <div className="text-3xl font-bold mb-4 bg-linear-to-r from-red-800 via-red-600 to-pink-500 bg-clip-text text-transparent">
            Why We Built It
          </div>
          <div className="text-gray-700 text-lg">
            Many brilliant ideas never get realized due to lack of guidance or resources. BrainSpark bridges this gap, helping innovators turn concepts into reality.
          </div>
        </div>
        <div id="GetStarted" className="text-center">
          <div className="text-3xl font-bold mb-4 bg-linear-to-r from-red-800 via-red-600 to-pink-500 bg-clip-text text-transparent">
            Get Started
          </div>
          <div className="text-gray-700 text-lg">
            Whether you’re a student, entrepreneur, or creative thinker, start turning your ideas into solutions today with BrainSpark!
          </div>
        </div>

      </div>
    </div>
  );
}export default About;
