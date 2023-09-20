import "./Tile.css";

const Tile = ({ selected, matched, color, svg }) => {
  const dynamicColor = selected || matched ? { backgroundColor: color } : null;

  return (
    <div className="Tile" style={dynamicColor}>
      {selected || matched ? <svg>{svg}</svg> : null}
    </div>
  );
};

export default Tile;
