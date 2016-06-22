$scope.rating = "Your rating here"; //put your rating value here like 5, 4.5, 3.5, etc
$scope.ratingConvert = function(rate,count){
    var rateArray = []
    if (count){
      rate = rate ? rate : 0;
      if(rate-Math.floor(rate)>0) count-=1;

      for(var i=0;i<count-Math.floor(rate);i++){
        rateArray.push(i);
      }
      return rateArray;
    }
    if(rate){
      rate = Math.floor(rate);
      for(var i=0;i<rate;i++){
        rateArray.push(i);
      }
      return rateArray;
    }
  };
