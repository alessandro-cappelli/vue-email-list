const app = new Vue({
    el: '#app',
    data:{
        email: [

        ]
    },
    mounted: function() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (risposta) {
        // handle success
        console.log(risposta.data.response);
    })
        .catch(function (error) {
        // handle error
        console.log(error);
  })

    },
})