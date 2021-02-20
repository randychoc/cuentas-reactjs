import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cuentas from '../pages/Cuentas'
import CuentaNueva from '../pages/CuentaNueva'
import NotFound from '../pages/404'
// import Hooks from '../components/HooksEj'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/cuentas" component={Cuentas} />
            {/* <Route exact path="/hooks" component={Hooks} /> */}
            <Route exact path="/cuentas/nueva" component={CuentaNueva} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App