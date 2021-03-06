$(function() {
	//二级菜单折叠
	$('.menuE').click(function() {
		collapsy();
	});
	//二级菜单内容加载
	var json = {};
	$('.nav a').click(function() {
		//判断是否点击是否为当前的，如果是跳出事件
		if($(this).attr('class') == 'active') {
			return false;
		}
		//把菜单内容移除
		$('#wnav .panel-title').each(function(index, value) {
			$("#wnav").accordion('remove', $(value).html());
		});
		//当前按钮显示
		$('.nav a').attr('class', '');
		$(this).attr('class', 'active');
		//ajax获取数据
		var val = $(this).attr('alt');
		//实际项目中用ajax调用数据
		var data={"one":[{"title":"能耗可视化管理","cont":[{"text":"用能分布可视化","html":"svg/templateSL.svg","src":"img/57.png","src2":"img/57g.png"},{"text":"变配电监测","html":"svg/MitsubishisSVG01-02-05.svg","src":"img/56.png","src2":"img/56g.png"},{"text":"重点回路监测","html":"html/jxsyt.html","src":"img/58.png","src2":"img/58g.png"},{"text":"电房监测","html":"html/dfjc.html","src":"img/59.png","src2":"img/59g.png"}]}],"two":[{"title":"用电安全管理","cont":[{"text":"监测点参量比较分析","html":"html/jcdbjfx.html","src":"img/52.png","src2":"img/52g.png"},{"text":"电压统计分析","html":"html/dytjfx.html","src":"img/2.png","src2":"img/2g.png"},{"text":"电流统计分析","html":"html/dltjfx.html","src":"img/3.png","src2":"img/3g.png"},{"text":"功率统计分析","html":"html/gltjfx.html","src":"img/4.png","src2":"img/4g.png"},{"text":"功率因数统计分析","html":"html/glystjfx.html","src":"img/5.png","src2":"img/5g.png"},{"text":"三相不平衡度统计","html":"html/sxbphdtj.html","src":"img/6.png","src2":"img/6g.png"}]}],"three":[{"title":"电压电流谐波分析","cont":[{"text":"电压电流谐波统计分析","html":"html/dydlxbtjfx.html","src":"img/7.png","src2":"img/7g.png"},{"text":"电压频谱统计分析","html":"html/dypptjfx.html","src":"img/8.png","src2":"img/8g.png"},{"text":"畸变率统计分析","html":"html/jbltjfx.html","src":"img/9.png","src2":"img/9g.png"}]},{"title":"电压频率偏差统计","cont":[{"text":"电压与频率偏差统计","html":"html/dyyplpctj.html","src":"img/10.png","src2":"img/10g.png"}]},{"title":"无功补偿容量分析","cont":[{"text":"无功补偿容量分析","html":"html/wgbcrlfx.html","src":"img/11.png","src2":"img/11g.png"}]}],"four":[{"title":"用能统计分析","cont":[{"text":"电度统计报表","html":"html/ddtjbb.html","src":"img/12-1.png","src2":"img/12-1g.png"},{"text":"电量分类统计","html":"html/dlfltj.html","src":"img/13.png","src2":"img/13g.png"},{"text":"企业峰平谷电量统计","html":"html/fpgdltj.html","src":"img/14.png","src2":"img/14g.png"},{"text":"电量比较分析","html":"html/dlbjfx.html","src":"img/15.png","src2":"img/15g.png"},{"text":"电度整点抄表","html":"html/ddzdcb.html","src":"img/12.png","src2":"img/12g.png"},{"text":"用电类型统计","html":"html/ydlxtj.html","src":"img/16.png","src2":"img/16g.png"},{"text":"变压器用量分析","html":"html/byqylfx.html","src":"img/17.png","src2":"img/17g.png"},{"text":"变高侧电量统计","html":"html/bgcdltj.html","src":"img/18.png","src2":"img/18g.png"},{"text":"电能平衡统计","html":"html/dnphtj.html","src":"img/19.png","src2":"img/19g.png"},{"text":"天燃气用量统计","html":"html/trqyltj.html","src":"img/20.png","src2":"img/20g.png"}]},{"title":"成本管理","cont":[{"text":"电费表单","html":"html/dfbd.html","src":"img/23.png","src2":"img/23g.png"},{"text":"电费成本报表","html":"html/dfcbbb.html","src":"img/54.png","src2":"img/54g.png"},{"text":"电费比重分析","html":"html/dfbzfx.html","src":"img/22.png","src2":"img/22g.png"}]},{"title":"能效优化策略","cont":[{"text":"峰平谷时段预测","html":"html/fpgsdyc.html","src":"img/24.png","src2":"img/24g.png"},{"text":"功率因数预测","html":"html/glysyc.html","src":"img/25.png","src2":"img/25g.png"}]},{"title":"产品单耗统计","cont":[{"text":"产品单耗统计","html":"html/cpdhtj.html","src":"img/26.png","src2":"img/26g.png"}]},{"title":"定额管理","cont":[{"text":"定额管理","html":"html/degl.html","src":"img/27.png","src2":"img/27g.png"}]}],"five":[{"title":"负荷管理","cont":[{"text":"负荷数据查询","html":"html/fhsjcx.html","src":"img/28.png","src2":"img/28g.png"},{"text":"负荷潮流图","html":"html/fhclt.html","src":"img/29.png","src2":"img/29g.png"},{"text":"进线及其配变负荷率曲线","html":"html/pbfhqx.html","src":"img/30.png","src2":"img/30g.png"},{"text":"需量统计","html":"html/xltj.html","src":"img/31.png","src2":"img/31g.png"},{"text":"有序用电","html":"html/yxyd.html","src":"img/32.png","src2":"img/32g.png"}]}],"six":[{"title":"报表管理","cont":[{"text":"电气报告","html":"html/dqbg.html","src":"img/33.png","src2":"img/33g.png"}]}],"seven":[{"title":"告警查询","cont":[{"text":"电气告警","html":"html/dqgj.html","src":"img/34.png","src2":"img/34g.png"},{"text":"能效告警","html":"html/nxgj.html","src":"img/35.png","src2":"img/35g.png"},{"text":"维保预警","html":"html/wbyj.html","src":"img/36.png","src2":"img/36g.png"},{"text":"主动上报告警","html":"html/zdsbgj.html","src":"img/37.png","src2":"img/37g.png"}]}],"eight":[{"title":"设备管理","cont":[{"text":"设备台账管理","html":"html/sbtzgl.html","src":"img/38.png","src2":"img/38g.png"},{"text":"维保记录管理","html":"html/whjlgl.html","src":"img/39.png","src2":"img/39g.png"},{"text":"计量器具管理","html":"html/jlqjgl.html","src":"img/40.png","src2":"img/40g.png"}]}]};
		for(var i = 0; i < data[val].length; i++) {
			var flag = false;
			//把第一个菜单展开
			if(i == 0) {
				flag = true;
			}
			//添加按钮组
			$('#wnav').accordion('add', {
				title: data[val][i].title,
				selected: flag,
				content: '<ul class="menu-list"></ul>',
			});
			for(var j = 0; j < data[val][i].cont.length; j++) {
				$('<li>' +
					'<img src=' + data[val][i].cont[j].src + ' />' +
					'<img src=' + data[val][i].cont[j].src2 + ' style="display:none;"/>' +
					'<a href="#"><span>' + data[val][i].cont[j].text + '</span></a>' +
					'</li>').appendTo($('.menu-list').eq(i));
			}
		}
		//关闭前一个一级菜单内容
		$('.tabs li').not('.tabs-first').each(function(index, value) {
			$('#tt').tabs('close', $(value).find('.tabs-title').html());
		})
		$('.menu-list li').eq(0).addClass('active').find('img:eq(0)').hide().next().show();
		//显示当前一级菜单内容
		$('#tt').tabs('add', {
			title: data[val][0].cont[0].text,
			content: '<iframe src=' + data[val][0].cont[0].html + ' height="100%" frameborder="0"></iframe>',
			closable: true
		});
		json[$('.menu-list li:eq(0)').find('span').html()] = $('.menu-list li:eq(0)').find('span').html();
		$('iframe').width($(window).width() - $('#west-menu').outerWidth(true) - 2);
		//二级菜单选择
		clickFn();
		//设置滚动条
		$('#wnav').find('.panel-body').eq(0).mCustomScrollbar({
			theme: "minimal"
		});
	});
	//二级菜单选择
	clickFn();
	function clickFn() {
		$('.menu-list li').click(function() {
			//按钮切换
			$('.menu-list li').attr('class', '').find('img:eq(0)').show().next().hide();
			$(this).attr('class', 'active').find('img:eq(0)').hide().next().show();

			if(json[$(this).find('span').html()]) { //判断是否已经打开
				$('#tt').tabs('select', $(this).find('span').html());
			} else {
				json[$(this).find('span').html()] = $(this).find('span').html();
				var val = $('.nav a').filter('.active').attr('alt');
				var titleId = $('.menu-list').index($('.menu-list').has('.active'));
				var contId = $('.menu-list').has($(this)).find('li').index($(this));
				var data={"one":[{"title":"能耗可视化管理","cont":[{"text":"用能分布可视化","html":"svg/templateSL.svg","src":"img/57.png","src2":"img/57g.png"},{"text":"变配电监测","html":"svg/MitsubishisSVG01-02-05.svg","src":"img/56.png","src2":"img/56g.png"},{"text":"重点回路监测","html":"html/jxsyt.html","src":"img/58.png","src2":"img/58g.png"},{"text":"电房监测","html":"html/dfjc.html","src":"img/59.png","src2":"img/59g.png"}]}],"two":[{"title":"用电安全管理","cont":[{"text":"监测点参量比较分析","html":"html/jcdbjfx.html","src":"img/52.png","src2":"img/52g.png"},{"text":"电压统计分析","html":"html/dytjfx.html","src":"img/2.png","src2":"img/2g.png"},{"text":"电流统计分析","html":"html/dltjfx.html","src":"img/3.png","src2":"img/3g.png"},{"text":"功率统计分析","html":"html/gltjfx.html","src":"img/4.png","src2":"img/4g.png"},{"text":"功率因数统计分析","html":"html/glystjfx.html","src":"img/5.png","src2":"img/5g.png"},{"text":"三相不平衡度统计","html":"html/sxbphdtj.html","src":"img/6.png","src2":"img/6g.png"}]}],"three":[{"title":"电压电流谐波分析","cont":[{"text":"电压电流谐波统计分析","html":"html/dydlxbtjfx.html","src":"img/7.png","src2":"img/7g.png"},{"text":"电压频谱统计分析","html":"html/dypptjfx.html","src":"img/8.png","src2":"img/8g.png"},{"text":"畸变率统计分析","html":"html/jbltjfx.html","src":"img/9.png","src2":"img/9g.png"}]},{"title":"电压频率偏差统计","cont":[{"text":"电压与频率偏差统计","html":"html/dyyplpctj.html","src":"img/10.png","src2":"img/10g.png"}]},{"title":"无功补偿容量分析","cont":[{"text":"无功补偿容量分析","html":"html/wgbcrlfx.html","src":"img/11.png","src2":"img/11g.png"}]}],"four":[{"title":"用能统计分析","cont":[{"text":"电度统计报表","html":"html/ddtjbb.html","src":"img/12-1.png","src2":"img/12-1g.png"},{"text":"电量分类统计","html":"html/dlfltj.html","src":"img/13.png","src2":"img/13g.png"},{"text":"企业峰平谷电量统计","html":"html/fpgdltj.html","src":"img/14.png","src2":"img/14g.png"},{"text":"电量比较分析","html":"html/dlbjfx.html","src":"img/15.png","src2":"img/15g.png"},{"text":"电度整点抄表","html":"html/ddzdcb.html","src":"img/12.png","src2":"img/12g.png"},{"text":"用电类型统计","html":"html/ydlxtj.html","src":"img/16.png","src2":"img/16g.png"},{"text":"变压器用量分析","html":"html/byqylfx.html","src":"img/17.png","src2":"img/17g.png"},{"text":"变高侧电量统计","html":"html/bgcdltj.html","src":"img/18.png","src2":"img/18g.png"},{"text":"电能平衡统计","html":"html/dnphtj.html","src":"img/19.png","src2":"img/19g.png"},{"text":"天燃气用量统计","html":"html/trqyltj.html","src":"img/20.png","src2":"img/20g.png"}]},{"title":"成本管理","cont":[{"text":"电费表单","html":"html/dfbd.html","src":"img/23.png","src2":"img/23g.png"},{"text":"电费成本报表","html":"html/dfcbbb.html","src":"img/54.png","src2":"img/54g.png"},{"text":"电费比重分析","html":"html/dfbzfx.html","src":"img/22.png","src2":"img/22g.png"}]},{"title":"能效优化策略","cont":[{"text":"峰平谷时段预测","html":"html/fpgsdyc.html","src":"img/24.png","src2":"img/24g.png"},{"text":"功率因数预测","html":"html/glysyc.html","src":"img/25.png","src2":"img/25g.png"}]},{"title":"产品单耗统计","cont":[{"text":"产品单耗统计","html":"html/cpdhtj.html","src":"img/26.png","src2":"img/26g.png"}]},{"title":"定额管理","cont":[{"text":"定额管理","html":"html/degl.html","src":"img/27.png","src2":"img/27g.png"}]}],"five":[{"title":"负荷管理","cont":[{"text":"负荷数据查询","html":"html/fhsjcx.html","src":"img/28.png","src2":"img/28g.png"},{"text":"负荷潮流图","html":"html/fhclt.html","src":"img/29.png","src2":"img/29g.png"},{"text":"进线及其配变负荷率曲线","html":"html/pbfhqx.html","src":"img/30.png","src2":"img/30g.png"},{"text":"需量统计","html":"html/xltj.html","src":"img/31.png","src2":"img/31g.png"},{"text":"有序用电","html":"html/yxyd.html","src":"img/32.png","src2":"img/32g.png"}]}],"six":[{"title":"报表管理","cont":[{"text":"电气报告","html":"html/dqbg.html","src":"img/33.png","src2":"img/33g.png"}]}],"seven":[{"title":"告警查询","cont":[{"text":"电气告警","html":"html/dqgj.html","src":"img/34.png","src2":"img/34g.png"},{"text":"能效告警","html":"html/nxgj.html","src":"img/35.png","src2":"img/35g.png"},{"text":"维保预警","html":"html/wbyj.html","src":"img/36.png","src2":"img/36g.png"},{"text":"主动上报告警","html":"html/zdsbgj.html","src":"img/37.png","src2":"img/37g.png"}]}],"eight":[{"title":"设备管理","cont":[{"text":"设备台账管理","html":"html/sbtzgl.html","src":"img/38.png","src2":"img/38g.png"},{"text":"维保记录管理","html":"html/whjlgl.html","src":"img/39.png","src2":"img/39g.png"},{"text":"计量器具管理","html":"html/jlqjgl.html","src":"img/40.png","src2":"img/40g.png"}]}]};
				$('#tt').tabs('add', {
					title: data[val][titleId].cont[contId].text,
					content: '<iframe src=' + data[val][titleId].cont[contId].html + ' height="100%" frameborder="0"></iframe>',
					closable: true
				});
				$('iframe').width($(window).width() - $('#west-menu').outerWidth(true) - 2);
			}
		});
		//关闭tabs删除json里面的那一条数据
		$('#tt').tabs({
			onClose: function(title) {
				delete json[title];
			}
		})
	}
	//中间内容宽度适应
	midW();
});
//侧边二级菜单折叠
var flag = true;

function collapsy() {
	if(flag) { //折叠
		$('.menuE img').attr('src', 'img/MenuOpenB1.png');
		$('iframe').width($(window).width() - 2);
		$('#main-pic').width($(window).width() - 2);
		$('.menuE').css({
			left: -1
		});
		$('.layout-panel-west').css({
			left: -160
		});
		$('.layout-panel-center').css({
			left: 0
		});
	} else { //展开
		$('.menuE img').attr('src', 'img/MenuCloseB1.png');
		midW();
		$('.menuE').css({
			left: 156
		});
		$('.layout-panel-west').css({
			left: 0
		});
		$('.layout-panel-center').css({
			left: 159
		});
	}
	flag = !flag;
}
//中间内容宽度
function midW() {
	var iframeW = $(window).width() - $('#west-menu').outerWidth(true) - 2;
	$('iframe').width(iframeW);
	$('#main-pic').width(iframeW);
}