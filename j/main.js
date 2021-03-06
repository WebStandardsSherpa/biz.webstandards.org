/*------------------------------------------------------------------------------
Function:		FunctionHandler()
Author:			Aaron Gustafson (aaron at easy-designs dot net)
Creation Date:	2009-04-02
Version:		0.2
Homepage:		http://github.com/easy-designs/FunctionHandler.js
License:		MIT License (see homepage)
Note:			If you change or improve on this script, please let us know by
				emailing the author (above) with a link to your demo page.
------------------------------------------------------------------------------*/
(function(){var FunctionHandler={version:"0.2"},pages={};function initialize(){var body_id=$("body").attr("id");if(body_id!=false&&typeof(pages[body_id])!="undefined"){run(pages[body_id])}if(typeof(pages["*"])!="undefined"){run(pages["*"])}}$(document).ready(initialize);FunctionHandler.register=function(id,callback){if((typeof(id)!="string"&&!(id instanceof Array))||typeof(callback)!="function"){return false}if(typeof(id)=="string"&&id.indexOf(", ")!=-1){id=id.split(", ")}if(id instanceof Array){for(var i=id.length-1;i>=0;i--){add(id[i],callback)}}else{add(id,callback)}return true};function add(id,callback){if(typeof(pages[id])=="undefined"){pages[id]=[]}pages[id].push(callback)}function run(arr){if(!(arr instanceof Array)){return}for(var i=arr.length-1;i>=0;i--){arr[i]()}}window.FunctionHandler=FunctionHandler})();


$(document).ready(function(){
	var
	$form	= $('#search-form'),
	showing	= false,
	timing	= 1000;
	
	$('#search-icon').click(function()
	{
		if ( ! showing )
		{
			$form.animate( {width: '270px'}, timing, toggle );
		}
		else
		{
			$form.animate( {width: '36px'}, timing, toggle );
		}
	});
	
	// Always show search input on keyboard focus
	$('#query').focus(function()
	{
		if ( ! showing ) 
		{
			$form.animate( {width: '270px'}, timing, toggle );
		}
	});

	
	function toggle()
	{
		showing = showing ? false : true;
	}
});