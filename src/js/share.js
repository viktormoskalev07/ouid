var Shares = {
	title: 'share',
	width: 320,
	height: 500,
	init: function() {
		var share = document.querySelectorAll('.social');
		for (var i = 0, l = share.length; i < l; i++) {
			var url = share[i].getAttribute('data-url') || location.href,
				title = share[i].getAttribute('data-title') || '',
				desc = share[i].getAttribute('data-desc') || '',
				el = share[i].querySelectorAll('.push');
			for (var a = 0, al = el.length; a < al; a++) {
				var id = el[a].getAttribute('data-id');
				if (id) this.addEventListener(el[a], 'click', {
					id: id,
					url: url,
					title: title,
					desc: desc
				});
			}
		}
	},
	addEventListener: function(el, eventName, opt) {
		var _this = this,
			handler = function() {
				_this.share(opt.id, opt.url, opt.title, opt.desc);
			};
		if (el.addEventListener) {
			el.addEventListener(eventName, handler);
		} else {
			el.attachEvent('on' + eventName, function() {
				handler.call(el);
			});
		}
	},
	share: function(id, url, title, desc) {
		url = encodeURIComponent(url);
		desc = encodeURIComponent(desc);
		title = encodeURIComponent(title);
		switch (id) {
			case 'fb':
				this.popupCenter('https://www.facebook.com/sharer.php?t=' + url, this.title, this.width, this.height);
				break; 
			case 'tw':
				var text = title || desc || '';
				if (title.length > 0 && desc.length > 0) text = title + ' - ' + desc;
				if (text.length > 0) text = '&text=' + text;
				this.popupCenter('https://twitter.com/intent/tweet?url=' + url + text, this.title, this.width, this.height);
				break; 	 
      case 'medi':
        // here must be correct link?
        this.popupCenter('https://medium.com/p/import?rel=', this.title, this.width, this.height);
      break;
		}
	},
	newTab: function(url) {
		var win = window.open(url, '_blank');
		win.focus();
	},
	popupCenter: function(url, title, w, h) {
		var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
		var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 3) - (h / 3)) + dualScreenTop;
		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
		if (window.focus) {
			newWindow.focus();
		}
	}
};
 
 

window.addEventListener('load', forLoad)
 

function forLoad (){
 const socialIinfo = document.getElementById('social-info');
const buttons =	document.querySelectorAll('.push-share');	
			for(i=0 ; i < buttons.length ; i++){
				buttons[i].addEventListener('click', function(){
				const id =this.getAttribute('data-id');
				if(id){ 
				 
						const  url = socialIinfo.dataset.url || location.href;
		     			const title = socialIinfo.dataset.title || '';
				 	    const	desc = socialIinfo.dataset.desc || ''; 
						 Shares.share(id, url, title, desc);
				}

				})
			}
}
 