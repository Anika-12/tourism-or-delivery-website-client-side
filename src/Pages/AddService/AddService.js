import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => 
    {
        console.log(data);
        axios.post('http://localhost:5000/services',data)
        .then(res =>{
            if (res.data.insertId){
                alert(' service added sucessfully');
                reset();
            }
        })
    }
    return (
        <div className="add-service">
            <h1>Add a new Service</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="Name:"/>
      <textarea {...register("descripton")} placeholder="Description:"/>
      <input {...register("img")}placeholder="Image:" />
     
      <input  type="submit" />
    </form>
        </div>
    );
};

export default AddService;