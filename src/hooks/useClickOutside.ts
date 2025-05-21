import { useEffect } from "react";

/**
 * Hook que detecta clics fuera de un elemento referenciado o Escape key.
 * @param ref - Referencia al elemento que se debe observar.
 * @param callback - Función a ejecutar cuando se hace clic fuera o se presiona Escape.
 */
export const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, callback]);
};
