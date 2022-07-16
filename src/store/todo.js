import { reactive } from 'vue'

export const todoStore = reactive({
  id: 3,
  todoList: [
    {
      name: 'vite',
      id: 1
    },
    {
      name: 'setup',
      id: 2
    }
  ],
  doneList: [
    {
      id: 0,
      name: 'vue2.7'
    }
  ]
})

export const addTodo = (todo) => {
  if (todo.trim() !== '') {
    todoStore.id += 1
    todoStore.todoList.push({
      id: todoStore.id,
      name: todo
    })
  }
}

export const finish = (id) => {
  const idx = todoStore.todoList.findIndex(it => it.id === id)
  if (idx !== -1) {
    todoStore.doneList.push({ ...todoStore.todoList[idx] })
    todoStore.todoList.splice(idx, 1)
  }
}

export const remove = (id) => {
  const idx = todoStore.doneList.findIndex(it => it.id === id)
  if (idx !== -1) {
    todoStore.doneList.splice(idx, 1)
    if (todoStore.doneList.length === 0) {
      todoStore.id = 0
    }
  }
}
