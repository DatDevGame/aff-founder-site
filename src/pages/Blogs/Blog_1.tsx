import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Gallery Page</title>
        <meta name="description" content="Simple gallery with video and image" />
      </Head>

      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>My Simple Gallery</h1>

        {/* Video */}
        <div style={{ margin: "20px 0" }}>
          <video width="640" height="360" controls>
            <source src="https://res.cloudinary.com/dajhoskov/video/upload/v1758814233/Review_m%C3%A1y_d%C3%B2_h%E1%BB%93ng_ngo%E1%BA%A1i_ph%C3%A1t_hi%E1%BB%87n_camera_gi%E1%BA%A5u_k%C3%ADn_shorts_-_nh%C3%A0_m%C3%ACnh_1080p_h264_vbo9fe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Image */}
        <div>
          <img src="https://res.cloudinary.com/dajhoskov/image/upload/v1758814480/photo_2025-09-23_12-56-05_dc9hzs.jpg" alt="Sample" width="400" />
        </div>
      </main>
    </>
  );
}
