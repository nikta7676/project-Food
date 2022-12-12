function myModule(){
    this.hello = function(){
        console.log("hello");
    };

    this.say = function(){
        console.log("say");
    };

}

module.exports = myModule();