import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import AnalyticCard from "../../components/analyticCard";
import Table from "../../components/Table";
import axios from "Axios";
import { API_URL } from "../../components/constant";

export default function dashboard() {
  const [state, setState] = useState({
    userData: [],
    query: {
      searchText: "",
      status: "success",
      department: "All",
      nationality: "all",
    },
    result:[]
  });
  

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('*********',state?.userData?.data)
  useEffect(() => {
      const newResults = state?.userData?.data?.filter(
          product =>
            product?.firstname
              ?.toLowerCase()
              ?.includes(state.query.searchText.toLowerCase()) ||
            product?.lastname
              ?.toLowerCase()
              ?.includes(state.query.searchText?.toLowerCase()) ||
            product?.nationality
              ?.toLowerCase()
              ?.includes(state.query.searchText?.toLowerCase()) ||
            product?.specialization
              ?.toLowerCase()
              ?.includes(state.query.searchText?.toLowerCase()) ||
            product?.email
              ?.toLowerCase()
              ?.includes(state.query.searchText?.toLowerCase()) ||
            product?.specialization
              ?.toLowerCase()
              ?.includes(state.query.searchText?.toLowerCase()) 
        )
        ?.filter(product => product?.status === state?.query?.status)
        ?.filter(product => product?.nationality === state?.query?.nationality);
        
    console.log('ppp',newResults)
      setState({
        ...state,
        result: newResults
      });
  }, [
    state.query.searchText,
    state?.query?.department,
    state.query.nationality,
    state.query.status,
    state?.userData
  ]);
  
  console.log('ppk',state?.result)
  console.log('######',state?.userData?.data)

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };


  const fetchData = async () => {
    await axios
      .get(`${API_URL}/user`, { headers })
      .then((response) => {
        setState({
          ...state,
          userData: response?.data,
        });
      })
      .catch((err) => {
        if (err.request) {
          console.log(err.request);
        }
        if (err.response) {
          console.log(err.response);
        }
      });
  };

  const tableHeader = [
    { name: "Name", href: "#home" },
    { name: "Major", href: "#features" },
    { name: "Department", href: "#features" },
    { name: "Nationality", href: "#register" },
    { name: "Status", href: "#team" },
    { name: "Linkedin", href: "#team" },
  ];
  const courseHeader = [
    { name: "Name", href: "#home" },
    { name: "Course", href: "#features" },
    { name: "Department", href: "#features" },
    { name: "Faculty", href: "#register" },
    { name: "Likes", href: "#register" },
    { name: "Dislike", href: "#register" },
  ];
  const courseData = [
    {
      name: "Database System Implementation",
      major: "Computer Science & Information Engineering",
      department: "Computer Science",
      faculty: "Alin Dobra",
      likes: 50,
      dislike: 10,
    },
    {
      name: "Software Engineering",
      major: "Computer Science & Information Engineering",
      department: "Computer Science",
      faculty: "Alin Dobra",
      likes: 25,
      dislike: 1,
    },
    // More people...
  ];
  return (
    <>
      {/* sidebar */}
      <div className="flex flex-col-1">
        <Sidebar />
        <div className="flex flex-col bg-gray-100 w-full">
          <AnalyticCard />
          <div className="mx-8">
            <h3 className="text-2xl my-2 font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
              Connection's list
            </h3>
            <div className="grid grid-cols-6  space-x-2 mt-2 mb-4 max-w-screen-xl mx-auto w-full">
              <div className="col-span-2">
                <div className="w-full">
                  <label className="block text-base font-semibold text-gray-900">
                    Search
                  </label>
                  <div className="relative mt-1.5">
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
                      placeholder="Search Connections"
                      type="text"
                      value={state.query.searchText}
                      onChange={(e) => {
                        setState({
                          ...state,
                          query: {
                            ...state.query,
                            searchText: e.target.value
                          }
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="w-full">
                  <label className="block text-base font-semibold text-gray-900">
                    Department
                  </label>
                  <div className="relative mt-1.5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {/* <svg
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
                  </svg> */}
                    </div>
                    <select
                      className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      // placeholder="Search D atus"
                      value={state.query.department}
                      onChange={(e) => {
                        setState({
                          ...state,
                          query: {
                            ...state.query,
                            department: e.target.value
                          }
                        });
                      }}
                    >
                      <option value="all">All</option>
                      <option value="reseller">Reseller</option>
                      <option value="api">API</option>
                      <option value="b2c">OTA</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full">
                  <label className="block text-base font-semibold text-gray-900">
                    Nationality
                  </label>
                  <div className="relative mt-1.5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 13l4 4L19 7"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <select
                      className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      placeholder="Search Bookings status"
                      value={state.query.nationality ?? ""}
                      onChange={(e) => {
                        setState({
                          ...state,
                          query: {
                            ...state.query,
                            nationality: e.target.value
                          }
                        });
                      }}
                    >
                      <option value="all">All</option>

                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-base font-semibold text-gray-900">
                  Status
                </label>
                <div className="relative mt-1.5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 13l4 4L19 7"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <select
                      className="block md:text-sm w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      placeholder="Search Bookings status"
                      value={state.query.status ?? ""}
                      onChange={(e) => {
                        setState({
                          ...state,
                          query: {
                            ...state.query,
                            status: e.target.value
                          }
                        });
                      }}
                    >
                      <option value="all">All</option>
                      <option value="incoming">Incoming</option>
                      <option value="active">Active</option>
                      <option value="alumni">Alumni</option>
                    </select>
                  </div>
              </div>
            </div>
            <Table header={tableHeader} data={state?.userData} type="user" />
          </div>
          <div className="mx-8  my-10">
            <h3 className="text-2xl font-bold my-2 leading-7 text-gray-900 sm:leading-9 sm:truncate">
              Top Course list
            </h3>
            <Table header={courseHeader} data={courseData} type="course" />
          </div>
        </div>
      </div>
    </>
  );
}
