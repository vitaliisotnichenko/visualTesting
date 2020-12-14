const { I } = inject();

Feature('Visual tests using Applitools');

Before(() => {
    I.amOnPage('/');
});

Scenario('Verify home page', async () => {
    I.click('.Modal__close--big')
    await I.eyeCheck('Homepage');
});