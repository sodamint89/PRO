    function AutoMatchingController($scope, commonFactory) {

        $scope.DataAutoMatchingDetail = [];

        //page
        $scope.perPages = perPages;
        $scope.maxSize = 5;

        // List data
        $scope.dataSch = {
            payment_from : '',
            payment_to: ''
        };

        [
            {
                "no": 1,
                "branch": 468,
                "insuredName": "นายศุภชัย คุณธรรมรัก",
                "ref1": 545654,
                "applicationNo": 59140100586,
                "payin": "26/6/2016",
                "amount": "72,600.00",
                "matching": "100%"
            },
            {
                "no": 2,
                "branch": 681,
                "insuredName": "น.ส.ฟารีดา ร่วมวงศ์",
                "ref1": 619229,
                "applicationNo": 59140085567,
                "payin": "26/6/2016",
                "amount": 600,
                "matching": "100%"
            },
            {
                "no": 3,
                "branch": 720,
                "insuredName": "น.ส.สมหญิง ศรีชัยภูมิ",
                "ref1": 545654,
                "applicationNo": 59140036241,
                "payin": "26/6/2016",
                "amount": "2,600.00",
                "matching": "100%"
            },
            {
                "no": 4,
                "branch": 468,
                "insuredName": "ธัญญา เทพเจริญ",
                "ref1": 868429114,
                "applicationNo": 5051326346,
                "payin": "26/6/2016",
                "amount": "22,600.00",
                "matching": "66%"
            },
            {
                "no": 5,
                "branch": 523,
                "insuredName": "นายศุภชัย คุณธรรมรัก",
                "ref1": 545654,
                "applicationNo": 59140100586,
                "payin": "26/6/2016",
                "amount": "18,240.00",
                "matching": "100%"
            },
            {
                "no": 6,
                "branch": 572,
                "insuredName": "นางลำดวน ใยพา",
                "ref1": 371817,
                "applicationNo": 59140120279,
                "payin": "26/6/2016",
                "amount": "2,165.00",
                "matching": "33%"
            },
            {
                "no": 7,
                "branch": 991,
                "insuredName": "นายศุภฤกษ์ คณะแกบ",
                "ref1": 545654,
                "applicationNo": 59140168704,
                "payin": "26/6/2016",
                "amount": "2,118.00",
                "matching": "0%"
            },
            {
                "no": 8,
                "branch": 488,
                "insuredName": "นายศุภฤกษ์ คณะแกบ",
                "ref1": 555495,
                "applicationNo": 59140172280,
                "payin": "26/6/2016",
                "amount": "2,092.40",
                "matching": "0%"
            }
        ]

        $scope.doSearchDataRpt = function (form) {
            try {
                if (form.$valid) {
                    var jsDefaultLst = $.ajax(doGetPath('/json/LPR023JsonCheckDate.json'),
                        {
                            ajax: true,
                            dataType: 'json',
                            type: "POST",
                            data: {
                                schData: JSON.stringify($scope.dataSch)
                            }
                        });
                    jsDefaultLst.then(
                        function (data) {

                            angular.copy(data[0], errorForm);
                            if (errorForm.errorFlag == '1') {
                                var openMsg = commonFactory.doOpenMsg(errorForm);
                                openMsg.then(function (dataReturn) {
                                    openMsg.doNo;
                                });
                            } else {
                                $scope.DataAutoMatchingDetail = data[1];
                                if (data[1] != null && data[1].length > 0) {
                                    // set page
                                    setDataSlice(data[1]);
                                }
                                $scope.$apply();
                            }
                        });

                } else {
                    $scope.msgError = '0';
                }
                //////////////////////////////////////////////////////////////

            } catch (e) {
                //alert("e");
            }

        };
    };

                    function setDataSlice(lstData) {
                        $scope.totalItems1 = lstData.length;
                        $scope.currentPage1 = 1;
                        $scope.numPages1 = Math.ceil($scope.totalItems1 / $scope.perPages1);
                    };

                    $scope.doOpenHistoryLog = function (policyNo, paidToDate) {

                        var modalInstance = commonFactory.doOpenHistoryLogFromPkg(
                            policyNo,
                            paidToDate,
                            'REPM'
                        );
                        modalInstance.then(function (returnObj) {
                            //alert(returnObj);
                            modalInstance.close();
                        }, function () {
                            //$log.info('Modal dismissed at: ' + new Date());
                        });
                    };

                    $scope.openDialogApplicationEntry = function (dataForm) {
                        console.log(JSON.stringify(dataForm))
                        var modalInstance = commonFactory.doOpenManagementMiscsuspense(dataForm, 'REPM');
                        modalInstance.then(function (retObj) {

                        }, function () {
                            //defaultFlag();
                        });
                    };
