function sort_list(o)
{
	var order = o;
	var $div = $("div.card-row");

	if(order == 'ascend')
	{
		var sortDivs = $div.sort(function(a, b)
		{
			return $(a).find('.card-contents').eq(0).text() - $(b).find('.card-contents').eq(0).text();
		});
		$(".card-table").html(cards.html);
	}
	else if(order == 'descend')
	{
		var sortDivs = $div.sort(function(a, b)
		{
			return $(b).find('.card-contents').eq(0).text() - $(a).find('.card-contents').eq(0).text();
		});
		$(".card-table").html(cards.html);
	}
}