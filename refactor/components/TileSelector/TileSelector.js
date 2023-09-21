import React from "react";
import "./TileSelector.css";
import useHover from "../../hooks"; // Import useHover

function TileSelector({ numTiles, handleNumTileChange }) {
  const [ref, hovered] = useHover(); // Array destructuring assignment to assign the ref and hovered values returned from useHover()

  // Open the dropdown when the user clicks on the number of tiles
  const handleNumTilesClick = () => {
    ref.current.classList.add("open");
  };

  // Close the dropdown when the user clicks outside of the dropdown
  const handleOutsideClick = (event) => {
    if (!ref.current.contains(event.target)) {
      ref.current.classList.remove("open");
    }
  };

  // Change the number of tiles when the user selects a new number from the dropdown
  const handleNumTileSelect = (event) => {
    const newNumTiles = parseInt(event.target.textContent);
    handleNumTileChange(newNumTiles);
  };

  const dropdown = (
    <div className="tileSelectorContent">
      {/* Add an onClick attribute to each of the <div>'s with a class name of 'number' and pass to it an anonymous function that calls the handleNumTileChange() function from props, adding the number that's rendered in each of the <div>s to its respective call of handleNumTileChange() */}
      <div className="number" onClick={() => handleNumTileChange(4)}>
        4
      </div>
      <div className="number" onClick={() => handleNumTileChange(16)}>
        16
      </div>
      <div className="number" onClick={() => handleNumTileChange(36)}>
        36
      </div>
    </div>
  );

  // Close the dropdown when the user clicks outside of the dropdown
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ref]);

  // Add a ref attribute to the <div> with a className of 'tileSelectorDropdown'
  // The value of the prop should be the ref we destructured in the last task.
  return (
    <div className="tileSelector">
      <div>Number of Tiles</div>
      <div className="tileSelectorDropdown" ref={ref}>
        {numTiles}
        {hovered ? dropdown : null}
      </div>
    </div>
  );
}

export default TileSelector;
