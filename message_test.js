const assert = require('assert');

Feature('Sending message with form');

Scenario('User visits home page and asserts visibility of the main elements', ({ I }) => {
    I.amOnPage('/');
    I.see('Bluescape QA Test Site');
    I.see('Built for the future');
    I.see('Luxurious & Environmentally Conscious Living');
    I.see('About Agent');
    I.see('Schedule a Private Showing');
    I.see('Rivington Real Estate Team');
    I.see('Privacy & Cookies');
    I.see('Bluescape QA Test Site');
    I.seeInTitle('Bluescape QA Test Site')
    I.seeElement('#menu-item-19');
    I.seeElement('#menu-item-20');
    I.seeElement('#menu-item-21');
    I.seeElement('#menu-item-22');
    I.seeElement('//div[@data-carousel-extra]');
});

Scenario('User submits filled form and asserts that the message was sent', async ({ I }) => {
    I.amOnPage('/contact')
    I.fillField('#g7-name', 'Maksym');
    I.fillField('#g7-email', 'maksymkrut@bluescapetest.com');
    I.fillField('#g7-website', 'https://bluescapetest.com');
    I.fillField('#g7-date', 'Jan 24, 2022');
    I.click('Submit')
    I.see('Message Sent');
    const message = await I.grabTextFrom('//*[@id="contact-form-7"]/h3')
    console.log('\n\n'+message+'\n\n')
    assert.equal(true, message.includes('Message Sent'));
});
