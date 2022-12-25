import './App.css';
import records from './records.json';

function App(){
  

  return(
    <div className="App">
    <h3>Fetch</h3>
    {records.map(
      record =>(
        <li><b>Name:</b> {record.name}, <b>Email:</b>  {record.email}</li>  
      )
    )
    }
    </div>
    );
    
}
export default App;