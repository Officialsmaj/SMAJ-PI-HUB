// Sidebar dropdown toggle
document.querySelectorAll('.nav-dropdown > a').forEach(drop => {
    drop.addEventListener('click', e => {
        e.preventDefault();
        drop.nextElementSibling.classList.toggle('active');
    });
});

// Filter orders
const filterButtons = document.querySelectorAll('.filter-btn');
const ordersTable = document.getElementById('orders-table');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        for (let row of ordersTable.rows) {
            if (filter === 'all') {
                row.style.display = '';
            } else {
                row.style.display = row.cells[4].textContent.toLowerCase() === filter ? '' : 'none';
            }
        }
    });
});

// Simulated wallet connect
document.querySelector('.wallet-btn').addEventListener('click', () => {
    alert('Wallet connected successfully!');
});

// Settings page js

// Theme toggle
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme?.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Currency toggle
const currencyToggle = document.getElementById('currencyToggle');
const currencyLabel = document.getElementById('currencyLabel');
currencyToggle?.addEventListener('change', () => {
    currencyLabel.textContent = currencyToggle.checked ? 'USD' : 'π';
});

// Connect/Disconnect Wallet
document.querySelector('.connect-wallet')?.addEventListener('click', () => {
    alert('Wallet connected! (API integration required)');
});

document.querySelector('.disconnect-wallet')?.addEventListener('click', () => {
    alert('Wallet disconnected!');
});

// Save buttons (demo only)
document.querySelectorAll('.save-profile, .save-security, .save-preferences').forEach(btn => {
    btn.addEventListener('click', () => alert('Settings saved! (API integration required)'));
});

// Logout page js

// Get elements
const logoutBtn = document.getElementById('logoutBtn');
const logoutModal = document.getElementById('logoutModal');
const closeModal = document.querySelector('.modal .close');
const cancelLogout = document.getElementById('cancelLogout');
const confirmLogout = document.getElementById('confirmLogout');

// Open modal on click
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logoutModal.style.display = 'block';
});

// Close modal
closeModal.addEventListener('click', () => {
    logoutModal.style.display = 'none';
});
cancelLogout.addEventListener('click', () => {
    logoutModal.style.display = 'none';
});

// Confirm logout
confirmLogout.addEventListener('click', () => {
    // Redirect to login page or perform logout API
    window.location.href = '../auth/login.html';
});

// Close modal if clicked outside
window.addEventListener('click', (e) => {
    if (e.target == logoutModal) {
        logoutModal.style.display = 'none';
    }
});

