//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬SLOT MACHINE⏬⏬⏬⏬⏬⏬⏬⏬
// import logo from './logo.svg';
// import './App.css';
// import './index.css';
// const SlotM=(props)=>{

// let x=props.x;
// let y=props.y;
// let z=props.z;
// if(x===y && y===z) {
//   return(
//   <>
//     <div><h1>{x} {y} {z}</h1></div>
//     <h1>This is Matching</h1>
//     <hr />
//  </>
//   );
// }
// else{
//   return(
//   <>
//     <div><h1>{x} {y} {z}</h1></div>
//     <h1>This is Not Matching</h1>
//     <hr />
//  </>
//   );
// }
// };
// const App=()=> {
//   return (
//     <>
//     <div className="heading_slot">
//     <h1> 🎰 welcome to <span style={{color: "red" , fontWeight:"bolder"}}>slot machine game 🎰</span> </h1>
//     </div>

//     <div className="Emoji_game">
//       <div className="imggg">
//     <SlotM x= "😘"  y= "😘" z= "😘" />
//     <SlotM x= "😭"  y= "😘" z= "😠" />
//     <SlotM x= "😭"  y= "😭" z= "😭" />
//     <SlotM x= "😠"  y= "😏" z= "😏" />
//     </div>
//     </div>
// </> 
//   );
// };

// export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬counter ⏬⏬⏬⏬⏬⏬⏬⏬
// import React, { useState } from 'react';
// import './Hook.css';




// const App=()=> {
//   const state=useState();
//   const [ count, setCount ]=useState(50);

// const IncNum=()=>{

//     // setCount(count + 44);
//     setCount(count + -1);

// }
//   return (
//     <>
//     <div className="Heading_hook">
//    <h1>{count}</h1>
//    <button className="buttonn" onClick={IncNum}>Click Me</button>
//     </div>
// </> 
//   );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬current timer ⏬⏬⏬⏬⏬⏬⏬⏬
// import React, { useState } from 'react';
// import './Hook.css';


// const App=()=> {
//   const state=useState();
//   let newTime = new Date().toLocaleTimeString();
//   console.log(newTime)
//   const [ n, setCount ]=useState(newTime);

// const CurrentTime=()=>{

//     // setCount(count + 44);
//     let newCTime = new Date().toLocaleTimeString();

//     setCount(newCTime);
// }
//   return (
//     <>
//     <div className="Heading_hook">
//    <h1 className="Heading_time" >{n}</h1>
//    <button className="buttonn" onClick={CurrentTime}>Get Time</button>
//     </div>
// </> 
//   );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬Stop watch⏬⏬⏬⏬⏬⏬⏬⏬
// import React, { useState } from 'react';
// import './Hook.css';


// const App=()=> {
//   const state=useState();
//   let n = new Date().toLocaleTimeString();

//   const [ time, setTime ]=useState(n);

// const UpdataTime=()=>{
//   let newTime = new Date().toLocaleTimeString();
// setTime(newTime)
// };
// setInterval(UpdataTime,1000)
//   return (
//     <>
//     <div className="Heading_hook">
//    <h1 className="Heading_time" >{time}</h1>
//     </div>
// </> 
//   );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬Creating Acordian ⏬⏬⏬⏬⏬⏬⏬⏬
// import React, { useState } from 'react';
// import Accordian from './Component/accordian/Accordian';
// import {MyAccordian} from './Component/accordian/api'
// const Accordian=(props)=>
// {
//   return(
//     <>
//     <div>
//       <h1>{props.id}</h1>
//       <h1>{props.question}</h1>

//     </div>
//     </>
//   )
// }
// const App=()=>
// (
//   Accordian.map((val)=>{
//     return (
//       <>
//       <Accordian
//       key={val.id}
//       question={val.question} />
//       <Accordian
//       key={val.id}
//       question={val.question} />
//        <Accordian
//       key={val.id}
//       question={val.question} />
//        <Accordian
//       key={val.id}
//       question={val.question} />
//    </> 
//     );
//     })    
// );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬Quiz App Accordian ⏬⏬⏬⏬⏬⏬⏬⏬
//  import React from 'react';
//  import "./index.css";
//  import Accordian from './Component/accordian/Accordian';
// // import MyAccordian from './MyAccordian'
//  const App=()=>
//  {
//    return(
//      <>
//              <div className="quiz_head">react.js interview questions that are mostly asked</div>
//          <Accordian/>
//          </>
//          )

