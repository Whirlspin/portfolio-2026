import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Tooltip from "@/app/components/tooltip";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "DStv website redesign • Jethro Edwards' portfolio website",
  description:
    "A redesign of the DStv Self Service website for MultiChoice, focusing on improving usability and user experience.",
};

export default function multichoiceDstvWebsiteRedesign() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/multichoice-dstv-redesign-masthead.webp"
        subheading="MultiChoice"
        heading="DStv Self Service website redesign"
      />
      {/* Introduction  */}
      <section className="container mx-auto max-w-4xl px-6 lg:px-0 pt-28 mb-20">
        <BreadcrumbNav projectTitle=" MultiChoice: DStv Self Service website redesign" />
        <h3>Usability Challenges</h3>
        <p className="mb-5!">
          The original Self Service website was not meeting the needs of users
          or the organisation, plagued by a confusing information structure,
          scattered content, and alarmingly slow page load times.
        </p>
        <p>
          Through a comprehensive UX audit that included both qualitative and
          quantitative research, we analysed and documented various user
          behaviors. This groundwork laid a strong foundation for understanding
          user needs, leading to a user-centered design approach.
        </p>
        <h3>Summary of findings</h3>
        <ul className="mb-10">
          <li>The African market is incredibly data cost conscious</li>
          <li>75% of all visitors are returning visitors</li>
          <li>'Pay' and 'Clear error code' are the most popular functions</li>
          <li>A mobile first approach is paramount</li>
        </ul>
        <h3>My role</h3>
        <p className="mb-5!">
          Information architecture • Wireframes • UI design • Manage tasks among
          team members: research gathering (customer habits/trends) &
          quantitative insights
        </p>
        <div className="flex flex-row flex-wrap gap-9 mb-14">
          <div className="flex flex-row items-center gap-3">
            <h5>Wireframing</h5>
            <Tooltip
              tooltiptext="Balsamiq Mockups"
              imageSrc="/tech-stack-balsamiq.svg"
              altText="Balsamiq Mockups"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h5>Design</h5>
            <Tooltip
              tooltiptext="Photoshop"
              imageSrc="/tech-stack-photoshop.svg"
              altText="Photoshop"
            />
            <Tooltip
              tooltiptext="Illustrator"
              imageSrc="/tech-stack-illustrator.svg"
              altText="Illustrator"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h5>Quantitative</h5>
            <Tooltip
              tooltiptext="Google Analytics"
              imageSrc="/tech-stack-analytics.svg"
              altText="Google Analytics"
            />
            <Tooltip
              tooltiptext="Hotjar"
              imageSrc="/tech-stack-hotjar.svg"
              altText="Hotjar"
            />
            <Tooltip
              tooltiptext="Pingdom"
              imageSrc="/tech-stack-pingdom.svg"
              altText="Pingdom"
            />
          </div>
        </div>
        <Image
          src="/projects/multichoice-dstv-redesign-load-times.png"
          width={1800}
          height={1004}
          alt="DStv Self Service website load times"
        />
      </section>

      {/* Content is King  */}
      <section className="container mx-auto max-w-4xl px-6 lg:px-0 mb-28">
        <h3>Content is King</h3>
        <p>
          A user-centered website relies heavily on its Information Architecture
          (IA) to enhance the 'findability factor' — essentially, how easily
          users can navigate the site. To streamline the experience, we
          organised the navigation into four key categories:{" "}
          <strong>
            Get DStv, Watch, Manage Account{" "}
            <span className="font-normal">and</span> Need Help.
          </strong>
        </p>

        <div className="grid grid-cols-4 gap-6">
          {/* Get DStv  */}
          <div>
            <h4 className="text-center p-5 bg-stone-100 border-b-2 border-b-amber-500 mb-4">
              Get DStv
            </h4>
            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>Business</strong>
              </li>
              <li className="pl-0! ml-0!">Hotels</li>
              <li className="pl-0! ml-0!">Pubs & clubs</li>
              <li className="pl-0! ml-0!">Offices</li>
              <li className="pl-0! ml-0!">Restricted viewing</li>
            </ul>

            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>Decoders</strong>
              </li>
              <li className="pl-0! ml-0!">All hardware</li>
              <li className="pl-0! ml-0!">DStv Explora 2</li>
              <li className="pl-0! ml-0!">DStv Single View HD</li>
              <li className="pl-0! ml-0!">Wifi connector</li>
            </ul>

            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>Packages</strong>
              </li>
              <li className="pl-0! ml-0!">All packages</li>
              <li className="pl-0! ml-0!">DStv Premium</li>
              <li className="pl-0! ml-0!">DStv Compact Plus</li>
              <li className="pl-0! ml-0!">DStv Compact</li>
              <li className="pl-0! ml-0!">DStv Family</li>
              <li className="pl-0! ml-0!">DStv Access</li>
            </ul>
          </div>

          {/* Watch  */}
          <div>
            <h4 className="text-center p-5 bg-stone-100 border-b-2 border-b-blue-500 mb-4">
              Watch
            </h4>
            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>Featured shows</strong>
              </li>
              <li className="pl-0! ml-0!">Animania</li>
              <li className="pl-0! ml-0!">fliekNET</li>
              <li className="pl-0! ml-0!">The Queen</li>
              <li className="pl-0! ml-0!">Wedding Bashers</li>
            </ul>

            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>What to watch</strong>
              </li>
              <li className="pl-0! ml-0!">DStv Now</li>
              <li className="pl-0! ml-0!">BoxOffice</li>
              <li className="pl-0! ml-0!">Showmax</li>
              <li className="pl-0! ml-0!">SuperSport</li>
              <li className="pl-0! ml-0!">M-Net</li>
            </ul>

            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>What's on</strong>
              </li>
              <li className="pl-0! ml-0!">TV guide</li>
              <li className="pl-0! ml-0!">Upcoming attractions</li>
              <li className="pl-0! ml-0!">Featured channels</li>
            </ul>

            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>Top stories</strong>
              </li>
              <li className="pl-0! ml-0!">Latest news</li>
              <li className="pl-0! ml-0!">DStv Now 4 newbies</li>
              <li className="pl-0! ml-0!">How to beat "rain fade"</li>
              <li className="pl-0! ml-0!">Premium gets Showmax</li>
            </ul>
          </div>

          {/* Manage account  */}
          <div>
            <h4 className="text-center p-5 bg-stone-100 border-b-2 border-b-purple-500 mb-4">
              Manage Account
            </h4>

            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>Account</strong>
              </li>
              <li className="pl-0! ml-0!">View/manage account</li>
              <li className="pl-0! ml-0!">Change package</li>
              <li className="pl-0! ml-0!">Reconnect account</li>
            </ul>

            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>Pay</strong>
              </li>
              <li className="pl-0! ml-0!">View amount due</li>
              <li className="pl-0! ml-0!">Make a payment</li>
              <li className="pl-0! ml-0!">Payment methods</li>
            </ul>
          </div>

          {/* Need help */}
          <div>
            <h4 className="text-center p-5 bg-stone-100 border-b-2 border-b-stone-500 mb-4">
              Need help
            </h4>

            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>FAQs</strong>
              </li>
              <li className="pl-0! ml-0!">Frequently asked questions</li>
              <li className="pl-0! ml-0!">"How to" videos</li>
            </ul>

            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>Installer</strong>
              </li>
              <li className="pl-0! ml-0!">Find an accredited installer</li>
              <li className="pl-0! ml-0!">Locate a service centre</li>
            </ul>

            <ul className="list-none! mb-4">
              <li className="pl-0! ml-0!">
                <strong>Rain fade</strong>
              </li>
              <li className="pl-0! ml-0! text-sm! leading-normal!">
                <u>NOTE:</u> Rain fade can occur due to weather at reception or
                signal or at source causing 'rain fade'. You should not
                experience any problems with your signal if the sky is overcast
                or if there is drizzle or normal rainfall.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lg:bg-[url('/projects/multichoice-dstv-wireframe.webp')] bg-cover bg-right bg-no-repeat lg:h-[645px] w-full flex items-center justify-left ">
        <div className="hidden lg:block max-w-xl p-8">
          <h3>Test early and often</h3>
          <p className="mb-0!">
            Wireframes were utilised consistently during the design process to
            effectively communicate concepts to various stakeholders and to
            identify findability challenges with actual users.
          </p>
        </div>
      </section>

      {/* Iconography  */}
      <div className="bg-[#00508F] p-12 flex items-center justify-center flex-wrap gap-4 mb-28">
        <h6 className="text-white!">
          All icons were further designed in Adobe Illustrator
        </h6>
        <img
          src="/projects/multichoice-dstv-outline-icon-wallet.svg"
          width={24}
          height={24}
          alt="wallet"
        />
        <img
          src="/projects/multichoice-dstv-outline-icon-coins.svg"
          width={24}
          height={24}
          alt="coins"
        />
        <img
          src="/projects/multichoice-dstv-outline-icon-conversation.svg"
          width={24}
          height={24}
          alt="conversation"
        />
        <img
          src="/projects/multichoice-dstv-outline-icon-error.svg"
          width={24}
          height={24}
          alt="error"
        />
        <img
          src="/projects/multichoice-dstv-outline-icon-installer.svg"
          width={24}
          height={24}
          alt="installer"
        />
        <img
          src="/projects/multichoice-dstv-outline-icon-location.svg"
          width={24}
          height={24}
          alt="location"
        />
        <img
          src="/projects/multichoice-dstv-outline-icon-profile.svg"
          width={24}
          height={24}
          alt="profile"
        />
        <img
          src="/projects/multichoice-dstv-outline-icon-scales.svg"
          width={24}
          height={24}
          alt="scales"
        />
        <img
          src="/projects/multichoice-dstv-outline-icon-television.svg"
          width={24}
          height={24}
          alt="television"
        />
        <img
          src="/projects/multichoice-dstv-outline-icon-up-down.svg"
          width={24}
          height={24}
          alt="Up down arrows"
        />
      </div>

      <section className="container mx-auto max-w-4xl px-6 lg:px-0 mb-28">
        <h3>Achieving success involves:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ul>
            <li>Top-notch responsive design</li>
            <li>User-focused information structure</li>
            <li>Simple side-by-side product comparisons</li>
          </ul>

          <ul className="list-disc list-outside">
            <li>Easy navigation to key information</li>
            <li>Significantly faster page load times</li>
            <li>Enhanced overall user experience</li>
          </ul>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 lg:px-0 mb-14">
        <Image
          src="/projects/multichoice-dstv-redesign-product-page.jpg"
          width={1920}
          height={1002}
          alt="Product page"
        />
      </div>

      <Image
        src="/projects/multichoice-dstv-redesign-accounts-page.jpg"
        width={1920}
        height={1288}
        alt="Accounts page"
        className="w-full h-auto mb-20"
      />

      <CategoryListingFooter categoryChoose="UI/UX" />

      <Footer />
    </>
  );
}
