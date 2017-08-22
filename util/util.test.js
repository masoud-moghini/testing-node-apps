const test_module=require('./util')
const expect=require('expect')

it('should add two numbers',()=>{
    var res=test_module.add(5,19);

    expect(res).toBe(24);
    // if(res!==24){
    //     throw new Error(`must be 24 but got ${res}`);
    // }
});


it('should do asynchronous square',(done)=>{
    test_module.squareAdd(5,(square)=>{
        expect(square).toBe(25).toBeA('number');
        done();
    })
})
it('should verify ',()=>{
    var user=new Object();
    test_module.setName(user,'masoud moghini');
    expect(user).toInclude({first_name:'masoud',second_name:'moghini'});
})

it('should return square of a number',()=>{
    var res=test_module.square(7);
    // if(res!==49){
    //     throw new Error(`must be 49 but got ${res}`);
    // }

    expect(res).toBe(49);
    expect(res).toBeA('number');
});
