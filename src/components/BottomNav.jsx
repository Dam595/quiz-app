export default function BottomNav({ active, onNavigate }) {
  const items = [
    { key: 'home',    icon: 'ti-home' },
    { key: 'search',  icon: 'ti-search' },
    { key: 'create',  icon: null },
    { key: 'rank',    icon: 'ti-chart-bar' },
    { key: 'profile', icon: 'ti-user' },
  ]
  return (
    <div className="bottom-nav">
      {items.map(item =>
        item.key === 'create' ? (
          <div key="create" className="nav-plus" onClick={() => onNavigate('create')}>
            <i className="ti ti-plus" />
          </div>
        ) : (
          <i
            key={item.key}
            className={`ti ${item.icon} ${active === item.key ? 'active' : ''}`}
            onClick={() => onNavigate(item.key)}
          />
        )
      )}
    </div>
  )
}