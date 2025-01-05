import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactInfo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_teosz2a',
        'template_wem2mfn',
        form.current,
        'FoEjVdKKyqZh6InyP'
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.log('Error:', error.text);
        }
      );
  };

  return (
    <div className="contact-form bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Contact Us
      </h2>

    

      {/* ফর্ম */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="Your Full Name"
          required
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email Address"
          required
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          name="message"
          placeholder="Type your message here..."
          required
          rows="5"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          Send
        </button>
      </form>
        {/* যোগাযোগের অন্যান্য তথ্য */}
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-8 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reach Us</h3>
        <p className="text-gray-700">
          <strong>Email:</strong>{'jahadhasanrifat@gmail.com'}
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong>{' 01731847198'}
        </p>
        <p className="text-gray-700">
          <strong>WhatsApp:</strong>{' 01731847198'}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactInfo;
