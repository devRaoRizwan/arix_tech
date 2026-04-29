import { NavLink } from 'react-router-dom';

export default function SideNav({ navItems }) {
  return (
    <aside className="side-nav" aria-label="Primary navigation">
      <div className="brand-mark">
        <span>A</span>
      </div>
      <nav className="nav-links" aria-label="Site sections">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            data-label={item.label}
          >
            <span className="icon">{item.icon}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
