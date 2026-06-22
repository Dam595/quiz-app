import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { currentUser } from '../data/quizData.js'
import './Setting.css'

export default function Setting({ onNavigate, onBack }) {
  const [darkMode, setDarkMode] = useState(false)
  const [notification, setNotification] = useState(true)

  return (
    <div className="phone-shell screen-enter">
      <StatusBar />

      <div className="st-header">
        <button className="st-back-btn" onClick={() => (onBack ? onBack() : onNavigate('home'))}>
          <i className="ti ti-arrow-left" />
        </button>
        <div className="st-header-title">Cài đặt</div>
        <div style={{ width: 36 }} />
      </div>

      <div className="screen-body">

        {/* Tài khoản */}
        <div className="section-title">Tài khoản</div>
        <div className="st-card">
          <div className="st-account-row">
            <div className="st-account-avatar">
              <i className="ti ti-user" />
            </div>
            <div className="st-account-info">
              <div className="st-account-name">{currentUser.name}</div>
              <div className="st-account-email">theanh@example.com</div>
            </div>
            <button className="st-logout-btn">
              <i className="ti ti-logout" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>

        {/* Giao diện & Ngôn ngữ */}
        <div className="section-title" style={{ marginTop: 20 }}>Giao diện & Ngôn ngữ</div>
        <div className="st-card">
          <div className="st-row">
            <div className="st-row-left">
              <div className="st-row-icon" style={{ background: '#EDE9FF' }}>
                <i className="ti ti-moon" style={{ color: 'var(--purple)' }} />
              </div>
              <div>
                <div className="st-row-label">Chế độ tối</div>
                <div className="st-row-sub">Thay đổi giao diện ứng dụng</div>
              </div>
            </div>
            <div
              className={`st-toggle ${darkMode ? 'st-toggle--on' : ''}`}
              onClick={() => setDarkMode(v => !v)}
            >
              <div className="st-toggle-thumb" />
            </div>
          </div>

          <div className="st-divider" />

          <div className="st-row" onClick={() => {}}>
            <div className="st-row-left">
              <div className="st-row-icon" style={{ background: '#FFF3E8' }}>
                <i className="ti ti-language" style={{ color: '#E07B3A' }} />
              </div>
              <div>
                <div className="st-row-label">Ngôn ngữ</div>
                <div className="st-row-sub">Tiếng Việt</div>
              </div>
            </div>
            <i className="ti ti-chevron-right st-chevron" />
          </div>
        </div>

        {/* Thông báo */}
        <div className="section-title" style={{ marginTop: 20 }}>Thông báo</div>
        <div className="st-card">
          <div className="st-row">
            <div className="st-row-left">
              <div className="st-row-icon" style={{ background: '#E8F8EF' }}>
                <i className="ti ti-bell" style={{ color: '#1A9E61' }} />
              </div>
              <div>
                <div className="st-row-label">Nhắc nhở học tập</div>
                <div className="st-row-sub">Nhận thông báo hàng ngày</div>
              </div>
            </div>
            <div
              className={`st-toggle ${notification ? 'st-toggle--on' : ''}`}
              onClick={() => setNotification(v => !v)}
            >
              <div className="st-toggle-thumb" />
            </div>
          </div>
        </div>

        {/* Thông tin ứng dụng */}
        <div className="section-title" style={{ marginTop: 20 }}>Thông tin</div>
        <div className="st-card">
          <div className="st-row">
            <div className="st-row-left">
              <div className="st-row-icon" style={{ background: '#EDE9FF' }}>
                <i className="ti ti-info-circle" style={{ color: 'var(--purple)' }} />
              </div>
              <div>
                <div className="st-row-label">Phiên bản</div>
                <div className="st-row-sub">1.0.0</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 16 }} />
      </div>

      <BottomNav active="profile" onNavigate={onNavigate} />
    </div>
  )
}