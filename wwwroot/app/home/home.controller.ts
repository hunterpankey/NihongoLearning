module NihongoLearning.Home {
    'use strict';

    var home = angular.module('nihongoLearning.home');

    export class HomeController {
        static $inject = ['moment', 'HomeService'];

        public msg : string;

        constructor(private moment: moment.MomentStatic, private homeService: HomeService) {
           this.msg = 'Welcome home to Nihongo Learning! At loading time, it is: ' + moment().format('LLLL');

           this.homeService.GetSentenceBreakdown('子どものいじめの数２０１５年度は２２万件以上');
        }
    }

    home.controller('homeController', HomeController);
}
