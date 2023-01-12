import React, {useState, useEffect} from "react";
import Card from './components/Card';
import "./styles/App.css";

const App = props => {

  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

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
    shuffleArray(allCards);
    console.log('useEffect - on mount')
  }, [])

  useEffect(() => {
    shuffleArray(allCards);
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

  const allCards = [
    {name: "Elephant", id: 0},
    {name: "Ant", id: 1},
    {name: "Rabbit", id: 2},
    {name: "Dog", id: 3},
    {name: "Giraffe", id: 4},
    {name: "Hamster", id: 5},
    {name: "Lion", id: 6},
    {name: "Zebra", id: 7},
  ];

  const shuffleArray = array => {
    console.log("array shuffled");
  };

  return (
    <div className="App">
      <header className="title">Memory Card</header>
      <div className="container">
        {
          allCards.map(card => {
            return <Card key={card.id} cardName={card.name} onCardClick={() => selectCard(card.id)}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
