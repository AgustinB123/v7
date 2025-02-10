"use client"; // Añade esta línea al principio del archivo

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnaNavBar from "../ColumnaNavBar/ColumnaNavBar";

interface DropdownItem {
  label: string;
  href?: string;
  dropdownItems?: DropdownItem[];
}

const NavBar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<DropdownItem[]>([]);

  useEffect(() => {
    // Importa Bootstrap JavaScript solo en el cliente
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    // Fetch the JSON data
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data.items);
      });
  }, []);

  const renderDropdownItems = (items: DropdownItem[]) => {
    return items.map((item, index) => {
      if (item.dropdownItems) {
        return (
          <li className="nav-item" key={index}>
            <ColumnaNavBar
              title={item.label}
              items={item.dropdownItems.map((subItem) => ({
                label: subItem.label,
                href: subItem.href || "#",
              }))}
            />
          </li>
        );
      } else {
        return (
          <li className="nav-item" key={index}>
            <ColumnaNavBar
              title={item.label}
              items={[
                { label: "Label 1", href: "#" },
                { label: "Label 2", href: "#" },
                { label: "Label 3", href: "#" },
                { label: "Label 4", href: "#" },
                { label: "Label 5", href: "#" },
              ]}
            />
          </li>
        );
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          FPA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {renderDropdownItems(menuItems)}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
