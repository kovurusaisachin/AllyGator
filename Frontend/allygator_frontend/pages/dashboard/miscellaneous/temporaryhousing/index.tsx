import Sidebar from "../../../../components/sidebar";
export default function temporaryhousing() {
  return (
    <div className="flex flex-col-2">
      <Sidebar />
      
        <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
            <h2 className="mb-12 text-3xl font-extrabold text-center leading-tight text-gray-900">
              Temporary Housing
            </h2>
          
          <div className="mb-10 text-left md:text-justify">
            <a
            className="hover:font-bold hover:text-blue-900"
            href="airbnb.com"
            >
            <strong>Airbnb,Inc.</strong>: 
            </a>
            <p className="text-lg text-gray-500">  
            Rent an extra room or even an entire
            Apartment or house for anywhere from a day to more than a month.
            Airbnb offers reasonablerates and a wide variety of filters to
            search its listings
            </p>
          </div>
         
          <div className="mb-10 text-left md:text-justify"> 
            <a
            className="hover:font-bold hover:text-blue-900"
            href="extendedstayamerica.com"
            >
            <strong>Extended stay</strong>: 
            </a>
            <p className="text-lg text-gray-500">
            An economic, extended stay hotel with apartment-style amenities. Prices tend to be cheaper the longer your stay, and weekly rates are also available
            </p>
          </div>
             
          <div className="mb-10 text-left md:text-justify">
             <a
              className="hover:font-bold hover:text-blue-900"
              href="socogainesvillerentals.com"
              >
              <strong>Southern Comfort Properties</strong>: 
             </a>
             <p className="text-lg text-gray-500">
             A local short-term rental company offering a variety of furnished housing options and rates
             </p>
          </div>
       
          <div className="mb-10 text-left md:text-justify">
            <a
            className="hover:font-bold hover:text-blue-900"
            href="conferenceservices.housing.ufl.edu/guesthousing"
            >
            <strong>UF Guest Housing</strong>:
            </a>
            <p className="text-lg text-gray-500">
            UF has a limited number of fully furnished apartments available to UF affiliates, as well as summer international graduate student housing options. Please see site for more details.
            </p>
          </div>
                        
        </section>
      </div>
    
  );
}
