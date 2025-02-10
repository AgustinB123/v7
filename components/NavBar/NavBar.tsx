"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "./ColumnaNavBar/Dropdown";
import { getData } from "./Data";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [items, setItems] = useState(getData().items);

  useEffect(() => {
    // Importa Bootstrap JavaScript solo en el cliente
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            {items.map((item, index) => (
              <li className="nav-item dropdown" key={index}>
                <DropdownButton
                  title={item.label1}
                  items={item.dropdownItems || []}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
