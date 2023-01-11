import React, {useState, useEffect} from "react";
import Card from './components/Card';

const App = props => {

  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const selectCard = id => {
    if (selectedCards.includes(id)){
      startNewRound();
    } else {
      setSelectedCards((prevArray) => [...prevArray, id]);
      newCardSelected();
    };
  };

  const newCardSelected = () => {
    setCurrentScore((previousScore) => previousScore + 1);
  };

  const startNewRound = () => {
    if (currentScore > topScore) setTopScore(currentScore);
    setCurrentScore(0);
    setSelectedCards([]);
  };

  useEffect(() => {
    //render all cards in App div, upon App mount
    displayedCards = allCards.map(card => {
      return <Card key={card.id} cardName={card.name} onClick={selectCard(card.id)}/>
    });
    shuffleArray(displayedCards);
  }, [])

  useEffect(() => {
    shuffleArray(displayedCards);
  }, [currentScore]);

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

  let displayedCards;

  const shuffleArray = array => {
    console.log("array shuffled");
  };

  return (
    <div className="App">
      <header className="title">Memory Card</header>
      <div className="container">
        {displayedCards}
      </div>
    </div>
  );
}

export default App;
