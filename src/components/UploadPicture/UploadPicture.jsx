import "./UploadPicture.css";

function UploadPicture({ insertImage }) {
  return (
    <div className="UploadPicture">
      <input
        type="file"
        accept="image/png"
        onChange={(event) => {
          insertImage(event.target.files[0]);
          event.target.value = "";
        }}
      />
    </div>
  );
}

export default UploadPicture;

