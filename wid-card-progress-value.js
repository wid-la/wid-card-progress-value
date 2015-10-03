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
        type: String,
        value: '../disk.svg'
      },

      /**
       * Value of percentage
       * @type {String}
       */
      value: {
        type: String,
        value: '36'
      },

      /**
       * Color of the paper-progress
       * @type {String}
       */
      color: {
        type: String,
        value: '#FD8F26'
      }

    },

    ready: function ready() {
      this.$.paperProgress.customStyle['--paper-progress-active-color'] = this.color;
    }

  });
})();