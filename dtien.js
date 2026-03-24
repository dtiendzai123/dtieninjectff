/*
 * Shadowrocket Script: Can thiệp Offset qua Host
 * Cấu trúc: Key-Value Injector
 */

// 1. Khai báo danh sách Offset (Key-Value)
const offsets = {
    "Player": {
        "HeadTF": "0x2e5a7b4",
        "HipTF": "0x2e5a98c",
        "GetLocalPlayer": "0x4101ff4",
        "get_IsFiring": "0x2dc3804",
        "get_IsSighting": "0x2dc867c",
        "get_isVisible": "0x2dd8f54",
        "get_MaxHP": "0x2e3e2e8"
    },
    "Engine": {
        "Component_GetTransform": "0x8ca3b10",
        "Transform_INTERNAL_SetPosition": "0x6bc252c"
    },
    "Status": "Activated"
};

// 2. Lấy nội dung phản hồi gốc từ Host
let body = $response.body;

try {
    // Giả sử Host trả về một JSON cấu trúc, ta chèn thêm Offset vào
    let obj = JSON.parse(body);
    obj["mod_config"] = offsets; 
    body = JSON.stringify(obj);
    
    console.log("Đã tiêm Offset vào Host thành công!");
} catch (e) {
    // Nếu body không phải JSON (dạng binary), ta có thể ghi đè trực tiếp nếu biết cấu trúc
    console.log("Không thể parse JSON, kiểm tra lại định dạng phản hồi của Host");
}

// 3. Trả lại dữ liệu đã chỉnh sửa cho Game
$done({ body });
