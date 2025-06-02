"use client";
import ThemeToggle from "@/containers/ThemeToggle";
import React from "react";
import ColorPicker from "./ButtonColor";
import { FlipClock } from "@/containers/FlipClock";

type HeaderBarProps = {
  color: string;
  onColorChange: (color: string) => void;
};

const HeaderBar = ({ color, onColorChange }: HeaderBarProps) => {
  return (
    <div className="absolute top-2 left-0 w-full px-4">
      <div className="flex items-center justify-between">
        <ThemeToggle />
        <FlipClock />
        <ColorPicker color={color} onColorChange={onColorChange} />
      </div>
    </div>
  );
};

export default HeaderBar;
