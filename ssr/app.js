(function () {
  var app = new Vue({
  template: '<div id="app">You have been here for {{ counter }} seconds</div>',
  data: {
    counter: 0
  },
  created() {
    setInterval(() => {
      this.counter += 1
    }, 1000);
  }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = app;
  }
  else {
    this.app = app;
  }
})(this);
