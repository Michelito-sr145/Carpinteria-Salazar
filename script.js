const menuToggle = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
const navegacionAmplia = window.matchMedia('(min-width: 48rem)');

function setMenuOpen(isOpen) {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    navigation.hidden = !isOpen;
}

function ajustarNavegacion() {
    const focoEnMenu = document.activeElement === menuToggle;
    const focoEnNavegacion = navigation.contains(document.activeElement);

    menuToggle.hidden = navegacionAmplia.matches;
    setMenuOpen(navegacionAmplia.matches);

    if (navegacionAmplia.matches && focoEnMenu) {
        navigation.querySelector('a').focus();
    } else if (!navegacionAmplia.matches && focoEnNavegacion) {
        menuToggle.focus();
    }
}

ajustarNavegacion();
navegacionAmplia.addEventListener('change', ajustarNavegacion);

menuToggle.addEventListener('click', () => {
    setMenuOpen(navigation.hidden);
});

navigation.addEventListener('click', (event) => {
    if (!navegacionAmplia.matches && event.target.closest('a')) {
        setMenuOpen(false);
        menuToggle.focus();
    }
});

menuToggle.closest('header').addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !navegacionAmplia.matches && !navigation.hidden) {
        setMenuOpen(false);
        menuToggle.focus();
    }
});

// Inventario para servir la galería desde archivos estáticos.
const fotosPorTrabajo = {
    Work1: [
        'Trabajo1-img (1).jpg',
        'Trabajo1-img (2).jpg',
        'Trabajo1-img (3).jpg',
        'Trabajo1-img (4).jpg',
        'Trabajo1-img (5).jpg',
        'Trabajo1-img (6).jpg',
        'Trabajo1-img (7).jpg',
    ],
    Work2: [
        'Trabajo2-img (1).jpg',
        'Trabajo2-img (2).jpg',
        'Trabajo2-img (3).jpg',
        'Trabajo2-img (4).jpg',
        'Trabajo2-img (5).jpg',
        'Trabajo2-img (6).jpg',
        'Trabajo2-img (7).jpg',
        'Trabajo2-img (8).jpg',
        'Trabajo2-img (9).jpg',
    ],
    Work3: [
        'Trabajo3-img (1).jpg',
        'Trabajo3-img (2).jpg',
        'Trabajo3-img (3).jpg',
        'Trabajo3-img (4).jpg',
    ],
    Work4: [
        'Trabajo4-img (1).jpg',
        'Trabajo4-img (2).jpg',
        'Trabajo4-img (3).jpg',
        'Trabajo4-img (4).jpg',
        'Trabajo4-img (5).jpg',
        'Trabajo4-img (6).jpg',
        'Trabajo4-img (7).jpg',
        'Trabajo4-img (8).jpg',
        'Trabajo4-img (9).jpg',
        'Trabajo4-img (10).jpg',
        'Trabajo4-img (11).jpg',
        'Trabajo4-img (12).jpg',
    ],
    Work5: [
        'Trabajo5-img (1).jpg',
        'Trabajo5-img (2).jpg',
    ],
    Work6: [
        'Trabajo6-img (1).jpg',
        'Trabajo6-img (2).jpg',
        'Trabajo6-img (3).jpg',
        'Trabajo6-img (4).jpg',
        'Trabajo6-img (5).jpg',
        'Trabajo6-img (6).jpg',
        'Trabajo6-img (7).jpg',
        'Trabajo6-img (8).jpg',
        'Trabajo6-img (9).jpg',
        'Trabajo6-img (10).jpg',
        'Trabajo6-img (11).jpg',
        'Trabajo6-img (12).jpg',
        'Trabajo6-img (13).jpg',
        'Trabajo6-img (14).jpg',
        'Trabajo6-img (15).jpg',
        'Trabajo6-img (16).jpg',
        'Trabajo6-img (17).jpg',
        'Trabajo6-img (18).jpg',
        'Trabajo6-img (19).jpg',
        'Trabajo6-img (20).jpg',
        'Trabajo6-img (21).jpg',
        'Trabajo6-img (22).jpg',
        'Trabajo6-img (23).jpeg',
        'Trabajo6-img (24).jpeg',
    ],
    Work7: [
        'Trabajo7-img (1).jpeg',
        'Trabajo7-img (2).jpeg',
    ],
    Work8: [
        'Trabajo8-img (1).jpeg',
        'Trabajo8-img (2).jpeg',
    ],
    Work9: [
        'Trabajo9-img (1).jpeg',
        'Trabajo9-img (2).jpeg',
        'Trabajo9-img (3).jpeg',
        'Trabajo9-img (4).jpeg',
    ],
    WorkEtc: [
        'Etc-img (1).jpeg',
        'Etc-img (11).jpeg',
        'Etc-img (12).jpeg',
        'Etc-img (13).jpeg',
        'Etc-img (14).jpeg',
        'Etc-img (15).jpeg',
        'Etc-img (16).jpeg',
        'Etc-img (17).jpeg',
        'Etc-img (18).jpeg',
        'Etc-img (19).jpeg',
        'Etc-img (20).jpeg',
        'Etc-img (21).jpeg',
        'Etc-img (22).jpeg',
        'Etc-img (23).jpeg',
    ],
};

