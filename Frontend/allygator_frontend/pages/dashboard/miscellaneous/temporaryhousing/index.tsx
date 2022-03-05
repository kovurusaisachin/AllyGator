import Sidebar from "../../../../components/sidebar";
export default function temporaryhousing() {
  return (
    <div className="flex flex-col-2">
      <Sidebar />
      <div className="flex flex-col bg-gray-200 w-full">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <div>
                    <div className="ml-3 flex flex-col items-start">
                      <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        Temporary Housing Details
                      </h3>
                      <p className="text-gray-600">
                        Get an overview of all Housing related details here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
          <div className="mb-12 text-left md:text-justify">
            <h2 className="mb-2 text-3xl font-extrabold text-center leading-tight text-gray-900">
              Temporary Housing
            </h2>
            <p className="text-lg text-gray-500">
              <strong>Airbnb,Inc.</strong>: Rent an extra room or even an entire
              apartment or house for anywhere from a day to more than a month.
              Airbnb offers reasonablerates and a wide variety of filters to
              search its listings
            </p>
            <a
              className="hover:font-bold hover:text-blue-900"
              href="airbnb.com"
            >
              Airbnb website click here
            </a>
          </div>
          <div className="flex flex-col space-y-12 divide-y divide-gray-200">
            <div className="mb-2 text-left md:text-justify">
              <p className="text-lg text-gray-500">
                <strong>Extended .</strong>: Rent an extra room or even an
                entire apartment or house for anywhere from a day to more than a
                month. Airbnb offers reasonablerates and a wide variety of
                filters to search its listings
              </p>
              <a
                className="hover:font-bold hover:text-blue-900"
                href="airbnb.com"
              >
                Airbnb website click here
              </a>
            </div>
            <div className="flex flex-col space-y-12 divide-y divide-gray-200">
              {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
              <div className="mb-2 text-left md:text-justify">
                <p className="text-lg text-gray-500">
                  <strong>Airbnb,Inc.</strong>: Rent an extra room or even an
                  entire apartment or house for anywhere from a day to more than
                  a month. Airbnb offers reasonablerates and a wide variety of
                  filters to search its listings
                </p>
                <a
                  className="hover:font-bold hover:text-blue-900"
                  href="airbnb.com"
                >
                  Airbnb website click here
                </a>
              </div>
            </div>
            <div>
              {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
              <div className="flex flex-col space-y-12 divide-y divide-gray-200">
                {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
                <div className="mb-2 text-left md:text-justify">
                  <p className="text-lg text-gray-500">
                    <strong>Airbnb,Inc.</strong>: Rent an extra room or even an
                    entire apartment or house for anywhere from a day to more
                    than a month. Airbnb offers reasonablerates and a wide
                    variety of filters to search its listings
                  </p>
                  <a
                    className="hover:font-bold hover:text-blue-900"
                    href="airbnb.com"
                  >
                    Airbnb website click here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
