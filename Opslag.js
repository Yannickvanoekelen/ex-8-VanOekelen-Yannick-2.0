/**
 * Created by yannickvanoekelen on 13/12/16.
 */
// Eerst op papier uitgewerkt
// vervolgens overleg gehad met Genzo, Jelle & Jeroen
// Vervolgens stapje per stapje uitgewerkt (met hulp van bovenstaande partijen)
// Vervolgens project eerst volledig uitgewerkt zelfstandig (geen committer)
// Tenslotte project nu volledig hermaken met stukje per stukje te committen


var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/prober';


var dal = {

    connect: function(err, result) {
        MongoClient.connect(url, function(error, db) {
            if (error)
                throw new Error(error);
            result(db);
        });
    },

    clearDrone: function(call) {
        this.connect(null, function(db) {
            db.collection('drones').drop(function(err, result) {
                db.close();
            });
        })
    },
    insertDrone: function(drone, callback) {
        this.connect(null, function(db) {
            db.collection('drones').insert(drone, function(err, result) {
                db.close();
            });
        });
    },
    clearContent: function(call) {
        this.connect(null, function(db) {
            db.collection('contents').drop(function(err, result) {
                db.close();
            });
        })
    },
    insertContent: function(drone, callback) {
        this.connect(null, function(db) {
            db.collection('contents').insert(drone, function(err, result) {
                db.close();
            });
        });
    },

    clearFile: function(call) {
        this.connect(null, function(db) {
             db.collection('files').drop(function(err, result) {
            db.close();
        });
    })
},
    insertFile: function(drone, callback) {
    this.connect(null, function(db) {
        db.collection('files').insert(drone, function(err, result) {
            db.close();
        });
    });
}
}

module.exports = dal;