import React from "react"
import Link from "next/link"

export default function Table(props) {
  console.log(props,"pk")
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
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <Header array={props.header} />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {props?.data?.data?.map((person) => (
                  <tr key={person.coursename}>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person?.coursename}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{person?.deptName}</div>
                      
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person?.facultyname}</td>
                    
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}