import "./QuickAdd.css";

function QuickAdd({ insertImage, removeHistory, image, index }) {
  return (
    <div className="QuickAdd">
      <img
        className="Image"
        src={image}
        alt=""
        onClick={() => {
          insertImage(image);
        }}
      />
      {removeHistory ? (
        <img
          className="Remove"
          onClick={() => {
            removeHistory(index);
          }}
          src={
            "https://api.iconify.design/ri:subtract-fill.svg?color=%23ff0000"
          }
          alt=""
        />
      ) : (
        <div />
      )}
    </div>
  );
}

export default QuickAdd;
