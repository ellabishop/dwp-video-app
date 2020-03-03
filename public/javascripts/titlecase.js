var special_words = new Array('and',
				'the',
				'to',
				'for',
				'is',
				'in',
				'a',
				'at',
				'an',
				'from',
				'by',
				'if',
				'of');

function ie_has_no_indexOf(input) {
  for (var i=0;i<special_words.length;i++) {
    if (special_words[i]==input) {
      return 1;
    }
  }
  return -1;
}

function fixit() {
  var original = document.theForm.theField.value;
  var o_split = original.split(" ");

  for (i=0;i<o_split.length;i++) {
    if (i == 0) {
      //always capitalize the first word
      o_split[i] = (o_split[i].substring(0,1)).toUpperCase() + o_split[i].substring(1);
    }
    else if(ie_has_no_indexOf(o_split[i]) < 0) {
      o_split[i] = (o_split[i].substring(0,1)).toUpperCase() + o_split[i].substring(1);
    }
  }
  retval = o_split.join(' ');
  document.theForm.theField.value = retval;
}
