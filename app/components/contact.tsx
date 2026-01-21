import Image from "next/image";
import Footer from "./footer";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <section className="px-3" id="contact-me">
      <div className="w-full bg-white relative min-h-full z-10 pb-8">
        <div className="container mx-auto max-w-6xl md:flex items-center mb-36">
          <div className="bg-zinc-100 border-2 border-red-700 px-8 py-10 md:w-200 md:py-22 md:px-20 md:pr-60 md:-mr-40">
            <Image
              src={"/text-contact-me.svg"}
              width={290}
              height={41}
              alt="Contact me"
              className="mb-6"
            />
            <h5 className="text-black mb-8">
              I'm always open to discussing new projects or collaborations. Feel
              free to reach out.
            </h5>

            {/* <form action="">
              <input
                required
                type="text"
                className="w-full bg-white border border-zinc-400 rounded-md p-2 mb-4"
                placeholder="Your name..."
              />
              <input
                required
                type="email"
                className="w-full bg-white border border-zinc-400 rounded-md p-2 mb-4"
                placeholder="Your email..."
              />
              <textarea
                required
                className="w-full bg-white border border-zinc-400 rounded-md p-2 mb-4"
                rows={4}
                placeholder="Your message..."
              />
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-900 transition-colors duration-300 font-semibold w-full border-2 border-red-700 text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
            </form> */}

            <ContactForm />
          </div>
          <div className="relative z-50 px-12 md:px-0 md:w-1/2 hidden md:block">
            <Image
              src="/balloons.png"
              alt="Share the love - let's work together"
              width={524}
              height={524}
              className="rounded-lg"
            />
          </div>
        </div>
        <Footer />
      </div>
      <div className="sticky bottom-0 bg-zinc-100">
        <Image
          src={"/homepage-schnauzer.webp"}
          loading="lazy"
          alt="Miniature schnauzer learning to code"
          className="mx-auto"
          width={720}
          height={568}
        />
      </div>
    </section>
  );
}
