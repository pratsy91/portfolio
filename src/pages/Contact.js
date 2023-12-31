import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div>
        <div className="h-screen mt-10 mb-5">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_sSF6EG.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="w-screen flex justify-center">
          <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50">
            <form action="https://formspree.io/f/xyyakqrv" method="POST">
              <h1 className="text-2xl font-semibold">
                Contact me to know more
              </h1>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
              />
              <textarea
                type="text"
                name="message"
                placeholder="Query"
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
              />

              <button
                type="submit"
                className="bg-red-500 rounded text-white px-5 py-1 mt-3"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
