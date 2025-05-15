//crear modelo del modalo que usaremos cuando utilizamos otros modales
const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div style={styles.modalOverlay}>
        <div style={styles.modalContent}>{children}</div>
      </div>
    </>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "600px",
    width: "90%",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    overflowY: "auto",
    maxHeight: "90vh",
  },
};

export default Modal;
