const currentLocation = location.href;
const navItem = document.querySelectorAll('.nav-link');
const navItemLength = navItem.length;
for (let i = 0; i < navItemLength; i++) {
  if (navItem[i].href === currentLocation) {
    navItem[i].classList.add('active');
  }
}