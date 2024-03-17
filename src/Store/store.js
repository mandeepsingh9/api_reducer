import { createContext } from "react";
import { useReducer } from 'react';

export let store=createContext({
    data:[],
    handleGetUser:()=>{}
})




function reducer(state,action)
{
  let newstate=state;

    if(action.type==="api")
    {
      newstate=[...action.payload.apidata.users];
      console.log(newstate);
    }
    
   return newstate;

}

const Storehandleprovider = ({children}) => {


    let [data,dispatch]=useReducer(reducer,[])



    async function handleGetUser()
    {
         let res=await fetch('https://dummyjson.com/users');
          let response= await res.json();
         console.log(response);
         dispatch({
           type:"api",
           payload:{
             apidata:response
           }
         })
    }


  return (

    <store.Provider value={{data,handleGetUser}}>
    <div>{children}</div>
    </store.Provider>
  )
}

export default Storehandleprovider
