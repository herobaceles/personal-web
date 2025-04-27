


export default function HeroPanel() {




    return (

        <>
       <div className="flex items-center justify-center">
       <div className=" grid grid-cols-5 grid-rows-4 gap-2.5  w-200 h-120  container">

            <div className=" border-[#eaeaea] rounded-xl col-span-5 row-span-2 shadow flex">
                    <div className="flex-1  p-5">
         
                        <h3 className="font-bold text-lg">About</h3>
                        <p className="text-xs leading-6">I'm a backend software developer  specializing in building robust and scalable solutions using the MERN stack, PHP, and MySQL. I work on projects that involve designing secure APIs, managing complex databases, optimizing server performance, and integrating backend systems that power modern websites, web applications, and mobile platforms.</p></div>
                    <div className="flex-auto bord "></div>
            </div>
            <div className=" border border-[#eaeaea] col-span-3 rounded-xl row-span-2 shadow p-4">
           
            <h3 className="font-bold text-lg">Techstack</h3>
            <h5 className="font-semibold">Frontend</h5>
                    <div className="flex p-3 flex-wrap">
                        <span className="px-4 shadow rounded-md text-xs me-3">React</span>
                        <span className="px-4 shadow rounded-md text-xs me-3">Javascript</span>
                        <span className="px-4 shadow rounded-md text-xs me-3">Bootstrap</span>
                        <span className="px-4 shadow rounded-md text-xs me-3">Tailwind</span> 
                     </div>
                     <h5 className="font-semibold">Backend</h5>
                    <div className=" flex p-3 flex-wrap">
                        <span className="px-4 shadow rounded-md text-xs me-3">Javascript</span>
                        <span className="px-4 shadow rounded-md text-xs me-3">Express.js</span>
                        <span className="px-4 shadow rounded-md text-xs me-3">Node.js</span>
                        <span className="px-4 shadow rounded-md text-xs me-3">Php</span> 
                     </div>
                     <h5 className="font-semibold">Database</h5>
                     <div className="flex p-3 flex-wrap gap-2">
                     <span className="px-4 shadow rounded-md text-xs me-3">MongoDB</span>
                     <span className="px-4 shadow rounded-md text-xs me-3">MySql</span>
                     </div>
                 
        
            

            </div>
            <div className="border  border-[#eaeaea] col-span-2 row-span-2 rounded-xl shadow">
            <div className="p-5"><h3 className="font-bold text-lg">Connect</h3> </div>
            
            </div>
        </div>
        
       </div>
        </>


    )



    
}




