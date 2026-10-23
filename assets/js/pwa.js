let installPrompt=null;
if('serviceWorker' in navigator && window.isSecureContext){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(console.warn));}
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;const b=document.querySelector('#installApp');if(b)b.hidden=false;});
window.addEventListener('appinstalled',()=>{installPrompt=null;const b=document.querySelector('#installApp');if(b)b.hidden=true;});
document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('#installApp');if(!b)return;b.addEventListener('click',async()=>{if(installPrompt){const prompt=installPrompt;installPrompt=null;await prompt.prompt();await prompt.userChoice;b.hidden=true;}else{alert('Untuk memasang aplikasi: Android Chrome → menu ⋮ → Install app / Tambahkan ke layar utama. iPhone Safari → Bagikan → Tambahkan ke Layar Utama.');}});});
