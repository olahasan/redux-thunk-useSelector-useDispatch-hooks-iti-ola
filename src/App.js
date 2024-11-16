import './App.css';

import { useDispatch, useSelector } from "react-redux";
import actionOne from './Store/actions/actionOne';
import actionTwo from './Store/actions/actionTwo';
import actionThree from './Store/actions/actionThree';
import actionFour from './Store/actions/actionFour';
import { useEffect, useState } from 'react';
import getUsersList from './Store/actions/userActionThunk';
import UserCard from './Components/UserCard';

function App() {

  // const [readusers , setreadusers] = useState([
  //   {name: 'John', age: 20, id: 1},
  //   {name: 'John', age: 20, id: 1},
  //   {name: 'John', age: 20, id: 1}
  // ]);
  
  const readValue = useSelector((state) => state.one);
  const readValueMulti = useSelector((state) => state.two);
  const readusers = useSelector((state) => state.users);
  
  const dispatch = useDispatch();
  const handleAddClick = () => {
    dispatch(actionOne(readValue))
  }
  const handleMinusClick = () => {
    dispatch(actionTwo(readValue))
  }
  const handleMultiClick =() => {
    dispatch(actionThree(readValueMulti))
  }
  const handleDivisionClick =() => {
    dispatch(actionFour(readValueMulti))
  }


  useEffect(()=>{
    dispatch(getUsersList())
  },[])

  return (
    <div className="App">

     <p className={readValue > 10 ? "red" : "green"}> add/minus//  {readValue}</p>
     <button onClick={handleMinusClick}>-</button>
     <button onClick={handleAddClick}>+</button>

     <p className={readValueMulti > 7.5 ? "yellow" : "blue"}>multi/division//  {readValueMulti}</p>
     <button onClick={handleMultiClick}>*</button>
     <button onClick={handleDivisionClick}>%</button>
     

      <div className='container'>
        <h1>USERS</h1>
        <div className='row'>
          {readusers.map((e,index)=>{
              return(
                <div className='col md-4 m-4 border border-danger' key={index}>
                  <UserCard userData={e} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
