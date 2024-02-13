export default function Footer() {
  return (
    <footer className="bg-light-crust xl:w-full rounded-lg shadow max-xl:m-4 dark:bg-dark-crust">
      <div className="w-full mx-auto max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between md:max-w-5xl">
        <span className="text-sm sm:text-center text-light-subtext0 dark:text-dark-subtext0">
          © 2024 mitsimi
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <a
              href="https://github.com/"
              className="flex items-center hover:underline me-4 md:me-6"
            >
              <span
                className={`whitespace-nowrap text-light-subtext1 dark:text-dark-subtext1`}
              >
                Source Code
              </span>
            </a>
          </li>
          {/* <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li> */}
        </ul>
      </div>
    </footer>
  );
}
