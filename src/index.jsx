import React from 'react'
import ReactDOM from 'react-dom'
import DiscographyList from './components/discography-list'


$('body').on('click', '.musician-name', function(e) {
	var name = $(this).find('a').text();
	$.getJSON('/musician/' + name, function(data) {
	 
	  	let discographyData = data;

		for(let i = 0; i < discographyData.length; i++) {
			discographyData[i]['key'] = i;
		}
		ReactDOM.render(<DiscographyList list={ discographyData } />, document.getElementById('discography'))  
	})
	e.preventDefault();
})


$('#add-new-musician').click(function() {
    var newMusicianObj = {
    	name: $('#musician').val(),
    	discography: [{
    		id: 1,
    		title: $('#title1').val(),
    		year: $('#year1').val()
    	},
    	{
    		id: 2,
    		title: $('#title2').val(),
    		year: $('#year2').val()
    	},
    	{
    		id: 3,
    		title: $('#title3').val(),
    		year: $('#year3').val()
    	}]
    }
  
    $.ajax({
      type: "POST",
      url: "/musician/addMusician",
      data: JSON.stringify(newMusicianObj),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        
        $('#musicians').append('<li class="musician-name"><a href="#">' + newMusicianObj.name + '</a></li>');
      }
    });
  });