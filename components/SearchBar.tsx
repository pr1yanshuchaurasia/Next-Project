"use client";
import image from "next/image";
import { SearchManufacturer } from "@/components";
import {useState} from "react";


const SearchBar = () => {
    const[manufacturer, setManufacturer]=useState('');
    const handleSearch = ()=>{

    }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
        </div>

    </form>
  )
}

export default SearchBar
