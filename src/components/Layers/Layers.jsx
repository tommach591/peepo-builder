import Layer from "../Layer/Layer";
import "./Layers.css";

function Layers({ uploadedImages, removeImage, swapImages, clearLayers }) {
  return (
    <div className="Layers">
      <div className="List">
        <h1>Layers</h1>
        {uploadedImages.map((image, i) => {
          return (
            <Layer
              key={i}
              removeImage={removeImage}
              swapImages={swapImages}
              image={image}
              index={i}
            />
          );
        })}
      </div>
      <button className="Clear" onClick={() => clearLayers()}>
        Clear Layers
      </button>
    </div>
  );
}

export default Layers;
