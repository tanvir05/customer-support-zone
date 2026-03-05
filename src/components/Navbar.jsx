import "./navbar.css";

export default function Navbar({ onNewTicket }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="logo-badge">CS</div>
          <span className="brand-name">Customer Support</span>
        </div>

        <nav className="nav-links">
          <a href="#tickets">Tickets</a>
          <a href="#status">Task Status</a>
          <a href="#resolved">Resolved</a>
          <button className="btn-primary" onClick={onNewTicket}>
            New Ticket
          </button>
        </nav>
      </div>
    </header>
  );
}