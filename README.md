# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Nombre del proyecto:
Hoja de Vida React

## Descripción del Ejercicio
En este ejercicio construimos una hoja de vida dinámica utilizando React. Aprendimos a reutilizar componentes mediante el uso de **props** y **desestructuración**, permitiendo una mejor organización, escalabilidad y mantenimiento del código.

Se crearon componentes independientes como `CabeceraCV`, `Perfil`, `Experiencia` y `Educacion`, los cuales reciben datos desde el componente principal (`App.jsx`) o desde un archivo externo (`data.js`). También se utilizaron operaciones lógicas y arrays para renderizar listas de forma dinámica.

## Componentes reutilizables implementados:
- `CabeceraCV.jsx` → Recibe: nombre, cargo, ciudad, contacto
- `Perfil.jsx` → Recibe: resumen profesional
- `Experiencia.jsx` → Recibe: lista de experiencias (cargo, empresa, periodo)
- `Educacion.jsx` → Recibe: lista de estudios y talleres

## Instrucciones para ejecutar el proyecto

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/cv-react-nombre-aprendiz.git
cd cv-react-nombre-aprendiz

![alt text](image-2.png)

![alt text](image.png)

![alt text](image-1.png)