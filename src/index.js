document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form')
  const submitButton = form.querySelector('[type=submit]')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    addTask(event.target['new-task-description'].value)
    console.log('1', event.target['new-task-description'].value)
    console.log('2', form.querySelector("#new-task-description").value)
    console.log('3', document.querySelector("#new-task-description").value)
    console.log('4', form['new-task-description'].value)
    form.reset()
  })

  function addTask(task) {
    const newTask = document.createElement('li')
    const newButton = document.createElement('button')
    
    newButton.textContent = 'X'
    newButton.addEventListener('click', handleDelete)

    newTask.textContent = `${task} `
    newTask.appendChild(newButton)
    
    document.querySelector('#tasks').appendChild(newTask)
  }

  function handleDelete(event) {
    event.target.parentNode.remove()
  }
});