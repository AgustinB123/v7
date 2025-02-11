"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Pantalla from "../../../components/PantallaInformes/Pantalla";

const InformesPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    if (title) {
      setContent(null); // Limpiar el estado actual
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
          <Pantalla data={content} />
        )
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default InformesPage;
