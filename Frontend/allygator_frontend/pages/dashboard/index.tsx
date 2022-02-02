import React from "react"
import Sidebar from "../../components/sidebar/sidebar"
import AnalyticCard from "../../components/analyticCard/analyticCard"
export default function dashboard () {
  return (
    <>
      {/* sidebar */}
      <Sidebar />
      <AnalyticCard />
    </>
  )
}