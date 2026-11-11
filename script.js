// 1. Login & App Initialization
function initApp() {
  // Ensure login screen is visible, app is hidden on load
  document.getElementById('loginView').classList.remove('hidden');
  document.getElementById('appContainer').classList.add('hidden');
}

function sendLoginCode() {
  const name = document.getElementById('loginName').value;
  const phone = document.getElementById('loginPhone').value;

  if (name && phone) {
    // Hide step 1, show step 2 (OTP code)
    document.getElementById('requestForm').classList.add('hidden');
    document.getElementById('verifyForm').classList.remove('hidden');
  }
}

function resetLogin() {
  document.getElementById('verifyForm').classList.add('hidden');
  document.getElementById('requestForm').classList.remove('hidden');
}

function verifyCode() {
  // Fake successful login
  document.getElementById('loginView').classList.add('hidden');
  document.getElementById('appContainer').classList.remove('hidden');
  document.getElementById('appContainer').classList.add('flex'); // restore flex layout

  // Navigate to home immediately after login
  navigate('home');
}

function logout() {
  document.getElementById('appContainer').classList.add('hidden');
  document.getElementById('loginView').classList.remove('hidden');
  resetLogin();
  document.getElementById('requestForm').reset();
  document.getElementById('verifyForm').reset();
}

// 2. Terms & Conditions Modal
function openTC() {
  document.getElementById('tcModal').classList.remove('hidden');
}

function closeTC() {
  document.getElementById('tcModal').classList.add('hidden');
}

// 3. Navigation / SPA Logic
function navigate(viewId) {
  const views = document.querySelectorAll('.view-section');
  views.forEach(view => view.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  window.scrollTo(0, 0);
}

// 4. File Upload UI
document.getElementById('photoUpload').addEventListener('change', function(e) {
  if (e.target.files.length > 0) {
    document.getElementById('fileName').textContent = e.target.files[0].name;
  }
});

// 5. Quiz Logic
function calculateSkinType() {
  const q1 = document.getElementById('q1').value;
  const q2 = document.getElementById('q2').value;
  const q3 = document.getElementById('q3').value;

  if (!q1 || !q2 || !q3) {
    document.getElementById('quizError').classList.remove('hidden');
    return;
  } else {
    document.getElementById('quizError').classList.add('hidden');
  }

  let result = "Normal Skin";
  if (q2 === 'yes') {
    result = "Sensitive Skin";
  } else if (q1 === 'oily' || q3 === 'frequent' || q3 === 'constant') {
    result = "Oily Acne-Prone Skin";
  } else if (q1 === 'dry') {
    result = "Dry Skin";
  } else if (q1 === 'combo') {
    result = "Combination Skin";
  }

  document.getElementById('skinTypeTitle').innerText = result;
  document.getElementById('quizResult').classList.remove('hidden');

  // Update Routine Text dynamically
  if (result === "Oily Acne-Prone Skin") {
    document.getElementById('am-cleanser').innerText = "Salicylic Acid Cleanser";
    document.getElementById('pm-serum').innerText = "Adapalene Retinoid Gel";
  } else if (result === "Dry Skin") {
    document.getElementById('am-cleanser').innerText = "Hydrating Milky Cleanser";
    document.getElementById('pm-moist').innerText = "Heavy Squalane Night Cream";
  }
}
