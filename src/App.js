import "./style.css";

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Fact-Check" />
        <h1>Fact-Share</h1>
      </div>
      <button className="btn btn-large btn-open">Share a Fact</button>
    </header>
  );
}

export default App;
