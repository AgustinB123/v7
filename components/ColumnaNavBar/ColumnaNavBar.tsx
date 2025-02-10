import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface ColumnaNavBarProps {
  title: string;
  items: { label: string; href: string }[];
}

const ColumnaNavBar: React.FC<ColumnaNavBarProps> = ({ title, items }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="dropdown-menu">
        {items.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColumnaNavBar;
