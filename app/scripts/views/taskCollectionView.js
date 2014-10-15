/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'taskcollection',
    'taskmodelview',
    'taskmodel'
], function ($, _, Backbone, JST, TaskCollection, TaskModelView, TaskModel) {
    'use strict';

    var TaskCollectionView = Backbone.View.extend({
        el: '#appContainer',
        template: JST['app/scripts/templates/taskCollectionView.ejs'],

        tagName: 'ul',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            // The collection
            // this.collection = new TaskCollection();
            // this.collection.create(new TaskModel({name: "Emil"}));
            // this.collection.fetch();

            this.$grid = this.$('.gridster');
            this.$todoList = this.$('#todo-list');

            this.listenTo(TaskCollection, 'add', this.addOne);
            this.listenTo(TaskCollection, 'reset', this.addAll);
            this.listenTo(TaskCollection, 'change:completed', this.filterOne);
            this.listenTo(TaskCollection, 'filter', this.filterAll);
            this.listenTo(TaskCollection, 'all', this.render);

            TaskCollection.fetch({reset:true});
        },

        render: function () {
            console.log("render");
            this.$grid.html(this.template(this));

            // Render each task as a subview
            this.collection.each(function(task) {
                var taskView = new TaskModelView({model: task});
                this.$grid.append(taskView.render().el);
            }, this);

            return this;
        }
    });

    return TaskCollectionView;
});
