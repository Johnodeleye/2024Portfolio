'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { useState } from 'react';
import Swal from 'sweetalert2';
export const HubPostSection = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClick = () => {
    setShowPopup(true);
  };

  const onSubmit = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8d4a9798-6b50-4e7e-b2d6-55108dd78b15");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      Swal.fire({
        icon:'success',
        title: 'Thank you!',
        text: 'Your message has been sent successfully.',
        showConfirmButton: true,
      });
      event.target.reset();
    }
  };

  return (
  <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
    <div className='container'> {/**The container makes it comes to the center of the screen */}
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 
    px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
      <div className="absolute inset-0 opacity-5 z-10" style={{
        backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
          <div>
    <h2 className='font-serif text-2xl md:text-3xl'>Let's create something amazing together</h2>
    <p className='text-sm mt-2 md:text-base'>
      Ready to bring your next project to life? Let's connect and 
      discuss how i can help you achieve your goals.
    </p>
    </div>
    <div>
    <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border-gray-950" onClick={handlePopupClick}>
      <span className='font-semibold'>Contact Me</span>
      <ArrowUpRightIcon className='size-4'/>
      </button>

            {/* Popup content */}
            {showPopup && (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white rounded-md p-4 md:p-6 lg:p-8 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 z-50 relative">
      <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="Your email" className="p-2 border rounded-md" required name='email'/>
        <input type="text" placeholder="Your name" className="p-2 border rounded-md" required name='Name'/>
        <textarea placeholder="Message" rows={4} className="p-2 border rounded-md" required name='message'></textarea>
        <button type="submit" className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800">Send message</button>
      </form>
      <button className="text-red-600 font-bold absolute top-4 right-4" onClick={() => setShowPopup(false)}>×</button>
    </div>
  </div>
)}

      </div>
      </div>
      </div>
    </div>
  </div>
  );
};

// 'use client'
// import React from "react";

// export const HubPost = () => {
//   const onSubmit = async (event:any) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "8d4a9798-6b50-4e7e-b2d6-55108dd78b15");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//     }
//   };

//   return (
//       <form onSubmit={onSubmit} className="flex flex-col gap-4">
//          <input type="email" placeholder="Your email" className="p-2 border rounded-md" required/>
//          <input type="text" placeholder="Subject" className="p-2 border rounded-md" required/>
//         <textarea name="message"></textarea>
//         <button type="submit">Submit Form</button>
//       </form>

// // <form onSubmit={onSubmit} >
// //
// // 
// // <textarea placeholder="Message" rows={4} className="p-2 border rounded-md" required></textarea>
// // <button type="submit" className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800">Send message</button>
// // </form>
//   );
// }