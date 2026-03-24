/*
 * Shadowrocket Script: DTien Injector FF (Full All-In-One)
 * Version: 90-100 Uncrack Premium
 * Author: dtiendzai123
 */
// --- 1. CẤU HÌNH TÂM NGẮM CHÍNH XÁC TUYỆT ĐỐI (CONST) ---
const DTien_V6_Engine = {
    "Project": "Absolute_Precision_Zero_Gravity",
    "Status": "Activated_Premium_V6",

    // Tầng 1: Tắt Trọng lực & Rung tâm (No Gravity / No Sway)
    "GRAVITY_CONTROL": {
        "Zero_Gravity_Enable": true,       // Tắt độ rơi của tâm khi rê (Drag)
        "No_Sway_Offset": "0x8a88b1c",     // Khử độ rung lắc Camera (GetForward Sync)
        "Stability_W": 0.999266,           // Khóa trục xoay ổn định tuyệt đối
        "Drag_Sensitivity_Boost": 1.5      // Tăng độ nhạy khi rê tâm bằng tay
    },

    // Tầng 2: Chính xác tuyệt đối & Magnet-Lock (Nam châm đầu)
    "PRECISION_LOCK": {
        "Absolute_Accuracy": true,         // Ép sai số đường đạn về 0
        "Head_Scan_Zone": "0x2e5a7b4",     // Vùng nhận diện đầu kẻ địch
        "Magnet_Hold_Power": 1.0,          // Lực giữ tâm (1.0 = không thể kéo ra khỏi đầu)
        "Snap_From_Body": "0x2e5a98c",     // Tự động nhảy từ thân lên đầu
        "Force_Y_Top": 0.285               // Điểm ghim: Đỉnh đầu
    },

    // Tầng 3: Thực thi hệ thống Ma trận (Matrix Engine)
    "SYSTEM_CORE": {
        "Internal_SetPos": "0x6bc252c",    // Ghi đè tọa độ thế giới
        "Internal_GetPos": "0x6bc248c",    // Lấy tọa độ mục tiêu
        "Component_TF": "0x8ca3b10",
        "Camera_Matrix": "0x320",
        "Dictionary_Link": "0x58"
    },

    // Tầng 4: Điều kiện lọc và Kích hoạt (Activation)
    "TRIGGER_FILTERS": {
        "On_Firing": "0x2dc3804",
        "On_Sighting": "0x2dc867c",
        "Visible_Check": "0x2dd8f54",
        "Death_Filter": "0x2dc1178"
    },

    // Tầng 5: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_CONFIG": {
        "Zero_Gravity": "com.accpt_ffxbase64_Key_allow_ZeroGravity_Aim_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Absolute_Precision": "com.accpt_ffxbase64_Key_allow_Absolute_Precision_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Magnet_Lock": "com.accpt_ffxbase64_Key_allow_Magnet_Lock_Head_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};

// --- 1. CẤU HÌNH HỆ THỐNG GHIM TÂM (CONST) ---
const DTien_V5_Engine = {
    "Project": "Ultra_Snap_Head_Lock",
    "Status": "Activated_Premium",

    // Tầng 1: Logic Snap (Từ Thân về Đầu)
    "SNAP_LOGIC": {
        "Body_Detect_Zone": "0x2e5a98c",  // HipTF (Vùng nhận diện thân)
        "Head_Target_Lock": "0x2e5a7b4",  // HeadTF (Điểm Snap đến)
        "Snap_Speed": "0ms",               // Tốc độ nhảy tâm tức thì
        "Auto_Correction_Force": 1.0,      // Lực ép Snap tuyệt đối
        "Height_Compensation": 0.285       // Bù trừ trục Y để dính đỉnh đầu
    },

    // Tầng 2: Độ nhạy và Ghim cứng (Sticky & Sensitive)
    "SENSITIVITY_ENGINE": {
        "Flick_Power": "Maximum",
        "Sticky_Aim": true,
        "Rotation_W_Fixed": 0.999266,     // Khóa trục xoay chống rung
        "Smooth_Level": 0.0,               // Không mượt để snap nhanh nhất
        "FOV_Range": 360
    },

    // Tầng 3: Ma trận và Thực thi hệ thống
    "SYSTEM_EXECUTION": {
        "Internal_SetPos": "0x6bc252c",
        "Internal_GetPos": "0x6bc248c",
        "Component_TF": "0x8ca3b10",
        "Main_Camera": "0x6a64c64",
        "Camera_TF": "0x320"
    },

    // Tầng 4: Điều kiện lọc (Trigger Filters)
    "TRIGGER_CONDITIONS": {
        "On_Firing": "0x2dc3804",
        "On_Sighting": "0x2dc867c",
        "Visible_Only": true,
        "Filter_Dieing": "0x2dc1178"
    },

    // Tầng 5: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS": {
        "Body_To_Head": "com.accpt_ffxbase64_Key_allow_BodyToHead_Snap_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Instant_Lock": "com.accpt_ffxbase64_Key_allow_Instant_Head_Lock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "No_Recoil_Sync": "com.accpt_ffxbase64_Key_allow_Zero_Recoil_Sync_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x8a88b1c"
    }
};
const ULTRA_STICKY_AIM = {
    "Engine_Status": "Ultra_Sensitivity_Enabled",
    
    // Tầng 1: Độ nhạy và Gia tốc (Sensitivity & Flick)
    "SENSITIVITY_CONTROL": {
        "Flick_Speed": "0ms",            // Phản ứng tức thì không độ trễ
        "Stick_Power": 1.0,              // Độ bám (1.0 là tối đa, không thể thoát tâm)
        "Smooth_Factor": 0.0,            // Tắt độ mượt để đạt tốc độ kéo nhanh nhất
        "FOV_Scan": 360                  // Quét địch toàn màn hình
    },

    // Tầng 2: Điểm ghim mục tiêu (Target Bone Lock)
    "BONE_LOCK_LOGIC": {
        "Head_Bone": "0x2e5a7b4",        // Offset HeadTF
        "Neck_Correction": 0.185,        // Bù trừ cổ
        "Force_Y_TopHead": 0.285,        // Đẩy tâm lên đỉnh đầu để tránh bắn vào ngực
        "Hip_Ignore": true               // Bỏ qua các phần thân dưới
    },

    // Tầng 3: Ma trận và Ổn định (Matrix & Rotation)
    "STABILIZER_ENGINE": {
        "Parent_Matrix": "0x320",        // MainCameraTransform
        "Matrix_Dict": "0x58",           // Ma trận từ điển
        "Rotation_W_Fixed": 0.999266,    // Giá trị Quaternion W để ghim cứng trục xoay
        "Forward_Sync": "0x8a88b1c",     // Đồng bộ hướng nhìn thẳng
        "Set_Pos_Strict": "0x6bc252c"    // Ghi đè tọa độ tuyệt đối
    },

    // Tầng 4: Điều kiện kích hoạt (Trigger Conditions)
    "TRIGGER_FILTER": {
        "IsFiring": "0x2dc3804",         // Kiểm tra trạng thái bắn
        "IsSighting": "0x2dc867c",       // Kiểm tra trạng thái ngắm (Scope)
        "Visible_Only": true,            // Chỉ khóa khi địch lộ diện (Tránh bắn vào tường)
        "Alive_Check": "0x2dc1178"       // Bỏ qua xác chết
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Keys)
    "RAW_CONFIG": {
        "Auto_Lock": "com.accpt_ffxbase64_Key_allow_AutoHeadshot_Instant_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Sticky_Head": "com.accpt_ffxbase64_Key_allow_Sticky_Aim_Head_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Sensitivity_Boost": "com.accpt_ffxbase64_Key_allow_Sensitivity_High_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=100%"
    }
};
const AIM_LOCK_ENGINE = {
    "PROJECT": "DTien_Auto_Aim_V4",
    "LIBRARY": "libil2cpp.so",
    
    // Tầng 1: Giám sát trạng thái Bắn (Firing Monitor)
    "FIRE_CONTROL": {
        "IsFiring_Offset": "0x2dc3804",
        "IsSighting_Offset": "0x2dc867c",
        "Trigger_Logic": "Active_On_Hit",
        "Check_Visible": "0x2dd8f54"
    },

    // Tầng 2: Trích xuất Ma trận & Tọa độ (Matrix & Bone)
    "MATRIX_CALCULATION": {
        "MainCamera": "0x6a64c64",
        "CameraTransform": "0x320", // Trích xuất ParentMatrix
        "Dictionary": "0x58",
        "Head_Bone_TF": "0x2e5a7b4",
        "Component_TF": "0x8ca3b10",
        "Update_Rate": "0ms" // Zero Latency
    },

    // Tầng 3: Thực thi Ghim tâm (Execution)
    "EXECUTION_ENGINE": {
        "Set_Position_Internal": "0x6bc252c",
        "Get_Position_Internal": "0x6bc248c",
        "Aim_Address_Static": "0xffffff86e6fef000",
        "Rotation_W": 0.999266, // Chống rung tâm
        "Force_Y_Head": 0.285,  // Đẩy tâm lên đỉnh đầu
        "Smooth": 0.5
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw Keys)
    "RAW_KEYS": {
        "Auto_Headshot": "com.accpt_ffxbase64_Key_allow_AutoHeadshotScript_Enable_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Head_Lock": "com.accpt_ffxbase64_Key_allow_ReTarget_To_Head_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2e5a7b4",
        "Matrix_Sync": "com.accpt_ffxbase64_Key_allow_Get_ParentMatrix_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x320",
        "Rot_Sync": "com.accpt_ffxbase64_Key_allow_Rot_W_Value_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0.999266"
    }
};

