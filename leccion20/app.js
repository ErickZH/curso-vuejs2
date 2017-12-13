//Componente app-icon
Vue.component('app-icon', {
	template: '<span :class="cssClasses" aria-hidden="true"></span>',
	props: ['img'],
	computed:{
		cssClasses: function(){
			return 'glyphicon glyphicon-'+this.img;
		}
	}
});

//Componente app-task
Vue.component('app-task', {
	data: function () {
		return {
			editing: false,
			draft: ''
		};
	},
	template: '#task-template',
	props: ['task', 'index'],
	methods: {
		toggleStatus: function() 
		{
			this.task.pending = !this.task.pending;
		},
		edit: function() 
		{
			/*
			FIX ME: reimplementar esto
			this.$parent.tasks.forEach(function(task) {
				task.editing = false;
			});*/

			this.draft = this.task.description;

			this.editing = true;	
		},
		update: function() {
			this.task.description = this.draft;

			this.editing = false;
		},
		discard: function() {
			this.editing = false;
		},
		remove: function() {
			this.$emit('remove', this.index)
		}
	}
});

var vm = new Vue({
	el: '#app',
	data: {
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
		]
	},
	/*created: function() {
		this.tasks.forEach(function(task) {
			this.$set(task, 'editing', false);
		}.bind(this));
	},*/
	methods: {
		createTask: function() {
			this.tasks.push({
				description: this.new_task,
				pending: true,
				editing: false
			});

			this.new_task = '';
		},
		deleteCompleted: function() {
			this.tasks = this.tasks.filter(function(task) {
				return task.pending;
			});
		},
		deleteTask: function (index) {
			this.tasks.splice(index, 1);
		}
	}
});