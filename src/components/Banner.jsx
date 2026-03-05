import "./banner.css";

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="banner">
      <div className="banner-inner">
        <div className="banner-left">
          <h1 className="banner-title">Ticket System Dashboard</h1>
          <p className="banner-subtitle">
            Track customer requests, move them to task status, and complete them fast.
          </p>
        </div>

        <div className="stats">
          <div className="stat-card">
            <div className="stat-label">In Progress</div>
            <div className="stat-value">{inProgressCount}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Resolved</div>
            <div className="stat-value">{resolvedCount}</div>
          </div>
        </div>
      </div>
    </section>
  );
}