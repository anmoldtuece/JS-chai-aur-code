const user={
    username:"anmol",
    price:100,

    welcomemessage:function(){
        console.log((`${this.username} , welcome to website`))
    }

}
user.welcomemessage()
user.username="ayush"
user.welcomemessage()
