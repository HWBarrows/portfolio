import React, { useState } from 'react'

// const REALM_APP_ID = "mailserver-pnqaa"
// const app = new Realm.App({id: REALM_APP_ID})
// const client = app.currentUser.mongoClient('mongodb-atlas')
// const mails = client.db('sentMessages').collection('mails')

// async function login (){
    
//     try {
//         const user = await app.logIn(Realm.Credentials.anonymous())
        
//         return user
//      } catch (error){
//          console.log("failed to log in", error)
//      }
// }

export default function ContactForm (){

    const [ sendName, setSendName ] = useState("")
    const [ sendEmail, setSendEmail ] = useState("")
    const [ sendMessage, setSendMessage ] = useState("")

    const handleSubmit = (e) => {
            e.preventDefault()
                const config = {
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': `${process.env.REACT_APP_CRED}`
                    },
                    body: JSON.stringify({
                        name: sendName,
                        email: sendEmail,
                        content: sendMessage
                    })
                }
    
            fetch(`https://data.mongodb-api.com/app/mailserver-pnqaa/endpoint/mail`, config)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.log(error.message))
    }
    // const client = app.currentUser.mongoClient('mongodb-atlas')
    // const mails = client.db('sentMessages').collection('mails')
    
    
    //     sendMails()
    //     setSendName("")
    //     setSendEmail("")
    //     setSendMessage("")
    // }

    // const sendMails = () => {
    //         mails.insertOne({
    //             name: sendName,
    //             email: sendEmail,
    //             content: sendMessage
    //         })
        

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