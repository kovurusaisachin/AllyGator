import React, { useState, useEffect } from "react";
import ProfileCard from "../../../components/profileCard";
import Sidebar from "../../../components/sidebar";
import axios from "Axios";
import { API_URL } from "../../../components/constant";
import Router from "next/router";
import Swal from "sweetalert2"

function Profile() {
  const [counter, setCounter] = useState(0);
  const [inputValues, setInputValues] = useState({});
  if (typeof window !== "undefined") {
    var token = window.sessionStorage.getItem("token");
    var userId = window.sessionStorage.getItem("userId");
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  // const data = props?.data ?? "";
  const handleCancel = () => {
    Router.reload()
  };
  const profileApi = axios.create({
    baseURL: `${API_URL}`,
    responseType: "json",
  });
  const handleUpdate = (e) => {
      e.preventDefault();
      profileApi
        .put(`/user/${userId}`, state?.profileData,config)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            {
              Swal.fire({
                icon: 'success',
                title: 'Profile Updated successfully',
                // text: "Server busy please try again later",
                // footer: '<a href="">Why do I have this issue?</a>'
              })
            }
          }
        })
        .catch(err => {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            console.log(err.respone)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please check your password and email ...',
              // footer: '<a href="">Why do I have this issue?</a>'
            })
          } else if (err.request) {
            // client never received a response, or request never left
            console.log(err.request)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Server busy please try again later",
              // footer: '<a href="">Why do I have this issue?</a>'
            })
          } else {
            // anything else
            console.log('something bad happened, retry again...', err)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Something bad happened, retry again...",
              // footer: '<a href="">Why do I have this issue?</a>'
            })
          }
        });
  };
  const handleClick = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    console.log(counter);
  };
  const handleDClick = (e) => {
    e.preventDefault();
    counter > 0 ? setCounter(counter - 1) : setCounter(0);
    console.log(counter);
  };
  
  const [state, setState] = useState({
    profileData: [],
  });
  
  useEffect(() => {
    getProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const getProfileData = async () => {
    await axios
      .get(`${API_URL}/user/${userId}`, config)
      .then((response) => {
        console.log("pk", response);
        if (response.status === 200) {
          setState({
            ...state,
            profileData: response?.data?.data,
          });
        }
      })
      .catch((err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log(err.respone);
        } else if (err.request) {
          // client never received a response, or request never left
          console.log(err.request);
        } else {
          // anything else
          console.log("something bad happened, retry again...", err);
        }
      });
  };

  return (
    <div className="flex flex-col-2">
      <Sidebar />
      {/* <ProfileCard data={state?.profileData}/> */}
      <div className="flex flex-col bg-gray-100 w-full">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                {/* Profile */}
                <div className="flex items-center">
                  <div>
                    <div className="ml-3 flex flex-col items-start">
                      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        Profile Board
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10 my-10 px-4 py-4 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Check and Update your profile details here.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={state?.profileData?.firstname ?? ""}
                            onChange={e => {
                              setState({
                                ...state,
                                profileData: {
                                  ...state.profileData,
                                  firstname: e.target.value
                                }
                              });
                            }}
                            autoComplete="given-name"
                            className="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            value={state?.profileData?.lastname ?? ""}
                            onChange={e => {
                              setState({
                                ...state,
                                profileData: {
                                  ...state.profileData,
                                  lastname: e.target.value
                                }
                              });
                            }}
                            autoComplete="family-name"
                            className="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            data-cy="email-address"
                            value={state?.profileData?.email ?? ""}
                            onChange={e => {
                              setState({
                                ...state,
                                profileData: {
                                  ...state.profileData,
                                  email: e.target.value
                                }
                              });
                            }}
                            autoComplete="email"
                            className="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="Department"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Department
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            value={state?.profileData?.deptName ?? ""}
                            onChange={e => {
                              setState({
                                ...state,
                                profileData: {
                                  ...state.profileData,
                                  deptName: e.target.value
                                }
                              });
                            }}
                            autoComplete="family-name"
                            className="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-4 sm:col-span-4">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Course
                          </label>
                          {state?.profileData?.course?.split(",").map((x) => (
                            <span className="mt-2 py-1 px-2 inline-flex text-xs leading-5 font-bold rounded-full bg-gray-100 text-gray-600">
                              {x}
                            </span>
                          ))}
                        </div>
                        <div className="col-span-1 sm:col-span-1">
                          {/* <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Add 
                          </label> */}
                          <button
                            onClick={handleClick}
                            className="mt-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-800 "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>{" "}
                            <span className="mx-1 ">Add</span>
                          </button>
                        </div>
                        <div className="col-span-1 sm:col-span-1">
                          <button
                            onClick={handleDClick}
                            className="mt-1 inline-flex  justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-800 "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>{" "}
                            <span className="mx-1 ">Del</span>
                          </button>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          {Array.from(Array(counter)).map((c, index) => {
                            return (
                              <>
                                <div className="col-span-4 sm:col-span-4">
                                  <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Course
                                  </label>
                                  <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    onChange={e => {
                                      setState({
                                        ...state,
                                        profileData: {
                                          ...state.profileData,
                                          course: state?.profileData?.course.concat(e.target.value)
                                        }
                                      });
                                    }}
                                    autoComplete="family-name"
                                    className="mt-2 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>
                              </>
                            );
                          })}
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Status
                          </label>
                          <input
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            value={state?.profileData?.status ?? ""}
                            onChange={e => {
                              setState({
                                ...state,
                                profileData: {
                                  ...state.profileData,
                                  status: e.target.value
                                }
                              });
                            }}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Major
                          </label>
                          <input
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            value={state?.profileData?.profile ?? ""}
                            onChange={e => {
                              setState({
                                ...state,
                                profileData: {
                                  ...state.profileData,
                                  cloud: e.target.value
                                }
                              });
                            }}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Specialization
                          </label>
                          <input
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            value={state?.profileData?.specialization ?? ""}
                            onChange={e => {
                              setState({
                                ...state,
                                profileData: {
                                  ...state.profileData,
                                  specialization: e.target.value
                                }
                              });
                            }}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nationality
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            onChange={e => {
                              setState({
                                ...state,
                                profileData: {
                                  ...state.profileData,
                                  nationality: e.target.value
                                }
                              });
                            }}
                            value={state?.profileData?.nationality ?? ""}
                            autoComplete="street-address"
                            className="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Gender
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            value={state?.profileData?.gender ?? ""}
                            onChange={e => {
                              setState({
                                ...state,
                                profileData: {
                                  ...state.profileData,
                                  gender: e.target.value
                                }
                              });
                            }}
                            autoComplete="address-level2"
                            className="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        onClick={handleCancel}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-800 "
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        onClick={handleUpdate}
                        className="mx-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-800 "
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
