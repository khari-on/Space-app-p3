import React,{ useState,useEffect} from "react";
import Header from "./components/Header";
import './App.css';
import CardGrid from "./components/CardGrid";

function App(){
    const [items,setItems]=useState([])
    const [isLoading,SetIsLoading]=useState(true);

   useEffect(()=>{
     const fetchItems = async()=>{
        const response = await fetch(`https://finalspaceapi.com/api/v0/character/`)
        const data = await response.json();
        console.log(data)
        setItems(data)
        SetIsLoading(false)
     }
     fetchItems()


   },[])



    return(
        <div className="container">
              <Header />
              <CardGrid isLoading={isLoading} items={items} />
        </div>
       
       
    )
}

export default App;