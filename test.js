var num_tests = 1;
var passed = 0;
var failed = 0;

test = function(a,b,label) {
	span = document.createElement('span');
	br = document.createElement("br");
	if (a == b) {
		span.innerHTML = label + ": Passed";
		span.style.color="green";
		passed++;
	}
	else {
		span.innerHTML = label + ": Failed ["+a+" != "+b+"]";
		span.style.color="red";
		failed++;
	}
	num_tests++;
	document.getElementById("test-results").appendChild(span);
	document.getElementById("test-results").appendChild(br);
}

countPassFail = function() {
	testresults = document.getElementById("test-results");

	br = document.createElement("br");
	testresults.insertBefore(br,testresults.firstChild);
	br = document.createElement("br");
	testresults.insertBefore(br,testresults.firstChild);
	span = document.createElement('span');
	span.innerHTML = 'Passed('+passed+'), Failed('+failed+')';
	testresults.insertBefore(span,testresults.firstChild);
}


tests = function() {
	document.getElementById("test-results").innerHTML="";
	passed = 0;
	failed = 0;

	// Include Tests to Run here

	test(1, 1, "1=1?");


	countPassFail();
}