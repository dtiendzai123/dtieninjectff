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
    "Engine_Core": {
        "Enable": true,
        "LoopInterval": 5,
        "Library": "libil2cpp.so",
        "Version": "90-100.uncrack.list"
    },
    "Pointers": {
        "LocalPlayer": "0x4101FF4",
        "CurrentMatch": "0x3266CC0"
    },
    "Conditions": {
        "IsFiring": "0x2DC3804",
        "IsSighting": "0x2DC867C",
        "IsVisible": "0x2DD8F54",
        "IsDying": "0x2DC1178"
    },
    "Target_Selector": {
        "ScanBestEnemy": true,
        "ClosestEnemyPriority": true,
        "TargetBone_Head": "0x2E5A7B4",
        "IgnoreHipBone": true
    },
    "Transform_Engine": {
        "Internal_GetPosition": "0x6BC248C",
        "ReadHeadWorldPosition": true
    },
    "Aim_Execution": {
        "SetAimAddress": "0xFFFFFF86E6FEF000",
        "ForceHeadLock": true,
        "WriteVectorX": true,
        "WriteVectorY": true,
        "WriteVectorZ": true
    }, // Dấu phẩy ở đây để nối tiếp phần dưới
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
    "Aimbot_Logic": {
        "enabled": true,
        "lock_target": "Head",
        "smooth_level": 0.5,
        "auto_fire": false,
        "fov_range": 360
    },
    "Advanced_Logic": {
        "Fire_Monitor": "com.accpt_ffxbase64_Key_allow_Check_Firing_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2dc3804",
        "Trigger_Logic": "Active_On_Hit",
        "Body_Detect": "com.accpt_ffxbase64_Key_allow_BodyDetect_Zone_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2e5a98c",
        "Neck_Offset": 0.185,
        "Auto_ReTarget": "True",
        "Head_Overwrite": "com.accpt_ffxbase64_Key_allow_ReTarget_To_Head_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2e5a7b4",
        "Velocity": "Instant",
        "Force_Y": 0.285,
        "Rot_W_Lock": 0.999266,
        "Internal_SetPos_Strict": "0x6bc252c",
        "Check_Visible": "0x2dd8f54",
        "Filter_Dieing": "0x2dc1178"
    },
    "Status": "DTien_Successfully_Injected"
}; // Chỉ đóng ngoặc ở cuối cùng sau khi đã liệt kê hết tất cả.
// --- 2. Xử lý Can thiệp Gói tin (Intercept) ---
let body = $response.body;

try {
    let obj = JSON.parse(body);
    
    // Tiêm cấu trúc chính
    obj["mod_menu_config"] = dtienConfig;
    obj["authorized"] = true;
    
    // Gán lại Engine Core từ dtienConfig để tránh lỗi biến chưa định nghĩa
    obj["Auto_Headshot_Condition_Lock_Engine"] = {
        "Core": dtienConfig.Engine_Core,
        "Aim": dtienConfig.Aim_Execution,
        "Selector": dtienConfig.Target_Selector
    };
    
    // Thêm các chuỗi Key thô (Raw)
    obj["Raw_Keys"] = {
        "firing_key": "com.accpt_ffxbase64_Key_allow_Player_IsFiringOffset_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2DC3804",
        "head_bone_key": "com.accpt_ffxbase64_Key_allow_TargetBone_HeadTransformOffset_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2E5A7B4"
    };

    body = JSON.stringify(obj);
    
    console.log("-----------------------------------------");
    console.log("DTIEN INJECTOR FF: LOADED SUCCESSFULLY");
    console.log("Status: " + dtienConfig.Status);
    console.log("-----------------------------------------");
} catch (e) {
    console.log("DTien Warning: Host data is not JSON. Injecting via Raw String...");
}

// --- 3. Trả kết quả về cho Game ---
$done({ body });
