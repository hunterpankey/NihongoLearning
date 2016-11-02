module NihongoLearning.Core {
    'use strict';

    var core = angular.module('nihongoLearning.core');

    var config = {
        appErrorPrefix: '[nihongoLearning Error] ',
        appTitle: 'nihongoLearning'
    };

    core.value('config', config);
}
