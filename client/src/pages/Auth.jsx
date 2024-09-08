import { useState } from "react"
import Login from "../components/Login"
import Signup from "../components/Signup"


function Auth() {
  const [islogin, setIslogin]=useState(true)
  return (
    <div className="flex flex-col items-center justify-center min-h-96">
      {
        islogin? <Login/>:<Signup/>
      }
    </div>
  )
}

export default Auth