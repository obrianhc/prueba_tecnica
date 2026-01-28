/**
 * Módulo de Gestión de Tareas
 * Maneja la lógica de negocio de la aplicación
 * Autor: obrian.hc
 */

export class TodoService {
    constructor() {
        this.todos = [];
        this.load();
    }

    add(title) {
        if (!title.trim()) return;

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.todos.unshift(newTodo);
        this.save();
        return newTodo;
    }

    delete(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.save();
    }

    toggle(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
        }
    }

    update(id, newTitle) {
        const todo = this.todos.find(t => t.id === id);
        if (todo && newTitle.trim()) {
            todo.title = newTitle;
            this.save();
        }
    }

    get(filter = 'all') {
        switch (filter) {
            case 'pending':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return [...this.todos];
        }
    }

    save() {
        // Persistir en localStorage si es necesario
        // localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    load() {
        // const saved = localStorage.getItem('todos');
        // if (saved) this.todos = JSON.parse(saved);
    }
}
