import React from "react";
export default function ForumCard(props) {
	console.log(props,'pnnpnpn')
  return (
    <>
      <div className="mx-10 my-5 rounded-lg bg-white dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-coolGray-900">
          <div>
            <a rel="noopener noreferrer" href="#" className="flex items-center">
              <span className="font-bold hover:underline dark:text-coolGray-400">
                {props.data?.name ?? ""}
              </span>
            </a>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-coolGray-400">{props.data?.time ?? ""}</span>
            {/* <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-coolGray-900"
            >
              Javascript
            </a> */}
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xl font-bold hover:underline"
            >
              {props?.data?.title ?? ""}
            </a>
            <p className="mt-2">
             {props?.data?.content ?? ""}
            </p>
          </div>
          <div className="flex flex-col-2">

            <div className="flex items-center gap-4 justify-start mt-4">
			{	
				props?.data?.tags?.map( (x) => {
					<button className="flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                <span className="mx-1">{x}</span>
              </button>
				})
			}
            </div>
            <div className="flex items-end gap-4 justify-end mt-4">
              <button className="flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                <span className="mx-1">ux Design</span>
              </button>
              <button className="flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                <span className="mx-1">HCI</span>
              </button>
              <button className="flex items-center px-3 py-1 font-small tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                <span className="mx-1">UI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
