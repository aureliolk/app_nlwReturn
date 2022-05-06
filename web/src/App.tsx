import { Buttons, Widget, WidgetWithPopover } from "./components/Buttons";

export function App() {
  return (
    <div>
      <div>
        <span>You is Developers</span>
        <div className="flex gap-1">
          <Buttons text="Clique My" />
          <Buttons text="Reload My" />
          <Buttons text="Start My" />
        </div>
      </div>
      <div>
        {/* <Widget /> */}
        <WidgetWithPopover />
      </div>
    </div>
  );
}
