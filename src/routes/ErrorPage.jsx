const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "300" }}>Oops!!!</h1>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "200",
            borderLeft: "0.5px solid",
            paddingLeft: "20px",
            marginLeft: "15px",
            height: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          An error ocurred in the component tree
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
