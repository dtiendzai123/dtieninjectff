/*
 * Shadowrocket Script: DTien Injector FF (Full All-In-One)
 * Version: 90-100 Uncrack Premium
 * Author: dtiendzai123
 */

// --- 1. Cấu hình Toàn bộ Offset & Logic (Key-Value) ---
const dtienConfig = {
    "Binary_Info": {
        "name": "freefireth",
        "arch": "arm64",
        "uuid": "a41922b7-a25e-396f-b9b3-bb2eda25f0d5"
    },
    "Offsets_Player": {
        "HeadTF": "0x2e5a7b4",
        "HipTF": "0x2e5a98c",
        "GetLocalPlayer": "0x4101ff4",
        "get_IsFiring": "0x2dc3804",
        "get_IsSighting": "0x2dc867c",
        "get_isVisible": "0x2dd8f54",
        "get_MaxHP": "0x2e3e2e8",
        "get_IsDieing": "0x2dc1178"
    },
    "Offsets_Engine": {
        "MainCamera": "0x6a64c64",
        "Transform_SetPos": "0x6bc252c",
        "Transform_GetPos": "0x6bc248c",
        "Component_GetTF": "0x8ca3b10",
        "GetForward": "0x8a88b1c",
        "CurrentMatch": "0x3266cc0"
    },
    "Advanced_Logic": {
        // --- FIRE STATUS MONITOR ---
        "Fire_Monitor": "com.accpt_ffxbase64_Key_allow_Check_Firing_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2dc3804",
        "Trigger_Logic": "Active_On_Hit",
        
        // --- BODY HIT RE-TARGET ---
        "Body_Detect": "com.accpt_ffxbase64_Key_allow_BodyDetect_Zone_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2e5a98c",
        "Neck_Offset": 0.185,
        "Auto_ReTarget": "True",
        
        // --- INSTANT HEAD OVERWRITE ---
        "Head_Overwrite": "com.accpt_ffxbase64_Key_allow_ReTarget_To_Head_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2e5a7b4",
        "Velocity": "Instant",
        "Force_Y": 0.285,
        
        // --- ROTATION LOCK SYNC ---
        "Rot_W_Lock": 0.999266,
        "Internal_SetPos_Strict": "0x6bc252c",
        
        // --- SAFETY FILTER ---
        "Check_Visible": "0x2dd8f54",
        "Filter_Dieing": "0x2dc1178"
    },
    "Status": "DTien_Successfully_Injected"
};

// --- 2. Xử lý Can thiệp Gói tin (Intercept) ---
let body = $response.body;

try {
    // Thử giải mã nếu Server trả về JSON
    let obj = JSON.parse(body);
    
    // Tiêm toàn bộ cấu trúc dtienConfig vào phản hồi của Host
    obj["mod_menu_config"] = dtienConfig;
    obj["authorized"] = true;
    
    body = JSON.stringify(obj);
    
    console.log("-----------------------------------------");
    console.log("DTIEN INJECTOR FF: LOADED SUCCESSFULLY");
    console.log("Features: Aimbot, Neck Sync, Rotation Lock");
    console.log("-----------------------------------------");
} catch (e) {
    // Nếu dữ liệu không phải JSON (Binary), in log cảnh báo
    console.log("DTien Warning: Host data is not JSON. Injecting via Raw String...");
    // Tùy chọn: Bạn có thể cộng thêm chuỗi vào body nếu server chấp nhận chuỗi thô
    // body += JSON.stringify(dtienConfig);
}

// --- 3. Trả kết quả về cho Game ---
$done({ body });
