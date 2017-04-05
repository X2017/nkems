$(function() {
	//创建滚动条
	$('.pandect').mCustomScrollbar({
		theme: "minimal",
		axis: "xy"
	});
	$('.data-img').height($(window).height()-$('.select').parent().outerHeight()-$('.south').outerHeight());
	$('.data-img').mCustomScrollbar({
		theme: "3d",
		mouseWheelPixels: 150
	});
	//创建输入框
	$('<div class="search-cont">' +
		'<input type="text" />' +
		'<a href="javascript:;"></a>' +
		'</div>').appendTo('.pandect');

	if($('.singleDate').css('display') != 'none') {
		nowDate();
	}
	//时间框切换
	if($('.select .easyui-linkbutton:eq(3)').find('.l-btn-text').html()=='时间') {
		$('.select .easyui-linkbutton').eq(3).click(doubleShow);
		$('.select .easyui-linkbutton').not($('.select .easyui-linkbutton').eq(3)).click(singleShow);
	}
})
//时间
function nowDate() {
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	var day = time.getDate();
	$('.singleDate input').datebox({
		value: year + '-' + month + '-' + day
	});
}
//两个时间框显示
function doubleShow() {
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	var day = time.getDate();
	$('.singleDate').hide();
	$('.doubleDate').show();
	$('.doubleDate input').datebox({
		value: year + '-' + month + '-' + day
	});
}
//一个时间框显示
function singleShow() {
	$('.singleDate').show();
	$('.doubleDate').hide();
}
