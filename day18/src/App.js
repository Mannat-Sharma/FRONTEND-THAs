import './App.css';
import ChessBox from './components/chessBoard'

function App() {
  let boxes = []
  for (let i=0; i<49; i++){
    boxes.push(<ChessBox />)
  }
  return (
    <div className="App">
      {boxes}
    </div>
  );
}

export default App;