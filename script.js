// Fixly - Marketplace Global de Servicios
let currentMode = 'global';

const servicesData = {
    global: [
        { icon: '🔧', title: 'Plomería', desc: 'Servicios de plomería profesional', price: 'Desde $30' },
        { icon: '⚡', title: 'Electricidad', desc: 'Instalaciones y reparaciones eléctricas', price: 'Desde $25' },
        { icon: '🎨', title: 'Pintura', desc: 'Pintura interior y exterior', price: 'Desde $50' },
        { icon: '🏠', title: 'Limpieza', desc: 'Limpieza residencial y comercial', price: 'Desde $20' },
        { icon: '🌿', title: 'Jardinería', desc: 'Mantenimiento de jardines', price: 'Desde $15' },
        { icon: '🔒', title: 'Cerrajería', desc: 'Apertura y cambio de cerraduras', price: 'Desde $40' }
    ],
    pro: [
        { icon: '⚖️', title: 'Abogados', desc: 'Asesoría legal profesional', price: 'Desde $100/hora' },
        { icon: '📊', title: 'Contadores', desc: 'Contabilidad y finanzas', price: 'Desde $80/hora' },
        { icon: '💻', title: 'Desarrolladores', desc: 'Desarrollo web y apps', price: 'Desde $50/hora' },
        { icon: '📈', title: 'Marketing', desc: 'Estrategias de marketing digital', price: 'Desde $70/hora' },
        { icon: '🏢', title: 'Consultoría', desc: 'Consultoría empresarial', price: 'Desde $120/hora' },
        { icon: '📐', title: 'Arquitectos', desc: 'Diseño y planificación', price: 'Desde $90/hora' }
    ],
    travel: [
        { icon: '✈️', title: 'Tours Guiados', desc: 'Excursiones con guías locales', price: 'Desde $40' },
        { icon: '🚗', title: 'Transporte Privado', desc: 'Traslados entre ciudades', price: 'Desde $60' },
        { icon: '🏨', title: 'Reserva de Hoteles', desc: 'Hospedaje en cualquier destino', price: 'Desde $30/noche' },
        { icon: '🍽️', title: 'Experiencias Gastronómicas', desc: 'Tours de comida local', price: 'Desde $35' },
        { icon: '📸', title: 'Fotógrafos', desc: 'Sesiones fotográficas en destino', price: 'Desde $50' },
        { icon: '🎯', title: 'Actividades', desc: 'Deportes de aventura y más', price: 'Desde $25' }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const savedMode = localStorage.getItem('fixlyMode');
    if (savedMode) {
        currentMode = savedMode;
        showApp();
        loadServices();
    }
});

function selectMode(mode) {
    currentMode = mode;
    localStorage.setItem('fixlyMode', mode);
    showApp();
    loadServices();
    updateModeLabel();
}

function showApp() {
    document.getElementById('mode-selector').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
}

function updateModeLabel() {
    const labels = { global: 'Global', pro: 'Pro', travel: 'Travel' };
    document.getElementById('current-mode').textContent = labels[currentMode];
}

function loadServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;
    const services = servicesData[currentMode];
    grid.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
            <span class="service-price">${service.price}</span>
            <button class="btn-book">Reservar</button>
        </div>
    `).join('');
}
