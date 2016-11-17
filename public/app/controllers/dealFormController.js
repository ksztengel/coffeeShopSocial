'use strict'

app.controller('dealFormController', ($scope, newDealService) => {

  $scope.deal = {}

  $scope.newDeal = function(formData){
    newDealService.signUp(formData)
  }


})
