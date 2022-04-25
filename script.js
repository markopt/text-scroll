var factory = splitio.SplitFactory({
  core: {
    authorizationKey: 'vdv97frpo8dmbdap5nbe8q22pmauj1hj519',
    key: 'mark'
  }
});

var client = factory.client();
function createSDKListeners() {
  client.on(client.Event.SDK_READY, function() {
      console.log('The SDK is ready!');
      splitSet(client);
  });

  client.on(client.Event.SDK_UPDATE, function () {
      console.log('The SDK has been updated!');
      splitSet(client);
  });
}

function splitSet(client) {
	  var TreatmentResult = client.getTreatmentWithConfig('auto-text');
	  var configs = JSON.parse(TreatmentResult.config);
	  var treatment = TreatmentResult.treatment;

	  if (treatment == "on") {
	  	  let speed = 300 / parseInt(configs.speed)
	  	  let text = configs.text
	      console.log(configs)
	      console.log(treatment)
	  } else if (treatment == "off") {
	  	  let speed = 300 / parseInt(configs.speed)
	  	  const text = configs.text
	      console.log(parseInt(configs.speed))
	      console.log(treatment)
	      console.log(speed)
	      console.log(text)
	  } else {
	  	  let speed = 300 / parseInt(configs.speed)
	  	  let text = configs.text
	      console.log(configs)
	      console.log(treatment)
	  }
	  const textEl = document.getElementById('text')
	  const speedEl = document.getElementById('speed')
	  let idx = 1
	  writeText(textEl,speedEl,idx,speed,text)
	  
	  textEl.innerText = text.slice(0, idx)

      idx++

      if(idx > text.length) {
        idx = 1
      }

      setTimeout(writeText, speed)

	  speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
};


// const textEl = document.getElementById('text')
// const speedEl = document.getElementById('speed')

// // const text = 'We Love Programming!'
// let idx = 1
// let speed = 300 / speedEl.value

// writeText()

// function writeText(textEl,speedEl,idx,speed,text) {
//     console.log(speed)
//     textEl.innerText = text.slice(0, idx)

//     idx++

//     if(idx > text.length) {
//         idx = 1
//     }

//     setTimeout(writeText, speed)
// }


// speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)