//  }
//  export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬Bg color chnger using hook ⏬⏬⏬⏬⏬⏬⏬⏬

// import React, { useState } from 'react';
// import './index.css';
// const App = ()=>{

// const color='pink'
//   const [bg,setBg]=useState(color);

//   const namme='clik me fast'
//   const [name,setName]=useState(namme);

//   const font='2em'
//   const [sz,setFont]=useState(font);


//   const bgColor=()=>
//  {
//     let newbg='orange'
//     setBg(newbg);
//     let newName='ouch!! 🧑‍🦽'
//     setName(newName);
//     let newfnn='3em'
//     setFont(newfnn);

//  }
//  const bgBaack=()=>
//  {
//   setBg(color);
//   let newName='Ayyo!! 👳'
//   setName(newName);
//   let newfnn='4em'
//     setFont(newfnn);
//  }


//   return(
// <>
// <div className="dividd" style={{fontSize:sz, backgroundColor:bg}}>
//   <button className="btn" onMouseEnter={bgBaack} onMouseLeave={bgColor} onDoubleClick={bgBaack} onClick={bgColor}>{name}</button>
//   </div>
// </>
//   );
// }
// export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬FORMS in React.js ⏬⏬⏬⏬⏬⏬⏬⏬

// import React, { useState } from 'react';
// import './index.css';
// // @v?t?C@z!20Q
// const App=()=>{

// const [print,setPrint]=useState('');
// const [fullName,setfullName]=useState('');
//   const inputEvent=(event)=>{ 
//    console.log(event.target.value); 
//    setPrint(event.target.value)
//   } 
//   const onsubmit=()=>{
//      setfullName(print)
//   }
//   return (
//     <>
//     <h1 className="h11">HELLO {fullName}</h1>
//     <input onChange={inputEvent} type="text" defaultValue="" className="inputt"></input><br></br>
//     <button onClick={onsubmit} className="btnn">Click me</button>
//     </>
//   );
// }  
// export default App;
// export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬FORMS in React.js ⏬⏬⏬⏬⏬⏬⏬⏬

// import React, { useState } from 'react';
// import './index.css';
// // @v?t?C@z!20Q
// const App=()=>{

// const [print,setPrint]=useState('');
// const [fullName,setfullName]=useState('');
// const [lastname,setLastName]=useState('');

//   const inputEvent=(event)=>{ 

//    console.log(event.target.value); 
//    setPrint(event.target.value)
//   } 
//   const inputEventtwo=(event)=>{ 

//     console.log(event.target.value); 
//     setLastName(event.target.value)
//    } 

//   const onSubmit=(event)=>{
//     event.preventDefault();
//      setfullName(print)
//   }
//   return (
//     <><form onSubmit={onSubmit}>
//     <h1 className="h11">HELLO {fullName} {lastname}</h1>

//     <input onChange={inputEvent}
//     type="text"

//     value={print}/* defaultValue="" */ 
//     className="inputt"></input><br></br>
//     <br />

//     <input onChange={inputEventtwo}
//     type="text"
//     value={lastname}/* defaultValue="" */ 
//     className="inputt"></input><br></br>
//     <br />

//     <button type="submit" className="btnn">Click me</button>
//     </form></>
//   );
// }  
// export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬EVENT HANDLING⏬⏬⏬⏬⏬⏬⏬⏬
// import React, { useState } from 'react';
// import reactDom from 'react-dom';
// import "./index1.css"
// const App=()=>{
//   const purple="green";
//     const [bg,setBg]=useState(purple);


//     const[name,setName]=useState("Click me")

//   const bgChange=()=>{
//     let newBg="yellow";
//     setBg(newBg);
//     setName("Ouch!! 💋 ")  
//   };

//   const bgChangee=()=>{
//     let newBg="pink ";
//     setBg(newBg);
//     setName("Ouch!! 😄 ")    
//   };
//   return(
//     <>
//     <div style={{backgroundColor: bg}}>
//     <button onClick={bgChange} onDoubleClick={bgChangee}>{name}</button>
//     </div>
//     </>
//   );
// };
// export default App;




//////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬FOARMS IN REACT JS⏬⏬⏬⏬⏬⏬⏬⏬
// import React, { useState } from 'react';
// import "./index1.css";
// const App=()=>{

