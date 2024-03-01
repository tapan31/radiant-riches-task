import BreadCrumbs from "./BreadCrumbs";
import LastUpdated from "./LastUpdated";
import Products from "./Products";
import ToolsNav from "./ToolsNav";

function MainContent() {
  return (
    <main>
      <h1 className="text-3xl sm:text-5xl">Best Website builders in the US</h1>
      <LastUpdated />
      <ToolsNav />
      <BreadCrumbs />
      <Products />
    </main>
  );
}

export default MainContent;
