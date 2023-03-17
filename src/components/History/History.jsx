import QuickAdd from "../QuickAdd";
import "./History.css";

function History({ history, insertImage, removeHistory }) {
  return (
    <div className="History">
      <h1>Uploaded</h1>
      <div className="HistoryGrid">
        {history.map((image, i) => {
          return (
            <QuickAdd
              key={i}
              insertImage={insertImage}
              removeHistory={removeHistory}
              image={image}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default History;
