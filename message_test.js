Feature('Sending message with form');

Scenario('User visits home page and asserts visibility of the main elements', ({ I }) => {
    I.amOnPage('/')
});

Scenario('User fill all required fields in the form', ({ I }) => {
    I.amOnPage('/contact')
});

Scenario('User sends filled by pressing Submit button', ({ I }) => {

});

Scenario('User asserts that the message was sent', ({ I }) => {

});
