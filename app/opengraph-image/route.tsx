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
                    background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
                    position: "relative",
                    overflow: "hidden",
                    fontFamily: "Inter, sans-serif",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* 코드 패턴 배경 */}
                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0.07,
                    background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2361DAFB' fill-opacity='0.4'%3E%3Cpath d='M30 30h10v10H30zM10 30h10v10H10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                {/* 왼쪽 코드 엘리먼트 */}
                <div style={{
                    position: "absolute",
                    left: "50px",
                    top: "70px",
                    fontSize: "18px",
                    color: "rgba(203, 213, 225, 0.3)",
                    fontFamily: "monospace",
                    textAlign: "left",
                    lineHeight: "1.5",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <span>{'<div className="portfolio">'}</span>
                    <span>{'  <Header />'}</span>
                    <span>{'  <Projects>'}</span>
                    <span>{'    <Project title="React" />'}</span>
                    <span>{'    <Project title="Next.js" />'}</span>
                    <span>{'    <Project title="Tailwind" />'}</span>
                    <span>{'  </Projects>'}</span>
                    <span>{'  <Skills />'}</span>
                    <span>{'</div>'}</span>
                </div>

                {/* 기하학적 장식 요소들 */}
                <div style={{
                    position: "absolute",
                    right: "80px",
                    top: "60px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "24px",
                    background: "rgba(56, 189, 248, 0.1)",
                    border: "2px solid rgba(56, 189, 248, 0.2)",
                    transform: "rotate(15deg)",
                }} />

                <div style={{
                    position: "absolute",
                    left: "100px",
                    bottom: "70px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(139, 92, 246, 0.1)",
                    border: "2px solid rgba(139, 92, 246, 0.2)",
                }} />

                <div style={{
                    position: "absolute",
                    right: "180px",
                    bottom: "100px",
                    width: "150px",
                    height: "40px",
                    background: "rgba(244, 114, 182, 0.1)",
                    border: "2px solid rgba(244, 114, 182, 0.2)",
                    transform: "rotate(-10deg)",
                }} />

                {/* 메인 콘텐츠 */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",

                }}>
                    {/* "김" 로고 요소 */}
                    <div style={{
                        position: "relative",
                        marginBottom: "25px",
                        display: "flex",
                    }}>
                        <div style={{
                            fontSize: "110px",
                            fontWeight: "800",
                            background: "linear-gradient(90deg, #38BDF8 0%, #818CF8 50%, #F472B6 100%)",
                            backgroundClip: "text",
                            color: "transparent",
                            letterSpacing: "-4px",
                        }}>
                            Kim GyeGwan
                        </div>

                    </div>

                    {/* 프론트엔드 디벨로퍼 텍스트 */}
                    <div style={{
                        fontSize: "28px",
                        color: "rgba(226, 232, 240, 0.8)",
                        fontWeight: "500",
                        marginBottom: "30px",
                        letterSpacing: "0.5px",
                    }}>
                        프론트엔드 개발자
                    </div>

                    {/* 기술 스택 태그 */}
                    <div style={{
                        display: "flex",
                        gap: "12px",
                    }}>
                        {["React", "Next.js", "TypeScript", "Tailwind"].map((tech, i) => (
                            <div key={i} style={{
                                padding: "8px 18px",
                                background: "rgba(30, 41, 59, 0.7)",
                                border: "1px solid rgba(71, 85, 105, 0.5)",
                                borderRadius: "20px",
                                fontSize: "20px",
                                color: ["#61DAFB", "#FFFFFF", "#3178C6", "#38BDF8"][i],
                                fontWeight: "500",
                                display: "flex",
                            }}>
                                {tech}
                            </div>
                        ))}
                    </div>

                    {/* 포트폴리오 */}
                    <div style={{
                        fontSize: "24px",
                        color: "#E2E8F0",
                        marginTop: "40px",
                        fontWeight: "600",
                        borderTop: "1px solid rgba(71, 85, 105, 0.3)",
                        paddingTop: "20px",
                    }}>
                        포트폴리오
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}