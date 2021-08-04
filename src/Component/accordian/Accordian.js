
import React, { useState } from 'react';
import  MyAccordian  from './api';
import MyAccord from './MyAccord'
import "./index.css";




const Accordian=()=>
{
    const state=useState();
    const [data , useData]=useState(MyAccordian);
    return(
      <>
      {
      data.map((n)=>{
 return( <>
 {/* const {id,question,answer}=n; */}
 <MyAccord key={n.id} {...n}/>
 {/* n.question;
 n.answer; */}
 </>);



      })}
      </>
    )
}
export default Accordian;