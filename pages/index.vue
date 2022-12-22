<template>
  <main>
    <h1>Tasks Board</h1>
    <p>create a list of tasks</p>
    <p>task: {{ task }}</p>
    <div class="create-new">
      <input
        v-model="task"
        type="text"
        placeholder="Plz add a new task here"
        @keypress.enter="addTask"
      >

      <button @click="addTask">
        Add Task
      </button>
    </div>
    <div class="tasks">
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      task: ''
    }
  },
  methods: {
    addTask () {
      if (this.task) {
        this.$store.commit('ADD_TASK', this.task)
        this.task = ''
      }
    }
  }
}
</script>
