
import './App.css';
import { Suspense, useContext } from 'react';
import { store } from './Store/store';


function App() {
     

     let obj=useContext(store)
  return (

    <div className="App">
        
          <button onClick={obj.handleGetUser}>Get User</button>
     
      <div>
        {
          obj.data.map((item)=>(
           <li>{item.firstName+" "+item.middleName+" "+item.lastName}</li>
          ))
        }
      </div>

    </div>
  );
}

export default App;
