import {useState,useEffect} from 'react'
import {getMatches} from './api/api'
import Matches from './components/Matches';

function App() {

  const [matches,setMatches]=useState([]);
  useEffect(()=>{
    getMatches()
    .then((data)=>{
      //console.log(data);
      setMatches(data.matches);
      //console.log(data.matches)
    })
    .catch((error)=>{});
  },[]);

  var day=new Date().getDate() 
  var month=new Date().getMonth()
  var year=new Date().getFullYear()

  return (  
    <div>
      <h1>Todays' Matches</h1>
      <h2>{day+'/'+month+'/'+year}</h2> 
        {matches.map((match)=>(
          <Matches key={match.unique_id} match={match}/>
        ))}
    </div>
  );
}

export default App;
