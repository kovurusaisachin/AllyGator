import { Component, useEffect, useState } from "react";
import { COMETCHAT_CONSTANTS } from "../constant/index";
import { CometChatUI } from "../../pages/Frontend/allygator_frontend/pages/cometchat-pro-react-ui-kit/CometChatWorkspace/src/index";
import { CometChat } from "@cometchat-pro/chat";
import axios from "axios";
import { API_URL } from "../../components/constant";

export default function CometChatNoSSR() {
  const [state, setState] = useState({
    user: undefined,
    friends: [],
    token: "",
    UID: "",
    arr:[]
  });
  useEffect(() => {
    setState({
      ...state,
      token: window.sessionStorage.getItem("token"),
      UID: window.sessionStorage.getItem("userId"),
    });
      let appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(COMETCHAT_CONSTANTS.REGION)
      .build();
    CometChat.init(COMETCHAT_CONSTANTS.APP_ID, appSetting).then(
      () => {
        console.log("Initialization completed successfully");
        // You can now call login function.
      },
      (error) => {
        console.log("Initialization failed with error:", error);
        // Check the reason for error and take appropriate action.
      }
    );
    const authKey = COMETCHAT_CONSTANTS.AUTH_KEY;
    window.sessionStorage.getItem("username");
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
          var user = new CometChat.User(
            window.sessionStorage.getItem("userId")
          );
          user.setName(window.sessionStorage.getItem("username"));
          CometChat.createUser(user, authKey).then(
            (user) => {
              console.log("user created", user);
            },
            (error) => {
              console.log("error", error);
              error.getDetails();
            }
          );
        }
      }
    );
    profileFetch();

  }, []);

  const config = {
    headers: {
      Authorization: `Bearer ${state?.token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const profileFetch = async () => {
    await axios
      .get(`${API_URL}/chat/${state?.UID}`, config)
      .then((response) => {
        console.log(response,'prashant')
        setState({
          ...state,
          friends: response?.data?.data ?? "",
        });
      })
      .catch((err) => {
        if (err.request) {
          console.log(err.request);
        }
        if (err.response) {
          console.log(err.response);
        }
      });
  };

  useEffect(() => {
    friendFetch();
  },[])

  var friendsList =
    state?.friends?.length === 0
      ? []
      : state?.friends?.map((x) => x?.idConnected) ?? [];
  var fl = friendsList?.map(String);
  console.log(fl, "kp");
  // console.log(friendsList.map(x => x.idConnected) ,'osnosonson')
  var x = [];
  for (var i = 0; i < fl.length; i++) {
    x.push(fl[i]);
  }

  console.log(x, "ppp");
  const arra = Object.assign([], x);
  setState({
    ...state,
    arr:arra
  })
  console.log( state?.arr,'noopur');
  
  const options = {
    headers: {
      apiKey: COMETCHAT_CONSTANTS.REST_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const friendFetch = async () => {
    await axios
      .post(
        `https://${COMETCHAT_CONSTANTS.APP_ID}.api-${COMETCHAT_CONSTANTS.REGION}.cometchat.io/v3/users/${state?.UID}/friends`,
        JSON.stringify({ accepted: state?.arr }),
        options
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        if (err.request) {
          console.log(err.request);
        }
        if (err.response) {
          console.log(err.response);
        }
      });
  };

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
