
export default ({ url, method, payload, axios, setProducts }) => {

    let response = {
        result: null,
        error: null
    }
    return (async () => {
        setProducts((prevState) => ({
            ...prevState,
            loading: true
        }))

        try {
            const petitionResponse = await axios.request({
                data: payload,
                method,
                url,
            });

            response.result = petitionResponse.data
        } catch (error) {
            response.error = error
        } finally {
            setProducts((prevState) => ({
                ...prevState,
                loading: false
            }))
        }
        return response;
    })();
}