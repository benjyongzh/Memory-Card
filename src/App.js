import React, {useState, useEffect} from "react";
import Card from './components/Card';
import "./styles/App.css";

const App = props => {

  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [allCards, setAllCards] = useState([
    {name: "Elephant", id: 0},
    {name: "Snake", id: 1},
    {name: "Rabbit", id: 2},
    {name: "Dog", id: 3},
    {name: "Giraffe", id: 4},
    {name: "Hamster", id: 5},
    {name: "Lion", id: 6},
    {name: "Zebra", id: 7},
    {name: "Sheep", id: 8},
    {name: "Owl", id: 9},
    {name: "Whale", id: 10},
    {name: "Crab", id: 11},
    {name: "Seagull", id: 12},
    {name: "Turtle", id: 13},
    {name: "Crow", id: 14},
    {name: "Llama", id: 15},
    {name: "Penguin", id: 16},
    {name: "Shark", id: 17},
  ]);

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
    console.log('useEffect - on mount');
  }, []);

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
            return <Card key={card.id} cardName={card.name} onCardClick={() => selectCard(card.id)}/>
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
