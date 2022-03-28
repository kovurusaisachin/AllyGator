import React, { useState, useEffect, useMemo } from "react";
import Sidebar from "../../components/sidebar";
import AnalyticCard from "../../components/analyticCard";
import Table from "../../components/Table";
import axios from "Axios";
import { API_URL } from "../../components/constant";
import CourseTable from "../../components/Table/courseTable";
import FacultyTable from "../../components/Table/facultyTable";
import { CometChat } from "@cometchat-pro/chat";
import { COMETCHAT_CONSTANTS } from "../../components/constant/index";
import countryList from 'react-select-country-list'


const parseJwt = (token) => {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};

export default function dashboard() {
  const [state, setState] = useState({
    userData: [],
    chatData: [],
    courseData: [],
    courseResult: [],
    facultyData: [],
    facultyResult: [],
    departmentResult:[],
    query: {
      searchText: "",
      searchTextF: "",
      searchTextC: "",
      status: "active",
      department: "",
      nationality: "",
      course: "",
    },
    result: [],
  });
  if (typeof window !== "undefined") {
    var token = window.sessionStorage.getItem("token");
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const tokenData = parseJwt(token);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const getData = () => {
    let endpoints = [
      `${API_URL}/users`,
      `${API_URL}/mail/${tokenData?.Email}`,
      `${API_URL}/course`,
      `${API_URL}/faculty`,
      `${API_URL}/department`,

    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint, config))).then(
      ([
        { data: user },
        { data: chat },
        { data: course },
        { data: faculty },
        { data: department },
      ]) => {
        setState({
          ...state,
          userData: user?.data,
          result: user?.data,
          chatData: chat?.data,
          courseData: course?.data,
          courseResult: course?.data,
          facultyData: faculty?.data,
          facultyResult: faculty?.data,
          departmentResult: department?.data
        });
      }
    );
  };
  // console.log(state?.userData,'noopur')
  useEffect(() => {
    const newResults = state?.userData?.filter(
      (product) =>
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
          ?.includes(state.query.searchText?.toLowerCase()) ||
        product?.course
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase())
    );
    // ?.filter(product => product?.status === state?.query?.status)

    // ?.filter(product => product?.department === state?.query?.department)
    // ?.filter(product => product?.nationality === state?.query?.nationality);

    console.log("ppp", newResults);

    setState({
      ...state,
      result: newResults,
    });
  }, [
    state.query.searchText,
    state?.query?.department,
    state.query.nationality,
    state.query.status,
    state?.query?.course,
    // state?.userData
  ]);
  useEffect(() => {
    const newResults = state?.courseData?.filter(
      (product) =>
        product?.coursename
          ?.toLowerCase()
          ?.includes(state.query.searchTextC?.toLowerCase()) ||
        product?.facultyname
          ?.toLowerCase()
          ?.includes(state.query.searchTextC?.toLowerCase()) ||
        product?.deptName
          ?.toLowerCase()
          ?.includes(state.query.searchTextC?.toLowerCase())
    );

    setState({
      ...state,
      courseResult: newResults,
    });
  }, [
    state.query.searchTextC,
    // state?.userData
  ]);
  useEffect(() => {
    const newResults = state?.facultyData?.filter(
      (product) =>
        product?.info
          ?.toLowerCase()
          ?.includes(state.query.searchTextF?.toLowerCase()) ||
        product?.facultyname
          ?.toLowerCase()
          ?.includes(state.query.searchTextF?.toLowerCase()) ||
        product?.deptName
          ?.toLowerCase()
          ?.includes(state.query.searchTextF?.toLowerCase())
    );

    setState({
      ...state,
      facultyResult: newResults,
    });
  }, [
    state.query.searchTextF,
    // state?.userData
  ]);

  const nationality = useMemo(() => countryList().getData(), [])
  const tableHeader = [
    { name: "Name", href: "#home" },
    { name: "Specialization", href: "#features" },
    { name: "Courses", href: "#features" },
    { name: "Nationality", href: "#register" },
    { name: "Status", href: "#team" },
    { name: "Linkedin", href: "#team" },
  ];
  const courseHeader = [
    { name: "Course", href: "#features" },
    // { name: "Department", href: "#features" },
    { name: "Faculty", href: "#register" },
  ];
  const facultyHeader = [
    { name: "Faculty", href: "#features" },
    { name: "RMP Link", href: "#features" },
  ];

  if (typeof window !== "undefined") {
    window.sessionStorage.setItem("userId", state?.chatData?.idStudent);
    window.sessionStorage.setItem(
      "username",
      state?.chatData?.firstname + " " + state?.chatData?.lastname
    );
  }
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
            <div className="grid grid-cols-6 space-x-2 mt-2 mb-4 max-w-screen-xl mx-auto w-screen-xl">
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
                            searchText: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full">
                  <label className="block text-base font-semibold text-gray-900">
                    Courses
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      className="block md:text-sm w-full pl-2 pr-3 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
                      // placeholder="Search D atus"
                      value={state.query.course}
                      onChange={(e) => {
                        setState({
                          ...state,
                          query: {
                            ...state.query,
                            course: e.target.value,
                          },
                        });
                      }}
                    >
                      {state?.courseResult?.map(
                        (x) => <option value={x.idCourse}>{x.coursename}</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full">
                  <label className="block text-base font-semibold text-gray-900">
                    Department
                  </label>
                  <div className="relative mt-1.5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                        />
                      </svg>
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
                            department: e.target.value,
                          },
                        });
                      }}
                    >
                      {state?.departmentResult?.map((x) => (
                        <option value={x.idDepartment}>{x.deptName}</option>
                      ))}
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
                            nationality: e.target.value,
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
                          status: e.target.value,
                        },
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
            <Table header={tableHeader} data={state?.result} type="user" />
          </div>
          <div className="mx-8 my-10 grid grid-cols-5 gap-3">
            <div className="mr-2 col-span-3">
              <h3 className="text-2xl font-bold my-2 leading-7 text-gray-900 sm:leading-9 sm:truncate">
                Course list
              </h3>
              <div className="col-span-1">
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
                      value={state.query.searchTextC}
                      onChange={(e) => {
                        setState({
                          ...state,
                          query: {
                            ...state.query,
                            searchTextC: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <CourseTable header={courseHeader} data={state?.courseResult} />
            </div>
            <div className="ml-2  col-span-2">
              <h3 className="text-2xl font-bold my-2 leading-7 text-gray-900 sm:leading-9 sm:truncate">
                Faculty list
              </h3>
              <div className="col-span-1">
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
                      placeholder="Search by Faculty name or Department"
                      type="text"
                      value={state.query.searchTextF}
                      onChange={(e) => {
                        setState({
                          ...state,
                          query: {
                            ...state.query,
                            searchTextF: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <FacultyTable
                header={facultyHeader}
                data={state?.facultyResult}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
