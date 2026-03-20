import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" stroke="url(#gradient2)" strokeWidth="3"/>
                  <path d="M12 20L18 26L28 14" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="gradient2" x1="0" y1="0" x2="40" y2="40">
                      <stop stopColor="#0066ff"/>
                      <stop offset="1" stopColor="#00c6ff"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="logo-text">星辰科技</span>
            </Link>
            <p className="footer-desc">
              专注于企业数字化转型，提供一站式智能解决方案，助力企业高效发展。
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>产品服务</h4>
              <Link to="/products">智能云ERP</Link>
              <Link to="/products">财税管理系统</Link>
              <Link to="/products">进销存管理</Link>
              <Link to="/products">数据分析平台</Link>
            </div>

            <div className="footer-column">
              <h4>解决方案</h4>
              <Link to="/products">小微企业</Link>
              <Link to="/products">中型企业</Link>
              <Link to="/products">集团企业</Link>
              <Link to="/products">行业定制</Link>
            </div>

            <div className="footer-column">
              <h4>关于我们</h4>
              <Link to="/contact">联系我们</Link>
              <Link to="/contact">加入我们</Link>
              <Link to="/contact">合作伙伴</Link>
              <Link to="/contact">新闻动态</Link>
            </div>
          </div>

          <div className="footer-contact">
            <h4>联系方式</h4>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>400-888-8888</span>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>contact@startech.com</span>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>北京市海淀区科技园区</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} 星辰科技. 保留所有权利.</p>
          <div className="footer-legal">
            <a href="#">隐私政策</a>
            <a href="#">服务条款</a>
            <a href="#">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
