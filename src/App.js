import React, { useState, useEffect } from "react";

 import Products from "./components/Products";
const App = () => {
 
  const [search,setSearch] = useState('');
  const [data, setData] = useState([]);
  const [clicked, setclicked] = useState(false);
  const YOUR_APP_ID = "a3ee2cb6";
  const YOUR_APP_KEY ="e7d541aa39bfccacbe7114164cb3ee03";

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q= ${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data.hits);
        const newdata = data.hits;
        setData(newdata); 
      });
  }, [clicked,search]);

  return (
    <div>
      <h1  style={{position:'relative',left:'500px'}}>food recipie app</h1>
      <div   style={{position:'relative',left:'500px' ,top:"20px"}}>
        <input style={{width:"300px",height:'20px'}}
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
         
        ></input>
        <button
          onClick={() => {
            setclicked((ps) => !ps);
          }} >
          Search
        </button>
        </div>
        {data.length>=1 ? <Products  data={data}/>:null}   
       
       
     
     
    
      </div>
      
      
    
    
)}
;

export default App;