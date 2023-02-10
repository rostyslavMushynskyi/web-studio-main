const refs = {
  allCatalog: document.getElementById("tagsAll"),
  websitesCatalog: document.getElementById("tagsWebsites"),
  appCatalog: document.getElementById("tagsPrograms"),
  designCatalog: document.getElementById("tagsDesign"),
  marketingCatalog: document.getElementById("tagsMarketing"),
  allElemCatalog: document.getElementsByClassName("projects__item"),
};

console.log(refs.websitesCatalog);

const toggleElements = (classname) => {
  for (let i = 0; i < refs.allElemCatalog.length; i++) {
    if (refs.allElemCatalog[i].classList.contains(classname)) {
      refs.allElemCatalog[i].style.display = "block";
    } else {
      refs.allElemCatalog[i].style.display = "none";
    }
  }
};

refs.allCatalog.addEventListener("change", () => {
  for (let i = 0; i < refs.allElemCatalog.length; i++) {
    refs.allElemCatalog[i].style.display = "block";
  }
});

refs.websitesCatalog.addEventListener("change", () =>
  toggleElements("projects_website")
);

refs.appCatalog.addEventListener("change", () =>
  toggleElements("projects_app")
);

refs.designCatalog.addEventListener("change", () =>
  toggleElements("projects_design")
);

refs.marketingCatalog.addEventListener("change", () =>
  toggleElements("projects_marketing")
);
