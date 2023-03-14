import "./Layer.css";
import { useDrag, useDrop } from "react-dnd";

function Layer({ removeImage, swapImages, image, index }) {
  // eslint-disable-next-line no-unused-vars
  const [collected, dragRef, dragPreview] = useDrag(
    () => ({
      type: "LAYER",
      item: { index: index },
    }),
    [index]
  );

  // eslint-disable-next-line no-unused-vars
  const [collectedProps, dropRef] = useDrop(
    () => ({
      accept: "LAYER",
      drop: (item, monitor) => {
        swapImages(index, item.index);
      },
      collect: (monitor) => {
        return {
          highlight: monitor.canDrop(),
        };
      },
    }),
    [index, swapImages]
  );

  return (
    <div
      className="Layer"
      ref={(el) => {
        dragRef(el);
        dropRef(el);
      }}
    >
      <img className="Image" src={URL.createObjectURL(image)} alt="" />
      <img
        className="Remove"
        onClick={() => removeImage(index)}
        src={"https://api.iconify.design/ri:subtract-fill.svg?color=%23ff0000"}
        alt=""
      />
    </div>
  );
}

export default Layer;
