const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: {
                text: "",
                done: false
            },
            tasks: [
                {
                    text: "Finire commit",
                    done: true
                },
                {
                    text: "Andare in palestra",
                    done: true
                },
                {
                    text: "Imparare nuovo linguaggio",
                    done: false
                },
                {
                    text: "Uscire con amici",
                    done: false
                }
            ]
        };
    },
    methods: {
        addNewTask() {
            if (this.newTask.text) {
                this.tasks.unshift({...this.newTask});
                this.newTask.text = "";
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        setDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    }
}).mount("#app");