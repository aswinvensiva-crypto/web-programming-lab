// Inject sidebar HTML
function injectSidebar(activePage) {
  const nav = [
    { label: 'Dashboard', icon: '📊', href: 'Dashboard.html' },
    { label: 'Calendar', icon: '📅', href: 'Calendar.html' },
    { label: 'New Booking', icon: '➕', href: 'NewBooking.html' },
    { label: 'Customers', icon: '👥', href: 'Customers.html' },
    { label: 'Rooms', icon: '🛏️', href: 'Rooms.html' },
    { label: 'Expenses', icon: '💸', href: 'Expenses.html' },
    { label: 'Users', icon: '🔐', href: 'UserManagement.html' },
  ];

  const links = nav.map(n => `
    <a href="${n.href}" class="${n.label === activePage ? 'active' : ''}">
      <span class="icon">${n.icon}</span> ${n.label}
    </a>
  `).join('');

  const sidebar = `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <div class="logo-icon">🏨</div>
        <h1>Hotel Manager</h1>
        <p>Room Booking System</p>
      </div>
      <nav class="nav">${links}</nav>
      <div style="padding:16px 20px;border-top:1px solid var(--border)">
        <a href="Auth.html" class="btn btn-outline btn-sm" style="width:100%;justify-content:center">⬅ Sign Out</a>
      </div>
    </aside>
  `;

  document.body.insertAdjacentHTML('afterbegin', sidebar);
}
