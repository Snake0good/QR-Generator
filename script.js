//Example fetch using pokemonapi.co
document.querySelector('#btn').addEventListener('click', getFetch)



function getFetch(){
  
  const webaddress = document.querySelector('#webaddress').value.trim()
  const pixels = document.querySelector('#size').value.trim();
  const color = document.querySelector('#color').value.substring(1)
  const qrCodeURL =  `https://api.qrserver.com/v1/create-qr-code/?data=${webaddress}&size=${pixels}x${pixels}&color=${color}`
  
  
  if (pixels > 250 || pixels < 100) {
    alert('Please enter a pixel amount betwee 100 and 250')
  }
  
  if (webaddress.length === 0) {
    alert('Please enter a web address')
  } else {
    document.querySelector('#qrCode').src = 'images/blocks-loading.gif'
    fetch(qrCodeURL)
    .then(res => res.blob())
      .then(imageBlob => {
        const imageObjectURL = URL.createObjectURL(imageBlob)
        console.log(imageBlob)
        document.querySelector('#qrCode').src = imageObjectURL
  
        // populateList(data)
  
      })
      .catch(err => console.log(err))
  }
}