import './style.scss'


function SignIn() {
  
  return (
  
  <>
  <div className='sign-in-2'>
   <form >
    <p>EMAİL</p>
   <input type="text" placeholder="email" id="email" />
   </form>
   <form >
    <p>PASSWORD</p>
   <input type="text" placeholder="password" id="password" />
   </form>
   <button className='login-button'>LOGIN</button>
   </div>
  </> 
  )
}

export default SignIn 