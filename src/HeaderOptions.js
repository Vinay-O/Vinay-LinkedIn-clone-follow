import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"

function HeaderOptions({avatar,Icon,title,onClick}) {
  return (
    <div onClick={onClick} className='headerOption'>
        { Icon &&<Icon className="headerOption_Icon"/>}
        {avatar&&<Avatar className='headerOption_Icon' src={avatar}/>}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions