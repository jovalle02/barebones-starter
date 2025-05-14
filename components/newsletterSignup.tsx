"use client";
import React, { useRef, useState } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import gsap from "gsap";

type Props = {
  title: any;
  description: any;
  placeholder: string;
  buttonText: string;
  privacyText?: string;
};

export default function NewsletterSignup({
  title,
  description,
  placeholder,
  buttonText,
  privacyText,
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputGroupRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Handles form submission with GSAP transition
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const consent = (form.elements.namedItem("privacy") as HTMLInputElement).checked;

    console.log("Email:", email, "| Consent:", consent);

    // Animate form out and success message in
    if (inputGroupRef.current && successRef.current) {
      gsap.to(inputGroupRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        onComplete: () => {
          setSubmitted(true);
          gsap.fromTo(
            successRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });
    }
  };

  return (
    <section className="absolute md:w-[75%] max-w-2xl mx-auto p-10 bg-gray-100 rounded-2xl shadow-xl mt-50">
      {/* Owl mascot */}
      <div className="absolute -top-15 left-6 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 md:-top-31 md:left-6 sm:-top-25 sm:left-10">
        <img
          src="/uploads/OWL.svg"
          alt="Newsletter mascot"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Renders the title, using TinaMarkdown if it's a rich-text object, or fallback to plain text */}
      <div className="text-left mb-6">
        <div className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          {title?.type === "root" ? (
            <TinaMarkdown content={title} />
          ) : (
            <p>{title}</p>
          )}
        </div>
        {/* Renders the description, handling both rich-text and plain string formats */}
        <div className="text-gray-500 text-sm md:text-lg mt-1">
          {description?.type === "root" ? (
            <TinaMarkdown content={description} />
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>

      {/* Signup form */}
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="flex flex-col gap-4"
      >
        <label className="text-sm font-bold text-gray-800" htmlFor="email">
          Email Address
        </label>

        {/* Inputs group (disappears on submit) */}
        <div ref={inputGroupRef} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={placeholder}
            required
            className="w-full px-4 py-3 text-base border border-gray-300 bg-white rounded-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Consent checkbox */}
          {!submitted && (<div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              name="privacy"
              id="privacy"
              required
              className="cursor-pointer mt-1"
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              {privacyText}
            </label>
          </div>
          )}
          {/* Submit button */}
          <button
            type="submit"
            className="cursor-pointer w-full sm:w-[30%] md:w-[25%] mt-2 px-6 py-3 bg-[#032d36] text-white text-sm font-semibold rounded-xl hover:bg-[#054656] transition"
          >
            {buttonText}
          </button>
        </div>

        {/* Success feedback (shown after submission) */}
        <div
          ref={successRef}
          className="absolute pointer-events-none left-0 right-0 mt-4 bg-green-100 text-green-800 px-4 py-3 rounded-xl font-semibold text-center z-10 opacity-0 mx-10 mt-25"
        >
          ✅ Thanks for subscribing!
        </div>
      </form>
    </section>
  );
}
