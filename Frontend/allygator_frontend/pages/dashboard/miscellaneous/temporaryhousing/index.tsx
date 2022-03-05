import Sidebar from "../../../../components/sidebar";
export default function temporaryhousing() {
  return (
    <div className="flex flex-col-2">
      <Sidebar />
      
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
                <strong>Extended staying.</strong>: An economic, extended stay hotel with apartment-style amenities. Prices tend to be cheaper the longer your stay, and weekly rates are also available
              </p>
              <a
                className="hover:font-bold hover:text-blue-900"
                href="extendedstayamerica.com"
              >
                Extended stay website click here
              </a>
            </div>
            <div className="flex flex-col space-y-12 divide-y divide-gray-200">
              {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
              <div className="mb-2 text-left md:text-justify">
                <p className="text-lg text-gray-500">
                  <strong>Southern Comfort Properties.</strong>: A local short-term rental company offering a variety of furnished housing options and rates
                </p>
                <a
                  className="hover:font-bold hover:text-blue-900"
                  href="socogainesvillerentals.com"
                >
                  Southern Comfort Properties website click here
                </a>
              </div>
            </div>
            <div>
              {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
              <div className="flex flex-col space-y-12 divide-y divide-gray-200">
                {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
                <div className="mb-2 text-left md:text-justify">
                  <p className="text-lg text-gray-500">
                    <strong>UF Guest Housing.</strong>: UF has a limited number of fully furnished apartments available to UF affiliates, as well as summer international graduate student housing options. Please see site for more details.
                  </p>
                  <a
                    className="hover:font-bold hover:text-blue-900"
                    href="conferenceservices.housing.ufl.edu/guesthousing"
                  >
                    UF Guest Housing website click here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
  );
}
