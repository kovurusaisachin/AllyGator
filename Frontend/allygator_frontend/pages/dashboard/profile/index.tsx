import React, {useState, useEffect} from 'react'
import ProfileCard from '../../../components/profileCard'
import Sidebar from '../../../components/sidebar'
import axios from "Axios";
import { API_URL } from '../../../components/constant';
function Profile(){
    const [state, setState] = useState({
        profileData: []
      })
      if (typeof window !== "undefined") {
        var token = window.sessionStorage.getItem("token");
        var userId = window.sessionStorage.getItem("userId")
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
    
    
      useEffect(() => {
        getProfileData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [token]);

      const getProfileData = async () => {
          await axios.get(`${API_URL}/user/${userId}`,config)
          .then(response => {
              console.log('pk',response)
            if(response.status === 200){
                setState({
                    ...state,
                    profileData: response?.data?.data
                })
            }
          })
          .catch(err => {
            if (err.response) {
              // client received an error response (5xx, 4xx)
              console.log(err.respone)
            } else if (err.request) {
              // client never received a response, or request never left
              console.log(err.request)
            } else {
              // anything else
              console.log('something bad happened, retry again...', err)
            }
          });
      }
    

    
    
    return(
        <div className="flex flex-col-2">
            <Sidebar />
            <ProfileCard data={state?.profileData}/>
        </div>
    )
}
export default Profile