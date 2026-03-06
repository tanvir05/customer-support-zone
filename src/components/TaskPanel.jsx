import "./taskPanel.css";

export default function TaskPanel({ inProgress, resolved, onComplete }) {
  return (
    <div className="panel">
      {/* Task Status (In Progress) */}
      <div className="panel-section" id="status">
        <div className="panel-header">
          <h2 className="section-title">Task Status</h2>
          <span className="badge">{inProgress?.length || 0}</span>
        </div>

        {!inProgress || inProgress.length === 0 ? (
          <div className="panel-empty">Click any ticket card to add it here.</div>
        ) : (
          <div className="task-list">
            {inProgress.map((t) => (
              <div className="task-item" key={t.id}>
                <div className="task-title">{t.title}</div>

                <button
                  className="btn-complete"
                  type="button"
                  onClick={() => onComplete(t.id)}
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resolved List */}
      <div className="panel-section" id="resolved">
        <div className="panel-header">
          <h2 className="section-title">Resolved List</h2>
          <span className="badge">{resolved?.length || 0}</span>
        </div>

        {!resolved || resolved.length === 0 ? (
          <div className="panel-empty">No resolved tickets yet.</div>
        ) : (
          <div className="resolved-list">
            {resolved.map((t) => (
              <div className="resolved-item" key={t.id}>
                <div className="resolved-title">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}