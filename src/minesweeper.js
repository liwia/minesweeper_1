/* this file is going to be empty - ready to delete in part VI
class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Bomb! Game is over!');
      this._board.print();
    } else if (this._board.hasSafeTiles() === false) {
      console.log('Congratulations! You won!');
    } else {
      console.log('Current Board:');
      this._board.print();
    }
  }
}

class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(
      numberOfRows,
      numberOfColumns
    );
    this._bombBoard = Board.generateBombBoard(
      numberOfRows,
      numberOfColumns,
      numberOfBombs
    );
  }
  get playerBoard() {
    return this._playerBoard;
  }
  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(
        rowIndex,
        columnIndex
      );
    }
    this._numberOfTiles--;
  }
  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (
        neighborRowIndex >= 0 &&
        neighborRowIndex < numberOfRows &&
        neighborColumnIndex >= 0 &&
        neighborColumnIndex < numberOfColumns
      ) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++; //removed this._
        }
      }
    });
    return numberOfBombs; //removed this._
  }
  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }
  print() {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n')
    ); In Minesweeper IV i hav here board as paramether and now what? why this._playerBoard? step #19 of Minesweeper V
  }
  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    let board = [];
    for (let loopRow = 0; loopRow < numberOfRows; loopRow++) {
      let row = [];
      for (let loopColumn = 0; loopColumn < numberOfColumns; loopColumn++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }
  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    let board = [];
    for (let loopRow = 0; loopRow < numberOfRows; loopRow++) {
      let row = [];
      for (let loopColumn = 0; loopColumn < numberOfColumns; loopColumn++) {
        row.push(null);
      }
      board.push(row);
    }
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }

    }
    return board;
  }
}

const g = new Game(3, 3, 3);
g.playMove(0, 0);*/
