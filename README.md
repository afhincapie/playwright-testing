# 🧪 Proyecto de Pruebas Automatizadas con Playwright  

Este repositorio es una práctica de automatización de pruebas UI utilizando Playwright.

## 🚀 Índice  
- [📌 ¿Qué es Playwright?](#-qué-es-playwright)  
- [🔧 Instalación](#-instalación)  
- [▶️ Ejecución de Pruebas](#️-ejecución-de-pruebas)  
- [📄 Estructura del Proyecto](#-estructura-del-proyecto)  

## 📌 ¿Qué es Playwright?

Playwright es una herramienta de automatización de pruebas de código abierto para aplicaciones web. Permite controlar navegadores como Chrome, Firefox y Safari para realizar pruebas de interfaz de usuario (UI), simulando interacciones de los usuarios, como hacer clic, completar formularios y verificar elementos en una página web. 
### Características del framework: 
- Soporte para múltiples navegadores: Playwright soporta Chromium, Firefox y WebKit, permitiendo pruebas en los navegadores más populares.

- Automatización en múltiples plataformas: Funciona en Windows, macOS y Linux, lo que lo hace muy versátil para entornos de desarrollo y CI/CD.

- Pruebas en dispositivos móviles: Permite simular dispositivos móviles y emular sus características, como el tamaño de la pantalla, la orientación y las interacciones táctiles.

- Captura de trazas y videos: Playwright tiene una funcionalidad integrada para capturar videos, capturas de pantalla y trazas de las pruebas, lo que facilita la depuración y el análisis de fallos.

### Características del proyecto:

- Pruebas automatizadas de UI para la compra exitosa de productos en un e-commerce.
- Uso del patrón Page Object Model (POM) para una mejor organización del código.
- Uso de steps para describir mejor el flujo de la prueba.
- Reportes generados automáticamente.

## 🔧 Instalación  

1️⃣ Clonar el repositorio:  
```bash
git clone https://github.com/afhincapie/playwright-testing.git
```

2️⃣ Instalar las dependencias:
```bash
npm install
```

3️⃣ Instalar los navegadores requeridos por Playwright:
```bash
npx playwright install
```

## ▶️ Ejecución de Pruebas

- Ejecutar todas las pruebas:
```bash
npx playwright test
```
- Ejecutar pruebas en un navegador específico:

```bash
npx playwright test --project=chromium
```

- Ejecutar pruebas en modo visual:

```bash
npx playwright test --headed
```

- Ver el reporte de pruebas:

```bash
npx playwright show-report
```

## 📄 Estructura del Proyecto
```bash
📂 playwright-project/
│── 📂 tests/                # Pruebas automatizadas
│   ├── test.spec.ts         # Pruebas de compra de productos e-commerce
│── 📂 pages/                # Page Objects
│   ├── CartPage.ts          # Clase para la página de carrito
│   ├── FormPayPage.ts       # Clase para la página de formulario de pago
│   ├── ProductsPage.ts      # Clase para la página de productos
│── 📂 utils/                # Helpers
│── playwright.config.ts     # Configuración de Playwright
│── package.json             # Dependencias y scripts
│── README.md                # Documentación del proyecto
```
