/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            exports: "Backbone",
            deps: [
                "underscore",
                "jquery"
            ]
        },
        bootstrap: {
            deps: [
                "jquery"
            ],
            exports: "jquery"
        },
        localstorage: [
            "backbone",
            "underscore"
        ]
    },
    paths: {
        underscore: "../bower_components/underscore/underscore",
        jquery: "../bower_components/jquery/dist/jquery",
        backbone: "../bower_components/backbone/backbone",
        bootstrap: "../bower_components/sass-bootstrap/dist/js/bootstrap",
        affix: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix",
        alert: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert",
        button: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button",
        carousel: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel",
        collapse: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse",
        dropdown: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown",
        tab: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab",
        transition: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition",
        scrollspy: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy",
        modal: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal",
        tooltip: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip",
        popover: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover",
        lodash: "../bower_components/lodash/dist/lodash.compat",
        modernizr: "../bower_components/modernizr/modernizr",
        requirejs: "../bower_components/requirejs/require",
        "requirejs-text": "../bower_components/requirejs-text/text",
        localstorage: "../bower_components/backbone.localStorage/backbone.localStorage",
        gridster: "../bower_components/gridster/dist/jquery.gridster",
        router: "routes/router",
        taskcollectionview: "views/taskCollectionView",
        taskmodelview: "views/taskModelView",
        taskcollection: "collections/taskCollection",
        taskmodel: "models/taskModel",
        "backbone.localStorage": "../bower_components/backbone.localStorage/backbone.localStorage"
    },
    packages: [

    ]
});

require([
    'backbone', 'jquery', 'router', 'taskcollectionview'
], function (Backbone, $, Router, TaskCollectionView) {

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });

    var container = $("#appContainer");
    var router = new Router({el: container});
    Backbone.history.start();

    new TaskCollectionView();
});
