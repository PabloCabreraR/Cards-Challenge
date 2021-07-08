import React from 'react'
import './Card.scss'

const shortTitle = (text) =>{
  if(text.length > 62){
    return text.slice(0, 62)+"..."
  }else{
    return text
  }
}

export default function Card({post}){

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    
    const {title, featured_media, _embedded, _start_day, _start_month, _start_year} = post
    
    const formatedDate = `${_start_day} ${months[_start_month - 1]} ${_start_year}` 

    return (
        <div className="Card col-4">
            <div className="p-card">

                <div>
                  <h4 className="category">{_embedded["wp:term"][3].length === 0 ? "CLOUD AND SERVER" : (_embedded["wp:term"][3][0].name).toUpperCase()}</h4>
                  <hr className="u-sv1" />
                  <img className="p-image--shadowed" src={featured_media} alt="{title.rendered}" />
                  <h3 className="p-card__title"><a href="/">{shortTitle(title.rendered)}</a></h3>
                </div>

                <div className="bottom-text">                
                    <p className="p-card__content">By <a href="/">{_embedded.author[0].name}</a> on {formatedDate}</p>
                    <hr className="u-sv1" />
                    <p className="type">{_embedded["wp:term"][0][0].name}</p>
                </div>

            </div>
        </div>
    )
}