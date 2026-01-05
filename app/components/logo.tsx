import Link from "next/link";

export default function Logo() {
  return (
    <Link className="inline-block relative z-10" id="top" href="/">
      <svg
        width="117"
        height="83"
        viewBox="0 0 117 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group"
      >
        <path d="M0 0H117L102 83H0V0Z" fill="url(#paint0_linear_469_150)" />
        <path
          className="fill-white group-hover:fill-red-300 transition-colors duration-600"
          d="M60.188 21.184L56.028 44.948C55.2307 49.3507 53.48 52.696 50.776 54.984C48.072 57.2373 44.64 58.364 40.48 58.364C36.632 58.364 33.5987 57.4453 31.38 55.608C29.196 53.736 28.104 50.9973 28.104 47.392C28.104 46.3173 28.208 45.156 28.416 43.908H39.804C39.7 44.532 39.648 45.0693 39.648 45.52C39.648 47.1493 40.3587 47.964 41.78 47.964C42.4733 47.964 43.0453 47.7387 43.496 47.288C43.9813 46.8373 44.328 46.0573 44.536 44.948L48.696 21.184H60.188ZM58.4639 30.336L57.6839 34.912H69.1239L67.5639 43.596H56.1239L55.1879 48.796H68.1879L66.5759 58H42.0319L48.5319 21.184H73.0759L71.4639 30.336H58.4639Z"
        />
        <defs>
          <linearGradient
            id="paint0_linear_469_150"
            x1="56.4375"
            y1="0"
            x2="56.4375"
            y2="82.4383"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CC0000" />
            <stop offset="1" stopColor="#990000" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
}
