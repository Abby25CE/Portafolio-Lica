const Button = () => {
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
      className="px-6 py-2  rounded-full font-medium bg-linear-to-t to-blue-300 from-indigo-400   dark:to-blue-950 dark:from-emerald-900  transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
    >
      Descargar PDF
    </button>
  );
};

export default Button;
