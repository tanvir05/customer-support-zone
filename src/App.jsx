import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketGrid from "./components/TicketGrid";
import TaskPanel from "./components/TaskPanel";
import Footer from "./components/Footer";

import { initialTickets } from "./data/tickets";
import "./styles/app.css";

export default function App() {
  // Customer tickets list (left). This list will shrink when tickets are resolved.
  const [tickets, setTickets] = useState(initialTickets);

  // Task Status section (right): “In Progress”
  const [inProgress, setInProgress] = useState([]);

  // Resolved list (right)
  const [resolved, setResolved] = useState([]);

  const inProgressCount = inProgress.length;
  const resolvedCount = resolved.length; // default starts at 0

  const ticketsById = useMemo(() => {
    const map = new Map();
    tickets.forEach((t) => map.set(t.id, t));
    return map;
  }, [tickets]);

  const handleNewTicket = () => {
    toast.info("New Ticket button clicked (hook up a form/modal if needed).", {
      position: "top-right",
    });
  };

  const addToInProgress = (ticketId) => {
    const ticket = ticketsById.get(ticketId);
    if (!ticket) return;

    const alreadyInProgress = inProgress.some((t) => t.id === ticketId);
    const alreadyResolved = resolved.some((t) => t.id === ticketId);

    if (alreadyResolved) {
      toast.info("This ticket is already resolved.", { position: "top-right" });
      return;
    }

    if (alreadyInProgress) {
      toast.info("This ticket is already in progress.", { position: "top-right" });
      return;
    }

    const updatedTicket = { ...ticket, status: "In Progress" };
    setInProgress((prev) => [updatedTicket, ...prev]);

    toast.success(`Added to Task Status: "${ticket.title}"`, { position: "top-right" });
  };

  const completeTicket = (ticketId) => {
    const ticket = inProgress.find((t) => t.id === ticketId);
    if (!ticket) return;

    // Remove from inProgress
    setInProgress((prev) => prev.filter((t) => t.id !== ticketId));

    // Add to resolved
    const resolvedTicket = { ...ticket, status: "Resolved" };
    setResolved((prev) => [resolvedTicket, ...prev]);

    // Remove from customer tickets list (requirement)
    setTickets((prev) => prev.filter((t) => t.id !== ticketId));

    toast.success(`Completed: "${ticket.title}"`, { position: "top-right" });
  };

  return (
    <div className="app-shell">
      <ToastContainer />
      <Navbar onNewTicket={handleNewTicket} />

      <main className="app-main">
        <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />

        <section className="content">
          <div className="left-col">
            <h2 className="section-title">Customer Tickets</h2>
            <TicketGrid tickets={tickets} onSelectTicket={addToInProgress} />
          </div>

          <div className="right-col">
            <TaskPanel
              inProgress={inProgress}
              resolved={resolved}
              onComplete={completeTicket}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}