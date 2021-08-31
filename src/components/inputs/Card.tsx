import React from "react";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  title: string;
  description: string;
  to: string;
}

const Card: React.FC<Props> = ({ image, title, description, to }) => {
  return (
    <div className="rounded bg-gray-700">
      <Link to={to}>
        <img className="rounded-t" src={image} alt="any" />
      </Link>
      <div className="p-4">
        <Link to={to}>
          <h3>{title}</h3>
        </Link>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default Card;
