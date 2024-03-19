	//Lucky Time Calc
	const timeStr = [
	"2024-03-19T16:00+09:00","2024-03-20T04:59+09:00",
	"2024-03-20T10:00+09:00","2024-03-20T23:59+09:00",
	"2024-03-21T05:00+09:00","2024-03-22T04:59+09:00",
	"2024-03-22T16:00+09:00","2024-03-22T23:59+09:00",
	"2024-03-23T10:00+09:00","2024-03-24T23:59+09:00",
	"2024-03-24T10:00+09:00","2024-03-24T23:59+09:00",
	"2024-03-25T05:00+09:00","2024-03-26T04:59+09:00",
	"2024-03-26T16:00+09:00","2024-03-09T23:59+09:00",
	"2024-03-27T05:00+09:00","2024-03-28T04:59+09:00",
	"2024-03-28T16:00+09:00","2024-03-28T23:59+09:00",
	"2024-03-29T10:00+09:00","2024-03-20T23:59+09:00",
	"2024-03-30T10:00+09:00","2024-03-30T21:59+09:00",
	"2024-03-31T00:00+09:00","2024-03-31T23:59+09:00"
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
	"time-9",
	"time-10",
	"time-11",
	"time-12",
	"time-13"
	];

	for (let i = 0; i < times.length; i += 2) {
		if (!times[i + 1]) {
			break;
		}
		if(count == 1 || count == 3 || count == 7 || count == 9)
		{
			document.getElementById(ids[count]).innerHTML = "<b>Story x2 - </b> " + times[i] + " ~ " + times[i + 1];
		}
		else if(count == 2 || count == 6 || count == 13)
		{
			document.getElementById(ids[count]).innerHTML = "<b>Escort x3 - </b> " + times[i] + " ~ " + times[i + 1];
		}
		else if(count == 4 || count == 5 || count == 8 || count == 10 || count == 11 || count == 12)
		{
			document.getElementById(ids[count]).innerHTML = "<b>Escort x2 - </b> " + times[i] + " ~ " + times[i + 1];
		}
		count++;
	}