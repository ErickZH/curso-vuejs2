<template>
    <ul class="list-group tasks">
        <li is="app-task" v-for="(task, index) in tasks" :task="task" :index="index" @remove="deleteTask"></li>
    </ul>
</template>

<script>
import Task from './Task.vue'

export default {
    components: { 'app-task': Task},
    props: ['tasks'],
    methods: {
        deleteTask: function (index) {
			this.tasks.splice(index, 1);
		}
    }
}
</script>
