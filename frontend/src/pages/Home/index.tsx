import ArrowButton from "../../assets/images/arrow.svg";
import GamerCard from "../../assets/images/gamer.svg";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="home-text-title">Quais jogos a galera gosta mais?</h1>
        <h3 className="home-text-subtitle">
          Clique no botão abaixo e saiba quais são os jogos que os gamers estão
          escolhendo
        </h3>
        <div className="home-actions">
          <button className="home-btn">QUERO SABER QUAIS SÃO</button>
          <div className="home-btn-icon">
            <img src={ArrowButton} alt="Arrow-Icon-Button" />
          </div>
        </div>
      </div>
      <img src={GamerCard} alt="Gamer-Card" className="home-image"/>
    </div>
  );
};

export default Home;