//   const [change,helo]=useState();
//   const [fullName,Helo]=useState();

//   const submitData=()=>{
//    Helo(change)
//   }
//   const inputEvent=(event)=>
//   {
//       console.log(event.target.value)
//       helo(event.target.value)
//   }
//  return(
//   <>
//   <div><h1>HELLO {fullName}</h1>
//   <input type="text" placeholder="enter your name"
//   onChange={inputEvent} value={change}
//   />

//   <br/>
//   <button onClick={submitData}>Click me</button>
//   </div>
//   </>
//  );
// }
// export default App;


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬FOARMS IN REACT JS having two fields⏬⏬⏬⏬⏬⏬⏬⏬
// import React, { useState } from 'react';
// import "./index1.css";
// const App=()=>{

//   const [change1,helo]=useState();
//   const [fullName,fname]=useState();

//   const [change2,scnd]=useState();
//   const [lastName,Lname]=useState();

//   const [change3,thrd]=useState();
//   const [email,emaill]=useState();

//   const submitData=(event)=>{
//     event.preventDefault();
//     fname(change1)
//     Lname(change2)
//     emaill(change3)
//   }
//   const inputEvent=(event)=>
//   {
//       console.log(event.target.value)
//       helo(event.target.value)
//   }
//   const inputEventtwo=(event)=>
//   {
//       console.log(event.target.value)
//       scnd(event.target.value)
//   }
//   const inputEventthree=(event)=>
//   {
//       console.log(event.target.value)
//       thrd(event.target.value)
//   }
//  return(
//   <>
//   <div>
//     <form onSubmit={submitData}>
//     <h1>HELLO {fullName} {lastName} {email}</h1>
//   <input type="text" placeholder="enter your first name"
//   onChange={inputEvent} value={change1}
//   /><br/>

//    <input type="text" placeholder="enter your last name"
//   onChange={inputEventtwo} value={change2}
//   /><br/>

//   <input type="email" placeholder="enter your last name"
//   onChange={inputEventthree} value={change3}
//   />

//   <br/>
//   <button type="submit" onClick={submitData}>Click me</button>
//   </form>
//   </div>
//   </>
//  );
// }
// export default App;


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬FOARMS IN REACT JS Test practice⏬⏬⏬⏬⏬⏬⏬⏬

// import React, { useState } from 'react';
// import './index1.css';
// const App=()=>{


//   const [fullName ,FullName]=useState();
//   const [inp , fulllName]=useState();

//   const [lastName ,LastName]=useState();
//   const [inpp ,lasttName]=useState();

//   const [email ,Email]=useState();
//   const [inppp ,emaill]=useState();

//   const inputEvent1=(event)=>{
//     //field1(event.target.value)
//     fulllName(event.target.value)
//   }
//   const inputEvent2=(event)=>{
//    // field2(event.target.value)
//     lasttName(event.target.value)
//   }
//   const inputEvent3=(event)=>{
//    // field3(event.target.value)
//     emaill(event.target.value)
//   }
//   const submitData=(event)=>{
//     event.preventDefault();
//     FullName(inp);
//     LastName(inpp);
//         Email(inppp);
//   }

//   return(
//     <>
//     <div>
//     <form onSubmit={submitData}>
//     <h1>HELLO {fullName} {lastName} {email}</h1>
//       <input type="text" placeholder="enter your name" value={inp} onChange={inputEvent1}></input>
//       <input type="password" placeholder="enter your password" value={inpp} onChange={inputEvent2}></input>
//       <input type="email" placeholder="enter your email" value={inppp} onChange={inputEvent3}></input>
//    <button type="submit" >Click me</button>
//    </form>
//     </div>
//     </>
//   );
// }
// export default App;


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬FOARMS IN REACT JS having multipe fiels⏬⏬⏬⏬⏬⏬⏬⏬

// import React, { useState } from 'react';
// import './index1.css';
// const App=()=>{


//   const [fullName ,setFullName]=useState({
//     fname: '',
//     lname: '',
//     email: '',
//     number:'',
//     password:'',
//   });
//   const inputEvent=(event)=>{
//    const name =(event.target.name)
//    const value=(event.target.value)
//  setFullName((preValue)=>{
//    if(name==='fname')
//    {
//      return{
// fname:value,
// lname:preValue.lname,
// email:preValue.email,
// number:preValue.number,
// password:preValue.password,
//    }}
//    else if(name==='lname')
//    {
//     return{
//     fname:preValue.fname,
//     lname:value,
//     email:preValue.email,
//     number:preValue.number,
//     password:preValue.password,
//    }

