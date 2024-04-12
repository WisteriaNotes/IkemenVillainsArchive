	//Lucky Time Calc
	const timeStr = [
	"2024-04-12T18:00+09:00","2024-04-13T01:59+09:00",
	"2024-04-13T12:00+09:00","2024-04-14T01:59+09:00",
	"2024-04-14T12:00+09:00","2024-04-15T01:59+09:00",
	"2024-04-15T16:00+09:00","2024-04-15T23:59+09:00",
	"2024-04-16T16:00+09:00","2024-04-16T23:59+09:00",
	"2024-04-17T16:00+09:00","2024-04-17T23:59+09:00",
	"2024-04-18T16:00+09:00","2024-04-18T23:59+09:00",
	"2024-04-19T12:00+09:00","2024-04-19T23:59+09:00",
	"2024-04-20T12:00+09:00","2024-04-20T23:59+09:00"
	];

	const times = [];

	var count = 0;

	for (let i = 0; i < timeStr.length; i++) {
		times[i] = new Date(timeStr[i]).toLocaleString();
	}

	var ids = [
	"time-1",
	"time-2",
	"time-3",
	"time-4",
	"time-5",
	"time-6",
	"time-7",
	"time-8",
	"time-9"
	];

	/*for (let i = 0; i < times.length; i += 2) {
		if (!times[i + 1]) {
			break;
		}
		if(count == 0 || count == 2 || count == 6 || count == 8)
		{
			document.getElementById(ids[count]).innerHTML = "<b>Story x2 - </b> " + times[i] + " ~ " + times[i + 1];
			count++;
		}
		else if(count == 1 || count == 5 || count == 12)
		{
			document.getElementById(ids[count]).innerHTML = "<b>Escort x3 - </b> " + times[i] + " ~ " + times[i + 1];
			count++;
		}
		else if(count == 3 || count == 4 || count == 7 || count == 9 || count == 10 || count == 11)
		{
			document.getElementById(ids[count]).innerHTML = "<b>Escort x2 - </b> " + times[i] + " ~ " + times[i + 1];
			count++;
		}
		
	}*/
	for (let i = 0; i < times.length; i += 2) {
		if (!times[i + 1]) {
			break;
		}
		else{
			document.getElementById(ids[count]).innerHTML = "x2 " + times[i] + " ~ " + times[i + 1];
			count++;
		}
	}