describe('Suite de Pruebas E2E - Módulos Carrito y Checkout', () => {

  // Aislamiento de pruebas: Se ejecuta antes de CADA caso de prueba
  beforeEach(() => {
    // 1. Configuración obligatoria del viewport
    cy.viewport(1280, 720);

    // 2. Visitar el sitio base de la entrega
    cy.visit('https://www.saucedemo.com/');

    // 3. Login de preparación con usuario estándar (datos limpios del Excel)
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Validar que el login fue exitoso antes de que inicie el test individual
    cy.url().should('include', '/inventory.html');
  });

  /* ==========================================
     MÓDULO: CARRITO (Basado en Sheet 1 del Excel)
     ========================================== */

  it('TC-03: Agregar producto al carrito exitosamente y validar badge', () => {
    // Definición y uso de Aliases para selectores repetitivos
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').as('btnAgregarMochila');
    cy.get('@btnAgregarMochila').click();

    // Aserciones explícitas de cambio de estado
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1');

    // Navegación guiada y verificación en la vista del carrito
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
  });

  it('TC-04: Eliminar un producto de forma correcta desde la pantalla del Carrito', () => {
    // Preparación autónoma e independiente para este test
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_link').click();

    // Acción de eliminar
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();

    // Aserciones finales: El elemento desaparece y el badge se destruye
    cy.get('.cart_item').should('not.exist');
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  /* ==========================================
     MÓDULO: CHECKOUT (Basado en Sheet 2 del Excel)
     ========================================== */

  it('TC-05: Flujo de Checkout Exitoso (Compra completa de punta a punta)', () => {
    // Flujo inicial del carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();

    // Ingreso a Checkout Step One
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');

    // Completar Formulario usando datos de entrada válidos
    cy.get('[data-test="firstName"]').type('Matías');
    cy.get('[data-test="lastName"]').type('Zelarayán');
    cy.get('[data-test="postalCode"]').type('2000'); 
    cy.get('[data-test="continue"]').click();

    // Verificación de Información Financiera en Step Two
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.summary_total_label').should('contain', '$32.39'); 
    
    // Método de exploración extra solicitado: scroll e interacción directa
    cy.get('[data-test="finish"]').scrollIntoView().click();

    // Aserción de flujo finalizado con éxito
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    cy.get('.pony_express').should('be.visible');
  });
});