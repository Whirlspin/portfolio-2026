import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Footer from "@/app/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy • Jethro Edwards' portfolio website",
  description: "Privacy policy for Jethro Edwards' portfolio website.",
};

export default function privacyPolicy() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/privacy-policy-masthead.webp"
        subheading=""
        heading="Privacy Policy"
      />
      <div className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="Privacy Policy" />

        <p className="mb-5!">
          <strong>Last updated:</strong> January, 2026
        </p>
        <p className="mb-5!">
          Jethro Edwards (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;, or
          &quot;JethroEdwards.com&quot;) operates the website{" "}
          <a href="https://jethroedwards.com">https://jethroedwards.com</a> (the
          &quot;Site&quot;).
        </p>
        <p className="mb-5!">
          This Privacy Policy explains what personal information I collect from
          visitors to the Site, how I use it, who I share it with (if anyone),
          how long I keep it, and what rights you have regarding your data.
        </p>
        <p className="mb-5!">
          I am committed to protecting your privacy in line with applicable data
          protection laws, including the UK GDPR and the Data Protection Act
          2018.
        </p>
        <h3 className="mb-5">1. Information I collect</h3>
        <h4>a) Information you voluntarily provide</h4>
        <p className="mb-0!">
          When you contact me via email, contact form, or any messaging system
          on the Site, I may collect:
        </p>
        <ul className="mb-5">
          <li>Your name</li>
          <li>Email address</li>
          <li>Any other information you choose to include in your message</li>
        </ul>
        <h4>b) Automatically collected information</h4>
        <p className="mb-0!">
          When you visit the Site, I (and my service providers) may
          automatically collect:
        </p>
        <ul className="mb-5">
          <li>
            <strong>Technical / device information</strong>: IP address, browser
            type &amp; version, operating system, device type, language
            preferences, referring URL, pages visited, time/date of visit, time
            spent on pages
          </li>
          <li>
            <strong>Cookies and similar technologies</strong>: See the Cookies
            section below
          </li>
        </ul>
        <h4>
          c) Information I do <strong>not</strong> collect
        </h4>
        <p className="mb-0!">
          I do <strong>not</strong> collect:
        </p>
        <ul className="mb-5">
          <li>
            Payment card details (I do not process payments directly on this
            site)
          </li>
          <li>Precise geolocation data</li>
          <li>
            Special category / sensitive personal data (health, race, religion,
            political opinions, etc.)
          </li>
        </ul>
        <h3 className="mb-5">2. How I use your information</h3>
        <p className="mb-0!">I use the information collected to:</p>
        <ul className="mb-5">
          <li>Respond to your messages, enquiries or requests</li>
          <li>Improve the Site's performance, security and user experience</li>
          <li>
            Analyse general Site usage trends (in aggregated, anonymised form)
          </li>
          <li>Protect against spam, abuse, and security threats</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="mb-5!">
          I do <strong>not</strong> use your personal information for automated
          decision-making or profiling that produces legal effects.
        </p>
        <h3 className="mb-5">3. Cookies &amp; Similar Technologies</h3>
        <p className="mb-5!">
          This Site uses cookies and similar tracking technologies.
        </p>
        <p className="mb-5!">
          <strong>Essential / strictly necessary cookies</strong>
          <br />
          These are required for the Site to function (e.g. security,
          navigation). You cannot opt out of these.
        </p>
        <p className="mb-5!">
          <strong>Analytics cookies</strong> (e.g. Google Analytics and PostHog)
          <br />
          These help me understand how visitors use the Site. Data is anonymised
          where possible (IP anonymisation enabled). You can opt out via your
          browser settings or tools provided by the analytics provider.
        </p>
        <p className="mb-5!">
          <strong>Third-party cookies</strong>
          <br />
          Some pages may include embedded content (e.g. YouTube videos,
          Twitter/X embeds, fonts from Google Fonts, etc.) which can set
          cookies. I have no direct control over these.
        </p>
        <p className="mb-0!">You can manage cookies via:</p>
        <ul className="mb-5!">
          <li>Your browser settings</li>
          <li>The cookie banner (if present)</li>
          <li>
            Opt-out tools of{" "}
            <a
              className="text-red-500 underline"
              href="https://tools.google.com/dlpage/gaoptout"
            >
              third parties
            </a>{" "}
            (e.g. for Google Analytics)
          </li>
        </ul>
        <h3 className="mb-5">4. Legal Basis for Processing (UK GDPR)</h3>
        <p className="mb-0!">My processing is based on:</p>
        <ul className="mb-5">
          <li>
            <strong>Legitimate interests</strong> — responding to enquiries,
            Site improvement &amp; security (balanced against your rights)
          </li>
          <li>
            <strong>Consent</strong> — where you explicitly agree (e.g. optional
            analytics cookies, newsletter sign-up if present)
          </li>
          <li>
            <strong>Legal obligation</strong> — when required by law
          </li>
        </ul>
        <h3 className="mb-5">5. Sharing Your Information</h3>
        <p className="mb-5!">
          I do <strong>not</strong> sell your personal data.
        </p>
        <p className="mb-0!">I may share data with:</p>
        <ul className="mb-5">
          <li>
            Hosting / infrastructure providers (e.g. Vercel, Netlify,
            Cloudflare, AWS, etc.)
          </li>
          <li>
            Analytics providers (e.g. PostHog and Google Analytics - anonymised)
          </li>
          <li>
            Email service providers (if you contact me via form and I use a
            service like Web3Forms, Formspree, EmailJS, etc.)
          </li>
          <li>
            Legal authorities — only if required by law, court order, or to
            protect rights/safety
          </li>
        </ul>
        <p className="mb-5!">
          All third parties are required to protect your data and process it
          only for the purposes instructed.
        </p>
        <h3 className="mb-5">6. Data Storage &amp; International Transfers</h3>
        <p className="mb-5!">
          Data is stored primarily in the{" "}
          <strong>European Economic Area (EEA)</strong> or in countries with
          adequacy decisions.
        </p>
        <p className="mb-0!">
          Where data is transferred outside the EEA (e.g. to US-based
          providers), appropriate safeguards are in place, such as:
        </p>
        <ul className="mb-5!">
          <li>UK International Data Transfer Agreement / Addendum</li>
          <li>Standard Contractual Clauses</li>
          <li>Data Processing Agreements</li>
        </ul>
        <h3 className="mb-5!">7. How Long I Keep Your Data</h3>
        <ul className="mb-5!">
          <li>
            Enquiry/contact form messages: kept for up to 12-24 months (unless
            longer retention is required for legal reasons)
          </li>
          <li>
            Analytics data: retained for the period set by the provider (usually
            14-26 months, anonymised)
          </li>
          <li>Logs/security data: usually 30-90 days</li>
        </ul>
        <p className="mb-5!">
          I delete or anonymise data when it is no longer needed.
        </p>
        <h3 className="mb-5!">8. Your Rights</h3>
        <p className="mb-0!">Under UK GDPR you have the right to:</p>
        <ul className="mb-5!">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Delete your data (erasure)</li>
          <li>Restrict processing</li>
          <li>
            Object to processing (especially based on legitimate interests)
          </li>
          <li>Data portability (where applicable)</li>
        </ul>
        <p className="mb-5!">
          To exercise these rights, contact me through the contact form.
        </p>
        <p className="mb-5!">
          You also have the right to lodge a complaint with the{" "}
          <strong>UK Information Commissioner's Office (ICO)</strong>:{" "}
          <a
            className="text-red-500 underline"
            href="https://ico.org.uk/make-a-complaint"
          >
            https://ico.org.uk/make-a-complaint
          </a>
        </p>
        <h3 className="mb-5!">9. Security</h3>
        <p className="mb-5!">
          I implement reasonable technical and organisational measures to
          protect your data (HTTPS, secure hosting, limited access, etc.).
          However, no method of transmission over the internet is 100% secure.
        </p>
        <h3 className="mb-5!">10. Children's Privacy</h3>
        <p className="mb-5!">
          This Site is not directed at children under 16. I do not knowingly
          collect personal data from children under 16.
        </p>
        <h3 className="mb-5!">11. Changes to This Privacy Policy</h3>
        <p className="mb-5!">
          I may update this policy from time to time. The “Last updated” date at
          the top shows when changes were last made. Significant changes will be
          communicated via a notice on the Site.
        </p>
      </div>

      <Footer />
    </>
  );
}
