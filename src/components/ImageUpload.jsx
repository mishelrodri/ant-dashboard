import { useState } from "react";

const ImageUploadPreview = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "image/png") {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("Solo se aceptan archivos PNG");
    }
  };

  const handleClearImage = () => setImage(null);

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
          onClick={() => document.getElementById("fileInput").click()}
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
        id="fileInput"
        type="file"
        accept="image/png"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUploadPreview;
