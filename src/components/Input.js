import React, { useState } from "react";

function Input(props) {
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
        if (!postContent || postContent === "" || !postDescription || postDescription === "") {
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
        <div className="col md-5">

            <div class="form-group">

                <input placeholder="Tiêu đề" type="text" value={postDescription} onChange={onDescriptionChange} >

                </input>
            </div>

            <div class="form-group mt-2">
                <input placeholder="Hãy viết vào đây" value={postContent} onChange={onInputChange} type="text">
                </input>
            </div>
            <div className="btn btn-primary mb-3 mt-3" onClick={upPost}>
                Post
            </div>
            <hr></hr>
        </div>
        
    )
}

export default Input