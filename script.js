// Dashboard buttons
document.querySelector('.login-btn')?.addEventListener('click',()=>{alert('Login coming soon!');});
document.querySelector('.google-btn')?.addEventListener('click',()=>{alert('Google Sign-In coming soon!');});
document.querySelector('.register-link a')?.addEventListener('click',()=>{alert('Registration page coming soon!');});

// Curriculum modal
const openBtn=document.getElementById('open-timetable');
const modal=document.getElementById('timetable-modal');
const closeBtn=document.getElementById('close-modal');
if(openBtn){openBtn.addEventListener('click',()=>{modal.style.display='block';});}
if(closeBtn){closeBtn.addEventListener('click',()=>{modal.style.display='none';});}
window.addEventListener('click',(e)=>{if(e.target==modal){modal.style.display='none';}});
