const LoadingComponent = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}
  >
    <p style={{ color: "#FFF" }}>Loading...</p>
  </div>
);

export default LoadingComponent;
