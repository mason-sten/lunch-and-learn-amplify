import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title?: string;
  description?: string | null;
  to: string;
}

const Row: React.FC<Props> = ({ title, description, to }) => {
  return (
    <div className="py-2">
      <Link to={to} className="text-primary">
        <h3>{title}</h3>
      </Link>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default Row;
