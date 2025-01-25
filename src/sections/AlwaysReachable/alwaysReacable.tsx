
import './style.scss'

function AlwaysReachable() {
  return (
   <>
     <div className="container-always">
      <div className='reachable'>
       <h3>Always Reachable</h3>
       <p className='feel-free'>Feel free to reach out to us anytime through email or LinkedIn. We're here to assist you and answer any queries you may have.Let's stay connected!</p>
       <p className='lineer'></p>
        <div className='user'>
          <img src="/public/Ellipse 69.png" alt="Founder and CEO" />
          <div className='user-name'>
             <h5>Yagna Kusumanchi</h5> 
             <p className='click-craft'>Founder and CEO of Click Craft</p>
             <div className='social-media'>
               <img src="/public/github.svg" alt="Github" />
               <img src="/public/discord.svg" alt="Discord" />
               <img src="/public/reddit.svg" alt="Reddit" />
               <img src="/public/twitter.svg" alt="Twitter" />
             </div>
          </div>
        </div>
      </div>
      <div className='right-picture'>
        <img src="/public/chatbot.png" alt="chatbot" />
      </div>
     </div>

   </>
  )
}

export default AlwaysReachable