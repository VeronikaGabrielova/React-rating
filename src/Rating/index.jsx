import React, { useState } from "react";
import Star from "../Star";
import "./style.css";

const Rating = () => {
  const [value, setValue] = useState(0);
  const handleSelect = (newValue) => {
    setValue(newValue);
    };

  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star rating={1} glowing={value >=1} onSelect={handleSelect} />
        <Star rating={2} glowing={value >=2} onSelect={handleSelect} />
        <Star rating={3} glowing={value >=3} onSelect={handleSelect} />
        <Star rating={4} glowing={value >=4} onSelect={handleSelect} />
        <Star rating={5} glowing={value >=5} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default Rating;
