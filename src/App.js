// boootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// helmet
import {Helmet} from 'react-helmet';

// components
import './App.css';
import Navbars from './Component/Nav/Navbars';
import Footer from './Component/Footer/Footer'



function App() {
  return (
    
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Tony River'a Full-Stack</title>
                <link rel="canonical" href="/" />
                <meta name="description" content="Tony River'a Full-Stack" />
      </Helmet>

      <nav>
        <Navbars /> 
      </nav>
      <main>
        {/* <Slider /> */}
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
