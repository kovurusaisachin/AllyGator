import React from 'react'
import Sidebar from '../../../components/sidebar'
import Table from '../../../components/Table'
// import ResetPass from './ResetPassword'
function Connection() {
    return(
        <div className="flex flex-col-2">
            <Sidebar />
            <div className="mx-8 my-10">
            <Table />
          </div>
            
        </div>
    )
}
export default Connection