<template>
	<div id="app" class="container">
		<h2>Tareas</h2>

		<app-task-list :tasks="tasks"></app-task-list>

		<app-task-list :tasks="tasks2"></app-task-list>

		<p>
			<a @click="deleteCompleted">Eliminar tareas completadas</a>
		</p>

		<app-task-form @created="createTask"></app-task-form>

		<footer class="footer">
			<p>&copy; 2017 Erick</p>
		</footer>
	</div>
</template>

<script>
import TaskList from './TaskList'
import TaskForm from './TaskForm'

export default {
	data () {
		return {
			new_task: '',
			tasks: [
				{
					description: 'Aprender Vue.js',
					pending: true
				},
				{
					description: 'Implementar Laravel echo',
					pending: true
				},
				{
					description: 'Crear un blog con GHost',
					pending: false
				}
			],
			tasks2: [
				{
					description: 'Implementar Laravel echo',
					pending: true
				},
				{
					description: 'Crear un blog con GHost',
					pending: false
				}
			]
		}
	},
	components: {
		'app-task-list': TaskList,
		'app-task-form': TaskForm
	},
	methods: {
		deleteCompleted: function() {
			this.tasks = this.tasks.filter(function(task) {
				return task.pending;
			});
		},
		createTask (task) {
			this.tasks.push(task);
		}
	}
}
</script>
