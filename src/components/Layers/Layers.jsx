import Layer from "../Layer/Layer";
import "./Layers.css";

function Layers({ uploadedImages, removeImage, swapImages }) {
  return (
    <div className="Layers">
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
  );
}

export default Layers;
