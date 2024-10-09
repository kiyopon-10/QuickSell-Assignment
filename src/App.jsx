import React from "react";
import TicketBoard from "./components/ticketBoard";

const App = () => {
  const [groupBy, setGroupBy] = React.useState(() => {
    return localStorage.getItem('groupBy') || 'status';
  });
  const [sortBy, setSortBy] = React.useState(() => {
    return localStorage.getItem('sortBy') || 'priority';
  });
  const [displayOptionsVisible, setDisplayOptionsVisible] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
  }, [groupBy]);

  React.useEffect(() => {
    localStorage.setItem('sortBy', sortBy);
  }, [sortBy]);

  const toggleDisplayOptions = () => {
    setDisplayOptionsVisible((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="container" style={{ display: "flex", alignItems: "center", height: "4rem", fontFamily: '"Average", serif'}}>
        <button onClick={toggleDisplayOptions}
          style={{
            display: "flex", alignItems: "center", height: "2rem",
            border: "1px solid grey", boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)", borderRadius: "5px", cursor: "pointer"
          }}
        >
          <img src="/images/Display.svg" alt="" style={{marginRight: "0.3rem"}}/>
          <p>Display</p>
        </button>
      </div>

      {displayOptionsVisible && (
        <div className="controls" style={{ marginBottom: "1rem", padding: "1rem", backgroundColor: "#F1F3F3", borderRadius: "5px", width: "16%", }}>
          {/* Group By dropdown */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={{marginRight: "0.3rem"}}>Grouping: </label>
            <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)} style={{padding: "0.15rem", border: "1px solid grey", borderRadius: "0.3rem"}}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          {/* Sort By dropdown */}
          <div>
            <label style={{marginRight: "0.3rem"}}>Ordering: </label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{padding: "0.15rem", border: "1px solid grey", borderRadius: "0.3rem"}}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}

      <TicketBoard groupBy={groupBy} sortBy={sortBy}/>
    </div>
  );
};

export default App;
