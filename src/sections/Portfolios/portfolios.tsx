import './style.scss'

function Portfolios() {
  return (
  
        <div className="portfolio-my">
          <div className='user-image'>
             <img src="/public/Ellipse 71.png" alt="user image" />
          </div>
          <div className="container-portfolio">
            <button className='edit-profile'> Edit Profile </button>
            <div className='user-name-1'>
            <h3>Yagna Kusumanchi</h3>
            </div>
            <div className='views'>
                <div className='views-2'>
                <p className='number'>1300</p>
               <p className='followers'>Views</p>
                </div>
               <span className='line-1'></span>
               <div className='views-2'>
               <p className='number'>899</p>
               <p className='followers'>Followers</p>
               </div>
               <span className='line-1'></span>
               <div className='views-2'>
               <p className='number'>560</p>
               <p className='followers'>Likes</p>
               </div>
            </div> 
            <div className='about-passion'>
                <h3>About</h3>
                <p>I'm Yagna Kusumanchi, an aspiring Full Stack Developer with a passion for bringing ideas to life. Proficient in C, C++, Python, JavaScript, and experienced in Node, Express, MongoDB, and React, I'm dedicated to crafting innovative and impactful digital solutions. Let's connect and create something amazing! 👨‍💻</p>
            </div>
            <div className="my-portfolios">
                <h3>My Portfolios</h3>
                <div className='copy-link'>
                 <div className="card-1">
                    <img src="/public/image 303 (1).png" alt="Hi There Picture" />
                    <div className='all-favorite'>
                        <button>Copy Link</button>
                        <div className='favorite'>
                          <img src="/public/Favorite.png" alt="favorite" />
                          <p>99</p>
                          <img src="/public/Eye.png" alt="Eye" />
                          <p>999</p>
                        </div>
                    </div>
                 </div>
                 <div className="card-1">
                    <img src="/public/image 303 (1).png" alt="Hi There Picture" />
                    <div className='all-favorite'>
                        <button>Copy Link</button>
                        <div className='favorite'>
                          <img src="/public/Favorite.png" alt="favorite" />
                          <p>99</p>
                          <img src="/public/Eye.png" alt="Eye" />
                          <p>999</p>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
          </div>
        </div>
   
  )
}

export default Portfolios