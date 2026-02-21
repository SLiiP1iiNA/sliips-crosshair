const SVGS = {
    1: '<circle cx="12" cy="12" r="3" fill="currentColor"/>',
    2: '<path d="M11 2h2v7h-2zM11 15h2v7h-2zM2 11h7v2H2zM15 11h7v2h-7z" fill="currentColor"/>',
    3: '<path d="M4.22 4.22l1.42-1.42 6.36 6.36-1.42 1.42zM19.78 4.22l-1.42-1.42-6.36 6.36 1.42 1.42zM4.22 19.78l1.42 1.42 6.36-6.36-1.42-1.42zM19.78 19.78l-1.42 1.42-6.36-6.36 1.42-1.42z" fill="currentColor"/>',
    4: '<path d="M11 2h2v20h-2zM2 11h20v2H2z" fill="currentColor"/>',
    5: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/>',
    6: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>',
    7: '<rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/>',
    8: '<path d="M12 2l10 10-10 10L2 12z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/>',
    9: '<path d="M2 5h20v2H2zM11 7h2v15h-2z" fill="currentColor"/>',
    10: '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M11 0h2v24h-2zM0 11h24v2H0z" fill="currentColor"/>'
};

let config = { active: false, variant: 1, size: 24, color: "#00ff00" };

function renderCrosshair() {
    const overlay = document.getElementById('crosshair-overlay');
    const live = document.getElementById('live-crosshair');
    
    if (config.active) {
        overlay.style.display = 'flex';
        live.innerHTML = SVGS[config.variant];
        live.style.width = config.size + 'px';
        live.style.height = config.size + 'px';
        live.style.color = config.color;
    } else {
        overlay.style.display = 'none';
    }
}

function initGrid() {
    const grid = document.getElementById('variant-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        let btn = document.createElement('div');
        btn.className = `variant-btn ${config.variant === i ? 'active' : ''}`;
        btn.innerHTML = `<svg viewBox="0 0 24 24">${SVGS[i]}</svg>`;
        btn.onclick = () => {
            config.variant = i;
            document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCrosshair();
        };
        grid.appendChild(btn);
    }
}

function loadConfig(data) {
    if (data) config = data;
    document.getElementById('toggle-active').checked = config.active;
    document.getElementById('size-slider').value = config.size;
    document.getElementById('size-val').innerText = config.size;
    document.getElementById('color-picker').value = config.color;
    initGrid();
    renderCrosshair();
}

document.getElementById('toggle-active').addEventListener('change', (e) => {
    config.active = e.target.checked;
    renderCrosshair();
});

document.getElementById('size-slider').addEventListener('input', (e) => {
    config.size = parseInt(e.target.value);
    document.getElementById('size-val').innerText = config.size;
    renderCrosshair();
});

document.getElementById('color-picker').addEventListener('input', (e) => {
    config.color = e.target.value;
    renderCrosshair();
});

document.getElementById('btn-close').addEventListener('click', () => {
    document.getElementById('ui-container').style.display = 'none';
    fetch(`https://${GetParentResourceName()}/saveAndClose`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
    });
});

window.addEventListener('message', (event) => {
    if (event.data.action === "openMenu") {
        document.getElementById('ui-container').style.display = 'flex';
    } else if (event.data.action === "initData") {
        loadConfig(event.data.config);
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && document.getElementById('ui-container').style.display === 'flex') {
        document.getElementById('btn-close').click();
    }
});