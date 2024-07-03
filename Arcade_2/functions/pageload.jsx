
const pageLoad = function () {
  const pageLoad = document.querySelector(".pageLoad");
  for (let i = 1; i < 12; i++) {
    load(i);
  }
  function load(i) {
    setTimeout(function () {
      if (i < 11) {
        pageLoad.setAttribute("loadimg", i);
      } else {
        pageLoad.className = "animated";
      }
    }, i * 70);
  }
};

export default pageLoad;