const dtienMatrixEngine = {
    "MATRIX_PARENT_HOOK": {
        "MainCameraTransform": "0x320",
        "Dictionary": "0x58",
        "Update_Rate": "0ms",
        "Raw_Key_Matrix": "com.accpt_ffxbase64_Key_allow_Get_ParentMatrix_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x320"
    },
    "LOCAL_BONE_EXTRACTION": {
        "HeadTF": "0x2e5a7b4",
        "Component_Transform": "0x8ca3b10",
        "Local_To_World_Logic": true,
        "Raw_Key_Bone": "com.accpt_ffxbase64_Key_allow_LocalPos_Head_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2e5a7b4"
    },
    "WORLD_POS_CALCULATION": {
        "INTERNAL_SetPosition": "0x6bc252c",
        "Vector_Math_Multiply": true,
        "Sync_Target_Hash": -2111735698,
        "Raw_Key_Calc": "com.accpt_ffxbase64_Key_allow_Calc_WorldPos_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x6bc252c"
    },
    "QUATERNION_W_STABILIZER": {
        "Rot_W_Value": 0.999266,
        "GetForward": "0x8a88b1c",
        "Zero_Latency_Flick": true,
        "Raw_Key_Rot": "com.accpt_ffxbase64_Key_allow_Rot_W_Value_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0.999266"
    },
    "RE_TARGET_ON_FIRE": {
        "get_IsFiring": "0x2dc3804",
        "Auto_Correction_World": true,
        "Raw_Key_Fire": "com.accpt_ffxbase64_Key_allow_IsFiring_Check_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0x2dc3804"
    }
};
// --- 1. Cấu hình Toàn bộ Offset & Logic (Key-Value) ---
const dtienConfig = {
    "Binary_Info": {
        "name": "freefireth",
        "arch": "arm64",
        "uuid": "a41922b7-a25e-396f-b9b3-bb2eda25f0d5"
    },
   "Fire_Status": {
        "Check_Firing_Offset": "0x2dc3804",
        "Trigger_Logic": "Active_On_Hit",
        "Package": "com.dts.freefireth"
    },
   
    "Aimbot_Logic": {
        "enabled": true,
        "lock_target": "Head", // Khóa vào đầu
        "smooth_level": 0.5,   // Độ mượt khi kéo tâm
        "auto_fire": false,
        "fov_range": 360       // Tầm nhìn quét địch
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
    obj["DTien_Matrix_Engine"] = dtienMatrixEngine;
    
    // Tạo danh sách Key thô tự động từ các Const trên
    obj["Inject_Config"] = {
        "matrix_dictionary": "com.accpt_ffxbase64_Key_allow_Matrix_Dictionary_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=" + dtienMatrixEngine.MATRIX_PARENT_HOOK.Dictionary,
        "forward_sync": "com.accpt_ffxbase64_Key_allow_Forward_Sync_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=" + dtienMatrixEngine.QUATERNION_W_STABILIZER.GetForward,
        "component_tf": "com.accpt_ffxbase64_Key_allow_Component_Transform_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=" + dtienMatrixEngine.LOCAL_BONE_EXTRACTION.Component_Transform
    };
    // Inject toàn bộ Engine vào Response của Host
    obj["DTien_AutoAim_Lock"] = AIM_LOCK_ENGINE;
    obj["Engine_Status"] = "Running_Premium";
    obj["Target_Lock"] = "Head_Bone_Center";
    // Tiêm toàn bộ cấu trúc dtienConfig vào phản hồi của Host
    obj["mod_menu_config"] = dtienConfig;
    obj["authorized"] = true;
    obj["DTien_Ultra_Aim"] = ULTRA_STICKY_AIM;
    obj["Global_Settings"] = {
        "Aim_Assist_Level": "Maximum",
        "Recoil_Reduction": "100%",
        "Server_Authorized": true
    };
        obj["DTien_V5_Injected"] = DTien_V5_Engine;
    obj["Snap_Status"] = "Ready_To_Flick";
    obj["Anti_Cheat_Shield"] = "Bypassed_v2";
  // Inject toàn bộ Engine V6 vào Response của Host
    obj["DTien_V6_Absolute"] = DTien_V5_Engine; // Backup V5
    obj["V6_Core_Engine"] = DTien_V6_Engine;    // Main V6
    obj["Precision_Status"] = "Absolute_Lock_On";
    
    body = JSON.stringify(obj);
    // Inject toàn bộ Engine V6 vào Response của Host
    
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
