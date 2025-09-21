// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai'); 

// Apicação
const app = require('../../app');

// Mock
const transferService = require('../../service/transferService');
const { from } = require('form-data');

// Testes
describe('Transfer Controller', () => {
    describe('POST /transfers', () => {
        it('Quando informo remetente e destinatário inexistentes recebo 400', async () => {
            const resposta = await request(app)
                .post('/transfers')
                .send({
                     from: 'bruno', 
                     to: 'livia', 
                     value: 100
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário não encontrado.')
         });

         it('Usando Mocks: Quando informo remetente e destinatário inexistentes recebo 400', async () => {
            //Mocar apenas a função do transfer do Service
            const transferServiceMock = sinon.stub(transferService, 'transfer');
            transferServiceMock.throws(new Error('Usuário não encontrado.'));
            
            const resposta = await request(app)
                .post('/transfers')
                .send({
                     from: 'bruno', 
                     to: 'livia', 
                     value: 100
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário não encontrado.')

            //Reseto o Mock
            sinon.restore();
        });

       /* it('Usando Mocks: Quando informo valores válidos eu tenho sucesso com 201 CREATED', async () => {
            //Mocar apenas a função do transfer do Service
            const transferServiceMock = sinon.stub(transferService, 'transfer');
            transferServiceMock.returns({
                from: 'bruno',
                to: 'livia',
                value: 100,
                date: new Date()
            });
            
            const resposta = await request(app)
                .post('/transfers')
                .send({
                     from: 'bruno', 
                     to: 'livia', 
                     value: 100
                });

            //expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('from', 'bruno');
            expect(resposta.body).to.have.property('to', 'livia');
            expect(resposta.body).to.have.property('value', 100);

            //Reseto o Mock
            sinon.restore();
        }); */

    });

    describe('GET /transfers', () => {
        // Its ficam aqui
    });
});
