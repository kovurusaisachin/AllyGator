import React from "react"
import Link from "next/link"

export default function Table(props) {
  console.log(props,"pkkk")
  const Header = ({ array }) => {
    let counter = 0;
    return array?.map((x) => {
      ++counter;
      return (
        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" key={counter}>
          {x.name}
        </th>
      );
    });
  };
  return (
    <>
      <div className="mr-8  flex flex-col">
        <div className="my-2 overflow-x-auto sm:-mx-6 ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <Header array={props.header} />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {props?.data?.map((person) => (
                  <tr key={person.name}>
                    <td className= "py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person?.firstname} {person?.lastname}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person?.specialization}</div>
                          <div className="text-sm text-gray-500">{person.profile}</div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={person?.url ?? ""}>
                          <a target="_blank">
                            <svg
                              className="w-6 h-6 text-blue-800 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512">
                              <path
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                              ></path>
                            </svg>
                          </a>
                        </Link>
                      </td>

                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="flex items-center px-3 py-1 font-semi-bold tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-1">Connect</span>
                </button>
                    </td>

                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    

  );
}