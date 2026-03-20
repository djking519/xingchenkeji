import { Link } from 'react-router-dom'
import './Products.css'

function Products() {
  const products = [
    {
      id: 1,
      name: '智能云ERP',
      desc: '一站式企业资源规划系统，整合财务、采购、销售、库存、生产等核心业务流程，实现数据互通，提升运营效率。',
      features: ['多组织协同', '智能审批', '移动办公', '实时报表'],
      price: '¥2999/月起',
      category: '企业管理'
    },
    {
      id: 2,
      name: '财税管理系统',
      desc: '智能化财务管理平台，支持多账套、多币种、多税率，自动生成凭证、报表，一键报税，让财务工作更轻松。',
      features: ['智能记账', '自动报税', '发票管理', '财务分析'],
      price: '¥999/月起',
      category: '财务管理'
    },
    {
      id: 3,
      name: '进销存管理',
      desc: '采购、销售、库存一体化管理，支持多仓库、多规格、批次管理，智能补货提醒，降低库存成本。',
      features: ['智能补货', '多仓管理', '条码管理', '成本核算'],
      price: '¥599/月起',
      category: '业务管理'
    },
    {
      id: 4,
      name: '数据分析平台',
      desc: 'AI驱动的商业智能分析平台，可视化数据大屏，深度洞察业务趋势，辅助管理层科学决策。',
      features: ['可视化大屏', 'AI预测', '自定义报表', '数据预警'],
      price: '¥1999/月起',
      category: '数据分析'
    },
    {
      id: 5,
      name: '零售管理系统',
      desc: '专为零售行业打造的全渠道管理解决方案，支持线上线下融合，会员营销，智能收银，提升门店运营效率。',
      features: ['全渠道管理', '会员营销', '智能收银', '门店要货'],
      price: '¥799/月起',
      category: '零售管理'
    },
    {
      id: 6,
      name: '生产管理系统',
      desc: '生产制造一体化解决方案，从订单到交付全流程管控，支持MRP运算、工序管理、委外加工，助力企业降本增效。',
      features: ['MRP运算', '工序管理', '质量追溯', '成本核算'],
      price: '¥1599/月起',
      category: '生产管理'
    }
  ]

  const categories = ['全部', '企业管理', '财务管理', '业务管理', '数据分析', '零售管理', '生产管理']

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>产品服务</h1>
          <p>为企业提供全方位数字化解决方案，助力业务增长</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-section">
        <div className="container">
          <div className="category-tabs">
            {categories.map((cat, index) => (
              <button 
                key={index} 
                className={`category-tab ${index === 0 ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="products-list-section">
        <div className="container">
          <div className="products-list">
            {products.map((product) => (
              <div key={product.id} className="product-item card">
                <div className="product-header">
                  <span className="product-category">{product.category}</span>
                  <span className="product-price">{product.price}</span>
                </div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.desc}</p>
                <div className="product-features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="product-actions">
                  <Link to="/contact" className="btn btn-primary">
                    免费试用
                  </Link>
                  <button className="btn btn-secondary">
                    了解详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="products-cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <div className="cta-text">
              <h2>找不到合适的解决方案？</h2>
              <p>我们提供定制化服务，根据您的业务需求量身打造专属方案</p>
            </div>
            <Link to="/contact" className="btn btn-outline">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
