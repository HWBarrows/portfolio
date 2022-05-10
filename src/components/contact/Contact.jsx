import Form from './Form.jsx'
import './Contact.scss'

export default function Contact ({contactRef}){
    return (
        <div>
            <div className='contactWrapper' ref={contactRef}>
              <Form/>  
              <div className='icons'>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
            </div>
            
        </div>
    )
}