import { useNavigate } from "react-router-dom"

const NotFound = () => {

  const navigate = useNavigate();
    
  return (
    <div>
        <h2>404 | PAGE NOT FOUND</h2>
        <button onClick={() => navigate('/')}>Back to Homepage</button>
    </div>
  )
}
export default NotFound