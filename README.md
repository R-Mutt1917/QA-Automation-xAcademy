# 🚀 Actividad Clase 5 - Automatización SauceDemo & Gestión de Defectos

Proyecto de automatización de pruebas de extremo a extremo con **Cypress** para los procesos críticos de SauceDemo (Carrito y Checkout). Incluye guía de ejecución local y enlaces de gestión de defectos.

---

## 📋 Enlaces del proyecto

- **Repositorio GitHub:** [R-Mutt1917/QA-Automation-xAcademy](https://github.com/R-Mutt1917/QA-Automation-xAcademy)
- **Tablero de Gestión de Defectos (Trello):** https://trello.com/invite/b/6a19ee3bb477f66dcc2f1429/ATTIb7bfa381530ca04f02eb68058ee7be5c7815B92F/actividad-clase-5

---

## 🛠️ Stack tecnológico

- Core: Cypress (v15+)
- Lenguaje: JavaScript (ES6)
- Gestión de incidentes: Trello

---

## ⚙️ Requisitos previos

- Node.js (20+ recomendable)
- npm (o yarn)

---

## Instalación y ejecución

1. Clonar el repositorio y entrar en la carpeta del proyecto:

```bash
git clone https://github.com/R-Mutt1917/QA-Automation-xAcademy.git
cd "QA-Automation-xAcademy"
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la UI de Cypress (modo desarrollo):

```bash
npx cypress open
```

4. Ejecutar la suite en modo headless:

```bash
npx cypress run
```

---

## Estructura relevante

- Configuración principal: [cypress.config.js](cypress.config.js)
- Tests de ejemplo: [cypress/e2e/inventario.cy.js](cypress/e2e/inventario.cy.js), [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js), [cypress/e2e/sauceDemoShop.cy.js](cypress/e2e/sauceDemoShop.cy.js)
