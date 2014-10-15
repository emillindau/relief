/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'gridster'
], function ($, _, Backbone, JST) {
    'use strict';

    var TaskModelView = Backbone.View.extend({
        template: JST['app/scripts/templates/taskModelView.ejs'],

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            // this.$el.html(this.template(this));
            this.setElement(this.template(this));
            return this;
        },

        name: function() { return this.model.get("name"); }
    });

    return TaskModelView;
});
