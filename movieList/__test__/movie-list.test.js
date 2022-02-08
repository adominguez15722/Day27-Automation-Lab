const { Builder, Capabilities, By } = require("selenium-webdriver")
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll( async () => {
    await driver.get('http://127.0.0.1:5500/index.html')
});

afterAll( async () => {
    await driver.quit();
});

test('cross off movie, check notification', async () => {
    const theInput = await driver.findElement(By.xpath('//input'))

    const searchTerm = '1918'

    await theInput.sendKeys(searchTerm)

    await driver.sleep(3000)
    const addButton = await driver.findElement(By.xpath('//form/button'))
    
    await addButton.click()
    await driver.sleep(3000)

    const checkedOff = await driver.findElement(By.css('li > span'))
    await checkedOff.click()


        
    const notification = await driver.findElement(By.css('#message')).getText();
        console.log(notification)
    expect(notification).toBe(`${searchTerm} watched!`)
    await driver.sleep(3000)

});

// test('watched notification present', async () => {
//     //     const theInput = await driver.findElement(By.xpath('//input'))
    
//         const searchTerm = '1918'
    
//     //     await theInput.sendKeys(searchTerm)
    
//     //     await driver.sleep(3000)
//     //     const addButton = await driver.findElement(By.xpath('//form/button'))
        
//     //     await addButton.click()
//     //     await driver.sleep(3000)
    
//     //     const checkedOff = await driver.findElement(By.css('li > span'))
//     //     await checkedOff.click()
//     //     await driver.sleep(3000)
    
//         const notification = await driver.findElement(By.css('aside')).getText();
        
//         expect(notification).toBe(`${searchTerm} watched!`)
//         await driver.sleep(3000)
//     });

test('delete movie', async () => {
    // const theInput = await driver.findElement(By.xpath('//input'))

    const searchTerm = '1918'

    // await theInput.sendKeys(searchTerm)

    // await driver.sleep(3000)
    // const addButton = await driver.findElement(By.xpath('//form/button'))
    
    // await addButton.click()
    // await driver.sleep(3000)

    // const checkedOff = await driver.findElement(By.css('li > span'))
    // await checkedOff.click()
    // await driver.sleep(3000)

    const deleteBtn = await driver.findElement(By.xpath(`//button[@id = ${searchTerm}]`))
    await deleteBtn.click()
    await driver.sleep(3000)

});