const tarjetasTrabajo = document.querySelectorAll('#trabajos-list .trabajo');
const trabajoDialog = document.querySelector('#WorkDialog');
const trabajoTitulo = trabajoDialog.querySelector('#trabajo-titulo');
const trabajoFoto = trabajoDialog.querySelector('.trabajo-foto');
const trabajoError = trabajoDialog.querySelector('.trabajo-error');
const trabajoContador = trabajoDialog.querySelector('.trabajo-contador');
const fotoAnterior = trabajoDialog.querySelector('.trabajo-anterior');
const fotoSiguiente = trabajoDialog.querySelector('.trabajo-siguiente');
let trabajoActivo;
let indiceFoto = 0;

function rutaFotoTrabajo(id, indice) {
    return `resource/${id}/${encodeURIComponent(fotosPorTrabajo[id][indice])}`;
}

function mostrarFoto(desplazamiento) {
    const fotos = fotosPorTrabajo[trabajoActivo.id];
    indiceFoto = (indiceFoto + desplazamiento + fotos.length) % fotos.length;

    trabajoError.hidden = true;
    trabajoFoto.hidden = true;
    trabajoFoto.alt = `${trabajoTitulo.textContent}, foto ${indiceFoto + 1}`;
    trabajoFoto.src = rutaFotoTrabajo(trabajoActivo.id, indiceFoto);
    if (trabajoFoto.complete && trabajoFoto.naturalWidth > 0) {
        trabajoFoto.hidden = false;
    }
    trabajoContador.textContent = `${indiceFoto + 1} de ${fotos.length}`;
}

trabajoFoto.addEventListener('load', () => {
    trabajoFoto.hidden = false;
    trabajoError.hidden = true;
});

trabajoFoto.addEventListener('error', () => {
    trabajoFoto.hidden = true;
    trabajoError.hidden = false;
});

tarjetasTrabajo.forEach((tarjeta) => {
    const miniatura = document.createElement('img');
    miniatura.alt = '';
    miniatura.loading = 'lazy';
    miniatura.src = rutaFotoTrabajo(tarjeta.id, 0);
    tarjeta.append(miniatura);

    tarjeta.addEventListener('click', () => {
        trabajoActivo = tarjeta;
        indiceFoto = 0;
        trabajoTitulo.textContent = tarjeta.getAttribute('aria-label');
        mostrarFoto(0);
        trabajoDialog.showModal();
    });
});

fotoAnterior.addEventListener('click', () => mostrarFoto(-1));
fotoSiguiente.addEventListener('click', () => mostrarFoto(1));

trabajoDialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        mostrarFoto(event.key === 'ArrowLeft' ? -1 : 1);
    }
});

function esPulsacionFueraDelDialogo(event) {
    if (event.target !== trabajoDialog) {
        return false;
    }

    const { left, right, top, bottom } = trabajoDialog.getBoundingClientRect();
    return event.clientX < left || event.clientX >= right ||
        event.clientY < top || event.clientY >= bottom;
}

let pulsacionIniciadaFuera = false;

trabajoDialog.addEventListener('pointerdown', (event) => {
    pulsacionIniciadaFuera = esPulsacionFueraDelDialogo(event);
});

trabajoDialog.addEventListener('click', (event) => {
    if (pulsacionIniciadaFuera && esPulsacionFueraDelDialogo(event)) {
        trabajoDialog.close();
    }
    pulsacionIniciadaFuera = false;
});

trabajoDialog.addEventListener('close', () => trabajoActivo.focus());

const numerosWhatsApp = ['+5491167623090', '+5491167623092'];
const contactoDatos = document.querySelector('#contacto-datos');
const listaWhatsApp = document.createElement('ul');

for (const valor of numerosWhatsApp) {
    const numero = valor.replace(/\D/g, '');
    if (!numero) continue;

    const item = document.createElement('li');
    const enlace = document.createElement('a');
    enlace.href = `https://wa.me/${numero}`;
    enlace.textContent = valor;
    item.append(enlace);
    listaWhatsApp.append(item);
}

if (listaWhatsApp.childElementCount) {
    contactoDatos.append(listaWhatsApp);
} else {
    contactoDatos.textContent = 'El contacto por WhatsApp todavía no está disponible.';
}

document.querySelectorAll('.contacto-opcion').forEach((opcion) => {
    const dialogo = document.getElementById(opcion.getAttribute('aria-controls'));
    opcion.addEventListener('click', () => dialogo.showModal());
});

const wechatId = document.querySelector('#wechat-id-valor');
const wechatCopiar = document.querySelector('#wechat-copiar');
const wechatEstado = document.querySelector('#wechat-estado');

wechatCopiar.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(wechatId.textContent.trim());
        wechatEstado.textContent = 'ID copiado.';
    } catch {
        wechatEstado.textContent = 'Seleccioná el ID para copiarlo manualmente.';
    }
});

document.querySelector('#contacto-dialog-wechat').addEventListener('close', () => {
    wechatEstado.textContent = '';
});
