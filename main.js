const app = new Vue({
    el: '#app',
    data:{
        email: [

        ]
    },
    mounted: function() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response) {
        // handle success
        console.log(response);
    })
        .catch(function (error) {
        // handle error
        console.log(error);
  })

    },
})