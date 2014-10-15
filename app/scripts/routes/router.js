/*global define*/

define([
    'jquery',
    'backbone',
    'taskcollectionview'
], function ($, Backbone, TaskCollectionView) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            "": "index"
        },

        initialize: function(opt) {
            this.el = opt.el;
        },

        index: function() {
            // var taskCollectionView = new TaskCollectionView();
            // Empty the element
            // this.el.empty();
            // And render the taskCollections
            // this.el.append(taskCollectionView.render().el);

            // Initialize gridster
            $(".gridster ul").gridster({
                widget_margins: [10, 10],
                widget_base_dimensions: [140, 140]
            });
        }

    });

    return Router;
});
