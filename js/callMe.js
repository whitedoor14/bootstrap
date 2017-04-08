$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});

/* =======================================
    Contact: JavaScript Modal #1 Page 68
    ======================================= */
function callMe()
{
    /*$('#theModal').modal();*/
    $('#theModal').modal('show');
}

/* =======================================
            Index: Nav Bar 22
    ======================================= */
$('#logonLink').click(function(){
    $('#logonBox').modal({
        show: true,
        keyboard: false,
        backdrop: 'static'
    });
});

$('#doLogon').on('click', function(e){
    alert('Thank you for Signing In');
    $('#logonBox').modal('hide');
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
    var data = $(e.target).data('caption');
    var modal = $('#logonBox');
    modal.find('.modal-title').text(data);
});

/* =======================================
        Index: Open This Page 77
    ======================================= */
$('#theSection').on('show.bs.collapse', function(){
    $('#theButton').text('Close this');
});

$('#theSection').on('hide.bs.collapse', function(){
    $('#theButton').text('Open this');
});

/* =======================================
        Browse: Catelogue Page 78
    ======================================= */
$('#cat1').on('show.bs.collapse', function(){
    alert('here');
    $('#cat1Head').removeClass('panel-default').addClass('panel-primary');
    $('#cat2Head').removeClass('panel-success').addClass('panel-default');
    $('#cat3Head').removeClass('panel-warning').addClass('panel-default');
})
$('#cat2').on('show.bs.collapse', function(){
    $('#cat1Head').removeClass('panel-primary').addClass('panel-default');
    $('#cat2Head').removeClass('panel-default').addClass('panel-success');
    $('#cat3Head').removeClass('panel-warning').addClass('panel-default');
})
$('#cat3').on('show.bs.collapse', function(){
    $('#cat1Head').removeClass('panel-primary').addClass('panel-default');
    $('#cat2Head').removeClass('panel-success').addClass('panel-default');
    $('#cat3Head').removeClass('panel-default').addClass('panel-warning');
})

/* =======================================
            Pop-Up Page 81 & (85)
    ======================================= */
$('#prod3').popover({
    html: true,
    placement: 'left',
    trigger: 'click',
    container: 'body',
    content: function() {
        return '<div class="row"><div class="col-xs-12 col-sm-12 col-md-6 col-lg-6"><img src="images/medal_2.png" class="img-responsive img-thumbnail" alt="Product 3" title="Product 3"><br/>&nbsp;<br/><button type="button" class="btn btn-xs btn-success">Add to cart</button><br/><button type="button" class="btn btn-xs btn-info">See details</button></div><div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">something something</div></div>';
    }
});

/* =======================================
            Carousel Page 88
======================================= */
$('#bestSellers').carousel({
    interval: 3000,
    pause:'hover'
});
