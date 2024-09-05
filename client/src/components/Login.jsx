

function Login() {
  return (
   <form className="p-8 border bg-white shadow-lg flex flex-col w-72 gap-2 rounded">
    <label className="block">Username</label>
    <input type="text" className="block border border-gray-600" />
    <label className="block">Password</label>
    <input type="password" className="block border border-gray-600" /> 
    <button type="submit" className="block bg-cyan-300">Login</button>
    <button className="bg-slate-400">Sign Up</button>
   </form>
  )
}

export default Login