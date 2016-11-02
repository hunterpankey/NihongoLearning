module NihongoLearning {
    'use strict';

    export var app: angular.IModule =
        angular.module('nihongoLearning', ['nihongoLearning.core',
        'nihongoLearning.home',
        'blocks.log',
        'blocks.exception',
        'blocks.router']);
}
