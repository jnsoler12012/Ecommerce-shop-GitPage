import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { ErrorPage, Home } from '../../UI/Pages'

function ReactRouterProvider() {
    return (
        <HashRouter>
            <div className='overflow-hidden'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </div>
        </HashRouter>

    )
}

export default ReactRouterProvider