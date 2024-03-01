function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-[1000px]">
        <div className="grid grid-cols-2 items-start  justify-items-center gap-8 px-4 py-6 md:grid-cols-3 md:items-center md:justify-items-stretch lg:py-8">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              CATEGORIES
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Web Builder
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Hosting
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Data Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Robotic-Automation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              CONTACT
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms Of Service
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Categories
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <p className=" font-medium text-gray-300 hover:underline">
              United States
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
