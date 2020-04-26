$(document).ready(function(){
    /* Count the number of downloads of the Github repository */

    // GithubAPI URL
    var username = 'pdfo';
    var repository = 'pdfo';
    var githubAPI = 'https://api.github.com/repos/' + username + '/' + repository + '/releases';

    // Get the JSON
    $.getJSON(githubAPI, function (data) {
        console.log("Counter started...");

        // Total of download_count element to get in the JSON
        let total_element_in_page = 0;
        // Total count of download
        let count = 0;

        $.each(data, function(key, value) {
            let i = 0;
            while(value.assets[i] !== undefined) {
                count += value.assets[i].download_count
                total_element_in_page++;
                i++;
            }
        })

        console.log("Count done:", count);

        $('.count-downloads').text(count);
    });

});
