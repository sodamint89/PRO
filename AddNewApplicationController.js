    function ApplicationEntryController($scope, commonFactory) {

        $scope.DataApplicationEntryDetail = [];

        //page
        $scope.perPages = perPages;
        $scope.maxSize = 5;

        // List data
        $scope.dataSch = {
            ref1: '',
            rc_code: '',
            region: '',
            district: '',
            branch: '',
            ref2: '',
            create_date: '',
            customers_name: '',
            insurance: '',
            payment_methods: '',
            mode_pay: '',
            premium: '',
            annual_premium: '',
            ref3: '',
            payin_date: ''
        };

        [
            {
                "no": 1,
                "ref1": 545654,
                "applicationNo": 59140100586,
                "insuredName": "นายศุภชัย คุณธรรมรัก",
                "plan": "คุ้มครองภัย SMART",
                "branch": 468,
                "payin": "26/6/2016",
                "amount": "72,600.00"
            },
            {
                "no": 2,
                "ref1": 545654,
                "applicationNo": 59140036241,
                "insuredName": "น.ส.สมหญิง ศรีชัยภูมิ",
                "plan": "คุ้มครองภัย SMART",
                "branch": 468,
                "payin": "20/6/2016",
                "amount": 600
            },
            {
                "no": 3,
                "ref1": 868429114,
                "applicationNo": 5051326346,
                "insuredName": "ธัญญา เทพเจริญ",
                "plan": "คุ้มครองภัย FUTURE",
                "branch": 681,
                "payin": "20/6/2016",
                "amount": "2,600.00"
            },
            {
                "no": 4,
                "ref1": 619229,
                "applicationNo": 59140085567,
                "insuredName": "น.ส.ฟารีดา ร่วมวงศ์",
                "plan": "คุ้มครองภัย FUTURE",
                "branch": 720,
                "payin": "5/6/2016",
                "amount": "22,716.00"
            }
        ];

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
                                $scope.DataApplicationEntryDetail = data[1];
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
