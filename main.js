const app = new Vue({

    el: '#app',

    data:{

        counter: 0,
        
        menu:[
            'Introduzione',
            'Norme sulla privacy',
            'Termini di servizio',
            'Tecnologie',
            'Domande frequenti'
        ],
    },

    methods:{
        clicked(index){
            this.counter = index;
        }
    }
});