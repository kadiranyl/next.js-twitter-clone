export default function Chat() {
  return (
    <div className="chat-section">
        {true ? (
            <div className="select-message">
                <h2>Mesaj Seç</h2>
                <p>Mevcut sohbetlerin arasından seçim yap, yeni bir sohbet başlat veya sörfe devam et.</p>
                <button className='btn blue-btn'>Yeni Mesaj</button>
            </div>
        ) : (
            <span>ğ</span>
        )}
    </div>
  )
}
