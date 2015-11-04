// wait for DOM to load before running JS
$(document).ready(function () {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  
	$('#search').on('submit', function (event){
		event.preventDefault();
		
		var keyword = $('#tracks').val();
		
		$.get('https://api.spotify.com/v1/search?q='+ keyword +'&type=track', function (data) {
 			var trackName = data.tracks.items;
 			console.log(trackName);
 			trackName.forEach(function (track){
 				$('#songList').append('<div id= artSong>' + 'Track: ' + track.name + '<br /> ' + 'Artist: ' + track.artists[0].name + '<br /><hr><br />' + '</div>');
 				$('#aCover').append('<a href="'+ track.preview_url + '">' + '<img src="' + track.album.images[0].url + '">' + '</a>' + '<br /><br />');
 			});

 		});
		$('#songList').text('');
		$('#aCover').text('');
	});


});




