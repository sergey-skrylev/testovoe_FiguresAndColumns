import { Circle, Square, Rectangle, Triangle } from '../Figures/Figures'
import { useState } from 'react';
import './App.css';

const App = () => {

  const [boards, setBoards] = useState([
    {
      id: 1, title: 'Table 1',
      items: [
        { id: 1, element: <Circle /> },
        { id: 2, element: <Triangle /> },
        { id: 3, element: <Rectangle /> },
        { id: 4, element: <Square /> },
      ]
    },
    {
      id: 2, title: 'Table 2',
      items: []
    }
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const dragStartHandler = (e, board, item) => {
    setCurrentBoard(board); 
    setCurrentItem(item);
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
  }

  const dropHandler = (e, board, item) => {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem); //индекс в массиве текущей картчоки
    currentBoard.items.splice(currentIndex, 1); 
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);

    setBoards(boards.map(b => { 
      if (b.id === board.id) {
        return board
      }
      if (b.id === currentBoard.id) {
        return currentBoard
      }
      return b
    })
    );
  }

  const dropCardHandler = (e, board) => {
    // e.preventDefault();
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board
      }
      if (b.id === currentBoard.id) {
        return currentBoard
      }
      return b
    })
    );
  }

  return (
    <div className="app">

      {boards.map(board =>
          <div
            className="board"
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}>

            {board.items.map(item =>
              <div
                draggable={true}
                onDragOver={(e) => dragOverHandler(e)}
                onDragStart={(e) => dragStartHandler(e, board, item)}
                onDrop={(e) => dropHandler(e, board, item)}>

                {item.element}

              </div>)}
          </div>)}
    </div>
  );
}

export default App;
