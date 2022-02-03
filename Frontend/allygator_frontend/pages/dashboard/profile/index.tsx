import React from 'react'
import ProfileCard from '../../../components/profileCard'
import Sidebar from '../../../components/sidebar'
// import ResetPass from './ResetPassword'
function Profile(){
    return(
        <div className="flex flex-col-2">
            <Sidebar />
            <ProfileCard />
        </div>
    )
}
export default Profile