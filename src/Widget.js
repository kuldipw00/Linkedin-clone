import React from 'react'
import "./Widget.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

export const Widget = () => {

    const newsArticle=(heading,subtitle)=>(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
            <FiberManualRecordIcon/>

            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("This is linkedin UI clone","Top News - 098")}
            {newsArticle("This is linkedin UI clone","Top News - 098")}

            {newsArticle("This is linkedin UI clone","Top News - 098")}

            {newsArticle("This is linkedin UI clone","Top News - 098")}

            {newsArticle("This is linkedin UI clone","Top News - 098")}

        </div>
    )
}
