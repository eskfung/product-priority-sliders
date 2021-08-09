import React from "react";
import { range } from "lodash";
import "./Slider.scss";

export default function Slider({
  name,
  label,
  value,
  onChange = () => {},
  min = 0,
  max = 10,
  step = 1
}) {
  return (
    <label className="Slider">
      <div>{label}</div>
      <div className="Slider__control">
        <input
          className="Slider__input"
          type="range"
          name={name}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={event => onChange(Number.parseInt(event.target.value))}
          list={name}
        />

        <datalist id={name}>
          {range(min, max + step, step).map(value => (
            <option key={value} value={value} label={value}></option>
          ))}
        </datalist>
        <span>{value}</span>
      </div>
    </label>
  );
}
