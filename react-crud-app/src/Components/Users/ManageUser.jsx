import React, { useState } from 'react'


export default function ManageUser() {
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [bio,setBio]=useState("");

  const onchangeHandler = (e)=>{
    const val = e.target.value;
    switch(e.target.name){
      case "email":
        setEmail(val);
        break;
        case "name":
          setName(val);
          break;
          case "bio":
            setBio(val);
            break;
      default:
        alert("Error");
    }
  }

  const onSubmitHandler = () =>{
    const userObj = {email, name, bio};
    alert(JSON.stringify(userObj));
    clearform();
  }
const clearform = ()=>{
  setName("");
  setBio("");
  setEmail("");
}

  return (
    <div className='col-md-5'>
      <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
        <h3 className='text-center'>Add User</h3>
        <div className='card-body'></div>
        <div className='form-group'></div>
        <label htmlFor="email" className='form-label pt-2'>Email Address</label>
        <input type="email" 
          autoComplete='off'
          name='email'
          value={email}
          onChange={onchangeHandler}
          className='form-control'
          id='emaail'
          placeholder='name@example.com'
        />
      
        <div className='form-group'>
        <label htmlFor="email" className='form-label pt-2'>Name</label>
        <input type="text" 
          autoComplete='off'
          name='name'
          value={name}
          onChange={onchangeHandler}

          className='form-control'
          id='name'
          placeholder='name'
          />
      </div> 
      <div className='form-group'>
        <label htmlFor="exampleFormControlTextarea1" className='form-label pt-2'>BIO</label>
        <textarea type="text" 
          autoComplete='off'
          name='bio'
          value={bio}
          onChange={onchangeHandler}

          rows='3'
          className='form-control'
          id='exampleFormControlTextarea1'
          placeholder='Tell us about yourself'
          />
      </div> 
      <button onClick={onSubmitHandler} type="submit" class="btn btn-primary">Add User</button>

          </div> 
    </div>
  )
}
