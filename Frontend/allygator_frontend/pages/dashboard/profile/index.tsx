import React, {useState, useEffect} from 'react'
import ProfileCard from '../../../components/profileCard'
import Sidebar from '../../../components/sidebar'
import axios from "Axios";
import { API_URL } from '../../../components/constant';
function Profile(){
    const [state, setState] = useState({
        profileData: []
      })
      
      const headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
      };
    
      useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      const fetchData = async () => {
        await axios.get(`${API_URL}/user/1`,{headers})
          .then((response) => {
            setState({
              ...state,
              profileData: response?.data
            })
          })
          .catch(err => {
            if (err.request) { console.log(err.request) }
            if (err.response) { console.log(err.response) }
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