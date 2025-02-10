import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropend from "./Dropend/Dropend";
import { useRouter } from "next/navigation";

interface DropdownItem {
  label2: string;
  href?: string;
  dropdownItems?: { label3: string; href?: string }[];
}

interface DropdownButtonProps {
  title: string;
  items: DropdownItem[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ title, items }) => {
  const router = useRouter();

  useEffect(() => {
    // Importa Bootstrap JavaScript solo en el cliente
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const handleItemClick = (label: string) => {
    router.push(`/informes?title=${encodeURIComponent(label)}`);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {items.map((item, index) => (
          <li key={index}>
            {item.dropdownItems ? (
              <Dropend title={item.label2} dropdownItems={item.dropdownItems} />
            ) : (
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleItemClick(item.label2)}
              >
                {item.label2}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownButton;
