module.exports.add=(a,b)=>{
    return a+b;
}

module.exports.square=(x)=>{
    return x*x ;
}


module.exports.squareAdd=(x,callback)=>{
    setTimeout(()=>{
        callback(x*x);
        },1500)
}
module.exports.setName=(user,name)=>{
    var names=name.split(' ');
    user.first_name=names[0];
    user.second_name=names[1];

    return ; 
}