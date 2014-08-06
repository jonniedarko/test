var app = angular.module('ngMacro', []);
app.controller('macroCtrl', function ($scope){
    $scope.user = { };

    $scope.goals = {
    	zero:{
    		 title:"Select a Goal"
	        ,calories: 0
	        ,protien: 0
	        ,fats: 0
	        ,carbs:0
    	}
	    ,current: {
	        title:"Mainteance"
	        ,calories: 0
	        ,protien: 0
	        ,fats: 0
	        ,carbs:0
	    }
	    ,loss: {
	        title:"Fat Loss"
	        ,calories: 0
	        ,protien: 0
	        ,fats: 0
	        ,carbs:0
	    }
	    ,gain:{
	        title:"Muscle Gain"
	        ,calories: 0
	        ,protien: 0
	        ,fats: 0
	        ,carbs:0
	    }
	};
	$scope.goal = $scope.goals.zero;
	

	//$scope.updateGoal()
         
	$scope.activityLevels = [{
	        title: "Fat Loss/Weight Loss"

	        ,value: 1
	    }
	    ,{
	        title: "Body weight maintenance "

	        ,value: 2
	    }
	    ,{
	        title: "Lean muscle gain"

	        ,value: 3
	    }
	];


    $scope.getMetaRate = function(){

		

		return 1;//(!isNaN(meta) && (meta!=null)) ? parseFloat(meta).toFixed(2) : "Please Fill Out the above Form";

	};
	$scope.updateNutrition=function(){
		//console.log('updateNutrition() : activityLevel', $scope.user.activityLevel );
		//console.log('updateNutrition() : weight', $scope.user.weight );
		//console.log('updateNutrition() : sex', $scope.user.sex );

		if($scope.user.weight !== 0 
			&& $scope.user.weight !== undefined 
			&& $scope.user.activityLevel !== "" 
			&& $scope.user.activityLevel !== undefined ){

			console.log('updateNutrition() : BAM');
			
			if($scope.user.sex === "male"){
				$scope.goal.normalcalories = $scope.user.weight *30;
				$scope.goal.protien = $scope.user.weight *2.2;

			}
			else if($scope.user.sex === "female"){
				$scope.goal.normalcalories = $scope.user.weight *30;
				$scope.goal.protien = $scope.user.weight *2.2;
				

			}
			$scope.updateGoal();
	    }
	    
	};
	$scope.updateGoal=function(){
		console.log('$scope.goal.normalcalories',$scope.goal.normalcalories);
		if(($scope.user.activityLevel === 1 || $scope.user.activityLevel === '1') &&($scope.user.sex ==='male' || $scope.user.sex ==='female')){

			var mul = 1;
			if($scope.user.sex ==='male'){
				 mul = 0.8;
			}else if($scope.user.sex ==='female'){
				 mul = 0.75;
			}

			$scope.goal.calories = $scope.goal.normalcalories * mul;
			$scope.goal.fats = $scope.goal.calories /30;
			$scope.goal.carbs = (($scope.goal.calories/4) - ($scope.goal.protien  *4) - ($scope.goal.fats * 9));
			console.log('$scope.goal.fats',$scope.goal.fats);

		}
		else if($scope.user.activityLevel === 2 || $scope.user.activityLevel === '2'){
			$scope.goal.calories = $scope.goal.normalcalories * 1;
			$scope.goal.fats = $scope.goal.calories /30;
			$scope.goal.carbs = (($scope.goal.calories/4) - ($scope.goal.protien  *4) - ($scope.goal.fats * 9));

		}
		else if($scope.user.activityLevel === 3 || $scope.user.activityLevel === '3'){
			$scope.goal.calories = $scope.goal.normalcalories * 1.2;
			$scope.goal.fats = $scope.goal.calories /30;
			$scope.goal.carbs = (($scope.goal.calories/4) - ($scope.goal.protien  *4) - ($scope.goal.fats * 9));

		}
	}

	$scope.getName = function(){
            if($scope.user.name===undefined || $scope.user.name==="")
                return "What's your Goal?";

            return 'What\'s your Goal '+$scope.user.name+'?';
        }

});
