new Vue({
    el: "#app",

    data: {
        health: 100,
        ended: false,
        allowed: true
        

    },
    methods: {
        punch: function () {
            this.health -= 10
            if (this.health == 0){
                this.allowed= false;  
                this.ended = true              
            }

        },
        restart: function () {
            this.health = 100
            this.allowed = true
            this.ended = false
        }
    }
})