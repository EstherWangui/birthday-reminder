import React, { useState, useEffect } from 'react';
import data from './data';
import "./App.css"
import List from './List';
import Name from './Name';
import Nameform from './Nameform';


function App() {
  const[myname, setmyname] = useState([])
  const[nameNo, setnameNo] = useState(0)
  const[nameAdded, setnameAdded] = useState(true)
  const [people, setPeople] = useState(data);

  console.log(myname)

  useEffect(()=>{
    fetch("http://localhost:3000/people")
    .then((res)=>res.json())
    .then((data)=>{
       console.log(data)
      setmyname((myname)=>data)
      setnameNo((nameNo)=>data.length)
    })
  },[nameAdded])
  console.log(nameNo)


  let namelist = myname.map((elem, ind)=>{
    return(
      <Name key={ind} name={elem.name} years={elem.years} Dateofbirth={elem.Dateofbirth} />
    )
  })

  function handleNewName(){
    console.log("Parent function is triggered")
    setnameAdded((nameAdded)=>!nameAdded)
  }

  return (
    <div className='section'>    
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
    <main>
        <Nameform formSubmitted={handleNewName} 
        namelength={nameNo}/>
        {namelist}
      </main>
    </div>
     );
}

export default App;