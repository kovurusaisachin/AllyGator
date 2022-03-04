import React from 'react'
import Sidebar from '../../../components/sidebar'
import dynamic from "next/dynamic";
import { useEffect } from "react";

const CometChatNoSSR = dynamic(
    () => import('../../../components/cometChatNoSSR/index'),
    { ssr: false }
);

// import ResetPass from './ResetPassword'
function Connection() {
    useEffect(() => {
        window.CometChat = require('@cometchat-pro/chat').CometChat
    });
    return(
        <div className="flex flex-col-2">
            <Sidebar />
            <div className='ml-10 w-11/12 my-10'><CometChatNoSSR /></div>
        </div>
    )
}
export default Connection


