new Vue({
  el: "#exercise_1",
  data: {
    name: 'Matheus Gomide',
    age: '23',
    imageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMH1aUUTraVl2DmfszcMMi3yBpHKpCH6_vn76XQr0Yx71SXB0dh8Z7mzk'
  },
  methods: {
    getRandom: function () {
      return Math.random() * (1 - 0) + 0;
    }
  }
})

new Vue({
  el: "#exercise_2",
  data: {
    value: 'Old value'
  },
  methods: {
    alert: function () {
      alert('Funcionando');
    }
  }
})

new Vue({
  el: "#exercise_3",
  data: {
    value: 0
  },
  computed: {
    result: function () {
      return this.value == 37 ? 'done' : 'not there yet'
    }
  },
  watch: {
    result: function () {
      var vm = this;

      setTimeout(function () {
        vm.value = 0;
      }, 5000);
    }
  }
})

new Vue({
  el: "#exercise_4",
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    }
  },
  methods: {
    startEffect: function() {
      
    }
  }
})