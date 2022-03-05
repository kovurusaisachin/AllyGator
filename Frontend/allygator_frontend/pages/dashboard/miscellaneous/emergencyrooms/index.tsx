import Sidebar from "../../../../components/sidebar"
export default function emergencyrooms () {
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
                        Emergency Rooms Details
                      </h3>
                      <p className="text-gray-600">
                        Get an overview of all Emergency Rooms related details here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
 
        </div>
      </div>
    )
}