// BarIcon.jsx
const BarIcon = ({ open }) => (
    <div className={`bar-icon ${open ? "open" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
  
  export default BarIcon;
  