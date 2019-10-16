import React, { useState } from "react";
import Slider from "./Slider";

export default function Sliders({ constraint = 25 }) {
  const [defectValue, setDefectValue] = useState(0);
  const [uxValue, setUxValue] = useState(0);
  const [visualValue, setVisualValue] = useState(0);
  const [featuresValue, setFeaturesValue] = useState(0);
  const [velocityValue, setVelocityValue] = useState(0);

  const pointsRemaining = () =>
    constraint -
    (defectValue + uxValue + visualValue + featuresValue + velocityValue);

  return (
    <div>
      <h1>Points Remaining: {pointsRemaining()}</h1>
      <Slider
        name="defect"
        label="Defect Free"
        value={defectValue}
        onChange={setDefectValue}
      />
      <Slider name="ux" label="Good UX" value={uxValue} onChange={setUxValue} />
      <Slider
        name="visual"
        label="Visually Stunning"
        value={visualValue}
        onChange={setVisualValue}
      />
      <Slider
        name="features"
        label="Lots of Features"
        value={featuresValue}
        onChange={setFeaturesValue}
      />
      <Slider
        name="velocity"
        label="Finish Fast"
        value={velocityValue}
        onChange={setVelocityValue}
      />
    </div>
  );
}
