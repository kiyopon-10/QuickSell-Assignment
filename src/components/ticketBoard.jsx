import React from "react";
import TicketColumn from "./ticketColumn";

const TicketBoard = ({ groupBy, sortBy }) => {
    const [tickets, setTickets] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    const priorityNaming = {
      0: "No Priority",
      1: "Low",
      2: "Medium",
      3: "High",
      4: "Urgent"
    };

    const priorityOrder = {
      "No Priority": 0,
      "Low": 1,
      "Medium": 2,
      "High": 3,
      "Urgent": 4
    };
  
    React.useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      };
      fetchData();
    }, []);


    const groupTickets = () => {
      const grouped = tickets.reduce((groups, ticket) => {
        const groupKey = groupBy === "user"
          ? users.find(user => user.id === ticket.userId)?.name || "Unknown User"
          : groupBy === "priority"
          ? priorityNaming[ticket.priority]
          : ticket.status;
        
        if (!groups[groupKey]) groups[groupKey] = [];
        groups[groupKey].push(ticket);
        return groups;
      }, {});

      const sortedGrouped = Object.keys(grouped)
      .sort((a, b) => {
        if (groupBy === "priority") {
          return priorityOrder[a] - priorityOrder[b];
        }
        return a.localeCompare(b);
      })
      .reduce((sortedGroups, key) => {
        sortedGroups[key] = grouped[key];
        return sortedGroups;
      }, {});

      Object.keys(sortedGrouped).forEach((groupKey) => {
        sortedGrouped[groupKey].sort((a, b) => {
          if (sortBy === "priority") {
            return b.priority - a.priority;
          } else if (sortBy === "title") {
            return a.title.localeCompare(b.title);
          }
          return 0;
        });
      });

      return sortedGrouped;
    };
  
    const groupedTickets = groupTickets();
  
    return (
      <div className="ticket-board"
        style={{
          position: "absolute", display: "flex", justifyContent: "space-evenly", gap: "1rem", backgroundColor: "#e4e6eb",
          fontFamily: '"Average", serif'
        }}
      >
        {Object.keys(groupedTickets).map((groupKey) => (
          <TicketColumn key={groupKey} title={groupKey} tickets={groupedTickets[groupKey]} users={users} />
        ))}
      </div>
    );
  };

export default TicketBoard