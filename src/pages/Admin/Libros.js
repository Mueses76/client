import React, { useState, useEffect } from "react";
import LibrosList from "../../components/Admin/Libros/LibrosList";
import { getLibrosApi } from "../../api/libro";

export default function Libros() {
  const [libros, setLibros] = useState([]);
  const [reloadLibros, setReloadLibros] = useState(false);

  useEffect(() => {
    getLibrosApi().then((response) => {
      setLibros(response.libros);
    });
    setReloadLibros(false);
  }, [reloadLibros]);

  return (
    <div className="libros">
      <LibrosList libros={libros} setReloadLibros={setReloadLibros} />
    </div>
  );
}
