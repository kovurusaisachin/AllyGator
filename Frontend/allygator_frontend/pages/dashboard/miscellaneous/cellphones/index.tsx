import Sidebar from "../../../../components/sidebar"
export default function cellphones () {
    return (
    <div className="flex flex-col-2">
    <Sidebar />
    <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
      <div className="mb-12 text-left md:text-center">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Cell phones</h2>
      <p className="text-lg text-gray-500">Directory of cell phone providers.</p>
      </div>


  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white-800 dark:border-white-1500">
  <div className="p-5">
    <a href="#">
        <img className="rounded-t-lg" src="data:image/png;base64,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" alt="" />
    </a>
        <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">AT&T</h5>
        </a>
        <p className="mb-4 text-base font-normal text-gray-600">
        3626 SW Archer Rd.
        Gainesville FL 32608
        </p>
        <p className="mb-4 text-base font-normal text-gray-600">
        6110 NW 4 Pl. 
        Gainesville FL 32607
        </p>
        <p className="mb-4 text-base font-normal text-gray-600">
        3720 NW 13th St. 
        Gainesville FL 32609
        </p>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Explore
        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>

  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white-800 dark:border-white-1500">
  <div className="p-5">
    <a href="#">
        <img className="rounded-t-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABKCAMAAAC2AzvLAAAAmVBMVEX////4nzc/P0FDQ0VdXV74njQ8PD74+PhISEr7+/v4nTBra234mymSkpMxMTQhISWJiYr4mB7++PLV1dV8fH03Nznx8fFPT1H99Ou1tbXd3d3n5+crKy6jo6SZmZpmZmj85tH4qFD4rV3Dw8P5vH/6yZr61LH84cj70Kn5w474tXD869v4pEXMzMxzc3T73b/3kAAAAAYQEBWnf2ahAAAEzElEQVRoge2Xi7KiOBCGA4EIiEjkdhAQEW+A6Oy+/8NtJ1x0FKd2OMGtrZq/ypLm9qU73Z2A0B+90W1/+/pPwMcf1CgPp8/Dj1Q1TGpm5Xn7abAEYnB6KY6V/jHwjYMbOKXS56J+B7eOm9Jnon4zpZ/Fo57tj9VqWvDeaHiUUvMBDlHfFdMV2oG2WGOL0Nl8chzCXp6rCbD7bnrpiZmFIT0Lol4K97rHSgafzS194XK0YPAdK1HOPQ1yJeMiFFs8UMyCndm9xrkZ1XkiLIDL0y17g5WM3VRYeDc11TfYbvpF6DA4le/IVBT3BWuaBtRrNgxWJUHcZ6yaVUVZHr72wzNslGKw55cg0yM7Xw3XkURvE2Hh1UVVnZ/XiG4OxKTzcdAr6MVvsMZFyOwOYzvGZNjbEPZiUENlK+9+YCRCsF9DwYR+dNxnsL9bVc+XDUnMolAMTqK5bS+XT4E2LoLWouHOoErV4KgMQxB29SZnVVqctsfLM1ZQkN9z2brwsjCoorxFSL8MxVntZ1U17xOsmgK3VkMdWN3tqMnqyKDqub9BNUTu6IZaMJRRdSizy25/W/WJp1KxG8mhhfcB0W2xhAaZq6AvoVb7VvjVLv3isbBb3VE2nT9F+tJgtk2DVk3BQe5UQVuEBeghd+nucDzsKB+Nmh0m/Dj62h5K40fvOexyunE028fV7TQh/FbsVPMp6pKRsU/wr4m/hVcvUZfM7FPf/qvtuWRbjtZzM/sQl+vrVOzgQ5ixzWzi7+5nQdSLDAqNftTjVjpEXRWzr/p9VSJ6h5OH0finozB3xj1px8twPDdfxu64JxfE+g7XIvb/jYsDhcsNZ/zMLLwyM3Xz5o71Zs7s+WLNrPqqPCjAWGP/mzFcmYsQS2M5UssWIdyOFZZxtuURft2zwLUwJvKjMGaPe4sxXC1g0ixZXjqQKRgGwAR2HCHXwh5hpuxha+7HmBu9gMuujeF6IdKZ1ikMQcfYm0czJieQyby2sJX4zPRDGMGcyFd91kvn88uORnDveaVhciWy0pm+Bc4AtrMBLMMdj0+LyefQgxdb+cM1CCP2exsMgolHuLDti+Lm4CC27g0o8cAO7vemsuzGfUp5mi+ICxyCvbu/NvNX7v3VIcqzOg0ayRiyWAgXcoq4nqx0W4oI3A+w19dmYt3nHho73PkNbuLJqc8Tug5kWUOaTIK6yV+WRE6MLZvnd7SwcJyjPpVDxoXLQTQqn8EpeckF9Wqt4U3wx20IOsR4ARUbMzMm2HJR+NeyFSswpGsyhqt/j3A6XLYdiMQa64QOtkhrK2xqk2XXr5YQ8bzPK2KlcHW99Mb1K3jUTrnsLqFye860aBPbD11mugkbRZ3OW12btPAX8KiSDL75j35LfputEfJ/faNgJXXzb6Ngwq+FxLETHSU2g+WbDWRT4m42G1iKQ8aNEn6cf2MzOKyluw5TJVxDvroLx8k1P0kcp1ZqhFGA1kHNj2vhIffgl0Cl6umabxXXdhPnAGnwS6OZP4s00VAQhl/IavMa8qr03YabAldByvUKpTty7/rvuHOfL4GbkHOdK/d3wZqLn//qBSNFOm6KHM11FRtF8DdPZ3x+0RU8DoQnFWJVCltZVrEsc6KIHelRxA1+yo8+W8Xj9A9w9GMzRu9tbAAAAABJRU5ErkJggg==" alt="" />
    </a>
        <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Boost Mobile</h5>
        </a>
        <p className="mb-4 text-base font-normal text-gray-600">
        3439 W University Ave.
        Gainesville FL 32607
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        2302 E University Ave.
        Gainesville FL
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        6419 Newberry Rd.
        Gainesville FL 32605
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        424 NW 13th St.
        Gainesville FL 32601
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        2448 N Main St.
        Gainesville FL 32609
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
       7349 W Newberry Rd.
       Gainesville  FL 32605
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        5212 SW 34th St.
        Gainesville FL 32608
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        6250 NW 23rd St.
        Gainesville FL 32653
      </p>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Explore
        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
    </div>
  </div>

  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white-800 dark:border-white-1500">
  <div className="p-5">
    <a href="#">
        <img className="rounded-t-lg" src="data:image/png;base64,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" alt="" />
    </a>
   
        <a href="#">
        <h5 className="mb-7 text-2xl font-bold tracking-tight text-gray-900">Cricket Wireless</h5>
        </a>
        <p className="mb-5 text-base font-normal text-gray-600">
        405 NW 13th St. 
        Gainesville FL 32601
        </p>
        <p className="mb-5 text-base font-normal text-gray-600">
        2803 SW 42nd St. #6 
        Gainesville FL 32608
        </p>
        <p className="mb-5 text-base font-normal text-gray-600">
        1140 NW 76th Blvd #16A 
        Gainesville FL 32606
        </p>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Explore
        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
    </div>
  </div>


     <div className="flex flex-col space-y-12 divide-y divide-gray-200">
     <div>
      {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
      <a href="#" className="text-gray-900 hover:text-purple-700">AT&T</a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-600">
        3626 SW Archer Rd.
        Gainesville FL 32608
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
       6110 NW 4 Pl. 
       Gainesville FL 32607
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
      3720 NW 13th St. 
      Gainesville FL 32609
      </p>
    </div>

    <div>
      {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href="#" className="text-gray-900 hover:text-purple-700">Boost Mobile</a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-600">
        3439 W University Ave.
        Gainesville FL 32607
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        2302 E University Ave.
        Gainesville FL
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        6419 Newberry Rd.
        Gainesville FL 32605
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        424 NW 13th St.
        Gainesville FL 32601
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        2448 N Main St.
        Gainesville FL 32609
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
       7349 W Newberry Rd.
       Gainesville  FL 32605
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        5212 SW 34th St.
        Gainesville FL 32608
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        6250 NW 23rd St.
        Gainesville FL 32653
      </p>
      {/* <a href="#" className="btn btn-light btn-sm">Continue Reading</a> */}
    </div>

    <div>
      {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href="#" className="text-gray-900 hover:text-purple-700">Cricket Wireless</a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-600">
        405 NW 13th St.
        Gainesville FL 32601
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        2803 SW 42nd St. #6
        Gainesville FL 32608
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        1140 NW 76th Blvd #16A
        Gainesville FL 32606
      </p>
      {/* <a href="#" className="btn btn-light btn-sm">Continue Reading</a> */}
    </div>

    <div>
      {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href="#" className="text-gray-900 hover:text-purple-700">Sprint</a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-600">
        3600 SW Archer Rd. Ste. C.
        Gainesville FL 32608
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
        5171 NW 43rd St.
        Gainesville FL 32606
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
       2 NW 16th Ave.
       Gainesville FL 32601
      </p>
      {/* <a href="#" className="btn btn-light btn-sm">Continue Reading</a> */}
    </div>

    <div>
      {/* <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p> */}
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
      <a href="#" className="text-gray-900 hover:text-purple-700">T-Mobile</a>
      <p className="mb-4 text-base font-normal text-gray-600">
        3401 SW Archer Rd.
        Gainesville  FL 32608
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
       6921 W Newberry Rd, Ste. C.
       Gainesville FL 32605
      </p>
      <p className="mb-4 text-base font-normal text-gray-600">
       2612 NW 13th St. Verizon Authorized Retailer 
       Gainesville FL 32609
      </p>
      </h2>
      </div>

  </div>
  {/* <div className="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
    <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Previous Page</a>
    <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Next Page</a>
  </div> */}
</section>
</div>
);
}
