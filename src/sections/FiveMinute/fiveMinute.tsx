import './style.scss'

function FiveMinute() {
  return (
    <>
    <div id='set-up'>
       <div className='process'>
        <h2>5 minute set-up process</h2>
        <p>Just take 5 minutes to fill in some info, choose a killer template, and bam! Your personalized portfolio website is ready.</p>
    </div>
    </div>
    <div className="card">
  <div className="container-card">
   <div className="saly-group">
      <img src="/public/Saly-13 (2).png" alt="saly-group" />
  </div> 
    <div className="content">
      <div className="how-it-works">
        <img src="/public/stars.svg" alt="stars" />
        <p>How It Works</p>
      </div>
      <div className="complete-your-profile">
        <h3>Complete Your Profile</h3>
        <p>
          Just share your details, choose a template, and see your personal
          portfolio magically appear. Confirm or make any changes you like, and
          grab a special link to share your portfolio with everyone. Boost your
          online presence the easy way!
        </p>
        <button className='complete-button'>Complete Your Profile</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default FiveMinute