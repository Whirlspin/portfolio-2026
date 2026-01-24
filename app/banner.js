// app/banner.js
"use client";
import { useEffect, useState } from "react";
import posthog from "posthog-js";

export function Banner() {
  const [consentGiven, setConsentGiven] = useState("");

  useEffect(() => {
    // We want this to only run once the client loads
    // or else it causes a hydration error
    setConsentGiven(posthog.get_explicit_consent_status());
  }, []);

  const handleAcceptCookies = () => {
    posthog.opt_in_capturing();
    setConsentGiven("granted");
  };

  const handleDeclineCookies = () => {
    posthog.opt_out_capturing();
    setConsentGiven("denied");
  };

  return (
    <div className="sticky bottom-4 left-4 z-50 max-w-lg">
      {consentGiven === "pending" && (
        <div className="p-6 bg-stone-50 border border-stone-300 rounded-xl shadow-lg/20">
          <p className="mb-5!">
            I use tracking cookies to understand how you use the website. Please{" "}
            <strong>accept cookies</strong> to help me improve it.
          </p>
          <button
            className="bg-red-700 hover:bg-red-800 text-white px-2 py-2 mr-2 mb-2 rounded cursor-pointer"
            type="button"
            onClick={handleAcceptCookies}
          >
            Accept cookies
          </button>

          <button
            className="bg-white border hover:bg-stone-200 border-stone-500 px-2 py-2 mr-3 rounded cursor-pointer"
            type="button"
            onClick={handleDeclineCookies}
          >
            Decline cookies
          </button>
          <a
            className="underline underline-offset-4 hover:no-underline"
            href="/privacy-policy"
          >
            Privacy policy
          </a>
        </div>
      )}
    </div>
  );
}
