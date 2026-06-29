(function(){
  var toggle=document.querySelector('.nav-toggle');
  var menu=document.getElementById('nav-menu');
  if(toggle&&menu){
    toggle.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open?'true':'false');
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&menu.classList.contains('open')){
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        toggle.focus();
      }
    });
  }

  var navLinks=document.querySelectorAll('.nav-menu a[href^="#"]');
  navLinks.forEach(function(link){
    link.addEventListener('click',function(){
      if(menu.classList.contains('open')){
        menu.classList.remove('open');
        toggle&&toggle.setAttribute('aria-expanded','false');
      }
    });
  });

  var form=document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var btn=form.querySelector('button[type="submit"]');
      var name=document.getElementById('cf-name');
      var phone=document.getElementById('cf-phone');
      var msg=document.getElementById('cf-message');
      var errors=[];
      [name,phone,msg].forEach(function(el){el.style.borderColor='';});
      if(!name.value.trim()){errors.push(name);name.style.borderColor='#dc3545';}
      if(!phone.value.trim()){errors.push(phone);phone.style.borderColor='#dc3545';}
      if(!msg.value.trim()){errors.push(msg);msg.style.borderColor='#dc3545';}
      if(errors.length){errors[0].focus();return;}
      btn.textContent='Message drafted — please call 313-223-1212 to confirm service.';
      btn.disabled=true;
      form.reset();
    });
  }

  var header=document.querySelector('.site-header');
  var lastScroll=0;
  window.addEventListener('scroll',function(){
    var cur=window.pageYOffset;
    if(cur>lastScroll&&cur>80){
      header.style.transform='translateY(-100%)';
    } else {
      header.style.transform='translateY(0)';
    }
    lastScroll=cur;
  },{passive:true});
  if(header){header.style.transition='transform .25s ease';}
})();