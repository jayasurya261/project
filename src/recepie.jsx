import "./recepie.css";
import search from "./images/recepie/search-interface-symbol.png";
import { useState,useEffect } from "react";
const Recepie = () => {
    const [recepie, setRecepie] = useState([]);

    // const [search,setSearch] = useState("");
    const [search,setSearch] = useState("");
    async function fetchAllUsers(search) {
        try {
            const apiResponse = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
            const result = await apiResponse.json();
            console.log(result);
            if(result?.recipes){
                setRecepie(result.recipes[0].instructions)
                console.log(recepie[1]) 
            }else{
                setRecepie([])
            }
        } catch (error) {
            console.log(error);
        }
    }
    function fetchStart(e){
      e.preventDefault();
      let search = document.getElementById("text").value;
      document.getElementById("demo").innerHTML = search
       setSearch(search)
    }
    console.log(search);
    
    
    useEffect((setSearch) => {
        fetchAllUsers(search)
     }, [search]);
     console.log(recepie);

     
  return (
    <>
      <div id="header">
        <h1>Made your Day With Us</h1>
        <form>
        <input type="text" placeholder="eg.pizza" id="text"></input>
        <button id="search-button" onClick={fetchStart}>
          <img src={search} alt="" />
        </button>
        </form>
      </div>
      <div id="recepie-content">
        
          <ul>
            <p id="demo" style={{fontSize:'25px'}}>Pizza</p>
            <p style={{marginTop:'10px',fontSize:'19px'}}>Instructions</p>
            {recepie.map((userItem) => (
              <li key={userItem?.id}>
                <p>{userItem}</p>
              </li>
            ))}
          </ul>
        
      </div>
    </>
  );
};
export default Recepie;
