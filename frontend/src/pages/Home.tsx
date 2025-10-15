import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Link to="/create">Create Game</Link>
    </div>
  ) 
}
export default Home;