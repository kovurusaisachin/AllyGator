import Sidebar from "../../../../components/sidebar"
export default function ufmobileoutreachclinic () {
    return (
        <div className="flex flex-col-2">
        <Sidebar />
        <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
  <div className="mb-12 text-left md:text-center">
    <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">
   UF Mobile Outreach Clinic
    </h2>
    <p className="text-lg text-gray-500">
    The UF mobile outreach clinic is available at different locations throughout the week.
    </p>
    </div>    
    <div>
    <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
          <a href="#" className="text-gray-900 hover:text-purple-700">TUESDAY: Library Partnership</a>
    </h2>
    <p className="mb-4 text-base font-normal text-gray-600">
       912 NE 16th Ave.
       Gainesville FL 32601
       352-344-0165
       10am - 4pm
    </p>
    </div>

    <div>
    <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href="#" className="text-gray-900 hover:text-purple-700">WEDNESDAY: Headquarters Library</a>
    </h2>
    <p className="mb-4 text-base font-normal text-gray-600">
       5453 401 E University Ave.
       Gainesville FL 32601
       352-334-3900
       10am - 4pm
    </p>
    </div>

    <div>
    <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href="#" className="text-gray-900 hover:text-purple-700">THURSDAY: T.B. McPherson Center</a>
    </h2>
    <p className="mb-4 text-base font-normal text-gray-600">
       1717 SE 15th St.
       Gainesville FL 32641
       352-334-2188
       10am - 4pm 
    </p>
    </div>
     
    <div>
     <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
         <a href="#" className="text-gray-900 hover:text-purple-700">FRIDAY: GRACE Marketplace</a>
     </h2>
     <p className="mb-4 text-base font-normal text-gray-600">
       3055 NE 28th Ave.
       Gainesville FL 32509
       352-792-0800
       10am - 4pm 
    </p>
    </div>  
    </section>
    </div>
    )
}