import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
  //------ Dynamic values in templates-----

  // const title = 'App conponent';
  // const likes = 50;
  // //const person = { name: 'tedi', age: 23};
  // const link = 'https://www.google.com';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
           <Route exact path="/" element ={<Home />}/>
           <Route path="/create" element ={<Create />}/>
           <Route path="/blogs/:id" element ={<BlogDetails />}/>
           <Route path="*" element={<NotFound/>}/>  
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

        // {/* <h1>{ title }</h1> */}
        // {/* //* only for testing */ }
        // {/* <p>Liked {likes} times</p> */}
        // {/* <p>{ person }</p>  */}
        // {/* <p>{[213142]}</p>
        // <p>{Math.random() * 10 }</p>
        // <a href={link}>Google Site</a> */}


