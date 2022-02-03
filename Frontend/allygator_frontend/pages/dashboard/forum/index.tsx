import React from 'react'
import Sidebar from '../../../components/sidebar/sidebar'
import ForumCard from '../../../components/forumCard'
// import ResetPass from './ResetPassword'
function Forum() {
    return(
        <div className="flex flex-col-2">
            <Sidebar />
            <Forum />
        </div>
    )
}
export default Forum