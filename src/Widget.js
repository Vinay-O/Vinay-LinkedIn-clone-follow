import React from 'react'
import "./widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widget() {

    const newsArticle=(heading,subtitle)=>(
        <div className="widget_article">
        <div className="widget_articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widget_articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widget_header">
            <h2>NEWS</h2>
            <InfoIcon/>
        </div>
        {newsArticle("How can freshers get job ready?"," 4000readers")}
        {newsArticle("China: 250 million covid cases in just 10days" , "4510readers")}
        {newsArticle("MaMa Earth IPO: company valuation and profit doesn't make sense", "3520readers")}
        {newsArticle("Explained: Why attack on Brazil's seat of power is like that on US Capitol's", "5500readers")}
        {newsArticle("Magnitude 7.7 earthquake strikes Indonesia -EMSC", "1270readers")}
        {newsArticle("I have not decided to give up T20 format: Rohit Sharma", "8490readers")}
    </div>


  )
}

export default Widget