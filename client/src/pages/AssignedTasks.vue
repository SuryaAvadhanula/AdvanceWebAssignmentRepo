<script setup lang="ts">
import session from "../models/session";
import { ref, reactive, onMounted } from 'vue';

let currentTab= ref('All');
let userTaskArray = session.user?.userTasks; 
let allTasks = reactive(session.user != null?session.user.userTasks:null)
//let tasks: Array<string>;

var tasks= reactive(session.user != null?session.user.userTasks:null);
function taskHandler(this: any, currentTab : any){
  if (this.currentTab.includes('Current')) {
            this.tasks = this.allTasks.filter((task: any) => !task.isCompleted);
          }
          else if (this.currentTab.includes('Completed')) {
            this.tasks = this.allTasks.filter((task: any) => task.isCompleted);
          }
          else {
            this.tasks = this.allTasks;
          }
}

</script>

<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter"></div>
        <div class="column is-half">
          <div class="panel">
            <div class="tabs is-boxed">
              <ul>
                <li :class='{ "is-active": currentTab == "Current" }' @click="currentTab = 'Current',taskHandler('Current')">
                  <a>
                    <span class="icon is-small">
                      <i class="fas fa-clipboard-list" aria-hidden="true"></i>
                    </span>
                    <span>Current</span>
                  </a>
                </li>
                <li :class='{ "is-active": currentTab == "Completed" }' @click="currentTab = 'Completed',taskHandler('Completed')">
                  <a>
                    <span class="icon is-small">
                      <i class="fas fa-calendar-times" aria-hidden="true"></i>
                    </span>
                    <span>Completed</span>
                  </a>
                </li>
                <li :class='{ "is-active": currentTab == "All" }' @click="currentTab = 'All',taskHandler('All')">
                  <a>
                    <span class="icon is-small">
                      <i class="fas fa-calendar" aria-hidden="true"></i>
                    </span>
                    <span>All</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="panel-block">
              <form style="width: 100%;">
                <div class="field has-addons">
                  <div class="control has-icons-left is-expanded">
                    <input class="input is-primary" type="text" placeholder="New Task" />
                    <span class="icon is-left">
                      <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                    </span>
                  </div>
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
             <a class="panel-block" v-for="task in tasks" :key="task.title" :class="{ 'is-completed': currentTab != 'Completed' && task.isCompleted }">
                  <input type="checkbox" v-model="task.isCompleted" />
                  {{ task.task }}
                </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>