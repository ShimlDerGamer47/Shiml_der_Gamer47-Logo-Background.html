document.addEventListener("DOMContentLoaded", () => {
  try {
    const html = document.documentElement;
    const fontFamilyVar = "--font-family";
    const robotoBold = getComputedStyle(html)
      .getPropertyValue(fontFamilyVar)
      .trim();
    const body = document.body;
    if (!body) return;

    if (robotoBold) body.style.fontFamily = robotoBold;

    const params = new URLSearchParams(window.location.search);

    const display = params.get("display");

    body.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    function backgroundCreateToken() {
      const backgroundImgDiv = document.createElement("div");
      backgroundImgDiv.classList.add("background-img-container");
      body.appendChild(backgroundImgDiv);

      const mainPath = "/Img Ordner/";
      const subPath = "Background Img Ordner/";
      const imgFile = "Banner & Logo Overley 1.1.jpg";

      const imgFull = mainPath + subPath + imgFile;

      const backgroundImg = document.createElement("img");
      backgroundImg.width = 1920;
      backgroundImg.height = 1080;
      backgroundImg.src = imgFull;
      backgroundImg.alt = "Hintergrund Bild von Shiml_der_Gamer47";
      backgroundImg.classList.add("background-img");
      backgroundImg.loading = "eager";
      backgroundImgDiv.appendChild(backgroundImg);

      function elementSecurityToken() {
        const elementArray = [backgroundImgDiv, backgroundImg];
        const eventArray = ["copy", "dragstart", "keydown", "select"];
        const dataStyle = {
          webkitUserSelect: "none",
          userSelect: "none",
          cursor: "default",
          pointerEvents: "none",
        };

        elementArray.forEach((element) => {
          eventArray.forEach((event) => {
            element.addEventListener(event, (e) => {
              e.preventDefault();
            });
          });
          Object.assign(element.style, dataStyle);
        });
      }
      elementSecurityToken();

      function debounce(fn, delay = 100) {
        let t;
        return (...args) => {
          clearTimeout(t);
          t = setTimeout(() => fn(...args), delay);
        };
      }

      function updateImagePortrait() {
        const dpr = window.devicePixelRatio || 1;
        const container = backgroundImgDiv;
        const containerH = container.clientHeight * dpr;
        const w = Math.floor((containerH * 16) / 9);
        const h = Math.floor(containerH);

        backgroundImgDiv.style.aspectRatio = `${w}/${h}`;
        backgroundImg.style.aspectRatio = `${w}/${h}`;
      }

      updateImagePortrait();
      window.addEventListener("resize", debounce(updateImagePortrait));
    }

    if (display === "block") {
      backgroundCreateToken();
      console.log("Es wird angezeigt.");
    } else if (display === "none") {
      console.log("Wird nicht angezeigt.");
    }

    console.log(
      "Log: '/?display=block' oder '/?display=none', dann wird es angezeigt oder nicht."
    );
  } catch (error) {
    console.error("Fehler:", error);
  }
});
