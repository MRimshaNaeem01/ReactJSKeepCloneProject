import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props) => {
    const [note,setNote]=useState(
        {
            title:'',
            content:'',
    
        }
    );
    
const inputEvent=(event)=>{
    // const value=event.target.value;
    // const name=event.target.name;obj destructuring below:

const{name,value}=event.target;
  setNote((prevData)=>{
     return{
         ...prevData,
         [name]:value, 
     };
  });
};
const addEvent=()=>{
    if(note==={
        title:'',
        content:'',
    }) 
    alert('fill the note')
else{
    props.passNote(note);
    setNote(
        {
            title:'',
            content:'',
    
        }
    )
}
}
    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off" />
                    <textarea rows=" " name="content" value={note.content} onChange={inputEvent} columns=" " placeholder="Write a note"></textarea>
                  
                    <Button className="btn" onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>                   
                </form>
            </div>

        </>
    )
}
export default CreateNote;