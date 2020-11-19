import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import './App.css';
import Header from './components/Header';

function App() {
    return (
      <div>
       <Header />
        {/* End of navbar */}
        {/* Start of container */}
       <Switch >
       <Route path="/" component={Portfolio} exact />
                <Route path="/about" component={Aboutme} />
                <Route path="/portfolio" component={Portfolio} />

       </Switch>
        {/* End of container */}
        {/* Start of footer */}
        <Footer />
     </div>
    );
  }
;
export default App;
