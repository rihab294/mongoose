import axios from "axios"
import { GETCONTACT, GETCONTACTS } from "../types"

export const getallContacts=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/api/contacts/allcontacts')
        dispatch({
            type:GETCONTACTS,
            payload:res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const addContact=(data)=>async(dispatch)=>{
    try {
        await axios.post('api/contacts/addcontact',data)
        dispatch(getallContacts())
    } catch (error) {
        console.log(error)
    }
}
export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contacts/removecontact/${id}`)
        dispatch(getallContacts())
    } catch (error) {
        console.log(error)
    }
}
export const getContact=(id)=>async(dispatch)=>{
    try {
        const res=await axios.get(`/api/contacts/onecontact/${id}`)
        dispatch({
            type:GETCONTACT,
            payload:res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateContact=(id, data)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contacts/updatecontact/${id}`, data)
        dispatch(getallContacts())
    } catch (error) {
        console.log(error)
    }
}
