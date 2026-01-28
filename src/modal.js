/**
 * Utilidades para Modales
 * Utilizado para mostrar mensajes importantes al usuario
 * Autor: obrian.hc
 */

export function showModal(title, message, isError = false) {
    const container = document.getElementById('notification-area');

    // Diseño limpio y profesional
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-300';

    const content = document.createElement('div');
    content.className = 'bg-white rounded-lg shadow-xl p-6 max-w-sm w-full transform transition-all scale-100';

    content.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">${title}</h3>
            <button class="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none" id="modal-close-icon">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <div class="mb-6">
            <p class="text-gray-600 leading-relaxed">${message}</p>
        </div>
        <div class="flex justify-end">
            <button id="modal-close-btn" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Aceptar
            </button>
        </div>
    `;

    overlay.appendChild(content);
    container.innerHTML = '';
    container.appendChild(overlay);

    return new Promise(resolve => {
        const close = () => {
            container.innerHTML = '';
            resolve();
        };
        document.getElementById('modal-close-btn').addEventListener('click', close);
        document.getElementById('modal-close-icon').addEventListener('click', close);
    });
}
