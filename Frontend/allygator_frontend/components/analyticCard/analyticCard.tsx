import React from "react"
export default function AnalyticCard () {
    return(
        <>
<div className="flex flex-col w-4/5">
        <div className="bg-blue-100 shadow">
          <div className="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                {/* Profile */}
                <div className="flex items-center">
                  <div>
                    <div className="ml-3 flex flex-col items-start">
                      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        Twurs Admin Dashboard
                      </h1>
                      <p className="text-gray-600">
                        Get an overview of all tasks here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 gap-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Refresh logs
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full p-6 lg:max-w-7xl lg:mx-auto lg:p-8">
          <div className="py-5">
            <main className="h-full overflow-y-auto">
              <div className="container  mx-auto grid">
                {/* Cards */}
                <div className="grid gap-6 mb-8  md:grid-cols-2 xl:grid-cols-3">
                  {/* Card */}
                  <div className="flex w-full items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-green-500 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="violet"
                        viewBox="0 0 24 24"
                        stroke="black"
                      >
                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="">
                      <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Total Users
                      </p>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        {/* {state?.totalUser?.length ?? 0} */}
                      </p>
                      {/* <hr/> */}
                      <div className="flex mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Daily
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Weekly
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Monthly
                        </p>
                      </div>
                      <div className="flex mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.userInt?.daily?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.userInt?.weekly?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.userInt?.monthly?.length ?? 0} */}
                        </p>
                      </div>
                      <div className="mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Supplier
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Reseller
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Unassigned
                        </p>
                      </div>
                      <div className="flex mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.userInt?.supplier?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.userInt?.reseller?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {(state?.totalUser?.length) - (state?.userInt?.supplier?.length + state?.userInt?.supplier?.length)} */}
                          {/* {state?.totalUser?.length -
                            (state?.userInt?.reseller?.length +
                              state?.userInt?.supplier?.length) ?? 0} */}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="cyan"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Total Products
                      </p>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        {/* {state?.totalProd?.length ?? 0} */}
                      </p>
                      <div className="flex mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Daily
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Weekly
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Monthly
                        </p>
                      </div>
                      <div className="flex mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.productInt?.daily?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.productInt?.weekly?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.productInt?.monthly?.length ?? 0} */}
                        </p>
                      </div>
                      <div className=" mt-2 grid grid-cols-2 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Live
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Not Live
                        </p>
                      </div>
                      <div className=" mt-2 grid grid-cols-2 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {dashboard?.live?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.totalProd?.length - dashboard?.live?.length ??
                            0} */}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-blue-500 bg-yellow-100 rounded-full dark:text-red-100 dark:bg-red-500">
                      <svg className="w-6 h-6" fill="red" viewBox="0 0 24 24">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Total Bookings
                      </p>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        {/* {state?.totalOrders?.length +
                          state?.totalApiOrders?.length +
                          state?.totalB2cOrders?.length ?? 0} */}
                      </p>
                      <div className="flex mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Reseller
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          API
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          OTA
                        </p>
                      </div>
                      <div className="mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.totalOrders?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.totalApiOrders?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.totalB2cOrders?.length ?? 0} */}
                        </p>
                      </div>
                      <div className="flex mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Daily
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Weekly
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Monthly
                        </p>
                      </div>
                      <div className="mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.bookingInt?.daily?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.bookingInt?.weekly?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.bookingInt?.monthly?.length ?? 0} */}
                        </p>
                      </div>
                      <div className=" mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Success
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Failed
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Cancelled
                        </p>
                      </div>
                      <div className=" mt-2 grid grid-cols-3 grid-rows-1 gap-5">
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.bookingInt?.success?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.bookingInt?.failed?.length ?? 0} */}
                        </p>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          {/* {state?.bookingInt?.cancelled?.length ?? 0} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
 
        </>
    )
}