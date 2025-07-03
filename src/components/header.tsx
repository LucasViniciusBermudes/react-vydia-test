// components/Header.tsx
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1B3C53] text-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        <h1 className="text-xl font-bold uppercase select-none">
          Lista de Usuários
        </h1>
      </div>
    </header>
  );
}
