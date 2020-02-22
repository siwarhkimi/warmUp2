$(document).ready(function(){
	$("button.left").click(function(){
		var $item = $("<li></li>");
		
		var $input = prompt("enter the element to the left list : ")
		$item.text($input);
		if($input.length > 1){
			$('button#create').click(function(){
				console.log($input)
				
				$item.appendTo('ul.left')
			})
			
		}
	})

	$("button.right").click(function(){
		var $item = $("<li></li>");
		
		var $input = prompt("enter the element to the right list : ")
		$item.text($input);
		if($input.length > 1){
			$('button#create').click(function(){
				console.log($input)
				
				$item.appendTo('ul.right')
			})
			
		}
	})









})