import Sidebar from "../../../../components/sidebar"
export default function electricity () {
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
                        Electricity Details
                      </h3>
                      <p className="text-gray-600">
                        Get an overview of all GRU related details here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
<div className="mb-12 text-left md:text-center">
  <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Electricity Help</h2>
  <p className="text-lg text-gray-500">GRU Office Details</p>
</div>
<div className="flex flex-col space-y-12 divide-y divide-gray-200">
  <div>
    {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
    <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
      <a href="#" className="text-gray-900 hover:text-purple-700">GRU Downtown Office</a>
    </h2>
    <p className="mb-4 text-base font-normal text-gray-600">
      301 SE 4th Ave.
      Gainesville FL 32601
      352-334-3434
      gru.com
      (Gainesville Regional Utilities provides residential electric utilities for the city.)
    </p>
  </div>
  <div>
    {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
    <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
      <a href="#" className="text-gray-900 hover:text-purple-700">To Start Services:</a>
    </h2>
    <p className="mb-4 text-base font-normal text-gray-600">
     Call 352-334-3434 or visit gru.com 
     <br />
     ("For My Home">"Your Service">"Start your Service")
     <br />
     When you contact GRU, make sure you have:
     <br />
     1. Address and location to start your Service
     <br />
     2. Social Security Number or Tax Identification Number 
     <br />
     3. Date to start Services
     <br />
     4. Bank Account Number 
     <br />
     5. Driver's License 
     <br />
     <br />

     *If you do not have a SSN or Tax Identification Number, then you must go into the GRU office downtown to set up your account.
     <br />
     <br />

     When you go to set up your account in person, make sure you also bring:
     <br />
     1. Photo ID(eg. Gator1 card, driver's license, passport etc.)
     <br />
     2. Money for deposit
     <br />
     2.1 Electricity only: $145
     <br />
     2.2 Electricity & Water: $180
     <br />

     Ask GRU about your options for waiving deposits, as well as more information on residential activation charges.
     <br />
    </p>
  </div>
  
    </div>
{/* <div className="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
  <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Previous Page</a>
  <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Next Page</a>
</div> */}
</section>
      
      </div>
    </div>
    )
}