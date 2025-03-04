import React, { useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2';

function SearchBar() {

    const[searhTerm,setSearchTerm]=useState("");
    const[isOpen,setisOpen]=useState("false");
    const handleSearchToggle=()=>{
        setisOpen(!isOpen);
    };
  return (
    <div>
    {isOpen ? (
        <form className='relative flex items-center justify-center w-full'>
            <div className='relative w-1/2'>
            <input type="text" placeholder="Search" value={searchTerm}className='bg-gray-100 px-4 pi-2 pr-12 rounded-lg focus:outline-none w-full placehoder:text-gray-700'/> 
            </div></form>
    ) : (
        <button onClick={handleSearchToggle}>
        <HiMagnifyingGlass className='h-6 w-6 text-gray-700'/>
        </button>
    )}
   </div> 
  );
};

export default SearchBar