import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { updateContact } from '../redux/actions/contactactions'


function EditContact() {
  const [contact, setContact]=useState({ name:"", email:"", age:""})
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
  }
  const contactStore=useSelector(state=>state.contactReducer.contact)
  
  useEffect(()=>{
    setContact({name:contactStore?.name,email:contactStore?.email,age:contactStore?.age})
  },[contactStore])

const handleEdit=()=>{
  dispatch(updateContact(contactStore._id, contact))
  navigate('/contacts')
}

  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px", width:"50%", margin:"50px auto"}}>
    <TextField id="outlined-basic" label="Name" variant="outlined" name="name" fullWidth value={contact.name} onChange={handleChange} />
    
    <TextField id="filled-basic" label="Email" variant="filled" name="email" fullWidth value={contact.email} onChange={handleChange} />
    
    <TextField id="standard-basic" label="Age" variant="standard" name="age" fullWidth value={contact.age} onChange={handleChange} />
    <Button variant="contained" fullWidth onClick={handleEdit} >Submit</Button>
    </Box>
  )
}

export default EditContact