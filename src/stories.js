
import './App.css';
import React, { useRef, useState} from 'react'

// import shopping from './images/shopping.png';


// import profile from './images/.png';
 
 



 class Stories extends React.Component {
   
 
  

render(props){
     
 const data = this.props.users
 
   if(data.imgurl === "" | data.imgurl === null){
    return  <video className='slider' autoPlay controls  src={data.videourl} ></video>
  }else if (data.imgurl !== ''  | data.imgurl !== null){ return   <img className='slider' src={data.imgurl} alt="" />

}
 
}}



export default Stories ;