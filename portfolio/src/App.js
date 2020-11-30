import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';

import ignasi_pattern_s from './ignasi_pattern_s.png'; // import logo from '/img/Nattklunn.png'; if img is a folder at root.

function App() {
    return (
      <div style={{ backgroundImage: `url(require(${ignasi_pattern_s}))` }}>
    
       <Header />
        {/* End of navbar */}
        {/* Start of container */}
       <Switch >
        <Route path="/" component={Portfolio} exact />
        <Route path="/about" component={Aboutme} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact}/>
       </Switch>
        {/* End of container */}
        {/* Start of footer */}
        <Footer />
     </div>
    );
  }
;
export default App;
