import React, {useState, useEffect} from "react";
import Card from './components/Card';
import "./styles/App.css";

import elephant from "./img/elephant.jpg";
import snake from "./img/snake.jpg";
import rabbit from "./img/rabbit.jpg";
import dog from "./img/dog.jpg";
import giraffe from "./img/giraffe.jpg";
import hamster from "./img/hamster.jpg";
import lion from "./img/lion.jpg";
import zebra from "./img/zebra.jpg";
import sheep from "./img/sheep.jpg";
import owl from "./img/owl.jpg";
import whale from "./img/whale.jpg";
import crab from "./img/crab.jpg";
import seagull from "./img/seagull.jpg";
import turtle from "./img/turtle.jpg";
import crow from "./img/crow.jpg";
import llama from "./img/llama.jpg";
import penguin from "./img/penguin.jpg";
import shark from "./img/shark.jpg";

const cards = [
  {name: "Elephant", id: 0, image: elephant},
  {name: "Snake", id: 1, image: snake},
  {name: "Rabbit", id: 2, image: rabbit},
  {name: "Dog", id: 3, image: dog},
  {name: "Giraffe", id: 4, image: giraffe},
  {name: "Hamster", id: 5, image: hamster},
  {name: "Lion", id: 6, image: lion},
  {name: "Zebra", id: 7, image: zebra},
  {name: "Sheep", id: 8, image: sheep},
  {name: "Owl", id: 9, image: owl},
  {name: "Whale", id: 10, image: whale},
  {name: "Crab", id: 11, image: crab},
  {name: "Seagull", id: 12, image: seagull},
  {name: "Turtle", id: 13, image: turtle},
  {name: "Crow", id: 14, image: crow},
  {name: "Llama", id: 15, image: llama},
  {name: "Penguin", id: 16, image: penguin},
  {name: "Shark", id: 17, image: shark}
]

// const imageSrc = 

const App = props => {

  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [allCards, setAllCards] = useState(cards);

  const selectCard = id => {
    console.log("=================================")
    console.log("selectCard", id);
    if (selectedCards.includes(id)){
      startNewRound();
    } else {
      setSelectedCards((prevArray) => [...prevArray, id]);
      newCardSelected();
    };
  };

  const newCardSelected = () => {
    console.log("========== yay new card chosen!");
    setCurrentScore((previousScore) => previousScore + 1);
  };

  const startNewRound = () => {
    console.log("============= new round");
    if (currentScore > topScore) setTopScore(currentScore);
    setCurrentScore(0);
    setSelectedCards([]);
  };

  useEffect(() => {
    shuffleCards();
    console.log('========== useEffect - on score change');
    console.log("selectedCards:", selectedCards);
    console.log("currentScore", currentScore);
    console.log("topScore", topScore);
    // check if game ended
    checkGameEnd();

  }, [currentScore]);

  const checkGameEnd = () => {
    if (currentScore >= allCards.length){
      gameWon();
    };
  };

  const gameWon = () => {
    console.log('game Won!');
    startNewRound();
  };

  const shuffleCards = () => {
    setAllCards((prev) => {
      // console.log(prev);
      return giveShuffledArray(prev)});
    // console.log(allCards);
  }

  const shuffleArray = array => {
    // console.log(array);
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex > 0){
      console.log("array is shuffling");
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    };
  }

  const giveShuffledArray = array => {
    let newArray = Array.from(array);
    shuffleArray(newArray);
    return newArray;
  };

  return (
    <div className="App">
      <div className="head">
        <div className="head-texts">
          <header className="title">Memory Card Game</header>
          <div className="instruction-text">To increase your score, tap the cards which you have not yet tapped. How far can you go before you start forgetting?</div>
        </div>
        <div className="scores">
          <div className="score currentScore">{currentScore}</div>
          <div className="score topScore">{topScore}</div>
        </div>
      </div>
      <div className="container">
        {
          allCards.map(card => {
            return <Card key={card.id} cardName={card.name} onCardClick={() => selectCard(card.id)} cardSrc={card.image}/>
          })
        }
      </div>
      <footer>
        <span className="footer-text">Benjamin Yong</span>
        <span className="footer-text">The Odin Project</span>
        <span className="footer-text">Jan 2023</span>
      </footer>
    </div>
  );
}

export default App;
