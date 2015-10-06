'use strict';

(function () {
  Polymer({

    is: 'wid-card-progress-value',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * Icon
       * @type {String}
       */
      icon: {
        type: String,
        value: 'cpu.svg'
      },

      /**
       * Value of percentage
       * @type {String}
       */
      value: {
        type: String,
        value: '0'
      },

      /**
       * Color of the paper-progress
       * @type {String}
       */
      color: {
        type: String,
        value: '#FD8F26',
        observer: '_onColorChanged'
      }

    },

    _getIconImage: function _getIconImage(img) {
      return '/images/cards/' + img;
    },

    _percentValue: function _percentValue(value) {
      return value + '%';
    },

    _onColorChanged: function _onColorChanged(value) {
      this.$.paperProgress.customStyle['--paper-progress-active-color'] = value;
    }

  });
})();