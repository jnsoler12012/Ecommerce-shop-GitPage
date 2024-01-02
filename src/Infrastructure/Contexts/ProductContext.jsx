import React, { createContext, useContext, useEffect, useState } from 'react'
import { AxiosContext, mainAxios } from '../../Infrastructure/AxiosProvider';
import { Loading } from '../../UI/Components';


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState({
        products: [],
        loading: false
    });
    const axiosContext = useContext(AxiosContext)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await mainAxios({ url: "/products", method: "GET", axios: axiosContext, setProducts: setProducts })

            if (response.result)
                setProducts((prevState) => ({
                    ...prevState,
                    products: response.result
                }))
        }

        fetchProducts()
    }, [])

    return <div>
        {products.loading
            ? <Loading />
            : <ProductContext.Provider value={{ products: products.products, setProducts }}>
                {children}
            </ProductContext.Provider>}

    </div>

}

export default ProductProvider;