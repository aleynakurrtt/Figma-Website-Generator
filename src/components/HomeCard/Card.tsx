
import './style.scss';

function Card() {
  return (
    <div className="customize-this">
      <div className="container-templete">
        <div className="how-it-works-top">
          <img src="/public/stars.svg" alt="stars" />
          <p>How It Works</p>
        </div>
        <h3>Customize This Template</h3>
        <p>
          Select this template, Enter your details, confirm and hit “Generate”
          for your unique portfolio.
        </p>
      </div>
      <div className="hi-there">
          <img src="/public/hi-there.png" alt="hi there" />
        </div>
    </div>
  );
}

export default Card;
