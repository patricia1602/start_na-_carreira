function calculateTip(event) {
 alert('Fui submetido para a função.');
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = 'none'; 

document.getElementById('tipsForm').addEventListener('submit', calculateTip);