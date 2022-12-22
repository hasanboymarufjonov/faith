fetch(
  "https://api.aladhan.com/v1/calendarByCity?city=Tashkent&country=Uzbekistan&method=2&month=12&year=2022"
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let testData = data[0]["timings"]["Asr"];

    console.log(testData);
    /*
    const jSonData = data;

    

    const {
      timings: { Sunset, Sunrise },
      date,
      meta,
    } = jSonData;

    //let fajr = timings["Fajr"];
    // console.log(fajr);
    //  console.log(timings, date, meta);
    console.log(Sunset);
    /*
    let time = data.timings["Fajr"];
    console.log(time);*/
  });
