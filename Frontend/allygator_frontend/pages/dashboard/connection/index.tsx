import axios from "axios";
import React, { useState, useEffect,useMemo } from "react";
import Sidebar from "../../../components/sidebar";
import ConnectionTable from "../../../components/Table/connection";
import { API_URL } from "../../../components/constant";
import countryList from 'react-select-country-list'


function Connection() {
  const nationality = useMemo(() => countryList().getData(), [])
  const headerData = [
    { name: "Name", href: "#home" },
    { name: "Specialization", href: "#nation" },
    { name: "Linkedin", href: "#linkedin" },
    { name: "Connect", href: "#features" },
  ];
  const [state, setState] = useState({
    connectionData: [],
    userData:[],
    result: [],
    finalResult:[],
    newConnectionData: [],
    departmentResult:[],
    query:{
      searchText: "",
      searchNationality:"",
      searchDomain:"",
      searchDepartment:""
    }
  });
  if (typeof window !== "undefined") {
    var token = window.sessionStorage.getItem("token");
    var userId = window.sessionStorage.getItem('userId');
  }
  useEffect(() => {
    fetchConnections();
  }, [token]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const fetchConnections = () => {
    let endpoints = [
      `${API_URL}/userconnection/${parseInt(userId)}`,
      `${API_URL}/department`,
      `${API_URL}/users`,
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint, config))).then(
      ([
        { data: connection },
        { data: department },
        { data: users },

      ]) => {
        setState({
          ...state,
          connectionData: connection?.data,
          departmentResult: department?.data,
          userData: users?.data
        });
      }
    );
  };
  
  useEffect(() => {
    function getDifference(array1, array2) {
      return array1.filter(object1 => {
        return !array2.some(object2 => {
          return object1.email === object2.email;
        });
      });
    }
    console.log(getDifference(state?.userData, state?.connectionData))
    setState({
      ...state,
      newConnectionData: getDifference(state?.userData, state?.connectionData)
    })
  },[state?.connectionData])
  console.log(state,'noopur')
  useEffect(() => {
    const newData = state?.newConnectionData?.filter(
      x => x.idStudent !== parseInt(userId)
    )
    setState({
      ...state,
      result: newData,
      finalResult: newData
    })
  },[state?.newConnectionData])

  useEffect(() => {
    const newResults = state?.result?.filter(
      (user) =>
        user?.firstname
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) ||
        user?.lastname
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) ||
        user?.email
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) ||
        user?.specialization
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) ||
        user?.profile
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) ||
          user?.deptName
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) 
        // user?.deptName?.toLowerCase()?.includes(state?.query?.searchDepartment?.toLowerCase())
    )

    setState({
      ...state,
      finalResult: newResults,
    });
  }, [
    state.query.searchText
    // state?.userData
  ]);
  useEffect(() => {
    const newResults = state?.result?.filter(
      (user) =>
        user?.deptName?.toLowerCase()?.includes(state?.query?.searchDepartment?.toLowerCase())
    )
    setState({
      ...state,
      finalResult: newResults,
    });
  }, [
    state.query.searchDepartment
    // state?.userData
  ]);
  useEffect(() => {
    const newResults = state?.result?.filter(
      (user) =>
        user?.profile?.toLowerCase()?.includes(state?.query?.searchDomain?.toLowerCase())
    )
    setState({
      ...state,
      finalResult: newResults,
    });
  }, [
    state.query.searchDomain
    // state?.userData
  ]);
  useEffect(() => {
    const newResults = state?.result?.filter(
      (user) =>
        user?.nationality?.toLowerCase()?.includes(state?.query?.searchNationality?.toLowerCase())
    )
    setState({
      ...state,
      finalResult: newResults,
    });
  }, [
    state.query.searchDomain
    // state?.userData
  ]);
  return (
    <div className="flex flex-col-2 bg-gray-100">
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
        <div className="mx-8 mt-2  w-auto">
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
              placeholder="Search by name, email or specialization"
              type="text"
                value={state.query.searchText}
                onChange={(e) => {
                  setState({
                    ...state,
                    query: {
                      ...state.query,
                      searchText: e.target.value,
                    },
                  });
                }}
            />
          </div>
        </div>

        <div className="mx-8 border-b bg-white rounded-lg border-gray-200 dark:border-gray-200">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <a
                href="#"
                className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <svg
                  className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
                All
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
                aria-current="page"
              >
                <svg
                  className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                People
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <svg
                  className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
                Company
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <svg
                  className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-8 mt-4  grid grid-cols-10 gaps-4">
          <div className="col-span-7 ">
            <h3 className="text-2xl font-bold mb-1 leading-7 text-gray-900 sm:leading-9 sm:truncate">
              People
            </h3>
            <ConnectionTable header={headerData} data={state?.finalResult} />
          </div>
          <div className="col-span-3 bg-white mb-8 rounded-lg px-5 py-5">
            <h3 className="text-2xl font-bold mb-4 leading-7 text-gray-900 sm:leading-9 sm:truncate">
              Filter's
            </h3>
            <div className="w-full">
              <label className="block text-base font-semibold text-gray-900">
                Nationality
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
                <select
                      className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      placeholder="Search Bookings status"
                      value={state.query.searchNationality ?? ""}
                      onChange={(e) => {
                        setState({
                          ...state,
                          query: {
                            ...state.query,
                            searchNationality: e.target.value,
                          },
                        });
                      }}
                    >
                      {nationality.map(x => (
                      <option value={x.label}>{x.label}</option>
                    ))}
                    </select>
              </div>
            </div>
            <hr />
            <div className="w-full">
              <label className="block text-base font-semibold text-gray-900">
                Department
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
                                    <select
                      className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      // placeholder="Search D atus"
                      value={state.query.searchDepartment}
                      onChange={(e) => {
                        setState({
                          ...state,
                          query: {
                            ...state.query,
                            searchDepartment: e.target.value,
                          },
                        });
                      }}
                    >
                      {state?.departmentResult?.map((x) => (
                        <option value={x.deptName}>{x.deptName}</option>
                      ))}
                    </select>
              </div>
            </div>
            <hr />
            <div className="w-full">
              <label className="block text-base font-semibold text-gray-900">
                Domain
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
                {/* <input
                  className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                  placeholder="Search by Course, Department or Faculty"
                  type="text"
                    value={state.query.searchDomain}
                    onChange={(e) => {
                      setState({
                        ...state,
                        query: {
                          ...state.query,
                          searchDomain: e.target.value,
                        },
                      });
                    }}
                /> */}
                                <select
                      className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      // placeholder="Search D atus"
                      value={state.query.searchDomain}
                      onChange={(e) => {
                        setState({
                          ...state,
                          query: {
                            ...state.query,
                            searchDomain: e.target.value,
                          },
                        });
                      }}
                    >
                      {state?.result?.map((x) => (
                        <option value={x.profile}>{x.profile}</option>
                      ))}
                    </select>
              </div>
            </div>
            <hr />
            <div className="w-full">
              <label className="block text-base font-semibold text-gray-900">
                Experience
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
  );
}
export default Connection;
