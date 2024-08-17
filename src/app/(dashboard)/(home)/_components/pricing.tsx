export const Pricing = () => {
  return (
    <div>
      <section className="bg-primary bg-opacity-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-text font-extrabold sm:text-5xl">
              Pricing Plans
            </h2>
            <p className="mt-4 text-text text-xl">
              Simple, transparent pricing for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-secondary rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white">Free</h3>
                <p className="mt-4 text-text">
                  Get started with our basic features.
                </p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">$0</span>
                <span className="text-xl font-medium text-text">/mo</span>
              </div>
              <ul className="mb-8 space-y-4 text-text">
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>1 user account</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>10 transactions per month</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Basic support</span>
                </li>
              </ul>
              <a
                href="#"
                className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Sign Up
              </a>
            </div>

            {/* Rest of the code */}
          </div>
        </div>
      </section>
    </div>
  );
}
