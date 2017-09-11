function theBeatlesPlay(musicians, instruments){
  var whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i]);
  }

  return whoPlaysWhat;
}

function johnLennonFacts(facts){
  var facts = [];
  var newFacts = [];
  var i = 0;
  while (i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
