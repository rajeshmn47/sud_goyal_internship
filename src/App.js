import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { validate } from './validation';

function App() {
  const [users,setUsers]=useState()
  const [errors,setErrors]=useState()
  const initialvalues={
    title:'',
    body:'',
    userId:''
  }
  const[values,setValues]=useState(initialvalues)
  useEffect(()=>{
setTimeout(() => {
  fetch('https://jsonplaceholder.typicode.com/users').then(e=>e.json())
  .then(data=>{
    console.log(data)
    setUsers(data)})


}, 4000);
  },[])
  useEffect(()=>{
validate (values,errors,setErrors)
console.log(errors,'yt')
  },[values])
const handlechange=(e)=>{
  var name=e.target.name
   var value=e.target.value
setValues({...values,[name]:value})
}
const handlesubmit=(e)=>{
e.preventDefault()
if(validate()){
  console.log('ok bro')
}
else{
  console.log('sorry bro')
}
}
  return (
    <>
   <div className='app'>
  <form  onSubmit={handlesubmit} className='form'>
    <label for='user'>choose the user
    </label>
    <select name='user' id='user' className='select' value={values.userId} onChange={handlechange}>
    <option value='santhosh'>choose the user</option>
      {users?.map((a)=><>

        <option value='santhosh'>{a.username}</option>
      </>)}
    </select>
    {errors?.userId&&errors.userId}
    <label for='title'>title
    </label>
    <input type='text' alt='' name='title' className='inputtext' value={values.title} onChange={handlechange}/>
    {errors?.body&&errors.body}
    <label for='body'>body
    </label>
    <input type='text' alt='' name='body' className='inputtext' value={values.body} onChange={handlechange}/>
    {errors?.title&&errors.title}
    <input type='submit' className='submitbtn'/>
    </form>
   </div>
      </>
  );
}

export default App;
