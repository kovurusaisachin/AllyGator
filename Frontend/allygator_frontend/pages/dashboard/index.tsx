import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import AnalyticCard from "../../components/analyticCard";
import Table from "../../components/Table";
import axios from "Axios";
import { API_URL } from "../../components/constant";

export default function dashboard() {
  const [state, setState] = useState({
    userData: []
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
        setState({
          ...state,
          userData: response?.data
        })
      })
      .catch(err => {
        if (err.request) { console.log(err.request) }
        if (err.response) { console.log(err.response) }
      });
  }
 
  const tableHeader = [
    { name: "Name", href: "#home" },
    { name: "Major", href: "#features" },
    { name: "Department", href: "#features" },
    { name: "Nationality", href: "#register" },
    { name: "Status", href: "#team" },
    { name: "Linkedin", href: "#team" },
  ]
  const courseHeader = [
    { name: "Name", href: "#home" },
    { name: "Course", href: "#features" },
    { name: "Department", href: "#features" },
    { name: "Faculty", href: "#register" },
    { name: "Likes", href: "#register" },
    { name: "Dislike", href: "#register" }


  ]
  const courseData = [
    
    {
      name: 'Database System Implementation',
      major: 'Computer Science & Information Engineering',
      department: 'Computer Science',
      faculty: 'Alin Dobra',
      likes:50,
      dislike:10
    },
    {
      name: 'Software Engineering',
      major: 'Computer Science & Information Engineering',
      department: 'Computer Science',
      faculty: 'Alin Dobra',
      likes:25,
      dislike:1
    },
    // More people...
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
              Connection's list
            </h3>
            <Table header = {tableHeader} data={state?.userData} type="user"/>
          </div>
          <div className="mx-8  my-10">
            <h3 className="text-2xl font-bold my-2 leading-7 text-gray-900 sm:leading-9 sm:truncate">
              Top Course list
            </h3>
            <Table header = {courseHeader}  data={courseData} type="course"/>
          </div>
        </div>
      </div>
    </>
  );
}
