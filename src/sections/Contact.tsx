'use client';

import { CircleX, Cross, CrossIcon, EyeClosed } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [send, setSend] = useState('Send Message')
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setSend("Sending...");
    
    const formData = new FormData(event.target);
  
    formData.append("access_key", "8d4a9798-6b50-4e7e-b2d6-55108dd78b15");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());
  
      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Thank you!',
          text: 'Your message has been sent successfully.',
          showConfirmButton: true,
        });
        event.target.reset();
        setSend("Send Message"); // Reset the button text
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
        });
        setSend("Send Message"); // Reset the button text
      }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Unable to send the message. Please check your connection.',
      });
      setSend("Send Message"); // Reset the button text
    }
  };
  
  

  return (
    <div className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-8 px-4">
        Have questions or want to collaborate? Fill out the form, and I’ll get back to you!
      </p>
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        onClick={toggleModal}
      >
        Contact Me
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <button
              className="text-red-600 absolute top-4 right-4 text-xl font-bold"
              onClick={toggleModal}
            >
              <CircleX color='red'/>
            </button>
            <h3 className="text-xl font-bold mb-4 text-blue-500">Contact Form</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-lg text-black"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full p-3 border rounded-lg text-blue-500 font-sans"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition w-full"
              >
                {send}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
