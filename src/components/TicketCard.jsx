import "./ticketCard.css";

function pillClass(priority) {
  if (priority === "High") return "pill pill-high";
  if (priority === "Medium") return "pill pill-medium";
  return "pill pill-low";
}

export default function TicketCard({ ticket, onClick }) {
  return (
    <button className="ticket-card" onClick={onClick} type="button">
      <div className="ticket-top">
        <div className="ticket-id">{ticket.id}</div>
        <div className={pillClass(ticket.priority)}>{ticket.priority}</div>
      </div>

      <h3 className="ticket-title">{ticket.title}</h3>
      <p className="ticket-desc">{ticket.description}</p>

      <div className="ticket-meta">
        <div className="meta-row">
          <span className="meta-label">Customer</span>
          <span className="meta-value">{ticket.customer}</span>
        </div>
        <div className="meta-row">
          <span className="meta-label">Status</span>
          <span className="meta-value">{ticket.status}</span>
        </div>
        <div className="meta-row">
          <span className="meta-label">Created</span>
          <span className="meta-value">{ticket.createdAt}</span>
        </div>
      </div>
    </button>
  );
}