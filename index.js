formatGoogleCalendar.init({
	calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/b53etc90j5h9ic1si0e556oark@group.calendar.google.com/events?key=AIzaSyAq5NdUw04tb1D6Z0yie32s1Hu8c2s_-2Y',
	past: false,
	upcoming: true,
	sameDayTimes: true,
	dayNames: true,
	pastTopN: 0,
	upcomingTopN: 10,
	itemsTagName: 'div',
	upcomingSelector: '#events-upcoming',
	pastSelector: '#events-past',
	upcomingHeading: '<h2>Upcoming events</h2>',
	pastHeading: '<h2>Past events</h2>',
	format: ['*summary*', '*date*', '<br><br>', '*description*']
});