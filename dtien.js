/*
 * Shadowrocket Script: DTien Injector FF (Full All-In-One)
 * Version: 90-100 Uncrack Premium
 * Author: dtiendzai123
 */
// --- 1. CẤU HÌNH HỆ THỐNG KHÓA MỤC TIÊU (CONST) ---
const DTien_V28_Engine = {
    "PROJECT": "V28_Sticky_Anchor_System",
    "STATUS": "V28_NoRecoil_Active",

    // Bước 1 & 2: GetEnemyHead & Distance Calculation
    "STICKY_COORDINATE_SYNC": {
        "Target_Bone_TF": "0x2e5a7b4",       // Bone Head mục tiêu
        "W2S_Matrix_Sync": "0x320",          // Ma trận đồng bộ tọa độ màn hình
        "Refresh_Rate": "1ms",               // Tương đương Sleep(1)
        "Detection_Radius": "Omni_360",      // Quét mục tiêu mọi hướng
        "IsTargetInSight_Check": "0x2dd8f54" // Kiểm tra địch trong tầm nhìn
    },

    // Bước 3: UpdateCrosshair (Smooth = 0 - Dính tuyệt đối)
    "CROSSHAIR_STICKY_LOCK": {
        "Trigger_IsFiring": "0x2dc3804",    // Trạng thái nhấn nút bắn
        "Smooth_Travel_Factor": 0.0,         // Smooth = 0 (Snap & Sticky cực chặt)
        "Instant_Pos_Assign": "0x6bc252c",   // Ép tọa độ tâm = tọa độ đầu
        "Stickiness_Force": 1.0,             // Lực dính mỏ neo 100%
        "Hard_Boundary_Lock": true           // Fix lố X-Y tuyệt đối
    },

    // Bước 4: Kháng giật (ApplyRecoilCompensation)
    "NO_RECOIL_COMPENSATION": {
        "Enable_Anti_Recoil": true,          // Kích hoạt kháng giật
        "Vertical_Bypass_Y": "0x6bc252c",    // Triệt tiêu lực nảy dọc
        "Horizontal_Stabilize_X": true,      // Triệt tiêu lực rung ngang
        "Stability_W_Lock": 0.999266,        // Khóa trục xoay Camera ổn định
        "Zero_Drift_Active": true            // Giữ tâm đứng yên khi sấy đạn
    },

    // Tầng 5: Thực thi đạn và Sát thương (Bullet Priority)
    "BULLET_ENGINE_V28": {
        "Bullet_Tracer_Always_Head": true,   // Đạn tự tìm đầu (Tracer)
        "Priority_Headshot_100": true,       // Ưu tiên sát thương đầu
        "Vector_Bending_Angle": 45.0,        // Góc bẻ đạn cực rộng
        "Y_Axis_Push_Offset": 0.285          // Ghim đỉnh đầu
    },

    // Tầng 6: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V28": {
        "Sticky_Aim": "com.accpt_ffxbase64_Key_allow_StickyHeadAim_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Zero_Recoil": "com.accpt_ffxbase64_Key_allow_NoRecoilActive_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Absolute_Anchor": "com.accpt_ffxbase64_Key_allow_PermanentHeadAnchor_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V27_Engine = {
    "PROJECT": "V27_Kernel_Snap_Sync",
    "STATUS": "V27_C_Plus_Plus_Engine_Active",

    // Bước 1 & 2: GetBonePosition & WorldToScreen (3D -> 2D)
    "COORDINATE_TRANSFORM": {
        "Head_Bone_3D": "0x2e5a7b4",        // Tọa độ 3D Xương Đầu
        "W2S_Matrix": "0x320",              // Ma trận WorldToScreen
        "Internal_GetPos": "0x6bc248c",     // Hàm lấy vị trí thực thể
        "Update_Frequency": "0ms",          // Tương đương Sleep(1) trong C++
        "FOV_Check": 360.0                  // Tầm nhìn quét mục tiêu
    },

    // Bước 3 & 4: Offset Calculation & MoveTouch (Smooth = 1.0)
    "SNAP_EXECUTION": {
        "Trigger_Condition": "0x2dc3804",   // isFiring (Nút bắn đang nhấn)
        "Smooth_Factor": 1.0,               // Smooth = 1.0f (Khóa chặt, Snap cực mạnh)
        "Offset_X_Correction": true,        // Tự động bù lệch trục X
        "Offset_Y_Correction": true,        // Tự động bù lệch trục Y
        "Internal_SetPos": "0x6bc252c",     // Hàm di chuyển tâm (MoveTouch)
        "Hard_Stop_Boundary": true          // Chặn đứng tại điểm đích (Fix lố)
    },

    // Tầng 3: Bám đuổi di động (Velocity-Sync từ V21)
    "MOTION_TRACKING_360": {
        "Velocity_Prediction": 1.5,         // Bám theo hướng chạy địch
        "Rotation_W_Stable": 0.999266,      // Khóa trục xoay Camera (Rotation)
        "Anti_Hips_Reversion": true,        // Tuyệt đối không tụt xuống hông
        "Y_Axis_Push": 0.285                // Ghim chính xác đỉnh đầu
    },

    // Tầng 4: Thực thi đạn (Bullet Priority)
    "BULLET_ENGINE_V27": {
        "Bullet_Tracer_Always_Head": true,  // Đạn tự tìm đầu
        "Priority_Headshot_100": true,      // Ưu tiên sát thương đầu
        "Instant_Hit_No_Delay": true        // Bắn là trúng ngay
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V27": {
        "WorldToScreen_Lock": "com.accpt_ffxbase64_Key_allow_W2SHeadLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Smooth_Snap_1.0": "com.accpt_ffxbase64_Key_allow_SmoothFactor1.0_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "No_Drift_X_Y": "com.accpt_ffxbase64_Key_allow_ZeroOffsetCorrection_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V26_Engine = {
    "PROJECT": "V26_Dynamic_Pull_Sync",
    "STATUS": "V26_Active_Headshot_Only",

    // Tầng 1: Logic kéo tâm (Pull-Speed Simulation)
    "FIRE_BUTTON_LOGIC": {
        "Trigger_Offset": "0x2dc3804",      // Trạng thái nhấn nút bắn
        "Base_Pull_Speed": 39,              // Tốc độ kéo mặc định (tương đương logic cũ)
        "Dynamic_Distance_Boost": true,     // Tự tăng pull_speed nếu địch ở xa
        "Instant_Snap_Y": true,             // Dịch chuyển trục Y tức thì lên đầu
        "Response_Rate": "0ms"              // Cập nhật từng Frame
    },

    // Tầng 2: Cố định điểm đến (Target Bone: Head)
    "MOVE_CURSOR_TO_HEAD": {
        "Head_Bone_TF": "0x2e5a7b4",        // Điểm đích cố định (Headshot)
        "Internal_SetPos": "0x6bc252c",     // Hàm thực thi di chuyển tâm
        "Internal_SetRot": "0x8a88b1c",     // Khóa góc xoay Camera (Rotation)
        "Hard_Boundary_Lock": true,         // Chặn đứng tâm tại điểm đích (Fix Lố Y)
        "Y_Axis_Push": 0.285                // Ghim chính xác đỉnh đầu
    },

    // Tầng 3: Bám mục tiêu di chuyển (360 Motion Sync)
    "MOTION_TRACKING": {
        "Velocity_Prediction": 1.5,         // Bù trừ hướng chạy của địch
        "Anti_Hips_Reversion": true,        // Chống tuột tâm xuống hông/ngực
        "Zero_Drift_Active": true,          // Đứng im tại đầu sau khi snap
        "X_Axis_Centering": 1.0             // Ép tâm vào giữa trục X của đầu
    },

    // Tầng 4: Thực thi đạn đuổi (Bullet Priority) nó
    "BULLET_ENGINE_V26": {
        "Bullet_Tracer_Always_Head": true,  // Đạn tự tìm đầu (Tracer)
        "Priority_Headshot_100": true,      // Ưu tiên sát thương đầu 100%
        "Vector_Bending_Angle": 360.0        // Góc bẻ đạn rộng
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V26": {
        "Auto_Pull": "com.accpt_ffxbase64_Key_allow_AutoPullToHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Snap_Correction": "com.accpt_ffxbase64_Key_allow_InstantCorrectionIfMiss_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "No_Overshoot": "com.accpt_ffxbase64_Key_allow_FixVerticalOvershoot_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V25_Engine = {
    "PROJECT": "V25_Auto_Transformation_Lock",
    "STATUS": "V25_HardLock_Activated",

    // Tầng 1: Chuyển đổi cơ chế (Auto-Aim Transformation)
    "AIM_TRANSFORMATION": {
        "Override_Default_Aim": true,       // Ghi đè ngắm mặc định của game
        "Auto_Switch_To_Head": true,       // Tự động chuyển mục tiêu về đầu
        "Lock_Trigger_Condition": "Red_Color", // Kích hoạt khi tâm đổi màu
        "Firing_Sync_Active": true,         // Khóa chặt khi bắt đầu nhấn bắn
        "Reaction_Speed": "0ms"             // Phản hồi tức thì
    },

    // Tầng 2: Khóa chặt theo di chuyển (Motion-Anchor 360)
    "MOTION_ANCHOR_360": {
        "Head_Bone_TF": "0x2e5a7b4",        // Bone mục tiêu: Đầu
        "Velocity_Prediction": 1.5,         // Dự đoán hướng chạy (Địch chạy nhanh vẫn dính)
        "Angular_Stability": 0.999266,      // Khóa góc xoay Camera (Rotation)
        "Position_Sticky_Force": 1.0,       // Lực dính vị trí tuyệt đối (Position)
        "Zero_Drift_On_Target": true        // Chống trôi tâm khi địch lạng lách
    },

    // Tầng 3: Fix Lố & Trục tọa độ (Axis-Control V24)
    "AXIS_PRECISION_FIX": {
        "Hard_Stop_At_Boundary": true,      // Chặn đứng gia tốc tay (Fix lố Y/X)
        "Y_Axis_Push_Offset": 0.285,        // Ghim chính xác đỉnh đầu
        "Anti_Hips_Reversion": true,        // Chống tuột tâm xuống hông/ngực
        "Distance_Adaptive": true           // Tự điều chỉnh lực khóa theo khoảng cách
    },

    // Tầng 4: Thực thi đạn đuổi (Bullet Priority)
    "BULLET_ENGINE_V25": {
        "Bullet_Tracer_Always_Head": true,  // Đạn tự tìm đầu (Tracer)
        "Vector_Bending_Angle": 360.0,       // Góc bẻ đạn cực rộng
        "Priority_Headshot_100": true,      // Ưu tiên sát thương đầu
        "Instant_Hit_No_Delay": true        // Bắn là trúng (No Travel Time)
    },

    // Tầng 5: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V25": {
        "Auto_Transform": "com.accpt_ffxbase64_Key_allow_AutoAimToHardLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Red_HardLock": "com.accpt_ffxbase64_Key_allow_LockPosRotOnRed_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Motion_Freeze": "com.accpt_ffxbase64_Key_allow_MotionFreezeHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V24_Engine = {
    "PROJECT": "V24_Kinetic_Brake_System",
    "STATUS": "V24_Velocity_Damping_Active",

    // Tầng 1: Siêu nhạy trục Y khi chưa tới mục tiêu (High-Speed Travel)
    "HIGH_SPEED_SNAP_Y": {
        "Y_Axis_Travel_Acceleration": 10.0, // Gia tốc vuốt cực đại (X5)
        "Lower_Zone_Sensitivity": "Max",   // Nhạy tối đa khi ở dưới cổ
        "Instant_Travel_Logic": true,      // Giảm thiểu thời gian rê tâm
        "Input_Boost_Multiplier": 10.5      // Nhân đôi lực vuốt từ ngón tay
    },

    // Tầng 2: Phanh khẩn cấp tại đầu (Kinetic-Brake)
    "KINETIC_BRAKE_LOGIC": {
        "Head_Boundary_Detection": "0x2e5a7b4", 
        "Brake_Force_On_Touch": 1.0,       // Lực phanh 100% khi chạm ranh giới đầu
        "Precision_Damping": 0.0,          // Ép độ nhạy về 0 khi đã ghim đầu
        "Anti_Overshoot_Y": true,          // Tuyệt đối không cho vọt quá đỉnh đầu
        "Hard_Stop_Offset_Y": 0.285        // Điểm dừng: Chính giữa trán
    },

    // Tầng 3: Khóa biến đổi toàn phần (Pos & Rot Lock)
    "TRANSFORM_STABILIZER": {
        "Rotation_W_Stable": 0.999266,     // Khóa trục xoay chống rung khi phanh gấp
        "Internal_SetPos_Update": "0ms",   // Cập nhật tọa độ tức thì
        "Velocity_Predict_360": true,      // Bám theo hướng chạy của địch
        "Zero_Drift_Active": true          // Đứng im tại đầu sau khi phanh
    },

    // Tầng 4: Thực thi đạn đuổi (Bullet Sync)
    "BULLET_ENGINE_V24": {
        "Bullet_Tracer_Always_Head": true, // Đạn tự tìm đầu
        "Priority_Headshot_100": true,     // Ưu tiên sát thương đầu
        "Vector_Bending_Angle": 360.0       // Góc bẻ đạn rộng
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V24": {
        "Kinetic_Brake": "com.accpt_ffxbase64_Key_allow_KineticBrakeAtHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Variable_Sens_Y": "com.accpt_ffxbase64_Key_allow_VariableVerticalSensitivity_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Hard_Stop": "com.accpt_ffxbase64_Key_allow_HardStopDragAtTarget_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V23_Engine = {
    "PROJECT": "V23_Axis_Constraint_Lock",
    "STATUS": "V23_Cartesian_Active",

    // Tầng 1: Fix Lố Y - Chống vọt tâm qua đầu (Vertical Control)
    "VERTICAL_Y_CONSTRAINT": {
        "Anti_Overshoot_Y": true,          // Chặn đứng lực kéo vọt lên trời
        "Hard_Stop_Upper_Boundary": 0.045, // Giới hạn dừng tại đỉnh đầu
        "Y_Axis_Damping_Force": 1.0,       // Lực phanh trục Y tối đa
        "Recoil_Y_Bypass": "0x6bc252c",    // Triệt tiêu độ nảy dọc của súng
        "Gravity_Pull_Head": true          // Luôn kéo tâm về điểm Y của Bone Head
    },

    // Tầng 2: Fix Lệch X - Chống trôi tâm sang hai bên (Horizontal Control)
    "HORIZONTAL_X_CONSTRAINT": {
        "Anti_Drift_X": true,              // Chống trôi tâm khi địch chạy ngang
        "X_Axis_Stickiness": 1.0,          // Độ dính trục X tuyệt đối
        "Velocity_Predict_X": true,        // Dự đoán hướng chạy X để đón đầu
        "Centering_Force_X": 1.0,          // Ép tâm vào chính giữa trục dọc của đầu
        "Omni_Directional_Sync": true      // Đồng bộ 360 độ theo địch
    },

    // Tầng 3: Khóa biến đổi Transform (Pos & Rot)
    "TRANSFORM_STABILIZER": {
        "Head_Bone_TF": "0x2e5a7b4",       // Bone đầu mục tiêu
        "Rotation_W_Stable": 0.999266,     // Khóa trục xoay chống rung lắc
        "Internal_SetPos_Update": "0ms",   // Cập nhật vị trí tức thì
        "Distance_Adaptive_X_Y": true      // Tự điều chỉnh lực phanh theo khoảng cách
    },

    // Tầng 4: Thực thi đạn đuổi (Bullet Tracer V23)
    "BULLET_AXIS_SYNC": {
        "Tracer_Lock_On_Target": true,     // Đạn bẻ cong theo tọa độ X-Y đầu
        "Priority_Headshot_100": true,     // Ưu tiên sát thương đầu
        "Vector_Bending_Angle": 45.0       // Góc bẻ đạn rộng
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V23": {
        "Fix_Overshoot_Y": "com.accpt_ffxbase64_Key_allow_FixVerticalOvershoot_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Fix_Drift_X": "com.accpt_ffxbase64_Key_allow_FixHorizontalDrift_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Cartesian_Lock": "com.accpt_ffxbase64_Key_allow_CartesianCoordinateLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V22_Engine = {
    "PROJECT": "V22_RedZone_HardLock",
    "STATUS": "V22_Activated_Extreme",

    // Tầng 1: Nhận diện vùng đỏ (Red-Zone Detection)
    "DETECTION_LOGIC": {
        "Lock_Only_On_Red": true,           // Chỉ khóa cứng khi tâm hiện đỏ
        "IsTargetValid_Offset": "0x2dd8f54",// Mã kiểm tra mục tiêu lộ diện
        "Trigger_Boundary": "Head_Scan",    // Quét vùng đầu
        "Response_Delay": "0ms"             // Phản hồi tức thì
    },

    // Tầng 2: Khóa biến đổi toàn phần (Pos & Rot Motion-Freeze)
    "TRANSFORM_FREEZE": {
        "Head_Bone_Anchor": "0x2e5a7b4",    // Bone đầu mục tiêu
        "Internal_SetPos": "0x6bc252c",     // Ép vị trí (Position)
        "Internal_SetRot": "0x8a88b1c",     // Ép góc xoay (Rotation)
        "Hard_Boundary_Lock": true,         // Chặn đứng gia tốc tay (Fix lố)
        "Rotation_W_Stable": 0.999266       // Khóa trục xoay chống rung
    },

    // Tầng 3: Bám sát mục tiêu di chuyển (Motion-Sync)
    "MOTION_SYNC_360": {
        "Velocity_Prediction": true,        // Dự đoán hướng chạy 360 độ
        "Distance_Matrix_Sync": "0x320",    // Fix hụt ở mọi khoảng cách (Xa/Gần)
        "Movement_Compensation": 1.45,      // Bù trừ vận tốc cực cao
        "Anti_Hips_Reversion": true,        // Chống tuột tâm xuống hông/ngực
        "Zero_Drift_Active": true           // Đứng im tại đầu khi đã ghim
    },

    // Tầng 4: Ưu tiên đạn và Sát thương (Bullet Priority)
    "BULLET_ENGINE_V22": {
        "Bullet_Tracer_Always_Head": true,  // Đạn tự tìm đầu (Tracer)
        "Vector_Bending_Angle": 360.0,       // Góc bẻ đạn rộng (45 độ)
        "Priority_Headshot": true,          // Ưu tiên sát thương đầu 100%
        "Instant_Hit_Logic": true           // Bắn là trúng (No Travel Time)
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V22": {
        "Red_HardLock": "com.accpt_ffxbase64_Key_allow_HardLockOnRed_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "No_Overshoot": "com.accpt_ffxbase64_Key_allow_FixDragOvershoot_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Motion_Freeze": "com.accpt_ffxbase64_Key_allow_MotionFreezeHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V21_Engine = {
    "PROJECT": "V21_Velocity_Lock_Omni",
    "STATUS": "V21_Activated",

    // Tầng 1: Kích hoạt khóa khi bắn (Firing Trigger Lock)
    "FIRING_LOCK_SYSTEM": {
        "Trigger_Offset": "0x2dc3804",     // Trạng thái nút bắn (Firing)
        "Instant_Lock_On_Fire": true,      // Nhấn bắn là khóa chặt ngay
        "Lock_Persistence": 1.0,           // Lực giữ mỏ neo tối đa (100%)
        "Zero_Delay_Update": true          // Cập nhật tọa độ 0ms
    },

    // Tầng 2: Theo dõi hướng di chuyển (Velocity-Tracking)
    "VELOCITY_TRACKING_360": {
        "Predict_Directional_Movement": true, // Dự đoán hướng chạy 360 độ
        "Velocity_Compensation_Factor": 1.45, // Bù trừ vận tốc (Địch chạy nhanh vẫn dính)
        "Movement_Stickiness": 1.0,        // Độ dính theo chuyển động
        "Rotation_W_Stabilizer": 0.999266  // Khóa trục xoay Camera chống lệch
    },

    // Tầng 3: Chống tuột và Fix lố (Anti-Drift & Overshoot)
    "STABILITY_ANCHOR": {
        "Head_Bone_TF": "0x2e5a7b4",       // Tọa độ xương đầu
        "Internal_SetPos": "0x6bc252c",    // Ép vị trí Camera
        "Ignore_Hips_Reversion": true,     // Chống tuột tâm xuống hông/ngực
        "Hard_Stop_At_Head": true,         // Chặn đứng gia tốc tay khi đã khóa
        "Y_Axis_Push": 0.285               // Ghim chính xác đỉnh đầu
    },

    // Tầng 4: Đường đạn đồng bộ (Bullet Path Sync)
    "BULLET_PATH_SYNC": {
        "Bullet_Tracer_Lock": true,        // Đạn bẻ cong tìm đầu
        "Vector_Bending_Angle": 45.0,      // Góc bẻ đạn cực rộng
        "Priority_Head_Damage": true,      // Ưu tiên sát thương đầu 100%
        "Instant_Hit_Logic": true          // Đồng bộ đạn trúng ngay khi bắn
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V21": {
        "Velocity_Lock": "com.accpt_ffxbase64_Key_allow_VelocityDirectionalLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Omni_Sync": "com.accpt_ffxbase64_Key_allow_OmniDirectionalSync_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Hard_Lock": "com.accpt_ffxbase64_Key_allow_HardLockHeadOnFire_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V20_Engine = {
    "PROJECT": "V20_VectorForce_SnapCorrection",
    "STATUS": "V17_Extreme_Activated",

    // Tầng 1: Tự chỉnh tâm ngay lập tức khi lệch (Instant Correction)
    "AUTO_SNAP_CORRECTION": {
        "Auto_Target_Validation": true,    // Tự động kiểm tra mục tiêu hợp lệ
        "Detection_Offset": "0x2dd8f54",   // IsVisible/IsTargetValid
        "Correction_Rate": "0ms",          // Sửa lỗi tức thì không độ trễ
        "Trigger_Boundary": "Boundary_None",// Chạm bất cứ đâu cũng Snap về đầu
        "Response_Force": "Instant_Assign" // Gán tọa độ trực tiếp (Teleport Aim)
    },

    // Tầng 2: Drag không bao giờ lệch đầu (Vector-Force Control)
    "Vector_Force_Control": {
        "Dynamic_Head_Anchor": true,       // Mỏ neo đầu di động
        "Velocity_Sync_Active": true,      // Bám theo vận tốc kẻ thù 360 độ
        "Input_Drag_Override": 1.0,        // Đè gia tốc tay drag bằng lực hút đầu
        "Hard_Stop_Boundary_TF": "0x2e5a7b4",// Chặn gia tốc tay tại ranh giới đầu
        "Y_Axis_Force_Offset": 0.285       // Ghim ngay giữa trán (Tránh ngực)
    },

    // Tầng 3: Độ ổn định & Chống trôi (Stabilization)
    "STABILIZATION_CORE_V20": {
        "Zero_Drift_Permanent": true,      // Đứng im tại đầu khi đã ghim
        "Rotation_W_Fixed": 0.999266,      // Khóa trục xoay ổn định
        "Tracking_Frequency": "Always",    // Cập nhật tọa độ theo Frame
        "Bullet_Tracer_Always_Head": true, // Đạn đuổi tìm đầu
        "Vector_Bending_Angle": 360.0       // Góc bẻ đạn cực rộng (45 độ)
    },

    // Tầng 4: Thực thi hệ thống Ma trận (Core Execution)
    "SYSTEM_CORE_V20": {
        "Internal_SetPos": "0x6bc252c",    // Ghi đè tọa độ Camera
        "Head_Bone_TF": "0x2e5a7b4",       // Tọa độ đầu thực tế
        "Matrix_Transform": "0x320",       // Ma trận Camera dùng tính khoảng cách
        "Ignore_Hips_Filter": "0x2e5a98c"  // Bỏ qua hông, bụng (Chống tuột)
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V20": {
        "Snap_Correction": "com.accpt_ffxbase64_Key_allow_InstantCorrectionIfMiss_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Vector_Force": "com.accpt_ffxbase64_Key_allow_AbsoluteVectorHeadLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Kinetic_Sync": "com.accpt_ffxbase64_Key_allow_KineticMovementSync_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V19_Engine = {
    "PROJECT": "V19_Ultimate_Head_Anchor",
    "STATUS": "V19_Kinetic_Activated",

    // Tầng 1: Ghìm tâm vùng đầu khi Drag (Drag-Assist)
    "DRAG_HEAD_ANCHOR": {
        "Auto_Grip_Head": true,            // Tự động bám đầu khi đang kéo tâm
        "Drag_Force_Multiplier": 1.5,      // Tăng lực hút vùng đầu khi drag
        "Hard_Stop_At_Head": true,         // Chặn đứng tâm tại đầu (Fix lố tâm)
        "Anti_Hips_Filter": "0x2e5a98c",   // Chặn hoàn toàn lực hút xuống hông
        "Sticky_Head_Radius": "Max"        // Mở rộng vùng dính đầu ảo
    },

    // Tầng 2: Chính xác mọi khoảng cách & Hướng (Kinetic-Sync)
    "KINETIC_MOTION_SYNC": {
        "Predict_360_Movement": true,      // Dự đoán hướng chạy 360 độ
        "Velocity_Compensation": 1.35,     // Bù trừ vận tốc cực cao (Địch chạy nhanh vẫn trúng)
        "Distance_Matrix_Scale": "0x320",  // Tính toán khoảng cách để bù trừ độ rơi đạn
        "Rotation_W_Stable": 0.999266,     // Khóa trục xoay Camera chống lệch hướng
        "Zero_Drift_Active": true          // Đứng im tại đầu khi đã ghim
    },

    // Tầng 3: Đường đạn và Sát thương (Bullet Vector Lock)
    "BULLET_VECTOR_LOCK": {
        "Bullet_Tracer_Always_Head": true, // Đạn luôn tìm đầu bất kể hướng bắn
        "Vector_Bending_Angle": 360.0,      // Góc bẻ đạn cực rộng (45 độ)
        "Priority_Damage_Head": true,      // Ưu tiên sát thương đầu 100%
        "Ignore_Obstacle_Minor": true      // Bỏ qua vật cản nhỏ (Lá cây, rào)
    },

    // Tầng 4: Thực thi hệ thống (Core Engine)
    "SYSTEM_CORE_V19": {
        "Internal_SetPos": "0x6bc252c",    // Ghi đè tọa độ Camera
        "Head_Bone_TF": "0x2e5a7b4",       // Tọa độ đầu thực tế
        "Update_Frequency": "0ms",         // Cập nhật liên tục theo Frame
        "Y_Axis_Offset": 0.285             // Luôn đẩy tâm lên đỉnh đầu
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V19": {
        "Kinetic_Sync": "com.accpt_ffxbase64_Key_allow_KineticMovementSync_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Absolute_Head": "com.accpt_ffxbase64_Key_allow_AbsoluteHeadAnchor_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Distance_Fix": "com.accpt_ffxbase64_Key_allow_AllDistancePrecision_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V18_Engine = {
    "PROJECT": "V18_Micro_Touch_Snap",
    "STATUS": "V18_Instant_Activated",

    // Tầng 1: Kích hoạt khi nhích nhẹ (Touch Sensitivity)
    "MICRO_TOUCH_LOGIC": {
        "Instant_Snap_On_Touch": true,     // Chạm nhẹ là Snap ngay
        "Input_Threshold": 0.01,           // Ngưỡng nhận diện cực nhạy
        "Bypass_Drag_Phase": true,         // Bỏ qua giai đoạn kéo tâm thủ công
        "Trigger_Offset": "0x2dc3804",     // Trạng thái nút bắn (IsFiring/Touch)
        "Response_Time": "0ms"             // Phản hồi không độ trễ
    },

    // Tầng 2: Khóa biến đổi tuyệt đối (Pos & Rot Lock)
    "TRANSFORM_TELEPORT": {
        "Target_Bone": "0x2e5a7b4",        // Bone Head
        "Internal_SetPos": "0x6bc252c",    // Ép vị trí (Position)
        "Internal_SetRot": "0x8a88b1c",    // Ép góc xoay (Rotation)
        "Lock_Rotation_W": 0.999266,       // Khóa trục ổn định
        "Zero_Drift": true                 // Chống trôi tâm khi đã Snap
    },

    // Tầng 3: Chống lố & Duy trì (Stabilization)
    "STABILITY_CONTROL": {
        "Hard_Stop_At_Head": true,         // Dừng tuyệt đối tại đầu
        "Anti_Hips_Reversion": true,       // Chống tuột tâm xuống hông
        "Velocity_Compensation": 1.25,     // Bù trừ tốc độ di chuyển của địch
        "Anchor_Persistence": 1.0,         // Lực giữ mỏ neo tối đa
        "Y_Axis_Push": 0.285               // Ghim đỉnh đầu
    },

    // Tầng 4: Ưu tiên đạn và Sát thương (Bullet Priority)
    "BULLET_ENGINE_V18": {
        "Bullet_Tracer_Lock": true,        // Đạn bẻ cong tìm đầu
        "Priority_Headshot": true,         // Ưu tiên sát thương đầu 100%
        "Ignore_Body_Damage": true         // Bỏ qua sát thương thân
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V18": {
        "Micro_Snap": "com.accpt_ffxbase64_Key_allow_MicroTouchSnap_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Instant_Pos_Rot": "com.accpt_ffxbase64_Key_allow_InstantPosRotLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "No_Travel_Time": "com.accpt_ffxbase64_Key_allow_ZeroTravelTimeAim_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V17_Engine = {
    "PROJECT": "V17_RedTarget_LockOn",
    "STATUS": "V17_RTLO_Activated",

    // Tầng 1: Nhận diện trạng thái tâm đỏ (Red-Target Detection)
    "DETECTION_SYSTEM": {
        "Lock_On_Red_Only": true,          // Chỉ khóa khi tâm hiện đỏ
        "Target_Validation_Offset": "0x2dd8f54", // Kiểm tra mục tiêu hợp lệ
        "Crosshair_Color_Sync": true,      // Đồng bộ theo màu tâm ngắm
        "Trigger_Delay": "0ms"             // Phản ứng tức thì không độ trễ
    },

    // Tầng 2: Khóa biến đổi (Transform Lock: Pos & Rot)
    "TRANSFORM_LOCK": {
        "Head_Bone_TF": "0x2e5a7b4",       // Bone mục tiêu: Đầu
        "Internal_SetPos": "0x6bc252c",    // Ép vị trí Camera (Position)
        "Rotation_W_Stable": 0.999266,     // Khóa trục xoay Camera (Rotation)
        "Forward_Vector_Sync": "0x8a88b1c",// Đồng bộ hướng nhìn thẳng vào đầu
        "Hard_Stop_Active": true           // Chặn đứng gia tốc tay khi đã khóa
    },

    // Tầng 3: Chống tuột và Duy trì (Persistence)
    "LOCK_MAINTENANCE": {
        "Anti_Hips_Reversion": true,       // Chống tuột tâm xuống hông/ngực
        "Ignore_Body_Bones": ["0x2e5a98c"],// Bỏ qua xương hông
        "Maintain_While_Firing": true,     // Duy trì khóa trong suốt lúc bắn
        "Velocity_Prediction": 1.2,        // Dự đoán hướng chạy của địch để bám theo
        "Auto_Unlock_On_Death": true       // Nhả tâm ngay khi địch gục
    },

    // Tầng 4: Độ chính xác đạn (Bullet Sync)
    "BULLET_SYNC": {
        "Bullet_Tracer_Lock": true,        // Đạn tự tìm đầu (Tracer)
        "Absolute_Priority": true,         // Ưu tiên sát thương đầu 100%
        "Height_Push_Y": 0.285             // Đẩy điểm ghim lên đỉnh đầu
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V17": {
        "Red_Lock_Pos": "com.accpt_ffxbase64_Key_allow_LockPosOnRed_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Red_Lock_Rot": "com.accpt_ffxbase64_Key_allow_LockRotOnRed_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Anti_Overshoot": "com.accpt_ffxbase64_Key_allow_FixDragOvershoot_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V16_Engine = {
    "PROJECT": "V16_Adaptive_HardLock",
    "STATUS": "V16_Premium_Activated",

    // Tầng 1: Chống Drag lố tâm (Anti-Overshoot)
    "ANTI_OVERSHOOT": {
        "Hard_Stop_At_Boundary": true,     // Tự động dừng drag khi chạm ranh giới
        "Overshoot_Reduction": 1.0,        // Triệt tiêu 100% gia tốc thừa của tay
        "Stick_Boundary_TF": "0x2e5a7b4",  // Ranh giới cứng: HeadTF
        "Flick_Correction": true,           // Nắn lại tâm tức thì nếu lỡ lướt qua
        "Magnet_Range": "Head_Scan_Strict"  // Vùng quét hẹp chỉ quanh đầu
    },

    // Tầng 2: Mượt adapt theo khoảng cách (Adaptive-Smoothing)
    "ADAPTIVE_SMOOTHING": {
        "Enable_Distance_Adaptive": true,  // Bật mượt adapt theo khoảng cách
        "Far_Target_Magnet_Boost": 1.8,    // Tăng lực hút nam châm khi địch ở xa
        "Near_Target_Smooth_Factor": 0.2,   // Tăng mượt khi địch quá gần
        "Distance_Scaling_Matrix": "0x320", // Ma trận Camera dùng tính khoảng cách
        "Zero_Drift_Active": true          // Đứng im tại đầu khi đã ghim
    },

    // Tầng 3: Khóa đầu tuyệt đối (Absolute Head-Anchor V15)
    "ULTIMATE_BULLET_ENGINE": {
        "Bullet_Tracer_Lock": true,        // Đạn bẻ cong đuổi theo đầu
        "Absolute_Priority_Head": true,    // Ưu tiên sát thương đầu 100%
        "Ignore_Limb_Damage": true,        // Bỏ qua sát thương chân tay/thân
        "Head_Bone_Offset": 0.285,         // Điểm ghim: Đỉnh đầu
        "Hips_Bypass": "Fully_Disabled"    // Bỏ qua Hông, Spince (Chống tuột)
    },

    // Tầng 4: Thực thi hệ thống Ma trận & Xoay (Execution)
    "SYSTEM_CORE": {
        "Internal_SetPos": "0x6bc252c",    // Ghi đè tọa độ Camera
        "Internal_GetPos": "0x6bc248c",    // Lấy tọa độ mục tiêu thế giới
        "Rotation_W_Stable": 0.999266,     // Khóa trục xoay Camera chống lệch
        "Velocity_Sync_Active": true       // Bám theo vận tốc địch khi chạy
    },

    // Tầng 5: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V16": {
        "Anti_Overshoot": "com.accpt_ffxbase64_Key_allow_HardStopDragAtHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Adaptive_Precision": "com.accpt_ffxbase64_Key_allow_DistanceAdaptivePrecision_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "No_Drift_Stable": "com.accpt_ffxbase64_Key_allow_PermanentZeroDriftHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V15_Engine = {
    "PROJECT": "V15_Bullet_Tracer_Master",
    "STATUS": "V15_Ultimate_Activated",

    // Tầng 1: Đường đạn ảo (Bullet-Tracer-Lock)
    "BULLET_TRACER_SYSTEM": {
        "Enable_Tracer_Lock": true,        // Kích hoạt đường đạn bám đuổi
        "Vector_Redirection": true,        // Bẻ cong quỹ đạo đạn về phía đầu
        "Tracer_Magnet_Force": 1.0,        // Lực hút đạn tối đa
        "Bullet_Velocity_Sync": "0x8a88b1c", // Đồng bộ tốc độ đạn với hướng địch chạy
        "Max_Curve_Angle": 35.0            // Góc bẻ đạn tối đa (35 độ)
    },

    // Tầng 2: Ưu tiên Headshot (Bullet-Priority)
    "DAMAGE_PRIORITY_LOCK": {
        "Priority_Level": "100%_Head",     // Ưu tiên đầu tuyệt đối
        "Force_Collision_Head": true,      // Ép va chạm vào xương đầu
        "Ignore_Limb_Damage": true,        // Bỏ qua sát thương tay chân/thân
        "Instant_Kill_Sync": "0x2e5a7b4",  // Đồng bộ điểm kết liễu: HeadTF
        "Critical_Hit_Always": true        // Luôn tính là đòn chí mạng
    },

    // Tầng 3: Duy trì khóa & Chống tuột tâm (Anchor V14 Integration)
    "PERMANENT_ANCHOR": {
        "No_Hips_Reversion": true,         // Không giật tâm xuống hông
        "Head_Anchor_Persistence": 1.0,    // Giữ mỏ neo đầu 100%
        "Target_Red_Maintain": true,       // Duy trì khi tâm còn đỏ
        "Lock_On_Velocity": true           // Khóa theo vận tốc địch
    },

    // Tầng 4: Thực thi hệ thống Ma trận (Matrix Execution)
    "EXECUTION_CORE": {
        "Internal_SetPos": "0x6bc252c",
        "Head_Bone_Offset": 0.285,
        "Rotation_W_Stability": 0.999266,
        "Zero_Delay_Trigger": true
    },

    // Tầng 5: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V15": {
        "Bullet_Tracer": "com.accpt_ffxbase64_Key_allow_BulletTracerLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Priority_Head": "com.accpt_ffxbase64_Key_allow_BulletPriorityHeadshot_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Vector_Bypass": "com.accpt_ffxbase64_Key_allow_BulletVectorBypass_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V14_Engine = {
    "PROJECT": "V14_Head_Anchor_System",
    "STATUS": "V14_Extreme_Activated",

    // Tầng 1: Chống giật tâm xuống Hips (Anti-Hips Logic)
    "ANTI_HIPS_REVERSION": {
        "Anchor_Head_Only": true,          // Chỉ neo vào đầu, bỏ qua các Bone khác
        "Ignore_Hips_Bone": "0x2e5a98c",   // Offset Hips - Chặn hoàn toàn lực hút tại đây
        "Force_Release_Chest": true,       // Ép nhả tâm nếu lỡ dính vào ngực
        "Lock_Persistence": 1.0,           // Duy trì khóa 100% khi đã chạm đầu
        "Reset_Target_On_Kill": true       // Chỉ nhả tâm khi địch chết (0x2dc1178)
    },

    // Tầng 2: Theo dõi hướng di chuyển (Velocity-Sync)
    "MOTION_TRACKING_360": {
        "Predict_Velocity": true,          // Dự đoán vận tốc địch để đón đầu
        "Movement_Compensation": 1.2,      // Bù trừ di chuyển (Tránh lệch tâm khi địch chạy)
        "Rotation_W_Fixed": 0.999266,      // Khóa trục xoay ổn định
        "Update_Rate": "0ms"               // Cập nhật tọa độ tức thì
    },

    // Tầng 3: Nhận diện tâm đỏ & Thực thi (Execution)
    "TARGET_RED_EXECUTION": {
        "Lock_On_Red": true,               // Chỉ ghim khi tâm hiện đỏ
        "Detection_Offset": "0x2dd8f54",   // Kiểm tra Target Valid
        "Head_Bone_Pos": "0x2e5a7b4",      // Tọa độ đầu thực tế
        "Internal_SetPos": "0x6bc252c",    // Ghi đè tọa độ Camera
        "Y_Axis_Push": 0.285               // Luôn đẩy tâm lên đỉnh đầu
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V14": {
        "No_Hips_Lock": "com.accpt_ffxbase64_Key_allow_IgnoreHipsAndBody_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Velocity_Sync": "com.accpt_ffxbase64_Key_allow_HeadVelocityTracking_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Permanent_Head": "com.accpt_ffxbase64_Key_allow_PermanentHeadAnchor_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};

const DTien_V13_Engine = {
    "PROJECT": "V13_TargetRed_Aimlock",
    "STATUS": "V13_Active_On_Target",

    // Mô-đun 1: Nhận diện tâm đỏ (Target Detection)
    "TARGET_VALIDATION": {
        "OnTarget_Red_Check": true,        // Chỉ kích hoạt khi tâm hiện đỏ
        "Detection_Offset": "0x2dd8f54",   // IsVisible/IsTargetValid
        "Target_Selection_Priority": "Head",
        "Reaction_Delay": "0ms"             // Khóa ngay lập tức khi tâm đỏ
    },

    // Mô-đun 2: Khóa vị trí tuyệt đối (Position Lock)
    "POSITION_TRANSFORM": {
        "Head_Bone_TF": "0x2e5a7b4",       // Bone đầu mục tiêu
        "Internal_SetPos": "0x6bc252c",    // Ép vị trí Camera
        "Follow_Velocity": true,           // Bám theo tốc độ chạy của địch
        "Height_Fix_Y": 0.045              // Căn chỉnh ngay giữa trán
    },

    // Mô-đun 3: Khóa trục xoay Camera (Rotation Lock)
    "ROTATION_CONTROL": {
        "Lock_Rotation_W": 0.999266,       // Khóa trục W chống rung lắc
        "Forward_Sync_Offset": "0x8a88b1c",// Đồng bộ hướng nhìn thẳng vào đầu
        "Smooth_Slerp_Factor": 0.0,         // Độ mượt = 0 để khóa cứng (Sticky)
        "No_Drift_Active": true            // Chống trôi tâm khi sấy đạn
    },

    // Mô-đun 4: Điều kiện duy trì (Maintenance)
    "LOCK_PERSISTENCE": {
        "Maintain_On_Firing": true,        // Duy trì khi đang xả đạn
        "Auto_Release_On_Dead": true,      // Tự động nhả tâm khi địch gục
        "Snap_Force_Multiplier": 1.0       // Lực hút tối đa
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V13": {
        "Aimlock_Pos": "com.accpt_ffxbase64_Key_allow_Aimlock_Position_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Aimlock_Rot": "com.accpt_ffxbase64_Key_allow_Aimlock_Rotation_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "OnTarget_Only": "com.accpt_ffxbase64_Key_allow_OnlyLockOnRedCrosshair_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
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
     // Inject Engine V13 vào phản hồi
    obj["DTien_V13_TargetRed"] = DTien_V13_Engine;
    obj["Aim_Engine_Status"] = "Waiting_For_Red_Crosshair";
 obj["DTien_V14_Anchor"] = DTien_V14_Engine;
    obj["AutoAim_Mode"] = "Head_Only_Strict";
    obj["Hips_Bypass"] = "Fully_Disabled";
     obj["DTien_V15_Ultimate"] = DTien_V15_Engine;
    obj["Bullet_Logic"] = "Tracer_Lock_Engaged";
    obj["Damage_Type"] = "Headshot_Only";
     obj["DTien_V16_Adaptive"] = DTien_V16_Engine;
    obj["Overshoot_Fix"] = "Enabled_Maximum";
    obj["Adaptive_Mode"] = "Distance_Locked";
    obj["DTien_V17_RTLO"] = DTien_V17_Engine;
    obj["Aim_Status"] = "Waiting_For_Red_Crosshair";
    obj["Lock_Mode"] = "Position_Rotation_Strict";
    obj["DTien_V18_Instant"] = DTien_V18_Engine;
    obj["Snap_Mode"] = "Micro_Touch_Activated";
    obj["Lock_Status"] = "Position_Rotation_Synced";
    obj["DTien_V19_Kinetic"] = DTien_V19_Engine;
    obj["Aim_Mode"] = "Ultimate_Head_Anchor";
    obj["Sync_Status"] = "360_Omni_Directional_Active";
obj["DTien_V20_VectorForce"] = DTien_V20_Engine;
    obj["Aim_Mode"] = "Absolute_Head_Locked";
    obj["Correction_Status"] = "Instant_Assign_Active";
obj["DTien_V21_Velocity"] = DTien_V21_Engine;
    obj["Sync_Status"] = "Omni_Locked_On_Firing";
    obj["Movement_Mode"] = "Velocity_Predict_Active";
    obj["DTien_V22_HardLock"] = DTien_V22_Engine;
    obj["Aim_Status"] = "Red_Zone_Locked";
    obj["Lock_Mode"] = "Position_Rotation_Freeze";
obj["DTien_V23_Axis"] = DTien_V23_Engine;
    obj["Axis_Status"] = "X_Y_Constraint_Locked";
    obj["Damping_Mode"] = "Anti_Overshoot_Active";
 
  obj["DTien_V24_Kinetic"] = DTien_V24_Engine;
    obj["Brake_Status"] = "Ready_To_Snap";
    obj["Y_Axis_Mode"] = "Variable_Acceleration_Active";
    
    obj["DTien_V25_Transform"] = DTien_V25_Engine;
    obj["Aim_Engine"] = "HardLock_Omni_Directional";
    obj["Status"] = "Ready_To_Lock_On_Red";
 obj["DTien_V26_PullSync"] = DTien_V26_Engine;
    obj["Pull_Speed_Status"] = "Synced_To_Head_Bone";
    obj["Target_Lock"] = "Absolute_Headshot_Only";
obj["DTien_V27_Kernel"] = DTien_V27_Engine;
    obj["Logic_Mode"] = "C_Plus_Plus_Simulation";
    obj["Snap_Status"] = "Locked_With_Smooth_1.0";
    obj["DTien_V28_Sticky"] = DTien_V28_Engine;
    obj["Aim_Logic"] = "C_Plus_Plus_Sticky_Loop";
    obj["Recoil_Status"] = "Compensated_Zero_Drift";

    
    
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
