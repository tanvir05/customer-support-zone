import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-brand">Customer Support</div>
          <div className="footer-copy">© {new Date().getFullYear()} All rights reserved.</div>
        </div>

        <div className="footer-right">
          <a href="#tickets">Tickets</a>
          <a href="#status">Task Status</a>
          <a href="#resolved">Resolved</a>
        </div>
      </div>
    </footer>
  );
}