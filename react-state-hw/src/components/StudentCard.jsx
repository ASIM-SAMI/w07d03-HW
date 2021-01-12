import React from 'react'
import '../Student.css';
import { useState } from 'react';

export const StudentCard = (props) => {
    const data = {
      images: {
        defaultImg: 'https://cdn0.iconfinder.com/data/icons/characters-2-2-outlined/227/hulk-superhero-marvel-character-avatar-smileface-profile-512.png',
        leftClickImg: 'https://i.pinimg.com/736x/7c/ac/cb/7caccbf5c21d6a9735491c3f7d26837b.jpg',
        rightClickimg: 'https://d6ce0no7ktiq.cloudfront.net/images/stickers/485t.png',
        doubleClickImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoo5citERSP4DKv8Euz1BDWffU9Bi_HFqyYg&usqp=CAU'

      },
      massages: {
         massageLeftClick: `I am the mighty ${props.StudentName}, How dare you touch me!!?`,
         massageRightClick: `Stop. Poking. Around!!`,
         massageDoubleClick: `STOP IT!!!`
      }
  }
  
    //state 
    const [nameColor, setColor] = useState()
    const [img, setImg] = useState(data.images.defaultImg)
    const [massage, setMassage] = useState('') 

    const handleLeftClick = (e) => {
      e.stopPropagation()
      setColor('red')
      setImg(data.images.leftClickImg)
      setMassage(data.massages.massageLeftClick)
    }

    const handleRightClick = (e) => {
      e.stopPropagation()
      setColor('blue')
      setImg(data.images.rightClickimg)
      setMassage(data.massages.massageRightClick)
    }

    const handleDoubleClick = (e) => {
      e.stopPropagation()
      setColor('green')
      setImg(data.images.doubleClickImg)
      setMassage(data.massages.massageDoubleClick)
      setTimeout(()=>{
        setColor('')
        setImg(data.images.defaultImg)
        setMassage('')
       },1000);
    }

    
    
    
    return (
        <div className="card" onClick={handleLeftClick} onContextMenu={handleRightClick} onDoubleClick={handleDoubleClick}>
        <li>
        <h1 className={`${nameColor}`}> {props.StudentName}</h1>
        <img src={img} alt=""/>
        <p>{`${massage}`}</p>
        </li>
        </div>
       
    )
}
