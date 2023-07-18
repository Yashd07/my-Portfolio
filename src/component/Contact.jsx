import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Open Gmail box with pre-filled message
    const emailSubject = 'Contact Form Message';
    const recipientEmail = 'yash123@gmailcom'; // Replace this with your email ID
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div className='text-white'>
      
    <form className="max-w-md mx-auto py-5" onSubmit={handleSubmit}>
        <h1 className='text-center text-[64px]  font-bold'>Contact</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-semibold">
          Message
        </label>
        <textarea
          
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full text-black h-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-semibold text-white border rounded-lg hover:bg-white hover:text-black focus:outline-none"
      >
     Send Message
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
