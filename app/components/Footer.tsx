import Link from "next/link";

const GithubIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 
      0-.28-.01-1.03-.02-2.02-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.06-.73.08-.72.08-.72 
      1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.41.96.11-.76.4-1.27.72-1.56-2.55-.29-5.23-1.28-5.23-5.7 
      0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.95 10.95 0 015.74 0c2.18-1.49 3.14-1.18 
      3.14-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.43-2.68 5.4-5.24 5.68.42.36.8 1.09.8 2.2 
      0 1.59-.02 2.86-.02 3.25 0 .31.21.68.79.56A10.998 10.998 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
    />
  </svg>
);


const LinkedinIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
);

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Maxcillius', icon: <GithubIcon /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/gouravdeep', icon: <LinkedinIcon /> },
  ];

  return (
    <footer className="w-ful text-gray-400 pb-12">
      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-700 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-white mb-2 inline-block">
              Gourav Deep Shahni
            </Link>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Gourav Deep Shahni. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              This is Link personal portfolio.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}