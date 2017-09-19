
  var myApp=angular.module("myModule",[]);
  myApp.controller("myController",function($scope){
	  
	               
	            $scope.newUser={};   ///variable declaration and firstly is null
				$scope.clickedUser={};
				$scope.message="";
				
                $scope.data=[{username: "shohel",email:"shohel@gmail.com"},
	                         {username: "kajol",email:"kl@gmail.com"},
	                         {username: "robi", email:"rr@gmail.com"}];
							 
							 $scope.saveUser = function(){
							    // console.log($scope.newUser);
								$scope.data.push($scope.newUser);
								 $scope.newUser={};
								 $scope.message="user added successfully !..";
							 }
							 
				$scope.selectUser=function(user){
                    //console.log(user);
				$scope.clickedUser=user;
				}	
    $scope.updateUser=function(){
		 $scope.message="user updated successfully !..";
	}
	
	$scope.deleteUser = function(){
		$scope.data.splice($scope.data.indexOf($scope.clickedUser),1);
		 $scope.message="user deleted successfully !..";
	}
	
	$scope.clearMessage = function(){
		$scope.message = "";
	}
							 
						
});
