"use client";
import { Dispatch, SetStateAction } from "react";

type DownloadButtonProps = {
  cardColor: string;
  setCardColor: Dispatch<SetStateAction<string>>;
};

const DownloadButton = ({ cardColor, setCardColor }: DownloadButtonProps) => {
  const pdfUrl = "/files/Services.pdf";

  const handleDownload = async () => {
    console.log("Click");

    try {
      const response = await fetch(pdfUrl, { method: "HEAD" });
      if (!response.ok) {
        alert("Archivo no encontrado.");
        return;
      }

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", "Services.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert("Error al descargar el archivo.");
    }
  };

  return (
    <button
      onClick={handleDownload}
      aria-label="Descargar PDF"
      className="px-6 py-2 rounded-full font-medium hover:bg-blend-darken hover:cursor-pointer text-black dark:text-white"
      style={{
        background: `linear-gradient(to top, ${cardColor}, #ffffff)`,
      }}
    >
      Descargar PDF
    </button>
  );
};

export default DownloadButton;
