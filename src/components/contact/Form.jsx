import React, { useState } from 'react'


export default function ContactForm (){

    const [ sendName, setSendName ] = useState("")
    const [ sendEmail, setSendEmail ] = useState("")
    const [ sendMessage, setSendMessage ] = useState("")

    const handleSubmit = (e) => {
            e.preventDefault()
                const config = {
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: sendName,
                        email: sendEmail,
                        message: sendMessage
                    })
                }
    
            fetch(`https://queenstea.herokuapp.com/messages`, config)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.log(error.message))
            
            setSendName("")
            setSendEmail("")
            setSendMessage("")
    }
    
    
    
        

    return(
        <div className='formWrapper'>
         <p>Or just send a message:</p>
           <form onSubmit={handleSubmit}>
                <div className='small'>
                    <input type="text" placeholder="Name" value={sendName} onChange={(e)=> setSendName(e.target.value)}/>
                    <input type="email" placeholder='Email' value={sendEmail} onChange={(e)=> setSendEmail(e.target.value)}/>
                </div>
               
                    <textarea value={sendMessage} placeholder='Message'rows={5} onChange={(e)=>setSendMessage(e.target.value)}></textarea>
                    
                    <button type="submit">send</button>
           </form>
        </div>
    )
}