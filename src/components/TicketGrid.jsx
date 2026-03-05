import TicketCard from "./TicketCard";
import "./ticketGrid.css";

export default function TicketGrid({ tickets, onSelectTicket }) {
  if (!tickets.length) {
    return <div className="empty">No tickets available.</div>;
  }

  return (
    <div className="ticket-grid" id="tickets">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onClick={() => onSelectTicket(ticket.id)}
        />
      ))}
    </div>
  );
}