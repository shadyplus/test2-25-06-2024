function Timer(obj) {
	this.hour = typeof obj.hour == 'string' ? document.querySelector(obj.hour).innerHTML: obj.hour;
	this.min = typeof obj.min == 'string' ? document.querySelector(obj.min).innerHTML: obj.min;
	this.sec = typeof obj.sec == 'string' ? document.querySelector(obj.sec).innerHTML: obj.sec;
	this.hourRes = document.querySelectorAll(obj.hourRes);
	this.minRes = document.querySelectorAll(obj.minRes);
	this.secRes = document.querySelectorAll(obj.secRes);
	ctx = this;


	var timeInterval = setInterval(function(){
		ctx.sec--;
		if(ctx.sec < 0) {
			ctx.sec = 59;
			ctx.min--;
		} else if (ctx.sec < 10 && (typeof ctx.sec == 'number' || ctx.sec.length < 2)) {
			ctx.sec = '0' + ctx.sec;
		}

		if(ctx.min < 0) {
			ctx.min = 59;
			ctx.hour--;
		} else if (ctx.min < 10 && (typeof ctx.min == 'number' || ctx.min.length < 2)) {
			ctx.min = '0' + ctx.min;
		}

		if(ctx.hour < 0) {
			clearInterval(timeInterval);
			ctx.hour = '0' + 0;
			ctx.min = '0' + 0;
			ctx.sec = '0' + 0;

		} else if (ctx.hour < 10 && (typeof ctx.hour == 'number' || ctx.hour.length < 2)) {
			ctx.hour = '0' + ctx.hour;
		}

		for(var i = 0; i < ctx.secRes.length; i++) {

		ctx.hourRes[i].textContent = ctx.hour;
		ctx.minRes[i].textContent = ctx.min;
		ctx.secRes[i].textContent = ctx.sec;

	}
	}, 1000)

}

