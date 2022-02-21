import React from "react";
import Link from "next/link"
import Sidebar from "../../../components/sidebar";
// import ResetPass from './ResetPassword'
function miscellaneous() {
  return (
    <div className="flex flex-col-1">
      <Sidebar />
      <div>
      <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                {/* Profile */}
                <div className="flex items-center">
                  <div>
                    <div className="ml-3 flex flex-col items-start">
                      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        Information Center
                      </h1>
                      <p className="text-gray-600">
                        Get an overview of all the information you required as an internation student here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-16 mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="max-w-xs my-2 mx-2 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
          <img
            className="object-cover w-full h-56"
            src="https://www.flashmobcomputing.org/media/2019/08/largest-cell-phone-carriers-in-the-United-States.jpg"
            alt="avatar"
          />
          <div className="py-5 text-center">
            <Link href="miscellaneous/cellphones">
            <a className="block text-2xl font-bold text-gray-800 dark:text-white"
            >
              Cell Phones
            </a>
            </Link>
            
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Network Service Provider
            </span>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-2 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
          <img
            className="object-cover w-full h-56"
            src="https://pbs.twimg.com/profile_images/736294818322735104/B9P2C9BU_400x400.jpg"
            alt="avatar"
          />
          
           
          <div className="py-5 text-center">
            <Link href="miscellaneous/electricity">
            <a className="block text-2xl font-bold text-gray-800 dark:text-white"
            >
              Electricity
            </a>
            </Link>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              GRU Details
            </span>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-2 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
          <img
            className="object-cover w-full h-56"
            src="https://www.mountelizabeth.com.sg/images/default-source/default-album/is-it-an-emergency-main-d.jpg?sfvrsn=8fee851e_4"
            alt="avatar"
          />

            
          <div className="py-5 text-center">
          <Link href="miscellaneous/emergencyrooms">
            <a className="block text-2xl font-bold text-gray-800 dark:text-white"
            >
              Emergency Rooms
            </a>
            </Link>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Emergency Contact Details
            </span>
          </div>
        </div>
        <div className="max-w-xs my-2 mx-2 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
          <img
            className="object-cover w-full h-56"
            src="https://www.gannett-cdn.com/-mm-/ba3b2b83ff819ef754fd4289afcfb8433fb99ca7/c=0-239-5016-3073/local/-/media/2018/06/11/USATODAY/USATODAY/636643223679114360-GettyImages-177759478.jpg?width=3200&height=1808&fit=crop&format=pjpg&auto=webp"
            alt="avatar"
          />
          
         <div className="py-5 text-center">
          <Link href="miscellaneous/ethnicfoodstores">
            <a className="block text-2xl font-bold text-gray-800 dark:text-white"
            >
              Ethnic Food Stores
            </a>
            </Link>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Local Food Service Provider
            </span>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-2 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
          <img
            className="object-cover w-full h-56"
            src="https://myusf.usfca.edu/sites/default/files/users/slhedgecock/Screen%20Shot%202019-06-26%20at%204.18.58%20PM.png"
            alt="avatar"
          />
          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-2xl font-bold text-gray-800 dark:text-white"
            >
              Off-Campus Safety
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Safety and Property Insurance
            </span>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-2 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
          <img
            className="object-cover w-full h-56"
            src="https://www.shorttermhousing.com/wp-content/uploads/2020/09/Fort-Clarke-shorttermhousing.com-2-818x540.jpg"
            alt="avatar"
          />
          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-2xl font-bold text-gray-800 dark:text-white"
            >
              Temporary Housing
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Housing Options in Gainesville
            </span>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-2 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
          <img
            className="object-cover w-full h-56"
            src="https://uflib.ufl.edu/wordpress/files/photoshelter/I0000PxtsRkgq7SY-1934x1120.jpg"
            alt="avatar"
          />
          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-2xl font-bold text-gray-800 dark:text-white"
            >
              UF Mobile Outreach Clinic
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Libraries,Marketplace and more
            </span>
          </div>
        </div>
      </div>
      
      </div>
      
    </div>
  );
}
export default miscellaneous;
