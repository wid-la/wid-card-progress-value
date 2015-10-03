'use strict';

(function () {
  Polymer({

    is: 'wid-card-progress-value',

    behaviors: [Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * Icon
       * @type {String}
       */
      icon: {
        type: String
      },

      /**
       * Value of percentage
       * @type {String}
       */
      value: {
        type: String
      },

      /**
       * Color of the paper-progress
       * @type {String}
       */
      color: {
        type: String
      }

    },

    ready: function ready() {
      this.value = '36';
      this.icon = '../disk.svg';
      this.color = '#FD8F26';
      this.$.paperProgress.customStyle['--paper-progress-active-color'] = this.color;
    }

  });
})();