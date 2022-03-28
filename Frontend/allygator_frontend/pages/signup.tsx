import React, { useState, useEffect , useMemo} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "../components/constant";
import Swal from "sweetalert2"
import countryList from 'react-select-country-list'

export default function Signup() {
  const [state, setState] = useState({
    registerData: {
      firstname: "",
      lastname: "",
      department: 0,
      password: "",
      confPassword:"",
      email: "",
      gender: "",
      course: "",
      url: "",
      nationality: "",
      profile: "",
      specialization: "",
      status: "",
      emailIsValid:true
    },
  });
  const router = useRouter();
  const registerationAPI = axios.create({
    baseURL: `${API_URL}`,
    responseType: "json",
  });
  const nationality = useMemo(() => countryList().getData(), [])
  const handleSubmit = (e) => {
    e.preventDefault();
    registerationAPI
      .post("/register", state?.registerData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          {
            Swal.fire({
              icon: 'success',
              title: 'Registeration successfull',
              // text: "Server busy please try again later",
              // footer: '<a href="">Why do I have this issue?</a>'
            })
            console.log("registered perfectly");
            console.log(response);
            router.push("/login");
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
  const isValidEmailAddress = (address) => {
    return !! address.match('[a-z0-9]+@ufl.edu');
  }
  if (state?.registerData?.emailIsValid === false) {
    Swal.fire({
      icon:'warning',
      title:'UFL email id',
      text:'You need to have a ufl email id to signup ...'
    })
    setState({
      ...state,
      registerData:{
        ...state?.registerData,
        email:"",
        emailIsValid:true
      }
    })
  }
  return (
    <>
      <div className="flex p-1 py-4 bg-gray-800 place-content-center">
        <div className="max-w-lg overflow-hidden border border-gray-300 shadow-lg rounded-lg ">
          <form
            className="w-full bg-white px-3 py-2 max-w-lg opacity-100"
          >
            
            <div className="text-3xl font-bold text-center py-10 ">
                Sign Up Gators!!
            </div>
            <div className="px-2 pb-1">
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="text-md block px-3 py-2 
                     rounded-lg w-full bg-white border-2 border-gray-300
                      placeholder-gray-300 shadow-md 
                      focus:placeholder-gray-100 
                      focus:bg-white 
                      focus:border-gray-600 focus:outline-none"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    data-cy="reg-firstname-input"
                    value={state?.registerData?.firstname ?? ""}
                    onChange={e => {
                      setState({
                        ...state,
                        registerData: {
                          ...state.registerData,
                          firstname: e.target.value
                        }
                      });
                    }}
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="text-md block px-3 py-2 
                     rounded-lg w-full bg-white border-2 border-gray-300
                      placeholder-gray-300 shadow-md 
                      focus:placeholder-gray-100 
                      focus:bg-white 
                      focus:border-gray-600 focus:outline-none"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                    data-cy="reg-lastname-input"
                    value={state?.registerData?.lastname ?? ""}
                    onChange={e => {
                      setState({
                        ...state,
                        registerData: {
                          ...state.registerData,
                          lastname: e.target.value
                        }
                      });
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 mb-6">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-email"
                  >
                    UF Email
                  </label>
                  <input
                    className="text-md block px-3 py-2 
                     rounded-lg w-full bg-white border-2 border-gray-300
                      placeholder-gray-300 shadow-md 
                      focus:placeholder-gray-100 
                      focus:bg-white 
                      focus:border-gray-600 focus:outline-none"
                    id="grid-email"
                    type="email"
                    data-cy="reg-email-input"
                    placeholder="janedoe@ufl.edu"
                    value={state?.registerData?.email ?? ""}
                    onChange={e => {
                      setState({
                        ...state,
                        registerData: {
                          ...state.registerData,
                          email: e.target.value
                        }
                      });
                    }}
                    onBlur={() => setState({
                      ...state,
                      registerData:{
                        ...state?.registerData,
                        emailIsValid: isValidEmailAddress(state.registerData?.email)
                      }
                    })}
                    
                  />
                </div>
                <div className="w-1/2 px-3 mb-6">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="text-md block px-3 py-2 
                     rounded-lg w-full bg-white border-2 border-gray-300
                      placeholder-gray-300 shadow-md 
                      focus:placeholder-gray-100 
                      focus:bg-white 
                      focus:border-gray-600 focus:outline-none"
                    id="grid-password"
                    type="password"
                    data-cy="reg-password-input"
                    placeholder="***********"
                    value={state?.registerData?.password ?? ""}
                    onChange={e => {
                      setState({
                        ...state,
                        registerData: {
                          ...state.registerData,
                          password: e.target.value
                        }
                      });
                    }}
                  />
                </div>
                <div className="w-1/2 px-3 mb-6">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="text-md block px-3 py-2 
                     rounded-lg w-full bg-white border-2 border-gray-300
                      placeholder-gray-300 shadow-md 
                      focus:placeholder-gray-100 
                      focus:bg-white 
                      focus:border-gray-600 focus:outline-none"
                    id="grid-password"
                    type="password"
                    data-cy="reg-password-input"
                    placeholder="***********"
                    value={state?.registerData?.confPassword ?? ""}
                    onChange={e => {
                      setState({
                        ...state,
                        registerData: {
                          ...state.registerData,
                          confPassword: e.target.value
                        }
                      });
                    }}
                  />
                </div>
                <div className="w-1/2 px-3 mb-6">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-number"
                  >
                    Specialization
                  </label>
                  <input
                    className="text-md block px-3 py-2 
                     rounded-lg w-full bg-white border-2 border-gray-300
                      placeholder-gray-300 shadow-md 
                      focus:placeholder-gray-100 
                      focus:bg-white 
                      focus:border-gray-600 focus:outline-none"
                    id="grid-specialization"
                    type="text"
                    data-cy="reg-major-input"
                    placeholder="Full stack"
                    value={state?.registerData?.specialization ?? ""}
                    onChange={e => {
                      setState({
                        ...state,
                        registerData: {
                          ...state.registerData,
                          specialization: e.target.value
                        }
                      });
                    }}
                  />
                </div>
                <div className="w-1/2 px-3 mb-6">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-number"
                  >
                    Department
                  </label>
                  <select
                      required
                      className="text-md block px-3 py-2 
                     rounded-lg w-full bg-white border-2 border-gray-300
                      placeholder-gray-300 shadow-md 
                      focus:placeholder-gray-100 
                      focus:bg-white 
                      focus:border-gray-600 focus:outline-none"
                      id="grid-state"
                      data-cy="reg-gender-input"
                      value={state?.registerData?.department ?? ""}
                      onChange={e => {
                      setState({
                        ...state,
                        registerData: {
                          ...state.registerData,
                          department: parseInt(e.target.value)
                        }
                        });
                      }}
                    >
                      <option value={0}>Select</option>
                      <option value={111}>CSE</option>
                      <option value={112}>Industrial and Systems Engineering</option>
                      <option value={113}>Electrical Engineering</option>
                      <option value={114}>Info Systems and Operation Management</option>
                      <option value={115}>Mechanical/Aerospace Engineering</option>
                    </select>
                </div>
              </div>

              <div className="flex flex-wrap m-6 mb-2 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-city"
                  >
                    Nationality
                  </label>
                  <select
                    className="text-md block px-3 py-2 
                     rounded-lg w-full bg-white border-2 border-gray-300
                      placeholder-gray-300 shadow-md 
                      focus:placeholder-gray-100 
                      focus:bg-white 
                      focus:border-gray-600 focus:outline-none"
                    id="grid-city"
                    placeholder="Indian"
                    data-cy="reg-nationality-input"
                    value={state?.registerData?.nationality ?? ""}
                    onChange={e => {
                      setState({
                        ...state,
                        registerData: {
                          ...state.registerData,
                          nationality: e.target.value
                        }
                      });
                    }}
                  >
                    {nationality.map(x => (
                      <option value={x.value}>{x.label}</option>
                    ))}
                  </select>  
                </div>
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-state"
                  >
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="text-md block px-3 py-2 
                     rounded-lg w-full bg-white border-2 border-gray-300
                      placeholder-gray-300 shadow-md 
                      focus:placeholder-gray-100 
                      focus:bg-white 
                      focus:border-gray-600 focus:outline-none"
                      id="grid-state"
                      data-cy="reg-gender-input"
                      value={state?.registerData?.gender ?? ""}
                      onChange={e => {
                      setState({
                        ...state,
                        registerData: {
                          ...state.registerData,
                          gender: e.target.value
                        }
                        });
                      }}
                    >
                      <option value="">Select </option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-zip"
                  >
                    Status
                  </label>
                  <select
                    required
                    data-cy="reg-phoneno-input"
                    className="text-md block px-3 py-2 
                     rounded-lg w-full bg-white border-2 border-gray-300
                      placeholder-gray-300 shadow-md 
                      focus:placeholder-gray-100 
                      focus:bg-white 
                      focus:border-gray-600 focus:outline-none"
                    id="grid-zip"
                    placeholder={"123-444-2828"}
                    value={state?.registerData?.status ?? ""}
                      onChange={e => {
                      setState({
                        ...state,
                        registerData: {
                          ...state.registerData,
                          status: e.target.value
                        }
                        });
                      }}
                    >
                      <option value="">Select status</option>
                      <option value="alumni">Alumni</option>
                      <option value="incoming">Incoming</option>
                      <option value="active">Active</option>
                    </select>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 text-center bg-gray-200">
              <div className="relative  text-sm">
                <span className="mr-1 text-gray-500">
                  Already have an account?
                </span>
                <a
                  href="/login"
                  className="inline font-medium text-blue-300 underline"
                >
                  Login Here
                </a>
              </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  Sign Up
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}