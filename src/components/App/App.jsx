import "./App.css";
import { useCallback, useState } from "react";
import { useMobile } from "../../utils/useMobile";
import UploadPicture from "../UploadPicture";
import Layers from "../Layers";
import MyCanvas from "../MyCanvas";
import History from "../History";
import Presets from "../Presets";

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [history, setHistory] = useState([]);
  const isMobile = useMobile();

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

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

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

  const clearLayers = useCallback(() => {
    setUploadedImages([]);
  }, []);

  const getMobile = () => {
    return (
      <div className="App">
        <div className="Header">
          <h1>Peepo Builder</h1>
        </div>
        <div className="Bottom">
          <div className="Selection">
            <div className="Display">
              <MyCanvas uploadedImages={uploadedImages} />
              <Layers
                uploadedImages={uploadedImages}
                removeImage={removeImage}
                swapImages={swapImages}
                clearLayers={clearLayers}
              />
            </div>
            <Presets insertImage={insertImage} />
            <History
              history={history}
              insertImage={insertImage}
              removeHistory={removeHistory}
            />
            <button className="Clear" onClick={() => clearHistory()}>
              Clear History
            </button>
            <UploadPicture insertImage={insertImage} addHistory={addHistory} />
            <h2>Canvas size: 1000x1000px</h2>
          </div>
        </div>
      </div>
    );
  };

  const getWeb = () => {
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
            <button className="Clear" onClick={() => clearHistory()}>
              Clear History
            </button>
            <UploadPicture insertImage={insertImage} addHistory={addHistory} />
            <h2>Canvas size: 1000x1000px</h2>
          </div>
          <div className="Display">
            <MyCanvas uploadedImages={uploadedImages} />
            <Layers
              uploadedImages={uploadedImages}
              removeImage={removeImage}
              swapImages={swapImages}
              clearLayers={clearLayers}
            />
          </div>
        </div>
      </div>
    );
  };

  return isMobile ? getMobile() : getWeb();
}

export default App;

