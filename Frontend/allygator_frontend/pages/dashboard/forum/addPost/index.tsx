import React, { useState, useEffect } from "react";
import Sidebar from "../../../../components/sidebar";
import { useRouter } from "next/router";
import axios from "Axios";
import { API_URL } from "../../../../components/constant";
import Swal from "sweetalert2";

export default function addPost() {
  const router = useRouter();
  const handleCancel = () => {
    router.reload();
  };

  const [state, setState] = useState({
    addForumData: {
      title:"",
      description:"",
      idUser:parseInt(window.sessionStorage.getItem("userId")),
      category:""
    },
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
  const forumApi = axios.create({
    baseURL: `${API_URL}`,
    responseType: "json",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // setState({
    //   ...state,
    //   addForumData:{
    //     ...state?.addForumData,
    //     idUser: window.sessionStorage.getItem("userId")
    //   }
    // })
    console.log(state?.addForumData)

    forumApi
      .post("/addPost", state?.addForumData, config)
      .then((response) => {
        console.log(response,'pp');
        if (response.status === 200) {
          {
            Swal.fire({
              icon: "success",
              title: "Post added successfully",
              // text: "Server busy please try again later",
              // footer: '<a href="">Why do I have this issue?</a>'
            });
            router.push("/dashboard/forum");
          }
        }
      })
      .catch((err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log(err.respone);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please check your password and email ...",
            // footer: '<a href="">Why do I have this issue?</a>'
          });
        } else if (err.request) {
          // client never received a response, or request never left
          console.log(err.request);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Server busy please try again later",
            // footer: '<a href="">Why do I have this issue?</a>'
          });
        } else {
          // anything else
          console.log("something bad happened, retry again...", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something bad happened, retry again...",
            // footer: '<a href="">Why do I have this issue?</a>'
          });
        }
      });
  };
  return (
    <>
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
                          Add Your Post Here
                        </h3>
                        <p className="text-gray-600">
                          Get an overview of all post related details here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-10 mt-2">
            <button
              type="button"
              className="rounded-full bg-gray-500 p-1"
              onClick={() => router.back()}
            >
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
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-10">
            <div className="mx-10 my-5 col-span-8">
              <form className="">
                <div>
                  <label className="text-sm font-semibold">
                    Select Category
                  </label>
                  <select
                    id="category"
                    placeholder="select a category"
                    className="w-full p-3 rounded dark:bg-coolGray-800 "
                    value={state?.addForumData?.category ?? ""}
                    onChange={(e) => {
                      setState({
                        ...state,
                        addForumData: {
                          ...state.addForumData,
                          category: e.target.value,
                        },
                      });
                    }}
                  >
                    <option value="">Select a category</option>
                    <option value="query">Query</option>
                    <option value="doubt">Doubts</option>
                    <option value="confusion">Confusion</option>
                  </select>
                </div>
                <div className="my-4">
                  <label className="text-sm font-semibold">
                    Title for the post
                  </label>
                  <input
                    id="title"
                    type="text"
                    placeholder="Catchy title for the post"
                    className="w-full p-3 rounded dark:bg-coolGray-800 "
                    value={state?.addForumData?.title ?? ""}
                    onChange={(e) => {
                      setState({
                        ...state,
                        addForumData: {
                          ...state.addForumData,
                          title: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <div className="my-4 h-64 ">
                  <label className="text-sm font-semibold">
                    Content for your post
                  </label>
                  <textarea
                    id="content"
                    placeholder="Whole area for your content"
                    className="w-full h-full p-3 rounded dark:bg-coolGray-800"
                    value={state?.addForumData?.description ?? ""}
                    onChange={(e) => {
                      setState({
                        ...state,
                        addForumData: {
                          ...state.addForumData,
                          description: e.target.value,
                        },
                      });
                    }}
                  ></textarea>
                </div>
                <div className="flex flex-col-2 justify-end">
                  <button
                    type="submit"
                    onClick={handleCancel}
                    className="my-4 mx-2 flex right-0 p-3 text-sm font-bold tracking-wide uppercase rounded bg-gray-500 hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="my-4 ml-2 flex right-0  p-3 text-sm font-bold tracking-wide uppercase rounded bg-gray-500 hover:bg-gray-400"
                  >
                    Add Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
