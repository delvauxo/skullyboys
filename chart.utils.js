'use strict';

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    purple: 'rgb(153, 102, 255)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    grey: 'rgb(201, 203, 207)'
};

(function(global) {
    var MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var COLORS = [
        '#4dc9f6',
        '#f67019',
        '#f53794',
        '#537bc4',
        '#acc236',
        '#166a8f',
        '#00a950',
        '#58595b',
        '#8549ba'
    ];
    var Samples = global.Samples || (global.Samples = {});
    var Color = global.Color;
    Samples.utils = {
        // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
        srand: function(seed) {
            this._seed = seed;
        },

        rand: function(min, max) {
            var seed = this._seed;
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            this._seed = (seed * 9301 + 49297) % 233280;
            return min + (this._seed / 233280) * (max - min);
        },
        numbers: function(config) {
            var cfg = config || {};
            var count = cfg.count || 8;
            var values = cfg.values || [];
            var decimals = cfg.decimals || 8;
            var dfactor = Math.pow(10, decimals) || 0;
            var percentage = cfg.percent || false;
            var data = [];
            var i, value;

            // PERCENTAGE.
            if (percentage) {
                let sum_datas = 0
                for (let i = 0; i < values.length; i++) {
                    sum_datas += values[i];
                } 
                for (let i = 0; i < values.length; i++) {
                    values[i] = ((100 * values[i]) / sum_datas);
                }
            }
        
            for (i = 0; i < count; ++i) {
                value = values[i];
                value = (Math.round(dfactor * value) / dfactor)
                data.push(value || null)
            }

            return data;
        },
        labels: function(config) {
            var cfg = config || {};
            var min = cfg.min || 0;
            var max = cfg.max || 100;
            var count = cfg.count || 8;
            var step = (max - min) / count;
            var decimals = cfg.decimals || 8;
            var dfactor = Math.pow(10, decimals) || 0;
            var suffix = cfg.suffix || '';
            var values = [];
            var i;

            for (i = min; i < max; i += step) {
                values.push(suffix + Math.round(dfactor * i) / dfactor);
            }

            return values;
        },
        months: function(config) {
            var cfg = config || {};
            var count = cfg.count || 12;
            var section = cfg.section;
            var values = [];
            var i, value;

            for (i = 0; i < count; ++i) {
                value = MONTHS[Math.ceil(i) % 12];
                values.push(value.substring(0, section));
            }

            return values;
        },
        color: function(index) {
            return COLORS[index % COLORS.length];
        },

        //transparentize: function(color, opacity) {
        //  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
        //  return ColorO(color).alpha(alpha).rgbString();
        //}
        transparentize: function (r, g, b, alpha) {
              const a = (1 - alpha) * 255;
              const calc = x => Math.round((x - a)/alpha);

              return `rgba(${calc(r)}, ${calc(g)}, ${calc(b)}, ${alpha})`;
            }
    

    };
    // DEPRECATED
    window.randomScalingFactor = function() {
        return Math.round(Samples.utils.rand(-100, 100));
    };
    // INITIALIZATION
    Samples.utils.srand(Date.now());

    // Google Analytics
    /* eslint-disable */
    if (document.location.hostname.match(/^(www\.)?chartjs\.org$/)) {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-28909194-3', 'auto');
        ga('send', 'pageview');
    }
    /* eslint-enable */

}(this));