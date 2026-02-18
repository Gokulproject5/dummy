import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'
import Login from '../Login.jsx'


let profile =[ {
  id:1,
  name:"gokul",
  age:21,
  checked: true
},{
   id:2,
  name:"saran",
  age:21,
 checked: true
},{
   id:3,
  name:"bharathi",
  age:21,
 checked: false
},{
   id:4,
  name:"boopathi",
  age:21,
   checked: false


},{
   id:5,
  name:"obuli",
  age:21,
   checked: false


}]
 export const Api = createContext();

createRoot(document.getElementById('root')).render(
  <Api.Provider value={{profile}}>
  <StrictMode>
    <App />
    <Login/>
  </StrictMode>
  </Api.Provider>,
)
