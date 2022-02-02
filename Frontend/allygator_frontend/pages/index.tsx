import Head from "next/head";
import Image from "next/image";
import React from "react"
import Link from "next/Link"
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}
//   return (
//     <>
      
//       <div className="text-lg font-bold underline">
//         <title>AllyGators</title>
//         <Head>
//           Go Gators!
//         </Head>
//         <meta name="description" content="allygators for gogators!" />
//         <link rel="icon" href="/favicon.ico" />

//         <header className="bg-white dark:bg-gray-800">
//           <nav className="bg-white dark:bg-gray-800">
//             <div className="container p-6 mx-auto">
//               <a
//                 className="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-lg hover:text-gray-700 dark:hover:text-gray-300"
//                 href="#"
//               >
//                 Brand
//               </a>
//               <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
//                 <a
//                   href="#"
//                   className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
//                 >
//                   home
//                 </a>
//                 <a
//                   href="#"
//                   className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
//                 >
//                   features
//                 </a>
//                 <a
//                   href="#"
//                   className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
//                 >
//                   pricing
//                 </a>
//                 <a
//                   href="#"
//                   className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
//                 >
//                   blog
//                 </a>
//                 <a
//                   href="#"
//                   className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
//                 >
//                   <svg
//                     className="w-4 h-4 fill-current"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M1 11.9554V12.0446C1.01066 14.7301 1.98363 17.1885 3.59196 19.0931C4.05715 19.6439 4.57549 20.1485 5.13908 20.5987C5.70631 21.0519 6.31937 21.4501 6.97019 21.7853C7.90271 22.2656 8.91275 22.6165 9.97659 22.8143C10.5914 22.9286 11.2243 22.9918 11.8705 22.9993C11.9136 22.9998 11.9567 23 11.9999 23C15.6894 23 18.9547 21.1836 20.9502 18.3962C21.3681 17.8125 21.7303 17.1861 22.0291 16.525C22.6528 15.1448 22.9999 13.613 22.9999 12C22.9999 8.73978 21.5816 5.81084 19.3283 3.79653C18.8064 3.32998 18.2397 2.91249 17.6355 2.55132C15.9873 1.56615 14.0597 1 11.9999 1C11.888 1 11.7764 1.00167 11.6653 1.00499C9.99846 1.05479 8.42477 1.47541 7.0239 2.18719C6.07085 2.67144 5.19779 3.29045 4.42982 4.01914C3.7166 4.69587 3.09401 5.4672 2.58216 6.31302C2.22108 6.90969 1.91511 7.54343 1.6713 8.20718C1.24184 9.37631 1.00523 10.6386 1 11.9554ZM20.4812 15.0186C20.8171 14.075 20.9999 13.0588 20.9999 12C20.9999 9.54265 20.0151 7.31533 18.4186 5.6912C17.5975 7.05399 16.5148 8.18424 15.2668 9.0469C15.7351 10.2626 15.9886 11.5603 16.0045 12.8778C16.7692 13.0484 17.5274 13.304 18.2669 13.6488C19.0741 14.0252 19.8141 14.487 20.4812 15.0186ZM15.8413 14.8954C16.3752 15.0321 16.904 15.22 17.4217 15.4614C18.222 15.8346 18.9417 16.3105 19.5723 16.8661C18.0688 19.2008 15.5151 20.7953 12.5788 20.9817C13.5517 20.0585 14.3709 18.9405 14.972 17.6514C15.3909 16.7531 15.678 15.8272 15.8413 14.8954ZM13.9964 12.6219C13.9583 11.7382 13.7898 10.8684 13.5013 10.0408C10.6887 11.2998 7.36584 11.3765 4.35382 9.97197C4.01251 9.81281 3.68319 9.63837 3.36632 9.44983C3.12787 10.2584 2.99991 11.1142 2.99991 12C2.99991 13.9462 3.61763 15.748 4.6677 17.2203C6.83038 14.1875 10.3685 12.4987 13.9964 12.6219ZM6.047 18.7502C7.77258 16.059 10.7714 14.5382 13.8585 14.6191C13.723 15.3586 13.4919 16.093 13.1594 16.8062C12.3777 18.4825 11.1453 19.805 9.67385 20.6965C8.31043 20.3328 7.07441 19.6569 6.047 18.7502ZM11.9999 3C13.7846 3 15.4479 3.51946 16.847 4.41543C16.2113 5.54838 15.3593 6.4961 14.368 7.23057C13.3472 5.57072 11.8752 4.16433 10.027 3.21692C10.6619 3.07492 11.3222 3 11.9999 3ZM8.80619 4.84582C10.4462 5.61056 11.7474 6.80659 12.6379 8.23588C10.3464 9.24654 7.64722 9.30095 5.19906 8.15936C4.83384 7.98905 4.48541 7.79735 4.15458 7.58645C4.91365 6.24006 6.00929 5.10867 7.32734 4.30645C7.82672 4.44058 8.32138 4.61975 8.80619 4.84582Z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
//                 >
//                   <svg
//                     className="w-5 h-5 fill-current"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="m.75 19h7.092c4.552 0 6.131-6.037 2.107-8.203 2.701-2.354 1.029-6.797-2.595-6.797h-6.604c-.414 0-.75.336-.75.75v13.5c0 .414.336.75.75.75zm.75-13.5h5.854c3.211 0 3.215 4.768 0 4.768h-5.854zm0 6.268h6.342c3.861 0 3.861 5.732 0 5.732h-6.342z" />
//                     <path d="m18.374 7.857c-3.259 0-5.755 2.888-5.635 5.159-.247 3.28 2.397 5.984 5.635 5.984 2.012 0 3.888-1.065 4.895-2.781.503-.857-.791-1.613-1.293-.76-.739 1.259-2.12 2.041-3.602 2.041-2.187 0-3.965-1.668-4.125-3.771 1.443.017 4.136-.188 8.987-.033.016 0 .027-.008.042-.008 2-.09-.189-5.831-4.904-5.831zm-3.928 4.298c1.286-3.789 6.718-3.676 7.89.064-4.064.097-6.496-.066-7.89-.064z" />
//                     <path d="m21.308 6.464c.993 0 .992-1.5 0-1.5h-5.87c-.993 0-.992 1.5 0 1.5z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </nav>
//           <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
//             <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
//               <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
//                 <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none" />
//                 <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500" />
//                 <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500" />
//                 <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500" />
//               </div>
//               <div className="max-w-lg lg:mx-12 lg:order-2">
//                 <h1 className="text-lg font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">
//                   The best Apple Watch apps
//                 </h1>
//                 <p className="mt-4 text-gray-600 dark:text-gray-300">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
//                   quia asperiores alias vero magnam recusandae adipisci ad vitae
//                   laudantium quod rem voluptatem eos accusantium cumque.
//                 </p>
//                 <div className="mt-6">
//                   <Link
//                     href="/login"
//                   >
//                   <button  className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400"
//                   >   
//                     Log In
//                     </button>
//                   </Link>
//                   <span className="mx-4"></span>
//                   <Link
//                     href="/signup"
//                   >
//                                       <button  className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400"
//                   >   
//                     Sign Up
//                     </button>
                  
