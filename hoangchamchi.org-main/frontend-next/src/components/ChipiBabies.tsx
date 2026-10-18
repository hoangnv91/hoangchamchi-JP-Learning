/**
 * ChipiBabies.tsx
 * Hai em bé mascot phong cách "chipi" (chibi Nhật Bản) cho landing page học tiếng Nhật.
 * - ChipiBoy  : em bé trai tóc nâu đen hơi rối, áo hoodie kem, giơ tay vẫy chào "こんにちは!"
 * - ChipiGirl : em bé gái tóc nâu hai bím có nơ hồng, váy yếm kem, ôm sách xanh bạc hà.
 *
 * SVG thuần, nền trong suốt, không thư viện ngoài, không ảnh ngoài.
 * Đầu chiếm ~60% chiều cao (viewBox 0 0 200 200).
 */

type ChipiBabyProps = {
  /** Kích thước cạnh vuông của SVG (px). Mặc định 150. */
  size?: number;
};

/** Màu dùng chung cho cả hai nhân vật (khớp palette landing page). */
const SKIN = "#F5C9A8"; // da em bé
const SKIN_WARM = "#E8B48F"; // da em bé (ấm hơn - dùng cho bé gái)
const HAIR_BOY = "#4B3E2D"; // tóc nâu đen
const HAIR_GIRL = "#6B4F35"; // tóc nâu
const CREAM_BOY = "#F9F4D2"; // áo hoodie kem/vàng nhạt
const CREAM_GIRL = "#FAF5D4"; // váy yếm kem
const CREAM_DARK = "#EFE9C0"; // kem đậm hơn (chi tiết áo/túi)
const CHEEK = "#FFB3A7"; // má hồng / nơ / giày
const MINT = "#A3D9C9"; // xanh bạc hà
const EYE = "#5B4636"; // mắt nâu
const MOUTH = "#C97B63"; // miệng

/** Mắt to long lanh: hai hình elip nâu + highlight trắng (dùng chung). */
function SparkleEyes() {
  return (
    <g>
      {/* Mắt trái */}
      <ellipse cx={74} cy={82} rx={10.5} ry={13.5} fill={EYE} />
      <circle cx={70.5} cy={77.5} r={4} fill="#FFFFFF" />
      <circle cx={78.5} cy={88} r={2} fill="#FFFFFF" opacity={0.85} />
      {/* Mắt phải */}
      <ellipse cx={126} cy={82} rx={10.5} ry={13.5} fill={EYE} />
      <circle cx={122.5} cy={77.5} r={4} fill="#FFFFFF" />
      <circle cx={130.5} cy={88} r={2} fill="#FFFFFF" opacity={0.85} />
    </g>
  );
}

/** Lông mày cong nhẹ (dùng chung). */
function SoftBrows() {
  return (
    <g stroke={HAIR_BOY} strokeWidth={3} fill="none" strokeLinecap="round">
      <path d="M64 66 Q74 60 84 66" />
      <path d="M116 66 Q126 60 136 66" />
    </g>
  );
}

