/*global define*/

define([
    'underscore',
    'backbone',
    'taskmodel',
    'localstorage'
], function (_, Backbone, TaskModel) {
    'use strict';

    var TaskCollection = Backbone.Collection.extend({
        model: TaskModel,
        localStorage: new Backbone.LocalStorage('Tasks')
    });

    return TaskCollection;
});
