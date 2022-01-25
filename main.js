const app = new Vue({
    el: '#app',
    data:{
        email: "",
    },
    mounted: function() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((risposta) => {
        // handle success
        this.email = risposta.data.response;
        console.log(this.email)
    })
        .catch(function (error) {
        // handle error
        console.log(error);
    })

    },
})