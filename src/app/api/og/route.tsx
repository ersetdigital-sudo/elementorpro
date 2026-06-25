import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Elementor Pro ID";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0a0a0a",
          padding: "60px 80px",
        }}
      >
        {/* Brand accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #c5f518, #a8d615)",
          }}
        />

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 60 ? "42px" : "52px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.3,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#c5f518",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: 700,
                color: "#000000",
              }}
            >
              E
            </div>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#a3a3a3",
              }}
            >
              Elementor Pro ID
            </span>
          </div>
          <span
            style={{
              fontSize: "16px",
              color: "#666666",
            }}
          >
            jasaelementorpro.web.id
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
