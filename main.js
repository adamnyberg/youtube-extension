var anchors = document.getElementsByTagName('a');

for (var i = 0; i < anchors.length ; i++) {
    anchors[i].addEventListener('click',
        function (event) {
            event.preventDefault();
            var href = event.target.href;
            var re = /https:\/\/www\.youtube\.com\/(user|channel)\/(.*?)/i;
            if (re.test(href)) {
              window.location = href + '/videos';
            }
        },
        false);
}
