import "./Presets.css";
import { useEffect, useState } from "react";
import {
  getBody,
  getHair,
  getFace,
  getTop,
  getBottom,
  getShoes,
  getAccessory,
} from "../../utils/GetSamples";
import QuickAdd from "../QuickAdd";

function Presets({ insertImage }) {
  const [type, setType] = useState("body");
  const [samples, setSamples] = useState([]);

  const icons = {
    body: "https://api.iconify.design/ion:body.svg",
    hair: "https://api.iconify.design/mingcute:hair-2-fill.svg",
    face: "https://api.iconify.design/ic:sharp-tag-faces.svg",
    top: "https://api.iconify.design/tabler:shirt-filled.svg",
    bottoms:
      "https://api.iconify.design/icon-park-solid:clothes-pants-short.svg",
    shoes: "https://api.iconify.design/icon-park-solid:high-heeled-shoes.svg",
    accessory: "https://api.iconify.design/material-symbols:star.svg",
  };

  useEffect(() => {
    switch (type) {
      case "body": {
        setSamples(getBody());
        break;
      }
      case "hair": {
        setSamples(getHair());
        break;
      }
      case "face": {
        setSamples(getFace());
        break;
      }
      case "top": {
        setSamples(getTop());
        break;
      }
      case "bottom": {
        setSamples(getBottom());
        break;
      }
      case "shoes": {
        setSamples(getShoes());
        break;
      }
      case "accessory": {
        setSamples(getAccessory());
        break;
      }
      default: {
        setSamples(getBody());
        break;
      }
    }
  }, [type]);

  return (
    <div className="Presets">
      <div className="PresetsHeader">
        {Object.entries(icons).map(([key, value]) => {
          return (
            <img
              className="SelectType"
              key={key}
              onClick={() => setType(key)}
              src={value}
              alt=""
              style={
                type === key
                  ? { background: "rgb(255, 240, 210)" }
                  : { background: "white" }
              }
            />
          );
        })}
      </div>
      <div className="PresetsGrid">
        {samples.map((image, i) => {
          return (
            <QuickAdd
              key={i}
              insertImage={insertImage}
              image={image}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Presets;
