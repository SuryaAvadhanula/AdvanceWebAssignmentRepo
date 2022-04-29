import { defineStore } from 'pinia'
import { useSession } from './session';



export const userTasks = defineStore('tasks', {
  
    state: () => ({
        list: [] as Task[],
        session: useSession(),
    }),
    actions: {

        async fetchAllTasks() {
            const tasks = await this.session.api('tasks');
            this.list = tasks;
        },

        async createTask(task: Task) {
            const newTask = await this.session.api('tasks', task);
            this.list.push(newTask);
        }

    }
})



export interface Task {
    _id?: String;
    task: String;
    isCompleted: boolean;
    assignedTo: String;
    assignedBy?: String;
    dueDate: String
}