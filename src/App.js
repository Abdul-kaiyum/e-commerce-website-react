
import './App.css';

import Header from "./common/header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pages from './pages/Pages';
import Data from "./components/FlashDeals/Data";
import { useState } from "react";

function App() {

  
 //Step 1 :
 const { productItems } = Data
 

 //Step 2 :
 const [CartItem, setCardItem] = useState([])


  return (
  <>
      <Router>
        <Header/>
          <Switch>

            <Route path='/' exact>
                <Pages productItems={productItems} />
            </Route>

          </Switch>
        
      </Router>
  
  </>
  );
}

export default App;
