import "./UploadPicture.css";

function UploadPicture({ insertImage, addHistory }) {
  return (
    <div className="UploadPicture">
      <h1>Upload PNG:</h1>
      <input
        type="file"
        accept="image/png"
        onChange={(event) => {
          const image = URL.createObjectURL(event.target.files[0]);
          insertImage(image);
          addHistory(image);
          event.target.value = "";
        }}
      />
    </div>
  );
}

export default UploadPicture;

