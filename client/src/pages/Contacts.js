import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactCard from '../components/ContactCard'
import {getallContacts} from '../redux/actions/contactactions'

function Contacts() {
  const contacts=useSelector(state=>state.contactReducer.contacts)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getallContacts())
  },[])
  
  return (
    
  <Box sx={{display:"flex", justifyContent:"space-between", flexwrap:"wrap", width:"90%", margin:"50px auto", gap:"30px"}}>
    <h2>Contacts</h2>
    {contacts.map(contact=>
      <ContactCard contact={contact} key={contact._id} />
    
    )}
    </Box>
  )
}

export default Contacts