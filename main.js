/**
 * Created by yannickvanoekelen on 13/12/16.
 */
// Eerst op papier uitgewerkt
// vervolgens overleg gehad met Genzo, Jelle & Jeroen
// Vervolgens stapje per stapje uitgewerkt (met hulp van bovenstaande partijen)
// Vervolgens project eerst volledig uitgewerkt zelfstandig (geen committer)
// Tenslotte project nu volledig hermaken met stukje per stukje te committen

var BASE_URL = "https://web-ims.thomasmore.be/datadistribution/API/2.0";
var Settings = function(url) {
    this.url = BASE_URL + url;
    this.method = "GET";
    this.qs = {
        -        format: 'json'
    +        format: "json"
};
    this.headers = {
        authorization: "Basic aW1zOno1MTJtVDRKeVgwUExXZw=="
    };
};

var Drone = function(id, name, macA, loc, lastpada, files, filesCount) {
    this._id = id
    this.name = name;
    this.mac_address = macA;
    this.location = loc;
    this.last_packet_date = lastpada;
    this.files = files;
    this.files_count = filesCount;
};


var Content = function(id, macA, url, datetime, ref, rssi) {
    this.id = id;
    this.mac_address = macA;
    this.url = url;
    this.datetime = datetime;
    this.ref = ref;
    this.rssi = rssi;
};







//<!DOCTYPE html>
// <html>
// <body> <!-- Opmaak bepalen !-->
// <style media="screen">
// h1, p {
/*   font-family: 'Roboto', sans-serif;
}
table {
    border-collapse: collapse;
    width: 100%;
    font-family: 'Roboto', sans-serif;
}
th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
tr:hover {
    background-color: #f5f5f5;
}
</style>
<!-- Hoofding en tabel verwezelijken !-->
<div>
<h1>EX-7 Drone data: Yannick Van Oekelen</h1>
<p>Loading the data, please have some patience it takes a while </p>
<table id="dronedata">
    <tr>
    <th>DRONE NAME</th>
<th>DRONE MAC ADDRESS</th>
<th>FILE  ID</th>
<th>FIRST RECORD</th>
<th>LAST RECORD</th>
</tr>
</table>
</div>
</body>

<head> <!-- Gegevens in tabel plaatsen !-->
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>EX-7 Drone data: Yannick Van Oekelen</title>
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script type="text/javascript">
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://web-ims.thomasmore.be/datadistribution/API/2.0/drones?format=json",
    "method": "GET",
    "dataType": 'json',
    "headers": {
        "authorization": "Basic aW1zOno1MTJtVDRKeVgwUExXZw==",
        "cache-control": "no-cache"
    }
};
$.ajax(settings)
    .done(function(response_1) {
        for (var x = 0; x < response_1.length; x++) {
            settings['url'] = response_1[x]['url'];
            $.ajax(settings).done(function(response_2) {
                settings['url'] = 'https://web-ims.thomasmore.be/datadistribution/API/2.0/files?drone_id.is=' + response_2['id'] + '&format=json';
                $.ajax(settings).done(function(response_3) {
                    for (var y = 0; y < response_3.length; y++) {
                        settings['url'] = response_3[y]['url'];
                        $.ajax(settings).done(function(response_4) {
                            $("#dronedata").append(
                                '<tr>' +
                                '<td>' + response_2.name + '</td>' +
                                '<td>' + response_2.mac_address + '</td>' +
                                '<td>' + response_4.id + '</td>' +
                                '<td>' + response_4.date_first_record + '</td>' +
                                '<td>' + response_4.date_last_record + '</td>' +
                                '</tr>');
                        });
                    };
                });
            });
        };
    });
</script>
</head>

</html> */