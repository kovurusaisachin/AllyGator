import Sidebar from "../../../../components/sidebar"
import Router, { useRouter } from "next/router";
import Link from "next/link"
import axios from "Axios";
import { API_URL } from "../../../../components/constant";
import React, { useState, useEffect } from "react"
export default function forumPage() {
  const router = useRouter();
  const sluga = router.query.slug  ?? "1";
  console.log(router.query,'oomsos')
  const [state, setState] = useState({
    counter: 0,
    answer: "",
    final:"",
    forumDataO: [],
    forumData: {
      firstname: "",
      lastname: "",
      title: "",
      description: "",
      timestamp: "",
      category: ""
    }
  })

  if (typeof window !== "undefined") {
    var token = window.sessionStorage.getItem("token");
    
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const getData = () => {
    let endpoints = [
      `${API_URL}/post/post/${sluga}`

    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint, config))).then(
      ([
        { data: forum },
      ]) => {
        setState({
          ...state,
          forumDataO: forum?.data,
          forumData: forum?.data

        });
      }
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      final: state?.answer,
      answer:""
    })
  }
  console.log(state, 'pkp')
  const handleCancel = (e) => {
    e.preventDefault();
    setState({
      ...state,
      answer:""
    })
  }
  
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
                        {state?.forumData?.[0]?.title ?? ""}

                      </h3>
                      <p className="text-gray-600">
                        Post related details here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="my-10 container bg-white max-w-4xl px-10 py-6 mx-10 rounded-lg shadow-sm dark:bg-coolGray-900">
            <div>
              <a rel="noopener noreferrer" href="#" className="flex items-center">
                <span className="font-semibold hover:underline dark:text-coolGray-400">
                  {state?.forumData?.[0]?.firstname + " " + state?.forumData?.[0]?.lastname ?? ""}
                </span>
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-coolGray-400">{new Date(state?.forumData?.[0]?.timestamp?.split("T")[0]).toDateString()}</span>
            </div>
            <div className="mt-3">

              <a className="font-bold hover:text-blue-900 hover:underline cursor-pointer">
                {state?.forumData?.[0]?.title ?? ""}
              </a>
              <p className="mt-2">
                {state?.forumData?.[0]?.description ?? ""}
              </p>
            </div>
            {/* <div className="flex flex-col-2">

              <div className="flex items-center gap-4 justify-start mt-4">
                {
                  state?.forumData?.[0]?.category?.split(",")?.map((x) => {
                    { console.log(x) }
                    <div className="flex items-end gap-4 justify-end mt-4">
                      <button className="flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        <span className="mx-1">{state?.forumData?.[0]?.category}</span>
                      </button>
                    </div>
                  })
                }
              </div>
              <div className="flex items-end gap-4 justify-end mt-4">
                <button className="flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  <span className="mx-1">{state?.forumData?.[0]?.category}</span>
                </button>
              </div>
            </div> */}
            {/* <button className="mx-5 my-4 flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            onClick={() => handleAnswer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="mx-1">Add Answer</span>
          </button> */}
          {/* {Array.from(Array(state?.counter)).map((c, index) => {
            return (
              <> */}
              <hr />
              {state?.final !== "" ? <textarea
                    name="reply"
                    id="reply"
                    disabled
                    value={window.sessionStorage.getItem('answer')}
                    autoComplete="family-name"
                    className="mt-2 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />: null}
                <div className="my-4 col-span-3 sm:col-span-4">
                  <label
                    htmlFor="Reply"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Reply/Answer
                  </label>
                  <textarea
                    name="reply"
                    id="reply"
                    onChange={e => {
                      setState({
                        ...state,
                        answer: (e.target.value)
                      });
                    }}
                    autoComplete="family-name"
                    className="mt-2 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col-2 justify-end">
                  <button
                    type="submit"
                    onClick={handleCancel}
                    className="my-2 mx-2 flex right-0 p-3 text-sm text-white font-bold tracking-wide uppercase rounded-lg bg-gray-500 hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="my-2 ml-2 flex right-0  p-3 text-sm text-white font-bold tracking-wide uppercase rounded-lg bg-gray-500 hover:bg-gray-400"
                  >
                    Comment
                  </button>
                </div>
                


              {/* </>
            );
          })} */}
          

        </div>

      </div>
    </div>
  )
}