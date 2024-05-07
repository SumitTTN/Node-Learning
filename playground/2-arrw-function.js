const tasks ={
    tasks:[
        {
            text:'shopping',
            completed: true
        },
        {
            text:'yard',
            completed: false
        },
        {
            text:'file',
            completed: false
        }
    ],
    getTasksToDo() {
       return this.tasks.filter((task)=>task.completed ===false)
    }

}
console.log(":: ",tasks.getTasksToDo())
