export const jsonPlaceHolderService = ({doGet, doPost}) => {

    const getPostById = async (id) => {
        try {
            return await doGet({url: '/posts/'+ id});

        } catch (error) {
            throw error
        }
    }
    const createPost = async (newPost) => {
        try {
            return await doPost({
                url: '/posts', data: newPost
            })
        } catch (error) {
            throw error
        }
    }
    
    return { getPostById, createPost}
}