import { useContext } from "react"
import { UserContext } from "../../context/userContext"


export default function Dashboard() {
    const {user} = useContext(UserContext)
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      
      {!!user && (<h2>Hi {user.name}!</h2>)}
      <iframe src="http://localhost:8501" style={{ width: '200%', height: '100%', border: 'none' }} ></iframe>
    </div>
  )
}
