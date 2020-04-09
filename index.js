
const getDiv = () => document.getElementById('main');

function template(project) {
  return `<div id="project-${project.id}">
    <h1>Project Title: ${project.title}</h1>
    <p>${project.description}</p>
    <button class="form-creator">Create to add a review</button>
  </div>`
}

document.addEventListener('DOMContentLoaded', function () {
  loadProjects();
})

function loadProjects() {
  const fetchedData = [
    { id: 1, title: "Operation Bagel", description: "Creating the worlds best bagel with blueberries" },
    { id: 2, title: "Create a kitchen game", description: "Creating a game with the idea of how to cook." },
    { id: 3, title: "Online courses for children (something we really need)", description: "Online education for kids, from pre-k to 12" }
  ]

  fetchedData.forEach(project => {
    render(project)
  });
  let buttons = document.querySelectorAll('.form-creator')
  buttons.forEach(button => button.addEventListener('click', createForm));
}

function formTemplate(parentNode) {
  return `
    <h3>Create a Review for ${parentNode.querySelector('h1').textContent}</h3>
    <form id="review-form">
      <div>
        <label for="title">Title: </label>
        <input type="text" id="title">\
      </div>
      <div>
        <label for="description">Description: </label>
        <input type="text" id="description">
      </div>
      <input type="submit" value="Add a Review">
    </form>
  `
}

function createForm(e) {
  // check if form exists
  // if not display form template
  this.parentNode.innerHTML += formTemplate(this.parentNode);
}

function onSubmit(e) {
  e.preventDefault();

  alert('submitted form');
}

function render(project) {
  getDiv().innerHTML += template(project);
}