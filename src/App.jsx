// import React from 'react'
import './index.css'

export const App = () => {
  return (
    <div className='m-5'>
      <h1 className='font-bold uppercase ' >ram ram ji</h1><br />
      {import.meta.env.VITE_API_KEY} <br />
  <button className =" mt-5 explore-btn relative px-8 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none">
        Explore
    </button>
    </div>
  )
}

export default App
