import React from 'react';
import './ErrorModal.css';
import ReactDOM from 'react-dom';

const Backdrop=(props)=>{
 return  <div className=' backdrop' onClick={props.onConfirm}></div>
}
const Modaloverlay=(props)=>{
  return (<div className=' backdrop' onClick={props.onConfirm}>
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
  </div>)
}
function ErrorModal(props){
    console.log(props)
    return(
      <React.Fragment>

        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById("backdrop-root"))}
        {ReactDOM.createPortal(<Modaloverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById("overlay-root"))}
      </React.Fragment>
    

    );


}
export default ErrorModal;
