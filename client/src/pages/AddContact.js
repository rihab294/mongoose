import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addContact} from '../redux/actions/contactactions'
import {useNavigate} from 'react-router-dom'

function AddContact() {
  const [contact, setContact]=useState({ name:"", email:"", age:""})
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
  }
  const handleAdd=()=>{
      dispatch(addContact(contact))
      navigate('/contacts')
  }

  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px", width:"50%", margin:"50px auto"}}>
    <TextField id="outlined-basic" label="Name" variant="outlined" name="name" fullWidth onChange={handleChange} />
    
    <TextField id="filled-basic" label="Email" variant="filled" name="email" fullWidth onChange={handleChange} />
    
    <TextField id="standard-basic" label="Age" variant="standard" name="age" fullWidth onChange={handleChange} />
    <Button variant="contained" fullWidth onClick={handleAdd}>Submit</Button>
    </Box>
  )
}

export default AddContact