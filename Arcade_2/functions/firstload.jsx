import headerDiv from "../pages/header";
import home from "../pages/home";
import pageLoad from "./pageLoad";

const firstLoad = function () {
  const content = document.querySelector("#content");
  const header = headerDiv();
  content.appendChild(header);
  home();
  pageLoad();
};

export default firstLoad;
