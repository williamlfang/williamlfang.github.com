function submit() {
	var msgs = document.getElementById('msgs');
	var textArea = $("#chat-area");
	var text = textArea.val();
	textArea.attr("value", "");
	var table = $("#chatTable");
	if (text != "") {
		var tr = document.createElement("tr");
		tr.innerHTML = '<td class="right-convo">' + text + ' <img src="./img/i.jpg" width="50px" /></td>';
		if (table) {
			table.append(tr);
			msgs.scrollTop = msgs.scrollHeight;
		}
		text = text.replace(/我/g, "你");
		setTimeout(function() {
			reply();
		}, 1500);

		function reply() {
			var trReply = document.createElement("tr");
			if (n==0){
				trReply.innerHTML = '<td class="left-convo"><img src="./img/rob.gif" width="50px" /> 今天你有什么想跟我聊聊吗？ </td>'
			}
			else if (n % 4 == 1) {
				trReply.innerHTML = '<td class="left-convo"><img src="./img/rob.gif" width="50px" /> 嗯，' + text + '，然后呢？ </td>'
			} else {
				trReply.innerHTML = '<td class="left-convo"><img src="./img/rob.gif" width="50px" /> 嗯 </td>'
			};
			n++;
			if (table) {
				table.append(trReply);
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
	} else {
		alert("你没有说什么呀~");
	};
}