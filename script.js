document.addEventListener("DOMContentLoaded", function () {
  fetch("data/info.json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("about-text").textContent = data.about;

      const projectList = document.getElementById("project-list");
      data.projects.forEach((project) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        const projectTitle = document.createElement("h3");
        projectTitle.className = "h5";
        const projectDescription = document.createElement("p");

        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;

        listItem.appendChild(projectTitle);
        listItem.appendChild(projectDescription);
        projectList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error loading JSON:", error));
});
