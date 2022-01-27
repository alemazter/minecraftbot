const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
  host: 'IP', //ACA VA LA IP DE TU SERVIDOR  // SERVER IP
  username: 'BOT', // ACA VA EL NOMBRE DEL BOT  // BOT NAME
  port: 25565, // PUERTO DEL SERVIDOR // SERVER PORT
})

bot.on('spawn', () => {
  bot.chat('/register contraseña')  
  // Cambiar el comando a /login contraseña - luego de haberlo iniciado la primera vez  
  // CHANGE TO LOGIN IF THE BOT IS REGISTERED 
  //EXAMPLE (/login password)
  
  
  // NO TOCAR NADA A PARTIR DE AQUÍ, O SE PODRÍA ARRUINAR EL CODIGO! //
  
  bot.chat('Suscribanse a JinMori') // No tocar xD
});

bot.on("move", function() {
  //triggers when the bot moves

  bot.setControlState("jump", true); //continuously jumps
  setTimeout(() => {
    //sets a delay
    bot.setControlState("jump", false); //stops jumping
  }, 1000); //delay time

  setTimeout(() => {
    //sets a delay
    bot.setControlState("forward", true); //continuously walks forward
    setTimeout(() => {
      //sets a delay
      bot.setControlState("forward", false); //stops walking forward
    }, 500); //delay time
  }, 1000); //delay time

  setTimeout(() => {
    //sets a delay
    bot.setControlState("back", true); //continuously walks backwards
    setTimeout(() => {
      //sets a delay
      bot.setControlState("back", false); //stops walking backwards
    }, 500); //delay time
  }, 2000); //delay time

  setTimeout(() => {
    //sets a delay
    bot.setControlState("right", true); //continuously walks right
    setTimeout(() => {
      //sets a delay
      bot.setControlState("right", false); //stops walking right
    }, 2000); //delay time
  }, 500); //delay time

  setTimeout(() => {
    //sets a delay
    bot.setControlState("left", true); //continuously walks lefz
    setTimeout(() => {
      //sets a delay
      bot.setControlState("left", false); //stops walking left
    }, 2000); //delay time
  }, 500); //delay time
});

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
