export const jsonPlaceHolderService = ({doPost, doGet}) => {

    const getPostById = async (id) => {
        try {
            return await doGet({url: '/'+ id});
        } catch (error) {
            throw error
        }
    }
    const createPost = async (title, body) => {
        try {
            return await doPost({
                url: '/', data: {
                    title, body
                }
            })
        } catch (error) {
            throw error
        }
    }
    
    return getPostById, createPost
}