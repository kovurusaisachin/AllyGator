import React, {useState, useEffect} from 'react'
import ProfileCard from '../../../components/profileCard'
import Sidebar from '../../../components/sidebar'
import axios from "Axios";
import { API_URL } from '../../../components/constant';
function Profile(){
    const [state, setState] = useState({
        profileData: []
      })
    
    return(
        <div className="flex flex-col-2">
            <Sidebar />
            <ProfileCard data={state?.profileData}/>
        </div>
    )
}
export default Profile