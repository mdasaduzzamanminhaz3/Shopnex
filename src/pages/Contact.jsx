import React, { useState } from 'react';

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for form submission status and messages
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    // ----------------------------------------------------
    // IMPORTANT: Replace this with your actual API endpoint 
    // or email service (e.g., Formspree, EmailJS, AWS Lambda)
    // ----------------------------------------------------
    console.log("Form Data Submitted:", formData);

    try {
        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        
        // On success:
        setStatus('Thank you! Your message has been sent successfully. We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        
        // On failure, you would typically catch an error here:
        // throw new Error("API call failed");

    } catch (error) {
        setStatus('Failed to send message. Please try again later or contact us directly via email.');
        console.log(error);
    }
  };

  return (
    <div className="contact-container p-8 max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          📞 Get In Touch
        </h1>
        <p className="text-xl text-gray-600 mt-2">
          We'd love to hear from you.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Contact Information Column */}
        <section className="lg:col-span-1 space-y-8 p-6 bg-gray-50 rounded-lg shadow-md h-fit">
          <h2 className="text-2xl font-semibold text-pink-700">
            Contact Information
          </h2>
          
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">Our Address</h3>
            <p className="text-gray-600">
              123 Ecom Lane, Suite 400<br />
              Commerce City, CA 90210
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">Email Support</h3>
            <a href="mailto:support@yourecom.com" className="text-pink-600 hover:text-pink-800 transition">
              support@yourecom.com
            </a>
            <p className="text-sm text-gray-500 mt-1">
              We aim to respond within 24 hours.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">Phone</h3>
            <a href="tel:+15551234567" className="text-pink-600 hover:text-pink-800 transition">
              +1 (555) 123-4567
            </a>
            <p className="text-sm text-gray-500 mt-1">
              Available Monday - Friday, 9:00 AM - 5:00 PM (PST)
            </p>
          </div>
          
        </section>

        {/* Contact Form Column */}
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-pink-700">
            Send Us a Message
          </h2>
          
          {status && (
            <div 
              className={`p-4 mb-4 rounded-md ${
                status.includes('successfully') ? 'bg-green-100 text-green-700' : 
                status.includes('Failed') ? 'bg-red-100 text-red-700' : 
                'bg-pink-100 text-pink-700'
              }`}
            >
              {status}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            
            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'Submitting...'}
              className="w-full px-4 py-3 text-lg font-medium text-white bg-pink-600 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 transition duration-150"
            >
              {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
            </button>
            
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;