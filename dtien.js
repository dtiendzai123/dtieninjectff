/*
 * Shadowrocket Script: Can thiệp Offset qua Host (Full Version)
 * Tính năng: Cấu hình Aimbot & Chỉ số Player
 */

// 1. Khai báo danh sách Offset đầy đủ (Key-Value)
const offsets = {
    "Player_Offsets": {
        "HeadTF": "0x2e5a7b4",
        "HipTF": "0x2e5a98c",
        "GetLocalPlayer": "0x4101ff4",
        "get_IsFiring": "0x2dc3804",
        "get_IsSighting": "0x2dc867c",
        "get_isVisible": "0x2dd8f54",
        "get_MaxHP": "0x2e3e2e8",
        "get_IsDieing": "0x2dc1178"
    },
    "Camera_Offsets": {
        "MainCameraTransform": "0x320",
        "Camera_main": "0x6a64c64"
    },
    "Engine_Offsets": {
        "Dictionary": "0x58",
        "Component_GetTransform": "0x8ca3b10",
        "Transform_INTERNAL_SetPosition": "0x6bc252c",
        "Transform_INTERNAL_GetPosition": "0x6bc248c",
        "GetForward": "0x8a88b1c",
        "Curent_Match": "0x3266cc0"
    },
    "Aimbot_Logic": {
        "enabled": true,
        "lock_target": "Head", // Khóa vào đầu
        "smooth_level": 0.5,   // Độ mượt khi kéo tâm
        "auto_fire": false,
        "fov_range": 180       // Tầm nhìn quét địch
    },
    "Status": "Activated_By_DTien"
};

// 2. Xử lý dữ liệu từ Host
let body = $response.body;

try {
    // Giải mã JSON từ Server Game
    let obj = JSON.parse(body);
    
    // Gộp (Merge) dữ liệu mod vào gói tin gốc
    // Chúng ta đặt vào mục 'mod_config' hoặc ghi đè tùy cấu trúc game
    obj["mod_data"] = offsets;
    obj["server_status"] = "stable";
    
    // Chuyển lại thành chuỗi để gửi về game
    body = JSON.stringify(obj);
    
    console.log("-----------------------------------------");
    console.log("Inject thành công Offset cho FreeFire");
    console.log("Target: " + offsets.Aimbot_Logic.lock_target);
    console.log("-----------------------------------------");
} catch (e) {
    // Trường hợp dữ liệu không phải JSON (Binary/Protobuf)
    console.log("Lỗi: Server trả về định dạng không phải JSON. Cần sử dụng xử lý Byte.");
}

// 3. Phản hồi kết quả cuối cùng
$done({ body });
