import TicketCard from "./ticketCard";

const titleImage = {
  "Todo": "/images/Todo.svg",
  "In progress": "/images/inProgress.svg",
  "Backlog": "/images/Backlog.svg",
  "High": "/images/imgHighPriority.svg",
  "Low": "/images/imgLowPriority.svg",
  "Medium": "/images/imgMediumPriority.svg",
  "Urgent": "/images/urgentPriorityColour.svg",
  "No Priority": "/images/noPriority.svg"
};

const TicketColumn = ({ title, tickets, users }) => (
    <div className="ticket-column" 
        style={{
            flex: 1,
            borderRadius: "5px",
            padding: "1rem",
            fontFamily: '"Average", serif'
        }}
    >
      <div className="head" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <div style={{display: "flex", alignItems: "center"}}>
        {title in titleImage && (<img src={titleImage[title]} alt={`${title} icon`} style={{ width: '1rem', height: '1rem' }} />)}
          <h3 style={{marginInline: "1rem"}}>{title}</h3>
          <p>{tickets.length}</p>
        </div>
        <div>
          <img src="/images/add.svg" alt="" style={{marginInline: "1rem", width: "1.5rem", height: "1.5rem"}}/>
          <img src="/images/3dotMenu.svg" alt="" style={{width: "1.5rem", height: "1.5rem"}}/>
        </div>
      </div>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} user={users.find(u => u.id === ticket.userId)} />
      ))}
    </div>
  );

  
export default TicketColumn