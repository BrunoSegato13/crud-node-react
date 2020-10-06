import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Usuario from './pages/usuario/detalhes';

import MainUsuario from './pages/usuario/main/index';

const Routes = ()=> (
    <BrowserRouter>
        <Switch>
            <Route  exact path = "/usuario"
                    component={MainUsuario}
            />
            <Route  path ="/usuario/:id"
                    component={Usuario}
            />
        </Switch>
    </BrowserRouter>
)

export default Routes;