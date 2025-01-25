import './style.scss'

function CommunityCard() {
  return (
    <div className='all-community'>
      <div className="profile-card">
        <p>Author of "Python 3.0 for Beginners" and a Full Stack Developer passionate about creating dynamic and user-friendly web experiences.</p>
        <div>
          <div className='portfolios-10'>
            <p>Portfolios <span>10</span> </p>
            <div className='all-icons-1'>
              <div className='eye-icon'>
             <img src="/public/Eye.png" alt="eye" />
             </div>
             <p>1349</p>
             <p>Followers</p>
             <p>999</p>
            </div>
          </div>
        </div>
      </div>
      <div className='polygon-icon'> 
         <img src="/public/polygon3.svg" alt="polygon" />
      </div>
      <div className='user-name-2'>
        <img src="/public/Ellipse 70.png" alt="user picture" />
        <p>Yagna <br/> Kusumanchi</p>
      </div>
    </div>
  )
}

export default CommunityCard