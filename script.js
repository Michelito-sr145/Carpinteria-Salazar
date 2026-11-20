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

// Inventario de fotos y videos de cada trabajo.
const mediosPorTrabajo = {
    "Work1": [
        {
            "archivo": "Trabajo1-img1.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo1-img2.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo1-img3.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo1-img4.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo1-img5.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo1-img6.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo1-img7.avif",
            "tipo": "imagen"
        }
    ],
    "Work2": [
        {
            "archivo": "Trabajo2-img1.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo2-video1.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo2-img2.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo2-video2.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo2-img3.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo2-video3.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo2-img4.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo2-img5.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo2-img6.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo2-img7.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo2-img8.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo2-img9.avif",
            "tipo": "imagen"
        }
    ],
    "Work3": [
        {
            "archivo": "Trabajo3-img1.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo3-video1.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo3-img2.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo3-img3.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo3-img4.avif",
            "tipo": "imagen"
        }
    ],
    "Work4": [
        {
            "archivo": "Trabajo4-img1.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo4-video1.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo4-img2.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo4-video2.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo4-img3.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo4-img4.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo4-img5.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo4-img6.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo4-img7.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo4-img8.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo4-img9.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo4-img10.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo4-img11.avif",
            "tipo": "imagen"
        }
    ],
    "Work5": [
        {
            "archivo": "Trabajo5-img1.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo5-img2.avif",
            "tipo": "imagen"
        }
    ],
    "Work6": [
        {
            "archivo": "Trabajo6-img1.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img2.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img3.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img4.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img5.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img6.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img7.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img8.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img9.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img10.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img11.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img12.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img13.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img14.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img15.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img16.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img17.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo6-img18.avif",
            "tipo": "imagen"
        }
    ],
    "Work7": [
        {
            "archivo": "Trabajo7-img1.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo7-video1.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo7-img2.avif",
            "tipo": "imagen"
        }
    ],
    "Work8": [
        {
            "archivo": "Trabajo8-img1.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo8-img2.avif",
            "tipo": "imagen"
        }
    ],
    "Work9": [
        {
            "archivo": "Trabajo9-img1.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo9-img2.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo9-img3.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Trabajo9-img4.avif",
            "tipo": "imagen"
        }
    ],
    "Work10": [
        {
            "archivo": "Trabajo10-video1.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo10-video2.mp4",
            "tipo": "video"
        }
    ],
    "Work11": [
        {
            "archivo": "Trabajo11-video1.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo11-video2.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo11-video3.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo11-video4.mp4",
            "tipo": "video"
        }
    ],
    "Work12": [
        {
            "archivo": "Trabajo12-video1.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo12-video2.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Trabajo12-video3.mp4",
            "tipo": "video"
        }
    ],
    "WorkImagenes": [
        {
            "archivo": "Etc-img1.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img2.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img3.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img4.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img5.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img6.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img7.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img8.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img9.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img10.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img11.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img12.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img13.avif",
            "tipo": "imagen"
        },
        {
            "archivo": "Etc-img14.avif",
            "tipo": "imagen"
        }
    ],
    "WorkVideos": [
        {
            "archivo": "Etc-video1.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video2.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video3.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video4.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video5.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video6.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video7.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video8.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video9.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video10.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video11.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video12.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video13.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video14.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video15.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video16.mp4",
            "tipo": "video"
        },
        {
            "archivo": "Etc-video17.mp4",
            "tipo": "video"
        }
    ]
};


