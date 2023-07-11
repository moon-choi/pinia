import { defineStore } from 'pinia'

//return value is usually a function itself. 
//when you invoke it, typical naming convention is useSomething.

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id: 1, title: 'buy some milk', isFav: false},
      {id: 2, title: 'play Gloomhaven', isFav: true},
    ],
  }), //return an object.
  getters: {
    favs() {
      //filtered version - non destructive.
      return this.tasks.filter(t => t.title)
    }
  }
})


//why create getter func?
//package up so many manipulation logic.
//gets tasks only the isFav true, or only returns titles. 