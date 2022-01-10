const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
  }
  
  const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
  
  document.querySelector('#bands').innerHTML = 
    sortedBands
      .map(band => `<li>${band}</li>`)
      .join(''); //this method must be added as putting anything other than a string into innerHTML
      //will cause it to render with a comma, like toString would.  Thus, we must join the array 
      //manually beforehand.  
  
  console.log(sortedBands);