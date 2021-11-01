import React, {useState} from "react";

function Input(props){
    const [postContent, setPosContnent] = useState()
    const [postDescription, setPosDescription] = useState()

    const onInputChange = (e) => {
        setPosContnent(e.target.value)
    }

    const onDescriptionChange = (e) => {
        setPosDescription(e.target.value)
    }

    const upPost = (e) => {
        //e.preventDefaut()
        if (!postContent || postContent === "" || !postDescription || postDescription==="" ){
            alert("Hãy nhập đầy đủ tiêu đề và nội dung của post")
        }
        else {
            props.addPost({
                "content": postContent,
                "description": postDescription
            })
            setPosContnent("")
            setPosDescription("")
         }
        

    }

    return (
        <div className= "post-input">
            <input placeholder="Tiêu đề" type="text" value = {postDescription} onChange={onDescriptionChange} >
                
            </input>
            <input placeholder="Nhập vào đây nhưng gì bạn muốn chia sẻ" value = {postContent} onChange={onInputChange} type="text">
            </input>

            <div className="btn btn primary" onClick={upPost}>
                Post
            </div>
            
        </div>
    )
}

export default Input