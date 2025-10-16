import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactInfo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_teosz2a",
        "template_wem2mfn",
        form.current,
        "FoEjVdKKyqZh6InyP"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="  flex flex-col justify-center items-center bg-[#3b1e4d] min-h-screen"
    >
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-yellow-500 mb-10 text-center">
        Get in Touch
      </h1>

      <div className="w-full max-w-4xl md:flex gap-20">
        {/* Form Section */}
        <div className="flex-1">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-700 p-8 rounded-lg shadow-lg border border-gray-500"
          >
            <label className="block text-gray-200 font-medium mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              required
              className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <label className="block text-gray-200 font-medium mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              required
              className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <label className="block text-gray-200 font-medium mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              required
              rows="5"
              className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex-1 flex flex-col justify-center items-start bg-gray-700 p-8 rounded-lg shadow-lg border border-gray-500">
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
            Contact Info
          </h3>
          <p className="text-lg text-gray-300 mb-2">
            <strong className="text-yellow-500">Phone:</strong> 01731847198
          </p>
          <p className="text-lg text-gray-300">
            <strong className="text-yellow-500">Email:</strong> jahadhasanrifat@gmail.com
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactInfo;