//   }
//    else if(name==='password')
//    {
//     return{
//     fname:preValue.fname,
//     lname:preValue.lname,
//     email:preValue.email,
//     number:preValue.number,
//     password:value,
//    }
//   }
//    else if(name==='number')
//   {
//     return{
//       fname:preValue.fname,
//       lname:preValue.lname,
//       email:preValue.email,
//       number:value,
//       password:preValue.password,
//     }
//   }
//    else{
//     return{
//     fname:preValue.fname,
//     lname:preValue.lname,
//     email:value,
//     number:preValue.number,
//     password:preValue.password,
//     }
//    }
//  }
//  );
//   }
//   const submitData=(event)=>{
//     event.preventDefault();
//     alert('form submitted') 
//   }
//   return(
//     <>
//     <div>


//     <form onSubmit={submitData}>
//     <h1>HELLO {fullName.fname} {fullName.lname} {fullName.password}</h1>
//     <p>{fullName.email}</p>
//     <p>{fullName.number}</p>
//       <input type="text" placeholder="enter your first name" value={fullName.fname} name ="fname" onChange={inputEvent}></input><br/>
//       <input type="text" placeholder="enter your last name" name ="lname" value={fullName.lname} onChange={inputEvent}></input><br/>
//       <input type="password" placeholder="enter your password" name ="password" value={fullName.password} onChange={inputEvent}></input><br/>
//       <input type="email" autocomplete='off' placeholder="enter your email" name ="email" value={fullName.email} onChange={inputEvent}></input><br/>
//       <input type="number" placeholder="enter your phone num" name ="number" value={fullName.number} onChange={inputEvent}></input><br/>

//    <button type="submit" >Click me</button>
//    </form>
//     </div>
//     </>
//   );
// }
// export default App;









//////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬FOARMS IN REACT JS having multipe fiels⏬⏬⏬⏬⏬⏬⏬⏬

// import React, { useState } from 'react';
// import './index1.css';
// const App=()=>{


//   const [fullName ,setFullName]=useState({
//     fname: '',
//     lname: '',
//     email: '',
//     number:'',
//     password:'',
//   });
//   const inputEvent=(event)=>{
//    const name =(event.target.name)
//    const value=(event.target.value)
//  setFullName((preValue)=>{

//      return{
//     ...preValue,
//     [name]:value,


//      }})
//     }
//   const submitData=(event)=>{
//     event.preventDefault();
//     alert('form submitted') 
//   }
//   return(
//     <>
//     <div>


//     <form onSubmit={submitData}>
//     <h1>HELLO {fullName.fname} {fullName.lname} {fullName.password}</h1>
//     <p>{fullName.email}</p>
//     <p>{fullName.number}</p>
//       <input type="text" placeholder="enter your first name" value={fullName.fname} name ="fname" onChange={inputEvent}></input><br/>
//       <input type="text" placeholder="enter your last name" name ="lname" value={fullName.lname} onChange={inputEvent}></input><br/>
//       <input type="password" placeholder="enter your password" name ="password" value={fullName.password} onChange={inputEvent}></input><br/>
//       <input type="email" autocomplete='off' placeholder="enter your email" name ="email" value={fullName.email} onChange={inputEvent}></input><br/>
//       <input type="number" placeholder="enter your phone num" name ="number" value={fullName.number} onChange={inputEvent}></input><br/>

//    <button type="submit" >Click me</button>
//    </form>
//     </div>
//     </>
//   );
// }
// export default App;








//////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬TODO APP⏬⏬⏬⏬⏬⏬⏬⏬

// import React, { useState } from 'react';
// import './indexToDo.css';
// import ToDoList from './ToDoList';
// const App =()=>{
//   const [text, setTextbox]=useState('');
//   const [text1, setTextbox1]=useState([]);

//   const inputEvent=(event)=>{
// console.log(event.target.value)
// setTextbox(event.target.value)
//   }
//   const addToList=()=>{

//     setTextbox1((oldItems)=>{
//       return[...oldItems,text]

