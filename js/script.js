const {createApp} = Vue; // destructuring
// call function createApp
createApp({
    // funnction return
    data() {    
        // container variable
        return{             
            userName: "",
            inputUser:"",
            img: "",
        }
        // container variable
    },
    
    // function container
    methods: {
        userHello: function(){
            this.userName = "ciao " + this.inputUser;
            this.img = "./img/po.jpg"
            this.inputUser = "";
        }
    }
    // function container
}).mount("#app");// link to container DOM


// const {createApp} = Vue;

// createApp({
//     data() {
//         return{
//             variabile: "ciao",
//             img: "./img/po.jpg",
//         }
//     },

// }).mount("#app");


//  take createApp function with "detructuring"
