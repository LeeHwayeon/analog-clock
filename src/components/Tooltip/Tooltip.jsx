export default function Tooltip({ hours, minutes, seconds, position }) {
  const tooltipStyle = {
    left: `${position.x - 250}px`,
    top: `${position.y - 350}px`,
  };
  return (
    <div className="tooltip" style={tooltipStyle}>
      {hours}:{minutes < 10 ? "0" + minutes : minutes}:
      {seconds < 10 ? "0" + seconds : seconds}
    </div>
  );
}
