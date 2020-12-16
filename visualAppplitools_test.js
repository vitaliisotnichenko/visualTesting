const { I } = inject();

Feature('Visual tests using Applitools');

Before(() => {
    I.amOnPage('http://192.168.178.132:8081/index2.html');
});

Scenario('Verify home page', async () => {
    I.click('.Modal__close--big')
    await I.eyeCheck('Homepage', '11', 'Layout');
});