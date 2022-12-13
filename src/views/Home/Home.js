import React, { useState, UseEffect } from 'react'
import './Home.css';

import Note from '../../components/Note/Note';
import swal from 'sweetalert';


function Home() {
  const [notes, setNotes] = useState([
    {
      title: "Note ",
      content: "You can add more notes to this list."
    },
    

  ])

  const [title,setTitle]= useState("")
  const [content,setContent]= useState("")


  function addNote(){
    const newNote = {
      "title":title,
      "content":content
    }

    // const temp = notes;/Method 1
    // temp.push(newNote)
    // setNotes(temp);

    if(title =="" || content ===""){
      swal({
        title: "Error!",
        text: "Please fill all the fields!",
        icon: "error",
      })
      return;
    }
     
    //Method 2
    setNotes([...notes,newNote])
    
    swal({
      title: "Good Job!",
      text: "Your note has been successfully added to list.!",
      icon: "success",
    });
    
    setTitle("")
    setContent("")


  }


  return (
    <div>
      <div className='app-title-container'>
        <h1 className='app-title'>My Notes</h1>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='notes-container'>
            {
              notes.map((note, index) => {
                return (
                  <Note title={note.title} content={note.content} />
                )
              })
            }
          </div>

        </div>

        <div className='col-md-6'>
          <div className='note-editor-container'>
            <h3 className='text-center'>Add Note</h3>
            <form>
              <div>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className='form-control mt-4 ' placeholder='Note Title' />
                <input type="text"  value={content} onChange={(e)=>{setContent(e.target.value)}}className='form-control mt-4 ' placeholder='Note description' />
              </div>
              <div className='add-note-button-container'>
              <button  type="button"className='btn btn-info mt-4' onClick={addNote}>Add Note</button>
              </div>
            </form>

          </div>

        </div>
      </div>


    </div>

  );
}

export default Home;
