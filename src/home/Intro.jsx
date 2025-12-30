function Intro() {
  return (
    <section style={styles.section}>
      <h2>Welcome to BL Engineering Works</h2>
      <p>
        We are specialized in Railway Civil, S&T and Electrical works.
        Our company delivers reliable, quality-driven infrastructure
        solutions across India.
      </p>
    </section>
  );
}

const styles = {
  section: {
    background: "#fff",
    padding: "30px",
    marginBottom: "20px",
    borderRadius: "6px"
  }
};

export default Intro;
