const { I } = inject();

Feature("Visual regression track");

BeforeSuite(() => {
    I.vrtStart();
});

AfterSuite(() => {
    I.vrtStop();
});

Scenario("Verify home page", () => {
    I.amOnPage("http://192.168.178.132:8081/index2.html");
    I.click('.Modal__close--big')
    I.vrtTrack("Homepage", {
        os: "mac",
        device: "device",
        browser: "firefox",
        diffTollerancePercent: 10,
        ignoreAreas: [
            { x: 10, y: 10, width: 100, height: 200 },
        ],
    });
});