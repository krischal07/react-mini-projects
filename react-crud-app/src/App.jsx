import React from 'react'
import Users from './Components/Users/Users'

export default function App() {
  return (
    <div className='container'>
        <div className='col-md-12 mt-4'>
            <h3 className='text-center'>CRUD App in React</h3>
        </div>
        <Users />
    </div>
  )
}
