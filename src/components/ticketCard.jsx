const TicketCard = ({ ticket, user }) => {

  const img1 = "/images/noPriority.svg"; 
  const img2 = "/images/urgentPriorityGrey.svg";

  const statusImage = {
    "Backlog": "/images/Backlog.svg",
    "In progress": "images/inProgress.svg",
    "Done": "/images/Done.svg",
    "Todo": "/images/Todo.svg"
  }

  return (
      <div className="ticket-card"
          style={{
              backgroundColor: "white",
              borderRadius: "4px",
              marginBottom: "1rem",
              padding: "1rem",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: '1rem',
              fontSize: "14px",
              fontFamily: '"Average", serif'
          }}
      >
          <div className="head" style={{display: "flex", alignItems: "center", height: "2rem", marginTop: "0.5rem", color: "grey"}}>
            <img src={statusImage[ticket.status]} alt="" style={{marginRight: "1rem"}}/>
            <h2>{ticket.id}</h2>
          </div>
          <h3 style={{fontSize: "1.5rem"}}>{ticket.title}</h3>
          <div className="tag" style={{display: "flex", alignItems: "center", color: "grey"}}>
              <img 
                  src={ticket.priority === 0 ? img1 : img2} 
                  alt="Priority icon"
                  style={{ width: '24px', height: '24px', border: "0.3px solid #d2d4d9", borderRadius: "0.3rem", padding: "0.3rem"}} // Set the size of the icon if needed
              />
              <p style={{marginInline: "0.5rem", fontSize: "1.1rem", border: "0.3px solid #d2d4d9", borderRadius: "0.3rem", padding: "0.3rem"}}>
                  {ticket.tag}
              </p>
          </div>
      </div>
  );
}

export default TicketCard;
