	//Lucky Time Calc
	const timeStr_jp = [
	"2024-04-23T16:00+09:00","2024-04-23T23:59+09:00",
	"2024-04-24T05:00+09:00","2024-04-25T04:59+09:00",
	"2024-04-25T18:00+09:00","2024-04-25T23:59+09:00",
	"2024-04-26T18:00+09:00","2024-04-26T23:59+09:00",
	"2024-04-27T05:00+09:00","2024-04-28T04:59+09:00",
	"2024-04-28T12:00+09:00","2024-04-28T23:59+09:00",
	"2024-04-29T05:00+09:00","2024-04-30T04:59+09:00",
	"2024-04-30T18:00+09:00","2024-04-30T23:59+09:00",
	"2024-05-01T18:00+09:00","2024-05-01T23:59+09:00",
	"2024-05-02T05:00+09:00","2024-05-03T04:59+09:00",
	"2024-05-03T05:00+09:00","2024-05-03T22:59+09:00"
	];

	const timeStr_en = [
	"2024-04-16T20:00-07:00","2024-04-17T04:00-07:00",
	"2024-04-18T21:00-07:00","2024-04-19T05:00-07:00",
	"2024-04-20T08:00-07:00","2024-04-21T08:00-07:00",
	"2024-04-22T21:00-07:00","2024-04-23T05:00-07:00",
	"2024-04-24T19:00-07:00","2024-04-25T01:00-07:00",
	"2024-04-27T19:00-07:00","2024-04-28T01:00-07:00",
	"2024-04-28T18:00-07:00","2024-04-29T18:00-07:00"];

	const times_jp = [];
	const times_en = [];

	var count_jp = 0;
	var count_en = 0;

	for (let i = 0; i < timeStr_jp.length; i++) {
		times_jp[i] = new Date(timeStr_jp[i]).toLocaleString();
	}

	for (let i = 0; i < timeStr_en.length; i++) {
		times_en[i] = new Date(timeStr_en[i]).toLocaleString();
	}

	var ids_jp = [
	"time-1-jp",
	"time-2-jp",
	"time-3-jp",
	"time-4-jp",
	"time-5-jp",
	"time-6-jp",
	"time-7-jp",
	"time-8-jp",
	"time-9-jp",
	"time-10-jp",
	"time-11-jp"
	];

	var ids_en = [
	"time-1-en",
	"time-2-en",
	"time-3-en",
	"time-4-en",
	"time-5-en",
	"time-6-en",
	"time-7-en"
	];

	for (let i = 0; i < times_jp.length; i += 2) {
		if (!times_jp[i + 1]) {
			break;
		}
		if(count_jp == 1 || count_jp == 4 || count_jp == 6 || count_jp == 9)
		{
			document.getElementById(ids_jp[count_jp]).innerHTML = "<b>Story x2 - </b> " + times_jp[i] + " ~ " + times_jp[i + 1];
			count_jp++;
		}
		/*else if(count_jp == 1 || count_jp == 5 || count_jp == 12)
		{
			document.getElementById(ids_jp[count_jp]).innerHTML = "<b>Escort x3 - </b> " + times_jp[i] + " ~ " + times_jp[i + 1];
			count_jp++;
		}*/
		else if(count_jp == 0 || count_jp == 2 || count_jp == 3 || count_jp == 5 || count_jp == 7 || count_jp == 8 || count_jp == 10)
		{
			document.getElementById(ids_jp[count_jp]).innerHTML = "<b>Escort x2 - </b> " + times_jp[i] + " ~ " + times_jp[i + 1];
			count_jp++;
		}
		
	}
	/*for (let i = 0; i < times_jp.length; i += 2) {
		if (!times_jp[i + 1]) {
			break;
		}
		else{
			document.getElementById(ids_jp[count_jp]).innerHTML = times_jp[i] + " ~ " + times_jp[i + 1];
			count_jp++;
		}
	}*/

	for (let i = 0; i < times_en.length; i += 2) {
		if (!times_en[i + 1]) {
			break;
		}
		else{
			document.getElementById(ids_en[count_en]).innerHTML = times_en[i] + " ~ " + times_en[i + 1];
			count_en++;
		}
	}