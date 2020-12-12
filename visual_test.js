const { I } = inject()

Feature('Visual testing using ResembleJS')

Scenario('Visual test using ResembleJS', async () => {
    I.amOnPage('/')
    I.click('.Modal__close--big')
    I.saveScreenshot('Homepage_Base.png')
    I.seeVisualDiffForElement('.TopNavigationHeaderDesktop', 'Homepage_Base.png',
        { prepareBaseImage: false, tolerance: 0})
})