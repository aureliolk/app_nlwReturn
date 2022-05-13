import { WidgetWithPopover } from "./components/Buttons";
import { Menu } from "./components/menu/";
import { Container } from "./components/container";
import { Footer } from "./components/footer";

export function App() {
  return (
    <div>
      <Menu />
      <Container />
      <WidgetWithPopover />
      <Footer />
    </div>
  );
}
