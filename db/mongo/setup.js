const mdb = require('./connect.js');

const url = "mongodb://localhost:27017";
const dbName = 'kastest';

const records_json = '[{"dateutc":1580328600000,"tempinf":68,"tempf":33.3,"humidityin":35,"humidity":65,"windspeedmph":0,"windgustmph":0,"maxdailygust":34.9,"winddir":153,"baromabsin":29.52,"baromrelin":30.08,"hourlyrainin":0,"dailyrainin":0,"weeklyrainin":0,"monthlyrainin":3.13,"yearlyrainin":3.13,"solarradiation":12,"uv":0,"feelsLike":33.3,"dewPoint":22.82,"feelsLikein":68,"dewPointin":39.3,"lastRain":"2020-01-25T23:44:00.000Z","date":"2020-01-29T20:10:00.000Z"},{"dateutc":1580328300000,"tempinf":68,"tempf":33.3,"humidityin":35,"humidity":65,"windspeedmph":0,"windgustmph":0,"maxdailygust":34.9,"winddir":97,"baromabsin":29.51,"baromrelin":30.08,"hourlyrainin":0,"dailyrainin":0,"weeklyrainin":0,"monthlyrainin":3.13,"yearlyrainin":3.13,"solarradiation":12.36,"uv":0,"feelsLike":33.3,"dewPoint":22.82,"feelsLikein":68,"dewPointin":39.3,"lastRain":"2020-01-25T23:44:00.000Z","date":"2020-01-29T20:05:00.000Z"},{"dateutc":1580328000000,"tempinf":68,"tempf":33.3,"humidityin":35,"humidity":65,"windspeedmph":0,"windgustmph":0,"maxdailygust":34.9,"winddir":339,"baromabsin":29.52,"baromrelin":30.08,"hourlyrainin":0,"dailyrainin":0,"weeklyrainin":0,"monthlyrainin":3.13,"yearlyrainin":3.13,"solarradiation":12.51,"uv":0,"feelsLike":33.3,"dewPoint":22.82,"feelsLikein":68,"dewPointin":39.3,"lastRain":"2020-01-25T23:44:00.000Z","date":"2020-01-29T20:00:00.000Z"},{"dateutc":1580327700000,"tempinf":67.8,"tempf":33.4,"humidityin":35,"humidity":65,"windspeedmph":0,"windgustmph":0,"maxdailygust":34.9,"winddir":123,"baromabsin":29.52,"baromrelin":30.09,"hourlyrainin":0,"dailyrainin":0,"weeklyrainin":0,"monthlyrainin":3.13,"yearlyrainin":3.13,"solarradiation":13.16,"uv":0,"feelsLike":33.4,"dewPoint":22.92,"feelsLikein":67.8,"dewPointin":39.1,"lastRain":"2020-01-25T23:44:00.000Z","date":"2020-01-29T19:55:00.000Z"},{"dateutc":1580327400000,"tempinf":67.8,"tempf":33.4,"humidityin":35,"humidity":64,"windspeedmph":0,"windgustmph":0,"maxdailygust":34.9,"winddir":80,"baromabsin":29.52,"baromrelin":30.08,"hourlyrainin":0,"dailyrainin":0,"weeklyrainin":0,"monthlyrainin":3.13,"yearlyrainin":3.13,"solarradiation":15.88,"uv":0,"feelsLike":33.4,"dewPoint":22.55,"feelsLikein":67.8,"dewPointin":39.1,"lastRain":"2020-01-25T23:44:00.000Z","date":"2020-01-29T19:50:00.000Z"},{"dateutc":1580327100000,"tempinf":67.6,"tempf":33.4,"humidityin":35,"humidity":64,"windspeedmph":0,"windgustmph":0,"maxdailygust":34.9,"winddir":158,"baromabsin":29.52,"baromrelin":30.08,"hourlyrainin":0,"dailyrainin":0,"weeklyrainin":0,"monthlyrainin":3.13,"yearlyrainin":3.13,"solarradiation":16.37,"uv":0,"feelsLike":33.4,"dewPoint":22.55,"feelsLikein":67.6,"dewPointin":39,"lastRain":"2020-01-25T23:44:00.000Z","date":"2020-01-29T19:45:00.000Z"},{"dateutc":1580326800000,"tempinf":67.6,"tempf":33.6,"humidityin":35,"humidity":63,"windspeedmph":0,"windgustmph":0,"maxdailygust":34.9,"winddir":54,"baromabsin":29.52,"baromrelin":30.08,"hourlyrainin":0,"dailyrainin":0,"weeklyrainin":0,"monthlyrainin":3.13,"yearlyrainin":3.13,"solarradiation":17.42,"uv":0,"feelsLike":33.6,"dewPoint":22.37,"feelsLikein":67.6,"dewPointin":39,"lastRain":"2020-01-25T23:44:00.000Z","date":"2020-01-29T19:40:00.000Z"},{"dateutc":1580326500000,"tempinf":67.6,"tempf":33.6,"humidityin":35,"humidity":63,"windspeedmph":0,"windgustmph":0,"maxdailygust":34.9,"winddir":106,"baromabsin":29.52,"baromrelin":30.08,"hourlyrainin":0,"dailyrainin":0,"weeklyrainin":0,"monthlyrainin":3.13,"yearlyrainin":3.13,"solarradiation":18.21,"uv":0,"feelsLike":33.6,"dewPoint":22.37,"feelsLikein":67.6,"dewPointin":39,"lastRain":"2020-01-25T23:44:00.000Z","date":"2020-01-29T19:35:00.000Z"},{"dateutc":1580326200000,"tempinf":67.6,"tempf":33.6,"humidityin":35,"humidity":63,"windspeedmph":0,"windgustmph":0,"maxdailygust":34.9,"winddir":92,"baromabsin":29.52,"baromrelin":30.08,"hourlyrainin":0,"dailyrainin":0,"weeklyrainin":0,"monthlyrainin":3.13,"yearlyrainin":3.13,"solarradiation":20.5,"uv":0,"feelsLike":33.6,"dewPoint":22.37,"feelsLikein":67.6,"dewPointin":39,"lastRain":"2020-01-25T23:44:00.000Z","date":"2020-01-29T19:30:00.000Z"},{"dateutc":1580325900000,"tempinf":67.6,"tempf":33.8,"humidityin":35,"humidity":62,"windspeedmph":0,"windgustmph":0,"maxdailygust":34.9,"winddir":145,"baromabsin":29.52,"baromrelin":30.08,"hourlyrainin":0,"dailyrainin":0,"weeklyrainin":0,"monthlyrainin":3.13,"yearlyrainin":3.13,"solarradiation":20.93,"uv":0,"feelsLike":33.8,"dewPoint":22.18,"feelsLikein":67.6,"dewPointin":39,"lastRain":"2020-01-25T23:44:00.000Z","date":"2020-01-29T19:25:00.000Z"}]';
const records = JSON.parse(records_json);

(async function() {
  let connection;

  try {
    connection = await mdb.connect(url);
    const db = connection.db(dbName);
    const collection = 'wx_observations_7';
    console.log('Opened database connection');

    const coll = db.collection(collection);

    coll.drop(function(e,r) {
      if (e) {
        console.log(e.message);
      }
    });

    const r = await coll.insertMany(records);
    console.log(`Inserted ${r.insertedCount} records`);

    const count = await coll.stats();
    console.log(`The collection has ${count.count} records`);

    const highest_temp = await coll.find({}).sort([['tempf', -1]]).limit(1).toArray();
    console.log(`The highest temp in the collection is ${highest_temp[0].tempf}`);

  } catch (err) {
    console.error(err.stack)
  }

  if(connection) {
    connection.close();
    console.log('Closed database connection.');
  }

})();
