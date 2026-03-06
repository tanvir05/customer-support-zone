import "./navbar.css";

export default function Navbar({ onNewTicket }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        {/* Left */}
        <div className="brand">
          <span className="brand-name">CS - Ticket System</span>
        </div>

        {/* Right */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#faq">FAQ</a>
          <a href="#changelog">Changelog</a>
          <a href="#blog">Blog</a>
          <a href="#download">Download</a>
          <a href="#contact">Contact</a>

          <button className="btn-primary" type="button" onClick={onNewTicket}>
            + New Ticket
          </button>
        </nav>
      </div>
    </header>
  );
}