import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='bg-gray-400'>
             <div>
                 <h1>login</h1>
             </div>
             <div>
                <label htmlFor="">Email:</label>
                 <input type="text" />
                <label htmlFor="">Password:</label>
                 <input type="text" />
                 <button>Sign In</button>
             </div>
        </div>
    </div>
  )
}

export default Login