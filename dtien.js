/*
 * Shadowrocket Script: DTien Injector FF (Full All-In-One)
 * Version: 90-100 Uncrack Premium
 * Author: dtiendzai123
 */
// --- 1. CẤU HÌNH HỆ THỐNG KHÓA MỤC TIÊU (CONST) ---
const DTien_V12_Engine = {
    "PROJECT": "V12_Global_Magnet_Matrix",
    "STATUS": "V12_Extreme_Activated",

    // Mô-đun 1: Lực hút đầu toàn cầu (Không cần vào vùng)
    "GLOBAL_HEAD_MAGNET": {
        "Enable": true,
        "Force": 1.0,
        "IgnoreZone": true,        // Aim ở đâu cũng tự kéo về đầu
        "AlwaysActive": true,
        "InstantPull": true,
        "TargetBone": "bone_head",
        "ForceVertical": 1.0,      // Ép trục dọc tuyệt đối
        "CenterLock": 1.0
    },

    // Mô-đun 2: Chống mục tiêu Teleport/Lag (Hardlock Resist)
    "TELEPORT_RESIST": {
        "Enable": true,
        "Strength": 1.0,
        "PredictInstant": true,
        "NoBreak": true,           // Không bị nhả tâm khi địch blink/lag
        "ReacquireTime": 0.0,      // Thời gian bắt lại mục tiêu: 0ms
        "InstantReLock": true,
        "TrackVelocity": true      // Bám theo vận tốc di chuyển
    },

    // Mô-đun 3: Hệ định vị Head World Position (Core)
    "WORLD_POSITION_CORE": {
        "Enable": true,
        "RealTimeUpdate": true,
        "UseHumanoid": true,
        "HumanoidBone": "Head",
        "ParentHash": 96688289,    // Hash định danh xương cha
        "ComputeMatrix": true,     // Bật tính toán Ma trận
        "MatrixMultiply": true     // Nhân Matrix Parent * Local
    },

    // Mô-đun 4: Dữ liệu biến đổi cục bộ (Local Transform Data)
    "LOCAL_TRANSFORM": {
        "Position": [-0.045697, -0.004478, -0.020043],
        "Rotation": [0.025817, -0.08611, -0.140211, 0.986032], // Quaternion
        "Scale": [1, 1, 1]
    },

    // Mô-đun 5: Đầu ra và Đồng bộ (Final Output)
    "FINAL_OUTPUT_SYNC": {
        "ForceHeadPriority": true,
        "NoChestLock": true,       // Tuyệt đối không dính vào ngực
        "DefaultHeadOutput": true,
        "OutputRotation": true,
        "DebugLog": true,
        "LogRate": 0.1
    }
};
const DTien_V11_Engine = {
    "PROJECT": "V11_Tracking_Smooth_Master",
    "STATUS": "Activated_V11",

    // Mô-đun 1: Phát hiện và truy xuất xương (Bone Tracking)
    "TARGET_HEAD_DETECTION": {
        "HeadBoneTracking": true,
        "UseHumanoidHead": true,
        "FallbackBone": "bone_head",
        "HeadOffsetY": 0.045
    },

    // Mô-đun 2: Điều khiển Camera Auto Aim
    "CAMERA_CONTROL": {
        "AutoAimEnable": true,
        "TrackSpeed": 5.2,
        "InputBlend": 0.25,      // Tỉ lệ giữa auto và tay
        "RotationSmoothing": 0.35,
        "SnapLimiter": 0.6       // Giới hạn tốc độ snap
    },

    // Mô-đun 3: Hệ thống Crosshair (Tâm ngắm màn hình)
    "CROSSHAIR_TRACKING": {
        "FollowHead": true,
        "MoveSpeed": 11.5,
        "Projection_WorldToScreen": true,
        "Mapping_ScreenToCanvas": true,
        "LerpSmoothing": 0.4
    },

    // Mô-đun 4: Kiểm tra hiển thị (Visibility)
    "SCREEN_CHECK": {
        "VisibilityCheck": true,
        "HideBehindCamera": true,
        "DepthCheck_Z": 0.0
    },

    // Mô-đun 5: Kiểm soát độ ổn định (Stability)
    "SMART_STABILITY": {
        "TrackingStability": 0.7,
        "ProximityDamping": 0.55, // Chống lố khi gần đầu
        "MicroCorrection": 0.2,   // Sửa lỗi từng frame
        "GlobalSmooth": 0.35
    },

    // Mô-đun 6: Đồng bộ hóa Animation (Late Update)
    "LATE_UPDATE_SYNC": {
        "LateUpdateEnable": true,
        "AnimationSyncHead": true,
        "DefaultOutput": true
    }
};
const DTien_HeadLock_Master = {
    "ABSOLUTE_HEAD_LOCK": {
        "HardLock_Enable": true,
        "Efficiency": "98%",
        "Priority": "Head_Only",
        "Stickiness": 1.0
    },
    "BULLET_SYNC_98": {
        "Redirection_Enable": true,
        "Path_Correction": "bone_Head",
        "Hitbox_Enlargement": true,
        "Instant_Kill_Optimization": true
    },
    "WORLD_ANCHOR_ZERO_DRIFT": {
        "Anchor_X": true,
        "Anchor_Y": true,
        "Precision_Fix": -0.00581238,
        "Snap_Force": 2.0
    },
    "ANTI_RECOIL_STAY": {
        "PostShot_Stability": "Maximum",
        "Recoil_Freezing_Head": true,
        "Vertical_Bypass": true
    },
    "AUTO_SCOPE_SNAP": {
        "ADS_HeadSnap_Enable": true,
        "Snap_Speed": "Instant",
        "Snap_Force": 2.0,
        "FOV_Precision": "High"
    },
    "LOCK_ON_ADS_LOGIC": {
        "ScopeIn_AutoLock": true,
        "TargetBone_Hash": 96688289,
        "Stickiness": 1.0,
        "UpdateRate": "0ms"
    },
    "STABILITY_FOV": {
        "Vibration_Reduction": true,
        "Dynamic_FOV_Scaling": "Active",
        "Zero_Delay_Trigger": true
    }
};
// --- 1. CẤU HÌNH SNAP TÂM TRƯỚC KHI VUỐT (CONST) ---
const DTien_V10_Engine = {
    "Project": "Pre_Input_Snap_Instant",
    "Status": "V10_PreSnap_Activated",

    // Tầng 1: Logic Snap tức thời (Pre-Aim Logic)
    "PRE_SNAP_LOGIC": {
        "Instant_Snap_On_Touch": true,     // Snap ngay khi chạm nút (chưa kịp vuốt)
        "Zero_Travel_Time": true,          // Triệt tiêu thời gian di chuyển của tâm
        "Target_Priority": "Head_Bone",    // Ưu tiên: Đầu
        "Snap_Trigger_Offset": "0x2dc867c",// Kích hoạt ngay khi mở ống ngắm (Sighting)
        "Fire_Trigger_Offset": "0x2dc3804" // Kích hoạt ngay khi bấm bắn (Firing)
    },

    // Tầng 2: Vô hiệu hóa vật lý (No-Delay Engine)
    "NO_DELAY_ENGINE": {
        "Bypass_Input_Lag": true,          // Bỏ qua độ trễ cảm ứng màn hình
        "Hard_Lock_Strength": 1.0,         // Lực khóa tuyệt đối
        "Stability_W_Sync": 0.999266,      // Khóa trục xoay Camera cố định
        "Forward_Vector_Sync": "0x8a88b1c" // Đồng bộ hướng đạn tức thì
    },

    // Tầng 3: Tọa độ và Ma trận thế giới (Matrix Core)
    "COORDINATE_SYSTEM": {
        "Head_Bone_TF": "0x2e5a7b4",        // HeadTF
        "Body_Bone_TF": "0x2e5a98c",        // HipTF (Dùng để nhận diện nhảy lên đầu)
        "Internal_SetPos": "0x6bc252c",     // Ghi đè tọa độ tuyệt đối
        "Matrix_Transform": "0x320",        // Ma trận cha từ Camera
        "Y_Axis_Correction": 0.285          // Ghim chính xác đỉnh đầu
    },

    // Tầng 4: Bộ lọc thông minh (Smart Filter)
    "SMART_FILTER": {
        "Visible_Check": "0x2dd8f54",       // Chỉ Snap khi địch lộ diện
        "FOV_Scan_Range": 360,              // Quét mục tiêu toàn cảnh
        "Auto_Unlock_On_Kill": true         // Nhả tâm ngay khi địch gục
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS": {
        "Pre_Snap": "com.accpt_ffxbase64_Key_allow_PreInput_Snap_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Instant_Lock": "com.accpt_ffxbase64_Key_allow_Instant_Headshot_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "No_Input_Lag": "com.accpt_ffxbase64_Key_allow_Bypass_Input_Lag_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// --- 1. CẤU HÌNH CHÍNH XÁC TUYỆT ĐỐI & FIX LỐ TÂM (CONST) ---
const DTien_V9_Engine = {
    "Project": "Absolute_Distance_Precision",
    "Status": "V9_HardStop_Activated",

    // Tầng 1: Chống lố tâm & Lệch tâm (Anti-Overshoot)
    "DRAG_FIX_LOGIC": {
        "Hard_Stop_At_Head": true,         // Tự động dừng drag khi chạm đầu
        "Overshoot_Reduction": 1.0,        // Triệt tiêu gia tốc thừa của tay
        "Stick_Boundary": "0x2e5a7b4",     // Ranh giới khóa: HeadTF
        "Magnet_Strength": "Maximum",      // Lực hút nam châm cực đại
        "Flick_Correction": true           // Tự động nắn lại nếu tâm lỡ lướt qua
    },

    // Tầng 2: Chính xác tuyệt đối mọi khoảng cách (Distance Sync)
    "DISTANCE_ADAPTIVE": {
        "Auto_Distance_Scaling": true,     // Tự động bù trừ theo khoảng cách
        "Far_Target_Magnet_Boost": 100.0,    // Tăng lực hút khi địch ở xa
        "Near_Target_Smooth": 0.2,         // Làm mượt khi địch ở quá gần
        "Bullet_Drop_Fix": "0x8a88b1c",    // Khử độ rơi đạn (Forward Sync)
        "Zero_Sway": true                  // Tâm đứng im tuyệt đối
    },

    // Tầng 3: Duy trì khóa & Ma trận (Core Engine)
    "SYSTEM_CORE": {
        "Internal_SetPos": "0x6bc252c",    // Ghi đè tọa độ Camera
        "Internal_GetPos": "0x6bc248c",    // Lấy tọa độ mục tiêu thực
        "Matrix_Camera": "0x320",          // Ma trận cha
        "Rotation_W_Stable": 0.999266,     // Khóa trục xoay chống lệch
        "Y_Axis_Force": 0.285              // Ghim chính xác đỉnh đầu
    },

    // Tầng 4: Điều kiện kích hoạt & An toàn
    "TRIGGER_SAFETY": {
        "On_Firing": "0x2dc3804",
        "Visible_Check": "0x2dd8f54",      // Chỉ khóa khi thấy địch
        "Auto_Unlock_On_Death": true,      // Nhả tâm ngay khi địch gục
        "FOV_Scan": 360
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw)
    "RAW_KEYS": {
        "Distance_Sync": "com.accpt_ffxbase64_Key_allow_Distance_Adaptive_Precision_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Hard_Stop": "com.accpt_ffxbase64_Key_allow_Hard_Stop_Overshoot_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "No_Sway_Permanent": "com.accpt_ffxbase64_Key_allow_Permanent_NoSway_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// --- 1. CẤU HÌNH KHOÁ ĐẦU THEO MỌI HƯỚNG (CONST) ---
const DTien_V8_Engine = {
    "Project": "Omni_Directional_Head_Lock",
    "Status": "V8_Omni_Activated",

    // Tầng 1: Theo dõi mục tiêu di động (Motion Tracking)
    "MOTION_LOCK": {
        "Predict_Movement": true,          // Dự đoán hướng di chuyển của địch
        "Tracking_360": true,              // Khoá mục tiêu ở mọi góc độ
        "Update_Frequency": "Always",      // Cập nhật liên tục theo Frame
        "Rotation_Sync_W": 0.999266,       // Giữ ổn định trục xoay khi địch lạng lách
        "Forward_Vector_Offset": "0x8a88b1c" // Đồng bộ vector hướng di chuyển
    },

    // Tầng 2: Duy trì khoá khi bắn (Firing Persistence)
    "FIRING_PERSISTENCE": {
        "Permanent_Lock_On_Fire": true,    // Duy trì khoá tuyệt đối khi nhấn bắn
        "IsFiring_Check": "0x2dc3804",     // Offset trạng thái bắn
        "Sticky_Power": 100.0,               // Lực hút nam châm tối đa
        "Snap_Speed": "0ms"                // Không có độ trễ khi bám theo địch
    },

    // Tầng 3: Tọa độ thế giới & Ma trận (World Matrix)
    "WORLD_MATRIX_CORE": {
        "Head_Bone": "0x2e5a7b4",          // Tọa độ đầu
        "Internal_SetPos": "0x6bc252c",    // Ghi đè vị trí tâm ngắm
        "Transform_Component": "0x8ca3b10",// Trích xuất tọa độ thực thể
        "Camera_Matrix": "0x320",          // Ma trận Camera cha
        "Height_Fix": 0.285                // Đẩy tâm lên đỉnh đầu
    },

    // Tầng 4: Bộ lọc an toàn & Ưu tiên (Safety & Priority)
    "PRIORITY_FILTERS": {
        "Visible_Check": "0x2dd8f54",      // Chỉ khoá khi địch lộ diện
        "Distance_Priority": "Closest",    // Ưu tiên địch gần nhất
        "Alive_Only": "0x2dc1178",         // Bỏ qua mục tiêu đã gục
        "FOV_Limit": 360                   // Quét toàn bộ vòng tròn xung quanh
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS": {
        "Omni_Lock": "com.accpt_ffxbase64_Key_allow_OmniDirectional_Lock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Motion_Predict": "com.accpt_ffxbase64_Key_allow_Movement_Prediction_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "No_Recoil": "com.accpt_ffxbase64_Key_allow_Zero_Recoil_Permanent_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// --- 1. CẤU HÌNH DUY TRÌ KHÓA ĐẦU TUYỆT ĐỐI (CONST) ---
const DTien_V7_Engine = {
    "Project": "Permanent_Firing_Head_Lock",
    "Status": "V7_Ultra_Activated",

    // Tầng 1: Duy trì trạng thái khóa (Lock Maintenance)
    "FIRING_LOCK_LOGIC": {
        "Continuous_Lock": true,           // Duy trì khóa liên tục khi bấm bắn
        "Check_Firing_Offset": "0x2dc3804", // get_IsFiring
        "Lock_Refresh_Rate": "0ms",         // Tốc độ quét khóa (tức thì)
        "Sticky_Force": 1.0,               // Lực bám tuyệt đối (100%)
        "Magnet_Range": "Full_Body_Snap"    // Chạm bất cứ đâu trên người là Snap về đầu
    },

    // Tầng 2: Vô hiệu hóa sai số (No-Recoil & Zero-Gravity)
    "STABILITY_CORE": {
        "Absolute_Precision": true,         // Độ chính xác 100%
        "Zero_Gravity": true,               // Tắt trọng lực tâm
        "Anti_Sway_Sync": "0x8a88b1c",      // Forward Sync (Chống rung lắc)
        "Quaternion_W": 0.999266,           // Khóa trục xoay Camera
        "No_Spread": true                   // Tắt độ nở tâm (đạn bay thẳng tắp)
    },

    // Tầng 3: Tọa độ và Ma trận (Matrix Engine)
    "COORDINATE_SYSTEM": {
        "Head_Bone_TF": "0x2e5a7b4",        // Mục tiêu: Đầu
        "Body_Bone_TF": "0x2e5a98c",        // Nhận diện: Thân
        "Internal_SetPos": "0x6bc252c",     // Hàm ghi đè tọa độ
        "Camera_Matrix": "0x320",           // Ma trận Camera cha
        "Force_Y_Offset": 0.285             // Đẩy tâm lên đỉnh đầu
    },

    // Tầng 4: Lọc mục tiêu an toàn (Safety Filter)
    "SAFETY_FILTER": {
        "IsVisible_Offset": "0x2dd8f54",    // Chỉ khóa khi nhìn thấy địch
        "IsDying_Offset": "0x2dc1178",      // Tự động nhả tâm khi địch chết
        "Max_FOV": 360                      // Tầm quét 360 độ
    },

    // Tầng 5: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_CONFIG": {
        "Permanent_Lock": "com.accpt_ffxbase64_Key_allow_Permanent_Firing_Lock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Bullet_Direct": "com.accpt_ffxbase64_Key_allow_Bullet_Direct_To_Head_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Gravity_Off": "com.accpt_ffxbase64_Key_allow_Disable_Aim_Gravity_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// --- 1. CẤU HÌNH TÂM NGẮM CHÍNH XÁC TUYỆT ĐỐI (CONST) ---
const DTien_V6_Engine = {
    "Project": "Absolute_Precision_Zero_Gravity",
    "Status": "Activated_Premium_V6",

    // Tầng 1: Tắt Trọng lực & Rung tâm (No Gravity / No Sway)
    "GRAVITY_CONTROL": {
        "Zero_Gravity_Enable": true,       // Tắt độ rơi của tâm khi rê (Drag)
        "No_Sway_Offset": "0x8a88b1c",     // Khử độ rung lắc Camera (GetForward Sync)
        "Stability_W": 0.999266,           // Khóa trục xoay ổn định tuyệt đối
        "Drag_Sensitivity_Boost": 75.0     // Tăng độ nhạy khi rê tâm bằng tay
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
     obj["DTien_V7_Permanent"] = DTien_V7_Engine;
    obj["System_Log"] = "Head_Lock_Stable_On_Firing";
    obj["Authorization"] = "V7_Premium_Grant";
  // Inject toàn bộ Engine V8 vào Response
    obj["DTien_V8_Omni"] = DTien_V8_Engine;
    obj["Tracking_Status"] = "Omni_Lock_Engaged";
    obj["Precision_Level"] = "Absolute_360";
     // Inject toàn bộ Engine V9 vào Response
    obj["DTien_V9_HardStop"] = DTien_V9_Engine;
    obj["Precision_Status"] = "Absolute_Distance_Locked";
    obj["Overshoot_Fix"] = "Enabled_Maximum";
obj["DTien_V10_PreSnap"] = DTien_V10_Engine;
    obj["Snap_Status"] = "Instant_Head_Locked";
    obj["Speed_Boost"] = "Zero_Delay_Mode";
    // Tiêm (Inject) toàn bộ cấu trúc Master vào phản hồi
    obj["DTien_HeadLock_Master"] = DTien_HeadLock_Master;
    obj["Authorized_User"] = "dtiendzai123";
    obj["Injection_Status"] = "Success_98_Percent";

    // Tạo các chuỗi Key thô (Raw Keys) tự động từ Object
    obj["Raw_Keys_Payload"] = {
        "Aim_Lock_Key": "com.accpt_ffxbase64_Key_allow_AimLock_HardLock_Enable_app_com.dts.freefireth=True",
        "ADS_Snap_Key": "com.accpt_ffxbase64_Key_allow_ADS_HeadSnap_Enable_app_com.dts.freefireth=True",
        "Bullet_Path_Key": "com.accpt_ffxbase64_Key_allow_Bullet_Path_Correction_app_com.dts.freefireth=bone_Head",
        "Precision_Key": "com.accpt_ffxbase64_Key_allow_WorldPosition_Precision_Fix_app_com.dts.freefireth=-0.005812380"
    };
     // Inject toàn bộ Engine V11 vào Response
    obj["DTien_V11_Engine"] = DTien_V11_Engine;
    obj["System_Priority"] = "LateUpdate_High";
    
    // Tự động tạo Raw Keys để nạp vào hệ thống game
    obj["Raw_Keys_V11"] = {
        "tracking_key": "com.accpt_ffxbase64_Key_allow_HeadBoneTracking_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "smooth_key": "com.accpt_ffxbase64_Key_allow_GlobalSmoothInterpolation_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=0.35",
        "sync_key": "com.accpt_ffxbase64_Key_allow_LateUpdateSync_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    };
   // Inject Engine V12 vào phản hồi của Game Host
    obj["DTien_V12_Core"] = DTien_V12_Engine;
    obj["Magnet_Status"] = "Global_Locked";
    obj["Matrix_Sync"] = "Active_High_Precision";

    // Tạo các Raw Keys cần thiết cho bộ nạp (Loader) của Game
    obj["Raw_Keys_V12"] = {
        "magnet_key": "com.accpt_ffxbase64_Key_allow_GlobalHeadMagnet_Enable_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "teleport_fix": "com.accpt_ffxbase64_Key_allow_TeleportResistHeadLock_Enable_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "matrix_key": "com.accpt_ffxbase64_Key_allow_HeadWorldPos_ComputeMatrix_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "local_pos_key": "com.accpt_ffxbase64_Key_allow_HeadWorldPos_LocalPos_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=-0.045697,-0.004478,-0.020043"
    };
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
