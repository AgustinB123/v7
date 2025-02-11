"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import InformeTable from "../../../components/InformeTable/InformeTable";

const InformesPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    if (title) {
      fetch(`/api/getFileContent?fileName=${title}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.content) {
            setContent(JSON.parse(data.content));
          } else {
            setContent({ error: data.error });
          }
        })
        .catch((error) => {
          console.error("Error fetching file content:", error);
          setContent({ error: "Error fetching file content" });
        });
    }
  }, [title]);

  return (
    <div>
      <h1>Informe: {title}</h1>
      {content ? (
        content.error ? (
          <p>{content.error}</p>
        ) : (
          <div>
            {content.imagen && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={content.imagen}
                  alt="Informe Imagen"
                  style={{ maxWidth: "200px", marginRight: "20px" }}
                />
                <h2>{content.titulo}</h2>
              </div>
            )}
            {!content.imagen && <h2>{content.titulo}</h2>}
            <div>
              <ul>
                {Object.entries(content.datos_generales).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
            <InformeTable data={content} />
          </div>
        )
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default InformesPage;
