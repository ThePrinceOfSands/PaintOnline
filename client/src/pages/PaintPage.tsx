import { Toolbar } from "../components/Toolbar";
import { SettingBar } from "../components/SettingBar";
import { Canvas } from "../components/Canvas";

const PaintPage = () => {
  return (
    <div className="app">
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
};

export default PaintPage;
