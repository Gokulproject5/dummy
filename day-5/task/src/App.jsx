import { useState } from 'react'
import Movie from './components/Movie'
import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import Page from './components/Page';
function App() {
  let [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
      <Router >
        <ol className='w-full space-x-3 mx-auto flex font-bold items-center justify-between bg-purple-500 mb-8 py-5  px-5 '>
           <Link to={'/'} className='text-2xl'>Tamil_Movies</Link>
          <Grid container display={'flex'} fontWeight={'bold'} justifyContent={'space-between'} spacing={2} >
           
            <Link to={"/"} > Movies </Link>
          <Link to={"/Add"} > ADD</Link>
          <Link to={"/page"} > page</Link>
          <input type="search" style={{borderRadius:5,paddingLeft:10}} className=' outline-0 bg-gray-100 ' placeholder='Search...'  onChange={handleSearch}/>
          </Grid>
          
          
        </ol>
        <Routes>

          <Route path='/' element={<Movie value={search}  />} />
          <Route path='/Add' element={<Form />} />
          <Route path='/Add/:id' element={<Form />} />
          <Route path='/page' element={<Page />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
