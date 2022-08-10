import React, { useEffect, useState } from 'react'
import { useDeps } from '../../context/DepContext'

const UseJsonPlaceHolder = () => {
    const {jsonPlaceHolderService} = useDeps()
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState({})


    useEffect(() => {
        console.log('useEffect triggered');
        onGetPostById();
    }, [])

    const onGetPostById = async () => {
        setIsLoading(true)
        try {
            const response = await jsonPlaceHolderService.getPostById('1')
            console.log(response);
            setPosts(response)
        } catch (error) {
            console.log(error);
        } finally{
            setIsLoading(false)
        }
    }

    const onCreatePost = async () => {
        setIsLoading(true)
        try {
            const response = await jsonPlaceHolderService.createPost({title: 'Hello World', body: 'Ini post baru'})
            setPosts(response)
        } catch (error) {
            console.log(error);
        } finally{
            setIsLoading(false)
        }
    }
    return {
        isLoading, posts, onCreatePost
    }
}

export default UseJsonPlaceHolder