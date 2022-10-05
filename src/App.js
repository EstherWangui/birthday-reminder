import React, { useState } from 'react';
import data from './data';
import List from './List';
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
    </main>
  );
}

export default App;