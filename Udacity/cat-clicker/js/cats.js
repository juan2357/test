var feline = {
  "cats": [
    {
      "name": "Mathew",
      // "img": "",
      // "count": "0"
    },
    {
      "name": "Peter",
      // "img": "",
      // "count": "0"
    },
    {
      "name": "Paul",
      // "img": "",
      // "count": "0"
    },
    {
      "name": "Mark",
      // "img": "",
      // "count": "0"
    },
    {
      "name": "Luke",
      // "img": "",
      // "count": "0"
    }
  ]
};

function showCat() {
  for(cat in feline.cats) {
    $("#cats").append(CATshowStart);

    var formattedName = CATheaderName.replace
      ("%data%", feline.cats[cat].name);
    $(".catNames:last").append(formattedName);
  }
};

showCat();
