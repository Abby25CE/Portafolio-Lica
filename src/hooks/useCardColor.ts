// hooks/useCardColor.ts
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "profileCardColor";

export const useCardColor = () => {
  const [cardColor, setCardColor] = useState("#1f193d");

  // Leer el color desde localStorage al montar
  useEffect(() => {
    const storedColor = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedColor) {
      setCardColor(storedColor);
    }
  }, []);

  // Guardar en localStorage al cambiar
  const handleColorChange = (color: string) => {
    setCardColor(color);
    localStorage.setItem(LOCAL_STORAGE_KEY, color);
  };

  return { cardColor, handleColorChange, setCardColor };
};
