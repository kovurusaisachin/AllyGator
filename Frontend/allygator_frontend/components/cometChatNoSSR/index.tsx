import { Component, useEffect, useState } from "react";
import { COMETCHAT_CONSTANTS } from "../constant/index";
import { CometChatUI } from "../../pages/cometchat-pro-react-ui-kit/CometChatWorkspace/src/index";
import { CometChat } from "@cometchat-pro/chat";
import axios from 'axios'
import { API_URL } from "../../components/constant";

export default function CometChatNoSSR() {
  const [state, setState] = useState({
    user: undefined,
    friends:[]
  });
  useEffect(() => {
    // profileFetch();
    // friendFetch();
    let appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(COMETCHAT_CONSTANTS.REGION)
      .build();
    CometChat.init(COMETCHAT_CONSTANTS.APP_ID, appSetting).then(
      () => {
        console.log("Initialization completed successfully")
        const UID = "2";
        const authKey = COMETCHAT_CONSTANTS.AUTH_KEY;
        window.sessionStorage.setItem('userId',"2")
        window.sessionStorage.setItem('username',"Prashant Kapri")
        CometChat.login(UID, authKey).then(
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
    // let limit = 30;
    // let usersRequest = new CometChat.UsersRequestBuilder()
    //                 .setLimit(limit)
    //                 .friendsOnly(true)
    //                 .build();
    // console.log("mpppm",usersRequest)
  }, []);
  

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
