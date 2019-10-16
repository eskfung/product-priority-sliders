import React from "react";
import { range } from "lodash-es";

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
    <div>
      <label>
        {label}
        <input
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
      </label>
      <span>{value}</span>
    </div>
  );
}
