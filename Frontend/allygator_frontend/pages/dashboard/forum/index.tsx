import React,{useState, useEffect} from "react";
import Sidebar from "../../../components/sidebar";
import ForumCard from "../../../components/forumCard";
import Link from "next/link"
import axios from "Axios";
import { API_URL } from "../../../components/constant";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
// import ResetPass from './ResetPassword'

const Forum = () => {
  const [state, setState] = useState({
    forumDataO:[],
    forumData:[],
    query:{
      searchText:""
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
      `${API_URL}/post`

    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint, config))).then(
      ([
        { data: forum },
      ]) => {
        setState({
          ...state,
          forumDataO:forum?.data,
          forumData:forum?.data

        });
      }
    );
  };
  // useEffect(() => {
  //   const newRes = state?.forumData?.sort((a,b)=>{
  //     return parseInt(b.idPost)  - parseInt(a.idPost);
  //  })
  // },[])

  useEffect(() => {
    const newResults = state?.forumDataO?.filter(
      (product) =>
        product?.description
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) ||
        product?.firstname
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) ||
        product?.lastname
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) ||
        product?.category
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) ||
        product?.title
          ?.toLowerCase()
          ?.includes(state.query.searchText?.toLowerCase()) 
        
        
    );

    setState({
      ...state,
      forumData: newResults,
    });
  }, [
    state.query.searchText,
    // state?.userData
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  //pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const newRes = state?.forumData?.sort((a,b)=>{
    return parseInt(b.idPost)  - parseInt(a.idPost);
 })
  const currentPosts = newRes?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPosts = state?.forumData?.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex flex-col-2">
      <Sidebar />
      <div className="flex flex-col bg-gray-200 w-full">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                {/* Profile */}
                <div className="flex items-center">
                  <div>
                    <div className="ml-3 flex flex-col items-start">
                      <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        Forum Board
                      </h3>
                      <p className="text-gray-600">
                        Get an overview of all Forum activity here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-10 ">
          <div className="col-span-7">
            <div id="tags" className="flex flex-col ml-10 my-5 mr-10">
              <div className="flex">
                <button className="flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-1">New</span>
                </button>
                <span className="mx-4"></span>
                <button className="flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="mx-1">Top</span>
                </button>
                <span className="mx-4"></span>
                <button className="flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
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
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                  <span className="mx-1">Hot</span>
                </button>
              </div>
              <div className="flex flex-col-2  absolute right-0 mr-10">
                <Link href={"/dashboard/forum/addPost"}>
                <button className="flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
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
                  <span className="mx-1">Add</span>
                </button>
                </Link>
              </div>
            </div>

            <section className="text-gray-600 mx-10 bg-white rounded-md body-font overflow-hidden">
              <div className="col-span-2">
                <div className="w-full">
                  <div className="relative">
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
                      placeholder="Search"
                      type="text"
                      value={state.query.searchText}
                      onChange={e => {
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
            </section>
            <section>
              {currentPosts?.map((x) => {
                return <ForumCard key={x?.timestamp} data={x} />;
              })}
              <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                  <a
                    onClick={() => {
                      paginateBack();
                    }}
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    onClick={() => {
                      paginateFront();
                    }}
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing{" "}
                      <span className="font-medium">
                        {currentPage * postsPerPage - 4}
                      </span>{" "}
                      to{" "}
                      <span className="font-medium">
                        {currentPage * postsPerPage}
                      </span>{" "}
                      of <span className="font-medium">{totalPosts}</span>{" "}
                      results
                    </p>
                  </div>
                  <div>
                    <nav
                      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                      aria-label="Pagination"
                    >
                      <a
                        onClick={() => {
                          paginateBack();
                        }}
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                      {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                      <ul className="flex pl-0 rounded list-none flex-wrap">
                        <li>
                          {pageNumbers.map((number) => (
                            <a
                              onClick={() => {
                                paginate(number);
                              }}
                              href="#"
                              className={
                                currentPage === number
                                  ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                  : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                              }
                            >
                              {number}
                            </a>
                          ))}
                        </li>
                      </ul>
                      <a
                        onClick={() => {
                          paginateFront();
                        }}
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </nav>
                  </div>
                </div>
                </div>
            </section>
          </div>
          <div className="col-span-3">
            <div className="mt-20 mb-5 rounded-lg mr-10 bg-white dark:bg-coolGray-800 dark:text-coolGray-50">
              <h2 className="px-4 py-3 text-blue-800 text-xl font-semibold">MUST READS:</h2>
              <div className="flex flex-col px-4 col-span-12 divide-y  divide-coolGray-700">
              {currentPosts.slice(0, 2).map(x => {return<>
                <div className="pt-2 pb-1 space-y-2">
                  <h3 className="text-lg font-bold">{x.title?.slice(0,40) + "...."}</h3>
                  <p>
                    {x.description}
                  </p>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
                  >
                    <span>Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h31.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                </>
              })}
                {/* <div className="pt-2 pb-1 space-y-2">
                  <h3 className="text-lg font-bold">Lorem ipsum dolor sit.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, a!
                  </p>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
                  >
                    <span>Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h31.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="pt-6 pb-4 space-y-2">
                  <h3 className="text-lg font-bold">Lorem ipsum dolor sit.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, a!
                  </p>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
                  >
                    <span>Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h31.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forum;
