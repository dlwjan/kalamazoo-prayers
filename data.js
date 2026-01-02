const prayerData = {
    month: "January",
    year: "2026",
    hadith: {
        text: "The Hour will NOT be established until time passes rapidly, such that a year is like a month, a month is like a week, a week is like a day, a day is like an hour, and an hour is like the flicker of a flame.",
        ref: "Sunan Al-Tirmidhi 2332"
    },
    jummah: [
        { loc: "KIC (1520 W Mich Ave)", time: "1:30 PM & 3:30 PM" },
        { loc: "KIS (805 E Osterhout)", time: "2:00 PM" }
    ],
    iqamah: {
        fajr: "7:00 AM",
        dhuhr: "1:10 PM",
        asr: (day) => day <= 15 ? "3:25 PM" : "3:40 PM",
        maghrib: (day) => day <= 15 ? "10 mins after Azan" : "After Azan",
        isha: (day) => day <= 15 ? "7:20 PM" : "7:40 PM"
    },
    schedule: [
        { day: 1, fajr: "6:30a", sunrise: "8:11a", dhuhr: "12:51p", asr: "3:03p", maghrib: "5:24p", isha: "7:02p" },
        { day: 2, fajr: "6:30a", sunrise: "8:11a", dhuhr: "12:52p", asr: "3:04p", maghrib: "5:25p", isha: "7:03p" },
        { day: 3, fajr: "6:31a", sunrise: "8:11a", dhuhr: "12:52p", asr: "3:05p", maghrib: "5:26p", isha: "7:04p" },
        { day: 4, fajr: "6:31a", sunrise: "8:11a", dhuhr: "12:53p", asr: "3:06p", maghrib: "5:27p", isha: "7:04p" },
        { day: 5, fajr: "6:31a", sunrise: "8:11a", dhuhr: "12:53p", asr: "3:06p", maghrib: "5:28p", isha: "7:05p" },
        { day: 6, fajr: "6:31a", sunrise: "8:11a", dhuhr: "12:53p", asr: "3:07p", maghrib: "5:29p", isha: "7:06p" },
        { day: 7, fajr: "6:31a", sunrise: "8:11a", dhuhr: "12:54p", asr: "3:08p", maghrib: "5:30p", isha: "7:07p" },
        { day: 8, fajr: "6:31a", sunrise: "8:11a", dhuhr: "12:54p", asr: "3:09p", maghrib: "5:31p", isha: "7:08p" },
        { day: 9, fajr: "6:31a", sunrise: "8:11a", dhuhr: "12:55p", asr: "3:10p", maghrib: "5:32p", isha: "7:09p" },
        { day: 10, fajr: "6:31a", sunrise: "8:11a", dhuhr: "12:55p", asr: "3:11p", maghrib: "5:33p", isha: "7:10p" },
        { day: 11, fajr: "6:30a", sunrise: "8:10a", dhuhr: "12:56p", asr: "3:12p", maghrib: "5:34p", isha: "7:11p" },
        { day: 12, fajr: "6:30a", sunrise: "8:10a", dhuhr: "12:56p", asr: "3:13p", maghrib: "5:35p", isha: "7:12p" },
        { day: 13, fajr: "6:30a", sunrise: "8:10a", dhuhr: "12:56p", asr: "3:14p", maghrib: "5:36p", isha: "7:13p" },
        { day: 14, fajr: "6:30a", sunrise: "8:09a", dhuhr: "12:57p", asr: "3:15p", maghrib: "5:37p", isha: "7:14p" },
        { day: 15, fajr: "6:30a", sunrise: "8:09a", dhuhr: "12:57p", asr: "3:16p", maghrib: "5:38p", isha: "7:15p" },
        { day: 16, fajr: "6:29a", sunrise: "8:08a", dhuhr: "12:57p", asr: "3:17p", maghrib: "5:40p", isha: "7:16p" },
        { day: 17, fajr: "6:29a", sunrise: "8:08a", dhuhr: "12:58p", asr: "3:18p", maghrib: "5:41p", isha: "7:17p" },
        { day: 18, fajr: "6:29a", sunrise: "8:07a", dhuhr: "12:58p", asr: "3:19p", maghrib: "5:42p", isha: "7:18p" },
        { day: 19, fajr: "6:28a", sunrise: "8:07a", dhuhr: "12:58p", asr: "3:20p", maghrib: "5:43p", isha: "7:19p" },
        { day: 20, fajr: "6:28a", sunrise: "8:06a", dhuhr: "12:59p", asr: "3:21p", maghrib: "5:44p", isha: "7:20p" },
        { day: 21, fajr: "6:27a", sunrise: "8:05a", dhuhr: "12:59p", asr: "3:22p", maghrib: "5:46p", isha: "7:21p" },
        { day: 22, fajr: "6:27a", sunrise: "8:05a", dhuhr: "12:59p", asr: "3:24p", maghrib: "5:47p", isha: "7:22p" },
        { day: 23, fajr: "6:26a", sunrise: "8:04a", dhuhr: "12:59p", asr: "3:25p", maghrib: "5:48p", isha: "7:23p" },
        { day: 24, fajr: "6:26a", sunrise: "8:03a", dhuhr: "1:00p", asr: "3:26p", maghrib: "5:49p", isha: "7:24p" },
        { day: 25, fajr: "6:25a", sunrise: "8:02a", dhuhr: "1:00p", asr: "3:27p", maghrib: "5:51p", isha: "7:25p" },
        { day: 26, fajr: "6:24a", sunrise: "8:01a", dhuhr: "1:00p", asr: "3:28p", maghrib: "5:52p", isha: "7:26p" },
        { day: 27, fajr: "6:24a", sunrise: "8:01a", dhuhr: "1:00p", asr: "3:29p", maghrib: "5:53p", isha: "7:27p" },
        { day: 28, fajr: "6:23a", sunrise: "8:00a", dhuhr: "1:00p", asr: "3:30p", maghrib: "5:55p", isha: "7:28p" },
        { day: 29, fajr: "6:22a", sunrise: "7:59a", dhuhr: "1:01p", asr: "3:31p", maghrib: "5:56p", isha: "7:30p" },
        { day: 30, fajr: "6:22a", sunrise: "7:58a", dhuhr: "1:01p", asr: "3:32p", maghrib: "5:57p", isha: "7:31p" },
        { day: 31, fajr: "6:21a", sunrise: "7:57a", dhuhr: "1:01p", asr: "3:33p", maghrib: "5:58p", isha: "7:32p" }
    ]
};