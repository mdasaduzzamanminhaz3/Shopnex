import React from 'react';

const About = () => {
  // Replace placeholders with your actual site data
  const siteName = "NewsIque";
  const yearFounded = "2025";
  const problemSolved = "affordable, high-quality handmade goods";
  const founderName = "Md Asaduzzaman Minhaz"; 

  return (
    <div className="about-us-container p-8 max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          🛍️ About Us: {siteName}
        </h1>
        <p className="text-xl text-gray-600 mt-2">
          More than just a shop—it's a destination.
        </p>
      </header>
      
      {/* Our Story Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-pink-700">
          Our Story: From a Simple Idea to Your Favorite Shop
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Every great journey starts with a simple step. Ours began in **{yearFounded}** when our founder, **{founderName}**, recognized a need for **{problemSolved}**.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-3">
          We started small, built on the principles of **quality, value, and community**. Today, we're proud to be a thriving online destination, helping you discover **unique and exceptional products**.
        </p>
      </section>

      <hr className="my-8" />

      {/* Our Mission Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-pink-700">
          Our Mission: More Than Just Transactions
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At {siteName}, we believe shopping should be an **experience**, not just a chore. Our mission is built on three core pillars:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2 ml-4">
          <li>
            **To Curate the Best:** We **meticulously select** every product, focusing on quality and unique design.
          </li>
          <li>
            **To Deliver Value:** We offer our premium products at **fair and accessible prices**.
          </li>
          <li>
            **To Foster Trust:** We commit to transparent practices, secure shopping, and **responsive support**.
          </li>
        </ul>
      </section>

      <hr className="my-8" />

      {/* Why Shop With Us Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-pink-700">
          ✨ Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-pink-600">Quality Guaranteed</h3>
            <p className="text-gray-600">We stand behind the authenticity and craftsmanship of all our hand-picked items.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-pink-600">Friendly Support</h3>
            <p className="text-gray-600">Our customer-first team is here to help you quickly and efficiently.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-pink-600">Secure Shopping</h3>
            <p className="text-gray-600">Enjoy a hassle-free checkout experience with guaranteed data protection.</p>
          </div>
        </div>
      </section>
      
      <hr className="my-8" />

      {/* Call to Action */}
      <footer className="text-center mt-12 p-6 bg-pink-50 rounded-lg">
        <h2 className="text-2xl font-bold text-pink-700 mb-3">
          🤝 Join the {siteName} Family
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for choosing us and being a part of our story.
        </p>
        <div className="space-x-4">
          <a 
            href="/contact" 
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Contact Us
          </a>
          <a 
            href="[Link to Social Media]" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-pink-600 text-pink-600 hover:bg-pink-100 font-bold py-2 px-4 rounded transition duration-300"
          >
            Follow Our Journey
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;