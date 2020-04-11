$("#btn").on('click',function(){
    
         $("#menu").toggle();
         for(var i=1;i<($("#menu div").length)+1;i++){
             console.log(i)
              $("#menu div:nth-child("+i+")").toggle(i*80);
         } 
        
    })
  
 