//                   </Link>
//                 </div>
                
//               </div>
//             </div>
//             <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
//               <img
//                 className="object-cover w-full h-full max-w-2xl rounded-md"
//                 src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
//                 alt="apple watch photo"
//               />
//             </div>
//           </div>
//         </header>
// <section className="bg-white dark:bg-gray-900">
//   <div className="container px-6 py-10 mx-auto">
//     <h1 className="text-lg font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome <span className="text-blue-500">Components</span></h1>
//     <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
//       <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
//         <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//           </svg>
//         </span>
//         <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Copy &amp; paste components</h1>
//         <p className="text-gray-500 dark:text-gray-300">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
//         </p>
//         <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//           <span className="mx-1">read more</span>
//           <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
//         </a>
//       </div>
//       <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
//         <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//           </svg>
//         </span>
//         <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configrations</h1>
//         <p className="text-gray-500 dark:text-gray-300">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
//         </p>
//         <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//           <span className="mx-1">read more</span>
//           <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
//         </a>
//       </div>
//       <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
//         <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//           </svg>
//         </span>
//         <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Simple &amp; clean designs</h1>
//         <p className="text-gray-500 dark:text-gray-300">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
//         </p>
//         <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//           <span className="mx-1">read more</span>
//           <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
//         </a>
//       </div>
//     </div>
//     <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
//       <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
//         <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//           </svg>
//         </span>
//         <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Copy &amp; paste components</h1>
//         <p className="text-gray-500 dark:text-gray-300">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
//         </p>
//         <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//           <span className="mx-1">read more</span>
//           <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
//         </a>
//       </div>
//       <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
//         <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//           </svg>
//         </span>
//         <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configrations</h1>
//         <p className="text-gray-500 dark:text-gray-300">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
//         </p>
//         <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//           <span className="mx-1">read more</span>
//           <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
//         </a>
//       </div>
//       <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
//         <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//           </svg>
//         </span>
//         <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Simple &amp; clean designs</h1>
//         <p className="text-gray-500 dark:text-gray-300">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
//         </p>
//         <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
//           <span className="mx-1">read more</span>
//           <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
//         </a>
//       </div>
//     </div>  
//   </div>
// </section>

