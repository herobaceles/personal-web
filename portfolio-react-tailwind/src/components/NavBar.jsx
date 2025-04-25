 import profile from '../assets/profile.png'

export default function NavBar() {




    return(
        <header className="bg-white  ">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-center p-6 md:px-8">
                
                <div className="flex lg:flex-1  justify-center">


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
                </div>
                 
               
            </nav>
        </header>
    )
}