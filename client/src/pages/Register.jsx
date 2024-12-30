import { useState } from "react";
import axios from 'axios';
import  { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })


  const registerUser = async (e) => {
    e.preventDefault()
    const {name, email, password} = data
    try {
      const { data } = await axios.post('/register',{
        name ,email, password
      })
      if(data.error) {
        toast.error(data.error)
      } else{
        setData({})
        toast.success('Login Successfull')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={registerUser}  style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Name</label>
        <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}/>
        <br />
        <label  style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}  style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}/>
        <br />
        <label  style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}  style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}/>
        <br />
        <button type='submit' style={{ width: '100%', padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  )
}
