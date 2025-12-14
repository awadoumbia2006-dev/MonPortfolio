// === TEXTES ÉDITABLES ===
document.querySelectorAll('[contenteditable][data-key]').forEach(el => {
  const key = el.dataset.key;
  if (localStorage.getItem(key)) el.innerHTML = localStorage.getItem(key);
  el.addEventListener('input', () => {
    localStorage.setItem(key, el.innerHTML);
  });
});

// === SECTIONS DYNAMIQUES ===
document.querySelectorAll('.grid[data-key]').forEach(section => {
  const key = section.dataset.key;
  if (localStorage.getItem(key)) section.innerHTML = localStorage.getItem(key);
  section.addEventListener('input', () => {
    localStorage.setItem(key, section.innerHTML);
  });
});

function addItem(id) {
  const container = document.getElementById(id);
  const div = document.createElement('div');
  div.className = 'card';
  div.contentEditable = true;
  div.innerHTML = "Nouveau contenu...";
  container.appendChild(div);
  localStorage.setItem(container.dataset.key, container.innerHTML);
}

// === PHOTO ===
const photoInput = document.getElementById('photoInput');
const profilePhoto = document.getElementById('profilePhoto');

if (localStorage.getItem('photo')) {
  profilePhoto.src = localStorage.getItem('photo');
}

photoInput.addEventListener('change', e => {
  const reader = new FileReader();
  reader.onload = () => {
    profilePhoto.src = reader.result;
    localStorage.setItem('photo', reader.result);
  };
  reader.readAsDataURL(e.target.files[0]);
});

// === CV ===
const cvInput = document.getElementById('cvInput');
const cvLink = document.getElementById('cvLink');

if (localStorage.getItem('cv')) {
  cvLink.href = localStorage.getItem('cv');
}

cvInput.addEventListener('change', e => {
  const reader = new FileReader();
  reader.onload = () => {
    cvLink.href = reader.result;
    localStorage.setItem('cv', reader.result);
  };
  reader.readAsDataURL(e.target.files[0]);
});
