$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2083915.json',
    dataType: 'jsonp',
    success: function(response){
      var badges = $('#badges');
      $.each(response.courses.completed, function(index, value){
        var badge = '<div class="course">';
        badge += '<h3>' + value.title + '</h3>';
        badge += '<img src=' + value.badge + '>';
        badge += '<a href="' + value.url + '" class="btn btn-primary" target="_blank">See Course</a>';  
        badge += '</div>';
        console.log(JSON.stringify(value));
        badges.append(badge);
      });
    }
  });
});
