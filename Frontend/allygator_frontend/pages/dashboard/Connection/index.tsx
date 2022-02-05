import React from 'react'
import Sidebar from '../../../components/sidebar'
import Table from '../../../components/Table'
// import ResetPass from './ResetPassword'
function Connection() {
    const headerData = [{ name: "Name", href: "#home" },
    { name: "Major", href: "#features" },
    { name: "Department", href: "#features" },
    { name: "Nationality", href: "#register" },
    { name: "Status", href: "#team" },
    { name: "Linkedin", href: "#team" },]
    const connectionData = [{
        name: 'Jane Cooper',
        major: 'Regional Paradigm Technician',
        department: 'Optimization',
        nationality: 'Indian',
        email: 'jane.cooper@example.com',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    }]
    return (
        <div className="flex flex-col-2">
            <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="bg-white shadow">
                        <div className="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
                            <div className="py-6 md:flex md:items-center md:justify-between">
                                <div className="flex-1 min-w-0">
                                    {/* Profile */}
                                    <div className="flex items-center">
                                        <div>
                                            <div className="ml-3 flex flex-col items-start">
                                                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                                                    Connections
                                                </h1>
                                                <p className="text-gray-600">
                                                    Get an overview of all connections here
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-8 my-8'>
                        <Table header={headerData} data={connectionData} type="connection" />
                    </div>
                </div>

        </div>
    )
}
export default Connection