# Mi Portafolio Web 🚀

Un portafolio web moderno y responsivo para desarrolladores, con animaciones CSS y diseño minimalista.

## Características ✨

- ✅ Diseño moderno y minimalista
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Animaciones suaves con CSS
- ✅ Navegación sticky
- ✅ Secciones completas (Hero, Sobre mí, Habilidades, Proyectos, Experiencia, Contacto)
- ✅ Formulario de contacto
- ✅ Timeline de experiencia
- ✅ Links a redes sociales
- ✅ Efectos de hover y scroll

## Estructura de Archivos

```
portafoliov1.0.0/
├── index.html      # Estructura HTML
├── style.css       # Estilos CSS
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este archivo
```

## Cómo Personalizar

### 1. Información Personal

Edita el archivo `index.html` y reemplaza:

- **"Mi Portafolio"** → Tu nombre
- **"Hola, soy Desarrollador"** → Tu presentación
- **"Especializado en..."** → Tu especialidad
- **email@ejemplo.com** → Tu email real
- **+34 123 456 789** → Tu teléfono
- **Tu Ciudad, País** → Tu ubicación

### 2. Sobre Mí

En la sección **#sobre**, actualiza:
```html
<p>Soy un desarrollador apasionado...</p>
```

Personaliza también los números en los stat-box:
```html
<h3>50+</h3>  <!-- Cantidad de proyectos -->
<h3>30+</h3>  <!-- Cantidad de clientes -->
<h3>5+</h3>   <!-- Años de experiencia -->
```

### 3. Habilidades

En la sección **#habilidades**, edita las tarjetas de habilidades:
```html
<div class="skill-card">
    <i class="fab fa-html5"></i>
    <h3>Frontend</h3>
    <p>HTML, CSS, JavaScript, React, Vue.js</p>
</div>
```

Puedes cambiar los iconos usando Font Awesome: https://fontawesome.com/icons

### 4. Proyectos

En la sección **#proyectos**, personaliza tus proyectos:
```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(...)"></div>
    <div class="project-info">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción</p>
        <div class="project-tags">
            <span>Tecnología 1</span>
            <span>Tecnología 2</span>
        </div>
        <a href="https://tu-proyecto.com" class="btn btn-secondary">Ver más</a>
    </div>
</div>
```

### 5. Experiencia y Educación

En la sección **#experiencia**, actualiza la timeline:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Tu Puesto</h3>
        <p class="timeline-company">Empresa</p>
        <p class="timeline-date">2021 - Presente</p>
        <p>Descripción de tus logros...</p>
    </div>
</div>
```

### 6. Redes Sociales

En la sección **#contacto**, actualiza los links:
```html
<a href="https://github.com/tuusuario"><i class="fab fa-github"></i></a>
<a href="https://linkedin.com/in/tuusuario"><i class="fab fa-linkedin"></i></a>
<a href="https://twitter.com/tuusuario"><i class="fab fa-twitter"></i></a>
```

### 7. Colores Personalizados

En `style.css`, edita las variables de color:
```css
:root {
    --primary-color: #2563eb;      /* Azul principal */
    --secondary-color: #1e40af;    /* Azul secundario */
    --text-dark: #1f2937;          /* Texto oscuro */
    --text-light: #6b7280;         /* Texto claro */
    --bg-light: #f9fafb;           /* Fondo claro */
}
```

### 8. Gradientes Personalizados

Puedes cambiar los gradientes en:
- **Hero**: `.hero { background: linear-gradient(...) }`
- **Proyectos**: `.project-image { style="background: linear-gradient(...)" }`
- **Contacto**: `.contact { background: linear-gradient(...) }`

Generador de gradientes: https://www.gradientgenerator.com/

## Funcionalidades JavaScript

- **Menú responsivo** (hamburguesa en móvil)
- **Scroll suave** a secciones
- **Animaciones al scroll** (fade-in)
- **Números animados** en estadísticas
- **Validación de formulario** básica
- **Efecto activo** en navegación según scroll

## Cómo Usar

1. **Abre en navegador**: Abre el archivo `index.html` en tu navegador
2. **Personaliza**: Edita los archivos HTML, CSS y JS según necesites
3. **Prueba**: Guarda los cambios y recarga la página
4. **Publica**: Sube los archivos a un servidor web

## Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime, etc.)
- Conexión a internet (para Font Awesome)

## Recursos

- **Font Awesome**: https://fontawesome.com/
- **Google Fonts**: https://fonts.google.com/
- **Color Picker**: https://htmlcolorcodes.com/
- **Gradient Generator**: https://www.gradientgenerator.com/

## Mejoras Futuras

- [ ] Agregar más animaciones
- [ ] Darkmode toggle
- [ ] Modal para ver proyectos en detalle
- [ ] Blog integrado
- [ ] Backend para formulario de contacto
- [ ] SEO optimizado

## Licencia

Libre para usar y modificar. 

---

**¡Espero que disfrutes tu nuevo portafolio!** 🎉

¿Preguntas? Personaliza según tus necesidades.
