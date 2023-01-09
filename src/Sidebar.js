import { Avatar } from '@mui/material'
import React from 'react'
import "./sidebar.css"

function Sidebar() {
const recentItem=(topic)=>(
    <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
    </div>
)

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3QlMjBjb2xvdXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            <Avatar className='sidebar_avatar'/>
            <h2>Vinay Omkar</h2>
            <h4>vinayomkar1998@gmail.com</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statnumber">556</p>
            </div>
            <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="sidebar_statnumber">544</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("react.js")}
            {recentItem("javascript")}
            {recentItem("java")}
            {recentItem("developer")}
            {recentItem("Next.js")}
        </div>
    </div>
  )
}

export default Sidebar