<script setup lang="ts">



import {useSession} from "../models/session";
import {Task, userTasks} from "../models/task";
import { ref, reactive, onMounted } from 'vue';
// import * as users from "../models/user"
import { User } from "../models/user";
const session = useSession();
const taskSession = userTasks();
const currentTab= ref('All');
const newTaskName = ref('');
const dueDate = ref('');
const assignedTo = ref('');
let users:any = ref([]);
let tasks: any = ref([]);
let userAssigned: any = ref([]);
let value: any = ref('')


session.fetchAllUsers().then(() =>{
    users.value = session.users;
})
//let tasks: Array<string>;
function addTask(){
        let task: Task = {
          task: newTaskName.value,
          dueDate: dueDate.value,
          isCompleted: false,
          assignedBy: session.user?.handle,
          assignedTo: assignedTo.value
        }
        taskSession.createTask(task).then(() =>{
          taskSession.fetchAllTasks().then(() =>{
            tasks.value = taskSession.list;
        })
        })
        newTaskName.value = ''
        dueDate.value = ''
        assignedTo.value = ''       
}
    taskSession.fetchAllTasks().then(() =>{
      tasks.value = taskSession.list;
        })
        console.log(taskSession)
function taskHandler( tab : string){
  currentTab.value = tab

        if (currentTab.value.includes('Current')) {
            tasks.value = taskSession.list.filter((task: any) => !task.isCompleted);
          }
          else if (currentTab.value.includes('Completed')) {
            tasks.value = taskSession.list.filter((task: any) => task.isCompleted);
          }
          else {
            tasks.value = taskSession.list;
          }
}

taskHandler("All")

function filteredDataArray(){
    session.fetchSearchBarUsers(value).then(() =>{
    users.value = session.users;
    console.log(users.value)
})
}

</script>

<template>

<!-- Main code -->
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="panel">
            <div class="tabs is-boxed">
              <ul>
                <li :class='{ "is-active": currentTab == "Current" }' @click="taskHandler('Current')">
                  <a>
                    <span class="icon ">
                      <i class="fas fa-clipboard-list" aria-hidden="true"></i>
                    </span>
                    <span>Current</span>
                  </a>
                </li>
                <li :class='{ "is-active": currentTab == "Completed" }' @click="taskHandler('Completed')">
                  <a>
                    <span class="icon ">
                      <i class="fas fa-calendar-times" aria-hidden="true"></i>
                    </span>
                    <span>Completed</span>
                  </a>
                </li>
                <li :class='{ "is-active": currentTab == "All" }' @click="taskHandler('All')">
                  <a>
                    <span class="icon ">
                      <i class="fas fa-calendar" aria-hidden="true"></i>
                    </span>
                    <span>All</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="panel-block">
              <form style="width: 100%;" @submit.prevent="addTask">
                <div class="field has-addons">
                  <div class="control has-icons-left is-expanded">
                    <input class="input is-primary" type="text" placeholder="New Task" v-model="newTaskName" />
                    <span class="icon is-left">
                      <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                    </span>
                  </div><br>
                  <div class="control has-icons-left is-expanded">
                    <input class="input is-primary" type="date" placeholder="Date" v-model="dueDate" />
                    <span class="icon is-left">
                      <i class="fa fa-dharmachakra" aria-hidden="true"></i>
                    </span>
                  </div><br>
                  <div class="control has-icons-left is-expanded">
                    <!-- <select class="input is-primary" type="text" placeholder="Select User" v-model="assignedTo">
                      <option v-for="userlst in users" :key="userlst.handle" v-bind:value="userlst._id">{{userlst.handle}}</option>
                    </select> -->
                    <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <div class="field">
                            <div class="control">
                                <input 
                                    class="input is-normal" 
                                    type="search   
                                    " placeholder="For" 
                                    v-model="value"
                                    v-on:input="filteredDataArray()"
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                    <span class="icon is-left">
                      <i class="fas fa-book-reader" aria-hidden="true"></i>
                    </span>
                  </div><br>
                  <div class="control">
                    <button class="button is-primary">Add</button>
                  </div>
                </div>
              </form>
            </div>
            <!-- <a class="panel-block" >
              <input type="checkbox"/>
              <span></span>
            </a> -->
            <table class="table" style="width: 100%;">
             <thead>
                    <tr>
                        <th>
                            <abbr title="title">Title</abbr>
                        </th>
                        <th>
                            <abbr title="dueDate">Due Date(yyyy/mm/dd)</abbr>
                        </th>
                        <th>
                            <abbr title="assignedTo">Assigned To</abbr>
                        </th>
                        <th>
                            <abbr title="assignedBy">Assigned by</abbr>
                        </th>
                        <th>
                            <abbr title="completed">Completed</abbr>
                        </th>
                    </tr>
                </thead>
                   <tbody  v-for="task in tasks" :key="task.task">
             <!-- <a class="panel-block" :class="{ 'is-completed': currentTab != 'Completed' && task.isCompleted }">
                  <input type="checkbox" v-model="task.isCompleted" /> -->
                  <tr>
               
                        <td>{{ task.task }}</td>
                        <td>{{ task.dueDate }}</td>
                        <td>{{session.user?.handle}}</td>
                        <td>{{task.assignedBy}}</td>
                        <td><a class="panel-block" :class="{ 'is-completed': currentTab != 'Completed' && task.isCompleted }"><input type="checkbox" v-model="task.isCompleted" /></a></td>
                  </tr>
                <!-- </a> -->
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