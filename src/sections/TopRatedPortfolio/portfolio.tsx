import Card from '../../components/HomeCard/Card';
import './style.scss';

function Portfolio() {
  return (
    <>
      <div className="top-rated">
        <h2>Top Rated Portfolios</h2>
      </div>

      <div id="template-this">
        <div className="container-this">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Card key={index} />
            ))}
        </div>
      </div>
      
    </>
  );
}

export default Portfolio;
