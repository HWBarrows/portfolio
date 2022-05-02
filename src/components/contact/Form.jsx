import React, { useState } from 'react'
import * as Realm from 'realm-web'
import './Contact.scss'


const REALM_APP_ID = "mailserver-pnqaa"
const app = new Realm.App({id: REALM_APP_ID})

async function login (){
    try {
        const user = await app.logIn(Realm.Credentials.anonymous())
        console.log(user);
        return user
     } catch (error){
         console.log("failed to log in", error)
     }
}

login()
export default  function ContactForm (){

    const [ sendName, setSendName ] = useState("")
    const [ sendEmail, setSendEmail ] = useState("")
    const [ sendMessage, setSendMessage ] = useState("")

    const client = app.currentUser.mongoClient('mongodb-atlas')
    const mails = client.db('sentMessages').collection('mails')
    
    const sendMails = () => {
        mails.insertOne({
            name: sendName,
            email: sendEmail,
            content: sendMessage
        })
    }
    
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
        
        // const sendMails = () => {
        //     mails.insertOne({
        //         name: sendName,
        //         email: sendEmail,
        //         content: sendMessage
        //     })
        // }
        sendMails()
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