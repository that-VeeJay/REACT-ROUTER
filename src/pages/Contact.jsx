import { useNavigate } from "react-router-dom"

const Contact = () => {

  const navigate = useNavigate();
    
  return (
    <div>
        <h1>Contact Page</h1>
        <div className="contact-buttons">
            <button onClick={() => navigate('info', {replace: true})}>Contact Info</button>
            <button onClick={() => navigate('form', {replace: true})}>Contact Form</button>
        </div>
    </div>
  )
}

export default Contact