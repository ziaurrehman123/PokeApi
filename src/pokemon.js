import React, {useState, useEffect} from 'react'
import axios from "axios"
const Pokemon =()=> {
    const [data, setData]= useState();
    const [num, setNum] = useState("1");
    const [person, setPerson]= useState(null);
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    useEffect(() => {
    //    alert("Hi...");
        async function getData(){
            // const res =await axios.get(`https://jsonplaceholder.typicode.com/comments`)
            // console.log(res.data);
            // setData(res.data[0].name);
            // const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            // console.log(res.data.name);
            // setName(res.data.name);
            // setMoves(res.data.moves.length);
            // const res =await axios.get(`https://api.unsplash.com/photos`)
            // console.log(res.data)
            const response=await fetch("https://api.randomuser.me/");
            const data=await response.json();
            console.log(data.results);
            setPerson(data.results);


        }
       getData();
    },[])
    return (
       <>
       <h1>Data From Random User API through fetch:{person && <div>{person.email}</div>}</h1>
       <h1>Your Data: <spna>{data}</spna></h1>
       <h1>You Choose <span style={{color:"red"}}>{num}</span></h1>
       <h1>My name is <span style={{color:"red"}}>{name} </span> and </h1>
       <h1>I have <span style={{color:"red"}}> {moves} Moves </span>.</h1>
       <select value={num} onChange={(event)=>{
            setNum(event.target.value)
       }}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
       </select>
       </>
    )
}

export default Pokemon
