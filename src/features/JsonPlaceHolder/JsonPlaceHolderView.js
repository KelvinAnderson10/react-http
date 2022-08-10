
import React from 'react'
import UseJsonPlaceHolder from './UseJsonPlaceHolder'

export const JsonPlaceHolderView = () => {
    const {isLoading, posts, onCreatePost} = UseJsonPlaceHolder()
    return (
        <div>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
            <button disabled={isLoading} onClick={onCreatePost}>Create Post</button>
        </div>
    )
}
