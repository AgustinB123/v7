import React from "react";

interface ImputsProps {
  values: string[];
  title: string;
  id: string;
}

const Imputs: React.FC<ImputsProps> = ({ values, title, id }) => {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {title}
      </label>
      <input
        className="form-control"
        list={`${id}Options`}
        id={id}
        placeholder="Escribe para buscar..."
      />
      <datalist id={`${id}Options`}>
        {values.map((value, index) => (
          <option key={index} value={value} />
        ))}
      </datalist>
    </div>
  );
};

export default Imputs;
