$(document).ready(function () {
    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
});

var bba = document.getElementById('BBA');
var myBBAChart = new Chart(bba, {
    type: 'line',
    data: {
        labels: ['Business Management',
            'Law',
            'Computer Skills',
            'Business Economics',
            'General Economics',
            'Marketing',
            'Industrial Accounting',
            'Retail Sales',
            'Business to Business Sales',
            'Leasing',
            'Combustion Engines',
            'Vehicle Technology',
            'Electrical Engineering',
            'Practice',
            'Business Communication',
            'Presentation Skills',
            'English',
            'German',
            'Quality Management',
            'International Business',
            'Financial Management',
            'Organizational Behavior'
        ],
        datasets: [{
            label: 'Marks and modules',
            data: [7,
                7,
                7,
                7,
                6,
                7,
                8,
                7,
                7,
                6,
                6,
                7,
                8,
                8,
                6,
                8,
                7,
                7,
                6,
                7,
                7,
                6
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 10,
                    beginAtZero: true
                    
                }
            }]
        }
    }
});
var msc = document.getElementById('MSC');
var myChart = new Chart(msc, {
    type: 'line',
    data: {
        labels: ['Dissertation',
            'Business Economics',
            'Foundations of Finance',
            'Asset Pricing',
            'Portfolio Management',
            'Quantitative Methods',
            'Financial Markets',
            'Financial Risk Management',
            'Derivatives Pricing',
            'Fixed Income Securities',
            'Financial Statement Analysis',
            'International Finance',
            'Corporate Financial Management'

        ],
        datasets: [{
            label: 'Marks and modules',
            data: [67,
                64,
                68,
                85,
                67,
                59,
                60,
                80,
                73,
                68,
                56,
                68,
                66

            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 100,
                    beginAtZero: true
                }
            }]
        }
    }
});
// // Validating Empty Field
// function check_empty() {
//     if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
//     alert("Fill All Fields !");
//     } else {
//     document.getElementById('form').submit();
//     alert("Form Submitted Successfully...");
//     }
//     }
//     //Function To Display Popup
//     function div_show() {
//     document.getElementById('abc').style.display = "block";
//     }
//     //Function to Hide Popup
//     function div_hide(){
//     document.getElementById('abc').style.display = "none";
//     }