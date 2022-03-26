import React from "react"
import Link from "next/link"

export default function Table(props) {
  console.log(props,'mmm')
  const Header = ({ array }) => {
    let counter = 0;
    return array?.map((x) => {
      ++counter;
      return (
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" key={counter}>
          {x.name}
        </th>
      );
    });
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="table-fixed max-w-screen divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <Header array={props.header} />
                  </tr>
                </thead>
                {props?.type === "user" ?
                <tbody className="bg-white divide-y divide-gray-200">
                  {props?.data?.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{person?.firstname} {person?.lastname}</div>
                            <div className="text-sm text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person?.deptName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person?.specialization}</div>
                        <div className="text-sm text-gray-500">{person?.profile}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      {person?.course?.split(",").map(a => 
                            <span className="mx-1 px-2 inline-flex text-xs leading-5 font-bold rounded-full bg-gray-100 text-gray-500">
                              {a}
                            </span>
                      )}

                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person?.nationality}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person?.status === "alumni" ?
                        <span className="px-2 inline-flex text-xs leading-5 font-bold rounded-full bg-gray-100 text-gray-800">
                        Alumni
                      </span>: (person?.status === "incoming" ?
                      <span className="px-2 inline-flex text-xs leading-5 font-bold rounded-full bg-red-100 text-red-800">
                      Incoming
                    </span>:
                        <span className="px-2 inline-flex text-xs leading-5 font-bold rounded-full bg-blue-100 text-blue-800">
                          Active
                        </span>)}
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
                    </tr>
                  ))}
                </tbody>:
                <tbody className="bg-white divide-y divide-gray-200">
                {props?.data?.map((person) => (
                  <tr key={person.name}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person?.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person?.major}</div>
                      <div className="text-sm text-gray-500">{person?.specialization}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{person?.department}</div>
                      
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person?.faculty}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person?.likes}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                     {person?.dislike}
                    </td>
                  </tr>
                ))}
              </tbody>}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}