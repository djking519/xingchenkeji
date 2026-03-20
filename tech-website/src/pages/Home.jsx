import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M4 14l20 10 20-10M24 24v20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: '云端部署',
      desc: '安全稳定的云基础设施，随时随地访问，数据实时同步'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 14v10l8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: '高效协同',
      desc: '打破信息孤岛，实现跨部门协作，提升团队工作效率'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 22h20M14 30h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: '智能分析',
      desc: 'AI驱动的数据分析，洞察业务趋势，辅助决策'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M24 4v8M24 36v8M44 24h-8M12 24H4M38.6 9.4l-5.6 5.6M15 33l-5.6 5.6M38.6 38.6l-5.6-5.6M15 15l-5.6-5.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: '灵活定制',
      desc: '模块化设计，按需配置，满足不同行业需求'
    }
  ]

  const products = [
    {
      name: '智能云ERP',
      desc: '一站式企业管理解决方案',
      image: 'erp'
    },
    {
      name: '财税管理系统',
      desc: '智能财务，轻松报税',
      image: 'finance'
    },
    {
      name: '进销存管理',
      desc: '采购销售库存一体化',
      image: 'inventory'
    },
    {
      name: '数据分析平台',
      desc: '数据驱动决策',
      image: 'analytics'
    }
  ]

  const stats = [
    { number: '10万+', label: '企业用户' },
    { number: '99.9%', label: '系统稳定性' },
    { number: '50+', label: '行业解决方案' },
    { number: '24/7', label: '技术支持' }
  ]

  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">
            <span>智能企业解决方案</span>
            <span className="gradient-text">助力数字化转型</span>
          </h1>
          <p className="hero-desc">
            星辰科技为中小企业提供一站式数字化管理平台，涵盖财务、进销存、生产、零售等全场景解决方案，让企业管理更简单、更高效。
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              免费试用
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/products" className="btn btn-secondary btn-lg">
              了解产品
            </Link>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">为什么选择星辰科技</h2>
          <p className="section-subtitle">
            专业的技术团队，丰富的行业经验，为您提供最优质的服务
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">核心产品</h2>
          <p className="section-subtitle">
            覆盖企业全生命周期，满足不同发展阶段的管理需求
          </p>
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className={`product-image product-image-${product.image}`}>
                  <div className="product-icon">
                    {product.image === 'erp' && (
                      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="8" y="8" width="48" height="48" rx="4"/>
                        <path d="M8 24h48M24 8v48"/>
                      </svg>
                    )}
                    {product.image === 'finance' && (
                      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="32" cy="32" r="24"/>
                        <path d="M32 20v24M24 28h16"/>
                      </svg>
                    )}
                    {product.image === 'inventory' && (
                      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="12" y="16" width="40" height="36" rx="2"/>
                        <path d="M20 16V12a12 12 0 0124 0v4"/>
                        <path d="M22 32h20M22 42h12"/>
                      </svg>
                    )}
                    {product.image === 'analytics' && (
                      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 52V32l12 8 12-16 12 8 4-20"/>
                        <circle cx="12" cy="52" r="4"/>
                        <circle cx="24" cy="40" r="4"/>
                        <circle cx="36" cy="24" r="4"/>
                        <circle cx="48" cy="32" r="4"/>
                        <circle cx="52" cy="12" r="4"/>
                      </svg>
                    )}
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <Link to="/products" className="product-link">
                    了解详情
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="products-cta">
            <Link to="/products" className="btn btn-primary btn-lg">
              查看全部产品
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="container">
          <div className="cta-content">
            <h2>开启您的数字化转型之旅</h2>
            <p>立即注册，享受30天免费试用，专业顾问一对一服务</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-outline btn-lg">
                免费咨询
              </Link>
              <a href="tel:400-888-8888" className="btn btn-outline btn-lg">
                400-888-8888
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
