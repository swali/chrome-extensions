(function () {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    #renderError {
      display: none !important;
    }`;
  document.head.appendChild(styleElement);
})();