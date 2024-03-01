function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="mx-auto w-full max-w-[1000px]">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-2 lg:py-8">
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              CATEGORIES
            </h2>
            <ul class="font-medium text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class=" hover:underline">
                  Web Builder
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Hosting
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Data Center
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Robotic-Automation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              CONTACT
            </h2>
            <ul class="font-medium text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Terms Of Service
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Categories
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