//         <section className="text-gray-600 body-font dark:bg-gray-800">
//           <div className="container px-5 py-24 mx-auto flex flex-wrap">
//             <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
//               <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//                 <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//               </div>
//               <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
//                 1
//               </div>
//               <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//                 <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-12 h-12"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//                   </svg>
//                 </div>
//                 <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                   <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                     Shooting Stars
//                   </h2>
//                   <p className="leading-relaxed">
//                     VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
//                     Kinfolk bespoke try-hard cliche palo santo offal.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
//               <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//                 <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//               </div>
//               <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
//                 2
//               </div>
//               <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//                 <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-12 h-12"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//                   </svg>
//                 </div>
//                 <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                   <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                     The Catalyzer
//                   </h2>
//                   <p className="leading-relaxed">
//                     VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
//                     Kinfolk bespoke try-hard cliche palo santo offal.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
//               <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//                 <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//               </div>
//               <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
//                 3
//               </div>
//               <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//                 <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-12 h-12"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle cx={12} cy={5} r={3} />
//                     <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
//                   </svg>
//                 </div>
//                 <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                   <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                     The 400 Blows
//                   </h2>
//                   <p className="leading-relaxed">
//                     VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
//                     Kinfolk bespoke try-hard cliche palo santo offal.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
//               <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
//                 <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//               </div>
//               <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
//                 4
//               </div>
//               <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
//                 <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-12 h-12"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
//                     <circle cx={12} cy={7} r={4} />
//                   </svg>
//                 </div>
//                 <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
//                   <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
//                     Neptune
//                   </h2>
//                   <p className="leading-relaxed">
//                     VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
//                     Kinfolk bespoke try-hard cliche palo santo offal.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-white dark:bg-gray-900">
//           <div className="container px-6 py-10 mx-auto">
//             <h1 className="text-lg font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
//               Our Executive Team
//             </h1>
//             <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
//               incidunt ex placeat modi magni quia error alias, adipisci rem
//               similique, at omnis eligendi optio eos harum.
//             </p>
//             <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
//               <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
//                 <img
//                   className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
//                   src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
//                 />
//                 <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
//                   arthur melo
//                 </h1>
//                 <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
//                   design director
//                 </p>
//                 <div className="flex mt-3 -mx-2">
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Reddit"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Facebook"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Github"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
//                 <img
//                   className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
//                   src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  
//                 />
//                 <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
//                   Amelia. Anderson
//                 </h1>
//                 <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
//                   Lead Developer
//                 </p>
//                 <div className="flex mt-3 -mx-2">
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Reddit"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Facebook"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Github"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
//                 <img
//                   className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
//                   src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  
//                 />
//                 <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
//                   Olivia Wathan
//                 </h1>
//                 <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
//                   Lead designer
//                 </p>
//                 <div className="flex mt-3 -mx-2">
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Reddit"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Facebook"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Github"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
//                 <img
//                   className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
//                   src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  
//                 />
//                 <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
//                   John Doe
//                 </h1>
//                 <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
//                   Full stack developer
//                 </p>
//                 <div className="flex mt-3 -mx-2">
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Reddit"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Facebook"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Github"
//                   >
//                     <svg
//                       className="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

// <section className="flex flex-col max-w-4xl mx-auto my-6 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
//   <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
//     <div className="px-6 py-6 md:px-8 md:py-0">
//       <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up For <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Project</span> Updates</h2>
//       <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
//     </div>
//   </div>
//   <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
//     <form>
//       <div className="flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
//         <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" />
//         <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
//       </div>
//     </form>
//   </div>
// </section>

