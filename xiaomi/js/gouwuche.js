$(function(){
	$(".gouwuche").mouseenter(function(){
		//移入
		$(".nav-che").stop(true).slideDown()
	})
	$(".gouwuche").mouseleave(function(){
		//移除
		$(".nav-che").stop(true).slideUp()
	})
	

	
})