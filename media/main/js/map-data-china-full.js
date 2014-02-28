/* 
		JavaScript Document 
	Simplified Edition
	
	Name: China Location Data 
	Author: Long Luo
	Version: 1.1  
	Website: http://www.imlongluo.com 
	Date: 26th, Nov.,2013 
	Modified 27th, Nov, 2013
*/

//$('#map').vectorMap({map: 'cn_merc_en'});
$('#map').vectorMap({
	map: 'cn_merc_en',
	backgroundColor: 'transparent',
	zoomMin: 0.9,
	zoomMax: 1.9, 
	focusOn: {
		  x: 0.55,
		  y: 2,
		  //scale: 1.6
		  scale: 0.9
		},
	regionStyle: {
		initial: {
			fill: '#e5e5e5',
			"fill-opacity": 1,
			stroke: 'none',
			"stroke-width": 0,
			"stroke-opacity": 1
		},
		hover: {
			fill: '#ccc',
			"fill-opacity": 0.8
		},
		selected: {
			fill: 'yellow'
		},
		selectedHover: {}
	},
	/*series: {
		regions: [{
			values: tourData,
			scale: ['#C8EEFF', '#0071A4'],
			normalizeFunction: 'polynomial'
		}]
	},
	onRegionLabelShow: function(e, el, code) {
		el.html(el.html() + ' (最后到达 - ' + tourData[code] + ')');
	},*/
	markerStyle: {
            initial: {
            	fill: '#fd8888',
            	stroke: '#fff'
            },
			hover: {
				fill: '#fd3838',
				stroke: '#fff',
				"fill-opacity": 0.8
			},
          },
	markers: [  
			// Born
            {latLng: [27.99, 115.96], name: '江西 丰城 小山村-我生命的原点,1988'},
			
			// Grow up...
			// 经度:115.7637123175049 纬度:28.15760282428549
			{latLng: [28.15, 115.76], name: '江西 丰城 10岁之前的无忧无虑 - 1988~2000'},
			// 27.789, 116.057
			{latLng: [27.78, 116.05], name: '江西 崇仁 记忆中小城市 - 1999'},
			// 27.962, 116.361
			{latLng: [27.96, 116.36], name: '江西 抚州 - 1999~2002'},
			// 27.9422, 116.302
			{latLng: [27.94, 116.30], name: '江西 临川 高中三年时光一晃而逝 - 2002~2005'},
			// 28.9861, 117.1402
			{latLng: [28.98, 117.14], name: '江西 乐平 桃酥王很好吃 - 2001'},
			// 29.2766, 117.1885
			{latLng: [29.27, 117.18], name: '江西 景德镇 china - 2001'},
			// 28.6740, 115.9045
			{latLng: [28.67, 115.90], name: '江西 南昌 急需要改变和发展的城市 - 2001'},
			
			// 2005 ~ 2009 University At Chengdu.
			// 29.5680, 106.5874
			{latLng: [29.56, 106.58], name: '重庆 重庆 上上下下确实很惊讶 - 2005.08'},
			// 30.72926, 103.96620
			{latLng: [30.72, 103.97], name: '四川 成都 大一被下乡 - 2005.08~2006.07'},
			// 30.6760, 104.1005
			{latLng: [30.67, 104.10], name: '四川 成都 大学!大学!- 2006.08~2008.07'},
			// 30.7467, 103.9266
			{latLng: [30.74, 103.93], name: '四川 成都 新校区,很大但荒凉 - 2006.08~2008.07'},
			// 30.869, 103.466
			{latLng: [30.86, 103.46], name: '四川 崇州 班级旅行,几个月后毁于地震- 2008'},
			// 29.5813, 103.2917
			{latLng: [29.58, 103.29], name: '四川 峨眉山 上山下山仅仅二天半 - 2009.03'},	
			// 29.5445, 103.7717
			{latLng: [29.54, 103.77], name: '四川 乐山 仁者乐山 - 2009.03'},	

			// Fujian Province 2006
			//经度:118.09141874313354 纬度:24.438339515392173
			{latLng: [24.44, 118.09], name: '福建 厦门 鼓浪屿 人生第一次看海的地方 - 2006.07'},
			//经度:118.70900194648743 纬度:24.676548792499577
			{latLng: [24.67, 118.70], name: '福建 石狮 - 2006.07'},
			// 24.87520, 118.67541
			{latLng: [24.87, 118.67], name: '福建 泉州 - 2006.07'},

			// Left University. 
			// Guangdong Province
			// 22.5472, 114.0689
			{latLng: [22.54, 114.06], name: '深圳 第一站 - 2009.08 ~ Now'},
			// 23.1070, 113.3244
			{latLng: [23.10, 113.32], name: '广东 广州 - 2009 ~ 2013'},
			// 23.0136, 113.7516
			{latLng: [23.01, 113.75], name: '广东 东莞 电子工业重镇 - 2011'},
			// 22.8006, 113.8010
			{latLng: [22.80, 113.80], name: '广东 东莞 长安镇 - 2011'},
			// 23.0753, 112.4806
			{latLng: [23.07, 112.48], name: '广东 肇庆 七星岩和鼎湖山 - 2011'},
			// 30.5408, 114.3617
			{latLng: [30.54, 114.36], name: '湖北 武汉 武汉大学 - 2012'},
			// 23.1516, 114.4155
			{latLng: [23.15, 114.41], name: '广东 惠州 - 2011'},
			// 24.819, 113.599
			{latLng: [24.81, 113.59], name: '广东 韶关 不错的温泉 - 2012'},
			// 22.203, 112.303
			{latLng: [22.20, 112.30], name: '广东 恩平 稍微苦涩的记忆 - 2012'},
			// 23.7766, 112.9612
			{latLng: [23.77, 112.96], name: '广东 清远 漂流 - 2012'},
			// 22.3713, 112.5800
			{latLng: [22.37, 112.58], name: '广东 江门 碉楼 - 2013'},
			
			// 2013 Tourism
			// 33.1567, 103.8809
			{latLng: [33.15, 103.88], name: '四川 九寨沟 归来不看水 - 2013.04'},
			// 32.7492, 103.8230
			{latLng: [32.74, 103.82], name: '四川 黄龙 五彩池- 2013.04'},
			// 22.099, 113.295
			{latLng: [22.09, 113.29], name: '广东 珠海 - 2013.10'},
			// 22.1493, 113.5614
			{latLng: [22.14, 113.56], name: 'Macao Casino One Night In Casino! - 2013.10'},
			// 22.28037, 114.13529
			{latLng: [22.28, 114.13], name: 'Hong Kong Buy Apple Products - 2012, 2013'},
			// 21.5622, 111.8315
			{latLng: [21.56, 111.83], name: '阳江 海陵岛 - 2013.08'},
			// 18.2913, 109.4434
			{latLng: [18.29, 109.44], name: '海南 三亚 - 2013.11.07 ~ 2013.11.11'},
			
          ]
});