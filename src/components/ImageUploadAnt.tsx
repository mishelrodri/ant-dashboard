import { message } from "antd";
import React, { useState, useRef } from "react";

interface FormWithImageUploadAntProps {
  value?: string | null; // La imagen puede ser una URL/Base64 o nula.
  onChange?: (value: string | null) => void; // Función para notificar cambios al padre.
}

export const FormWithImageUploadAnt: React.FC<FormWithImageUploadAntProps> = ({
  value = null,
  onChange,
}) => {
  const [image, setImage] = useState<string | null>(value);
  const fileInputRef = useRef<HTMLInputElement>(null); // Referencia al input de tipo file.

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Verificar el tipo de archivo
    const validTypes = ["image/png", "image/jpeg"];
    if (!validTypes.includes(file.type)) {
      message.error("Solo se aceptan archivos PNG y JPEG");
      return;
    }

    // Verificar el tamaño del archivo
    const maxSizeInMB = 3;
    if (file.size > maxSizeInMB * 1024 * 1024) {
      message.error(`El archivo debe ser menor a ${maxSizeInMB} MB`);
      return;
    }

    // Leer el archivo si pasa las validaciones
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setImage(result);
      onChange?.(result); // Notifica el cambio al padre
      message.success("¡Imagen cargada con éxito!");
    };
    reader.readAsDataURL(file);
  };

  const handleClearImage = () => {
    setImage(null);
    onChange?.(null); // Limpia el valor del formulario.
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reinicia el valor del input.
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        <div
          style={{
            width: "300px",
            height: "300px",
            border: "2px solid #FF7F7F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8f8f8",
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          ) : (
            <p>Preview</p>
          )}
        </div>
        <div style={{ marginTop: "8px", textAlign: "center" }}>
          <p>Solo se aceptan archivos PNG</p>
        </div>
      </div>

      <div style={{ marginLeft: "16px" }}>
        <button
          onClick={() => fileInputRef.current?.click()}
          style={{
            fontSize: "20px",
            marginBottom: "8px",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          +
        </button>
        <br />
        <button
          onClick={handleClearImage}
          style={{
            fontSize: "20px",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          -
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept=".png, .jpeg"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};
