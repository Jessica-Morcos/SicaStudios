import { useState } from "react";
import "./SwitcherBar.css";

export default function SwitcherBar() {
  const [active, setActive]           = useState("designer");
  const [transitioning, setTransitioning] = useState(false);

  const handleDeveloper = () => {
    if (transitioning || active === "developer") return;
    setTransitioning(true);
    setActive("developer");
    setTimeout(() => {
      // window.open("https://jessicamorcos.com", "_blank");
      window.open("http://localhost:5175/", "_blank");
      setTimeout(() => {
        setActive("designer");
        setTransitioning(false);
      }, 600);
    }, 500);
  };

  const handleDesigner = () => {
    if (active === "designer") return;
    setActive("designer");
  };

  return (
    <div className="mode-switcher">
      <div className="mode-pill mono">
        <span className={`mode-thumb ${active === "designer" ? "right" : ""}`} />
        <button
          className={`mode-option ${active === "developer" ? "active" : ""}`}
          onClick={handleDeveloper}
          disabled={transitioning}
        >
          Developer
        </button>
        <span className="mode-sep">&lt;/&gt;</span>
        <button
          className={`mode-option ${active === "designer" ? "active" : ""}`}
          onClick={handleDesigner}
        >
          Designer
        </button>
      </div>
    </div>
  );
}
