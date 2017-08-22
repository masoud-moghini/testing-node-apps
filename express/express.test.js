const request =require('supertest');
var app= require('./express').app;
var expect =require('expect');
it('should verify that a specific user exists',(done)=>{
    request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
            expect(res['body']['users']).toInclude('masoud moghini')
            })
        .end(done);
        })
