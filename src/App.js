import Header from './Header';
import Main from './Main';
import './App.css';
import { useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Detail from './Detail';


function App() {
  const[search,setSearch] = useState('');
  const [items,setItems] = useState([]);
  const [repositories,setRepositories] = useState([]);
  const [data,setData] = useState({})
  //to handle the search
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${search}in:user`,{
          method: "GET",
          headers: {
            Authorization: `token ${process.env.REACT_APP_Key}` 
          }
        })
        const res = await response.json();
        setItems(res.items);
        
        } catch (err) {
          console.log(err);
      }
    }
  return (
  <Router>
    <div className="App">
      <Header title = "Github Search" />
      <Routes>
      <Route exact path="/" element={<Main
         search={search}
         setSearch={setSearch}
         handleSubmit = {handleSubmit}
         items ={items}
        />}>
      </Route> 
      <Route exact path ="/details/:uname" element={<Detail
          repositories ={repositories}
         setRepositories ={setRepositories}
         data = {data}
         setData={setData}
         />}>
      </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
