import { Samples } from "../../utils/GetSamples";
import QuickAdd from "../QuickAdd";
import "./Presets.css";

function Presets({ insertImage }) {
  const samples = Samples;
  return (
    <div className="Presets">
      <h1>Presets</h1>
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
