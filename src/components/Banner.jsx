import "./banner.css";

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="banner">
      <div className="banner-grid">

        <div className="stat-card stat-progress">
          <div className="stat-content">
            <div className="stat-label">In-Progress</div>
            <div className="stat-value">{inProgressCount}</div>
          </div>
        </div>


        <div className="stat-card stat-resolved">
          <div className="stat-content">
            <div className="stat-label">Resolved</div>
            <div className="stat-value">{resolvedCount}</div>
          </div>
        </div>
      </div>
    </section>
  );
}