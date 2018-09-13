// Original code for uniform creation


// pantSizeArray = ['Pant Size','XS', 'S', 'M', 'L', 'XL', 'XXL'];

// jacketSizeArray = ['Jacket Size','XS', 'S', 'M', 'L', 'XL', 'XXL'];

// dressSizeArray = ['Size','XS', 'S', 'M', 'L', 'XL', 'XXL'];



// $('#uniformType').change(function(e){
    
//     if($('#uniformType').val() === 'Tuxedo'){
//         tuxedo();
//     }

//     if($('#uniformType').val() === 'Dress'){
//         dress();
//     }

//     if($('#uniformType').val() === 'Marching uniform'){
//         marchingUniform();
//     }

//     if($('#uniformType').val() === 'Uniform Type'){
//         $("#dressSize").remove();
//         $("#jacketSize").remove();
//         $("#pantSize").remove();
//     }
// })

// function tuxedo(){

//     $("#dressSize").remove();

//     //jacket size
//     let $jacketSize = $('<select>', {
//         'id': 'jacketSize',
//         'class': 'form-control',
//         'type': 'text',
//         'name': 'jacketSize'
//         });
//     $("#jacketSizeBar").append($jacketSize);

//     jacketSizeArray.forEach(function(e){
        
//         let $jacketSizes = $('<option>', {
//             'text': e
//             });
//         $("#jacketSize").append($jacketSizes);
//     })

//     //pant size
//     let $pantSize = $('<select>', {
//         'id': 'pantSize',
//         'class': 'form-control',
//         'type': 'text',
//         'name': 'pantSize'
//         });
//     $("#pantSizeBar").append($pantSize);

//     pantSizeArray.forEach(function(e){
        
//         let $pantSizes = $('<option>', {
//             'text': e
//             });
//         $("#pantSize").append($pantSizes);
//     })
// }

// function dress(){

//     $("#jacketSize").remove();
//     $("#pantSize").remove();

//     //dress size
//     let $dressSize = $('<select>', {
//         'id': 'dressSize',
//         'class': 'form-control',
//         'type': 'text',
//         'name': 'dressSize'
//         });
//     $("#jacketSizeBar").append($dressSize);

//     dressSizeArray.forEach(function(e){
        
//         let $dressSizes = $('<option>', {
//             'text': e
//             });
//         $("#dressSize").append($dressSizes);
//     })
// }

// function marchingUniform(){

//     $("#jacketSize").remove();
//     $("#pantSize").remove();
//     $("#dressSize").remove();
    
//     //jacket size
//     let $jacketSize = $('<select>', {
//         'id': 'jacketSize',
//         'class': 'form-control',
//         'type': 'text',
//         'name': 'jacketSize'
//         });
//     $("#jacketSizeBar").append($jacketSize);

//     jacketSizeArray.forEach(function(e){
        
//         let $jacketSizes = $('<option>', {
//             'text': e
//             });
//         $("#jacketSize").append($jacketSizes);
//     })

//     //pant size
//     let $pantSize = $('<select>', {
//         'id': 'pantSize',
//         'class': 'form-control',
//         'type': 'text',
//         'name': 'pantSize'
//         });
//     $("#pantSizeBar").append($pantSize);

//     pantSizeArray.forEach(function(e){
        
//         let $pantSizes = $('<option>', {
//             'text': e
//             });
//         $("#pantSize").append($pantSizes);
//     })
// }




