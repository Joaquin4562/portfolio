import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, far);

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
