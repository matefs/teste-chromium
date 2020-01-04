const {Builder, By, Key, until} = require('selenium-webdriver');

// Dependencia do gravador de tela 
const recordScreen = require('record-screen')







//( async function example() {

async function navegar(){



    const recording = await recordScreen('/tmp/test.mp4', {
        resolution: '1366x768' // Display resolution
    })


    let driver = await new Builder().forBrowser('firefox').build();

try {


	// navega para a url especifica
        await driver.get('https://sso.acesso.gov.br');


        // Enter text "cheese" and perform keyboard action "Enter"
        await driver.findElement(By.name('j_username')).sendKeys('11255338970', Key.ENTER);

        //let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

        //console.log(await firstResult.getAttribute('textContent'));

await setTimeout(() => {
	driver.quit() //  fecha o browser
	recording.stop() // para de gravar
},5000)

 }

catch(error){
	console.log(error)
}

} // fim da minha funcao principal 
//})();
navegar();
