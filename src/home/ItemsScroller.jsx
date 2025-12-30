function ItemsScroller() {
  return (
    <section style={styles.scroller}>
      <p>📦 All Items Scrolling Here</p>
    </section>
  );
}

const styles = {
  scroller: {
    height: "100px",
    background: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px"
  }
};

export default ItemsScroller;
