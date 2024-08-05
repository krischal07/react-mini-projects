import React from 'react'
import {EmployeeData} from './EmployeeData';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
const [data,setData] = useState([]);

useEffect(() =>{
  setData(EmployeeData);
},[]);

const handleEdit =(id) =>{
  alert(id);
}
const handleDelete =(id) =>{
  // alert(id);

  if(id >0){
    if(window.confirm("Are you sure yo want to delete")){

      const dt = data.filter(item => item.id !== id);
      setData(dt);

    }
  }
}

  return (
    <div>
        <table className='table table-hover'> 
          <thead>
            <tr>
              <td>Sr.no</td>
              <td>Id</td>
              <td>Firstname</td>
              <td>Lastname</td>
              <td>Age</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index) => {
                  return(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.age}</td>
                      <td>
                        <button className='btn btn-primary' onClick={(e) => handleEdit(item.id)}>Edit</button>
                        <button className='btn btn-danger' onClick={(e) => handleDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                  )
              })
            }
          </tbody>
        </table>

    </div>
  )
}
