import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface DropendProps {
  title: string;
  dropdownItems: {
    label3: string;
    href?: string;
    dropdownItems?: { label3: string; href?: string }[];
  }[];
}

const Dropend: React.FC<DropendProps> = ({ title, dropdownItems }) => {
  useEffect(() => {
    // Importa Bootstrap JavaScript solo en el cliente
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Log the props to see what data is being passed
  console.log("Dropend props:", { title, dropdownItems });

  return (
    <div className="btn-group dropend">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="dropdown-menu">
        {dropdownItems.map((item, index) => (
          <li key={index}>
            {item.dropdownItems ? (
              <Dropend title={item.label3} dropdownItems={item.dropdownItems} />
            ) : (
              <a className="dropdown-item" href={item.href || "#"}>
                {item.label3}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropend;
