import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 container mx-auto max-w-7xl flex items-center justify-between p-4 mb-36">
      {/* Footer links  */}
      <div className="space-x-4">
        <Link
          href="/"
          className="underline decoration-red-700 underline-offset-10 decoration-2 transition duration-300 hover:decoration-red-700/0 hover:text-red-700"
        >
          Privacy Policy
        </Link>
        <Link
          href="/projects"
          className="underline decoration-red-700 underline-offset-10 decoration-2 transition duration-300 hover:decoration-red-700/0 hover:text-red-700"
        >
          See all projects &rsaquo;
        </Link>
      </div>

      {/* Back to top  */}
      <Link className="hidden md:block" href="#top">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:scale-120 transition-all duration-300 cursor-pointer fill-zinc-800 hover:fill-red-700 md:-ml-16"
        >
          <path d="M3 24.75C2.20435 24.75 1.44129 24.4339 0.87868 23.8713C0.316071 23.3087 0 22.5456 0 21.75V3.75C0 2.95435 0.316071 2.19129 0.87868 1.62868C1.44129 1.06607 2.20435 0.75 3 0.75L21 0.75C21.7956 0.75 22.5587 1.06607 23.1213 1.62868C23.6839 2.19129 24 2.95435 24 3.75V21.75C24 22.5456 23.6839 23.3087 23.1213 23.8713C22.5587 24.4339 21.7956 24.75 21 24.75H3ZM12.75 18V9.3105L15.969 12.531C16.0387 12.6007 16.1215 12.656 16.2126 12.6938C16.3037 12.7315 16.4014 12.7509 16.5 12.7509C16.5986 12.7509 16.6963 12.7315 16.7874 12.6938C16.8785 12.656 16.9613 12.6007 17.031 12.531C17.1007 12.4613 17.156 12.3785 17.1938 12.2874C17.2315 12.1963 17.2509 12.0986 17.2509 12C17.2509 11.9014 17.2315 11.8037 17.1938 11.7126C17.156 11.6215 17.1007 11.5387 17.031 11.469L12.531 6.969C12.4613 6.89915 12.3786 6.84374 12.2874 6.80593C12.1963 6.76812 12.0987 6.74866 12 6.74866C11.9013 6.74866 11.8037 6.76812 11.7125 6.80593C11.6214 6.84374 11.5387 6.89915 11.469 6.969L6.969 11.469C6.82817 11.6098 6.74905 11.8008 6.74905 12C6.74905 12.1992 6.82817 12.3902 6.969 12.531C7.10983 12.6718 7.30084 12.7509 7.5 12.7509C7.69916 12.7509 7.89017 12.6718 8.031 12.531L11.25 9.3105V18C11.25 18.1989 11.329 18.3897 11.4697 18.5303C11.6103 18.671 11.8011 18.75 12 18.75C12.1989 18.75 12.3897 18.671 12.5303 18.5303C12.671 18.3897 12.75 18.1989 12.75 18Z" />
        </svg>
      </Link>

      {/* Social networks  */}
      <div className="flex gap-x-3">
        {/* LinkedIn  */}
        <Link
          href="https://www.linkedin.com/in/jethroedwards/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:scale-120 transition-all duration-300 cursor-pointer fill-zinc-800 hover:fill-red-700"
          >
            <path d="M3.42857 0.75C1.5375 0.75 0 2.2875 0 4.17857V21.3214C0 23.2125 1.5375 24.75 3.42857 24.75H20.5714C22.4625 24.75 24 23.2125 24 21.3214V4.17857C24 2.2875 22.4625 0.75 20.5714 0.75H3.42857ZM3.69643 9.86786H7.25893V21.3214H3.69643V9.86786ZM7.5375 6.24107C7.5375 6.78808 7.3202 7.31269 6.93341 7.69948C6.54661 8.08627 6.02201 8.30357 5.475 8.30357C4.92799 8.30357 4.40339 8.08627 4.01659 7.69948C3.6298 7.31269 3.4125 6.78808 3.4125 6.24107C3.4125 5.69406 3.6298 5.16946 4.01659 4.78266C4.40339 4.39587 4.92799 4.17857 5.475 4.17857C6.02201 4.17857 6.54661 4.39587 6.93341 4.78266C7.3202 5.16946 7.5375 5.69406 7.5375 6.24107ZM17.0304 21.3214V15.75C17.0304 14.4214 17.0036 12.7125 15.1821 12.7125C13.3286 12.7125 13.0446 14.1589 13.0446 15.6536V21.3214H9.4875V9.86786H12.9V11.4321H12.9482C13.425 10.5321 14.5875 9.58393 16.3179 9.58393C19.9179 9.58393 20.5875 11.9571 20.5875 15.0429V21.3214H17.0304Z" />
          </svg>
        </Link>

        {/* Facebook  */}
        <Link
          href="https://www.facebook.com/jethrodigital"
          target="_blank"
          aria-label="Facebook"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:scale-120 transition-all duration-300 cursor-pointer fill-zinc-800 hover:fill-red-700"
          >
            <path d="M3.42857 0.75C1.5375 0.75 0 2.2875 0 4.17857V21.3214C0 23.2125 1.5375 24.75 3.42857 24.75H8.68929V16.9393H5.86071V12.75H8.68929V10.9446C8.68929 6.27857 10.8 4.11429 15.3857 4.11429C16.2536 4.11429 17.7536 4.28571 18.3696 4.45714V8.25C18.0482 8.21786 17.4857 8.19643 16.7839 8.19643C14.5339 8.19643 13.6661 9.04821 13.6661 11.2607V12.75H18.1446L17.3732 16.9393H13.6607V24.75H20.5714C22.4625 24.75 24 23.2125 24 21.3214V4.17857C24 2.2875 22.4625 0.75 20.5714 0.75H3.42857Z" />
          </svg>
        </Link>

        {/* Twitter  */}
        <Link
          href="https://x.com/Jethro_Edwards"
          target="_blank"
          aria-label="Twitter"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:scale-120 transition-all duration-300 cursor-pointer fill-zinc-800 hover:fill-red-700"
          >
            <path d="M3.42857 0.75C1.5375 0.75 0 2.2875 0 4.17857V21.3214C0 23.2125 1.5375 24.75 3.42857 24.75H20.5714C22.4625 24.75 24 23.2125 24 21.3214V4.17857C24 2.2875 22.4625 0.75 20.5714 0.75H3.42857ZM19.3446 5.25L13.7839 11.6036L20.325 20.25H15.2036L11.1964 15.0054L6.60536 20.25H4.06071L10.0071 13.4518L3.73393 5.25H8.98393L12.6107 10.0446L16.8 5.25H19.3446ZM17.3196 18.7286L8.21786 6.69107H6.70179L15.9054 18.7286H17.3196Z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
