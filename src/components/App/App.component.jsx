import React from 'react';
import Navbar from "../Navbar/Navbar";
import CardItem from "../CardItem"
import data from "../youtube-videos-mock.json"
import '../Navbar/Navbar.css'



function App() {
  
  return (
    <div>
      <Navbar>

      </Navbar>

      <div className="cards">
        {data.items.map((data, i)=>(
          <CardItem
            sprite={data.snippet.thumbnails.default.url}
            name={data.snippet.title}

          ></CardItem>
        ))}
        
      </div>
    </div>

  );
}

export default App;
