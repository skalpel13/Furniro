import React from "react";
import "../style/Overlay.css";

export default function Overlay() {
  const [overlayActive, setOverlayActive] = useState(false);

  const toggleOverlay = () => {
    setOverlayActive(!overlayActive);
  };

  return (
    <div className="overlay-container">
      {overlayActive && (
        <div className="overlay">
          <div className="content">
            <h2>Overlay Content</h2>
            <p>This is the content of the overlay.</p>
          </div>
        </div>
      )}
    </div>
  );
}
