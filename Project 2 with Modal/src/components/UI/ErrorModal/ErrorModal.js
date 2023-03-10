import React from 'react';
import './ErrorModal.css'
function ErrorModal(props){
    console.log(props)
    return(
      
    <div className=' backdrop' onClick={props.onConfirm}>
    <div className='container'>
    <div className= 'modalcontainer modal1'>
    <header className="header">
   <h2>{props.title}</h2> 
    </header>
    <div className='content'>
     <p>{props.message}</p>
    </div>
   <footer className='action'>
    <button onClick={props.onConfirm}>Okay</button>
   </footer>
    </div>
    </div>
  </div>

    );


}
export default ErrorModal;
