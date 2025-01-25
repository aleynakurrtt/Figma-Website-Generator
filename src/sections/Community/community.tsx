import CommunityCard from '../../components/CommunityCard/CommunityCard'
import './style.scss'

function Community() {
  return (
    <>
    <div className='community-all'>
      <h2>Community</h2>
    </div> 
    <div className='all-card'>
        <CommunityCard/>
        <CommunityCard/>
        <CommunityCard/>
        <CommunityCard/>
        <CommunityCard/>
        <CommunityCard/>
    </div>
    </>
  )
}

export default Community