"use client";
import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { MdFormatColorReset, MdInvertColors } from "react-icons/md";

type ColorPickerProps = {
  color: string;
  onColorChange: (color: string) => void;
};

const ColorPicker = ({ color, onColorChange }: ColorPickerProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Cierra el picker al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    };

    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);

  return (
    <div
      className="flex flex-col items-center mb-4 z-50 relative "
      ref={pickerRef}
    >
      {showPicker && (
        <div className="absolute top-14 right-1 mb-4 z-50 p-4 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-700 ">
          <HexColorPicker color={color} onChange={onColorChange} />
          <p className="text-xs mt-2 text-center text-gray-600 dark:text-gray-300">
            {color}
          </p>
        </div>
      )}

      <button
        onClick={() => setShowPicker((prev) => !prev)}
        className="px-3 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-md hover:shadow-lg transition hover:cursor-pointer"
      >
        {showPicker ? <MdFormatColorReset /> : <MdInvertColors />}
      </button>
    </div>
  );
};

export default ColorPicker;
