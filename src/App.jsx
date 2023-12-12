import Player from "./components/Player.jsx";
import TimberChallenge from "./components/TimberChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimberChallenge title="Easy" targetTime={1} />
        <TimberChallenge title="Not easy" targetTime={5} />
        <TimberChallenge title="Getting touch" targetTime={10} />
        <TimberChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
