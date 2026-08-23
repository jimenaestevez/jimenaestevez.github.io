# Portfolio — Jimena Estévez

Sitio de portfolio en HTML/CSS/JS puro, sin frameworks ni build tools. Se puede
editar directamente y alojar en cualquier servicio de hosting estático.

## Estructura

```
Portfolio/
├── index.html          Home
├── projects.html        Listado de proyectos
├── proyecto-01.html      Case study: Checkout mobile
├── proyecto-02.html      Case study: Sistema de diseño
├── proyecto-03.html      Case study: Onboarding fintech
├── about.html           Sobre mí
├── ai.html               Trabajando con AI (placeholder, falta contenido)
├── contact.html          Contacto
├── css/styles.css       Estilos (paleta, tipografía, layout)
├── js/main.js           Menú mobile, footer dinámico, formulario
└── assets/
    ├── images/          Logo.svg, Logo-1.svg, foto1.png, agile.png, builder.png
    │                     + poné acá tus imágenes reales de proyectos
    ├── fonts/            Whyte Plus y Awesome Serif (auto-hospedadas, ver abajo)
    └── cv/               Poné acá tu CV (ver LEEME.txt)
```

## Header, footer e isotipo (sitewide)

El home se rediseñó a partir de un export de Figma y ese header/footer se
aplicó a las 8 páginas del sitio para mantener consistencia:

- **Header**: `assets/images/Logo-1.svg` (isotipo + wordmark "Jimena Estévez"
  en dos líneas, todo en un solo SVG). Nav: Sobre mí / Proyectos / Trabajando
  con AI / Contacto — **sin botón de CV** (se sacó del nav; el CV se puede
  seguir descargando desde `about.html` y `contact.html`).
- **Footer**: sección "Hablemos!" con dos botones de contacto (email y
  LinkedIn, `.footer-icon-btn`) y el isotipo grande `assets/images/Logo.svg`
  a la derecha. Reemplazó al footer anterior de columnas de navegación.
- **`ai.html`** es un placeholder — hay que escribirle contenido real cuando
  definas qué vas a contar sobre tu proceso con AI.

## Sistema de diseño (paleta y tipografía)

Basado en el moodboard de Figma del proyecto. Todo vive como variables CSS en
`css/styles.css` (`:root`):

| Uso | Variable | Hex |
|---|---|---|
| Texto / tinta | `--color-ink` | `#100e0d` |
| Fondo | `--color-bg` | `#faf8f5` |
| Acento principal (botones, links) | `--color-accent` | `#6b764b` (verde oliva) |
| Durazno | `--color-peach` | `#f9dec6` |
| Verde lima | `--color-lime` | `#e5e9b1` |
| Lila | `--color-lilac` | `#e6d5ec` |
| Rosa/beige | `--color-rose` | `#e6ddd9` |

Los 4 colores secundarios (durazno, lima, lila, rosa) se usan como paleta
rotativa para los thumbnails de proyecto y portadas de case study — cada
proyecto nuevo puede tomar el que le quede mejor vía `style="--thumb:#hex;"`
en el `<div class="project-thumb">` o `<div class="case-cover">`.

**Tipografías** (3, según el moodboard):
- **Whyte Plus** (`--font-display`) — títulos (h1–h4), peso bold. Auto-hospedada
  desde `assets/fonts/ABCWhytePlusVariable-Trial.ttf`.
- **Awesome Serif** (`--font-accent`) — itálica, usada en los "eyebrows"
  (etiquetas cortas antes de cada título). Auto-hospedada desde
  `assets/fonts/AwesomeSerif-Italic-VF.ttf`.
- **Inter** (`--font-body`) — cuerpo de texto, cargada directo desde Google
  Fonts (no requiere archivo local).

⚠️ **Licencia de Whyte**: el archivo instalado es la versión *trial* de ABC
Whyte Plus (Dinamo). Antes de dejar el sitio en producción para compartirlo
públicamente, confirmá que tenés la licencia comercial completa — las
versiones trial suelen tener restricciones de uso o caracteres limitados.
Cuando tengas la licencia definitiva, reemplazá el archivo en
`assets/fonts/ABCWhytePlusVariable-Trial.ttf` (podés renombrarlo y actualizar
la referencia `@font-face` en `css/styles.css`).

## Cómo personalizar el contenido

1. **Textos**: todo el contenido (bio, proyectos, experiencia) es placeholder
   editable directamente en cada archivo `.html`. Buscá y reemplazá los
   textos de ejemplo por los tuyos.
2. **Imágenes**: la foto del hero (`foto1.png`) y los collages del toolkit
   (`agile.png`, `builder.png`) ya son imágenes reales. Lo que sigue siendo
   placeholder: el panel derecho gris de cada card de proyecto en el home
   (`.featured-project-media`, vacío a propósito hasta que tengas capturas)
   y los bloques de color de las case studies individuales
   (`.project-thumb`, `.case-cover`, `.case-image`, `.about-photo`). Para
   usar imágenes reales ahí, reemplazá esos `div` por etiquetas `<img>` que
   apunten a archivos en `assets/images/`.
3. **CV**: agregá tu PDF en `assets/cv/CV-Jimena-Estevez.pdf` (ver
   `assets/cv/LEEME.txt`). Los botones "Descargar CV" ya apuntan ahí.
4. **Nuevo proyecto**: duplicá `proyecto-01.html`, cambiá el contenido y
   agregá el link correspondiente en `projects.html` e `index.html`.
5. **Colores**: la paleta se controla desde las variables al inicio de
   `css/styles.css` (`:root { --color-accent: ... }`, etc.).
6. **Formulario de contacto**: hoy no envía datos a ningún lado (es un
   sitio estático). Para que funcione en producción, conectalo a un
   servicio como [Formspree](https://formspree.io) o
   [Netlify Forms](https://docs.netlify.com/forms/setup/) — ambos tienen
   plan gratuito y solo requieren agregar un atributo `action` (o `data-netlify`)
   al `<form>` en `contact.html`.

## Cómo verlo localmente

Abrí `index.html` directamente en el navegador, o corré un servidor local
simple desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Y entrá a `http://localhost:8000`.

## Cómo publicarlo (hosting gratuito)

Cualquiera de estas opciones sirve para un sitio estático como este:

- **Netlify**: arrastrá la carpeta del proyecto a [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel**: `npx vercel` desde la carpeta del proyecto (requiere cuenta).
- **GitHub Pages**: subí el proyecto a un repo de GitHub y activá Pages
  desde Settings → Pages, apuntando a la rama principal.

Todas ofrecen un dominio gratuito (`.netlify.app`, `.vercel.app`,
`github.io`) y la opción de conectar un dominio propio más adelante.
