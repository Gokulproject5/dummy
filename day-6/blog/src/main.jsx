import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Link, Route } from 'react-router'
import { Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router'
import './index.css'
import { About } from './assets/pages/About.jsx'
import { Blog } from './assets/pages/Blog.jsx'
import { Contact } from './assets/pages/Contact.jsx'
import { Home } from './assets/pages/Home.jsx'
import '@fontsource-variable/sansita-swashed';
import BlogForm from './assets/pages/blogCom/localApi/blogForm.jsx'
import Header from './assets/components/Header.jsx'
import ApiProvider from './assets/context/ApiProvider.jsx'
import Login from './assets/components/Login.jsx'
import Dashboard from './assets/pages/Dashboard.jsx'
import Demo from './demo.jsx'
import { Provider } from "react-redux";
import { store } from './assets/store/store.js'
import Register from './assets/components/Register.jsx'



createRoot(document.getElementById('root')).render(

    <StrictMode>
        <Provider store={ store }>
        <ApiProvider>
            <Router >
                <Routes>
                    <Route path='/demo' element={<Demo />}/>
                     <Route path='/Login' element={<Login />} />
                     <Route path='/Register' element={<Register />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog/form/:id' element={<BlogForm />} />
                    <Route path='/blog/form' element={<BlogForm />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/:username' element={<Home />} />
                    <Route path='*' element={<div>
                        <div>
                            <Header />
                        </div>
                        <Link to={'/blog'} className='text-bold text-red-600 text-center  py-10'>
                            <p>Page Not Found...</p>

                        </Link>
                    </div>} />

                </Routes>
            </Router>
        </ApiProvider>
</Provider>
    </StrictMode>,
)
