import React from 'react';
import SnackBar  from './components/forms/SnackBar';
import Header from './components/layout/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, DishPage, AuthPage, RegisterPage } from './components/pages/';
import RouteGuard from './components/pure/RouteGuard'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './redux/store'
import CheckoutPage from './components/pages/CheckoutPage';

import { ThankYou } from './components/pages/ThankYou';

import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <ConnectedRouter history={history}>

      <Header />

       <SnackBar />
      
      <Switch >
        
        <Route path='/' exact render={() => (<RouteGuard><HomePage /></RouteGuard>)} />
        
        <Route path='/dish'  render={() => (<RouteGuard><DishPage /></RouteGuard>)} />

        <Route path='/product/:id' 
          render={() => <RouteGuard> <ProductPage /> </RouteGuard>}
        />

        <Route path='/checkout' 
          render={() => <RouteGuard> <CheckoutPage /> </RouteGuard>}
        />

        <Route path='/thankyou' 
          render={() => <RouteGuard> <ThankYou /> </RouteGuard>}
        />
     
        <Route path='/auth' exact component={AuthPage} />
    
        <Route path='/register' component={RegisterPage} />

      </Switch>

    </ConnectedRouter>
   
  );
}

export default App;
