new Vue({
  // The id from the document.
  el: '#Itemlist',

  // The data displayed in the v-for.
  data: { items: [] },

  methods: {
    // Grab all the items from the JSON API
    showItems: function() {
      fetch('http://localhost:3000/items.json')
        .then(response => response.json()
          .then(json => { this.items = json; }))
          .catch(error => { console.log(error); })
        .catch(error => { console.log(error); })
    },

    // Delete one item via the JSON API
    deleteItem: function(id) {
      fetch('http://localhost:3000/items/' + id + '.json',
        {method: 'DELETE'})
          .then(this.showItems)
          .catch(error => { console.log(error); })
        },

    // Create one item via the JSON API
    newItem: function(e) {
      // Don't submit the usual way.
      e.preventDefault()

      // Grab the data from the form.
      data = {what: e.target.elements.what.value,
        when: e.target.elements.when.value}

      // Submit via JSON.
      fetch('http://localhost:3000/items.json', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(this.showItems)
        .catch(error => { console.log(error); })
    },
  },

  // The first thing to do.
  mounted: function() {
    this.showItems()
  },
})
