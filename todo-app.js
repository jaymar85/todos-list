const todos = [{
    text: 'Order dog food',
    completed: false
}, {  
    text: 'Clean carpet',
    completed: true
}, { 
    text: 'Study JavaScript',
    completed: false 
}, {  
    text: 'Eat food',
    completed: true
}, {   
    text: 'Exercise',
    completed: true
}]

const filters = {
    searchText: ''
}

const renderText = function(todos, filters) {
    const findTodo = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })


}

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const sentence = document.createElement('h4')
sentence.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(sentence)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('submit', function(e) {
    e.preventDefault()

})

document.querySelector('#search-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})
