import { Link } from "react-router-dom";

function WorksPreview() {
  return (
    <section style={styles.section}>
      <h3>Our Works</h3>

      <ul>
        <li>Civil Works – Trenching</li>
        <li>Civil Works – Foundations</li>
        <li>RCC & Chamber Works</li>
        <li>S&T Works</li>
      </ul>

      <Link to="/works">Explore More →</Link>
    </section>
  );
}

const styles = {
  section: {
    background: "#fff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "6px"
  }
};

export default WorksPreview;
