const { createApp }= Vue;

const app= createApp({
    data() {
        return {
            tasks: [],
            newTask: ''
        }
    },
    methods: {
        addTask(){
            const data = {task: this.newTask };

            const config ={
                headers: {'Content-Type': 'multipart/form-data'}
            }
            
            axios.post('http://localhost/php-todo-list-json/api/tasks/', data , config )
            .then(res =>{
                this.tasks.push(res.data);
                this.newTask ='';
            })
        }
    },
    created(){
        axios.get('http://localhost/php-todo-list-json/api/tasks/')
        .then(res=> {
            this.tasks = res.data;
        })
    }
})

app.mount('#app')
