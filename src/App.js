// import logo from './logo.svg';
// import './App.css';
import styled from "styled-components"
import Header from './components/header/header.jsx';
import VideoCard from "./components/videocard/videocard.jsx"
//import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import js from "../src/data/yt";


const GridWrapper = styled.div`
display:grid;
gap:1rem;
grid-template-columns:repeat(auto-fit, minmax(300px, 1fr))
`


const Cards = styled.div`
display:flex;
max-width:300px;
margin: auto;
text-align:center;
padding:0.5fr;
border:1px solid black
`


const VideoList = js.items.filter(vid => (vid.id.kind === "youtube#video")).map((vid)=>(
  <Cards key={vid.id.videoId} className="cards">
    <VideoCard 
    thumbnail={vid.snippet.thumbnails.high.url} 
    title={vid.snippet.title} url={vid.id.videoId} 
    description={vid.snippet.description}
    kind={vid.id.kind}
    />
  </Cards>
));


function App() {
  return (
    <div>
        <Header/>
      <GridWrapper>
          {VideoList}
      </GridWrapper>
    </div>
  );
}

export default App;
