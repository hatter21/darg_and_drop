jQuery(document).ready(function (){
    var data = {
    pool: false,
    block:$('.drag-block'),
    ofstL: 0,
    ofstT: 0,
    ofst:0,
    sizeUp:false,
    currentObj:0   
    }
    
   $('.drag-block').mouseup(function(){
        data.pool = false;
        data.ofstL=0; data.ofstT=0;
   }).mousedown(function(){
        data.pool = true;
        data.ofst = $(this).offset();
        data.ofstL = event.clientX-data.ofst.left;
        data.ofstT = event.clientY-data.ofst.top; 
   });
   
   $('.drag-block').mousemove(function (event){
    if(data.pool && !data.sizeUp) 
        {
        $(this).css({'left':event.clientX-data.ofstL,'top':event.clientY-data.ofstT})
        }
   });  
   
   $(document).mousemove(function (event){
    if(data.sizeUp){
        $(data.currentObj).width(function(ind, val){
            console.log(val)
            console.log(data.currentLeft-event.clientX)
            return val +=parseInt($(data.currentObj).css('left'))-event.clientX;
        });
        $(data.currentObj).height(function(ind, val){
            return val +=parseInt($(data.currentObj).css('top'))-event.clientY
        });
        
        $(data.currentObj).css({'top':event.clientY, 'left':event.clientX})  
    }

   });
   
   $('.drag-block').mouseover(function(){
   }, function(){
        data.pool = false;
   });
   
   $('.drag-block').dblclick(function(){
        $(data.block).clone(true).css({'left':'500px','right':'500px'}).appendTo('body');  
   });
   
   $('.size-up').mouseup(function(){
        data.sizeUp = false;
        data.currentLeft=0; data.currentTop=0;
   }).mousedown(function(){
        data.sizeUp = true;
        data.currentObj = $(this).parent();
   });
    
});