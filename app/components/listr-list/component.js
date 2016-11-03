import Ember from 'ember';

export default Ember.Component.extend({
  form: {
   text: null,
   done: false,
  },

  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,

  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },

    toggleItemDone (item) {
      return this.sendAction('toggleItemDone', item);
    },

    deleteItem (item) {
      return this.sendAction('delete', item);
    },

    createItem () {
      let newItem = this.get('form');
      newItem.list = this.get('list');
      this.sendAction('createItem', newItem);
      this.set('form.text', null);
    },
  },
});
