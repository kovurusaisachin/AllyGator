import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { API_URL } from "../components/constant";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2"

export default function Login() {
  const [state,setState] = useState({
      loginData:{
        Email: "",
        Password: "",
        emailIsValid:true
      },
  })
  
  const router = useRouter();
  const loginApi = axios.create({
    baseURL: `${API_URL}`,
    responseType: "json",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    loginApi
      .post("/login", state?.loginData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          {
            Swal.fire({
              icon: 'success',
              title: 'Login successfull',
              // text: "Server busy please try again later",
              // footer: '<a href="">Why do I have this issue?</a>'
            })
            window.sessionStorage.setItem("token",response?.data?.token)
            router.push("/dashboard");
          }
        }
      })
      .catch((err) => {
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
  if (state?.loginData?.emailIsValid === false) {
    Swal.fire({
      icon:'warning',
      title:'UFL email id',
      text:'You need to have a ufl email id to login ...'
    })
    setState({
      ...state,
      loginData:{
        ...state?.loginData,
        Email:"",
        emailIsValid:true
      }
    })
  }
  return (
    <>
      <div className="container max-w-full mx-auto py-2 px-6">
        <div className="font-sans">
          <div className="max-w-sm mx-auto px-6">
            <div className="relative flex flex-wrap">
              <div className="w-full relative">
                <Link href="/">
                  <div className="">
                    <img
                      src="https://i.pinimg.com/originals/79/ae/30/79ae3050000579337f79c78e8ad2e6eb.jpg"
                      className="scale-50  max-w-full rounded-full items-center justify-center"
                      alt=""
                    />
                  </div>
                </Link>
                <div className="text-center text-4xl font-bold text-black">
                  Welcome Gator
                </div>
                <div className="mt-4">
                  <form onSubmit={handleSubmit}>
                    <div className="mx-auto max-w-lg">
                      <div className="py-2">
                        <span className="px-1 text-sm text-gray-600">
                          Email
                        </span>
                        <input
                          required
                          placeholder="abc@ufl.edu"
                          type="email"
                          data-cy="login-email-input"
                          value={state?.loginData?.Email ?? ""}
                          onBlur={() => setState({
                            ...state,
                            loginData:{
                              ...state?.loginData,
                              emailIsValid: isValidEmailAddress(state.loginData?.Email)
                            }
                          })}
                          onChange={(e) => {
                            setState({
                              ...state,
                              loginData: {
                                ...state.loginData,
                                Email: e.target.value,
                              },
                            });
                          }}
                          className="text-md block px-3 py-2 
                           rounded-lg w-full bg-white border-2 border-gray-300
                            placeholder-gray-300 shadow-md 
                            focus:placeholder-gray-100 
                            focus:bg-white 
                            focus:border-gray-600 focus:outline-none"
                        />
                      </div>
                      <div className="py-2" x-data="{ show: true }">
                        <span className="px-1 text-sm text-gray-600">
                          Password
                        </span>
                        <div className="relative">
                          <input
                            required
                            placeholder="*********"
                            type="password"
                            value={state?.loginData?.Password ?? ""}
                            onChange={(e) => {
                              setState({
                                ...state,
                                loginData: {
                                  ...state.loginData,
                                  Password: e.target.value,
                                },
                              });
                            }}
                            data-cy="login-password-input"
                            className="text-md block px-3 py-2 rounded-lg w-full 
          bg-white border-2 border-gray-300 placeholder-gray-300 shadow-md
          focus:placeholder-gray-100
          focus:bg-white 
          focus:border-gray-600  
          focus:outline-none"
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"></div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <label className="block text-gray-500 font-bold my-4">
                          <input
                            type="checkbox"
                            className="leading-loose text-pink-600"
                          />{" "}
                          <span className="py-2 text-sm text-gray-600 leading-snug">
                            {" "}
                            Remember Me{" "}
                          </span>
                        </label>{" "}
                        <label className="block text-gray-500 font-bold my-4">
                          <a
                            href="/forgotpassword"
                            className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
                          >
                            <span>Forgot Password?</span>
                          </a>
                        </label>
                      </div>{" "}
                      <button
                        className="mt-3 text-lg font-semibold 
          bg-gray-800 w-full text-white rounded-lg
          px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-gray-800 mx-2 my-2 flex items-center justify-center">
              OR
            </div>
            <div className="text-sm text-gray-300 flex items-center justify-center">
              Dont have an account?{" "}
              <Link href="/signup">
                Sign up here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
