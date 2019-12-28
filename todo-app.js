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

