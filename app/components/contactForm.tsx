"use client";

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "1f441b0e-0267-4b10-bc55-fea188a7d4e9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="w-full bg-white border border-zinc-400 rounded-md p-2 mb-4"
        type="text"
        name="name"
        required
      />
      <input
        className="w-full bg-white border border-zinc-400 rounded-md p-2 mb-4"
        type="email"
        name="email"
        required
      />
      <textarea
        className="w-full bg-white border border-zinc-400 rounded-md p-2 mb-4"
        name="message"
        required
      ></textarea>
      <button
        className="bg-red-700 hover:bg-red-900 transition-colors duration-300 font-semibold w-full border-2 border-red-700 text-white px-4 py-2 rounded-md"
        type="submit"
      >
        Submit Form
      </button>

      <h5 className="text-center uppercase mt-4">{result}</h5>
    </form>
  );
}
