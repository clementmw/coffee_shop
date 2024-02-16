import axios from 'axios'
import { useState, useEffect} from 'react'

function Contact() {
    const [contact, setContact] = useState('')
    const [full_name, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submit, setSubmit] = useState(null)
    
    useEffect(()=>{
        //fetch contact
        axios.get("/contact")
        .then(res => {
            setContact(res.data)
        
        })
        .catch(error =>{
            console.log("error",error)
        })
     
    },[])
    console.log(contact)
    const handleSubmit = async (e) =>{ 
        e.preventDefault();

        axios.post('/contact', {full_name,email,message})
        .then(res => {
           setSubmit('success')
        })
        .catch(error => {
            setSubmit('error')
        })
        // reset the form fields
        setFullName('');   
        setEmail('');
        setMessage('');
      }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        {submit === 'success' && (
              <div className='text-green-600 mb-4'>Thanks, your message has been received.</div>
            )}

            {submit === 'error' && (
              <div className='text-red-600 mb-4'>Please confirm your message.</div>
            )}
            <div>
                <label>Full Name
                    <input
                    type='text'
                    value={full_name}
                    onChange={(e)=> setFullName(e.target.value)}
                    placeholder='Enter your full names'
                    required
                    />
                </label>
                <label>EmailAddress
                    <input
                    type='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder='Enter your email'
                    required
                    />
                </label>
                <label>Message
                    <textarea
                    type='text'
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                    placeholder='Enter your message'
                    required
                    />
                </label>
                <button type='submit'>Submit</button>

            </div>
        </form>
      
    </div>
  )
}

export default Contact