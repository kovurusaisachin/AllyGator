import React from "react";
import Sidebar from "../../../../components/sidebar";
import { useRouter } from "next/router";
export default function AddPost() {
  const router = useRouter();
  const handleCancel = () => {
    router.reload();
  };
  const handleSubmit = () => {
    router.push("/dashboard/forum");
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
