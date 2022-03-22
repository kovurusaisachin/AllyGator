import React from 'react'
import Sidebar from '../../../components/sidebar'
import Table from '../../../components/Table'
// import ResetPass from './ResetPassword'
function Connection() {
    const headerData = [{ name: "Name", href: "#home" },
    { name: "Major", href: "#features" },
    { name: "Department", href: "#features" },
    { name: "Nationality", href: "#register" },
    { name: "Status", href: "#team" },
    { name: "Linkedin", href: "#team" },]
    const connectionData = [{
        name: 'Jane Cooper',
        major: 'Regional Paradigm Technician',
        department: 'Optimization',
        nationality: 'Indian',
        email: 'jane.cooper@example.com',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    }]
    return (
        <div className="flex flex-col-2">
            <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="bg-white shadow">
                        <div className="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
                            <div className="py-6 md:flex md:items-center md:justify-between">
                                <div className="flex-1 min-w-0">
                                    {/* Profile */}
                                    <div className="flex items-center">
                                        <div>
                                            <div className="ml-3 flex flex-col items-start">
                                                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                                                    Connections
                                                </h1>
                                                <p className="text-gray-600">
                                                    Get an overview of all connections here
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-8 mt-8 grid grid-cols-10 gaps-4'>
                        <div className="col-span-7">
                            <Table header={headerData} data={connectionData} type="connection" />
                        </div>
                        <div className="col-span-3 bg-blue-100 rounded-lg px-5 py-5">
                        <div className="w-full">
                  <label className="block text-base font-semibold text-gray-900">
                    Search
                  </label>
                  <div className="relative mt-1.5 mb-5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      placeholder="Search by Course, Department or Faculty"
                      type="text"
                    //   value={state.query.searchTextC}
                    //   onChange={(e) => {
                    //     setState({
                    //       ...state,
                    //       query: {
                    //         ...state.query,
                    //         searchTextC: e.target.value,
                    //       },
                    //     });
                    //   }}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-base font-semibold text-gray-900">
                    Search
                  </label>
                  <div className="relative mt-1.5 mb-5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      placeholder="Search by Course, Department or Faculty"
                      type="text"
                    //   value={state.query.searchTextC}
                    //   onChange={(e) => {
                    //     setState({
                    //       ...state,
                    //       query: {
                    //         ...state.query,
                    //         searchTextC: e.target.value,
                    //       },
                    //     });
                    //   }}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-base font-semibold text-gray-900">
                    Search
                  </label>
                  <div className="relative mt-1.5 mb-5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      placeholder="Search by Course, Department or Faculty"
                      type="text"
                    //   value={state.query.searchTextC}
                    //   onChange={(e) => {
                    //     setState({
                    //       ...state,
                    //       query: {
                    //         ...state.query,
                    //         searchTextC: e.target.value,
                    //       },
                    //     });
                    //   }}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-base font-semibold text-gray-900">
                    Search
                  </label>
                  <div className="relative mt-1.5 mb-5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      placeholder="Search by Course, Department or Faculty"
                      type="text"
                    //   value={state.query.searchTextC}
                    //   onChange={(e) => {
                    //     setState({
                    //       ...state,
                    //       query: {
                    //         ...state.query,
                    //         searchTextC: e.target.value,
                    //       },
                    //     });
                    //   }}
                    />
                  </div>
                </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}
export default Connection