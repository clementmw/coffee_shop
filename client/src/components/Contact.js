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
    <div className="flex items-center justify-center p-4 bg-white">
 
  <div>
    <div className="bg-white p-4 border rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        {submit === 'success' && (
          <div className='text-green-600 mb-4'>Thanks, your message has been received.</div>
        )}

        {submit === 'error' && (
          <div className='text-red-600 mb-4'>Please confirm your message.</div>
        )}
         <h1 className='text-3xl font-bold mb-4 text-coffeeColor'>CONTACT US</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full_name">
            Full Name
          </label>
          <input
            className="border rounded-md w-full py-2 px-3"
            type='text'
            id='full_name'
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Enter your full name'
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="border rounded-md w-full py-2 px-3"
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="border rounded-md w-full py-2 px-3 h-32"
            type='text'
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Enter your message'
            required
          />
        </div>

        <button
          type='submit'
          className='bg-coffeeColor text-black px-4 py-2 rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Contact