import { Component, useEffect, useState } from "react";
import { COMETCHAT_CONSTANTS } from "../constant/index";
import {CometChatUI} from "../../pages/Frontend/allygator_frontend/pages/cometchat-pro-react-ui-kit/CometChatWorkspace/src/index"
import { CometChat } from "@cometchat-pro/chat";
import axios from 'axios'
import { API_URL } from "../../components/constant";

export default function CometChatNoSSR() {
  const [state, setState] = useState({
    user: undefined,
    friends:[],
    token:"",
    UID:""
  });
  useEffect(() => {
    setState({
      ...state,
      token: window.sessionStorage.getItem("token"),
      UID: window.sessionStorage.getItem("userId")
    })

    profileFetch();
    friendFetch();
    let appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(COMETCHAT_CONSTANTS.REGION)
      .build();
    CometChat.init(COMETCHAT_CONSTANTS.APP_ID, appSetting).then(
      () => {
        console.log("Initialization completed successfully")
        // const UID = "2";
        const authKey = COMETCHAT_CONSTANTS.AUTH_KEY;
        window.sessionStorage.getItem('username')
        CometChat.login(state?.UID, authKey).then(
          (user) => {
            setState({
              ...state,
              user,
            });

            console.log("Login Successful:", { user });  
          },
          (error) => {
            console.log("Login failed with exception:", {
              error,
            });
            if (error.code === "ERR_UID_NOT_FOUND") {
              var user = new CometChat.User(window.sessionStorage.getItem('userId'));
              user.setName(window.sessionStorage.getItem('username'));
              CometChat.createUser(user, authKey).then(
                user => {
                  console.log("user created", user);
                }, error => {
                  console.log("error", error);
                  error.getDetails()
                }
              )
            }
          }
        );
      },
      (error) => {
        console.log("Initialization failed with error:", error);
        // Check the reason for error and take appropriate action.
      }
    );
  }, [state?.token, state?.UID]);
  var friendsList = state?.friends?.length === 0 ? [] : state?.friends?.map(x => x?.idConnected) ?? []
  var fl = friendsList?.map(String)
  console.log(fl,'kp')
  // console.log(friendsList.map(x => x.idConnected) ,'osnosonson')
  var x = []
  for (var i=0; i< fl.length;i++){
    x.push(fl[i])
  }

  console.log(x,'ppp')
  const arr = Object.assign([],x)
  console.log(typeof(arr),arr)
  const config = {
    headers: {
      Authorization: `Bearer ${state?.token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const profileFetch = async () => {
    await axios.get(`${API_URL}/chat/${state?.UID}`,config)
    .then((response) => {
      setState({
        ...state,
        friends: response?.data?.data ?? ""
      })
    })
    .catch(err => {
      if (err.request) { console.log(err.request) }
      if (err.response) { console.log(err.response) }
    });
  };
  const options = {
    headers: { 
      "apiKey":  COMETCHAT_CONSTANTS.REST_API_KEY,
      'Content-Type': 'application/json', 
      'Accept': 'application/json' }  
  };
  const friendFetch = async () => {
    await axios.post(`https://${COMETCHAT_CONSTANTS.APP_ID}.api-${COMETCHAT_CONSTANTS.REGION}.cometchat.io/v3/users/2/friends`,JSON.stringify({accepted: arr}),options)
    .then((response) => {
      console.log(response)
    })
    .catch(err => {
      if (err.request) { console.log(err.request) }
      if (err.response) { console.log(err.response) }
    });
   
  
  }

  

  if (state?.user) {
    return (
      <div className=" w-11/12 h-full ">
        <CometChatUI />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
