function filterTable(tableId, searchId, filters) {
  var table = document.getElementById(tableId);
  var text = document.getElementById(searchId).value.toLowerCase();

  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    var show = row.innerText.toLowerCase().indexOf(text) !== -1;

    for (var f = 0; f < filters.length; f++) {
      var chosen = document.getElementById(filters[f][0]).value;
      var cellText = row.cells[filters[f][1]].innerText.trim();
      if (chosen !== "All" && cellText !== chosen) {
        show = false;
      }
    }
    row.style.display = show ? "" : "none";
  }
}


var selectedRow = null;
if (document.getElementById("complaint-table")) {
  selectedRow = document.getElementById("complaint-table").rows[1]; 
}

function selectComplaint(row) {
  if (selectedRow !== null) {
    selectedRow.className = "clickable";
  }
  row.className = "clickable selected";
  selectedRow = row;

  var id = row.cells[0].innerText;
  document.getElementById("selected-title").innerHTML = "Selected complaint · " + id;
  document.getElementById("selected-text").innerHTML = row.getAttribute("data-detail");
  document.getElementById("complaint-msg").innerHTML = "";
}

function markResolved() {
  var msg = document.getElementById("complaint-msg");
  if (selectedRow === null) {
    msg.className = "msg error";
    msg.innerHTML = "Please select a complaint first.";
    return;
  }
  var badgeCell = selectedRow.cells[4];
  badgeCell.innerHTML = '<span class="badge green">Resolved</span>';
  msg.className = "msg ok";
  msg.innerHTML = selectedRow.cells[0].innerText + " marked as resolved.";
}


function validateAccount() {
  var name = document.getElementById("fullname").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var role = document.getElementById("role").value;
  var ok = true;

  document.getElementById("err-name").innerHTML = "";
  document.getElementById("err-email").innerHTML = "";
  document.getElementById("err-phone").innerHTML = "";
  document.getElementById("err-role").innerHTML = "";
  document.getElementById("form-msg").innerHTML = "";

  if (name === "") {
    document.getElementById("err-name").innerHTML = "Full name is required.";
    ok = false;
  }

  if (email === "") {
    document.getElementById("err-email").innerHTML = "Email address is required.";
    ok = false;
  } else if (email.indexOf("@") < 1 || email.lastIndexOf(".") < email.indexOf("@") + 2 || email.lastIndexOf(".") === email.length - 1) {
    document.getElementById("err-email").innerHTML = "Enter a valid email address.";
    ok = false;
  }

  if (phone !== "" && (isNaN(phone.replace("+", "")) || phone.length < 11)) {
    document.getElementById("err-phone").innerHTML = "Enter a valid phone number.";
    ok = false;
  }

  if (role === "") {
    document.getElementById("err-role").innerHTML = "Please choose a role.";
    ok = false;
  }

  if (ok) {
    var msg = document.getElementById("form-msg");
    msg.className = "msg ok";
    msg.innerHTML = "Account saved successfully.";
  }
  return false;
}


function applyDates() {
  var from = document.getElementById("from-date").value;
  var to = document.getElementById("to-date").value;
  var msg = document.getElementById("date-msg");

  if (from === "" || to === "") {
    msg.className = "msg error";
    msg.innerHTML = "Please select both dates.";
  } else if (from > to) {
    msg.className = "msg error";
    msg.innerHTML = "The start date cannot be after the end date.";
  } else {
    msg.className = "msg ok";
    msg.innerHTML = "Showing report from " + from + " to " + to + ".";
  }
}

function loadMore() {
  document.getElementById("audit-msg").innerHTML = "All events for this view are already loaded.";
}




function checkLogin() {
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var msg = document.getElementById("auth-msg");

  if (email === "" || password === "") {
    msg.innerHTML = "Please enter your email and password.";
    return false;
  }
  if (email.indexOf("@") < 1) {
    msg.innerHTML = "Enter a valid email address.";
    return false;
  }
  msg.innerHTML = "";
  return false; 
}

function checkRegister() {
  var phone = document.getElementById("phone").value.trim();
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirmpass").value;
  var msg = document.getElementById("auth-msg");

  if (isNaN(phone) || phone.length < 11) {
    msg.innerHTML = "Enter a valid phone number (11 digits).";
    return false;
  }
  if (password.length < 6) {
    msg.innerHTML = "Password must be at least 6 characters.";
    return false;
  }
  if (password !== confirm) {
    msg.innerHTML = "Passwords do not match.";
    return false;
  }
  msg.innerHTML = "";
  return false; 
}
