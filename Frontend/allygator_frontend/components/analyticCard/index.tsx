import React from "react";
export default function AnalyticCard() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                {/* Profile */}
                <div className="flex items-center">
                  <div>
                    <div className="ml-3 flex flex-col items-start">
                      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        Dashboard
                      </h1>
                      <p className="text-gray-600">
                        Get an overview of all activity here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full p-6 lg:max-w-7xl lg:mx-auto lg:p-8">
            <main className="h-full overflow-y-auto">
              <div className="container  mx-auto grid">
                {/* Cards */}
                <div className="grid gap-6 mb-2 md:grid-cols-2 xl:grid-cols-4">
                  <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                    <div className="p-4 flex items-center">
                      <div className="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="w-5 h-5"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Connections
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                          63
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                    <div className="p-4 flex items-center">
                      <div className="p-3 rounded-full text-green-500 dark:text-green-100 bg-indigo-100 dark:bg-green-500 mr-4">
                      <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Posts
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                          20
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                    <div className="p-4 flex items-center">
                      <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Activities
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                          376
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                    <div className="p-4 flex items-center">
                      <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Pending connections
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                          35
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
        </div>
      </div>
    </>
  );
}