import { WidgetWithPopover } from "./components/Buttons";
import { Menu } from "./components/menu/";
import { Container } from "./components/container";

export function App() {
  return (
    <div>
      <Menu />
      <Container />
      <WidgetWithPopover />
    </div>
  );
}
