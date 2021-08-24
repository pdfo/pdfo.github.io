$(document).ready(function() {
    /* Count the number of downloads */

    $.getJSON('static/scripts/stats/stats.json', function(data) {
        $('.conda-downloads').text(data.conda);
        $('.pypi-downloads').text(data.pypi);
        $('.github-downloads').text(data.github);
        $('.total-downloads').text(data.conda + data.pypi + data.github);
        $('.date-downloads').text(data.date);
    });

});