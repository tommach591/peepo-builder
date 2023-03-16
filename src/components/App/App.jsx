import "./App.css";
import { useCallback, useState } from "react";
import UploadPicture from "../UploadPicture";
import Layers from "../Layers";
import MyCanvas from "../MyCanvas";
import History from "../History";
import Presets from "../Presets";

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [history, setHistory] = useState([]);

  const addHistory = useCallback(
    (newImage) => {
      setHistory([newImage, ...history]);
    },
    [history]
  );

  const removeHistory = useCallback(
    (index) => {
      let newHistory = [...history];
      newHistory.splice(index, 1);
      setHistory(newHistory);
    },
    [history]
  );

  const insertImage = useCallback(
    (newImage) => {
      setUploadedImages([newImage, ...uploadedImages]);
    },
    [uploadedImages]
  );

  const removeImage = useCallback(
    (index) => {
      let newUploadedImages = [...uploadedImages];
      newUploadedImages.splice(index, 1);
      setUploadedImages(newUploadedImages);
    },
    [uploadedImages]
  );

  const swapImages = useCallback(
    (to, from) => {
      let newUploadedImages = [...uploadedImages];
      newUploadedImages.splice(to, 0, newUploadedImages.splice(from, 1));
      setUploadedImages(newUploadedImages);
    },
    [uploadedImages]
  );

  return (
    <div className="App">
      <div className="Header">
        <h1>Peepo Builder</h1>
      </div>
      <div className="Bottom">
        <div className="Selection">
          <Presets insertImage={insertImage} />
          <History
            history={history}
            insertImage={insertImage}
            removeHistory={removeHistory}
          />
          <UploadPicture insertImage={insertImage} addHistory={addHistory} />
          <h2>Canvas Size: 1000x1000px</h2>
        </div>
        <div className="Display">
          <MyCanvas uploadedImages={uploadedImages} />
          <Layers
            uploadedImages={uploadedImages}
            removeImage={removeImage}
            swapImages={swapImages}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

