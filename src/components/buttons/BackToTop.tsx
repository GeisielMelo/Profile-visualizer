import NavigationIcon from "@mui/icons-material/Navigation";

const ButtonBackToTop: React.FC = () => {
  return (
    <button
      style={{
        position: "fixed",
        bottom: "10px",
        right: "20px",
        background: "none",
        color: "rgb(36, 41, 46)",
        cursor: "pointer",
        border: "1px solid",
        borderRadius: "50%",
        boxShadow: "rgba(2, 12, 27, 0.7) 0px 2px 5px",
        width: "26px",
        height: "26px",
        textAlign: "center",
      }}
      onClick={() => (window.location.href = "#")}
    >
      <NavigationIcon fontSize="small" />
    </button>
  );
};

export default ButtonBackToTop;
