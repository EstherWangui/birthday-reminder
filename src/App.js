import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import data from './data';
import List from './List';
function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(formData.username && formData.password){
      setIsLoggedIn(true);
      history.push("/");
    }


    // after logging the user in, redirect to the home page!
  }
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
      <button onClick={() => setPeople([])}>clear all</button>
        <h2 style={{color: "blueviolet"}}>{people.length} Birthdays Today</h2>
        <List people={people}
              
         />
      </section>
      <article>
      <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
      </article>
    </main>
  );
}
}
export default App;