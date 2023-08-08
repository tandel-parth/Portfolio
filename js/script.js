// Sticky Navbar
let menu = document.querySelector('#menu-icon');
let tabs = document.querySelector('.tabs');

menu.onclick = () => {
    tabs.classList.toggle('active');
}
window.onscroll = () => {
    tabs.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

function mode(){
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

//PDF Download

document.getElementById('downloadButton').addEventListener('click', function () {
    // the actual path to your PDF file
    var pdfUrl = 'document/ADIT_IT_Parthkumar Tandel.pdf';

    // Create a hidden anchor element
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'downloaded-pdf.pdf'; // Change the downloaded filename if needed

    // Dispatch a click event on the anchor
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        link.dispatchEvent(event);
    } else if (link.fireEvent) {
        link.fireEvent('onclick');
    }
});
  
//contact form