/** Má hồng + miệng cười nhỏ (dùng chung). */
function CheeksAndSmile() {
  return (
    <g>
      {/* Má hồng hai bên */}
      <ellipse cx={56} cy={98} rx={9} ry={5.5} fill={CHEEK} opacity={0.75} />
      <ellipse cx={144} cy={98} rx={9} ry={5.5} fill={CHEEK} opacity={0.75} />
      {/* Miệng cười nhỏ */}
      <path
        d="M91 106 Q100 115 109 106"
        stroke={MOUTH}
        strokeWidth={3.5}
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

/** Em bé trai: tóc nâu đen hơi rối, áo hoodie kem có mũ, quần short xanh bạc hà, vẫy tay chào. */
export function ChipiBoy({ size = 150 }: ChipiBabyProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      {/* Bóng đổ nhẹ dưới chân */}
      <ellipse cx={100} cy={197} rx={36} ry={5} fill="#000000" opacity={0.07} />

      {/* Mũ áo hoodie (phía sau đầu, ló ra quanh mặt) */}
      <ellipse cx={100} cy={82} rx={57} ry={58} fill={CREAM_BOY} />

      {/* Tóc phía sau - mái vòm che gáy */}
      <path
        d="M50 86 C48 42 68 20 100 20 C132 20 152 42 150 86 C148 60 138 54 130 62 C120 52 110 60 104 54 C96 62 88 54 80 62 C70 56 58 64 50 86 Z"
        fill={HAIR_BOY}
      />
      {/* Vài lọn tóc dựng lên cho vẻ hơi rối */}
      <path d="M88 22 L86 12 L94 20 Z" fill={HAIR_BOY} />
      <path d="M112 20 L118 10 L120 21 Z" fill={HAIR_BOY} />

      {/* Tai */}
      <circle cx={48} cy={88} r={8} fill={SKIN} />
      <circle cx={152} cy={88} r={8} fill={SKIN} />

      {/* Mặt */}
      <ellipse cx={100} cy={76} rx={50} ry={52} fill={SKIN} />

      {/* Tóc mái phía trước - mép răng cưa tạo kiểu rối đáng yêu */}
      <path
        d="M55 64 C54 38 74 24 100 24 C126 24 146 38 145 64 C142 52 136 46 130 50 C126 42 118 50 110 44 C106 52 98 44 90 52 C86 44 78 52 70 46 C62 50 57 56 55 64 Z"
        fill={HAIR_BOY}
      />

      {/* Mắt, lông mày, má hồng, miệng */}
      <SparkleEyes />
      <SoftBrows />
      <CheeksAndSmile />

      {/* Thân áo hoodie */}
      <path
        d="M74 130 C74 158 126 158 126 130 C126 126 123 124 118 124 L82 124 C77 124 74 126 74 130 Z"
        fill={CREAM_BOY}
      />
      {/* Cổ áo hoodie */}
      <path
        d="M84 126 Q92 132 100 132 M116 126 Q108 132 100 132"
        stroke={CREAM_DARK}
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
      />
      {/* Túi trước áo */}
      <path d="M86 143 Q100 158 114 143 Q100 152 86 143 Z" fill={CREAM_DARK} />

      {/* Tay trái hạ xuống - ống tay hoodie + bàn tay mũm mĩm */}
      <path
        d="M76 136 Q66 146 63 158"
        stroke={CREAM_BOY}
        strokeWidth={14}
        fill="none"
        strokeLinecap="round"
      />
      <circle cx={62} cy={161} r={6.5} fill={SKIN} />

      {/* Tay phải giơ lên vẫy chào "こんにちは!" */}
      <path
        d="M124 134 Q148 120 158 100"
        stroke={CREAM_BOY}
        strokeWidth={14}
        fill="none"
        strokeLinecap="round"
      />
      <circle cx={160} cy={97} r={6.5} fill={SKIN} />

      {/* Quần short xanh bạc hà */}
      <path
        d="M74 157 Q100 166 126 157 L126 173 Q126 179 120 179 L80 179 Q74 179 74 173 Z"
        fill={MINT}
      />

      {/* Chân ngắn mũm mĩm */}
      <rect x={80} y={177} width={16} height={11} rx={5.5} fill={SKIN} />
      <rect x={104} y={177} width={16} height={11} rx={5.5} fill={SKIN} />

      {/* Giày nhỏ màu nâu */}
      <rect x={76} y={186} width={22} height={9} rx={4.5} fill="#8A6B4F" />
      <rect x={102} y={186} width={22} height={9} rx={4.5} fill="#8A6B4F" />
    </svg>
  );
}

/** Em bé gái: tóc nâu hai bím có nơ hồng, váy yếm kem có túi, ôm sách xanh bạc hà, giày hồng. */
export function ChipiGirl({ size = 150 }: ChipiBabyProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      {/* Bóng đổ nhẹ dưới chân */}
      <ellipse cx={100} cy={198} rx={34} ry={4.5} fill="#000000" opacity={0.07} />

      {/* Tóc phía sau - mái vòm che gáy */}
      <path
        d="M50 86 C48 42 68 20 100 20 C132 20 152 42 150 86 C148 60 138 54 130 62 C120 52 110 60 104 54 C96 62 88 54 80 62 C70 56 58 64 50 86 Z"
        fill={HAIR_GIRL}
      />

      {/* Hai bím tóc nhỏ hai bên */}
      <path
        d="M54 68 C36 62 30 84 40 98 C46 108 58 104 60 90 C61 80 58 72 54 68 Z"
        fill={HAIR_GIRL}
      />
      <path
        d="M146 68 C164 62 170 84 160 98 C154 108 142 104 140 90 C139 80 142 72 146 68 Z"
        fill={HAIR_GIRL}
      />

      {/* Tai */}
      <circle cx={48} cy={88} r={8} fill={SKIN_WARM} />
      <circle cx={152} cy={88} r={8} fill={SKIN_WARM} />

      {/* Mặt */}
      <ellipse cx={100} cy={76} rx={50} ry={52} fill={SKIN_WARM} />

      {/* Tóc mái phía trước - mép răng cưa đáng yêu */}
      <path
        d="M55 64 C54 38 74 24 100 24 C126 24 146 38 145 64 C142 52 136 46 130 50 C126 42 118 50 110 44 C106 52 98 44 90 52 C86 44 78 52 70 46 C62 50 57 56 55 64 Z"
        fill={HAIR_GIRL}
      />

      {/* Nơ hồng trên hai bím tóc */}
      <g>
        <path d="M46 86 C41 79 33 80 31 87 C33 94 41 93 46 86 Z" fill={CHEEK} />
        <path d="M46 86 C51 79 59 80 61 87 C59 94 51 93 46 86 Z" fill={CHEEK} />
        <circle cx={46} cy={86} r={3.5} fill="#F09A8C" />
        <path d="M154 86 C149 79 141 80 139 87 C141 94 149 93 154 86 Z" fill={CHEEK} />
        <path d="M154 86 C159 79 167 80 169 87 C167 94 159 93 154 86 Z" fill={CHEEK} />
        <circle cx={154} cy={86} r={3.5} fill="#F09A8C" />
      </g>

      {/* Mắt, lông mày, má hồng, miệng */}
      <SparkleEyes />
      <SoftBrows />
      <CheeksAndSmile />

      {/* Váy yếm - thân chữ A loe nhẹ */}
      <path
        d="M78 128 C76 132 74 140 73 148 C70 162 68 172 71 178 Q73 182 82 182 L118 182 Q127 182 129 178 C132 172 130 162 127 148 C126 140 124 132 122 128 C116 124 84 124 78 128 Z"
        fill={CREAM_GIRL}
      />
      {/* Hai dây đeo yếm */}
      <path d="M86 124 L84 139" stroke={CREAM_DARK} strokeWidth={8} strokeLinecap="round" />
      <path d="M114 124 L116 139" stroke={CREAM_DARK} strokeWidth={8} strokeLinecap="round" />
      {/* Túi trước váy + đường chỉ */}
      <path d="M88 158 Q100 172 112 158 Q100 177 88 158 Z" fill={CREAM_DARK} />
      <path
        d="M90 160 Q100 170 110 160"
        stroke="#E3D9B0"
        strokeWidth={1.5}
        fill="none"
        strokeLinecap="round"
      />

      {/* Cuốn sách nhỏ xanh bạc hà được ôm trước ngực */}
      <rect x={85} y={134} width={30} height={22} rx={4} fill={MINT} />
      {/* Gáy sách */}
      <line x1={100} y1={136} x2={100} y2={154} stroke="#8CC7B8" strokeWidth={2} />
      {/* Viền trên trang sách */}
      <rect x={85} y={134} width={30} height={3.5} rx={2} fill="#C9ECE2" />
      {/* Dải đánh dấu trang hồng */}
      <rect x={97} y={130} width={6} height={9} rx={2} fill={CHEEK} />

      {/* Hai tay ôm sách - ống tay + bàn tay mũm mĩm */}
      <path
        d="M80 130 Q72 140 78 152"
        stroke={SKIN_WARM}
        strokeWidth={11}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M120 130 Q128 140 122 152"
        stroke={SKIN_WARM}
        strokeWidth={11}
        fill="none"
        strokeLinecap="round"
      />

      {/* Chân ngắn mũm mĩm */}
      <rect x={82} y={180} width={15} height={10} rx={5} fill={SKIN_WARM} />
      <rect x={103} y={180} width={15} height={10} rx={5} fill={SKIN_WARM} />

      {/* Giày nhỏ màu hồng */}
      <rect x={78} y={188} width={20} height={8} rx={4} fill={CHEEK} />
      <rect x={102} y={188} width={20} height={8} rx={4} fill={CHEEK} />
    </svg>
  );
}