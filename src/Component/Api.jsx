import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {

    const [users,setUsers]=useState([])
    

    useEffect(() => {
       
        getUsers()

    }, [])

    const getUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res, "shalini")
            setUsers(res.data)
        })
        .catch((err) => {
            console.log(err, "error")
        })

    }

  const deleteData =(id)=>{
    let obj ={
       name:name,
       phone:phone
      
    }
    axios({
        method: 'delete',
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        data: obj
    })
    // axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
        getUsers()
        console.log(res, "shalini del")
       
    })
    .catch((err) => {
        console.log(err, "error")
    })
  }

  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [id,setId]=useState("")
  
  const createData=()=>{
    axios.post(`https://jsonplaceholder.typicode.com/users/`,{name:name,phone:phone} )
    .then((res)=>{
        getUsers()
    })
    .catch((err) => {
        console.log(err, "error")
    })
  }

  const handleEdit=(item)=>{
    setName(item.name)
    setPhone(item.phone)
    setId(item.id)

  }

  const update=()=>{
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,{
            body:{
                "name":name,
                "phone":phone
            }
       
    } )
    .then((res)=>{
      console.log(res,"hi")
    })
    .catch((err) => {
        console.log(err, "error")
    })
  }



console.log(users,"users")

    return (
        <div>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} id="name" className="name"  />
            </div>
            <div>
                <label>Phone</label>
                <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} id="phone" className="phone"  />
            </div>
            <div>
                <button onClick={id ? update : createData} >{id ? 'update' : 'create'}</button>
            </div>

            {
                users.map((item)=>{
                    return(
                        <div>
                            <div>{item.id}</div>
                            <div>{item.name}</div>
                            <div>{item.phone}</div>
                            <div>{item.address.city}</div>
                            <div>
                                <span onClick={()=>handleEdit(item)} >Edit</span> /
                                <span onClick={()=>deleteData(item.id)} >Delete</span>
                            </div>
                            
                            <hr />
                            </div>

                    )
                })
            }

        </div>
    )
}

export default Api
