import React from "react";
import Sidebar from "../../components/sidebar";
import AnalyticCard from "../../components/analyticCard";
import Table from "../../components/Table";

export default function dashboard() {
  return (
    <>
      {/* sidebar */}
      <div className="flex flex-col-1">
        <Sidebar />
        <div className="flex flex-col bg-gray-100 w-full">
          <AnalyticCard />
          <div className="mx-8">
            <h3 className="text-2xl my-2 font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">User's list</h3>
            <Table />
          </div>
          <div className="mx-8  my-10">
          <h3 className="text-2xl font-bold my-2 leading-7 text-gray-900 sm:leading-9 sm:truncate">Top Course list</h3>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
