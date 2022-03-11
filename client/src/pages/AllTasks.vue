<script setup lang="ts">
import session from "../models/session";
import { ref, reactive, onMounted } from 'vue';
import * as users from "../models/user"

const currentTab= ref('All');
const newTaskName = ref('');
const dueDate = ref('');
const assignedTo = ref('');
const userTaskArray = session.user?.userTasks; 
const allTasks = ref(session.user != null?session.user.userTasks:null);
const tasks= ref(session.user != null?session.user.userTasks:null);
const assignedUser =  ref(null as string | null | undefined);
const allUserTasks = users.list

function addTask(){
        const user = users.list.find(u => u.id+"" == assignedTo.value);
        assignedUser.value = session.user?.handle
        console.log(assignedUser);
        console.log(user)
        user?.userTasks.unshift({ 
          task: newTaskName.value,
          dueDate: dueDate.value,
          isCompleted: false,
          assignedBy: assignedUser
        })
        console.log(user)
        if(session.user?.id+"" == assignedTo.value ){
            tasks.value = user?.userTasks;
        }
        
      //   allTasks.unshift({
      //     task: newTaskName.value,
      //     dueDate: dueDate.value,
      //     isCompleted: false
      // });
      //this.tasks = this.allTasks;
}

function taskHandler(currentTab : any){
  if (currentTab.includes('Current')) {
            tasks.value = allTasks.filter((task: any) => !task.isCompleted);
          }
          else if (currentTab.includes('Completed')) {
            tasks.value = allTasks.filter((task: any) => task.isCompleted);
          }
          else {
            tasks.value = allTasks;
          }
}


</script>

<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">Welcome {{session.user?.handle}}</h1>
          <div class="panel">            
            <table class="table" style="width: 100%;">
             <thead>
                    <tr>
                        <th>
                            <abbr title="title">Task Title</abbr>
                        </th>
                        <th>
                            <abbr title="dueDate">Due Date(yyyy-mm-dd)</abbr>
                        </th>
                        <th>
                            <abbr title="assignedTo">Assigned To</abbr>
                        </th>
                        <th>
                            <abbr title="assignedBy">Assigned by</abbr>
                        </th>
                    </tr>
                </thead>
                   <tbody  v-for="(task,i) in allUserTasks" :key="task.userTasks[i]">
                  <tr v-for="(tasklist,j) in allUserTasks[i].userTasks" :key="tasklist[j]">
                        <td>{{ task.userTasks[j].task }}</td>
                        <td>{{ task.userTasks[j].dueDate }}</td>
                        <td>{{ allUserTasks[i].handle }}</td>
                        <td>{{ task.userTasks[j].assignedBy }}</td>
                    </tr>
              </tbody>
                 </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>