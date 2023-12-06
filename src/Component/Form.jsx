import React, { useContext } from "react";
import { FormContext } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";


const Form =()=>{
const {stuid,setStuid,name,setName,password,setPassword,age,setAge,createObject,details,setDetails,handleDelete,handleEdit,updatedata,uniqueId,setUniqueid}=useContext(FormContext)
console.log(details , 'gfvtftfycvtf')
const navigate = useNavigate()

    return(

        <div>
            <h1>Student Form</h1>
            <div>
                <label>Student Id</label>
                <input type="text" value={stuid} onChange={(e)=>{setStuid(e.target.value)}} id="stuid" className="stuid"  />
            </div>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} id="name" className="name"  />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password" className="password"  />
            </div>
            <div>
                <label>Age</label>
                <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}} id="age" className="age"  />
            </div>
            <div>
                <button onClick={uniqueId ?  updatedata : createObject } >{uniqueId ? 'update' : 'create'}</button>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Name</th>
                            <th>Password</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.stuid}</td>
                                        <td>{item.name}</td>
                                        <td>{item.password}</td>
                                        <td>{item.age}</td>
                                        <td>
                                        <span onClick={()=>handleEdit(item)}>Edit</span> /
                                            <span onClick={()=>handleDelete(item.stuid)}>Delete</span>
                                        </td>
                                    </tr>
                                )
                            })
                               
                            
                        }
                    </tbody>
                </table>
            </div>






        </div>

    )
}



export default Form