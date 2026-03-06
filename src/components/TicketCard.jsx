import "./ticketCard.css";

function getStatusClass(status) {
  const s = (status || "").toLowerCase();
  if (s.includes("in-progress")) return "status status-progress";
  return "status status-open";
}

function getPriorityClass(priority) {
  const p = (priority || "").toLowerCase();
  if (p.includes("high")) return "priority priority-high";
  if (p.includes("medium")) return "priority priority-medium";
  return "priority priority-low";
}

export default function TicketCard({ ticket, onClick }) {
  return (
    <button className="ticket-card" type="button" onClick={onClick}>
      {/* Top row */}
      <div className="ticket-top">
        <h3 className="ticket-title">{ticket.title}</h3>
        <span className={getStatusClass(ticket.status)}>
          <span className="status-dot" />
          {ticket.status}
        </span>
      </div>

      {/* Middle */}
      <p className="ticket-desc">{ticket.description}</p>

      {/* Bottom row */}
      <div className="ticket-bottom">
        <span className="meta">{ticket.id}</span>

        <span className={getPriorityClass(ticket.priority)}>
          {ticket.priority}
        </span>

        <span className="meta meta-right">{ticket.customer}</span>

        <span className="meta meta-date">
          <span className="meta-icon">📅</span>
          {ticket.createdAt}
        </span>
      </div>
    </button>
  );
}