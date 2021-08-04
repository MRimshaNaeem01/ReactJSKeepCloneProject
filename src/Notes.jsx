import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/Delete';
import CreateNote from './CreateNote';
const Notes = (props) => {

    const deleteNote=()=>{
        props.deleteItems(props.id);
      }

    return (
        <>
            <div className="note">
                
                <h2 placeholder="title">{props.title}</h2>
                <br />
                <p placeholder="mynote">{props.content}</p>
                <button className="btn" onClick={deleteNote}>
                    <DeleteOutlineIcon className="deleteIcon" />
                </button>
            </div>
        </>
    )
}
export default Notes;