function calculez(){

	var tc1=document.getElementById('tc1').value;
	var tc1p=document.getElementById('tc1p').value;

	var tc2=document.getElementById('tc2').value
	var tc2p=document.getElementById('tc2p').value;

	var partiel=document.getElementById('partiel').value;
	var partielp=document.getElementById('partielp').value;

	var presence=document.getElementById('presence').value;
	var presencep=document.getElementById('presencep').value;

	var tc1=(tc1/20)*tc1p;
	var tc2=(tc2/20)*tc2p;
	var partiel=(partiel/20)*partielp;
	var presence=(presence/20)*presencep;

document.getElementById('tc1rp').textContent=tc1p;
document.getElementById('tc2rp').textContent=tc2p;
document.getElementById('partielrp').textContent=partielp;
document.getElementById('presencerp').textContent=presencep;

document.getElementById('tc1r').textContent=tc1;
document.getElementById('tc2r').textContent=tc2;
document.getElementById('partielr').textContent=partiel;
document.getElementById('presencer').textContent=presence;

var note=tc1+tc2+partiel+presence;
document.getElementById('note100').textContent=note;
document.getElementById('note20').textContent=note/5;

var manquee=(10-note/5)*(20/8);
if(manquee>0){
document.getElementById('manque').innerHTML="Il vous manque encore "+manquee.toFixed(3)+" sur 20 sur votre final!";
document.getElementById('manque').style.color="red";
}
else{
document.getElementById('manque').innerHTML="Bravo! Vous pouvez prendre un 0 sur le final!";
document.getElementById('manque').style.color="green";
}
document.getElementById('result').scrollIntoView();
}