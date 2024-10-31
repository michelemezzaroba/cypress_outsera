describe('FakeStoreAPI - HTTP Methods', () => {
    const baseUrl = 'https://fakestoreapi.com';
  
    
    it('GET - Obter todos os produtos', () => {
      cy.request(`${baseUrl}/products`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array'); 
      });
    });
  
    
    it('GET - Obter um produto pelo ID', () => {
      const productId = 1;
      cy.request(`${baseUrl}/products/${productId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', productId); 
      });
    });
  
    
    it('POST - Criar um novo usuário', () => {
      cy.request('POST', `${baseUrl}/users`, {
        email: 'novousuario@qa.com',
        username: 'novousuario',
        password: 'senha123'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id'); 
      });
    });
  
    
    it('PUT - Atualizar um produto existente', () => {
      const productId = 1;
      cy.request('PUT', `${baseUrl}/products/${productId}`, {
        title: 'Produto Atualizado',
        price: 99.99,
        description: 'Descrição atualizada do produto',
        image: 'https://example.com/image.jpg',
        category: 'category-atualizada'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'Produto Atualizado'); 
      });
    });
  
    
    it('DELETE - Remover um usuário pelo ID', () => {
      const userId = 1;
      cy.request('DELETE', `${baseUrl}/users/${userId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', userId);
      });
    });
  });
  