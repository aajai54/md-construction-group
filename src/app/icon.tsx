import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  const logoData = readFileSync(
    join(process.cwd(), "public/images/construction/logo.jpg") // ← corrected path
  );
  const logoBase64 = `data:image/jpeg;base64,${logoData.toString("base64")}`; // ← jpeg

  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logoBase64}
          alt="MD"
          width={24}
          height={24}
          style={{ borderRadius: 4, objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  );
}