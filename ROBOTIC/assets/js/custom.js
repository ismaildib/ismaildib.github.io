url1 = "https://script.google.com/macros/s/AKfycbyO2P-2hDC4DDCcOBSa7GecXiu68dEGqJbnuVJRalgt2fTt0ygLzqzutz_qKznrIycp/exec?";
function Subscribe() {
  var x = document.getElementById("subscribeEmail").value;
  document.getElementById("subscribeEmail").value="";
  let url2 = url1 + "add_email=" + x + "&talk=ismail";
	fetch (url1)
	.then(x => x.text())
	.then(y => alert(x););
}