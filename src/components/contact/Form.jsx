import React, { useState } from 'react'

import './Contact.scss'

export default function ContactForm (){

    const [ sendName, setSendName ] = useState("")
    const [ sendEmail, setSendEmail ] = useState("")
    const [ sendMessage, setSendMessage ] = useState("")

    
    const port = process.env.REACT_APP_PORT
    

    const handleSubmit = (e) => {
        e.preventDefault()
            // const config = {
            //     method:"POST",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         name: sendName,
            //         email: sendEmail,
            //         content: sendMessage
            //     })
            // }

        // fetch(`http://localhost:${port}/messages`, config)
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(error => console.log(error.message))

        setSendName("")
        setSendEmail("")
        setSendMessage("")
    }

    return(
        <div className='formWrapper'>
            <div className='contactTitle'>
           <h1>Contact</h1>
           </div>
           <form onSubmit={handleSubmit}>
                <div className='small'>
                    <input type="text" placeholder="Name" value={sendName} onChange={(e)=> setSendName(e.target.value)}/>
                    <input type="email" placeholder='Email' value={sendEmail} onChange={(e)=> setSendEmail(e.target.value)}/>
                </div>
               <div className='large'>
                    <textarea value={sendMessage} placeholder='Message'rows={5} onChange={(e)=>setSendMessage(e.target.value)}></textarea>
                </div>    
                    <button type="submit">send</button>
           </form>
        </div>
    )
}