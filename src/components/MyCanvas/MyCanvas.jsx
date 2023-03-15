import "./MyCanvas.css";
import { useEffect, useState } from "react";
import mergeImages from "merge-images";
import Blank from "../../assets/blank.png";

function MyCanvas({ uploadedImages }) {
  const [mergedImage, setMergedImage] = useState();

  useEffect(() => {
    const imageToURL = [];
    imageToURL.unshift(Blank);
    for (const image of uploadedImages) imageToURL.unshift(image);
    mergeImages(imageToURL).then((result) => setMergedImage(result));
  }, [uploadedImages]);

  return (
    <div className="MyCanvas">
      <img src={mergedImage} alt="" />
      <a className="Download" href={mergedImage} download="mypeepo">
        <button type="button">Download</button>
      </a>
    </div>
  );
}

export default MyCanvas;
