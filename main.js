const app = new Vue({
    el: '#app',
    data:{
        email: [

        ]
        
    },
    mounted() {
        for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((risposta) => {
        // handle success
        this.email.push(risposta.data.response);

        console.log(this.email)
    })
        .catch(function (error) {
        // handle error
        console.log(error);
    })

    }},

})

