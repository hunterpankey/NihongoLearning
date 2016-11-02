module NihongoLearning.Home {
    'use strict';

    export class HomeService {
        static serviceName: string = 'HomeService';
        static $inject: Array<string> = ['$log', '$q', '$http'];

        constructor(private $log: ng.ILogService, private $q: ng.IQService, private $http: ng.IHttpService) {
            this.log('Loaded');
        }

        private log(...message: Array<string>) {
            this.$log.info('[' + HomeService.serviceName + ']', message);
        }

        public GetSentenceBreakdown(sentence: string): ng.IPromise<string> {
            let deferred: ng.IDeferred<string> = this.$q.defer<string>();
            let request: ng.IRequestConfig = {
                method: 'POST',
                headers: [
                    'Content-Type: application/json'
                ],
                data: {
                    'app_id': '3104b67fff099c206f1e9dadc95b4b301340670f8c71cf6a98c37f9d1a6c51db',
                    'request_id': '1',
                    'output_format': 'hiragana',
                    'sentence': sentence
                },
                url: 'https://labs.goo.ne.jp/api/en/hiragana-translation/'
            };

            this.$http(request).then((response: any) => {
                deferred.resolve(response.converted);
            }, (error: any) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }

    angular.module('nihongoLearning.home').service('HomeService', HomeService);
}