import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "../../components/constant";
import Swal from 'sweetalert2'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";


export default function Table(props) {
  console.log(props)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  //pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPosts = props?.data?.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [state, setState] = useState({
    active: false,
    res: []
  });
  if (typeof window !== "undefined") {
    var token = window.sessionStorage.getItem("token");
    var userId  = window.sessionStorage.getItem('userId')
  }
  const handleConnection = async (sid) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const data = {
        'idConnected':parseInt(sid),
        'idUser':parseInt(userId)
      }
      await axios
        .post(`${API_URL}/addChat`,data, config)
        .then((response) => {
          console.log('prashant',response,data)
          Swal.fire({
            icon: 'success',
            title: 'connection added successfully',
          }).then(function(){
            location.reload();
          })
        })
        .catch((err) => {
          if (err.request) {
            console.log(err.request);
          }
          if (err.response) {
            console.log(err.response);
          }
        });
    
  }
  const handleConnected = () => {
    Swal.fire({
      icon: 'success',
      title: 'Removed connection successfull',
      // text: "Server busy please try again later",
      // footer: '<a href="">Why do I have this issue?</a>'
    })
    setState({
      ...state,
      active:false
    })
  }
  const Header = ({ array }) => {
    let counter = 0;
    return array?.map((x) => {
      ++counter;
      return (
        <th
          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          key={counter}
        >
          {x.name}
        </th>
      );
    });
  };
  return (
    <>
      <div className="mr-8  flex flex-col">
        <div className="my-2 overflow-x-auto sm:-mx-6 ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <Header array={props.header} />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentPosts?.map((person) => (
                    <tr key={person.name}>
                      <td className="py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person?.firstname} {person?.lastname}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person?.specialization}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.profile}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={person?.url ?? ""}>
                          <a target="_blank">
                            <svg
                              className="w-6 h-6 text-blue-800 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                          </a>
                        </Link>
                      </td>

                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                        
                          <button onClick={() => handleConnection(person?.idStudent)} 
                            className={"flex items-center px-3 py-1 font-semi-bold tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"}>
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
                            <span className="mx-1">Connect</span>
                          </button>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