//     })
//     setTextbox('');
//   }
//   const deleteItems=(id)=>{
//     setTextbox1((oldItems)=>
//     {
//       return oldItems.filter((arrElem,index)=>
//       {
// return index !==id;
//       })
//     })
//   }
//   return(
//     <>
//   <div className="main_div">
//         <div className="center_div">
//   <br/>
//   <h1>ToDo List</h1>
//   <br/>
//   <input type="text" placeholder="Add Items" value={text} onChange={inputEvent}></input>
//   <button onClick={addToList}>➕</button>
//   <ol>
//         {
//         text1.map( (itemVal,index) => {
//           return <ToDoList textt={itemVal}
//           key={index} id={index} onSelect={deleteItems}
//           />
//         })
//         }
//   </ol>
//       </div>
//       </div>
//       </>
//   );
// }
// export default App;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ⏬⏬⏬⏬⏬⏬⏬⏬INCREMENT DECREMENT IN REACT JS ⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬

// import React, { useState } from 'react';
// import "./index2.css";
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
// import Clock from 'react-digital-clock';


// const ToDoListt = () => {
//   const [num,setNum]=useState(0);

// const incrBtn=()=>{
// setNum(num+1)

// }
// const decrBtn=()=>{
//   if(num>0)
//   {
// setNum(num-1)
// }
// else{
// setNum(0);
// alert('less than 0 not possible')
// } 
// }


//   return (
//     <>
//       <div className="main_div">
//         <Clock />
//         <div className="center_div">
//           <h2>INCREMENT AND DECREMENT<br /></h2>
//           <h1>{num}</h1>
//           <div className="btn">
//           <Tooltip title="Add">
//             <Button onClick={incrBtn} className="btn_green"><AddIcon/></Button></Tooltip>
//             <Tooltip title="Delete">
//             <Button onClick={decrBtn} className="btn_red"><DeleteIcon/></Button></Tooltip>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default ToDoListt;



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ⏬⏬⏬⏬⏬⏬⏬⏬React Project using Material UI Free Code: Create ToDo List⏬⏬⏬⏬⏬⏬⏬
//⏬⏬⏬⏬⏬BOOTSTAP⏬⏬⏬⏬⏬
// import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//  const App=()=>{
//    return(
//      <>
//        <React.Fragment>

// <h1 className="text-uppercase text-center mt-5 text-danger">hello</h1>
//      </React.Fragment>

//     </>
//    )
//  }
//  export default  App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ⏬⏬⏬⏬⏬⏬⏬⏬CREATE ACCORDIAN⏬⏬⏬⏬⏬⏬⏬
// import { Accordion } from '@material-ui/core';
// import React from 'react';
// import Accordians from './Accordian2';
// import './index3.css'
// const App = () => {

//   return (

//     <>
//      <Accordians />
//     </>
//   )
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//⏬⏬⏬⏬⏬⏬⏬⏬CREATING WEB PAGE USING BOOTSTRAP AND REACT JS⏬⏬⏬⏬⏬⏬⏬⏬
// import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// // import './index2.css'
// const App = () => {
//   return (
//     <React.Fragment>
//       <h1 className="text-uppercase text-center mt-5 text-danger">WELCOME TO MY CHANNEL</h1>

//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <div className="card" >
//               <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." height="200px" />
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card" >
//               <img src="https://picsum.photos/202/300" className="card-img-top" alt="..." height="200px" />
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card" >
//               <img src="https://picsum.photos/206/300" className="card-img-top" alt="..." height="200px" />
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card" >
//               <img src="https://picsum.photos/211/300" className="card-img-top" alt="..." height="200px" />
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </React.Fragment>
//   )
// }
// export default App;










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ⏬⏬⏬⏬⏬⏬⏬⏬GOOGLE KEEP APP CLONE⏬⏬⏬⏬⏬⏬⏬⏬
import React, { useState } from 'react';
import './index4.css'
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Notes'

const App = () => {

  
  

  const [addItems, setAddItems] = useState([]);
  const addNote = (note) => {
    setAddItems((prevData) => {
      return [...prevData, note]
    })
  }
  const onDelete=(id)=>{
    setAddItems((olddata)=>{
      return(
      olddata.filter((currdata,indexx)=>{
        return indexx!==id;
      }))
    })
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {/* <Notes /> */}
      {addItems.map((val, index) => {
        return (
          <Note key={index} id={index} title={val.title} content={val.content} deleteItems={onDelete} />
        );}
     

      )}
      <br />
      <Footer />
    </>
  );
}

export default App;