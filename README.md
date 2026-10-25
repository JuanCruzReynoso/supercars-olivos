# Supercars Olivos

Landing page para una concesionaria de autos de alta gama en Olivos, Buenos Aires. El sitio presenta dos catálogos diferenciados, información del showroom y un formulario de contacto con validación.

## Información académica

- **Materia:** Programación III
- **Institución:** Universidad Tecnológica Nacional — Facultad Regional Avellaneda
- **Carrera:** Tecnicatura Universitaria en Programación
- **Trabajo:** Primer parcial
- **Autor:** Juan Cruz Reynoso

## Secciones

- **Inicio**: portada con imagen del showroom y accesos rápidos al catálogo.
- **Premiums & superdeportivos**: seis unidades con ficha técnica, precio de referencia y consulta directa.
- **Nobles & deportivos**: seis unidades de uso diario con ficha técnica y consulta directa.
- **Servicios**: selección, accesorios y postventa.
- **Contacto**: datos del showroom y formulario con validación en el navegador.

## Tecnologías

- HTML5 semántico.
- CSS3 con Grid, Flexbox, `clamp()`, transiciones y media queries.
- JavaScript vanilla para menú móvil, selects dependientes de categoría y modelo, validación del formulario, prerrelleno del vehículo consultado, botón para volver arriba y animaciones de entrada al hacer scroll.
- Google Fonts: Inter.
- Imágenes y consigna provistas por la cátedra.

## Estructura

```text
.
├── index.html
├── index.css
├── index.js
├── assets/
│   ├── hero-1920.jpg
│   ├── hero-960.jpg
│   ├── icono.png
│   ├── premiums-y-superdeportivos/
│   └── nobles-y-deportivos/
├── consigna-p1.pdf
└── README.md
```

## Cómo ejecutarlo

No requiere instalación ni build. Alcanza con servir la carpeta con cualquier servidor estático:

```bash
npx serve .
```

O también:

```bash
python -m http.server 5500
```

Luego abrir `http://localhost:3000` o `http://localhost:5500` según el comando utilizado.

## Notas

- Los precios son de referencia y no representan una oferta comercial real.
- El formulario valida los datos y muestra una confirmación en pantalla; no envía información a un servidor.
- Las imágenes de los vehículos son las provistas en la consigna.
