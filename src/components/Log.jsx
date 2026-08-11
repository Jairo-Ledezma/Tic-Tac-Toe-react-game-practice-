export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row} ${turn.square.col}`}>
          {turn.player} selected square located in row {turn.square.row + 1} and
          square {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
