import PortfolioCard from '../../components/PortfolioCard/portfolioCard'
import './style.scss'

function AllPortfolio() {
  return (
    <div className="container-all">
      <div className='chevron'>
       <button>All 
            <img src="/public/Chevron Down.png" alt="chevron down" /></button>       
      </div>
     <div className='all-portfolios'>
        <h2>All Portfolios</h2>
        </div>
        <div className="all-card">
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
        </div>
  
    </div>
  )
}

export default AllPortfolio