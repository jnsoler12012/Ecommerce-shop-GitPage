import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { ErrorPage, Home, ProductDetails } from '../../UI/Pages'
import { Footer, Header, Sidebar } from '../../UI/Components'

function ReactRouterProvider() {
    return (
        <HashRouter>
            <div className='overflow-hidden'>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product/:id" component={ProductDetails} />
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
                <Sidebar />
                <Footer />
            </div>
        </HashRouter>

    )
}

export default ReactRouterProvider