//         <footer className="bg-white dark:bg-gray-800">
//           <div className="container px-6 py-4 mx-auto">
//             <div className="lg:flex">
//               <div className="w-full -mx-6 lg:w-2/5">
//                 <div className="px-6">
//                   <div>
//                     <a
//                       href="#"
//                       className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
//                     >
//                       Brand
//                     </a>
//                   </div>
//                   <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">
//                     Join 31,000+ other and never miss out on new tips,
//                     tutorials, and more.
//                   </p>
//                   <div className="flex mt-4 -mx-2">
//                     <a
//                       href="#"
//                       className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
//                       aria-label="Linkden"
//                     >
//                       <svg
//                         className="w-4 h-4 fill-current"
//                         viewBox="0 0 512 512"
//                       >
//                         <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
//                       </svg>
//                     </a>
//                     <a
//                       href="#"
//                       className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
//                       aria-label="Facebook"
//                     >
//                       <svg
//                         className="w-4 h-4 fill-current"
//                         viewBox="0 0 512 512"
//                       >
//                         <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
//                       </svg>
//                     </a>
//                     <a
//                       href="#"
//                       className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
//                       aria-label="Twitter"
//                     >
//                       <svg
//                         className="w-4 h-4 fill-current"
//                         viewBox="0 0 512 512"
//                       >
//                         <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-6 lg:mt-0 lg:flex-1">
//                 <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
//                   <div>
//                     <h3 className="text-gray-700 uppercase dark:text-white">
//                       About
//                     </h3>
//                     <a
//                       href="#"
//                       className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                     >
//                       Company
//                     </a>
//                     <a
//                       href="#"
//                       className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                     >
//                       community
//                     </a>
//                     <a
//                       href="#"
//                       className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                     >
//                       Careers
//                     </a>
//                   </div>
//                   <div>
//                     <h3 className="text-gray-700 uppercase dark:text-white">
//                       Blog
//                     </h3>
//                     <a
//                       href="#"
//                       className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                     >
//                       Tec
//                     </a>
//                     <a
//                       href="#"
//                       className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                     >
//                       Music
//                     </a>
//                     <a
//                       href="#"
//                       className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                     >
//                       Videos
//                     </a>
//                   </div>
//                   <div>
//                     <h3 className="text-gray-700 uppercase dark:text-white">
//                       Products
//                     </h3>
//                     <a
//                       href="#"
//                       className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                     >
//                       Mega cloud
//                     </a>
//                     <a
//                       href="#"
//                       className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                     >
//                       Aperion UI
//                     </a>
//                     <a
//                       href="#"
//                       className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                     >
//                       Meraki UI
//                     </a>
//                   </div>
//                   <div>
//                     <h3 className="text-gray-700 uppercase dark:text-white">
//                       Contact
//                     </h3>
//                     <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
//                       +1 526 654 8965
//                     </span>
//                     <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
//                       example@email.com
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />
//             <div>
//               <p className="text-center text-gray-800 dark:text-white">
//                 © Brand 2020 - All rights reserved
//               </p>
//             </div>
//           </div>
//         </footer>
//       </div>
//       <h3>Dashboard design</h3>
//       {/* sidebar */}
//       <section>
//         <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
//             Brand
//           </h2>
//           <div className="relative mt-6">
//             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//               <svg
//                 className="w-5 h-5 text-gray-400"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </span>
//             <input
//               type="text"
//               className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
//               placeholder="Search"
//             />
//           </div>
//           <div className="flex flex-col justify-between flex-1 mt-6">
//             <nav>
//               <a
//                 className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
//                 href="#"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span className="mx-4 font-medium">Dashboard</span>
//               </a>
//               <a
//                 className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
//                 href="#"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span className="mx-4 font-medium">Accounts</span>
//               </a>
//               <a
//                 className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
//                 href="#"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span className="mx-4 font-medium">Tickets</span>
//               </a>
//               <a
//                 className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
//                 href="#"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span className="mx-4 font-medium">Settings</span>
//               </a>
//               <hr className="my-6 border-gray-200 dark:border-gray-600" />
//               <a
//                 className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
//                 href="#"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span className="mx-4 font-medium">Tickets</span>
//               </a>
//               <a
//                 className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
//                 href="#"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span className="mx-4 font-medium">Settings</span>
//               </a>
//             </nav>
//             <div className="flex items-center px-4 -mx-2">
//               <img
//                 className="object-cover mx-2 rounded-full h-9 w-9"
//                 src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
//                 alt="avatar"
//               />
//               <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
//                 John Doe
//               </h4>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
//   }
