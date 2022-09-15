import Button from "../UI/Button";

function Newsletter() {
    return (
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 bg-cover py-4">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
              Sign up for our newsletter
            </h2>
            <p className="mt-3 max-w-3xl font-Montserrat text-sm leading-6 text-gray-300 md:text-md lg:text-lg">
             Keep up to date with our latest ventures and ideas. We also send out regular discounts via email!
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-black sm:max-w-xs"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <Button type="submit" className="p-3 w-full items-center justify-center rounded-md bg-sky-600 hover:bg-sky-700">Submit</Button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-300 md:text-md">
              We care about the protection of your data. Read our{' '}
              <a href="#" className="font-medium text-white underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  export default Newsletter;
  