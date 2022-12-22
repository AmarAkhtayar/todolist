export const state = () => ({
  tasks: []
})

export const mutations = {
  ADD_TASK (state, taskToAdd) {
    console.log('heyyy task', taskToAdd)
    // mutate state by adding a new task to the list
    state.tasks = [{ content: taskToAdd, done: false }, ...state.tasks]
    console.log('states are', state.tasks)
  },
  REMOVE_TASK (state, taskToRemove) {
    // mutate state by removing task from tasks array
    state.tasks.splice(state.tasks.indexOf(taskToRemove), 1)
  },
  TOGGLE_TASK (state, task) {
    console.log('tasks iss', this.task)
    task.done = !task.done
  }
}
