const webdriver = require('selenium-webdriver')
const until =require("selenium-webdriver").until
const  By=require("selenium-webdriver").By
const expect = require('chai').expect;


const driver = new webdriver.Builder()
  // "9515" 是ChromeDriver使用的端口
  .usingServer('http://localhost:9515')
  .withCapabilities({
    chromeOptions: {
      // 这里设置Electron的路径
      binary: '/Users/jonny/Documents/electronDemo/ElectronMacacaDemo/emdemo/dist/mac/emdemo.app/Contents/MacOS/emdemo'
    }
  })
  .forBrowser('electron')
  .build()



  describe('test',function(){

  it ('actions',function(){

    this.timeout(5000)
    driver.findElement(By.css('#root > div > header > a:nth-child(3)')).click()
    console.log('1111')
  })

})