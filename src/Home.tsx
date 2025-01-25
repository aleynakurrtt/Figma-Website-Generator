import AlwaysReachable from "./sections/AlwaysReachable/alwaysReacable"
import FiveMinute from "./sections/FiveMinute/fiveMinute"
import RecentUser from "./sections/RecentUser/recentUser"
import Portfolio from "./sections/TopRatedPortfolio/portfolio"
import YourStory from "./sections/YourStoryPage/yourStory"


function Home() {
  return (
    <>
    <YourStory/>
    <FiveMinute/>
    <Portfolio/> 
    <RecentUser/>
   <AlwaysReachable/> 

      </>
  )
}

export default Home