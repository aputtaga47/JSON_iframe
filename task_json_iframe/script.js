const works = {
    "task1": {"title": "Project 1", "url": "works/task1/index.html"},
    "task2": {"title": "Project 2", "url": "works/task2/index.html"},
    "task3": {"title": "Project 3", "url": "works/task3/index.html"},
};

// Function to populate navigation panel
function loadProjects() {
    const projectList = document.getElementById("project-list");
    for (let key in works) {
        let li = document.createElement("li");
        li.textContent = works[key].title;
        li.onclick = () => loadProject(works[key].url);
        projectList.appendChild(li);
    }
}

// Function to load project in iframe
function loadProject(url) {
    document.getElementById("project-frame").src = url;
}

// Initialize on page load
window.onload = loadProjects;