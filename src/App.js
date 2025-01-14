import {useState} from 'react';

function Square({value, onSquareClick}){
  return <button className="square" onClick={onSquareClick}>
    {value}
  </button>;
}

const board = [null, null, null, null, null, null, null, null, null];

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);

  const [field0, setField0] = useState(Array(9).fill(null));
  const [field1, setField1] = useState(Array(9).fill(null));
  const [field2, setField2] = useState(Array(9).fill(null));
  const [field3, setField3] = useState(Array(9).fill(null));
  const [field4, setField4] = useState(Array(9).fill(null));
  const [field5, setField5] = useState(Array(9).fill(null));
  const [field6, setField6] = useState(Array(9).fill(null));
  const [field7, setField7] = useState(Array(9).fill(null));
  const [field8, setField8] = useState(Array(9).fill(null));
  const xField = ['\\', '', '/',
                  '', 'X', '',
                  '/', '', '\\'];
  const oField = ['', '-', '',
                  '|', '', '|',
                  '', '-', '']

  const [nextField, setNextField] = useState(4);
  const [previousField, setPreviousField] = useState(4);

  function handleClick(square, i){
    if (board[nextField]) {setNextField(previousField); square = nextField; return;}
    if (nextField !== square || calculateWinner(board)) return;

    switch (nextField) {
      case 0:
        if(field0[i]) return;
        const nextField0 = field0.slice();
        xIsNext ? nextField0[i] = "X" : nextField0[i] = "O";
        setField0(nextField0);
        setXIsNext(!xIsNext);
        setPreviousField(nextField);
        setNextField(i);
        break;
      case 1:
        if(field1[i]) return;
        const nextField1 = field1.slice();
        xIsNext ? nextField1[i] = "X" : nextField1[i] = "O";
        setField1(nextField1);
        setXIsNext(!xIsNext);
        setPreviousField(nextField);
        setNextField(i);
        break;
      case 2:
        if(field2[i]) return;
        const nextField2 = field2.slice();
        xIsNext ? nextField2[i] = "X" : nextField2[i] = "O";
        setField2(nextField2);
        setXIsNext(!xIsNext);
        setPreviousField(nextField);
        setNextField(i);
        break;
      case 3:
        if(field3[i]) return;
        const nextField3 = field3.slice();
        xIsNext ? nextField3[i] = "X" : nextField3[i] = "O";
        setField3(nextField3);
        setXIsNext(!xIsNext);
        setPreviousField(nextField);
        setNextField(i);
        break;
      case 4:
        if(field4[i]) return;
        const nextField4 = field4.slice();
        xIsNext ? nextField4[i] = "X" : nextField4[i] = "O";
        setField4(nextField4);
        setXIsNext(!xIsNext);
        setPreviousField(nextField);
        setNextField(i);
        break;
      case 5:
        if(field5[i]) return;
        const nextField5 = field5.slice();
        xIsNext ? nextField5[i] = "X" : nextField5[i] = "O";
        setField5(nextField5);
        setXIsNext(!xIsNext);
        setPreviousField(nextField);
        setNextField(i);
        break;
      case 6:
        if(field6[i]) return;
        const nextField6 = field6.slice();
        xIsNext ? nextField6[i] = "X" : nextField6[i] = "O";
        setField6(nextField6);
        setXIsNext(!xIsNext);
        setPreviousField(nextField);
        setNextField(i);
        break;
      case 7:
        if(field7[i]) return;
        const nextField7 = field7.slice();
        xIsNext ? nextField7[i] = "X" : nextField7[i] = "O";
        setField7(nextField7);
        setXIsNext(!xIsNext);
        setPreviousField(nextField);
        setNextField(i);
        break;
      case 8:
        if(field8[i]) return;
        const nextField8 = field8.slice();
        xIsNext ? nextField8[i] = "X" : nextField8[i] = "O";
        setField8(nextField8);
        setXIsNext(!xIsNext);
        setPreviousField(nextField);
        setNextField(i);
        break;
      default:
        break;
    }
  }

  let winner;
  switch (previousField){
    case 0:
      winner = calculateWinner(field0);
      if (winner === 'X') setField0(xField);
      else if(winner === 'O') setField0(oField);
      break;
    case 1:
      winner = calculateWinner(field1);
      if (winner === 'X') setField1(xField);
      else if(winner === 'O') setField1(oField);
      break;
    case 2:
      winner = calculateWinner(field2);
      if (winner === 'X') setField2(xField);
      else if(winner === 'O') setField2(oField);
      break;
    case 3:
      winner = calculateWinner(field3);
      if (winner === 'X') setField3(xField);
      else if(winner === 'O') setField3(oField);
      break;
    case 4:
      winner = calculateWinner(field4);
      if (winner === 'X') setField4(xField);
      else if(winner === 'O') setField4(oField);
      break;
    case 5:
      winner = calculateWinner(field5);
      if (winner === 'X') setField5(xField);
      else if(winner === 'O') setField5(oField);
      break;
    case 6:
      winner = calculateWinner(field6);
      if (winner === 'X') setField6(xField);
      else if(winner === 'O') setField6(oField);
      break;
    case 7:
      winner = calculateWinner(field7);
      if (winner === 'X') setField7(xField);
      else if(winner === 'O') setField7(oField);
      break;
    case 8:
      winner = calculateWinner(field8);
      if (winner === 'X') setField8(xField);
      else if(winner === 'O') setField8(oField);
      break;
    default:
      break;
  }
  let status;
  if (winner) {
    winner === 'X' ? board[previousField] = 'X' : board[previousField] = 'O'; 
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  } 

  const WINNER = calculateWinner(board);
  if (WINNER) {
    status = "Winner: " + WINNER;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className={`field0 ${nextField === 0 || (calculateWinner(board) && board[0]) ? 'active-field' : ''}`}></div>
      <div className={`field1 ${nextField === 1 || (calculateWinner(board) && board[1]) ? 'active-field' : ''}`}></div>
      <div className={`field2 ${nextField === 2 || (calculateWinner(board) && board[2]) ? 'active-field' : ''}`}></div>
      <div className={`field3 ${nextField === 3 || (calculateWinner(board) && board[3]) ? 'active-field' : ''}`}></div>
      <div className={`field4 ${nextField === 4 || (calculateWinner(board) && board[4]) ? 'active-field' : ''}`}></div>
      <div className={`field5 ${nextField === 5 || (calculateWinner(board) && board[5]) ? 'active-field' : ''}`}></div>
      <div className={`field6 ${nextField === 6 || (calculateWinner(board) && board[6]) ? 'active-field' : ''}`}></div>
      <div className={`field7 ${nextField === 7 || (calculateWinner(board) && board[7]) ? 'active-field' : ''}`}></div>
      <div className={`field8 ${nextField === 8 || (calculateWinner(board) && board[8]) ? 'active-field' : ''}`}></div>
      <div className="board-row">
        <div className="board-square">
          <div className='square-row'>
            <Square value={field0[0]} onSquareClick={() => handleClick(0, 0)} />
            <Square value={field0[1]} onSquareClick={() => handleClick(0, 1)} />
            <Square value={field0[2]} onSquareClick={() => handleClick(0, 2)} />
          </div>
          <div className='square-row'>
            <Square value={field0[3]} onSquareClick={() => handleClick(0, 3)} />
            <Square value={field0[4]} onSquareClick={() => handleClick(0, 4)} />
            <Square value={field0[5]} onSquareClick={() => handleClick(0, 5)} />
          </div>
          <div className='square-row'>
            <Square value={field0[6]} onSquareClick={() => handleClick(0, 6)} />
            <Square value={field0[7]} onSquareClick={() => handleClick(0, 7)} />
            <Square value={field0[8]} onSquareClick={() => handleClick(0, 8)} />
          </div>
        </div>

        <div className="board-square">
          <div className='square-row'>
            <Square value={field1[0]} onSquareClick={() => handleClick(1, 0)} />
            <Square value={field1[1]} onSquareClick={() => handleClick(1, 1)} />
            <Square value={field1[2]} onSquareClick={() => handleClick(1, 2)} />
          </div>
          <div className='square-row'>
            <Square value={field1[3]} onSquareClick={() => handleClick(1, 3)} />
            <Square value={field1[4]} onSquareClick={() => handleClick(1, 4)} />
            <Square value={field1[5]} onSquareClick={() => handleClick(1, 5)} />
          </div>
          <div className='square-row'>
            <Square value={field1[6]} onSquareClick={() => handleClick(1, 6)} />
            <Square value={field1[7]} onSquareClick={() => handleClick(1, 7)} />
            <Square value={field1[8]} onSquareClick={() => handleClick(1, 8)} />
          </div>
        </div>

        <div className="board-square">
          <div className='square-row'>
            <Square value={field2[0]} onSquareClick={() => handleClick(2, 0)} />
            <Square value={field2[1]} onSquareClick={() => handleClick(2, 1)} />
            <Square value={field2[2]} onSquareClick={() => handleClick(2, 2)} />
          </div>
          <div className='square-row'>
            <Square value={field2[3]} onSquareClick={() => handleClick(2, 3)} />
            <Square value={field2[4]} onSquareClick={() => handleClick(2, 4)} />
            <Square value={field2[5]} onSquareClick={() => handleClick(2, 5)} />
          </div>
          <div className='square-row'>
            <Square value={field2[6]} onSquareClick={() => handleClick(2, 6)} />
            <Square value={field2[7]} onSquareClick={() => handleClick(2, 7)} />
            <Square value={field2[8]} onSquareClick={() => handleClick(2, 8)} />
          </div>
        </div>
      </div>

      <div className="board-row">
        <div className="board-square">
          <div className='square-row'>
            <Square value={field3[0]} onSquareClick={() => handleClick(3, 0)} />
            <Square value={field3[1]} onSquareClick={() => handleClick(3, 1)} />
            <Square value={field3[2]} onSquareClick={() => handleClick(3, 2)} />
          </div>
          <div className='square-row'>
            <Square value={field3[3]} onSquareClick={() => handleClick(3, 3)} />
            <Square value={field3[4]} onSquareClick={() => handleClick(3, 4)} />
            <Square value={field3[5]} onSquareClick={() => handleClick(3, 5)} />
          </div>
          <div className='square-row'>
            <Square value={field3[6]} onSquareClick={() => handleClick(3, 6)} />
            <Square value={field3[7]} onSquareClick={() => handleClick(3, 7)} />
            <Square value={field3[8]} onSquareClick={() => handleClick(3, 8)} />
          </div>
        </div>

        <div className="board-square">
          <div className='square-row'>
            <Square value={field4[0]} onSquareClick={() => handleClick(4, 0)} />
            <Square value={field4[1]} onSquareClick={() => handleClick(4, 1)} />
            <Square value={field4[2]} onSquareClick={() => handleClick(4, 2)} />
          </div>
          <div className='square-row'>
            <Square value={field4[3]} onSquareClick={() => handleClick(4, 3)} />
            <Square value={field4[4]} onSquareClick={() => handleClick(4, 4)} />
            <Square value={field4[5]} onSquareClick={() => handleClick(4, 5)} />
          </div>
          <div className='square-row'>
            <Square value={field4[6]} onSquareClick={() => handleClick(4, 6)} />
            <Square value={field4[7]} onSquareClick={() => handleClick(4, 7)} />
            <Square value={field4[8]} onSquareClick={() => handleClick(4, 8)} />
          </div>
        </div>

        <div className="board-square">
          <div className='square-row'>
            <Square value={field5[0]} onSquareClick={() => handleClick(5, 0)} />
            <Square value={field5[1]} onSquareClick={() => handleClick(5, 1)} />
            <Square value={field5[2]} onSquareClick={() => handleClick(5, 2)} />
          </div>
          <div className='square-row'>
            <Square value={field5[3]} onSquareClick={() => handleClick(5, 3)} />
            <Square value={field5[4]} onSquareClick={() => handleClick(5, 4)} />
            <Square value={field5[5]} onSquareClick={() => handleClick(5, 5)} />
          </div>
          <div className='square-row'>
            <Square value={field5[6]} onSquareClick={() => handleClick(5, 6)} />
            <Square value={field5[7]} onSquareClick={() => handleClick(5, 7)} />
            <Square value={field5[8]} onSquareClick={() => handleClick(5, 8)} />
          </div>
        </div>
      </div>

      <div className="board-row">
        <div className="board-square">
          <div className='square-row'>
            <Square value={field6[0]} onSquareClick={() => handleClick(6, 0)} />
            <Square value={field6[1]} onSquareClick={() => handleClick(6, 1)} />
            <Square value={field6[2]} onSquareClick={() => handleClick(6, 2)} />
          </div>
          <div className='square-row'>
            <Square value={field6[3]} onSquareClick={() => handleClick(6, 3)} />
            <Square value={field6[4]} onSquareClick={() => handleClick(6, 4)} />
            <Square value={field6[5]} onSquareClick={() => handleClick(6, 5)} />
          </div>
          <div className='square-row'>
            <Square value={field6[6]} onSquareClick={() => handleClick(6, 6)} />
            <Square value={field6[7]} onSquareClick={() => handleClick(6, 7)} />
            <Square value={field6[8]} onSquareClick={() => handleClick(6, 8)} />
          </div>
        </div>

        <div className="board-square">
          <div className='square-row'>
            <Square value={field7[0]} onSquareClick={() => handleClick(7, 0)} />
            <Square value={field7[1]} onSquareClick={() => handleClick(7, 1)} />
            <Square value={field7[2]} onSquareClick={() => handleClick(7, 2)} />
          </div>
          <div className='square-row'>
            <Square value={field7[3]} onSquareClick={() => handleClick(7, 3)} />
            <Square value={field7[4]} onSquareClick={() => handleClick(7, 4)} />
            <Square value={field7[5]} onSquareClick={() => handleClick(7, 5)} />
          </div>
          <div className='square-row'>
            <Square value={field7[6]} onSquareClick={() => handleClick(7, 6)} />
            <Square value={field7[7]} onSquareClick={() => handleClick(7, 7)} />
            <Square value={field7[8]} onSquareClick={() => handleClick(7, 8)} />
          </div>
        </div>

        <div className="board-square">
          <div className='square-row'>
            <Square value={field8[0]} onSquareClick={() => handleClick(8, 0)} />
            <Square value={field8[1]} onSquareClick={() => handleClick(8, 1)} />
            <Square value={field8[2]} onSquareClick={() => handleClick(8, 2)} />
          </div>
          <div className='square-row'>
            <Square value={field8[3]} onSquareClick={() => handleClick(8, 3)} />
            <Square value={field8[4]} onSquareClick={() => handleClick(8, 4)} />
            <Square value={field8[5]} onSquareClick={() => handleClick(8, 5)} />
          </div>
          <div className='square-row'>
            <Square value={field8[6]} onSquareClick={() => handleClick(8, 6)} />
            <Square value={field8[7]} onSquareClick={() => handleClick(8, 7)} />
            <Square value={field8[8]} onSquareClick={() => handleClick(8, 8)} />
          </div>
        </div>
      </div>
    </>
  );
}

function calculateWinner(field){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if(field[a] && field[a] === field[b] && field[a] === field[c]) return field[a];
  }
  return null;
}