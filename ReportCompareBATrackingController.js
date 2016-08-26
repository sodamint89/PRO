    function ReportCompareBATrackingController($scope, commonFactory) {

        $scope.DataReportCompareBATracking = [];

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
                "list": "ba tracking excel report",
                "paymentFrom": "1/6/2016",
                "paymentTo": "3/6/2016",
                "listUser": "anupong",
                "payin": "19/6/2016",
                "status": "เรียบร้อยแล้ว"
            },
            {
                "no": 2,
                "list": "ba tracking excel report",
                "paymentFrom": "1/6/2016",
                "paymentTo": "3/6/2016",
                "listUser": "anupong",
                "payin": "19/6/2016",
                "status": "เรียบร้อยแล้ว"
            },
            {
                "no": 3,
                "list": "ba tracking excel report",
                "paymentFrom": "1/6/2016",
                "paymentTo": "21/6/2016",
                "listUser": "anupong",
                "payin": "22/6/2016",
                "status": "เรียบร้อยแล้ว"
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
                                $scope.DataReportCompareBATrackingDetail = data[1];
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

                    $scope.openDialogReportCompareBATracking = function (dataForm) {
                        console.log(JSON.stringify(dataForm))
                        var modalInstance = commonFactory.doOpenManagementMiscsuspense(dataForm, 'REPM');
                        modalInstance.then(function (retObj) {

                        }, function () {
                            //defaultFlag();
                        });
                    };
