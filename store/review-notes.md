# Hearers: notes for App Review

This file answers the questions of App Review (Guideline 2.1). In App Store Connect, copy the text
between the two lines into the Notes field of App Review Information. Put the link to the video
in place of `[video link]`. The "Manual steps" section is for the developer only. Do not paste it.

---

**1. Video of the app**

Video on a physical iPhone: [video link]

The video starts at the launch of the app. It then shows each main feature.

**2. Purpose and audience**

Hearers helps Christians learn the catechisms, creeds and confessions of the church by heart. It
also helps them learn Scripture by heart. The audience is adults, families and churches in the
Reformed and Lutheran traditions.

Long texts are hard to learn and easy to forget. Hearers gives one answer at a time. The learner
types the first letter of each word. The app grades each clause. Spaced repetition (FSRS) then
schedules each clause again before the learner forgets it. Each proof text opens in the King James
Version.

The app is free. It has no account, no advertisements and no analytics. Nothing in the app costs money. It
has no content from users. It keeps all data on the device.

**3. Access to the main features**

No login is necessary. The app has all of its texts in the bundle.

1. Open Hearers.
2. Under "Which confessions do you hold?", tap "Reformed".
3. Tap the "Library" tab.
4. Tap "Westminster Shorter Catechism".
5. Under "Memorise this in order", tap "1/day".
6. Tap "What is the chief end of man?".
7. Tap an underlined phrase. The sheet shows the proof texts in the KJV.
8. Tap "Done".
9. Tap "Learn this".
10. Tap "Skip to test".
11. Type these letters: `m c e i t g g a t e h f e`.
12. Tap "Continue".
13. Tap the "Progress" tab.
14. Tap the "Settings" tab.
15. Under "Daily reminder", tap "Turn on".

On a later day, the "Today" tab shows the answers that are due, with "Start review".

**4. External services**

The core functions use no server and no third-party service. The app uses these functions of iOS:

- Local notifications for the daily reminder. The app does not use a push server.
- The speech synthesis of iOS for "Listen".
- The in-app browser (SFSafariViewController) for links that the user taps. The links go to
  Monergism, CCEL and the sites of the sources. They also go to the Self-Interpreting Bible
  (`self-interpreting-bible.pages.dev`). The developer runs that site.
- The share sheet and the Files picker for the backup file.

Sync is optional and off by default. To use it, the user types the address of a Hearers server that
the user runs. The reviewer does not need sync.

**5. Regions**

Hearers works the same in all regions. All texts are in English and are in the app. The app has no
features that change with the region or the location.

**6. Third-party material**

All texts in the app are in the public domain, or are the work of the developer:

- Westminster Shorter Catechism, Westminster Larger Catechism and Westminster Confession of Faith
  (1646 to 1648). The texts come from Creeds.json (`github.com/NonlinearFruit/Creeds.json`), which
  marks them as public domain.
- Heidelberg Catechism and Belgic Confession, English text from Philip Schaff, The Creeds of
  Christendom, volume 3 (1877). Public domain.
- Canons of Dort, Athanasian Creed and Chalcedonian Definition, from Creeds.json. Public domain.
- Luther's Small Catechism and Large Catechism, from the Triglot Concordia (1921), translated by F.
  Bente and W. H. T. Dau. Public domain. The Large Catechism comes from Project Gutenberg (eBook
  1722).
- Apostles' Creed and Nicene Creed, traditional English text. The developer wrote the phrase notes.
  The hymn notes give only the title and the number of a hymn.
- The Ten Commandments and all Scripture: King James Version (1769), from
  `github.com/scrollmapper/bible_databases`.
- The Scripture references of the proof texts are references only. They contain no text.
- The "Further reading" items are links only. The app does not contain those books.
- Font: Inter (SIL Open Font License). Icons: Ionicons (MIT License).

The Settings tab of the app lists each source and its licence.

---

## Manual steps

If the Maestro flow (`apps/mobile/.maestro/review-demo.yaml`) fails, record the video by hand:

1. Delete Hearers from the iPhone.
2. Install the build again from TestFlight.
3. Connect the iPhone to the Mac with a cable.
4. In QuickTime Player, select File > New Movie Recording.
5. Select the iPhone as the camera.
6. Click the record button.
7. On the iPhone, tap the Hearers icon.
8. Do steps 2 to 12 of item 3.
9. Tap the back button. Then tap it again.
10. Tap the "Today" tab.
11. Tap "Learn one more".
12. Tap "Skip to test".
13. Type these letters: `twogwicitsotoantitortduhwmgaeh`.
14. Tap "Continue".
15. Tap "Apostles' and Nicene Creeds".
16. Scroll down.
17. Tap the back button.
18. Tap the "Progress" tab.
19. Scroll down.
20. Tap the "Settings" tab.
21. Under "Daily reminder", tap "Turn on".
22. In the iOS prompt, tap "Allow".
23. Scroll down to "Sources".
24. Tap the "Today" tab.
25. In QuickTime Player, click the stop button.

On each screen, wait 2 to 3 seconds. The reviewer must have time to read the screen.
