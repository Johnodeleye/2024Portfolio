'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { useState } from 'react';
export const ContactSection = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClick = () => {
    setShowPopup(true);
  };

  const onsubmit = async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8d4a9798-6b50-4e7e-b2d6-55108dd78b15");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      // Swal.fire({
      //   title: "Success!",
      //   text: "Thank you for your message, we'll get back to you",
      //   icon: "success"
      // });
    //   sendEmail();
    console.log('Sent email');
    
    }
  }

  return (
  <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
    <div className='container'> {/**The container makes it comes to the center of the screen */}
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 
    px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
      <div className="absolute inset-0 opacity-5 -z-10" style={{
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
        <div className="fixed z-[90] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-11 mx-auto bg-black shadow-lg shadow-green-600 rounded-md shadow-outline  ">
          <div className="flex justify-center items-center text-center mb-4 z-50 gap-9">
            <h1 className="font-bold text-green-400">Contact Me</h1>

            <button className="text-red-600 font-bold lg:ml-4 tooltip" onClick={() => setShowPopup(false)}>
              ❌
            </button>
          </div>
          <p className="text-sm text-ellipsis text-gray-600 mb-4">Let's Discuss Your next Project and Bring it to Life😎😍</p>
          <form className="flex flex-col gap-2" onSubmit={onsubmit}>
            <input required type="text" name="name" className="border rounded-md p-2 bg-dark-4 lg:w-full sm:w-11/12" placeholder="Enter your name" id="name" />
            <input required type="email" name="email" className="border rounded-md p-2 bg-dark-4 lg:w-full sm:w-11/12" placeholder="Enter your email" id="email" />
            <textarea required name="message" className="border rounded-md p-2 bg-dark-4 lg:w-full text-ellipsis sm:w-11/12" placeholder="Your message...." id="message"></textarea>
            <button type="submit" className="bg-green-400 text-white lg:w-full rounded-md p-2 mt-2 sm:w-11/12">Send {''}{''}</button>
          </form>
        </div>
      )}

      </div>
      </div>
      </div>
    </div>
  </div>
  );
};

