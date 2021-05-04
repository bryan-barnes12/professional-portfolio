let docBody = $('body');
let siteLogo = $('#site-logo');
let siteName = $('#site-name');
let siteNav = $('nav');
let header = $('header');

function populateHeader() {
    header.append(siteLogo, siteName, siteNav);
}

populateHeader();