import React, { useEffect } from 'react'
import ReactRouterProvider from './ReactRouterProvider/ReactRouterProvider'
import { AxiosContextProvider } from './AxiosProvider'
import { CartProvider, ProductProvider, SidebarProvider } from './Contexts'

function App() {

  return (
    <AxiosContextProvider config={{ baseURL: "https://fakestoreapi.com" }}>
      <SidebarProvider>
        <CartProvider>
          <ProductProvider>
            <ReactRouterProvider />
          </ProductProvider>
        </CartProvider>
      </SidebarProvider>
    </AxiosContextProvider>

  )
}

export default App