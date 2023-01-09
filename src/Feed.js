import React, { useEffect, useState } from 'react'
import "./feed.css"
import CreateIcon from '@mui/icons-material/Create';
import Inputoption from './InputOption';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from "./Post";
import { db,firebase } from './firebase';

function Feed() {
    const [input,setInput]=useState("")
    const [post,setPost]=useState([]);

    useEffect(()=>{
      db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot=>(
        setPost(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
        })))
      ))
    },[])

    const sendPost= (e) => {
        e.preventDefault(); 
        db.collection('posts').add({
          name:"Vinay Omkar",
          description:"Web Developer",
          message: input,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        }) 

        setInput('')
    }

  return (
    <div className='feed'>
        <div className="feed_inputcontainer">
            <div className="feed_input">
                <CreateIcon/>
                <form >
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder='Start a post' />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputOption">
              <Inputoption title='Photo' Icon={InsertPhotoIcon} color="#70B5F9"/>
              <Inputoption title='Video' Icon={VideoFileIcon} color="#70B5F9"/>
              <Inputoption title='Event' Icon={EventIcon} color="#70B5F9"/>
              <Inputoption title='Article' Icon={ArticleIcon} color="#70B5F9"/>
            </div>
        </div>
          {post.map(({id,data:{name,description,message}})=>(
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            />
            ))}

          {/* <Post name='Vinay Omkar' description="Front-end Developer" message='GOOD DAY!!!'/> */}
    </div>
  )
}

export default Feed