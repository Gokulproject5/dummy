import React, { useContext } from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import { themeContext } from '../context/themeApi'
import { store } from '../store/store'

export const Home = () => {
  const { isLogged, currentUser } = useContext(themeContext);


 console.log(store);
 

  return (
    <>

      {
        isLogged && (
          <div >
            <Header />
            <div className='dark:bg-slate-900 min-h-screen dark:text-white flex items-center justify-center'>
              <h1 className='text-center text-3xl font-bold'>Welcome {currentUser.fullname || "Home..."} </h1>
            </div>
          </div>
        )
      }{
        !isLogged && (
          <>
            <Login />
          </>
        )
      }


    </>
  )
}
