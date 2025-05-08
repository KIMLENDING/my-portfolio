import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: 'edge',
};

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0f172a", // 어두운 네이비 배경
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* 그라데이션 효과의 배경 원 */}
                <div style={{
                    position: "absolute",
                    width: "800px",
                    height: "800px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(56,189,248,0) 70%)",
                    top: "-300px",
                    right: "-200px",
                }} />

                <div style={{
                    position: "absolute",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, rgba(14,165,233,0) 70%)",
                    bottom: "-200px",
                    left: "-100px",
                }} />

                {/* 로고 박스 */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    zIndex: 10,
                }}>
                    {/* 로고 텍스트 */}
                    <div style={{
                        fontSize: "96px",
                        fontWeight: "bold",
                        background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
                        backgroundClip: "text",
                        color: "transparent",
                        marginBottom: "16px",
                    }}>
                        KimLending
                    </div>

                    {/* 구분선 */}
                    <div style={{
                        width: "120px",
                        height: "4px",
                        background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
                        marginBottom: "16px",
                    }} />

                    {/* 포트폴리오 텍스트 */}
                    <div style={{
                        fontSize: "48px",
                        color: "white",
                        opacity: "0.9",
                        fontWeight: "500",
                    }}>
                        포트폴리오
                    </div>
                </div>

                {/* 바닥 그래픽 요소 */}
                <div style={{
                    position: "absolute",
                    bottom: "40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                }}>
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            style={{
                                width: i % 2 === 0 ? "60px" : "40px",
                                height: i % 2 === 0 ? "8px" : "6px",
                                borderRadius: "4px",
                                background: `rgba(56, 189, 248, ${0.7 - i * 0.1})`,
                            }}
                        />
                    ))}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}