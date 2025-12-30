import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h2>Admin Dashboard</h2>

      <ul>
        <li>
          <Link to="/admin/orders">View Orders</Link>
        </li>
        <li>
          <Link to="/admin/clients">View Clients (Next)</Link>
        </li>
      </ul>
    </>
  );
}

export default Dashboard;
