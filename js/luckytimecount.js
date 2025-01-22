	//Lucky Time Calc
	const timeStr_jp = [
	"2025-01-10T12:00+09:00","2025-01-10T23:59+09:00",
	"2025-01-11T18:00+09:00","2025-01-11T23:59+09:00",
	"2025-01-12T05:00+09:00","2025-01-13T04:59+09:00",
	"2025-01-13T18:00+09:00","2025-01-13T23:59+09:00",
	"2025-01-14T05:00+09:00","2025-01-15T04:59+09:00",
	"2025-01-15T18:00+09:00","2025-01-15T23:59+09:00",
	"2025-01-17T05:00+09:00","2025-01-18T04:59+09:00",
	"2025-01-18T18:00+09:00","2025-01-18T23:59+09:00",
	"2025-01-10T05:00+09:00","2025-01-20T04:59+09:00",
	"2025-01-20T18:00+09:00","2025-01-20T23:59+09:00",
	"2025-01-21T18:00+09:00","2025-01-21T22:59+09:00"

	];
	

	const timeStr_en = [
	"2025-01-21T18:00-08:00","2025-01-22T18:00-08:00",
	"2025-01-22T18:00-08:00","2025-01-23T00:00-08:00",
	"2025-01-23T00:00-08:00","2025-01-24T00:00-08:00",
	"2025-01-24T08:00-08:00","2025-01-24T20:00-08:00",
	"2025-01-25T00:00-08:00","2025-01-26T00:00-08:00",
	"2025-01-26T08:00-08:00","2025-01-26T16:00-08:00",
	"2025-01-27T00:00-08:00","2025-01-28T00:00-08:00",
	"2025-01-28T08:00-08:00","2025-01-28T16:00-08:00",
	"2025-01-29T00:00-08:00","2025-01-30T00:00-08:00",
	"2025-01-30T18:00-08:00","2025-01-31T18:00-08:00"
	];

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
	"time-11-jp",
	"time-12-jp"

	];

	var ids_en = [
	"time-1-en",
	"time-2-en",
	"time-3-en",
	"time-4-en",
	"time-5-en",
	"time-6-en",
	"time-7-en",
	"time-8-en",
	"time-9-en",
	"time-10-en",
	"time-11-en"
	];

	var jp_type = "c";
	var en_type = "c";

	switch(jp_type){
		case "s":
			for (let i = 0; i < times_jp.length; i += 2) {
				if (!times_jp[i + 1]) {
					break;
				}
				/*if(count_jp == 2 || count_jp == 10){
					document.getElementById(ids_jp[count_jp]).innerHTML = "<b>  x3 - </b>" + times_jp[i] + " ~ " + times_jp[i + 1];
					count_jp++;
				}
				else {
					document.getElementById(ids_jp[count_jp]).innerHTML = "<b> x2 - </b>" + times_jp[i] + " ~ " + times_jp[i + 1];
					count_jp++;
				}*/
				document.getElementById(ids_jp[count_jp]).innerHTML = "<b>  x2 - </b>" + times_jp[i] + " ~ " + times_jp[i + 1];
				count_jp++;
			}
			break;
		case "c":
			for (let i = 0; i < times_jp.length; i += 2) {
				if (!times_jp[i + 1]) {
					break;
				}
				if(count_jp == 2 || count_jp == 4 || count_jp == 6 || count_jp == 8  )
				{
					document.getElementById(ids_jp[count_jp]).innerHTML = "<b>Story x2 - </b> " + times_jp[i] + " ~ " + times_jp[i + 1];
					count_jp++;
				}
				/*else if(count_jp == 8)
				{
					document.getElementById(ids_jp[count_jp]).innerHTML = "<b>Escort x3 - </b> " + times_jp[i] + " ~ " + times_jp[i + 1];
					count_jp++;
				}*/
				/*else if(count_jp == 4)
				{
					document.getElementById(ids_jp[count_jp]).innerHTML = "<b>Story x3 - </b> " + times_jp[i] + " ~ " + times_jp[i + 1];
					count_jp++;
				}*/
				else if(count_jp == 0 || count_jp == 1 || count_jp == 3 || count_jp == 5 || count_jp == 7 || count_jp == 9 || count_jp == 10)
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
				if(count_en != 6)
				{
					document.getElementById(ids_en[count_en]).innerHTML = "<b> x2 - </b>" + times_en[i] + " ~ " + times_en[i + 1];
					count_en++;
				}
				else
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
				if(count_en == 2 || count_en == 4 || count_en == 6 || count_en == 8)
				{
					document.getElementById(ids_en[count_en]).innerHTML = "<b>Story x2 - </b> " + times_en[i] + " ~ " + times_en[i + 1];
					count_en++;
				}
				else if(count_en == 0)
				{
					document.getElementById(ids_en[count_en]).innerHTML = "<b>Story x3 - </b> " + times_en[i] + " ~ " + times_en[i + 1];
					count_en++;
				}
				else if(count_en == 1 || count_en == 3 || count_en == 5 || count_en == 7)
				{
					document.getElementById(ids_en[count_en]).innerHTML = "<b>Escort x2 - </b> " + times_en[i] + " ~ " + times_en[i + 1];
					count_en++;
				}
				else if(count_en == 9)
				{
					document.getElementById(ids_en[count_en]).innerHTML = "<b>Escort x3 - </b> " + times_en[i] + " ~ " + times_en[i + 1];
					count_en++;
				}
			}
			break;
	}
