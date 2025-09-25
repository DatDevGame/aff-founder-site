import { useState, useEffect } from "react";
import Head from "next/head";

export default function Blog() {
  const [revealed, setRevealed] = useState(false);
  const [showInAppWarning, setShowInAppWarning] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    // Các in-app browser phổ biến
    const inAppBrowsers = [
      /FBAN|FBAV/i,        // Facebook
      /Instagram/i,        // Instagram
      /Messenger/i,        // Messenger
      /Twitter/i,          // Twitter
      /LinkedIn/i,         // LinkedIn
      /Snapchat/i,         // Snapchat
      /Threads/i           // Meta Threads
    ];
    const isInApp = inAppBrowsers.some((regex) => regex.test(ua));
    setShowInAppWarning(isInApp);
  }, []);

  const handleReveal = () => {
    setRevealed(true);
    // mở link AFF trong tab mới
    window.open("https://s.shopee.vn/50Px7oouoM", "_blank");
  };

  const handleOpenInBrowser = () => {
    const blogUrl = window.location.href;
    window.open(blogUrl, "_blank"); // mở trên browser mặc định
    setShowInAppWarning(false);
  };

  const handleSkipWarning = () => {
    setShowInAppWarning(false);
  };

  return (
    <>
      <Head>
        <title>Blog Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>My Blog Post</h1>

        {/* In-App Browser Warning */}
        {showInAppWarning && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.85)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: "20px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "15px" }}>
              ⚠ Trang này có thể hoạt động không ổn định trên trình duyệt trong ứng dụng.
              <br />
              Chúng tôi khuyến nghị bạn mở bằng trình duyệt ngoài (Chrome, Safari, Firefox, …)
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={handleOpenInBrowser}
                style={{
                  background: "#00bfff",
                  border: "none",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Đồng ý → Mở trình duyệt
              </button>
              <button
                onClick={handleSkipWarning}
                style={{
                  background: "#888",
                  border: "none",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Bỏ qua
              </button>
            </div>
          </div>
        )}

        {/* Overlay blur + sensitive content */}
        <div style={{ position: "relative", display: "block", maxWidth: "640px", margin: "0 auto" }}>
          {!revealed && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(8px)",
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                zIndex: 10,
                boxSizing: "border-box",
              }}
            >
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                background: "#fff3cd",
                color: "#856404",
                padding: "12px 16px",
                border: "1px solid #ffeeba",
                borderRadius: "8px",
                textAlign: "left",
                marginBottom: "15px"
              }}>
                ⚠ <strong>Cảnh Báo Nội Dung Nhạy Cảm</strong>
                <br />
                Nội dung hiển thị có thể bao gồm hình ảnh hoặc video nhạy cảm.
                <br />
                Bằng việc nhấn vào nút <em>"Xem nội dung"</em>, bạn xác nhận rằng:
              </p>
              <ul style={{ margin: "8px 0 15px 20px", padding: 0, textAlign: "left" }}>
                <li>Bạn đã đủ tuổi theo quy định pháp luật tại nơi cư trú.</li>
                <li>Bạn hoàn toàn tự chịu trách nhiệm cho quyết định của mình.</li>
              </ul>
              <p style={{ fontSize: "16px", color: "#00ffff", textAlign: "center", paddingBottom: "10px" }}>
                <strong>
                  Chúng tôi không chịu bất kỳ trách nhiệm nào liên quan đến việc bạn lựa chọn truy cập nội dung này.
                </strong>
              </p>
              <button
                onClick={handleReveal}
                style={{
                  background: "#ff4d4f",
                  border: "none",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Xem nội dung
              </button>
            </div>
          )}

          {/* Video */}
          <div style={{ margin: "20px 0" }}>
            <video style={{ width: "100%", height: "auto", borderRadius: "8px" }} controls>
              <source
                src="https://res.cloudinary.com/dajhoskov/video/upload/v1758814233/Review_m%C3%A1y_d%C3%B2_h%E1%BB%93ng_ngo%E1%BA%A1i_ph%C3%A1t_hi%E1%BB%87n_camera_gi%E1%BA%A5u_k%C3%ADn_shorts_-_nh%C3%A0_m%C3%ACnh_1080p_h264_vbo9fe.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Image */}
          <div style={{ marginTop: "20px" }}>
            <img
              style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px" }}
              src="https://res.cloudinary.com/dajhoskov/image/upload/v1758814480/photo_2025-09-23_12-56-05_dc9hzs.jpg"
              alt="Sample"
            />
          </div>
        </div>
      </main>
    </>
  );
}
