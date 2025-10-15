export default function SelectList({setNumberDice}: {setNumberDice: (n: number) => void}) {
  return (
    <select onChange={(e) => setNumberDice(Number(e.target.value))}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  );
}
