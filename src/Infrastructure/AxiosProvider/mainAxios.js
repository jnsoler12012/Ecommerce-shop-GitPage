
export default ({ url, method, payload, axios, setProducts }) => {
    console.log(url, method, payload, axios)
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
            console.log("errrororo", error)
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