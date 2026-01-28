/**
 * Main.js
 * Todo App
 * Autor: obrian.hc
 */

import { TodoService } from './todo.js';

const todoService = new TodoService();
let currentFilter = 'all';

// Elementos del DOM
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const countSpan = document.getElementById('task-count');
const filterBtns = document.querySelectorAll('.filter-btn');

/**
 * Renderiza la lista de tareas basada en el filtro actual
 */
function render() {
    const todos = todoService.get(currentFilter);
    list.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `flex items-center justify-between p-3 bg-white border border-gray-200 rounded hover:shadow-sm transition-shadow ${todo.completed ? 'bg-gray-50' : ''}`;

        li.innerHTML = `
            <div class="flex items-center gap-3 flex-1">
                <input 
                    type="checkbox" 
                    ${todo.completed ? 'checked' : ''} 
                    class="w-5 h-5 text-blue-500 rounded focus:ring-blue-500 cursor-pointer"
                    data-action="toggle"
                    data-id="${todo.id}"
                >
                <span 
                    class="flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}"
                    contenteditable="${!todo.completed}"
                    data-action="update"
                    data-id="${todo.id}"
                >${todo.title}</span>
            </div>
            <button 
                class="text-red-500 hover:text-red-700 ml-2 p-1 rounded hover:bg-red-50 transition-colors"
                data-action="delete"
                data-id="${todo.id}"
                title="Eliminar tarea"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        `;
        list.appendChild(li);
    });

    const pendingCount = todoService.get('pending').length;
    countSpan.textContent = `${pendingCount} tarea${pendingCount !== 1 ? 's' : ''} pendiente${pendingCount !== 1 ? 's' : ''}`;

    filterBtns.forEach(btn => {
        if (btn.dataset.filter === currentFilter) {
            btn.classList.add('font-bold', 'text-blue-600');
            btn.classList.remove('hover:text-blue-600');
        } else {
            btn.classList.remove('font-bold', 'text-blue-600');
            btn.classList.add('hover:text-blue-600');
        }
    });
}

// Manejadores de Eventos

// Agregar nueva tarea
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = input.value.trim();
    if (title) {
        todoService.add(title);
        input.value = '';
        render();
    }
});

// Manejar clics en la lista (eliminar, completar)
list.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;

    if (action === 'remove') {
        todoService.delete(id);
        render();
    } else if (action === 'toggle' && e.target.tagName === 'INPUT') {
        todoService.toggle(id);
        render();
    }
});

// Manejar edición de tareas (contenteditable)
list.addEventListener('input', (e) => {
    const target = e.target;
    if (target.dataset.action === 'update') {
        const id = target.dataset.id;
        const newTitle = target.innerText;
        todoService.update(id, newTitle);
    }
});

// Filtrado de tareas
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        render();
    });
});

render();