import { Link } from "react-router-dom";

function ItemsPreview() {
  return (
    <section style={styles.section}>
      <h3>Items We Provide</h3>

      <ul>
        <li>Cable Route & Identification Items</li>
        <li>Earthing Items</li>
        <li>Cable Protection Items</li>
        <li>RCC & Civil Items</li>
      </ul>

      <Link to="/items">Explore More →</Link>
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

export default ItemsPreview;
