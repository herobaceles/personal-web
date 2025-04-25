


export default function HeroPanel() {




    return (

        <>
       <div className="flex items-center justify-center">
       <div className=" grid grid-cols-5 grid-rows-4 gap-2.5  w-200 h-120  container">

            <div className=" border-[#eaeaea] rounded-xl col-span-5 row-span-2 shadow flex">
                    <div className="flex-1  p-5">
                        <h3 className="font-bold text-lg">About</h3>
                        <p className="text-xs leading-6">I'm a backend software developer  specializing in building robust and scalable solutions using the MERN stack, PHP, and MySQL. I work on projects that involve designing secure APIs, managing complex databases, optimizing server performance, and integrating backend systems that power modern websites, web applications, and mobile platforms.</p></div>
                    <div className="flex-auto border"></div>
            </div>
            <div className="border  border-[#eaeaea] col-span-3 rounded-xl row-span-2 shadow">
            <div className="flex-1  p-5">
            <h3 className="font-bold text-lg">Techstack</h3>
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




