import "./App.css";
import { useCallback, useState } from "react";
import UploadPicture from "../UploadPicture";
import Layers from "../Layers";
import MyCanvas from "../MyCanvas/MyCanvas";

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);

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
    (i, j) => {
      let newUploadedImages = [...uploadedImages];
      [newUploadedImages[i], newUploadedImages[j]] = [
        newUploadedImages[j],
        newUploadedImages[i],
      ];
      setUploadedImages(newUploadedImages);
    },
    [uploadedImages]
  );

  return (
    <div className="App">
      <div className="Selection">
        <UploadPicture insertImage={insertImage} />
        <div className="Sample"></div>
      </div>
      <div className="Display">
        <Layers
          uploadedImages={uploadedImages}
          removeImage={removeImage}
          swapImages={swapImages}
        />
        <MyCanvas uploadedImages={uploadedImages} />
      </div>
    </div>
  );
}

export default App;

