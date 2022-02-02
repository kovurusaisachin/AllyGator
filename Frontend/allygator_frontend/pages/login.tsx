import Head from "next/head";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="container max-w-full mx-auto py-2 px-6">
        <div className="font-sans">
          <div className="max-w-sm mx-auto px-6">
            <div className="relative flex flex-wrap">
              <div className="w-full relative">
                <div className="mt-4">
                  <div className="mb-4">
                    <img
                      src="https://i.pinimg.com/originals/79/ae/30/79ae3050000579337f79c78e8ad2e6eb.jpg"
                      className="object-scale-down rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl font-semibold text-black">
                    Welcome to Allygator
                  </div>
                  <div className="mt-8">
                    <div className="mx-auto max-w-lg">
                      <div className="py-2">
                        <span className="px-1 text-sm text-gray-600">
                          Username
                        </span>
                        <input
                          placeholder="abc@xyz.com"
                          type="text"
                          className="text-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        />
                      </div>
                      <div className="py-2" x-data="{ show: true }">
                        <span className="px-1 text-sm text-gray-600">
                          Password
                        </span>
                        <div className="relative">
                          <input
                            placeholder="******"
                            type="show ? 'password' : 'text'"
                            className="text-md block px-3 py-2 rounded-lg w-full 
          bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
          focus:placeholder-gray-500
          focus:bg-white 
          focus:border-gray-600  
          focus:outline-none"
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            {/* <svg className="h-6 text-gray-700" fill="none" @click="show = !show" :class="{'hidden': !show, 'block':show }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                        </path>
                      </svg>
                      <svg className="h-6 text-gray-700" fill="none" @click="show = !show" :class="{'block': !show, 'hidden':show }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                        </path>
                      </svg> */}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <label className="block text-gray-500 font-bold my-4">
                          <input
                            type="checkbox"
                            className="leading-loose text-pink-600"
                          />{" "}
                          <span className="py-2 text-sm text-gray-600 leading-snug">
                            {" "}
                            Remember Me{" "}
                          </span>
                        </label>{" "}
                        <label className="block text-gray-500 font-bold my-4">
                          <a
                            href="/forgotpassword"
                            className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
                          >
                            <span>Forgot Password?</span>
                          </a>
                        </label>
                      </div>{" "}
                      <button
                        className="mt-3 text-lg font-semibold 
          bg-gray-800 w-full text-white rounded-lg
          px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-800 mx-2 my-2 flex items-center justify-center">
              OR
            </div>
            <div className="text-sm text-gray-300 flex items-center justify-center">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-300 px-1">
                Sign up here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
