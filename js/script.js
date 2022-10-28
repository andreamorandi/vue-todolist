const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: "",
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
            if (this.newTask) {
                this.tasks.unshift({
                    text: this.newTask,
                    done: false
                });
                this.newTask = "";
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