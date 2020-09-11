
var app = new Reef('#callus');

// Your template can be a string
var app = new Reef('#callus', {
	template: '<h4><small>Call us for a free needs analysis.</small></h4>' +
				'<h3>Who is protecting you?</h3>' + 
				'<div class="text-center">' +
				'<h2>Tel-Tec Security Systems</h2>' +
				'<p>Protecting people and their assets since 1982</p>' +
				'</div>'
});

app.render();
