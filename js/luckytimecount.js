	//Lucky Time Calc
	const timeStr_jp = [
	"2024-05-15T16:00+09:00","2024-05-15T23:59+09:00",
	"2024-05-16T05:00+09:00","2024-05-17T04:59+09:00",
	"2024-05-17T18:00+09:00","2024-05-17T23:59+09:00",
	"2024-05-18T12:00+09:00","2024-05-18T23:59+09:00",
	"2024-05-19T05:00+09:00","2024-05-20T04:59+09:00",
	"2024-05-20T18:00+09:00","2024-05-20T23:59+09:00",
	"2024-05-21T05:00+09:00","2024-05-22T04:59+09:00",
	"2024-05-23T18:00+09:00","2024-05-23T23:59+09:00",
	"2024-05-24T05:00+09:00","2024-05-25T04:59+09:00",
	"2024-05-25T12:00+09:00","2024-05-25T23:59+09:00",
	"2024-05-26T12:00+09:00","2024-05-26T22:59+09:00"
	];
	

	const timeStr_en = [
	"2024-05-16T18:00-07:00","2024-05-17T02:00-07:00",
	"2024-05-18T21:00-07:00","2024-05-19T05:00-07:00",
	"2024-05-20T08:00-07:00","2024-05-21T08:00-07:00",
	"2024-05-22T21:00-07:00","2024-05-23T05:00-07:00",
	"2024-05-25T18:00-07:00","2024-05-26T02:00-07:00",
	"2024-05-27T08:00-07:00","2024-05-27T18:00-07:00",
	"2024-05-29T18:00-07:00","2024-05-30T18:00-07:00"];

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

	var jp_type = "c";
	var en_type = "s";

	switch(jp_type){
		case "s":
			for (let i = 0; i < times_jp.length; i += 2) {
				if (!times_jp[i + 1]) {
					break;
				}
				else{
					document.getElementById(ids_jp[count_jp]).innerHTML = times_jp[i] + " ~ " + times_jp[i + 1];
					count_jp++;
				}
			}
			break;
		case "c":
			for (let i = 0; i < times_jp.length; i += 2) {
				if (!times_jp[i + 1]) {
					break;
				}
				if(count_jp == 1 || count_jp == 4 || count_jp == 6 || count_jp == 8)
				{
					document.getElementById(ids_jp[count_jp]).innerHTML = "<b>Story x2 - </b> " + times_jp[i] + " ~ " + times_jp[i + 1];
					count_jp++;
				}
				/*else if(count_jp == 1 || count_jp == 5 || count_jp == 12)
				{
					document.getElementById(ids_jp[count_jp]).innerHTML = "<b>Escort x3 - </b> " + times_jp[i] + " ~ " + times_jp[i + 1];
					count_jp++;
				}*/
				else if(count_jp == 0 || count_jp == 2 || count_jp == 3 || count_jp == 5 || count_jp == 7 || count_jp == 9 || count_jp == 10)
				{
					document.getElementById(ids_jp[count_jp]).innerHTML = "<b>Escort x2 - </b> " + times_jp[i] + " ~ " + times_jp[i + 1];
					count_jp++;
				}
			}
			break;
	}

	switch(en_type){
		case "s":
			for (let i = 0; i < times_en.length; i += 2) {
				if (!times_en[i + 1]) {
					break;
				}
				else if(count_en != 6)
				{
					document.getElementById(ids_en[count_en]).innerHTML = "<b> x2 - </b>" + times_en[i] + " ~ " + times_en[i + 1];
					count_en++;
				}
				else if(count_en == 6)
				{
					document.getElementById(ids_en[count_en]).innerHTML = "<b> x3 - </b>" + times_en[i] + " ~ " + times_en[i + 1];
					count_en++;
				}
			}
			break;
			
		case "c":
			for (let i = 0; i < times_en.length; i += 2) {
				if (!times_en[i + 1]) {
					break;
				}
				if(count_en == 0 || count_en == 2 || count_en == 4 || count_en == 6)
				{
					document.getElementById(ids_en[count_en]).innerHTML = "<b>Story x2 - </b> " + times_en[i] + " ~ " + times_en[i + 1];
					count_en++;
				}
				else if(count_en == 8)
				{
					document.getElementById(ids_en[count_en]).innerHTML = "<b>Story x3 - </b> " + times_en[i] + " ~ " + times_en[i + 1];
					count_en++;
				}
				else if(count_en == 1 || count_en == 3 || count_en == 5 || count_en == 7 || count_en == 9)
				{
					document.getElementById(ids_en[count_en]).innerHTML = "<b>Escort x2 - </b> " + times_en[i] + " ~ " + times_en[i + 1];
					count_en++;
				}
			}
			break;
	}
