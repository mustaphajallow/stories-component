
import './App.css';
import React, { useRef } from 'react'
import like from './images/he.png';
import share from './images/ch.png';
import comment from './images/shopping.png';
// import shopping from './images/shopping.png';
import send from './images/send.png';
import users from "./users-data"
// import profile from './images/.png';
 import Stories from './stories';
 



export class  App extends React.Component {
   
   

render(){
      // if(this.users.videourl.length > 1){

      //   return <video src=""></video>
      // }else{
      //   return <img src="" alt="" />
      // }
    

  return (
    <div className="App">
    <div className="stories-component">

      
     {users.map(( users,i) =>{
         
       return(
             
       
        <div className="img-container" key={i} >
           
         
           <Stories users={users}></Stories>
          <img src={users.videourl} alt="" className="slider" />  
          <div className="social-media">
            <a href="#" className="icon">
              <img src={like} alt="" className='img'/>
              <p className="counts">{users.likes}</p>
            </a>
            
            <a href="#" className="icon">
              <img src={comment} alt="" className='img'/>
              <p className="counts">{users.purchases}</p>
            </a>
              
            <a href="#" className="icon">
              <img src={share} alt="" className='img'/>
              <p className="counts">{users.message}</p>
            </a>

            <a href="#" className="icon">
            <img src={send} alt="" className='img'/>
            <p className="counts">{users.share}</p>
          </a>

          </div>
          <div className="info-container">
             <div className="profile">
               <img src={users.profileimg} alt="" className="img-profile" />
               <p className="name-follow">{users.name}</p>
             </div>
             <p className='link-more'>{users.link}</p>
          </div>
        </div>  



     
       )
     })}

        </div>  
    </div>
  );
}}

export default App;
       