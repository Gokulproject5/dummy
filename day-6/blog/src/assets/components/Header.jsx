import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { themeContext } from '../context/themeApi';
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import Swal from 'sweetalert2';

const Header = () => {
   const {theme , setTheme  ,setLogged} = useContext(themeContext)
    const navigate = useNavigate();
      
      
   useEffect(()=>{
     const themed = localStorage.getItem("theme")
     const root = window.document.documentElement;
     if(themed === "dark" ){
        root.classList.add("dark")
     }else{
        root.classList.remove("dark")
     }
   },[theme])

   const handleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

     const handleLogout=()=>{
        const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                       
                    });
        
                    Toast.fire({
                        icon: "success",
                        title: "Logged out successfully"
                    });
        
        
        navigate('/Login') ;
        setLogged(false);
     }
    return (
        <>
            <header>
                 <div className='flex justify-between dark:text-white dark:bg-slate-950 items-center px-5 font-semibold   py-5'>
                    {/* Logo */}
                     <div className='flex items-center '>
                         <div className='w-15 h-15 '>
                             <img src="/favicon.png" className='w-full h-full object-cover' alt="" />
                         </div>
                         <div>
                             <h1 className='text-2xl ' >Gokul</h1>
                         </div>
                     </div>

                     {/* Navigation Links */}
                     <div>
                         <nav className=' space-x-5 font-bold flex items-center'>
                             <NavLink to={'/'} >Home</NavLink>
                             <NavLink to={'/about'} >About</NavLink>
                             <NavLink to={'/blog'} >Blog</NavLink>
                             <NavLink to={'/contact'} >Contact</NavLink>
                             <NavLink to={'/dashboard'} >Dashboard</NavLink>
                             <button onClick={handleTheme} className='bg-slate-300 dark:bg-slate-900 rounded-full py-2 px-2 font-bold '>
                                { theme==="dark" ? <MdOutlineWbSunny className='text-yellow-600' />:<BsMoonStars className='text-black' />}</button>
                                <button type='button' title='Logout' className='text-2xl font-bold hover:text-red-500' onClick={handleLogout }><MdLogout /></button>
                         </nav>
                     </div>
                 </div>
            </header>

        </>
    )
}

export default Header