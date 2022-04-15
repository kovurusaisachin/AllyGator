import Sidebar from "../../../../components/sidebar";
export default function temporaryhousing() {
  return (
    <div className="flex flex-col-2">
      <Sidebar />
      
        <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
            <h2 className="mb-12 text-3xl font-extrabold text-center leading-tight text-gray-900">
              Temporary Housing
            </h2>
          
          
          <div className="mb-20 text-left md:text-justify">
          <img alt="blog photo" src="https://a0.muscache.com/im/pictures/23b047cd-19c9-42c0-a83b-2f4f6f25717b.jpg?im_w=2560"/>
            <a
            className="hover:font-bold hover:text-blue-900"
            href="https://www.airbnb.com/"
            >
            <strong>Airbnb,Inc.</strong>: 
            </a>
            <p className="text-lg text-gray-500">  
            Rent an extra room or even an entire apartment or house for anywhere from a day to more than a month.
            Airbnb offers reasonablerates and a wide variety of filters to
            search its listings
            </p>
          </div>
          
         
          <div className="mb-20 text-left md:text-justify"> 
          <img alt="blog photo" src="https://www.extendedstayamerica.com/dA/f1e0c139-f134-4427-9017-183e2b926a17/80q/hotel_381_381_exterior1_3000x2000_AF16.jpg"/>
            <a
            className="hover:font-bold hover:text-blue-900"
            href="https://www.extendedstayamerica.com/"
            >
            <strong>Extended stay</strong>: 
            </a>
            <p className="text-lg text-gray-500">
            An economic, extended stay hotel with apartment-style amenities. Prices tend to be cheaper the longer your stay, and weekly rates are also available
            </p>
          </div>
             
          <div className="mb-20 text-left md:text-justify">
          <img alt="blog photo" src="https://secureservercdn.net/198.71.233.213/b74.f35.myftpupload.com/wp-content/uploads/2021/09/stadium1.png"/>
             <a
              className="hover:font-bold hover:text-blue-900"
              href="http://southerncomfortpropertiesllc.com/m"
              >
              <strong>Southern Comfort Properties</strong>: 
             </a>
             <p className="text-lg text-gray-500">
             A local short-term rental company offering a variety of furnished housing options and rates
             </p>
          </div>
       
          <div className="mb-20 text-left md:text-justify">
          <img alt="blog photo" src="https://conferenceservices.housing.ufl.edu/wp-content/uploads/sites/3/2017/08/UFHousing_CS_Int_Corry_GuestApartment_001.jpg"/>
            <a
            className="hover:font-bold hover:text-blue-900"
            href="https://conferenceservices.housing.ufl.edu/guesthousing/apartments/"
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
