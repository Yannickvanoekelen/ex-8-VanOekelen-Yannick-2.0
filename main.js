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
    format: "json"
};
    this.headers = {
        authorization: "Basic aW1zOno1MTJtVDRKeVgwUExXZw=="
    };
};

var Drone = function(id, name, macA, loc, lastpada, files, filesCount) {
    this.id = id
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

var File = function(fid, dateFirstRecord, dateLastRecord, dateLoaded, cont, contentsCount, url, ref) {
    this.file_id = fid;
    this.date_first_record = dateFirstRecord;
    this.date_last_record = dateLastRecord;
    this.date_loaded = dateLoaded;
    this.contents = cont;
    this.contents_count = contentsCount;
    this.url = url;
    this.ref = ref;
};

// hulp gekregen van henzo bij deze install request van save

var request = require("request");
var dal = require("./storage.js");
var dronesSettings = new Settings("/drones?format=json");
dal.clearDrone();
dal.clearFile();
dal.clearContent();


var dronesSettings = new Settings("/drones?format=json");

    request(dronesSettings, function(error, response, dronesString) {
        var drones = JSON.parse(dronesString);
        drones.forEach(function(drone) {
            var droneSettings = new Settings("/drones/" + drone.id + "?format=json")
            request(droneSettings, function(error, response, droneString) {
                var drone = JSON.parse(droneString);
                dal.insertDrone(new Drone(
                    drone.id,
                    drone.name,
                    drone.mac_address,
                    drone.location,
                    drone.last_packet_date,
                    drone.files,
                    drone.files_count));

/*
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