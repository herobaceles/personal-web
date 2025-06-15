

export default function Footer(){

 
        const currentYear = new Date().getFullYear();
    

    return (
        <>
        <div className="my-5 text-center">
        <footer className="">
            
            <p>&copy; {currentYear}  HeroB. All Rights Reserved.</p>
        </footer>
        </div>
        </>
    )




}