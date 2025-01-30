'use client';
import React, { useRef, useState } from 'react';
import classes from './imagePicker.module.css';
import Image from 'next/image';


export default function ImagePicker({label,name}) {
    const inputRef =useRef();
   const[pickedImage,setPickedImage] =useState();

   function handleImageChange(event){
    const file=event.target.files[0];
    if(!file){
        setPickedImage(null);
        return;
    }
    const filereader= new FileReader();

    filereader.onload=()=>{
        setPickedImage(filereader.result)
    };

    filereader.readAsDataURL(file);
   
   }
    function handlePickClick(){
      inputRef.current.click();
    }
  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        
        <div className={classes.controls}>
        <div className={classes.preview}>
                {pickedImage?(<Image src={pickedImage}  fill alt="Image selected by user"/>):(<p>No Image Picked yet</p>)}
        </div>
                <input className={classes.input} accept='image/png, image/jpeg' ref={inputRef} type='file' id={name} name={name} onChange={handleImageChange} />
                <button className={classes.button} type='button' onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>
  )
}
