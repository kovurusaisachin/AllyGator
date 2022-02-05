import React from 'react'
import Sidebar from '../../../components/sidebar'
import Table from '../../../components/Table'
// import ResetPass from './ResetPassword'
function Connection() {
    const headerData = []
    const connectionData = []
    return(
        <div className="flex flex-col-2">
            <Sidebar />
            <div className="mx-8">
                <Table header={headerData} data={connectionData} type="connection"/>
          </div>
            
        </div>
    )
}
export default Connection