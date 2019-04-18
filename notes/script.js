function calculez(){

	var tc1=Number(document.getElementById('tc1').value);
	var tcp=Number(document.getElementById('tcp').value);

	var tc2=Number(document.getElementById('tc2').value);


	var partiel=Number(document.getElementById('partiel').value);
	var partielp=Number(document.getElementById('partielp').value);

	var presence=Number(document.getElementById('presence').value);
	var presencep=Number(document.getElementById('presencep').value);

	var tc=(tc1+tc2)/2;
	tc=(tc/20)*tcp;
	var partiel=(partiel/20)*partielp;
	var presence=(presence/20)*presencep;

document.getElementById('tcrp').textContent=tcp;
document.getElementById('partielrp').textContent=partielp;
document.getElementById('presencerp').textContent=presencep;

document.getElementById('tcr').textContent=tc;
document.getElementById('partielr').textContent=partiel;
document.getElementById('presencer').textContent=presence;

var note=tc+partiel+presence;
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