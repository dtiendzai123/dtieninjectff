/*
 * Shadowrocket Script: DTien Premium Injector
 * Version: 3.0 (All-In-One Optimized)
 * Author: dtiendzai123
 */

// --- 1. ĐỊNH NGHĨA CẤU HÌNH (CONST OBJECT) ---
const CONFIG_MOD = {
    "Project": "90-100_Uncrack_List",
    "Status": "Active_Premium",
    
    // Nhóm 1: Thông tin hệ thống và Pointers
    "Engine_Core": {
        "lib": "libil2cpp.so",
        "interval": 5,
        "LocalPlayer": "0x4101FF4",
        "CurrentMatch": "0x3266CC0"
    },

    // Nhóm 2: Các điều kiện kiểm tra (Conditions)
    "Check_List": {
        "Firing": "0x2DC3804",
        "Sighting": "0x2DC867C",
        "Visible": "0x2DD8F54",
        "Dying": "0x2DC1178"
    },

    // Nhóm 3: Logic Aimbot & Bone Target
    "Aim_Logic": {
        "Target_Head": "0x2E5A7B4",
        "Target_Hip": "0x2E5A98C",
        "Force_Y": 0.285,
        "Neck_Offset": 0.185,
        "Rotation_W": 0.999266,
        "Smooth": 0.5,
        "FOV": 360
    },

    // Nhóm 4: Các hàm thực thi (Execution)
    "Execution": {
        "SetPos": "0x6BC252C",
        "GetPos": "0x6BC248C",
        "GetTF": "0x8CA3B10",
        "Camera": "0x6A64C64",
        "AimAddr": "0xFFFFFF86E6FEF000"
    }
};

// --- 2. XỬ LÝ LOGIC TRÊN SHADOWROCKET ---
let body = $response.body;

try {
    // Thử giải mã JSON từ Host
    let obj = JSON.parse(body);

    // Tiêm (Inject) dữ liệu vào gói tin phản hồi
    obj["dtien_premium_v3"] = CONFIG_MOD;
    obj["auth_token"] = "DTIEN_" + Math.random().toString(36).substr(2, 9);
    
    // Ghi đè các Key dài (Raw) nếu Loader yêu cầu chính xác định dạng cũ
    obj["Game_Config"] = {
        "Auto_Headshot": "com.accpt_ffxbase64_Key_allow_AutoHeadshotScript_Enable_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Firing_Check": "com.accpt_ffxbase64_Key_allow_Player_IsFiringOffset_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=" + CONFIG_MOD.Check_List.Firing,
        "Set_Aim": "com.accpt_ffxbase64_Key_allow_AimSystem_SetAimAddress_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=" + CONFIG_MOD.Execution.AimAddr
    };

    body = JSON.stringify(obj);

    console.log("-----------------------------------------");
    console.log("DTIEN INJECTOR V3: ĐÃ KÍCH HOẠT");
    console.log("Hệ thống: " + CONFIG_MOD.Project);
    console.log("-----------------------------------------");

} catch (e) {
    // Nếu host trả về dữ liệu thô (không phải JSON)
    console.log("DTien Warning: Dữ liệu host không phải JSON, chuyển sang chế độ dự phòng.");
}

// --- 3. KẾT THÚC ---
$done({ body });
