import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Contact() {
  const [full_name, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(full_name, email, message);

    axios.post("/contact", { full_name, email, message })
      .then(res => {
        alert("Your message has been sent");
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
        alert("Please review your message");
      });

    setFullname('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Full Name' value={full_name} onChange={(e) => setFullname(e.target.value)} />
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
