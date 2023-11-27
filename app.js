"use strict";
let nextDate = new Date("May 11, 2024 00:00:00"),
    seconds = 1e3,
    minutes = 60 * seconds,
    hours = 60 * minutes,
    days = 24 * hours,
    countdown = setInterval(() => {
        let o = new Date(),
            t = nextDate - o,
            s =
                (Math.floor(t / days) < 10 ? "0" + Math.floor(t / days) : Math.floor(t / days)) +
                " Days " +
                (Math.floor((t % days) / hours) < 10 ? "0" + Math.floor((t % days) / hours) : Math.floor((t % days) / hours)) +
                " Hours " +
                (Math.floor((t % hours) / minutes) < 10 ? "0" + Math.floor((t % hours) / minutes) : Math.floor((t % hours) / minutes)) +
                " Minutes " +
                (Math.floor((t % minutes) / seconds) < 10 ? "0" + Math.floor((t % minutes) / seconds) : Math.floor((t % minutes) / seconds)) +
                " Seconds";
        (document.getElementById("result").innerText = t <= 0 ? "THE END." : s), t <= 0 && clearInterval(countdown);
    }, 1e3);