function turnSwitch(el) {
  if (el.style.display == "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}


document.addEventListener('DOMContentLoaded', function() {
  // Load all languages
  var languages = moment.locales();
  for (var i = 0; i < languages.length; i++) {
    var option = document.createElement("option");
    option.text = languages[i];
    option.value = languages[i];
    document.getElementById("language").appendChild(option);
  }


  // Change background
  document.getElementById('changebg').onclick = function() {
    var font = prompt("Please enter a font", "Times New Roman");
    if (font) {
      addFont = '"' + font + '", "Lato", sans-serif, Arial';
      document.body.style.fontFamily = addFont;
    }
  }

  // Change background
  document.getElementById('changefont').onclick = function() {
    var bg = prompt("Please enter a background URL:", "https://");
    if (bg) { backgroundElement.src = bg }
  }

  // Turn off search
  document.getElementById('nosearch').onclick = function() {
    var search = document.getElementById('formsearch');
    turnSwitch(search);
  }

  // Turn off search
  document.getElementById('weather').onclick = function() {
    var search = document.getElementById('wcontainer');
    turnSwitch(search);
  }

  // Change language
  document.getElementById('language').onchange = function(el) {
    var getLangVal = document.getElementById('language').value;
    if (!getLangVal) {
      getLangVal = navigator.language;
    }

    moment.locale(getLangVal);
  }
}, false);
