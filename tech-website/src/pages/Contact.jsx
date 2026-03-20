import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        company: '',
        email: '',
        message: ''
      })
      
      // 3秒后清除状态
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1500)
  }

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>联系我们</h1>
          <p>我们期待与您的合作，请留下您的信息，我们会尽快与您联系</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>获取专属解决方案</h2>
              <p className="form-desc">
                填写以下信息，我们的专业顾问将在24小时内与您联系，为您提供定制化解决方案。
              </p>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 12l2.5 2.5L16 9"/>
                  </svg>
                  <span>提交成功！我们会尽快与您联系。</span>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    姓名 <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    联系电话 <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="请输入您的联系电话"
                    required
                    pattern="[0-9]{11}"
                    title="请输入11位手机号码"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">
                    公司名称 <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="请输入公司名称"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">电子邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="请输入您的邮箱（选填）"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">留言内容</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="请描述您的需求或问题（选填）"
                    rows="4"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      提交中...
                    </>
                  ) : (
                    '提交咨询'
                  )}
                </button>

                <p className="form-note">
                  提交即表示您同意我们的 <a href="#">隐私政策</a> 和 <a href="#">服务条款</a>
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <h3>联系方式</h3>
                
                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">服务热线</span>
                    <a href="tel:400-888-8888" className="info-value">400-888-8888</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">电子邮箱</span>
                    <a href="mailto:contact@startech.com" className="info-value">contact@startech.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">公司地址</span>
                    <span className="info-value">北京市海淀区科技园区创新大厦18层</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">工作时间</span>
                    <span className="info-value">周一至周五 9:00 - 18:00</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>关注我们</h3>
                <div className="social-links">
                  <a href="#" className="social-link" title="微信">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.036 2.96c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link" title="微博">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.18.573h.014zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.579-.18-.405-.649.388-1.032.425-1.922.006-2.556-.786-1.19-2.936-1.129-5.411-.032 0 0-.774.336-.577-.272.383-1.217.324-2.236-.27-2.82-1.35-1.327-4.942-.025-8.025 2.91C1.187 10.541 0 12.65 0 14.48c0 3.503 4.502 5.636 8.903 5.636 5.776 0 9.616-3.359 9.616-6.026 0-1.614-1.363-2.529-2.46-2.841zm2.393-4.139c-.241-.273-.615-.393-.958-.308-.344.085-.611.34-.719.684-.108.343-.025.715.217.972.241.257.595.37.938.304.343-.066.622-.302.748-.632.127-.33.061-.703-.158-.978l-.068-.042zm1.744-1.642c-.554-.627-1.379-.904-2.178-.74-.799.163-1.45.75-1.721 1.524-.271.775-.104 1.639.436 2.257.54.618 1.35.88 2.137.69.787-.19 1.42-.772 1.686-1.543.267-.77.093-1.628-.449-2.235l.089-.053z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link" title="抖音">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link" title="知乎">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.145.479 1.26.076.518-.009.699-.402.781H8.006l-.078.5c.076.006.152.006.227.006h3.547c.145.006.264.076.332.201.102.152.084.352-.043.582l-.057.096H8.51l-.045.062-.004.006-.03.04c-.05.07-.1.14-.145.213-.32.49-.58.95-.789 1.387-.21.437-.36.843-.453 1.22-.094.376-.117.72-.07 1.03.047.31.166.58.356.81.19.23.45.41.78.54.33.13.73.2 1.21.2.54 0 1.04-.09 1.48-.27.44-.18.84-.43 1.2-.76.36-.33.68-.72.96-1.18.28-.46.52-.97.72-1.53.04.15.09.3.16.44.12.28.27.53.45.76.18.23.39.43.63.6.24.17.5.3.79.39.29.09.59.14.92.14.54 0 1.04-.11 1.48-.33.44-.22.83-.52 1.16-.9.33-.38.59-.82.78-1.32.19-.5.29-1.04.29-1.61 0-.46-.06-.88-.18-1.26-.12-.38-.29-.71-.51-.99-.22-.28-.49-.5-.81-.66-.32-.16-.68-.24-1.08-.24-.4 0-.77.08-1.1.24-.33.16-.62.38-.87.66-.25.28-.44.61-.58.99-.14.38-.21.79-.21 1.23 0 .42.06.81.18 1.17.12.36.29.68.51.95.22.27.49.48.81.63.32.15.68.23 1.08.23.38 0 .73-.07 1.05-.21.32-.14.6-.34.84-.6.24-.26.43-.57.57-.93.14-.36.21-.76.21-1.2 0-.4-.05-.77-.15-1.11-.1-.34-.25-.64-.44-.9-.19-.26-.42-.47-.69-.62-.27-.15-.58-.23-.93-.23-.35 0-.67.07-.96.21-.29.14-.54.33-.76.58-.22.25-.39.54-.51.88-.12.34-.18.7-.18 1.09 0 .36.05.7.15 1.01.1.31.24.58.42.82.18.24.4.43.66.57.26.14.55.21.87.21z"/>
                    </svg>
                  </a>
                </div>
                <p className="social-note">扫码关注获取最新资讯</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <p>北京市海淀区科技园区创新大厦18层</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
