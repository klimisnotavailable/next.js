import styles from "./StatusLabel.module.css";

const StatusLabel = ({ status, style }) => {
  return (
    <div className={`${styles.statusLabel}`} style={style}>
      <div
        className={`${styles.statusCont} ${
          status ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
        }`}
      >
        <p className={`flex items-center justify-center ${styles.status}`}>
          <span>•</span> {status ? "Active" : "Not Active"}
        </p>
      </div>
    </div>
  );
};

export default StatusLabel;
