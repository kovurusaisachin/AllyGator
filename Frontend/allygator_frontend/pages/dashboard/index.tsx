import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import AnalyticCard from "../../components/analyticCard";
import Table from "../../components/Table";
import axios from "Axios";
import { API_URL } from "../../components/constant";
import NextCors from "nextjs-cors"

export default function dashboard() {
  const [state, setState] = useState({

  })
  
  const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchData = async () => {
    await axios.get(`${API_URL}/user`,{headers})
      .then((response) => {
        console.log('oye', response)
      })
      .catch(err => {
        if (err.request) { console.log(err.request) }
        if (err.response) { console.log(err.response) }
      });

  }
 
  const tableHeader = [
    { name: "Name", href: "#home" },
    { name: "Title", href: "#features" },
    { name: "Status", href: "#register" },
    { name: "Role", href: "#team" },
    { name: "Edit", href: "#team" },

  ]
  return (
    <>
      {/* sidebar */}
      <div className="flex flex-col-1">
        <Sidebar />
        <div className="flex flex-col bg-gray-100 w-full">
          <AnalyticCard />
          <div className="mx-8">
            <h3 className="text-2xl my-2 font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
              User's list
            </h3>
            <Table header = {tableHeader}/>
          </div>
          <div className="mx-8  my-10">
            <h3 className="text-2xl font-bold my-2 leading-7 text-gray-900 sm:leading-9 sm:truncate">
              Top Course list
            </h3>
            <Table header = {tableHeader}/>
          </div>
        </div>
      </div>
    </>
  );
}