const tarjetasTrabajo = document.querySelectorAll('#trabajos-list .trabajo');
const trabajoDialog = document.querySelector('#WorkDialog');
const trabajoTitulo = trabajoDialog.querySelector('#trabajo-titulo');
const trabajoFoto = trabajoDialog.querySelector('.trabajo-foto');
const trabajoVideo = trabajoDialog.querySelector('.trabajo-video');
const trabajoError = trabajoDialog.querySelector('.trabajo-error');
const trabajoContador = trabajoDialog.querySelector('.trabajo-contador');
const fotoAnterior = trabajoDialog.querySelector('.trabajo-anterior');
const fotoSiguiente = trabajoDialog.querySelector('.trabajo-siguiente');
let trabajoActivo;
let indiceMedio = 0;
let tipoActivo;
function rutaMedioTrabajo(id, medio) {
    return `resource/${id}/${encodeURIComponent(medio.archivo)}`;
}
function detenerVideo() {
    trabajoVideo.pause();
    trabajoVideo.hidden = true;
    trabajoVideo.removeAttribute('src');
    trabajoVideo.load();
}
function mostrarMedio(desplazamiento) {
    const medios = mediosPorTrabajo[trabajoActivo.id];
    indiceMedio = (indiceMedio + desplazamiento + medios.length) % medios.length;
    const medio = medios[indiceMedio];
    tipoActivo = medio.tipo;
    detenerVideo();
    trabajoFoto.hidden = true;
    trabajoFoto.removeAttribute('src');
    trabajoError.hidden = true;
    const ruta = rutaMedioTrabajo(trabajoActivo.id, medio);
    if (medio.tipo === 'video') {
        trabajoVideo.setAttribute('aria-label', `${trabajoTitulo.textContent}, video ${indiceMedio + 1}`);
        trabajoVideo.src = ruta;
        trabajoVideo.hidden = false;
    } else {
        trabajoFoto.alt = `${trabajoTitulo.textContent}, foto ${indiceMedio + 1}`;
        trabajoFoto.src = ruta;
        if (trabajoFoto.complete && trabajoFoto.naturalWidth > 0) trabajoFoto.hidden = false;
    }
    trabajoContador.textContent = `${medio.tipo === 'video' ? 'Video' : 'Foto'} ${indiceMedio + 1} de ${medios.length}`;
    fotoAnterior.disabled = fotoSiguiente.disabled = medios.length < 2;
}
trabajoFoto.addEventListener('load', () => {
    if (tipoActivo !== 'imagen' || !trabajoDialog.open) return;
    trabajoFoto.hidden = false;
    trabajoError.hidden = true;
});
trabajoFoto.addEventListener('error', () => {
    if (tipoActivo !== 'imagen' || !trabajoFoto.hasAttribute('src')) return;
    trabajoFoto.hidden = true;
    trabajoError.hidden = false;
});
trabajoVideo.addEventListener('error', () => {
    if (tipoActivo !== 'video' || !trabajoVideo.hasAttribute('src')) return;
    trabajoVideo.hidden = true;
    trabajoError.hidden = false;
});
tarjetasTrabajo.forEach((tarjeta) => {
    const medios = mediosPorTrabajo[tarjeta.id] || [];
    if (!medios.length) { tarjeta.hidden = true; return; }
    const fotos = medios.filter(medio => medio.tipo === 'imagen');
    const videos = medios.filter(medio => medio.tipo === 'video');
    if (fotos.length) {
        const miniatura = document.createElement('img');
        miniatura.alt = '';
        miniatura.loading = 'lazy';
        miniatura.src = rutaMedioTrabajo(tarjeta.id, fotos[0]);
        tarjeta.append(miniatura);
    } else {
        // No descargar los videos para generar las portadas de las tarjetas.
        const portada = document.createElement('span');
        portada.className = 'trabajo-video-portada';
        portada.textContent = '▶';
        portada.setAttribute('aria-hidden', 'true');
        tarjeta.append(portada);
    }
    const resumen = [fotos.length ? `${fotos.length} fotos` : '', videos.length ? `${videos.length} videos` : ''].filter(Boolean).join(' + ');
    const etiqueta = document.createElement('span');
    etiqueta.className = 'trabajo-medios';
    etiqueta.textContent = resumen;
    etiqueta.setAttribute('aria-hidden', 'true');
    tarjeta.append(etiqueta);
    const titulo = tarjeta.getAttribute('aria-label');
    tarjeta.setAttribute('aria-label', `${titulo}: ${resumen}`);
    tarjeta.addEventListener('click', () => {
        trabajoActivo = tarjeta;
        indiceMedio = 0;
        trabajoTitulo.textContent = titulo;
        trabajoDialog.showModal();
        mostrarMedio(0);
    });
});
fotoAnterior.addEventListener('click', () => mostrarMedio(-1));
fotoSiguiente.addEventListener('click', () => mostrarMedio(1));
trabajoDialog.addEventListener('keydown', (event) => {
    // Las flechas del reproductor siguen controlando el volumen y la reproduccion.
    if (event.target.closest('video')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        mostrarMedio(event.key === 'ArrowLeft' ? -1 : 1);
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

trabajoDialog.addEventListener('close', () => {
    tipoActivo = null;
    detenerVideo();
    trabajoActivo?.focus();
});

const numerosWhatsApp = ['+5491140829550', '+5491169317315'];
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
