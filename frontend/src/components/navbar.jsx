import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between p-4 bg-nav-800 text-white '>
            <h1 className="text-2xl md:text-3xl">Amazona</h1>
          <div className='flex gap-5'>
             <a href="cart.html">Cart</a>
             <a href="signin.html">SignIn</a>
          </div>
        </div>
    )
}

export default Navbar
