 import profile from '../assets/profile.png'

export default function NavBar() {




    return(
        <header className="bg-white flex justify-center align-center my-5">
            <nav aria-label="Global" className="flex justify-center align-center w-200 container">
                <div className=" flex flex-auto py-2">
                <div className=''>
                   <img src={profile} alt="profle photo" className='w-30 h-30 rounded-lg  border-[#eaeaea] shadow me-4' />
                   </div>
                
                <a href="#" className="-m-1.5 p-1.5"> 
                        <span className="font-bold text-2xl " >Hero B </span><br />
                        <span className='text-sm'>Backend Developer/ Student</span> <br />
                        <span className='text-xs'>Manila, Philippines</span> <br />
                        <button class=" flex items-center justify-center px-4 py-4 h-8 w-25 bg-black text-white rounded my-1 text-xs">
                         Send Email
                        </button>
                    </a>
                </div>
                <div className="flex-auto"><h1></h1></div>



                
                {/* <div className="flex lg:flex-1  justify-center">


                   <div className='mx-5'>
                   <img src={profile} alt="profle photo" className='w-30 h-30 rounded-lg  border-[#eaeaea] shadow' />
                   </div>


                    <a href="#" className="-m-1.5 p-1.5"> 
                        <span className="font-bold text-2xl " >Hero B </span><br />
                        <span className='text-sm'>Backend Developer/ Student</span> <br />
                        <span className='text-xs'>Manila, Philippines</span> <br />
                        <button class=" flex items-center justify-center px-4 py-4 h-8 w-25 bg-black text-white rounded my-1 text-xs">
                         Send Email
                        </button>
                    </a>
                </div> */}
                 
               
            </nav>
        </header>
    )
}