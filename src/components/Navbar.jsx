"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";



const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title:"About",
            path:'/about'
        },
        {
            title:"Services",
            path:'/services'
        },
        {
            title:"Contacts",
            path:'/contacts'
        },
        {
            title:"Blogs",
            path:'/blogs'
        },

    ]
    const handleLogin = ()=>{
        router.push('/about')
    }
    if(pathName.includes("dashboard"))
        return(
        <nav className="bg-green-400">
        DASHBOARD LAYOUTS
        </nav>
        )
    return (
        <div>
         
          
 <nav className="bg-red-400 px-6 py-4 flex justify-between items-center">
 <h6 className="text-3xl">Next <span className="text-cyan-300">Hero</span></h6>
 <ul className="flex justify-between items-center space-x-4">
  {
    links?.map((link)=><Link className={`${pathName===link.path && "text-orange-400"}`} key={link.path} href={link.path}>{link.title}</Link>)
  }
 </ul>
 <button onClick={handleLogin} className="bg-white text-cyan-400 p-4">Login</button>
</nav> 
        
        </div>
    );
};

export default Navbar;