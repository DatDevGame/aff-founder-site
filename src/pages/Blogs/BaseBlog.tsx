import { useState, useEffect } from "react";
import Head from "next/head";

const AFF_LINK = "https://s.shopee.vn/50Px7oouoM";

export default function Blog() {
  const [revealed, setRevealed] = useState(false);
  const [showInAppWarning, setShowInAppWarning] = useState(false);

  useEffect(() => {
    // Check in-app browser
    const ua = navigator.userAgent || "";
    const inAppBrowsers = [
      /FBAN|FBAV/i, // Facebook
      /Instagram/i,
      /Messenger/i,
      /Twitter/i,
      /LinkedIn/i,
      /Snapchat/i,
      /Threads/i
    ];
    const isInApp = inAppBrowsers.some((regex) => regex.test(ua));
    setShowInAppWarning(isInApp);

    // Load revealed state
    const revealedStatus = sessionStorage.getItem("revealed") === "true";
    setRevealed(revealedStatus);
  }, []);

  const handleReveal = () => {
    setRevealed(true);
    sessionStorage.setItem("revealed", "true");
    // Open AFF link on same tab to avoid white screen in-app
    window.location.href = AFF_LINK;
  };

  const handleOpenInBrowser = () => {
    const newWindow = window.open(window.location.href, "_blank");
    if (!newWindow) {
      alert("Vui lòng mở bằng trình duyệt ngoài để truy cập đúng nội dung.");
    } else {
      setShowInAppWarning(false);
    }
  };

  const handleSkipWarning = () => setShowInAppWarning(false);

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
            <p style={{ fontSize: "18px", marginBottom: "15px", lineHeight: 1.6 }}>
              ⚠ Trang này có thể hoạt động không ổn định trên trình duyệt trong ứng dụng.
              <br />
              Khuyến nghị bạn mở bằng trình duyệt ngoài (Chrome, Safari, Firefox…)
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
                Mở trình duyệt ngoài
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

        {/* Sensitive Content Overlay */}
        <div style={{ position: "relative", maxWidth: "640px", margin: "0 auto", display: "block" }}>
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
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  background: "#fff3cd",
                  color: "#856404",
                  padding: "12px 16px",
                  border: "1px solid #ffeeba",
                  borderRadius: "8px",
                  textAlign: "left",
                  marginBottom: "15px",
                }}
              >
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
                src="https://res.cloudinary.com/dajhoskov/video/upload/v1758817488/vn-11110107-6v8go-mesx8iv1emtiac.16000101758218496_pkzi1w.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Image */}
          <div style={{ marginTop: "20px" }}>
            <img
              style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px" }}
              src="https://res.cloudinary.com/dajhoskov/image/upload/v1758817474/699bbffcd0d35a8d03c2_ft3pll.jpg"
              alt="Sample"
            />
          </div>
        </div>
      </main>
    </>
  );
}
