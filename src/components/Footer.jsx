import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Column 1 */}
        <div className="footer-col footer-brand">
          <h3 className="footer-title">CS — Ticket System</h3>
          <p className="footer-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <a className="footer-link" href="#about">About Us</a>
          <a className="footer-link" href="#mission">Our Mission</a>
          <a className="footer-link" href="#contact">Contact Sales</a>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <a className="footer-link" href="#products">Products &amp; Services</a>
          <a className="footer-link" href="#stories">Customer Stories</a>
          <a className="footer-link" href="#apps">Download Apps</a>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4 className="footer-heading">Information</h4>
          <a className="footer-link" href="#privacy">Privacy Policy</a>
          <a className="footer-link" href="#terms">Terms &amp; Conditions</a>
          <a className="footer-link" href="#join">Join Us</a>
        </div>

        {/* Column 5 */}
        <div className="footer-col">
          <h4 className="footer-heading">Social Links</h4>

          <div className="social-item">
            <span className="social-icon">𝕏</span>
            <a className="footer-link" href="#x">@CS — Ticket System</a>
          </div>

          <div className="social-item">
            <span className="social-icon">in</span>
            <a className="footer-link" href="#linkedin">@CS — Ticket System</a>
          </div>

          <div className="social-item">
            <span className="social-icon">f</span>
            <a className="footer-link" href="#facebook">@CS — Ticket System</a>
          </div>

          <div className="social-item">
            <span className="social-icon">✉</span>
            <a className="footer-link" href="mailto:support@cst.com">support@cst.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}