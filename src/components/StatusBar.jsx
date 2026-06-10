export default function StatusBar() {
  const now = new Date()
  const h = now.getHours().toString().padStart(2, '0')
  const m = now.getMinutes().toString().padStart(2, '0')
  return (
    <div className="status-bar">
      <span>{h}:{m}</span>
      <div className="icons">
        <i className="ti ti-wifi" />
        <i className="ti ti-battery-3" />
      </div>
    </div>
  )
}
