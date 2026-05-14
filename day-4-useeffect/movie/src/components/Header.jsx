import React from 'react'
import {BrowserRouter as Router ,Routes ,Route, Link} from 'react-router-dom'
import Content from './Content'
import Form from './Form'
const Header = () => {
  return (
    <>
     <header>
         
               <Router>
                 <div className='flex items-center justify-between bg-purple-400 pr-5 border-b-2 border-white h-20'>
              <div className='flex items-center bg-black text-white px-2 space-x-2 h-full'>
                <div className='w-8 '>
                 <img src="/logo.svg" alt="logo" /> 
              </div>
              <div className='font-sansita'>
                  <Link to="/" className='font-sans text-3xl italic'>Flix Max</Link>
              </div>
              </div>
            
                   <ul className='flex space-x-5 items-center text-md font-bold italic'>
                      <li><Link to="/Add">Add Movies</Link></li>
                      <li>About</li>
                      <li><div className='bg-white text-purple-600 w-8 h-8 py-1 rounded-full text-center'>
                        GA   
                        </div></li>
                   </ul>
                    </div>
                   <Routes>
                      <Route path='/' element ={<Content />} >
                
                      </Route>
                      <Route path="/Edit/:id" element={<Form />} />
                      <Route path="/Add" element={<Form />} />
                
                     
                   </Routes>
                    
               </Router>
          
     </header>
    </>
  )
}

export default Header