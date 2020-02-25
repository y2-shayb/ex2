const handlerManager = function([ handler1, handler2 ], user){
    if(user.id > 5){
        handler1(user)
    }
    else{
        handler2(user)
    }
}