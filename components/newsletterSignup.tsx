"use client";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  title: any; // Rich text object
  description: string;
  placeholder: string;
  buttonText: string;
  privacyText: string;
};

export default function NewsletterSignup({
  title,
  description,
  placeholder,
  buttonText,
  privacyText,
}: Props) {
  return (
    <section className="w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow-md">
      <div className="text-center mb-6">
        <div className="text-3xl font-bold mb-2 text-gray-800">
          <TinaMarkdown content={title} />
        </div>
        <p className="text-gray-500">{description}</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = (e.currentTarget.email as HTMLInputElement).value;
          const consent = (e.currentTarget.privacy as HTMLInputElement).checked;
          console.log("Email:", email, "| Consent:", consent);
        }}
        className="flex flex-col gap-4"
      >
        <input
          type="email"
          name="email"
          placeholder={placeholder}
          required
          className="px-4 py-2 border border-gray-300 rounded-md"
        />

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" name="privacy" required />
          {privacyText}
        </label>

        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
}
