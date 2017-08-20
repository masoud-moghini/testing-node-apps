const test_module=require('./util')
const expect=require('expect')

it('should add two numbers',()=>{
    var res=test_module.add(5,19);

    expect(res).toBe(25);
    // if(res!==24){
    //     throw new Error(`must be 24 but got ${res}`);
    // }
});


it('should return square of a number',()=>{
    var res=test_module.square(7);
    if(res!==49){
        throw new Error(`must be 49 but got ${res}`);
    }
});
