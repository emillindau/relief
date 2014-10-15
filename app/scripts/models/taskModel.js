/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TaskModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            name: "temp"
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return TaskModel;
});
