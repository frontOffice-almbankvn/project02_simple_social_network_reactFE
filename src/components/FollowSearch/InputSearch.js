import React, { useState } from "react";

function InputSearch(props){
    const [searchWord, setSearchWord] = useState("")

    const p = props

    const onSearchWordChange = (e) => {
        setSearchWord(e.target.value)
        console.log(e.target.value)
    }

    const searchFollows = (e) =>{
        e.preventDefault()
        p.searchTargets(searchWord)
        setSearchWord("")
    }

    return (
        <div>
            <form onSubmit={searchFollows} className="d-flex" >
         
                <input type = "text" placeholder="Nhập vào email để tìm kiếm" className="form-control me-2" value = {searchWord} onChange={onSearchWordChange}></input>
                <input type="submit" value="Tìm kiếm" className="btn btn-primary" ></input>
            </form>
        </div>
    )   
}

export default InputSearch