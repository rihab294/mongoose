const express=require('express')
const { addContact, allContacts, deleteContact, updateContact, getOneContact } = require('../controllers/contactController')
const { findByIdAndDelete } = require('../models/Contact')
const router=express.Router()


//post a contact
router.post('/addcontact', addContact )
//get all contacts
router.get('/allcontacts', allContacts )
//delete a contact
router.delete('/removecontact/:id', deleteContact )
//update a contact 
router.put('/updatecontact/:id', updateContact )

//get one contact
router.get('/onecontact/:id', getOneContact )



module.exports=router