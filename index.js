function theBeatlesPlay(musicians, instruments){
  var whoPlaysWhat = [];
  for (var i = 0, i < musicians, i++) {
    whoPlaysWhat.push(musicians[i] + "plays" + instruments[i]);
  }

  return whoPlaysWhat;
}
