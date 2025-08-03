import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-montserrat font-bold text-primary-700 mb-6">
        Contact Us
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-montserrat font-semibold text-primary-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-primary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-200"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-montserrat font-semibold text-primary-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-primary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-200"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-montserrat font-semibold text-primary-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-primary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-200"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-montserrat font-semibold text-primary-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-primary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-accent-orange to-accent-pink hover:from-accent-pink hover:to-accent-orange text-white py-3 px-6 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Submit Message
        </button>
      </form>
    </div>
  );
};