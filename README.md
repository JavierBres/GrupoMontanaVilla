# Grupo de Montaña Llama Ello - Sitio Web

Página web oficial del **Grupo de Montaña Llama Ello** ubicado en Villaviciosa, Asturias.

## 📋 Descripción

Este proyecto es una modernización y mejora de la página web anterior del grupo de montaña. Se ha rediseñado completamente para ofrecer una experiencia más accesible, usable y moderna a los visitantes, manteniendo la facilidad de mantenimiento para personas sin conocimientos técnicos de programación.

## 🎯 Objetivos del proyecto

- **Modernización**: Actualización del diseño y estructura de la página anterior.
- **Accesibilidad**: Mejora de la experiencia de usuario para todos los visitantes.
- **Usabilidad**: Navegación intuitiva y contenido bien organizado.
- **Mantenibilidad**: Estructura simple que permite actualizaciones sin conocimientos de programación.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica y accesible.
- **CSS3**: Estilos modernos y diseño responsive.
- **JavaScript**: Interactividad y funcionalidades dinámicas.

## 📁 Estructura del proyecto

```
Grupo montaña Villaviciosa/
├── index.html              # Página principal
├── assets/                 # Recursos multimedia
│   ├── img/               # Imágenes y logos
│   └── document/          # Documentos PDF y otros archivos
├── css/                    # Hojas de estilo
│   ├── styles.css         # Estilos principales
│   ├── common.css         # Estilos comunes
│   ├── header.css         # Estilos del encabezado
│   ├── navbar.css         # Estilos de navegación
│   ├── footer.css         # Estilos del pie de página
│   ├── section.css        # Estilos de secciones
│   └── [otras hojas de estilo específicas]
├── js/                     # Scripts JavaScript
│   ├── hamburger-menu.js  # Menú hamburguesa responsive
│   └── navbar.js          # Funcionalidad de navegación
└── pages/                  # Páginas secundarias
    ├── activities.html    # Actividades 2025
    ├── activities_old.html # Actividades años anteriores
    ├── climbing_wall.html # Información del rocódromo
    ├── history.html       # Historia del grupo
    ├── links.html         # Enlaces de interés
    ├── members.html       # Información para hacerse socio/a
    ├── photos.html        # Galería de fotos
    ├── photography.html   # Concurso de fotografía
    ├── photography_23.html # Fotos concurso 2023
    ├── photography_24.html # Fotos concurso 2024
    ├── photography_25.html # Fotos concurso 2025
    └── villacabra.html    # VillaCabra Trail
```

## ✨ Características principales

### Secciones
- **Inicio**: Noticias y próximas salidas.
- **Historia**: Historia del grupo de montaña.
- **Actividades**: Calendario de actividades actuales y archivo de años anteriores.
- **Rocódromo**: Información sobre el rocódromo municipal.
- **Fotos**: Galería de imágenes de las actividades.
- **Concurso de Fotografía**: FotoMaliayo y ediciones anteriores.
- **Hacerse socio/a**: Información para nuevos miembros.
- **Enlaces**: Enlaces de interés relacionados con montañismo.

## 🚀 Cómo usar

### Visualización local

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en tu navegador web.
3. Navega por las diferentes secciones.

### Despliegue

Para publicar la página web:

1. Sube todos los archivos a tu servidor web o servicio de hosting.
2. Asegúrate de mantener la estructura de carpetas intacta.
3. El archivo `index.html` debe estar en la raíz del dominio.

## 📝 Guía de mantenimiento

### Actualizar noticias

1. Abre `index.html` en un editor de texto.
2. Localiza la sección `<article class="main-container-item2">`
3. Añade o modifica los artículos siguiendo la estructura existente:

```html
<article class="main-container-item2-text">
    <header>
        <h3>Título de la noticia</h3>
    </header>
    <div class="main-container-item2-news">
        <p>Contenido de la noticia...</p>
        <img src="assets/img/nombre-imagen.jpg" alt="Descripción" loading="lazy">
    </div>
</article>
```

### Actualizar próxima salida

1. Abre `index.html`
2. Localiza la sección `<article class="main-container-item3">`
3. Modifica la fecha, destino y enlace al cartel.

### Añadir imágenes

1. Guarda las imágenes en la carpeta `assets/img/`
2. Referencia la imagen en el HTML: `<img src="assets/img/nombre-imagen.jpg" alt="Descripción">`

## 👨‍💻 Desarrollo

Desarrollado con ❤️ por Javier BP para el Grupo de Montaña Llama Ello.

## 📄 Licencia

Este proyecto es propiedad del Grupo de Montaña Llama Ello.
