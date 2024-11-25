import { useState } from "react";
import React  from 'react'

function Header({toggleSidebar,isSidebarOpen}) {
   
  
    return (
      <div className="h-screen w-full flex flex-col ">
        <header className="flex justify-between bg-slate-700  items-center text-white">
          <div className="flex item-center">
         <button
          onClick={toggleSidebar}
           className="text-white hover:bg-gray-700 p-2 rounded focus:outline-none">
          <span className="material-icons">
            { isSidebarOpen? "menu_open" : "menu"}
          </span>
          </button>
          <h1 className=" text-xl ml-4" >
            Gemini 
          </h1>
          </div>
        <div>
          <img width={40} height={40} src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" alt="" />
        </div>
  
        </header>
 
  
      </div>
    )
}

export default Header