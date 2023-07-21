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
                Headers: {'content-type': 'muiltipart/from-data'}
            }
            axios.post('http://localhost/php-todo-list-json/', data , config )
            .then(res =>{
                this.tasks.push(res.data);
                this.newTask ='';
            })
        }
    },
    created(){
        axios.get('http://localhost/php-todo-list-json/')
        .then(res=> {
            this.tasks = res.data;
        })
    }
})

app.mount('#app')