$(document).ready(function(){
	$("#add").on('click', function(){
		var num_one = $("#num_one").val()
		var num_two = $("#num_two").val()
		$("#ans").val(Number(num_one) + Number(num_two))
	})
})

$(document).ready(function(){
	$("#subtract").on('click', function(){
		var num_one = $("#num_one").val()
		var num_two = $("#num_two").val()
		$("#ans").val(Number(num_one) - Number(num_two))
	})
})

$(document).ready(function(){
	$("#multiply").on('click', function(){
		var num_one = $("#num_one").val()
		var num_two = $("#num_two").val()
		$("#ans").val(Number(num_one) * Number(num_two))
	})
})

$(document).ready(function(){
	$("#divide").on('click', function(){
		var num_one = $("#num_one").val()
		var num_two = $("#num_two").val()
		$("#ans").val(Number(num_one) / Number(num_two))	
	})
})