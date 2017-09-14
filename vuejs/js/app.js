new Vue({
   el: '#app',
   data: {
       title: 'Teste de titulo',
       link: 'http://matheusggds.github.io'
   },
   methods: {
       getTitle: function() {
           return this.title;
       },
       changeLink: function(event) {
           this.link = event.target.value;
       }
   }
});
