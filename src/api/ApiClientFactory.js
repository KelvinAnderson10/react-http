export const apiClientFactory = (client) => {
    
    const doGet = async ({url = ''}) => {
        try {
            const response = await client.get(url);
            return response.data;
        } catch (error) {
            throw error
        }
    }

    const doPost = async ({url = '', data = null}) => {
        try {
            const response = await client.post(url, data);
            return response.data;
        } catch (error) {
            throw error
        }
    }

    return {doPost, doGet}
}