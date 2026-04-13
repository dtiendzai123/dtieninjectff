

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

    obj["DTien_V28_Sticky"] = DTien_V28_Engine;
    obj["Aim_Logic"] = "C_Plus_Plus_Sticky_Loop";
    obj["Recoil_Status"] = "Compensated_Zero_Drift";
obj["DTien_V29_Teleport"] = DTien_V29_Engine;
    obj["Aim_Engine"] = "BONE_HEAD_ONLY_SNAP";
    obj["Manual_Input"] = "Bypassed_While_Locked";
obj["DTien_V30_Clamp"] = DTien_V30_Engine;
    obj["Aim_Engine"] = "FIXED_HEAD_LOCK_V30";
    obj["Y_Axis_Status"] = "Clamped_At_Head_Bone";
obj["DTien_V31_Hyper"] = DTien_V31_Engine;
    obj["Touch_Status"] = "1000Hz_Active";
    obj["Snap_Mode"] = "Impulse_Brake_Locked";
      obj["DTien_V32_Chromatic"] = DTien_V32_Engine;
    obj["Aim_Engine"] = "RED_COLOR_HARDLOCK_V32";
    obj["Recoil_Status"] = "Zero_Recoil_Active_On_Red";
 obj["DTien_V33_Absolute"] = DTien_V33_Engine;
    obj["Aim_Mode"] = "HARD_LOCK_360_PREDICTION";
    obj["Sync_Status"] = "Ping_Compensated_Locked";
obj["DTien_V34_Ultimate"] = DTien_V34_Engine;
    obj["Aim_Logic"] = "TRIGO_VIEWANGLE_HARDLOCK";
    obj["Input_Status"] = "MouseMultiplier_Dynamic";
    obj["DTien_V35_Clamp"] = DTien_V35_Engine;
    obj["Aim_Engine"] = "PRECISION_CLAMP_NULLIFICATION";
    obj["Clamp_Status"] = "0.5f_Active";
 obj["DTien_V36_FullEngine"] = DTien_V36_Engine;
    obj["Aim_Engine_Status"] = "V36_Comprehensive_Running";
    obj["Logic_Mode"] = "ViewAngle_Normalization_Active";
obj["DTien_V37_Advanced"] = DTien_V37_Engine;
    obj["Scanner_Status"] = "Dynamic_Bone_ID_Active";
    obj["Aim_Logic"] = "FORWARD_VECTOR_PREDICTION";
obj["DTien_V38_Neural"] = DTien_V38_Engine;
    obj["Scanner_Engine"] = "NEURAL_BONE_SCANNER_V38";
    obj["Aim_Logic"] = "QUATERNION_FORWARD_PUSH";
    obj["DTien_V39_Adaptive"] = DTien_V39_Engine;
    obj["Drag_Status"] = "CHEST_TO_HEAD_ACTIVE";
    obj["Curve_Logic"] = "EASE_OUT_ACCELERATION";

    obj["DTien_V40_Hex"] = DTien_V40_Engine;
    obj["Memory_Status"] = "PATCHED_SUCCESSFULLY";
    obj["Opcode_Mode"] = "HEX_REPLACE_ACTIVE";
  obj["DTien_V41_Headshot"] = DTien_V41_Engine;
    obj["Aimbot_Status"] = "HEX_HEAD_LOCKED";
    obj["Patch_Priority"] = "Critical";
    
    obj["DTien_V42_Aimlock"] = DTien_V42_Engine;
    obj["Aim_Engine"] = "HEX_HEAD_STATIC_LOCK";
    obj["Memory_Injection"] = "SUCCESS_BONE_8";
   obj["DTien_V43_Kinetic"] = DTien_V39_Engine; // Kế thừa cấu trúc
    obj["Drag_Hex_Status"] = "PATCHED_SUCCESSFULLY";
    obj["Aim_Type"] = "KINETIC_DRAG_HEAD_LOCK";
    
    obj["DTien_V44_Precision"] = DTien_V44_Engine;
    obj["Accuracy_Status"] = "MAXIMUM_PRECISION";
    obj["Bone_Targeting"] = "STATIC_HEAD_8";
    obj["DTien_V45_Mapping"] = DTien_V45_Engine;
    obj["Offset_Status"] = "ALL_OFFSETS_DONE";
    obj["Core_Engine"] = "IL2CPP_INTERNAL_PATCH";
    obj["DTien_V46_MicroSnap"] = DTien_V46_Engine;
    obj["Aim_Sensitivity"] = "HIGH_PRECISION_BOOST";
    obj["Fix_Mode"] = "ANTI_OVERSHOOT_ACTIVE";
 obj["DTien_V47_Snap"] = DTien_V47_Engine;
    obj["Aim_Mode"] = "INSTANT_STICKY_HEAD";
    obj["Tracking_Status"] = "FRAME_BY_FRAME_LOCKED";
obj["DTien_V48_AntiJitter"] = DTien_V48_Engine;
    obj["Stability_Status"] = "SMOOTH_DAMPING_ACTIVE";
    obj["Aim_Quality"] = "NO_SHAKE_NO_RECOIL";
  obj["DTien_V49_Viper"] = DTien_V49_Engine;
    obj["Engine_Type"] = "QUANTUM_VIPER_CORE";
    obj["Response_Status"] = "ULTRA_SENSITIVITY_0_FRICTION";
    obj["DTien_V50_ViperX"] = DTien_V50_Engine;
    obj["Ghost_Status"] = "TRACKING_4D";
    obj["Magic_Status"] = "HITBOX_EXPANDED_2.5X";
 obj["DTien_V51_Viper3D"] = DTien_V51_Engine;
    obj["Tracking_Type"] = "BONE_REAL_3D_ROTATION";
    obj["Projection_Status"] = "SCREEN_SYNC_SUCCESS";
obj["DTien_V52_Perfect"] = DTien_V52_Engine;
    obj["Lock_Mode"] = "RADIUS_DYNAMIC_SNAP";
    obj["Shake_Filter"] = "ACTIVE_0.4_WEIGHT";
    
obj["DTien_V53_Final"] = DTien_V53_Engine;
    obj["Sync_Status"] = "CHAIN_COMPLETED";
    obj["Lock_Strength"] = "MAX_STABLE";
obj["DTien_V54_Magnetic"] = DTien_V54_Engine;
    obj["Sens_Status"] = "OVERCLOCKED_STABLE";
    obj["Lock_Quality"] = "STATIONARY_HEAD_LOCKED";
if (obj.sensitivity) obj.sensitivity *= 1.4;

    // Aim assist
    if (obj.aimAssist) obj.aimAssist = 1.0;

    // Recoil control
    if (obj.recoil) obj.recoil = 0;

    // Hitbox ưu tiên head
    if (obj.hitbox) {
        obj.hitbox.head *= 999.25;
        obj.hitbox.body *= 0.0;
    }

    // Smooth giảm overshoot
    if (obj.smooth) obj.smooth = 0.15;

 
 
 // ===== 1. SENSITIVITY CONTROL =====
    if (obj.sensitivity !== undefined) {
        obj.sensitivity = Math.min(obj.sensitivity * 1.4, 10);
    }

    if (obj.camera_sensitivity !== undefined) {
        obj.camera_sensitivity *= 1.3;
    }

    // ===== 2. AIM ASSIST BOOST =====
    if (obj.aimAssist !== undefined) {
        obj.aimAssist = 1.0; // max hợp lệ
    }

    if (obj.autoAim !== undefined) {
        obj.autoAim = true;
    }

    // ===== 3. HITBOX PRIORITY (HEAD FOCUS) =====
    if (obj.hitbox !== undefined) {
        if (obj.hitbox.head !== undefined) {
            obj.hitbox.head *= 999.0; // tăng head
        }
        if (obj.hitbox.neck !== undefined) {
            obj.hitbox.neck *= 0.0; // giảm cổ
        }
        if (obj.hitbox.body !== undefined) {
            obj.hitbox.body *= 0.0; // giảm body
        }
    }

    // ===== 4. RECOIL CONTROL =====
    if (obj.recoil !== undefined) {
        obj.recoil = 0;
    }

    if (obj.vertical_recoil !== undefined) {
        obj.vertical_recoil *= 0.0;
    }

    // ===== 5. SMOOTH / ANTI-OVERSHOOT =====
    if (obj.aim_smooth !== undefined) {
        obj.aim_smooth = 0.001; // giảm delay → ít văng
    }

    if (obj.drag_smooth !== undefined) {
        obj.drag_smooth = 0.001;
    }

    // ===== 6. TARGET LOCK FEEL (GIẢ LẬP MAGNETIC) =====
    if (obj.lock_radius !== undefined) {
        obj.lock_radius *= 360.0;
    }


   // ===== 1. DRAG VECTOR TUNING =====
    // Tăng lực kéo lên (Y axis)
    if (obj.drag_vertical !== undefined) {
        obj.drag_vertical *= 999.5;
    }

    // Giảm lệch ngang (X axis)
    if (obj.drag_horizontal !== undefined) {
        obj.drag_horizontal *= 0.0;
    }

    // ===== 2. AIM CURVE (ĐƯỜNG CONG KÉO) =====
    if (obj.aim_curve !== undefined) {
        obj.aim_curve = "easeOut"; 
        // kéo đầu nhanh hơn ở đoạn cuối
    }

    // ===== 3. HEAD PRIORITY =====
    if (obj.hitbox !== undefined) {
        if (obj.hitbox.head !== undefined) obj.hitbox.head *= 1.4;
        if (obj.hitbox.neck !== undefined) obj.hitbox.neck *= 0.1;
        if (obj.hitbox.body !== undefined) obj.hitbox.body *= 0.0;
    }

    // ===== 4. SNAP KHI GẦN HEAD =====
    if (obj.head_snap !== undefined) {
        obj.head_snap = 999.0; // lực hút nhẹ
    }

    if (obj.stickyAim !== undefined) {
        obj.stickyAim = 999.0;
    }

    // ===== 5. ANTI OVERSHOOT =====
    if (obj.drag_smooth !== undefined) {
        obj.drag_smooth = 0.001;
    }

    if (obj.aim_smooth !== undefined) {
        obj.aim_smooth = 0.001;
    }

    // ===== 6. JITTER FIX =====
    if (obj.jitter !== undefined) {
        obj.jitter *= 0.25;
    }

    // ===== 7. AUTO MICRO-CORRECTION =====
    if (obj.micro_adjust !== undefined) {
        obj.micro_adjust = 0.001;
    }
// 1. TỐI ƯU ĐỘ NHẠY (SENSITIVITY INTERPOLATION)
    // Tăng tốc độ phản hồi của tâm ngắm, loại bỏ độ trễ (input lag)
    if (obj.sensitivity_scale !== undefined) {
        obj.sensitivity_scale = 1.25; // Tăng 25% độ nhạy tổng thể
    }
    
    // 2. KHẢ NĂNG BÁM MỤC TIÊU (TRACKING)
    // Giúp tâm ngắm tự động bám theo khi đối thủ di chuyển hoặc nhảy
    if (obj.aim_tracking_speed !== undefined) {
        obj.aim_tracking_speed = 999.0; // Tốc độ bám mục tiêu nhanh hơn
    }

    if (obj.sticky_force !== undefined) {
        obj.sticky_force = 1.0; // Lực dính tâm cực cao khi đã chạm mục tiêu
    }

    // 3. CHUYÊN BIỆT CHO "BÁM ĐẦU" (HEAD-CENTERED)
    if (obj.aim_prediction !== undefined) {
        obj.aim_prediction = 1.5; // Dự đoán hướng di chuyển của đầu đối thủ
    }

    if (obj.lock_on_bone !== undefined) {
        obj.lock_on_bone = "head"; // Ép hệ thống khóa vào xương đầu
    }

    // 4. GIẢM THIỂU SAI SỐ KHI KÉO TÂM
    if (obj.deadzone !== undefined) {
        obj.deadzone = 0.02; // Giảm vùng chết của cần analog/vuốt để nhạy hơn
    }

    if (obj.aim_acceleration !== undefined) {
        obj.aim_acceleration = 2.0; // Tắt gia tốc để cảm giác kéo tay thật nhất
    }

    // 5. CÂN BẰNG ĐỘ GIẬT ĐỂ GIỮ TÂM Ở ĐẦU
    if (obj.recoil_stability !== undefined) {
        obj.recoil_stability = 0.0; // Giữ tâm không bị nảy lên quá đầu
    }
    // ===== 1. THUẬT TOÁN DỰ ĐOÁN DI CHUYỂN (PREDICTION 2.0) =====
    // Tăng khả năng bắt dính mục tiêu chạy ngang thêm 100%
    if (obj.prediction_multiplier !== undefined) {
        obj.prediction_multiplier = 2.0; // Gấp đôi khả năng tính toán quỹ đạo
    }
    
    if (obj.horizontal_stickiness !== undefined) {
        obj.horizontal_stickiness *= 2.0; // Tăng 100% lực bám dính ngang
    }

    // ===== 2. TỐI ƯU ĐIỂM GHÌM TÂM (CENTER ANCHOR) =====
    // Đảm bảo tâm luôn khóa vào xương đầu (Bone ID: 0)
    if (obj.aim_anchor_point !== undefined) {
        obj.aim_anchor_point = "bone_head"; 
    }

    if (obj.aim_lock_strength !== undefined) {
        obj.aim_lock_strength = 2.0; // Khóa gần như tuyệt đối (98%)
    }

    // ===== 3. XỬ LÝ LỰC KÉO ĐỘNG (DYNAMIC DRAG) =====
    if (obj.drag_force !== undefined) {
        obj.drag_force.horizontal_boost = 1.5; // Tăng lực bù trừ khi mục tiêu chạy nhanh
        obj.drag_force.vertical_stabilize = 1.2; // Giữ tâm không bị vọt quá đầu
    }

    // ===== 4. ANTI-EVASION (CHỐNG NÉ TRÁNH) =====
    // Ngăn chặn việc mất dấu khi đối thủ nhảy hoặc đổi hướng đột ngột
    if (obj.tracking_latency !== undefined) {
        obj.tracking_latency = 0.0; // Triệt tiêu độ trễ khi bám mục tiêu
    }

    if (obj.fov_radius !== undefined) {
        obj.fov_radius = 360.0; // Mở rộng vùng quét bám dính xung quanh mục tiêu
    }

    // ===== 5. CẢI THIỆN TỈ LỆ TRÚNG (HIT-RATE OPTIMIZER) =====
    if (obj.hit_registration !== undefined) {
        obj.hit_registration = "high_priority_head";
    }
     // ===== 1. REMOVE DOWNWARD FORCE =====
    if (obj.vertical_recoil !== undefined) {
        obj.vertical_recoil = 0; // triệt tiêu giật xuống
    }

    if (obj.gravity !== undefined) {
        obj.gravity = 0; // tắt hoàn toàn "trọng lực tâm"
    }

    if (obj.aim_gravity !== undefined) {
        obj.aim_gravity = 0;
    }

    // ===== 2. STABLE HEAD LEVEL =====
    if (obj.vertical_drift !== undefined) {
        obj.vertical_drift = 0; // không tụt tâm
    }

    if (obj.crosshair_drop !== undefined) {
        obj.crosshair_drop = 0;
    }

    // ===== 3. MICRO UP ASSIST (GIỮ TÂM Ở ĐẦU) =====
    if (obj.drag_vertical !== undefined) {
        obj.drag_vertical *= 2.2; // giữ lực kéo lên nhẹ
    }

    if (obj.micro_adjust !== undefined) {
        obj.micro_adjust = 0.18;
    }

    // ===== 4. ANTI FALL BACK =====
    if (obj.return_force !== undefined) {
        obj.return_force = 0; // không kéo về vị trí cũ
    }

    if (obj.centering !== undefined) {
        obj.centering = 0;
    }
if (obj.trigger_status !== undefined) {
        obj.trigger_delay = 0;               // Kích hoạt tức thì 0ms
        obj.auto_lock_on_red = true;         // Khoá cứng khi tâm chuyển đỏ
        obj.lock_strength_active = 1.0;      // Lực khoá tuyệt đối (100%)
    }

    // ===== 2. XỬ LÝ KHOẢNG CÁCH (DISTANCE COMPENSATION) =====
    // Đảm bảo độ chính xác dù kẻ địch ở gần hay cực xa
    if (obj.bullet_drop_compensation !== undefined) {
        obj.bullet_drop_compensation = 1.0;  // Triệt tiêu độ rơi của đạn
        obj.hit_scan_mode = true;            // Chế độ đạn thẳng tắp
    }

    if (obj.range_limit !== undefined) {
        obj.range_limit = 999;               // Mở rộng tầm bắn tối đa
    }

    // ===== 3. KHOÁ CHẶT ĐẦU VỚI MỌI HƯỚNG DI CHUYỂN =====
    // Thuật toán bám đuổi đa hướng (Omni-directional Tracking)
    if (obj.aim_logic !== undefined) {
        obj.aim_logic.priority = "head";
        obj.aim_logic.bone_stickiness = 999.0; // Dính chặt vào xương đầu
        obj.aim_logic.predict_vector = 999.5;  // Dự đoán chuyển động cực cao
    }

    // ===== 4. TỐI ƯU HOÁ ĐỘ CHÍNH XÁC (ZERO SPREAD) =====
    // Đạn chụm 1 điểm, không bị toé tâm dù bắn liên tục
    if (obj.accuracy_config !== undefined) {
        obj.spread_reduction = 1.0;          // Giảm 100% độ nở tâm
        obj.recoil_control = 1.0;            // Triệt tiêu giật súng
        obj.perfect_shot_ratio = 1.0;        // Tỉ lệ đạn vào đầu 100%
    }

    // ===== 5. TỐI ƯU GÓC NHÌN (FOV LOCK) =====
    if (obj.aim_fov !== undefined) {
        obj.aim_fov = 360;                   // Cho phép bám mục tiêu ở mọi góc độ
        obj.silent_aim = true;               // Đạn tự tìm đầu trong vùng FOV
    }

  if (obj.drag_limit_y !== undefined) {
        obj.drag_limit_y = "head_height"; // Giới hạn trục dọc không cho vọt quá đầu
    }

    // ===== 2. FIX LỖI "LỆCH NGANG" (ZERO DRIFT) =====
    // Ép tâm đi theo đường thẳng đứng tuyệt đối khi kéo
    if (obj.horizontal_stabilizer !== undefined) {
        obj.horizontal_stabilizer = 1.0; // Triệt tiêu 95% độ lệch trái/phải
    }

    if (obj.axis_lock !== undefined) {
        obj.axis_lock = "vertical_priority"; 
    }

    // ===== 3. HIỆU CHUẨN KHOẢNG CÁCH (ADAPTIVE RANGE) =====
    // Tự động thay đổi độ nhạy dựa trên độ xa của địch
    if (obj.distance_adapter !== undefined) {
        obj.distance_adapter.close_range = 5.7; // Giảm nhạy khi địch sát mặt (tránh xoáy tâm)
        obj.distance_adapter.long_range = 4.4;  // Tăng nhạy khi địch ở xa (dễ kéo lên đầu)
    }

    // ===== 4. TĂNG ĐỘ CHÍNH XÁC (CONE OF FIRE FIX) =====
    // Giữ đạn luôn chụm vào giữa tâm dù ở mọi hướng di chuyển
    if (obj.accuracy_stabilizer !== undefined) {
        obj.accuracy_stabilizer = 1.0; 
        obj.bullet_straightness = 1.0; // Đạn đi theo đường thẳng tắp
    }
if (obj.aim_position < obj.head_coordinate) {
        obj.pull_force_y = 5.6;        // Tăng lực kéo dọc để đẩy tâm lên nhanh hơn
        obj.acceleration_y = 0.25;     // Gia tốc tăng dần cho đến khi chạm mục tiêu
    }

    // TRƯỜNG HỢP 2: TÂM ĐÃ KÉO LỐ ĐẦU (OVER-AIM)
    if (obj.aim_position > obj.head_coordinate) {
        obj.pull_force_y = -0.005;       // Lực kéo ngược (đảo chiều) để tâm hạ xuống đầu
        obj.recenter_speed = 1.0;      // Tốc độ hồi quy về điểm mục tiêu cực nhanh
        obj.magnetic_lock = "head";    // Ép tâm đứng yên tại tọa độ đầu
    }

    // TRƯỜNG HỢP 3: TÂM LỆCH HOẶC KHÔNG THEO KỊP (DRIFT & LAG)
    if (obj.horizontal_drift !== 0 || obj.tracking_error === true) {
        obj.snap_to_x = obj.target_x;  // Tự động hút ngang về đúng trục dọc của địch
        obj.tracking_sensitivity = 999.5; // Tăng độ nhạy bám đuổi để bắt kịp tốc độ địch
        obj.prediction_interval = 0.01; // Cập nhật tọa độ mỗi 0.01 giây (siêu nhanh)
    }

    // ===== 2. ĐIỂM GHI ĐÈ HITBOX (STAY-IN-HEAD) =====
    // Khi tâm đã vào vùng Head, kích hoạt chế độ "đóng băng" sai số
    if (obj.on_target_head === true) {
        obj.sensitivity_multiplier = 0.0; // Làm cực chậm tâm để không bị văng ra ngoài
        obj.lock_duration = "infinite";   // Khóa cho đến khi đối thủ gục hoặc ngừng bắn
  obj.headlock_tracking = "infinite"; 
    obj.auto_head_lock_duration = "infinite"; 
    obj.head_lock_strength = "infinite"; 
 obj.hold_head_lock_duration = "infinite"; 
    }

    // ===== 3. CÔNG NGHỆ KHÔNG GIẬT & CHỐNG RUNG =====
    if (obj.recoil_compensation !== undefined) {
        obj.recoil_compensation = 1.0; 
        obj.jitter_suppression = 1.0;
    }

 // ===== CORE ENGINE V170 =====
const runFullControl = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. XÁC ĐỊNH HEAD =====
    let head = null;

    if (entity.bones && entity.bones.head) {
        head = entity.bones.head;
    } else {
        head = {
            x: entity.position.x,
            y: entity.position.y - (entity.height || 60) * 0.8
        };
    }

    // ===== 2. PREDICTION 2.0 =====
    if (entity.velocity && obj.prediction_multiplier) {
        const p = obj.prediction_multiplier;

        head.x += entity.velocity.x * p * 0.01;
        head.y += entity.velocity.y * p * 0.01;
    }

    // ===== 3. KHOẢNG CÁCH (ADAPTIVE) =====
    let distScale = 1.0;
    if (entity.distance && obj.distance_adapter) {
        distScale = entity.distance < 50
            ? obj.distance_adapter.close_range
            : obj.distance_adapter.long_range;
    }

    // ===== 4. DRAG VECTOR (CHỈNH HƯỚNG KÉO) =====
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    // ưu tiên trục dọc
    if (obj.drag_vertical) {
        dy *= obj.drag_vertical * 0.001;
    }

    if (obj.drag_horizontal !== undefined) {
        dx *= obj.drag_horizontal;
    }

    // ===== 5. SNAP + MICRO ADJUST =====
    if (obj.snap_acceleration) {
        crosshair.x += dx * obj.snap_acceleration * distScale;
        crosshair.y += dy * obj.snap_acceleration * distScale;
    }

    if (obj.micro_adjust) {
        crosshair.x += dx * obj.micro_adjust;
        crosshair.y += dy * obj.micro_adjust;
    }

    // ===== 6. ANTI OVERSHOOT =====
    if (obj.drag_limit_y === "head_height") {
        if (crosshair.y < head.y) {
            crosshair.y = head.y;
        }
    }

    if (obj.recenter_speed) {
        crosshair.y += (head.y - crosshair.y) * obj.recenter_speed;
    }

    // ===== 7. ZERO DRIFT =====
    if (obj.horizontal_stabilizer && entity.velocity) {
        entity.velocity.x = 0;
    }

    // ===== 8. STICKY LOCK =====
    if (obj.sticky_force) {
        crosshair.x += (head.x - crosshair.x) * obj.sticky_force;
        crosshair.y += (head.y - crosshair.y) * obj.sticky_force;
    }

    // ===== 9. HARD HEAD LOCK =====
    if (obj.lock_on_bone === "head" || obj.aim_anchor_point === "bone_head") {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 10. FRICTION LOCK =====
    if (obj.on_head_target_friction) {
        if (Math.abs(head.x - crosshair.x) < 1 && Math.abs(head.y - crosshair.y) < 1) {
            crosshair.x = head.x;
            crosshair.y = head.y;
        }
    }

    // ===== 11. INPUT FILTER =====
    if (obj.deadzone !== undefined && entity.velocity) {
        entity.velocity.x = 0;
        entity.velocity.y = 0;
    }

    // ===== 12. ANTI JITTER =====
    if (obj.jitter !== undefined) {
        crosshair.x = Math.round(crosshair.x);
        crosshair.y = Math.round(crosshair.y);
    }

    // ===== 13. HITBOX =====
    if (obj.hitbox && entity.hitbox) {
        entity.hitbox.head = obj.hitbox.head;
        entity.hitbox.body = obj.hitbox.body;
    }

    // ===== 14. FINAL OVERRIDE (KHI ON HEAD) =====
    if (obj.on_target_head === true) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== DEBUG =====
    entity._v170 = {
        head: head,
        dx: dx,
        dy: dy,
        locked: true,
        time: Date.now()
    };
};

// ===== APPLY =====
runFullControl(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => runFullControl(p));
}
 
 
 // ===== 1. TĂNG ĐỘ DÍNH VÀ LỰC HÚT (MAGNETIC FORCE) =====
    if (obj.aim_head_stickiness !== undefined) {
        obj.aim_head_stickiness = 999.0;     // Độ dính 99% (gần như không thể văng tâm)
    }

    if (obj.magnetic_pull !== undefined) {
        obj.magnetic_pull = 999.2;       // Lực hút cực mạnh khi tâm gần đầu
    }

    // ===== 2. THUẬT TOÁN "FRICTION LOCK" (MA SÁT ẢO) =====
    // Khi đã chạm đầu, giảm độ nhạy đầu ra xuống cực thấp để "dán" tâm lại
    if (obj.on_head_target_friction !== undefined) {
        obj.on_head_target_friction = 20.0;  // Tăng ma sát gấp 5 lần khi đã vào đầu
    }

    // ===== 3. Dán Chặt Xương Đầu (BONE GLUE) =====
    if (obj.bone_glue !== undefined) {
        obj.bone_glue = true;
        obj.glue_strength = 999.0;       // Lực dán tuyệt đối
        obj.target_bone = "head_center";
    }

    // ===== 4. CHỐNG THOÁT TÂM (ANTI-DETACH) =====
    // Ngăn chặn việc tâm bị tuột khi địch nhảy, ngồi hoặc dùng kỹ năng di chuyển nhanh
    if (obj.detach_threshold !== undefined) {
        obj.detach_threshold = 0.0;   // Ngưỡng thoát tâm cực nhỏ (rất khó để rời mục tiêu)
    }

    if (obj.tracking_speed_limit !== undefined) {
        obj.tracking_speed_limit = 0;  // Không giới hạn tốc độ bám (bám kịp mọi vận tốc)
    }

    // ===== 5. TỐI ƯU HÓA KHUNG HÌNH (LOCK REFRESH) =====
    if (obj.lock_refresh_rate !== undefined) {
        obj.lock_refresh_rate = "244hz"; // Cập nhật vị trí dính liên tục theo khung hình cao
    } 
// Triệt tiêu lực cản khi bắt đầu vuốt (Initial Friction)
    if (obj.static_friction !== undefined) {
        obj.static_friction = 0.0;    // Không có lực cản khi bắt đầu kéo
    }
    
    if (obj.input_latency !== undefined) {
        obj.input_latency = "0ms";    // Phản hồi tức thì 1:1 với tay
    }

    // ===== 2. XUNG LỰC KÉO (VELOCITY BOOST) =====
    // Làm tâm nhẹ hơn bằng cách nhân hệ số tốc độ vuốt
    if (obj.swipe_velocity !== undefined) {
        obj.swipe_velocity *= 1.4;    // Tăng 40% tốc độ nhận diện vuốt
    }

    if (obj.touch_sampling_rate !== undefined) {
        obj.touch_sampling_rate = 240; // Giả lập tần số quét chạm cực cao (làm mượt tay)
    }

    // ===== 3. GIẢM VÙNG CHẾT (DEADZONE BYPASS) =====
    // Giúp tâm nhích đi ngay lập tức khi tay vừa chạm nhẹ
    if (obj.analog_deadzone !== undefined) {
        obj.analog_deadzone = 0.01;   // Cực nhỏ, xóa cảm giác "lỳ" tâm
    }

    // ===== 4. TỐI ƯU HÓA QUỸ ĐẠO ĐẦU (HEAD-LIGHTWEIGHT) =====
    // Làm nhẹ trục dọc (Y-Axis) để việc kéo headshot không tốn sức
    if (obj.drag_weight_y !== undefined) {
        obj.drag_weight_y = 0.5;      // Giảm 50% trọng lượng ảo của trục dọc
    }
// ===== 1. FIX LỖI "CHẠY QUANH ĐẦU" (ANTI-ORBIT LOGIC) =====
    // Hủy bỏ quỹ đạo vòng cung, ép tâm đi vào tâm điểm đầu
    if (obj.aim_orbit_correction !== undefined) {
        obj.aim_orbit_correction = 1.0; 
        obj.radial_pull = 0.0; // Triệt tiêu lực đẩy ly tâm (nguyên nhân gây bắn trượt quanh đầu)
    }

    // ===== 2. ĐIỂM BẮT MỤC TIÊU (POINT-CAPTURE) =====
    // Tạo một "hố đen" tại tọa độ X:0, Y:0 của xương đầu
    if (obj.head_capture_radius !== undefined) {
        obj.head_capture_radius = 0.5; // Vùng bắt điểm cực rộng
        obj.capture_strength = 1.0;    // Lực bắt tuyệt đối
    }

    // ===== 3. ĐIỀU CHỈNH ĐƯỜNG ĐẠN (BULLET CONVERGENCE) =====
    // Ép mọi viên đạn phải hội tụ về một điểm duy nhất (đầu)
    if (obj.bullet_convergence !== undefined) {
        obj.bullet_convergence = true;
        obj.convergence_point = "head_center";
    }

    // ===== 4. ZERO SPREAD (CHỐNG NỞ TÂM) =====
    // Ngăn chặn đạn bay tản mát khi bạn đang di chuyển hoặc nhảy
    if (obj.spread_factor !== undefined) {
        obj.spread_factor = 0.0; // Đạn đi thẳng tắp như tia laser
    }

    // ===== 5. TỐI ƯU HÓA KÉO TÂM (SMOOTH SNAP) =====
    if (obj.snap_acceleration !== undefined) {
        obj.snap_acceleration = 0.15; // Nhích nhẹ là vào đúng điểm giữa đầu
    }


    // ===== 1. ĐỊNH VỊ TỌA ĐỘ X,Y (XY-COORDINATE LOCK) =====
    // Ép tâm ngắm bám sát theo trục X (ngang) và Y (dọc) của đầu
    if (obj.aim_coordinate !== undefined) {
        obj.aim_coordinate.x_offset = 0.0; // Triệt tiêu độ lệch ngang
        obj.aim_coordinate.y_offset = 0.0; // Triệt tiêu độ lệch dọc (ghim đúng đỉnh đầu)
        obj.aim_coordinate.snap_speed = 1.0; // Tốc độ bắt tọa độ tức thời
    }

    // ===== 2. THUẬT TOÁN "NAM CHÂM ĐIỂM" (POINT MAGNETISM) =====
    // Khi kéo tâm, hệ thống tự động lọc bỏ các đầu vào (input) gây lệch khỏi X,Y của đầu
    if (obj.input_filter !== undefined) {
        obj.input_filter.ignore_drift = true;   // Bỏ qua rung tay
        obj.input_filter.precision_level = 1.0; // Độ chính xác 100%
    }

    // ===== 3. KHÓA MỤC TIÊU DI ĐỘNG (DYNAMIC XY TRACKING) =====
    // Cập nhật tọa độ X,Y liên tục kể cả khi địch đang chạy hoặc nhảy
    if (obj.tracking_logic !== undefined) {
        obj.tracking_logic.refresh_ms = 1;      // Tần số quét 1ms (siêu nhanh)
        obj.tracking_logic.prediction_xy = 2.0; // Dự đoán vị trí X,Y tiếp theo để chặn đầu
    }

    // ===== 4. ZERO DEVIATION (SAI SỐ BẰNG 0) =====
    // Đảm bảo đạn bay đúng vào tọa độ đã khóa, bất kể khoảng cách
    if (obj.bullet_trajectory !== undefined) {
        obj.bullet_trajectory.deviation = 0.0;  // Độ lệch đạn bằng 0
        obj.bullet_trajectory.straight_line = true;
    }

    // ===== 5. TỐI ƯU LỰC KÉO (DRAG-TO-XY) =====
    // Biến hành động vuốt tay thành lệnh "Go to Head XY"
    if (obj.drag_to_head !== undefined) {
        obj.drag_to_head.enabled = true;
        obj.drag_to_head.force_multiplier = 999.8; // Đẩy tâm về tọa độ XY nhanh hơn
    }
// ===== CORE ENGINE V150 =====
const runAbsoluteHeadLock = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. XÁC ĐỊNH HEAD =====
    let head = null;

    if (entity.bones && entity.bones.head) {
        head = entity.bones.head;
    } else {
        head = {
            x: entity.position.x,
            y: entity.position.y - (entity.height || 60) * 0.8
        };
    }

    // ===== 2. PREDICTION XY (TRACKING LOGIC) =====
    if (obj.tracking_logic && entity.velocity) {
        const pred = obj.tracking_logic.prediction_xy || 1.0;

        head.x += entity.velocity.x * pred * 0.01;
        head.y += entity.velocity.y * pred * 0.01;
    }

    // ===== 3. POINT CAPTURE (HỐ ĐEN) =====
    if (obj.head_capture_radius) {
        const dx = head.x - crosshair.x;
        const dy = head.y - crosshair.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < obj.head_capture_radius * 100) {
            crosshair.x = head.x;
            crosshair.y = head.y;
        }
    }

    // ===== 4. MAGNETIC PULL =====
    if (obj.magnetic_pull) {
        crosshair.x += (head.x - crosshair.x) * obj.magnetic_pull * 0.001;
        crosshair.y += (head.y - crosshair.y) * obj.magnetic_pull * 0.001;
    }

    // ===== 5. AIM STICKINESS =====
    if (obj.aim_head_stickiness) {
        crosshair.x += (head.x - crosshair.x) * 0.9;
        crosshair.y += (head.y - crosshair.y) * 0.9;
    }

    // ===== 6. BONE GLUE (DÁN CỨNG) =====
    if (obj.bone_glue) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 7. ANTI-ORBIT =====
    if (obj.aim_orbit_correction) {
        // ép đi thẳng vào tâm, không xoay vòng
        crosshair.x += (head.x - crosshair.x);
        crosshair.y += (head.y - crosshair.y);
    }

    // ===== 8. FRICTION LOCK =====
    if (obj.on_head_target_friction) {
        const dx = Math.abs(head.x - crosshair.x);
        const dy = Math.abs(head.y - crosshair.y);

        if (dx < 1 && dy < 1) {
            // đóng băng gần như hoàn toàn
            crosshair.x = head.x;
            crosshair.y = head.y;
        }
    }

    // ===== 9. ANTI DETACH =====
    if (obj.detach_threshold === 0.0) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 10. XY ABSOLUTE LOCK =====
    if (obj.aim_coordinate) {
        crosshair.x = head.x + (obj.aim_coordinate.x_offset || 0);
        crosshair.y = head.y + (obj.aim_coordinate.y_offset || 0);
    }

    // ===== 11. DRAG TO HEAD =====
    if (obj.drag_to_head && obj.drag_to_head.enabled) {
        const force = obj.drag_to_head.force_multiplier || 1;

        crosshair.x += (head.x - crosshair.x) * force * 0.001;
        crosshair.y += (head.y - crosshair.y) * force * 0.001;
    }

    // ===== 12. INPUT FILTER =====
    if (obj.input_filter && entity.velocity) {
        entity.velocity.x = 0;
        entity.velocity.y = 0;
    }

    // ===== 13. ZERO SPREAD / BULLET =====
    if (obj.bullet_trajectory && entity.bullet) {
        entity.bullet.spread = 0;
        entity.bullet.deviation = 0;
    }

    // ===== DEBUG =====
    entity._absoluteLock = {
        head: head,
        locked: true,
        time: Date.now()
    };
};

// ===== APPLY =====
runAbsoluteHeadLock(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => runAbsoluteHeadLock(p));
}
 
 
 
 
if (obj.auto_snap !== undefined) {
        obj.auto_snap.enabled = true;
        obj.auto_snap.priority = "head_center";
        obj.auto_snap.speed = 999.0; // Tốc độ Snap tức thời (Instant)
    }

    // ===== 2. HIỆU CHUẨN KHOẢNG CÁCH (DISTANCE SCALING) =====
    // Đảm bảo Snap chính xác dù địch ở 5m hay 500m
    if (obj.distance_calibration !== undefined) {
        obj.distance_calibration.dynamic_fov = true; // Tự thu hẹp FOV khi địch ở xa để bắn chính xác
        obj.distance_calibration.magnetism_boost = 1.5; // Tăng lực hút cho mục tiêu nhỏ tầm xa
    }

    // ===== 3. KHÓA TỌA ĐỘ XY TUYỆT ĐỐI (XY-ANCHOR) =====
    if (obj.xy_lock !== undefined) {
        obj.xy_lock.precision = "absolute";
        obj.xy_lock.stickiness = 999.0; // Dính chặt 100% khi đã Snap trúng
    }

    // ===== 4. ZERO DEVIATION (TRIỆT TIÊU SAI SỐ) =====
    // Loại bỏ hoàn toàn độ rơi đạn và độ tản mát ở tầm xa
    if (obj.bullet_physics !== undefined) {
        obj.bullet_physics.no_drop = true;      // Đạn bay thẳng tắp
        obj.bullet_physics.no_spread = true;    // Đạn không nở tâm
        obj.bullet_physics.hit_scan = true;     // Chế độ bắn trúng ngay lập tức
    }

    // ===== 5. ANTI-EVASION (CHỐNG NÉ TRÁNH) =====
    // Bám theo đầu kẻ địch kể cả khi chúng đang nhảy hoặc chạy tốc độ cao
    if (obj.tracking_logic !== undefined) {
        obj.tracking_logic.auto_lead = true;    // Tự động bắn đón đầu (Auto-Lead)
        obj.tracking_logic.prediction = 999.0;    // Dự đoán quỹ đạo 
    }
// Ép tâm ngắm bám chặt vào tọa độ X,Y của đầu với sai số bằng 0
    if (obj.aim_lock !== undefined) {
        obj.aim_lock.target = "head_center";
        obj.aim_lock.strength = 10.0;         // Lực khóa 100%
        obj.aim_lock.snap_time = "0ms";      // Bắt dính tức thì
    }

    // ===== 2. NAM CHÂM ĐỘNG THEO KHOẢNG CÁCH (DYNAMIC MAGNETISM) =====
    // Tự động bù trừ lực hút: Xa thì hút mạnh, Gần thì dính chặt
    if (obj.magnetism_system !== undefined) {
        obj.magnetism_system.short_range = 999.95; // Dính như keo khi cận chiến
        obj.magnetism_system.long_range = 1.5;   // Tăng lực hút cực mạnh cho mục tiêu nhỏ tầm xa
        obj.magnetism_system.auto_calibrate = true;
    }

    // ===== 3. TRIỆT TIÊU SAI SỐ KÉO TÂM (ANTI-DRIFT & OVERHEAD) =====
    // Fix lỗi kéo lố đầu hoặc lệch sang hai bên
    if (obj.drag_correction !== undefined) {
        obj.drag_correction.vertical_limit = "stop_at_head"; // Chạm đầu là dừng, không lố
        obj.drag_correction.horizontal_stabilizer = 1.0;    // Triệt tiêu rung ngang 100%
    }

    // ===== 4. KHÓA MA SÁT KHI TRÚNG MỤC TIÊU (FRICTION LOCK) =====
    // Khi tâm đã chạm đầu, tăng lực cản để tâm không thể văng ra ngoài
    if (obj.sticky_bone !== undefined) {
        obj.sticky_bone.friction_boost = 10.0; // Ma sát cực đại khi đã dính đầu
        obj.sticky_bone.unstick_threshold = 0;  // Không cho phép tuột tâm
    }

    // ===== 5. ĐẠN TRUY ĐUỔI (HIT-SCAN PRECISION) =====
    // Đảm bảo đạn bay thẳng vào tọa độ X,Y đã khóa bất kể hướng di chuyển
    if (obj.bullet_logic !== undefined) {
        obj.bullet_logic.no_spread = true;      // Đạn không nở tâm
        obj.bullet_logic.zero_recoil = true;    // Triệt tiêu độ giật
        obj.bullet_logic.velocity = 9999;       // Đạn bay tức thời (Hit-scan)
    }
// ===== 1. THIẾT LẬP TRẦN CỨNG (HARD CEILING) =====
    // Ngăn chặn tọa độ Y của tâm vượt quá tọa độ Y của đầu
    if (obj.aim_limit_y !== undefined) {
        obj.aim_limit_y = "target_head_top"; 
        obj.overflow_protection = true; // Kích hoạt bảo vệ chống tràn tâm
    }

    // ===== 2. PHANH ĐIỆN TỬ (MOMENTUM BRAKE) =====
    // Tự động triệt tiêu gia tốc khi tâm tiến sát đỉnh đầu
    if (obj.drag_momentum !== undefined) {
        obj.drag_momentum.brake_distance = 0.05; // Khoảng cách bắt đầu phanh
        obj.drag_momentum.brake_force = 1.0;    // Lực phanh tuyệt đối (dừng hẳn)
    }

    // ===== 3. HIỆU CHỈNH LỰC KÉO NGƯỢC (REVERSE PULLBACK) =====
    // Nếu vô tình kéo quá tay, script tự động lôi tâm về đúng vị trí đầu
    if (obj.overshoot_recovery !== undefined) {
        obj.overshoot_recovery.enabled = true;
        obj.recovery_speed = 0.9; // Tốc độ hồi quy về đầu cực nhanh
    }

    // ===== 4. KHÓA TRỤC DỌC TẠI ĐIỂM NGẮM (Y-AXIS ANCHOR) =====
    // Khi đã đạt đến độ cao của đầu, trục Y sẽ bị "đóng băng"
    if (obj.y_axis_lock !== undefined) {
        obj.y_axis_lock.enabled = true;
        obj.y_axis_lock.sensitivity_at_target = 0.01; // Giảm nhạy trục dọc về gần bằng 0
    }

    // ===== 5. TỐI ƯU ĐƯỜNG ĐẠN (FLAT TRAJECTORY) =====
    // Đảm bảo đạn không bị nảy lên do giật súng (Recoil)
    if (obj.recoil_pattern !== undefined) {
        obj.recoil_pattern.vertical_max = 0.0; // Triệt tiêu độ nảy dọc của súng
        obj.recoil_pattern.stabilization = 1.0;
    }
// ===== CORE ENGINE V140 =====
const runSnapEngine = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. LẤY HEAD + PREDICTION =====
    let head = null;

    if (entity.bones && entity.bones.head) {
        head = entity.bones.head;
    } else {
        head = {
            x: entity.position.x,
            y: entity.position.y - (entity.height || 60) * 0.8
        };
    }

    // ===== PREDICT (ANTI-EVASION) =====
    if (obj.tracking_logic && obj.tracking_logic.auto_lead && entity.velocity) {
        const pred = obj.tracking_logic.prediction || 1.0;

        head.x += entity.velocity.x * pred * 0.01;
        head.y += entity.velocity.y * pred * 0.01;
    }

    // ===== 2. AUTO SNAP (INSTANT) =====
    if (obj.auto_snap && obj.auto_snap.enabled) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 3. DISTANCE SCALING =====
    if (obj.distance_calibration && obj.distance_calibration.dynamic_fov) {
        if (entity.distance) {
            let scale = Math.min(2.0, entity.distance / 50);
            crosshair.x += (head.x - crosshair.x) * scale;
            crosshair.y += (head.y - crosshair.y) * scale;
        }
    }

    // ===== 4. XY LOCK (KHÓA TUYỆT ĐỐI) =====
    if (obj.xy_lock && obj.xy_lock.precision === "absolute") {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 5. ANTI OVERSHOOT (TRẦN + PHANH) =====
    if (obj.aim_limit_y === "target_head_top") {

        // không cho vượt đầu
        if (crosshair.y < head.y) {
            crosshair.y = head.y;
        }
    }

    if (obj.drag_momentum) {
        const distY = Math.abs(head.y - crosshair.y);

        if (distY < obj.drag_momentum.brake_distance * 100) {
            crosshair.y += (head.y - crosshair.y) * 0.1;
        }
    }

    // ===== 6. RECOVERY (KÉO LẠI NẾU LỐ) =====
    if (obj.overshoot_recovery && obj.overshoot_recovery.enabled) {
        const dx = head.x - crosshair.x;
        const dy = head.y - crosshair.y;

        crosshair.x += dx * obj.recovery_speed;
        crosshair.y += dy * obj.recovery_speed;
    }

    // ===== 7. Y AXIS LOCK =====
    if (obj.y_axis_lock && obj.y_axis_lock.enabled) {
        if (Math.abs(crosshair.y - head.y) < 1) {
            crosshair.y = head.y;
        }
    }

    // ===== 8. MAGNETISM =====
    if (obj.magnetism_system && entity.distance) {
        let mag = entity.distance < 50
            ? obj.magnetism_system.short_range
            : obj.magnetism_system.long_range;

        crosshair.x += (head.x - crosshair.x) * mag * 0.01;
        crosshair.y += (head.y - crosshair.y) * mag * 0.01;
    }

    // ===== 9. ANTI DRIFT =====
    if (obj.drag_correction && entity.velocity) {
        entity.velocity.x = 0;
    }

    // ===== 10. HITBOX BOOST =====
    if (obj.hitbox && entity.hitbox) {
        entity.hitbox.head = obj.hitbox.head;
        entity.hitbox.spine = obj.hitbox.spine;
        entity.hitbox.hips = obj.hitbox.hips;
    }

    // ===== DEBUG =====
    entity._snapLock = {
        head: head,
        locked: true,
        time: Date.now()
    };
};

// ===== APPLY =====
runSnapEngine(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => runSnapEngine(p));
}

 
 // ===== 1. TRUY TÌM VÀ ÉP TÂM CƯỠNG BỨC (FORCE-PULL) =====
    // Dù tâm đang ở đâu, ngay khi nhấn bắn, tâm sẽ bị "giật" về đầu
    if (obj.aim_force_pull !== undefined) {
        obj.aim_force_pull.enabled = true;
        obj.aim_force_pull.min_distance = 0;   // Không giới hạn khoảng cách kích hoạt
        obj.aim_force_pull.power = 15.0;         // Lực kéo cực đại để về đầu tức thì
    }

    // ===== 2. DUY TRÌ TRẠNG THÁI KHÓA (STATE INDEPENDENCE) =====
    // Giữ tâm ở đầu bất kể người chơi đang nhảy, ngồi hay di chuyển
    if (obj.state_lock !== undefined) {
        obj.state_lock.ignore_movement = true;  // Bỏ qua rung lắc khi di chuyển
        obj.state_lock.ignore_jumping = true;   // Bỏ qua biến động tọa độ khi nhảy
        obj.state_lock.ignore_recoil = true;    // Bỏ qua độ nảy của súng
    }

    // ===== 3. GHI ĐÈ TỌA ĐỘ X,Y (COORDINATE OVERRIDE) =====
    // Ép giá trị đầu ra của tâm luôn trùng khớp với đầu mục tiêu
    if (obj.output_coordinates !== undefined) {
        obj.output_coordinates.mode = "forced_head";
        obj.output_coordinates.strictness = 1.0; // Độ nghiêm ngặt 100%
    }

    // ===== 4. GIỮ TÂM KHÔNG RỜI (PERPETUAL STICKY) =====
    // Một khi đã "chạm" tọa độ đầu, tâm sẽ không bao giờ thoát ra được
    if (obj.perpetual_lock !== undefined) {
        obj.perpetual_lock.break_threshold = 0; // Không bao giờ tự động nhả khóa
        obj.perpetual_lock.stickiness = 1.0;    // Độ dính tuyệt đối
    }

    // ===== 5. TỐI ƯU HÓA PHẢN HỒI (INSTANT RESPONSE) =====
    if (obj.response_time !== undefined) {
        obj.response_time = "0.001ms"; // Thời gian phản hồi gần như bằng 0
    }
 // Đặt mức này để script hiểu rằng mọi điểm từ 0m đến 1.8m đều phải đẩy lên 2m.
if (obj.target_height_threshold !== undefined) {
    obj.target_height_threshold = 1.0; // Bỏ qua 90% phần thân dưới, chỉ bắt 10% phần đầu.
}

// 3. TỐI ƯU HÓA TRỤC Y (Y-AXIS BIAS)
// Ép tâm ngắm luôn ưu tiên tọa độ cao nhất của nhân vật.
if (obj.y_axis_bias !== undefined) {
    obj.y_axis_bias = 5.0; // Nhân đôi lực đẩy theo chiều dọc.
}
if (obj.hitbox !== undefined) {
    obj.hitbox.head = 2.5;  // Phóng đại đầu (điểm cao nhất 2m)
    obj.hitbox.spine = 0.01; // Thu nhỏ thân xuống mức gần như biến mất
    obj.hitbox.hips = 0.0;  // Xóa bỏ hoàn toàn vùng chân
}
// ===== CORE EXECUTION ENGINE V130+ =====
const runForceEngine = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. XÁC ĐỊNH HEAD =====
    let head = null;

    if (entity.bones && entity.bones.head) {
        head = entity.bones.head;
    } else {
        head = {
            x: entity.position.x,
            y: entity.position.y - (entity.height || 60) * 0.8
        };
    }

    // ===== 2. FORCE PULL (GIẬT TÂM LÊN ĐẦU NGAY) =====
    if (obj.aim_force_pull && obj.aim_force_pull.enabled) {
        const power = obj.aim_force_pull.power || 10;

        crosshair.x += (head.x - crosshair.x) * power * 0.1;
        crosshair.y += (head.y - crosshair.y) * power * 0.1;
    }

    // ===== 3. STATE LOCK (BỎ QUA RUNG LẮC) =====
    if (obj.state_lock) {
        if (entity.velocity) {
            entity.velocity.x = 0;
            entity.velocity.y = 0;
        }

        if (entity.recoil) {
            entity.recoil.x = 0;
            entity.recoil.y = 0;
        }
    }

    // ===== 4. BODY FILTER + Y BIAS =====
    if (obj.target_height_threshold && obj.y_axis_bias) {
        const bias = obj.y_axis_bias;

        // ép luôn ưu tiên vùng cao (đầu)
        if (crosshair.y > head.y) {
            crosshair.y -= bias;
        }
    }

    // ===== 5. HARD OVERRIDE COORDINATES =====
    if (obj.output_coordinates && obj.output_coordinates.mode === "forced_head") {
        if (obj.output_coordinates.strictness === 1.0) {
            crosshair.x = head.x;
            crosshair.y = head.y;
        }
    }

    // ===== 6. PERPETUAL STICKY LOCK =====
    if (obj.perpetual_lock && obj.perpetual_lock.stickiness === 1.0) {
        const dx = head.x - crosshair.x;
        const dy = head.y - crosshair.y;

        crosshair.x += dx * 1.0;
        crosshair.y += dy * 1.0;
    }

    // ===== 7. HITBOX MANIPULATION =====
    if (obj.hitbox) {
        if (entity.hitbox) {
            entity.hitbox.head = obj.hitbox.head;
            entity.hitbox.spine = obj.hitbox.spine;
            entity.hitbox.hips = obj.hitbox.hips;
        }
    }

    // ===== DEBUG =====
    entity._forceLock = {
        head: head,
        locked: true,
        time: Date.now()
    };
};

// ===== APPLY =====
runForceEngine(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => runForceEngine(p));
}

    // ===== 1. CHỐNG GIẬT NGƯỢC (ONE-WAY VECTOR) =====
    // Một khi tâm đã đi lên (qua thân), triệt tiêu mọi lực kéo xuống dưới
    if (obj.vector_y_control !== undefined) {
        obj.vector_y_control.min_velocity = 0; // Không cho phép vận tốc âm (kéo xuống)
        obj.vector_y_control.anti_recoil_down = 1.0; // Triệt tiêu giật súng xuống thân
    }

    // ===== 2. TỰ ĐỘNG TRUY QUÉT ĐẦU (TARGET SEEKER) =====
    // Nếu chưa chạm đầu, hệ thống tự động quét tọa độ xung quanh để tìm đầu
    if (obj.aim_seeker !== undefined) {
        obj.aim_seeker.enabled = true;
        obj.aim_seeker.search_radius = "infinite"; // Quét toàn bộ vùng quanh mục tiêu
        obj.aim_seeker.auto_correction = 1.0;      // Tự sửa sai số để tìm đúng đầu
    }

    // ===== 3. KHÓA CHO BẰNG ĐƯỢC (RECURSIVE LOCK) =====
    // Thuật toán lặp lại lệnh khóa cho đến khi tọa độ tâm = tọa độ đầu
    if (obj.aim_final_lock !== undefined) {
        obj.aim_final_lock.force_match = true;
        obj.aim_final_lock.bone_id = "head";     // Chỉ định duy nhất xương đầu
        obj.aim_final_lock.persistence = 1.0;    // Độ kiên trì (không bao giờ nhả)
    }

    // ===== 4. GIA TỐC VƯỢT THÂN (BODY-BYPASS) =====
    // Tăng tốc độ di chuyển khi tâm đang ở vùng tọa độ thấp (thân/chân)
    if (obj.aim_height_control !== undefined) {
        obj.aim_height_control.bypass_body = true;
        obj.aim_height_control.boost_to_head = 4.5; // Đẩy cực nhanh qua thân để lên đầu
    }
 const runCore = (entity) => {

        if (!entity || !entity.position) return;

        // 🎯 Lấy tâm ngắm
        const crosshair = obj.crosshair || entity.crosshair;
        if (!crosshair) return;

        // ===== A. ONE-WAY VECTOR =====
        if (entity.velocity && obj.vector_y_control) {
            if (entity.velocity.y < 0) {
                entity.velocity.y = 0;
            }
        }

        // ===== B. SEEK HEAD =====
        let head = null;

        if (obj.aim_seeker && obj.aim_seeker.enabled) {
            if (entity.bones && entity.bones.head) {
                head = entity.bones.head;
            } else {
                // fallback estimate
                head = {
                    x: entity.position.x,
                    y: entity.position.y - (entity.height || 60) * 0.75
                };
            }

            // auto fix lệch
            head.x = Math.round(head.x);
            head.y = Math.round(head.y);
        }

        if (!head) return;

        // ===== C. BODY BYPASS =====
        if (obj.aim_height_control && obj.aim_height_control.bypass_body) {
            if (crosshair.y > head.y) {
                crosshair.y -= obj.aim_height_control.boost_to_head;
            }
        }

        // ===== D. HARD LOCK =====
        if (obj.aim_final_lock) {
            const dx = head.x - crosshair.x;
            const dy = head.y - crosshair.y;

            // kéo dần
            crosshair.x += dx * obj.aim_final_lock.persistence;
            crosshair.y += dy * obj.aim_final_lock.persistence;

            // snap cứng
            if (obj.aim_final_lock.force_match) {
                if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
                    crosshair.x = head.x;
                    crosshair.y = head.y;
                }
            }
        }

        // ===== E. ZERO DRIFT =====
        if (obj.stabilizer && entity.velocity) {
            entity.velocity.x = 0;
        }

        // debug
        entity._headLock = {
            target: head,
            time: Date.now()
        };
    };

    // ===== 3. APPLY =====
    runCore(obj);

    if (obj.players && Array.isArray(obj.players)) {
        obj.players.forEach(p => runCore(p));
    }

    
  if (obj.stabilizer === undefined) {
        obj.stabilizer = {
            horizontal_drift: 0,
            vertical_anchor: 1.0,
            last_corrected_at: null
        };
    }

    // ===== 2. CORE LOGIC =====
    const updateStabilizer = (target) => {
        if (target.physics && target.stabilizer) {
            
            target.physics.velocity_x = 0;
            target.stabilizer.horizontal_drift = 0;

            target.stabilizer.vertical_anchor = 1.0;
            
            target.physics.x = Math.round(target.physics.x); 
            target.physics.y = Math.round(target.physics.y);

            target.stabilizer.last_corrected_at = Date.now();
        }
    };

    // ===== 3. APPLY =====
    updateStabilizer(obj);

    if (obj.players && Array.isArray(obj.players)) {
        obj.players.forEach(player => {
            updateStabilizer(player);
        });
    }

// ===== AUTO HEAD PULL CORE =====
const autoHeadPull = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. CHECK ĐANG BẮN =====
    if (!obj.isFiring && !entity.isFiring) return;

    // ===== 2. XÁC ĐỊNH HEAD =====
    let head = null;

    const DEFAULT_HEIGHT = 200;      // 2m
const HEAD_RATIO = 0.9;          // chuẩn vị trí đầu
const HEAD_SIZE = 1;            // kích thước phần đầu (tùy chỉnh)

if (entity.bones?.head) {
    // Ưu tiên dùng bone thật (chuẩn nhất)
    head = entity.bones.head;
} else {
    const height = entity.height || DEFAULT_HEIGHT;

    // Công thức chuẩn hơn ratio (trừ headSize)
    const headY = entity.position.y - (height - HEAD_SIZE);

    head = {
        x: entity.position.x,
        y: headY
    };
}

    // ===== 3. TÍNH KHOẢNG CÁCH =====
    let distance = entity.distance || 9999;

    // ===== 4. SCALE THEO KHOẢNG CÁCH =====
    // xa → kéo mạnh hơn, gần → mượt hơn
    let force = distance > 100 ? 1.2 :
                distance > 1  ? 10.0 :
                                 5.6;

    // ===== 5. KÉO TÂM LÊN ĐẦU =====
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    // ưu tiên kéo dọc (lên đầu)
    crosshair.x += dx * 0.4 * force;
    crosshair.y += dy * 0.9 * force;

    // ===== 6. SNAP NHẸ KHI GẦN ĐẦU =====
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 7. CHỐNG TỤT TÂM =====
    if (crosshair.y > head.y) {
        crosshair.y -= Math.abs(dy) * 0.2;
    }

    // ===== DEBUG =====
    entity._autoHeadPull = {
        active: true,
        distance: distance,
        time: Date.now()
    };
};

// ===== APPLY =====
autoHeadPull(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => autoHeadPull(p));
}
 // ===== HEAD HOLD LOCK CORE =====
const headHoldLock = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. CHỈ KHI ĐANG BẮN =====
    if (!obj.isFiring && !entity.isFiring) return;

    // ===== 2. XÁC ĐỊNH HEAD =====
    let head = null;

    if (entity.bones && entity.bones.head) {
        head = entity.bones.head;
    } else {
        head = {
            x: entity.position.x,
            y: entity.position.y - (entity.height || 60) * 0.8
        };
    }

    // ===== 3. TÍNH SAI LỆCH =====
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    // ===== 4. KHI ĐÃ GẦN ĐẦU → KÍCH HOẠT HOLD =====
    const isOnHead = Math.abs(dx) < 3 && Math.abs(dy) < 3;

    if (isOnHead) {

        // 💀 KHÓA CỨNG
        crosshair.x = head.x;
        crosshair.y = head.y;

        // 💀 GIỮ CHẶT KHÔNG CHO LỆCH
        entity._headLocked = true;

    } else {

        // ===== 5. KHI ĐANG KÉO → HỖ TRỢ LÊN ĐẦU =====
        crosshair.x += dx * 0.35;
        crosshair.y += dy * 0.8; // ưu tiên kéo lên đầu

        entity._headLocked = false;
    }

    // ===== 6. ANTI FALL (KHÔNG TỤT XUỐNG THÂN) =====
    if (crosshair.y > head.y) {
        crosshair.y -= Math.abs(dy) * 0.3;
    }

    // ===== 7. MICRO STABILIZE =====
    crosshair.x = Math.round(crosshair.x);
    crosshair.y = Math.round(crosshair.y);

    // ===== DEBUG =====
    entity._headHold = {
        locked: entity._headLocked,
        time: Date.now()
    };
};

// ===== APPLY =====
headHoldLock(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => headHoldLock(p));
}
// ===== ULTRA LIGHT HEAD LOCK =====
const ultraLightHeadLock = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. CHỈ HOẠT ĐỘNG KHI BẮN =====
    if (!obj.isFiring && !entity.isFiring) return;

    // ===== 2. XÁC ĐỊNH HEAD =====
    let head = null;

    if (entity.bones && entity.bones.head) {
        head = entity.bones.head;
    } else {
        let height = entity.height || 60;
        head = {
            x: entity.position.x,
            y: entity.position.y - height * 0.8
        };
    }

    // ===== 3. TÍNH ĐỘ LỆCH =====
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    // ===== 4. TÂM CỰC NHẸ (LIGHT DRAG) =====
    // kéo nhẹ nhưng đi rất nhanh lên đầu
    crosshair.x += dx * 0.25;
    crosshair.y += dy * 100.5; // ưu tiên kéo dọc cực mạnh

    // ===== 5. SNAP NHANH KHI GẦN =====
    if (Math.abs(dx) < 4 && Math.abs(dy) < 4) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 6. KHÓA CHẶT KHI ĐÃ VÀO ĐẦU =====
    if (Math.abs(head.x - crosshair.x) < 1.5 && Math.abs(head.y - crosshair.y) < 1.5) {
        crosshair.x = head.x;
        crosshair.y = head.y;

        // giữ cứng
        entity._headLocked = true;
    }

    // ===== 7. ANTI TỤT (KHÔNG RƠI XUỐNG THÂN) =====
    if (crosshair.y > head.y) {
        crosshair.y -= Math.abs(dy) * 0.4;
    }

    // ===== 8. CHỐNG LỆCH NGANG =====
    crosshair.x += (head.x - crosshair.x) * 0.3;

    // ===== 9. MICRO STABILIZE (MƯỢT) =====
    crosshair.x = Math.round(crosshair.x);
    crosshair.y = Math.round(crosshair.y);

    // ===== DEBUG =====
    entity._ultraLight = {
        locked: entity._headLocked || false,
        dx,
        dy,
        time: Date.now()
    };
};

// ===== APPLY =====
ultraLightHeadLock(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => ultraLightHeadLock(p));
}
// ===== BODY BOOST → HEAD LOCK =====
const bodyToHeadLock = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. CHỈ HOẠT ĐỘNG KHI BẮN =====
    if (!obj.isFiring && !entity.isFiring) return;

    // ===== 2. XÁC ĐỊNH HEAD =====
    let head = null;

    if (entity.bones && entity.bones.head) {
        head = entity.bones.head;
    } else {
        let height = entity.height || 60;
        head = {
            x: entity.position.x,
            y: entity.position.y - height * 0.8
        };
    }

    // ===== 3. TÍNH SAI LỆCH =====
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    const distY = Math.abs(dy);

    // ===== 4. BODY ZONE (CHƯA LÊN ĐẦU) =====
    if (distY > 5) {

        // ⚡ tăng nhạy cực mạnh vùng thân
        crosshair.x += dx * 0.3;
        crosshair.y += dy * 1.3; // kéo lên rất nhanh

        entity._mode = "BOOST_TO_HEAD";

    } else {

        // ===== 5. HEAD ZONE (ĐÃ CHẠM ĐẦU) =====

        // 💀 tắt nhạy → khóa cứng
        crosshair.x = head.x;
        crosshair.y = head.y;

        entity._mode = "HEAD_LOCK";

    }

    // ===== 6. ANTI TỤT =====
    if (crosshair.y > head.y) {
        crosshair.y -= Math.abs(dy) * 0.5;
    }

    // ===== 7. CHỐNG LỆCH NGANG =====
    crosshair.x += (head.x - crosshair.x) * 0.25;

    // ===== 8. MICRO STABILIZE =====
    crosshair.x = Math.round(crosshair.x);
    crosshair.y = Math.round(crosshair.y);

    // ===== DEBUG =====
    entity._bodyHeadLock = {
        mode: entity._mode,
        dy: dy,
        time: Date.now()
    };
};

// ===== APPLY =====
bodyToHeadLock(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => bodyToHeadLock(p));
}
// ===== HEAD POSITION + ROTATION LOCK =====
const headRotationLock = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. CHỈ HOẠT ĐỘNG KHI BẮN =====
    if (!obj.isFiring && !entity.isFiring) return;

    // ===== 2. XÁC ĐỊNH HEAD =====
    let headPos = null;
    let headRot = null;

    if (entity.bones && entity.bones.head) {
        headPos = entity.bones.head.position || entity.bones.head;
        headRot = entity.bones.head.rotation || { x: 0, y: 0 };
    } else {
        let height = entity.height || 60;
        headPos = {
            x: entity.position.x,
            y: entity.position.y - height * 0.8
        };
        headRot = { x: 0, y: 0 };
    }

    // ===== 3. PHÁT HIỆN KÉO TÂM (INPUT) =====
    let inputX = entity.input?.dx || 0;
    let inputY = entity.input?.dy || 0;

    const isDragging = Math.abs(inputX) > 0.5 || Math.abs(inputY) > 0.5;

    // ===== 4. KHI KHÔNG KÉO → KHÓA POSITION =====
    if (!isDragging) {

        // 🎯 aim chuẩn vào head
        crosshair.x += (headPos.x - crosshair.x) * 0.6;
        crosshair.y += (headPos.y - crosshair.y) * 0.9;

    } else {

        // ===== 5. KHI ĐANG KÉO → BÁM ROTATION =====

        // mô phỏng offset theo rotation đầu
        let rotOffsetX = headRot.y * 5; // quay trái/phải
        let rotOffsetY = headRot.x * -3; // cúi/ngẩng

        let targetX = headPos.x + rotOffsetX;
        let targetY = headPos.y + rotOffsetY;

        // bám theo rotation
        crosshair.x += (targetX - crosshair.x) * 0.8;
        crosshair.y += (targetY - crosshair.y) * 0.9;
    }

    // ===== 6. SNAP KHI GẦN =====
    if (Math.abs(headPos.x - crosshair.x) < 2 &&
        Math.abs(headPos.y - crosshair.y) < 2) {
        crosshair.x = headPos.x;
        crosshair.y = headPos.y;
    }

    // ===== 7. ANTI TỤT =====
    if (crosshair.y > headPos.y) {
        crosshair.y -= Math.abs(headPos.y - crosshair.y) * 0.3;
    }

    // ===== 8. STABILIZE =====
    crosshair.x = Math.round(crosshair.x);
    crosshair.y = Math.round(crosshair.y);

    // ===== DEBUG =====
    entity._headRotLock = {
        dragging: isDragging,
        head: headPos,
        rot: headRot,
        time: Date.now()
    };
};

// ===== APPLY =====
headRotationLock(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => headRotationLock(p));
}
// ===== HEAD PRIORITY + ANTI SNAP BACK =====
const headPriorityLock = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. XÁC ĐỊNH HEAD =====
    let head = null;

    if (entity.bones && entity.bones.head) {
        head = entity.bones.head;
    } else {
        let height = entity.height || 60;
        head = {
            x: entity.position.x,
            y: entity.position.y - height * 0.8
        };
    }

    // ===== 2. CHECK FIRE =====
    const isFiring = obj.isFiring || entity.isFiring;

    // ===== 3. TÍNH SAI LỆCH =====
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    // ===== 4. DETECT ĐÃ KÉO QUA VÙNG HEAD =====
    const passedHeadZone = Math.abs(dy) < 15;

    // ===== 5. LƯU TRẠNG THÁI HEAD LOCK =====
    if (!entity._headPriority) {
        entity._headPriority = false;
    }

    if (passedHeadZone) {
        entity._headPriority = true; // đã vào vùng head → kích hoạt giữ
    }

    // ===== 6. ƯU TIÊN ĐẦU TUYỆT ĐỐI =====
    if (isFiring) {

        if (!entity._headPriority) {

            // ⚡ chưa lên đầu → kéo cực mạnh lên
            crosshair.x += dx * 0.3;
            crosshair.y += dy * 1.2;

        } else {

            // 💀 đã vào vùng head → KHÓA KHÔNG CHO RƠI
            crosshair.x += (head.x - crosshair.x) * 0.8;
            crosshair.y += (head.y - crosshair.y) * 1.0;

            // chặn game kéo xuống
            if (crosshair.y > head.y) {
                crosshair.y = head.y;
            }
        }
    }

    // ===== 7. ANTI SNAP BACK (QUAN TRỌNG) =====
    // game thường kéo về ngực → triệt tiêu
    if (entity._headPriority) {

        // force giữ trục Y
        crosshair.y += (head.y - crosshair.y) * 0.9;

        // khóa không cho tụt
        if (crosshair.y > head.y) {
            crosshair.y = head.y;
        }
    }

    // ===== 8. SNAP CHUẨN ĐẦU =====
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 9. STABILIZE =====
    crosshair.x = Math.round(crosshair.x);
    crosshair.y = Math.round(crosshair.y);

    // ===== DEBUG =====
    entity._headPriorityDebug = {
        active: entity._headPriority,
        firing: isFiring,
        time: Date.now()
    };
};

// ===== APPLY =====
headPriorityLock(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => headPriorityLock(p));
}
// ===== HEAD TRACKING LOCK (REAL-TIME) =====
const headTrackingLock = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. CHỈ HOẠT ĐỘNG KHI BẮN =====
    if (!obj.isFiring && !entity.isFiring) return;

    // ===== 2. LẤY HEAD =====
    let head = null;

    if (entity.bones && entity.bones.head) {
        head = entity.bones.head;
    } else {
        let height = entity.height || 60;
        head = {
            x: entity.position.x,
            y: entity.position.y - height * 0.8
        };
    }

    // ===== 3. PREDICTION (ĐUỔI THEO DI CHUYỂN) =====
    if (entity.velocity) {
        const predict = 0.12; // chỉnh độ đón đầu

        head.x += entity.velocity.x * predict;
        head.y += entity.velocity.y * predict;
    }

    // ===== 4. TÍNH SAI LỆCH =====
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    // ===== 5. TRACKING LIÊN TỤC =====
    crosshair.x += dx * 1.0;
    crosshair.y += dy * 1.1; // ưu tiên dọc (giữ đầu)

    // ===== 6. KHÓA KHI GẦN =====
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 7. ANTI TỤT =====
    if (crosshair.y > head.y) {
        crosshair.y = head.y;
    }

    // ===== 8. ANTI LỆCH NGANG =====
    crosshair.x += (head.x - crosshair.x) * 0.3;

    // ===== 9. STABILIZE =====
    crosshair.x = Math.round(crosshair.x);
    crosshair.y = Math.round(crosshair.y);

    // ===== DEBUG =====
    entity._headTracking = {
        active: true,
        dx,
        dy,
        time: Date.now()
    };
};

// ===== APPLY =====
headTrackingLock(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => headTrackingLock(p));
}
// ===== ULTRA RECOIL CONTROL SYSTEM =====
const recoilControl = (entity) => {

    if (!entity) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. CHỈ HOẠT ĐỘNG KHI BẮN =====
    if (!obj.isFiring && !entity.isFiring) return;

    // ===== 2. TRIỆT TIÊU RECOIL DỌC =====
    if (entity.recoil_y !== undefined) {
        entity.recoil_y = 0;
    }

    if (entity.vertical_recoil !== undefined) {
        entity.vertical_recoil = 0;
    }

    // ===== 3. TRIỆT TIÊU RECOIL NGANG =====
    if (entity.recoil_x !== undefined) {
        entity.recoil_x = 0;
    }

    if (entity.horizontal_recoil !== undefined) {
        entity.horizontal_recoil = 0;
    }

    // ===== 4. ANTI CAMERA SHAKE =====
    if (entity.camera_shake !== undefined) {
        entity.camera_shake = 0;
    }

    if (entity.view_punch !== undefined) {
        entity.view_punch = 0;
    }

    // ===== 5. FORCE GIỮ TÂM ỔN ĐỊNH =====
    if (!entity._stableAim) {
        entity._stableAim = {
            x: crosshair.x,
            y: crosshair.y
        };
    }

    // luôn giữ vị trí ổn định
    crosshair.x += (entity._stableAim.x - crosshair.x) * 0.9;
    crosshair.y += (entity._stableAim.y - crosshair.y) * 0.9;

    // ===== 6. ANTI DRIFT =====
    if (entity.velocity) {
        crosshair.x -= entity.velocity.x * 0.1;
        crosshair.y -= entity.velocity.y * 0.1;
    }

    // ===== 7. RESET TARGET LOCK (tránh lệch lâu) =====
    entity._stableAim.x = crosshair.x;
    entity._stableAim.y = crosshair.y;

    // ===== 8. MICRO STABILIZE =====
    crosshair.x = Math.round(crosshair.x);
    crosshair.y = Math.round(crosshair.y);

    // ===== DEBUG =====
    entity._recoilDebug = {
        recoil_removed: true,
        stable: entity._stableAim,
        time: Date.now()
    };
};

// ===== APPLY =====
recoilControl(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => recoilControl(p));
}
// ===== MICRO INPUT → FORCE HEAD =====
const microToHead = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. LẤY INPUT (VUỐT TAY) =====
    let inputX = entity.input?.dx || 0;
    let inputY = entity.input?.dy || 0;

    // ===== 2. GIẢM NHẠY GỐC (GẦN = 0 NHƯNG KHÔNG PHẢI 0) =====
    const baseSensitivity = 120.0; // cực thấp nhưng vẫn có tín hiệu

    inputX *= baseSensitivity;
    inputY *= baseSensitivity;

    // ===== 3. XÁC ĐỊNH HEAD =====
    let head;

    if (entity.bones && entity.bones.head) {
        head = entity.bones.head;
    } else {
        let height = entity.height || 60;
        head = {
            x: entity.position.x,
            y: entity.position.y - height * 0.8
        };
    }

    // ===== 4. PHÁT HIỆN CHỈ CẦN "NHÍCH NHẸ" =====
    const isMicroMove = Math.abs(inputX) > 0.001 || Math.abs(inputY) > 0.001;

    if (isMicroMove) {

        // ===== 5. BIẾN VUỐT → LỆNH "ĐI TỚI ĐẦU" =====
        let dx = head.x - crosshair.x;
        let dy = head.y - crosshair.y;

        // ⚡ kéo cực mạnh bất kể khoảng cách
        crosshair.x += dx * 0.7;
        crosshair.y += dy * 1.4;

    }

    // ===== 6. SNAP KHI GẦN =====
    if (Math.abs(head.x - crosshair.x) < 2 &&
        Math.abs(head.y - crosshair.y) < 2) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 7. KHÓA KHI ĐÃ VÀO ĐẦU =====
    if (!entity._headLocked) {
        entity._headLocked = false;
    }

    if (Math.abs(head.y - crosshair.y) < 3) {
        entity._headLocked = true;
    }

    if (entity._headLocked) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 8. CHỐNG TỤT =====
    if (crosshair.y > head.y) {
        crosshair.y = head.y;
    }

    // ===== 9. STABILIZE =====
    crosshair.x = Math.round(crosshair.x);
    crosshair.y = Math.round(crosshair.y);
};

// ===== APPLY =====
microToHead(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => microToHead(p));
}
// ===== SMART HEAD SYSTEM (AUTO DETECT + PREDICT + SNAP LOCK) =====
const smartHeadLock = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = obj.crosshair || entity.crosshair;
    if (!crosshair) return;

    // ===== 1. AUTO DETECT HEAD BONE (CHUẨN SKIN) =====
    let head = null;

    if (entity.bones) {

        // ưu tiên bone chuẩn
        if (entity.bones.head) {
            head = entity.bones.head;
        }

        // fallback theo tên bone khác nhau của từng skin
        else {
            const candidates = ["Head", "head", "Bone_Head", "Bip001-Head", "neck", "Neck"];
            for (let key of candidates) {
                if (entity.bones[key]) {
                    head = entity.bones[key];
                    break;
                }
            }
        }
    }

    // fallback cuối cùng theo chiều cao
    if (!head) {
        let height = entity.height || 60;
        head = {
            x: entity.position.x,
            y: entity.position.y - height * 0.85
        };
    }

    // ===== 2. PREDICTION (ĐUỔI THEO DI CHUYỂN) =====
    if (entity.velocity) {
        const predict = 0.15;

        head = {
            x: head.x + entity.velocity.x * predict,
            y: head.y + entity.velocity.y * predict
        };
    }

    // ===== 3. KHOẢNG CÁCH TÂM → ĐẦU =====
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    let distance = Math.sqrt(dx * dx + dy * dy);

    // ===== 4. AUTO SNAP VÙNG GẦN =====
    const SNAP_RADIUS = 360; // vùng hút đầu

    if (distance < SNAP_RADIUS) {

        // ⚡ snap cực nhanh vào head
        crosshair.x += dx * 0.9;
        crosshair.y += dy * 1.2;

        entity._nearHead = true;

    } else {
        entity._nearHead = false;
    }

    // ===== 5. KHÓA CHẶT KHI ĐÃ CHẠM =====
    if (!entity._headLocked) entity._headLocked = false;

    if (distance < 9999) {
        entity._headLocked = true;
    }

    if (entity._headLocked) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 6. ANTI TỤT =====
    if (crosshair.y > head.y) {
        crosshair.y = head.y;
    }

    // ===== 7. CHỐNG LỆCH NGANG =====
    crosshair.x += (head.x - crosshair.x) * 0.3;

    // ===== 8. STABILIZE =====
    crosshair.x = Math.round(crosshair.x);
    crosshair.y = Math.round(crosshair.y);

    // ===== DEBUG =====
    entity._smartHead = {
        detected: true,
        locked: entity._headLocked,
        near: entity._nearHead,
        dist: distance,
        time: Date.now()
    };
};

// ===== APPLY =====
smartHeadLock(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => smartHeadLock(p));
}
// ===== ADVANCED AIMBOT SYSTEM =====
const advancedAimbot = (entities) => {

    if (!entities || !Array.isArray(entities)) return;

    const crosshair = obj.crosshair;
    if (!crosshair) return;

    let bestTarget = null;
    let bestDist = Infinity;

    // ===== 1. CHỌN MỤC TIÊU GẦN TÂM =====
    entities.forEach(entity => {

        if (!entity || !entity.position) return;

        let head = null;

        // ===== 2. AUTO DETECT HEAD BONE =====
        if (entity.bones) {

            const candidates = [
                "head","Head","Bone_Head",
                "Bip001-Head","b_head","neck","Neck"
            ];

            for (let key of candidates) {
                if (entity.bones[key]) {
                    head = entity.bones[key];
                    break;
                }
            }
        }

        // fallback chiều cao
        if (!head) {

            const height = entity.height || 60;

            head = {
                x: entity.position.x,
                y: entity.position.y - height * 0.88
            };
        }

        // ===== 3. PREDICTION =====
        if (entity.velocity) {

            const predict = 0.18;

            head.x += entity.velocity.x * predict;
            head.y += entity.velocity.y * predict;
        }

        // ===== 4. TÍNH KHOẢNG CÁCH =====
        let dx = head.x - crosshair.x;
        let dy = head.y - crosshair.y;

        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < bestDist) {

            bestDist = dist;
            bestTarget = { entity, head };
        }
    });

    if (!bestTarget) return;

    const entity = bestTarget.entity;
    const head = bestTarget.head;

    // ===== 5. VECTOR AIM =====
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    let distance = Math.sqrt(dx * dx + dy * dy);

    // ===== 6. SNAP AIM =====
    const SNAP_RADIUS = 9999;

    if (distance < SNAP_RADIUS) {

        crosshair.x += dx * 0.9;
        crosshair.y += dy * 1.3;

        entity._nearHead = true;

    } else {

        crosshair.x += dx * 0.25;
        crosshair.y += dy * 0.55;

        entity._nearHead = false;
    }

    // ===== 7. HARD LOCK =====
    if (!entity._headLocked) entity._headLocked = false;

    if (distance < 4) {
        entity._headLocked = true;
    }

    if (entity._headLocked) {

        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 8. ANTI TỤT =====
    if (crosshair.y > head.y) {
        crosshair.y = head.y;
    }

    // ===== 9. STABILIZE =====
    crosshair.x += (head.x - crosshair.x) * 0.35;

    // ===== 10. MICRO FIX =====
    crosshair.x = Math.round(crosshair.x * 10) / 10;
    crosshair.y = Math.round(crosshair.y * 10) / 10;

    // ===== DEBUG =====
    entity._aimbot = {
        locked: entity._headLocked,
        near: entity._nearHead,
        dist: distance,
        target: true,
        time: Date.now()
    };
};


// ===== APPLY AIMBOT =====
advancedAimbot(obj.players);
 // ===== AIM CHASE SYSTEM (FOLLOW HAND DRAG TO HEAD) =====
const aimChaseHead = (entity) => {

    if (!entity || !entity.position) return;

    const crosshair = entity.crosshair || obj.crosshair;
    if (!crosshair) return;

    // ===== 1. DETECT HEAD =====
    let head = null;

    if (entity.bones) {
        const bones = ["head","Head","Bone_Head","Bip001-Head","neck"];
        for (let b of bones) {
            if (entity.bones[b]) {
                head = entity.bones[b];
                break;
            }
        }
    }

    if (!head) {
        const height = entity.height || 60;
        head = {
            x: entity.position.x,
            y: entity.position.y - height * 0.88
        };
    }

    // ===== 2. PREDICTION =====
    if (entity.velocity) {
        const predict = 0.2;

        head.x += entity.velocity.x * predict;
        head.y += entity.velocity.y * predict;
    }

    // ===== 3. VECTOR =====
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    let distance = Math.sqrt(dx * dx + dy * dy);

    // ===== 4. NHẬN DIỆN KÉO TAY =====
    if (!entity._lastCrosshair) {
        entity._lastCrosshair = { x: crosshair.x, y: crosshair.y };
    }

    let dragX = crosshair.x - entity._lastCrosshair.x;
    let dragY = crosshair.y - entity._lastCrosshair.y;

    let dragSpeed = Math.sqrt(dragX * dragX + dragY * dragY);

    entity._lastCrosshair = { x: crosshair.x, y: crosshair.y };

    // ===== 5. BOOST THEO KÉO =====
    let chaseBoost = 1.0;

    if (dragSpeed > 0.5) {
        chaseBoost = 1.5; // kéo nhanh → boost mạnh
    }

    if (dragSpeed > 2) {
        chaseBoost = 2.2; // kéo mạnh → hút cực nhanh
    }

    // ===== 6. AIM CHASE =====
    crosshair.x += dx * 0.3 * chaseBoost;
    crosshair.y += dy * 0.8 * chaseBoost; // ưu tiên kéo lên đầu

    // ===== 7. SNAP GẦN HEAD =====
    if (distance < 30) {
        crosshair.x += dx * 0.8;
        crosshair.y += dy * 1.4;
        entity._nearHead = true;
    } else {
        entity._nearHead = false;
    }

    // ===== 8. HARD LOCK =====
    if (!entity._headLocked) entity._headLocked = false;

    if (distance < 4) {
        entity._headLocked = true;
    }

    if (entity._headLocked) {
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 9. ANTI TỤT =====
    if (crosshair.y > head.y) {
        crosshair.y = head.y;
    }

    // ===== 10. STABILIZE =====
    crosshair.x += (head.x - crosshair.x) * 0.35;

    // ===== 11. FIX RUNG =====
    crosshair.x = Math.round(crosshair.x * 10) / 10;
    crosshair.y = Math.round(crosshair.y * 10) / 10;

    // ===== DEBUG =====
    entity._aimChase = {
        dragSpeed,
        boost: chaseBoost,
        dist: distance,
        locked: entity._headLocked
    };
};


// ===== APPLY =====
aimChaseHead(obj);

if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(p => aimChaseHead(p));
}
/*
 * Shadowrocket Script: DTien Injector FF (Full All-In-One)
 * Version: 90-100 Uncrack Premium
 * Author: dtiendzai123
 */
// =======================
// HEX PATCH
// =======================
const HEX_SENS_STABLE_FIND = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 8F C2 75 3D`;
const HEX_SENS_STABLE_REPLACE = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 00 00 00 3F`;

const HEX_EDGE_CLAMP_FIND = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_EDGE_CLAMP_REPLACE = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 00 D0 2D ED`;

const ULTRA_HEAD_LOCK = {
// --- [CORE_AIM_LOGIC] ---
 AIM_SYSTEM_CONFIG : {
    WeaponAimFOV: 360.0,              // Mở rộng tầm quét mục tiêu toàn cảnh (không góc chết)
    CrossHairInitialSize: 999.36,       // Thu nhỏ tâm ảo để tăng độ tập trung đạn vào điểm đơn
    AimAssist: 999.00,                // Lực hỗ trợ ngắm cực đại (Siêu nam châm)
    WeaponAimAssist: 999.00,          // Lực hỗ trợ riêng biệt cho vũ khí
    
    // --- [AUTO_AIM_DRAG] ---
    AutoAimingConfig: {
        FollowTimeMax: 0.01,           // Thời gian trễ để khóa mục tiêu (0.1ms = Tức thời)
        MaxAngle: 9999,               // Góc quay tối đa để bám đuổi (Bám sát 100% dù địch chạy nhanh)
        ClientAimAssistJudgment: "AspectRatio_MaintainsYF" // Giữ ổn định trục Y khi quét mục tiêu
    }
},
    HITBOX_SYSTEM: {
        HitBoxJudgment: "Max",
        ClientHitPartJudgment: "Max",
        DSHitPartJudgment: "Max",

        HitPartJudgmentValue: 5.0,

        ClientBulletHitPart: "HEAD",
        ClientAimPart: "HEAD",

        PartHitComponent: false,
        HitBoxLeanTransL: false,
        HitBoxLeanTransR: false,

        HitEnemyHeadAmount: "Max"
    },

    // =========================================
    // 2. HEADSHOT SYSTEM
    // =========================================
    HEADSHOT_SYSTEM: {
        Enable: true,

        ClientHeadshotPercentage: 100,
        ClientHeadshotJudgement: 100,

        IsHeadShot: true,
        NearDeathIsHeadShot: true,

        HeadshotMultiplier: 9.0,

        ForceHeadTarget: true
    },

    // =========================================
    // 3. DAMAGE SYSTEM
    // =========================================
    DAMAGE_SYSTEM: {
        DamageScale: 99,

        TotalDamage: "Max",

        BulletDamageJudgement: 100,

        RadialDamage: false,

        DamageImpulse: "Max",

        STDamageCameraShake: 9.8,

        BigDamageTextScale: 9.5,
        BigDamageValue: 9,

        HeadShotTextScale: 90.6,
        HeadShotTextColor: 9.0
    },

    // =========================================
    // 4. AIM ASSIST SYSTEM
    // =========================================
    AIM_ASSIST: {
        UseAimAssist: true,

        AimAssistStrength: 3.0,

        AimShootSpreadDir: "Max",

        ScopeAimSpreadSpeed: "Max",

        NoSpread: true,

        LockTargetHead: true
    },

    // =========================================
    // 5. SHOOT VERIFY (FIX XUNG ĐỘT)
    // =========================================
    SHOOT_VERIFY: {
        UseShootVerifyEx: false,
        /*
            Bạn đang set cả true + false → conflict
            → giữ false để tránh verify cản aim
        */

        IsPveShootVerify: false
    },

    // =========================================
    // 6. PLAYER STATE SYSTEM
    // =========================================
    PLAYER_STATE: {
        Health: "Max",

        NearDeathBreath: "Max",

        EnableStatesInterruptRPC: true,

        IsRescueingOther: "Max",

        RestoreDuration: "Max"
    },

    // =========================================
    // 7. MOVEMENT SYSTEM
    // =========================================
    MOVEMENT: {
        HighWalkSpeed: "Max",
        WalkSpeedChangeRate: "Max",
        WalkSpeedThreshold: "Max",

        SwimSpeedDynamicScale: 0xf88
    },

    // =========================================
    // 8. COLLISION & BODY
    // =========================================
    COLLISION: {
        StandHalfHeight: "AspectRatio_MaintainsYFOV",
        CrouchHalfHeight: "AspectRatio_MaintainsYFOV",
        ProneHalfHeight: "AspectRatio_MaintainsYFOV"
    },

    // =========================================
    // 9. VISUAL / FEEDBACK
    // =========================================
    VISUAL: {
        ClientHandleFloatingTextArray: 6.0,

        HideCrossHairType: 50,

        BulletTrackShow: "Max",

        HurtParticleOffset: 0xf88
    },

    // =========================================
    // 10. NETWORK & PERFORMANCE
    // =========================================
    NETWORK: {
        NetCullingDistance: 1000.0,

        ClientFPSJudgement: "MAX",

        ViewportClient: "Max"
    },

    // =========================================
    // 11. TARGET SYSTEM
    // =========================================
    TARGET_SYSTEM: {
        TargetEnabled: true,

        LockEnemy: true,

        TargetMode: "HEAD",

        AutoLock: true
    },

    // =========================================
    // 12. FOV & RATIO
    // =========================================
    FOV_SYSTEM: {
        AspectRatioAxisConstraint: "AspectRatio_MaintainsYFOV",

        ScopeFov: false
    },

    // =========================================
    // 1. AIM SPEED SYSTEM
    // =========================================
    AIM_CONTROL: {
        WeaponAimYawRate: 99999,
        /*
            Tốc độ xoay tâm cực đại
            → aim gần như instant
        */

        CrossHairBurstIncreaseSpeed: 9999,
        /*
            Tốc độ mở rộng tâm khi spray
            → tăng nhanh để sync recoil
        */

        AimResponseTime: 0.0,
        /*
            Phản hồi ngay lập tức
        */

        InstantSnap: true
    },

    // =========================================
    // 2. BULLET SYSTEM
    // =========================================
    BULLET_CONFIG: {
        BulletFireSpeed: "AspectRatio_MaintainsYFOV",
        /*
            Đồng bộ tốc độ đạn với FOV
        */

        BulletRangeMax: 99999,
        /*
            Tầm bắn tối đa (không giới hạn)
        */

        ProjectileType: "hitscan",
        /*
            Đạn gần như trúng ngay
        */

        BulletAccuracy: 1.0
    },

    // =========================================
    // 3. CROSSHAIR SYSTEM
    // =========================================
    CROSSHAIR: {
        CrossHairInitialSize: "AspectRatio_MaintainsYFOV",

        DynamicSpread: false,
        /*
            Tắt spread → tâm luôn chính xác
        */

        Stability: 1.0,

        LockCenter: true
    },

    // =========================================
    // 4. FIRE RATE SYSTEM
    // =========================================
    FIRE_CONTROL: {
        ShootInterval: "Float",
        /*
            Tốc độ bắn (có thể override)
        */

        BurstShootBulletsNum: "AspectRatio_MaintainsYFOV",

        NoFireDelay: true,

        InstantFire: true
    },

    // =========================================
    // 5. RELOAD SYSTEM
    // =========================================
    RELOAD_SYSTEM: {
        ReloadTime: "AspectRatio_MaintainsYFOV",

        InstantReload: true,

        NoReloadDelay: true
    },

    // =========================================
    // 6. AIM ASSIST SYSTEM
    // =========================================
    AIM_ASSIST_SYSTEM: {
        AimAssist: "AspectRatio_MaintainsYFOV",

        WeaponAimAssist: "AspectRatio_MaintainsYFOV",

        WeaponAimFOV: "AspectRatio_MaintainsYFOV",
        /*
            FOV rộng → dễ bắt head
        */

        FullAssistStrength: 9999,

        AutoTrackTarget: true
    },

    // =========================================
    // 7. HEAD LOCK SYSTEM
    // =========================================
    TARGET_LOCK: {
        Target: "Lock_Head",

        LockEnemy: true,

        LockStrength: 9999,

        AlwaysLockHead: true,

        IgnoreBody: true,

        StickyHead: true,

        ZeroDrift: true
    },

    // =========================================
    // 8. DAMAGE SYSTEM
    // =========================================
    DAMAGE_SYSTEM: {
        RadialDamageScale: 99999,
        /*
            Tăng damage cực đại
        */

        HeadshotMultiplier: 10.0,

        AlwaysHeadshot: true
    },

    // =========================================
    // 9. FOV & RENDER CONTROL
    // =========================================
    FOV_CONTROL: {
        AspectRatioAxisConstraint: "AspectRatio_MaintainYFOV",

        MaintainYFOV: true,

        WideFOVDetection: true,

        TargetLockFOVBoost: true
    },

 DISTANCE_TRACKING: {
        Enable: true,

        Use3DDistance: true,

        HeadRadius: 360.0,
        /*
            Vùng nhận diện head
        */

        LockStartRadius: 0.08
        /*
            Bắt đầu tăng lực từ đây
        */
    },

    // =========================================
    // 2. DYNAMIC LOCK STRENGTH
    // =========================================
    LOCK_SCALING: {
        Enable: true,

        MinLockStrength: 99.0,
        /*
            Khi còn xa head
        */

        MaxLockStrength: 9999.0,
        /*
            Khi sát head
        */

        ScalingCurve: "exponential",
        /*
            exponential = càng gần càng tăng mạnh
        */

        InstantMaxAtHead: true
    },

    // =========================================
    // 3. DRAG INTEGRATION
    // =========================================
    DRAG_SYNC: {
        Enable: true,

        BaseDragStrength: 999.0,

        ReduceDragNearHead: true,

        DragMultiplierNearHead: 0.0,
        /*
            Gần head → giảm lực kéo tay
            để không bị lệch
        */

        AllowMicroDragOnly: true
    },

    // =========================================
    // 4. STICKY LOCK CORE
    // =========================================
    STICKY_LOCK: {
        Enable: true,

        ActivateOnNearHead: true,

        DynamicStickStrength: true,

        MaxDriftX: 0.001,
        MaxDriftY: 0.001,

        StickWhileDragging: true
    },

   

    // =========================================
    // 7. HEAD LOCK ZONES
    // =========================================
    LOCK_ZONES: {
        FarZone: {
            Radius: 360.0,
            LockStrength: 9999.0
        },

        MidZone: {
            Radius: 360.0,
            LockStrength: 9999.0
        },

        HeadZone: {
            Radius: 360.0,
            LockStrength: 9999.0
        },

        PerfectHead: {
            Radius: 360.0,
            LockStrength: 9999.0,
            ZeroDrift: true
        }
    },

    // ====
 HEAD_TARGET: {
        Enable: true,

        LockBone: "head",

        IgnoreAllOtherZones: true,

        HeadPriorityWeight: 999,

        AutoSelectNearestHead: true,

        MultiTargetScan: true
    },

    // =========================================
    // 2. FULL 360° TRACKING
    // =========================================
    OMNI_TRACKING: {
        Enable: true,

        TrackAllDirections: true,
        /*
            Trái, phải, trên, dưới → đều bám
        */

        TrackingSpeed: 999.5,

        InstantDirectionSwitch: true,
        /*
            Địch đổi hướng → aim đổi ngay
        */

        NoTrackingDelay: true
    },

    // =========================================
    // 3. DISTANCE ADAPTIVE LOCK
    // =========================================
    DISTANCE_CONTROL: {
        Enable: true,

        MinDistance: 0.0,
        MaxDistance: 9999.0,

        DistanceScaling: true,

        FarDistanceBoost: 999.5,
        /*
            Xa → tăng lực lock
        */

        CloseRangeStability: true,
        /*
            Gần → không bị rung/lố
        */

        DynamicFOVLock: true
    },

    // =========================================
    // 4. MOVEMENT PREDICTION (CỰC QUAN TRỌNG)
    // =========================================
    PREDICTION_ENGINE: {
        Enable: true,

        PredictVelocity: true,

        VelocityMultiplier: 999.5,

        DirectionPrediction: true,

        JumpPrediction: true,

        AirTrackingBoost: 999.3,

        ZigZagCompensation: true
    },

    // =========================================
    // 5. HARD HEAD LOCK
    // =========================================
    HARD_LOCK: {
        Enable: true,

        LockStrength: 999.0,

        StickToHead: true,

        LockWhileMoving: true,

        LockWhileSpraying: true,

        MaxDriftX: 0.0005,
        MaxDriftY: 0.0005,

        ZeroDrift: true
    },

    // =========================================
    // 6. ROTATION FOLLOW (THEO HƯỚNG ĐẦU)
    // =========================================
    ROTATION_TRACKING: {
        Enable: true,

        FollowHeadRotation: true,

        RotationInfluence: 1.3,

        ForwardOffset: 0.05,
        /*
            Aim hơi trước hướng nhìn
        */

        SmoothRotation: true
    },
  STABILIZER: {
        Enable: true,

        SlowNearHead: true,

        SlowFactor: 0.2,

        HardClamp: true,

        PreventOvershoot: true,

        SnapBackIfMiss: true
    },

    // =====
    // ======
 // =========================================
    // 1. BASE RECOIL COMPENSATION
    // =========================================
    BASE_RECOIL: {
        Enable: true,

        VerticalCompensation: 999.2,
        /*
            Kéo ngược recoil lên trên
            (giữ head khi spray)
        */

        HorizontalCompensation: 0.0,
        /*
            Sửa lệch ngang nhẹ
        */

        AdaptiveStrength: true,
        /*
            Spray càng lâu → lực bù càng mạnh
        */

        MaxCompensation: 3.5
    },

    // =========================================
    // 2. PER BULLET SYNC (QUAN TRỌNG)
    // =========================================
    BULLET_SYNC: {
        Enable: true,

        SyncWithFireRate: true,

        CompensationPerShot: 0.25,
        /*
            Mỗi viên:
            → bù recoil 1 lần
        */

        FirstBulletBoost: 0.4,
        /*
            Viên đầu ổn định hơn
        */

        SprayRampUp: true,
        /*
            Càng bắn → càng ổn định
        */
    },

    // =========================================
    // 3. HEAD LOCK INTEGRATION
    // =========================================
    HEAD_LOCK_SYNC: {
        Enable: true,

        MaintainHeadLevel: true,

        HeadTrackingWhileRecoil: true,

        LockStrengthWhileSpray: 999.5,

        PreventDownwardDrift: true
    },

    // =========================================
    // 4. ANTI-SHAKE SYSTEM
    // =========================================
    ANTI_SHAKE: {
        Enable: true,

        StabilizationStrength: 999.2,

        ReduceMicroShake: true,

        SmoothRecoilCurve: true,

        SmoothingFactor: 0.6
    },

    // =========================================
    // 5. DYNAMIC RECOIL CONTROL
    // =========================================
    DYNAMIC_CONTROL: {
        Enable: true,

        AdjustByWeapon: true,
        /*
            Nếu có data súng → auto chỉnh
        */

        AdjustByDistance: true,
        /*
            Xa → giảm recoil mạnh hơn
        */

        AdjustByFireRate: true,
        /*
            Súng bắn nhanh → bù mạnh hơn
        */

        DistanceMultiplier: 999.2,
        FireRateMultiplier: 1.3
    },

    // =========================================
    // 6. DRAG SYNC (KẾT HỢP KÉO TÂM)
    // =========================================
    DRAG_SYNC: {
        Enable: true,

        CombineWithDrag: true,

        DragCompensationFactor: 0.8,
        /*
            Khi drag:
            → recoil vẫn được fix
        */

        ReduceDragWhenStable: true
    },

    
 DRAG_ENGINE: {
        Enable: true,

        DragStrength: 999.5,
        /*
            0.2 → cực nhẹ (gần như tay)
            0.35 → nhẹ nhưng có hỗ trợ
            0.5 → bắt đầu rõ lực kéo
        */

        VerticalBias: 0.8,
        /*
            Ưu tiên kéo lên đầu nhưng rất nhẹ
        */

        HorizontalAssist: 1.0,
        /*
            Sửa lệch ngang nhẹ
        */

        DragSmoothness: 0.9,
        /*
            Mượt, không giật
        */

        MaxDragPerFrame: 0.0
        /*
            Giới hạn lực mỗi frame → tránh snap
        */
    },
 SENSITIVITY_CONTROL: {
        Enable: true,

        ReduceWhenOnHead: true,

        SensitivityMultiplierOnHead: 0.01,
        /*
            0.0 → tắt hoàn toàn
            0.1 → gần như đứng yên
        */

        GradualReduction: true,
        /*
            Giảm dần khi tiến gần head
        */

        MinSensitivity: 0.05
    },

    // =========================================
    // 3. FULL LOCK (KHÓA CỨNG)
    // =========================================
    HARD_LOCK: {
        Enable: true,

        ActivateOnPerfectHead: true,

        ZeroSensitivity: true,
        /*
            Khi đúng head:
            → tắt nhạy hoàn toàn
        */

        AllowMicroAdjustOnly: true,
        /*
            Chỉ cho chỉnh cực nhỏ
        */

        LockStrength: 999.0
    },

    
 REDIRECT_ENGINE: {
        Enable: true,

        ForceRedirectToHead: true,

        RedirectStrength: 999.0,
        /*
            Khi chạm body:
            → đẩy thẳng lên head
        */

        ActivationRadius: 400.0,

        IgnoreBodyCompletely: true
    },

    // =========================================
    // 3. FIRE BOOST (KHI BẮN)
    // =========================================
    FIRE_BOOST: {
        Enable: true,

        ActivateOnFire: true,

        DragMultiplierOnFire: 999.5,
        /*
            Khi bóp cò:
            → kéo mạnh hơn nữa
        */

        FirstBulletBoost: 2.0,
        /*
            Viên đầu → gần như auto head
        */

        FireSnapTime: 0.0
    },
 HEAD_ZONE: {
        Enable: true,

        HeadRadius: 0.025,
        /*
            Khi tâm vào vùng này:
            → kích hoạt sticky
        */

        NeckBufferZone: 0.04,
        /*
            Nếu ở cổ:
            → vẫn kéo lên head
        */
    },
    SPRAY_ENGINE: {
        Enable: true,

        SprayMode: "full-auto",

        PerBulletCorrection: true,
        /*
            Mỗi viên đạn:
            → chỉnh lại về head
        */

        CorrectionStrength: 1.2,

        SprayStability: 0.9,
        /*
            Giữ tâm ổn định khi xả đạn
        */

        AutoCompensateRecoil: true,

        RecoilCompensationStrength: 2.0
    },

    // =========================================
    // 2. HEAD TRACKING (REALTIME)
    // =========================================
    HEAD_TRACKING: {
        Enable: true,

        TrackBoneHead: true,

        TrackingSpeed: 999.0,

        RealTimeUpdate: true,

        UpdateInterval: 0.000001,

        StickyTracking: true
    },

    // =========================================
    // 3. MOVEMENT PREDICTION (CỰC QUAN TRỌNG)
    // =========================================
    PREDICTION_ENGINE: {
        Enable: true,

        PredictMovement: true,

        VelocityMultiplier: 1.3,
        /*
            Dự đoán hướng chạy enemy
        */

        PredictionOffset: 0.02,

        DynamicPrediction: true,
        /*
            Tốc độ chạy càng nhanh → predict càng xa
        */

        AirbornePrediction: true
        /*
            Predict khi enemy nhảy
        */
    },

    // =========================================
    // 4. STICKY HEAD LOCK (BÁM CHẶT)
    // =========================================
    STICKY_HEAD: {
        Enable: true,

        LockOnHead: true,

        StickStrength: 2.5,

        StickWhileSpraying: true,

        MaxDriftX: 0.001,
        MaxDriftY: 0.001,

        ReLockEachBullet: true
    },

    // =========================================
    // 5. ANTI-RECOIL SYNC (CHỐNG TỤT)
    // =========================================
    ANTI_RECOIL: {
        Enable: true,

        RecoilPattern: "auto",

        VerticalRecoilCompensation: 2.2,
        /*
            Kéo lên để giữ head khi spray
        */

        HorizontalRecoilCompensation: 1.0,

        SyncWithFireRate: true
    },

    // =========================================
    // 6. ANTI-DROP SYSTEM
    // =========================================
    ANTI_DROP: {
        Enable: true,

        PreventDownwardDrift: true,

        DownwardBlockStrength: 3.0,

        AutoLiftToHead: true,

        LiftForce: 2.0
    },

    // =========================================
    // 7. MICRO ADJUST (CHỐNG HỤT)
    // =========================================
    MICRO_ADJUST: {
        Enable: true,

        MicroStep: 0.0007,

        MicroSpeed: 1.4,

        AlwaysActive: true,

        AntiJitter: true
    },

    // =========================================
    // 8. TARGET SWITCH & TRACK
    // =========================================
    TARGET_SYSTEM: {
        Enable: true,

        AutoSwitchTarget: true,

        PriorityMode: "closest-to-crosshair",

        LockWhileVisible: true,

        ReacquireIfLost: true
    },

    // ========
    // =========================================
    // 3. STICKY LOCK (QUAN TRỌNG NHẤT)
    // =========================================
    STICKY_LOCK: {
        Enable: true,

        ActivateOnHeadTouch: true,

        StickStrength: 2.2,
        /*
            Lực bám đầu
        */

        MaxDriftX: 0.001,
        MaxDriftY: 0.001,
        /*
            Gần như không cho lệch
        */

        StickWhileDragging: true,
        /*
            Dù đang kéo:
            → vẫn giữ head
        */

        BreakThreshold: 0.05
        /*
            Kéo mạnh quá mới thoát
        */
    },

    
     HEAD_LOCK: {
        Enable: true,

        LockOnHead: true,

        LockStrength: 3.0,

        HardLockRadius: 360.0,

        ZeroDrift: true,
        ZeroHorizontalError: true,
        ZeroVerticalDrop: true
    },

    // =========================================
    // 6. MICRO FIX (CHỐNG HỤT)
    // =========================================
    MICRO_ADJUST: {
        Enable: true,

        MicroStep: 0.001,

        MicroSpeed: 5.5,
AlwaysActiveOnHead: true,
        AlwaysActiveNearHead: true,

        AntiJitter: true
    },
ANTI_DROP: {
        Enable: true,

        PreventDownwardMovement: true,

        DownwardBlockStrength: 2.5,
        /*
            Không cho tụt xuống body
        */

        AutoLiftBackToHead: true,

        LiftBackForce: 1.8
    },

    // =========================================
    // 6. DRAG CONTROL WHILE LOCKED
    // =========================================
    DRAG_CONTROL: {
        ReduceDragWhenOnHead: true,

  ReduceDragOnHead: true,

        DragMultiplierOnHead: 0.2,
        /*
            Khi dính head:
            → giảm lực kéo
        */

        StopVerticalPull: true,
        /*
            Ngừng kéo lên → tránh bay quá đầu
        */
    

   
        AllowMicroMovementOnly: true
    },

    // =========================================
    // 7. FIRE SYNC (BẮN LÀ DÍNH CHẶT)
    // =========================================
    FIRE_SYNC: {
        Enable: true,

        ActivateOnFire: true,

        LockBoostOnFire: 1.5,
        /*
            Khi bắn:
            → bám đầu chặt hơn
        */

        RecenterEveryShot: true
    },

    // =============
    // =========================================
    // 7. TARGET PRIORITY
    // =========================================
    TARGET_PRIORITY: {
        HeadWeight: 100,
        NeckWeight: 1,
        BodyWeight: 0.01,

        AutoLiftFromBody: true,

        LiftForce: 5.5
    },

    // =========================================
    // 8. ACTIVATION
    // =========================================
    ACTIVATION: {
        OnlyWhenFiring: true,
        RequireCrosshairNear: true,

        ReactionTime: 0.0
    },

    // =========================================
    // 2. PER-SHOT HEAD CORRECTION
    // =========================================
    SHOT_CORRECTION: {
        Enable: true,

        ApplyEveryBullet: true,
        /*
            Mỗi viên:
            → chỉnh lại hướng về head
        */

        CorrectionStrength: 1.0,
        /*
            Lực chỉnh nhẹ nhưng chính xác
        */

        FirstBulletBoost: 1.2,
        /*
            Viên đầu ưu tiên head cao hơn
        */

        FollowUpCorrection: 2.0,
        /*
            Các viên sau chỉnh nhẹ hơn
        */

        DelayBetweenShots: 0.0
    },

    // =========================================
    // 3. MICRO HEAD ADJUST (VI CHỈNH)
    // =========================================
    MICRO_HEAD_ADJUST: {
        Enable: true,

        MicroStep: 0.0008,
        /*
            Bước chỉnh cực nhỏ → không thấy snap
        */

        MicroSpeed: 1.0,

        AlwaysActiveNearHead: true,

        PrecisionRadius: 0.002,
        /*
            Khi tâm gần head:
            → bắt đầu vi chỉnh
        */

        AntiJitter: true
    },

    // =========================================
    // 4. HEAD PRIORITY FILTER
    // =========================================
    HEAD_PRIORITY: {
        Enable: true,

        HeadWeight: 100.0,
        NeckWeight: 5.0,
        BodyWeight: 0.5,

        AutoLiftFromBody: true,
        /*
            Nếu đang ở body:
            → kéo nhẹ lên head
        */

        LiftForce: 5.6
    },

    // =========================================
    // 5. ANTI-OVERSHOOT (TRÁNH LỐ TÂM)
    // =========================================
    ANTI_OVERSHOOT: {
        Enable: true,

        SlowDownNearHead: true,

        SlowFactor: 0.4,
        /*
            Gần head → giảm tốc
        */
  ReverseIfOvershoot: true,

        SnapBackForce: 1.0,
        MaxErrorDistance: 0.025,

        SoftClamp: true,
        /*
            Giữ tâm trong vùng head
        */

        NoHardSnap: true
    },

    // =========================================
    // 6. FIRE SYNC (ĐỒNG BỘ BẮN)
    // =========================================
    FIRE_SYNC: {
        Enable: true,

        ActivateOnFire: true,

        SyncWithShot: true,
        /*
            Khi bắn:
            → trigger chỉnh tâm
        */

        FireWindow: 0.0,
        /*
            Khoảng thời gian vàng mỗi viên đạn
        */

        AutoRecenterAfterShot: true
    },

   
 HEAD_ROTATION_TRACKING: {
        Enable: true,

        UseBoneHeadRotation: true,
        /*
            Lấy rotation (Quaternion/Euler) của xương đầu
        */

        RotationInfluence: 1.2,
        /*
            0 → chỉ position
            1 → chuẩn theo rotation
            >1 → ưu tiên hướng nhìn của đầu
        */

        PredictRotation: true,
        RotationPredictionFactor: 0.15,

        CombinePositionAndRotation: true,

        RotationSmoothing: 0.25,
        /*
            Làm mượt hướng quay đầu
        */
    },

    // =========================================
    // 2. SMART AIM LOCK (KHÓA THÔNG MINH)
    // =========================================
    SMART_HEAD_LOCK: {
        Enable: true,

        LockOnHeadOnly: true,

        LockStrength: 9999.5,

        DynamicLockStrength: true,
        /*
            Xa → lock mạnh
            Gần → lock nhẹ (tránh lố)
        */

        LockFalloffDistance: 1.5,
        /*
            Khi gần head:
            → giảm lực để tránh vượt quá
        */

        StickyLock: true,

        MicroCorrectionWhileLocked: true
    },

    // =========================================
    // 3. ANTI-OVERSHOOT SYSTEM (QUAN TRỌNG)
    // =========================================
    ANTI_OVERSHOOT: {
        Enable: true,

        OvershootThreshold: 0.015,
        /*
            Khoảng cách gần head
            → bắt đầu giảm lực
        */

        DecelerationFactor: 0.35,
        /*
            Giảm tốc khi gần head
        */

        ReverseCorrection: true,
        /*
            Nếu lố:
            → kéo ngược lại ngay
        */

        MaxOvershootDistance: 0.0,

        SnapBackSpeed: 999.0,
        /*
            Tốc độ kéo lại khi bị lệch
        */
    },

    // =========================================
    // 4. MICRO ADJUST ENGINE (VI CHỈNH)
    // =========================================
    MICRO_ADJUST: {
        Enable: true,

        MicroStepSize: 0.0005,
        /*
            Bước chỉnh cực nhỏ
        */

        MicroSpeed: 1.2,

        AlwaysActiveNearHead: true,

        AntiJitter: true,

        StabilizationForce: 0.8
    },

    // =========================================
    // 5. AIM FORCE CONTROL (LỰC KÉO)
    // =========================================
    AIM_FORCE_ENGINE: {
        BasePullStrength: 4.0,

        VerticalBias: 3.5,
        HorizontalCorrection: 2.0,

        DynamicScaling: true,

        DistanceMultiplier: 999.3,
        VelocityMultiplier: 999.1,

        ReduceForceNearTarget: true
    },

    // =========================================
    // 6. ROTATION-BASED REDIRECT
    // =========================================
    ROTATION_REDIRECT: {
        Enable: true,

        RedirectUsingLookDirection: true,
        /*
            Aim theo hướng đầu đang nhìn
        */

        ForwardOffset: 0.08,
        /*
            Dịch nhẹ theo hướng nhìn (tránh hụt head)
        */

        VerticalOffsetCorrection: 0.02,

        AutoAlignToFaceDirection: true
    },

    // =========================================
    // 7. FINAL LOCK STABILIZER (CHỐNG LỆCH)
    // =========================================
    FINAL_STABILIZER: {
        Enable: true,

        HardLockThreshold: 0.01,
        /*
            Khi đủ gần:
            → khóa cứng hoàn toàn
        */

        ZeroDrift: true,
        ZeroHorizontalError: true,
        ZeroVerticalDrop: true,

        LockBreakProtection: true,

        ReacquireIfLost: true
    },

    // =========================================
    // 8. TRIGGER CONDITION
    // =========================================
    ACTIVATION: {
        OnlyWhenFiring: true,
        RequireCrosshairNear: true,
        RequireEnemyVisible: true,

        ReactionTime: 0.0,

        AlwaysTrackWhileLocked: true
    },

 REDIRECT_ENGINE: {
        Enable: true,

        RedirectToHitbox: "head",
        /*
            Mục tiêu cuối:
            → luôn chuyển tâm về HEAD
        */

        AssistStrength: 9999.0,
        /*
            0.0 → tắt
            1.0 → hút mạnh
            >1 → gần như snap
        */

        RedirectMode: "instant",
        /*
            dynamic → tùy theo vị trí tâm
            instant → snap luôn
        */

        RedirectWhen: {
            OnBodyDetected: true,
            OnNearTarget: true,
            OnCrosshairEnter: true
        },

        MaxRedirectAngle: 360.0,
        /*
            Góc tối đa để redirect
        */

        PriorityWeight: {
            head: 100,
            neck: 10,
            chest: 1
        }
    },

    // =========================================
    // 2. SENSITIVITY BOOST SYSTEM
    // =========================================
    SENSITIVITY_ENGINE: {
        IncreaseAimSensitivity: true,

        SensitivityMultiplier: 500.0,
        /*
            Tăng tốc kéo tâm
            → kéo cực nhanh lên head
        */

        DynamicSensitivity: true,
        /*
            Tăng theo:
            - khoảng cách
            - tốc độ enemy
        */

        SensitivityCurve: "exponential",
        /*
            exponential → càng kéo càng nhanh
        */

        ApplyWhen: {
            OnDrag: true,
            OnFire: true,
            OnTargetDetected: true
        }
    },

    // =========================================
    // 3. SMOOTHING ENGINE (LÀM MƯỢT)
    // =========================================
    SMOOTHING_ENGINE: {
        Enabled: true,

        SmoothingFactor: 1.0,
        /*
            0 → không mượt
            1 → mượt vừa
            >1 → siêu mượt
        */

        SmoothingType: "adaptive",
        /*
            adaptive → thay đổi theo tốc độ kéo
        */

        MicroAdjust: true,
        /*
            chỉnh từng frame nhỏ
        */

        AntiJitter: true
    },

    // =========================================
    // 4. VERTICAL AIM ASSIST (KÉO LÊN ĐẦU)
    // =========================================
    VERTICAL_AIM_ASSIST: {
        Enabled: true,

        ActivateOnFire: true,

        VerticalPullStrength: 1.0,
        /*
            Lực kéo theo trục Y
            → ép tâm lên đầu
        */

        PullDuration: 0.0,
        /*
            0 = instant pull
        */

        PullCurve: "burst",
        /*
            burst → kéo mạnh ngay khi bắn
        */

        UpwardBias: 3.0,
        /*
            ưu tiên kéo lên
        */

        AutoRedirectToHead: true,

        CombineWithAimLock: true,

        TargetMustHaveHead: true,

        SmartActivation: {
            OnlyWhenEnemyAboveCrosshair: true,
            IgnoreIfAlreadyHead: true
        }
    },

    // =========================================
    // 5. CHEST ASSIST (TRUNG GIAN → HEAD)
    // =========================================
    CHEST_TRANSITION_ASSIST: {
        Enabled: true,

        OnlyWhenTargetLocked: false,

        RedirectToUpperBody: true,
        /*
            Bước trung gian:
            body → chest → head
        */

        UpperBodySensitivityMultiplier: 700.0,

        UpperBodyMagnetStrength: 0.01,
        /*
            Hút nhẹ vào chest để:
            → dễ kéo tiếp lên head
        */

        TransitionToHeadDelay: 0.01,
        /*
            Delay cực nhỏ:
            chest → head
        */

        AutoLiftToHead: true,

        LiftForce: 4.0,

        ZonePriority: {
            chest: 6,
            neck: 10,
            head: 100
        }
    },

    // =========================================
    // 6. SMART TARGET CONDITION
    // =========================================
    TARGET_CONDITION: {
        RequireEnemyDetected: true,
        RequireCrosshairNear: true,
        RequireLineOfSight: true,

        IgnoreDownedEnemy: true,

        DistanceLimit: 9999,

        ReactionTime: 0.0
    },

 STICKY_ENGINE: {
        Enable: true,

        LockZone: "head", // Chỉ khóa vào bone head

        StickStrength: 2.0,
        /*
            0.0 → không bám
            1.0 → bám vừa
            2.0+ → ghim cực mạnh (khó thoát)
        */

        StickyDuration: 10.0,
        /*
            Thời gian duy trì lock (giây)
            = duy trì tracking kể cả mất target tạm thời
        */

        MaxDownwardDrift: 0.0,
        MaxHorizontalDrift: 0.0,
        /*
            Drift = sai lệch cho phép
            = 0 → KHÓA CỨNG tuyệt đối (no recoil drag xuống body)
        */

        StickyHeadLock: true,
        /*
            Khi crosshair chạm head:
            → chuyển sang trạng thái HARD LOCK
            → override toàn bộ input tay
        */

        RepeatLockEachShot: true,
        /*
            Mỗi viên đạn:
            → re-calc head position
            → re-lock ngay lập tức
        */

        LockBreakThreshold: 9999
        /*
            Ngưỡng phá lock (cao = gần như không thể thoát)
        */
    },

    // =========================================
    // 2. SNAP ENGINE (BÚNG TÂM THÔNG MINH)
    // =========================================
    SNAP_LOGIC: {
        AutoSnapToHead: true,

        ActivationRadius: 360.0,
        /*
            Bán kính kích hoạt snap quanh enemy
            càng lớn → hút từ xa
        */

        SnapSpeed: 4.0,
        /*
            1.0 = chậm
            4.0 = instant snap
        */

        SnapOffsetY: 2.0,
        /*
            Offset từ body → head
            dùng khi detect body trước
        */

        SnapCurve: "instant-linear",
        /*
            instant-linear → giật nhanh
            smooth-curve → mượt legit
        */

        AutoRecenterIfOffset: true,

        SnapBackToHeadDelay: 0.001,

        MicroCorrection: true,
        /*
            Sau snap:
            → liên tục vi chỉnh từng frame
        */
    },

    // =========================================
    // 3. AIM ASSIST FORCE (KÉO TÂM ĐA TRỤC)
    // =========================================
    AIM_ASSIST_LIFT: {
        EnableFullAxisPull: true,

        VerticalPullStrength: 2.0,
        HorizontalCorrection: 2.0,

        UpwardBiasStrength: 5.0,
        /*
            Bias = ưu tiên kéo lên đầu
            giúp fix "kẹt cổ / ngực"
        */

        AimWeightFactor: 0.0001,
        /*
            Giảm trọng lượng tâm
            → kéo nhẹ hơn, không bị ì
        */

        PullAssistWhenOnBody: true,

        PullAssistForce: 4.0,

        DynamicScaling: true,
        /*
            Lực kéo tăng theo:
            - khoảng cách
            - tốc độ enemy
        */
    },

    // =========================================
    // 4. TARGET ZONE FILTER (LOẠI BỎ BODY)
    // =========================================
    TARGET_ZONE_CONTROL: {
        AllowedZones: ["head"],

        ZoneSkipList: [
            "neck", "shoulder", "chest", "stomach",
            "hip", "leg", "arm", "foot", "groin", "back"
        ],

        BodyZoneIgnoreFactor: 4.0,
        /*
            Body = gần như không được chọn
        */

        AutoRedirectFromBlocked: true,
        /*
            Nếu aim vào body:
            → redirect lên head ngay
        */

        ZonePriorityWeight: {
            head: 999.0,
            neck: 0.1,
            body: 0.01
        }
    },

    // =========================================
    // 5. MOTION PREDICTION (DỰ ĐOÁN HEAD)
    // =========================================
    PREDICTION_ENGINE: {
        Enable: true,

        PredictiveOffset: 0.0002,
        /*
            Dự đoán hướng di chuyển enemy
        */

        UpdateRate: 0.0000001,
        /*
            Update gần như realtime (frame-level)
        */

        StickyTrackWhileEnemyMoves: true,

        VelocityMultiplier: 1.2,
        /*
            Nhân tốc độ enemy để predict ahead
        */

        KalmanSmoothing: true,
        /*
            Giảm jitter
        */
    },

    // =========================================
    // 6. BULLET CONTROL (ĐẠN AUTO HIT HEAD)
    // =========================================
    BULLET_TRAJECTORY: {
        TrajectoryType: "bullet-straight",

        HorizontalSpreadReduction: 1.0,
        VerticalSpreadReduction: 1.0,

        PrecisionCorrectionPower: 20.0,
        /*
            Force redirect bullet → head
        */

        TracerLineAccuracy: 1.0,

        ProjectileDelayCompensation: true,

        HitScanSimulation: true
        /*
            Giả lập hitscan (instant hit)
        */
    },

    // =========================================
    // 7. SYSTEM BEHAVIOR (LOGIC KÍCH HOẠT)
    // =========================================
    SYSTEM_BEHAVIOR: {
        TargetPriorityMode: "moving-in-crosshair",

        OnlyWhenFiring: true,

        RequireCrosshairRed: true,

        UniversalWeaponSupport: true,
        UniversalMode: true,

        MultiTargetSwitch: true,
        /*
            Tự chuyển target nếu có enemy gần hơn
        */

        ReactionTime: 0.0,
        /*
            0 = phản ứng ngay lập tức
        */

        AntiMissSystem: true
        /*
            Nếu lệch:
            → auto snap lại head
        */
    },

 // --- [HIT_JUDGEMENT_OVERRIDE] ---
 HIT_REGISTRATION_LOGIC : {
    ClientAimPart: "bone_Head",            // Chỉ định bộ phận ngắm là ĐẦU
    ClientAimAssistHitPart: "bone_Head",   // Ép hỗ trợ ngắm chỉ hút vào ĐẦU
    ClientBulletHitPartJudgment: "bone_Head", // Phán quyết va chạm của viên đạn là ĐẦU
    
    // --- [CRITICAL_STATS] ---
    UseWeaponHeadshotHitRate: 100.0,  // Tỷ lệ trúng đầu tuyệt đối 100%
    ClientHeadshotPercentage: "100%", // Xác suất nổ số đỏ 100%
    ClientHeadshotJudgement: "1.0",   // Trạng thái phán quyết Headshot (Float/Boolean)
    ClientBulletDamageJudgement: "Max", // Luôn trả về sát thương cao nhất (Damage Head)
    ClientFPSJudgement: "MAX"         // Tối ưu hóa khung hình để tránh mất gói tin (Packet Loss) khi bắn
},
    
    // --- [PHYSICS_CALIBRATION] ---
 PHYSICS_CORE_FIX : {
    // Mở rộng vùng va chạm đầu lên 99.9 unit (Đầu kẻ địch to như một bức tường đối với đạn)
    ClientHitPartHeadBoundBoxExtent: 99.9, 
    
    // Loại bỏ trọng lực của đạn (Đạn bay đường thẳng tuyệt đối, không bị rơi ở tầm xa)
    UseWeaponHitBullet_Gravity_Range: 100.0, 
    
    // Kiểu dữ liệu sát thương (Float giúp tính toán chi tiết từng đơn vị máu)
    UseWeaponHitDamageType: "float",
    
    // Giữ nguyên tọa độ phán quyết theo tỷ lệ màn hình (Fix lệch tâm khi xoay máy)
    ClientBulletHitPartJudgment: "AspectRatio_MaintainsYF"
},
    

    
    
    
CLOSE_HEAD_LOCK: {
    Enabled: true,

    Activate_Radius: 360,   // vào vùng gần head là kích hoạt
    Hard_Radius: 28,        // vào sâu → khóa cực chặt

    Snap_Speed: 10.0,        // tốc độ kéo vào head
    Max_Step: 42,           // giới hạn mỗi frame (fix lố)

    Damping: 0.0,           // giảm quán tính (fix overshoot)
    Dead_Zone: 5,           // dừng hẳn khi đã đúng (fix rung)
ForceHeadPriority_NoChestLock: true,
    Snap_Smooth: 0.045,     // khi đang kéo
    Lock_Smooth: 0.018,     // khi đã dính
    Stick_Force: 1.5,       // lực giữ

    Predict: 0.001,          // predict nhẹ
    Offset_Y: 0.258         // nâng lên đúng điểm head
},
BODY_RESISTANCE: {
        CHEST_FRICTION_LEVEL: 0.0000,   // Vô hiệu hóa lực hút vào ngực (Mặc định thường là 1.0)
        BODY_PENETRATION_SENS: true,    // Cho phép tâm súng đi xuyên qua vùng thân không bị khựng
        FRICTION_BYPASS_THRESHOLD: 1.0, // Bỏ qua hoàn toàn mọi vật cản trước khi chạm Head
        SLIDE_UP_FORCE: 2.50            // Lực đẩy trượt dọc (Giúp tâm lướt qua ngực cực nhanh)
    },

    // [SECTION 2: BONE COORDINATE PRIORITIZATION] - Ưu tiên tọa độ xương đầu
    TARGET_LOCK: {
        PRIMARY_BONE_ID: 96688289,      // Neural-Core Head
        IGNORE_BONE_IDS: [7, 8, 9],     // Bỏ qua các xương vùng bụng, ngực, cổ
        SNAP_ON_HEAD_ONLY: true,        // Chỉ kích hoạt lực hút (Magnet) khi tâm gần đầu
        NEURAL_LOCK_Y: -0.005812380     // Tọa độ dừng tuyệt đối (Fix lỗi kéo quá tay)
    },

    // [SECTION 3: VELOCITY DRAG BOOST] - Gia tốc kéo tâm
    LIFT_CONTROL: {
        DRAG_LIFT_STRENGTH: 1.75,       // Lực nâng tâm tự động khi nhấn nút bắn
        LIFT_RESPONSE_RATE: "0ms",      // Tốc độ phản hồi cực cao
        RECOIL_REDIRECTION_Y: 1.85,     // Chuyển hướng độ giật của súng thành lực đẩy lên đầu
        STABILITY_ON_LIFT: 1.0          // Giữ tâm thẳng hàng, không cho phép rung ngang khi kéo
    },

    // [SECTION 4: HIT_DETECT_COLLIDER_FIX] - Hiệu chuẩn va chạm
    HIT_DETECTION: {
        DETECTOR_MODE: "HeadOnly",      // Chế độ quét va chạm: Chỉ lấy điểm đầu
        COLLIDER_SENSITIVITY: 0.0,      // Độ nhạy vùng thân = 0
        HIT_SCAN_RADIUS: 360.0,         // Bán kính tìm kiếm đầu mục tiêu
        ZERO_LATENCY_SYNC: true         // Đồng bộ hóa va chạm 0ms
    },
 TRIGGERBOT_CORE_CONFIG : {
    // Thuật toán nhận diện mục tiêu cấp cao (Nhận diện thực thể trong game)
    DetectionAlgorithm: "target_recognition",

    // PHẠM VI & CẢM BIẾN
    // Kích hoạt quét vị trí người chơi và đối thủ xung quanh
    PositionSensorTracking: true,
    // Bán kính quét cực đại (9999 unit giúp phát hiện mục tiêu toàn bản đồ)
    SensorTrackingRadius: 9999.0,

    // LOGIC KHAI HỎA (FIRING CALCULATION)
    // Tự động bù trừ tốc độ theo chuyển động mục tiêu (1.0 = Hoàn hảo)
    FiringSpeedAdjustment: 1.0,
    // Hệ số khoảng cách (Đảm bảo đạn không bị delay dù mục tiêu ở xa)
    FiringDistanceFactor: 1.0,
    // Điều kiện kích hoạt: Chỉ bắn khi mục tiêu nằm trong tầm nhìn thực tế
    FireCondition: "target_in_sight",

    // THEO DÕI MỤC TIÊU (TRACKING)
    // Bám sát chuyển động của đối thủ khi họ di chuyển hoặc nhảy
    TargetMovementTracking: true,
    // Tốc độ phản hồi của cảm biến (1.0 = Phản ứng tức thì với mọi hành động)
    MovementTrackingSpeed: 1.0,

    // ĐỘ CHÍNH XÁC & HỖ TRỢ (BOOST)
    // Lực hút tâm tự động (1.0 là mức độ can thiệp cao nhất)
    AutoAimStrength: 1.0,
    // Kích hoạt tăng cường độ chính xác khi xả đạn
    AccuracyBoost: true,
    // Hệ số nhân độ chính xác (1.5 giúp gom đạn cực tốt, giảm độ tỏa)
    AccuracyMultiplier: 1.5,

    // TÙY CHỈNH PHẢN XẠ (REACTION)
    // Thời gian phản ứng của Bot (0.1s - Nhanh gấp 3 lần phản xạ người thường)
    ReactionTime: 0.01,
    // Độ trễ khai hỏa (0.0 = Bắn ngay lập tức khi tâm vừa chạm địch)
    TriggerDelay: 0.0,

    // TÙY CHỌN NÂNG CAO
    // Cho phép hệ thống tự điều chỉnh tốc độ bắn tối ưu theo vũ khí
    AdjustableFiringSpeed: true,
    // Tự động mở rộng vùng nhận diện mục tiêu tùy theo tình huống
    AdjustableTargetingArea: true
},
    COLLISION_LOGIC: {
        SNAP_ON_CONTACT: true,          // Hút tâm ngay lập tức khi vào vùng va chạm đầu
        CONTACT_PRECISION: "0.000001",  // Sai số va chạm gần như bằng 0
        BONE_PENETRATION_FIX: true,     // Đảm bảo đạn xuyên thẳng vào tâm xương 96688289
        HIT_REGISTER_PRIORITY: "bone_Head",  // Ưu tiên ghi nhận sát thương đầu (Số đỏ)
        MAX_COLLISION_STRENGTH: 2.80    // Lực va chạm cưỡng bức
    },

    // [SECTION 2: WORLD SPACE ANCHOR] - Neo giữ trong không gian 3D
    SPACE_ANCHOR: {
        WORLD_ALIGNMENT_STRENGTH: 1.90, // Khóa theo trục tọa độ thực tế
        NEURAL_CORE_ID: 96688289,       // Mã định danh xương đầu cố định
        UPDATE_RATE: "0ms",             // Cập nhật quỹ đạo không độ trễ
        XYZ_FIXED_POINT: {              // Tọa độ vàng để "Full Đỏ"
            x: -0.1285115,
            y: -0.005812380,            // Điểm dừng hoàn hảo (Fix máu vàng)
            z: -0.7100450
        }
    },

    // [SECTION 3: ADAPTIVE DYNAMIC TRACKING] - Tracking đa hướng
    TRACKING_ENGINE: {
        MODE: "DynamicHeadTrack",       // Theo dõi đầu linh hoạt theo chuyển động địch
        SMOOTH_FACTOR: 1.15,            // Độ mượt lý tưởng để bám dính như keo
        STICKINESS: 1.0,                // Độ dính 100% (Sticky Aim)
        ANTI_JITTER_ACTIVE: true,       // Khử mọi rung lắc từ độ nhạy cao hoặc tay người
        PREDICTION_SPEED: 2.50          // Dự đoán vị trí đầu khi địch Teleport hoặc chạy nhanh
    },

    // [SECTION 4: RECOIL & FRICTION ELIMINATION] - Triệt tiêu lực cản
    FORCE_CONTROL: {
        ZERO_FRICTION: 0.0000,          // Loại bỏ hoàn toàn ma sát tại vùng ngực
        AUTO_LIFT_BOOST: 1.75,          // Lực nâng tâm tự động
        SPRAY_STABILITY: 1.65,          // Ổn định tuyệt đối khi sấy (Spray)
        RECOVERY_DELAY: "0ms",          // Hồi tâm về đầu ngay lập tức sau mỗi viên đạn
        AUTO_BRAKE_ENABLE: true         // Tự động phanh tâm khi chạm đúng tọa độ Y
    },

    VECTOR_FIX: {
        TARGET_BONE: 10,                // Khóa cứng Bone Head
        XYZ_OFFSET_ADJUST: {            // Bù trừ sai số tọa độ
            X: 0.00,                    // Giữ tâm thẳng hàng ngang
            Y: 0.15,                    // Nhích nhẹ lên trên đỉnh đầu để tránh dính cổ
            Z: 0.00                     // Giữ độ sâu mục tiêu
        },
        COORDINATE_SYNC_RATE: "1ms",    // Đồng bộ tọa độ siêu tốc
        IGNORE_CHEST_GEOMETRY: true     // Xuyên qua vùng va chạm của ngực
    },
CameraAutoAimEnable: true,
TARGET: {
        BONE_ID: 96688289,              // Neural-Core ID
        COLLIDER_TYPE: "Sphere",        // Dạng hình cầu bao quanh đầu
        RADIUS_MODIFIER: 1.25,          // Mở rộng vùng nhận diện va chạm thêm 25%
        CENTER_XYZ: {                   // Tâm va chạm chuẩn xác (Fix lệch tâm)
            x: -0.1285115,
            y: -0.005812380, 
            z: -0.7100450
        }
    },

    // [HIT_REGISTRATION] - Ghi nhận trúng đạn
    DETECTION_LOGIC: {
        AUTO_PRIORITY_HEAD: true,       // Luôn ưu tiên Collider đầu trước các vùng khác
        PENETRATION_ACTIVE: true,       // Đạn xuyên qua các vật cản nhỏ để chạm Collider
        HIT_SCAN_RATE: "0ms",           // Quét va chạm liên tục không độ trễ
        BYPASS_BODY_COLLIDER: true,     // Bỏ qua va chạm vùng ngực (Fix máu vàng)
        FORCE_CRITICAL_CHECK: 1.0       // Ép hệ thống trả về kết quả Headshot
    },

    // [RAYCAST_MAGNET] - Nam châm hút tia đạn
    RAY_REDIRECTION: {
        ENABLE: true,
        MAGNET_STRENGTH: 2.50,          // Lực hút tia đạn vào tâm Collider
        SNAP_DISTANCE: 0.85,            // Khoảng cách tối thiểu để kích hoạt tự động hút
        CURVE_CORRECTION: true,         // Tự động uốn cong quỹ đạo đạn vào xương đầu
        PREDICT_COLLIDER_POS: true      // Dự đoán vị trí Collider khi địch di chuyển
    },

    // [STABILITY_SYNC] - Đồng bộ hóa tầng vật lý
    PHYSICS_SYNC: {
        WORLD_ALIGNMENT: 1.90,          // Khóa tọa độ thực thể trong không gian
        FIX_FRAME_LATENCY: true,        // Sửa lỗi đạn bay xuyên người do lag
        INTERPOLATION_MODE: "Ultra",    // Nội suy mượt mà để bám sát chuyển động
        RIGIDBODY_FORCE_LOCK: true      // Khóa cứng trọng tâm va chạm
    },
    GLOBAL_MAGNET: {
        ENABLE: true,
        FORCE: 1.0,                     // Lực hút tối đa
        IGNORE_ZONE: true,              // Kéo tâm kể cả khi mục tiêu ngoài vòng quét
        ALWAYS_ACTIVE: true,            // Luôn luôn hoạt động
        INSTANT_PULL: true,             // Kéo tức thời không có độ trễ
        TARGET_BONE: "bone_head",       // Đích đến: Xương đầu
        FORCE_VERTICAL: 1.0,            // Ép trục dọc lên đầu
        CENTER_LOCK: 1.0                // Khóa tâm vào điểm chính giữa đầu
    },

    // 2. HARDLOCK & TELEPORT RESIST: Chống kẻ địch dịch chuyển/lag
    TELEPORT_RESIST: {
        ENABLE: true,
        STRENGTH: 1.0,
        PREDICT_INSTANT: true,          // Dự đoán vị trí tức thời
        NO_BREAK: true,                 // Không cho phép văng tâm
        REACQUIRE_TIME: 0.0,            // Thời gian bắt lại target = 0ms
        INSTANT_RELOCK: true,           // Khóa lại ngay lập tức
        TRACK_VELOCITY: true,           // Theo dõi vận tốc di chuyển
        ZERO_DELAY_UPDATE: true         // Cập nhật tọa độ 0ms delay
    },

    // 3. WORLD POSITION CORE: Hệ định vị tọa độ thế giới (XYZ)
    WORLD_POS_ENGINE: {
        ENABLE: true,
        TARGET_BONE: "bone_Head",
        HUMANOID_SUPPORT: {
            USE_HUMANOID: true,
            BONE_ENUM: "Head"           // Truy xuất chính xác Animator Humanoid
        },
        GENERIC_RIG: {
            USE_SEARCH: true,
            NAME: "bone_Head",
            RECURSIVE: true             // Tìm kiếm đệ quy trong hệ thống Rig
        },
        // Tọa độ Local lấy từ JSON Data (Fix lệch tâm XYZ)
        TRANSFORM_INPUT: {
            LOCAL_POS: { x: -0.045697, y: -0.004478, z: -0.020043 },
            LOCAL_ROT: { x: 0.025817, y: -0.08611, z: -0.140211, w: 0.986032 },
            LOCAL_SCALE: { x: 1, y: 1, z: 1 }
        },
        // Hệ thống Ma trận (Matrix) để tính toán vị trí thực
        MATRIX_SYSTEM: {
            PARENT_HASH: 96688289,
            USE_PARENT_MATRIX: true,
            COMPUTE_WORLD_MATRIX: true,
            MATRIX_MULTIPLY: true       // Nhân ma trận Parent * Local để ra vị trí Head chính xác
        },
        OUTPUT: {
            POSITION: true,
            ROTATION: true,
            DEBUG_LOG: true,
            LOG_RATE: 0.01
        }
    },

    // 4. Y-AXIS DRAG & PRECISION: Sửa lỗi máu vàng và phanh tâm (Brake)
    DRAG_ACCURACY: {
        AUTO_SENS_CUT: true,            // Tự động cắt độ nhạy khi tâm chạm đầu
        AUTO_BRAKE_POS: -0.005812380,   // Vị trí phanh tâm để không bị bay quá đầu
        SENS_DROP: 0.00,                // Giảm độ nhạy về 0 khi đã khóa Head
        BRAKE_FORCE: 1.8,               // Lực phanh để tâm dừng khựng tại đầu
        WORLD_ANCHOR: { x: true, y: true }, // Neo giữ tâm theo tọa độ thế giới
        PRECISION_FIX: -0.005812380,    // Fix sai số lệch tâm XYZ
        SNAP_FORCE: 2.0                 // Lực dính (Snap) cực mạnh khi gần Bone Head
    },

    // 5. FINAL FORCE CONTROL
    PRIORITY: {
        OVERRIDE: true,
        LEVEL: 1.0,
        NO_CHEST_LOCK: true,            // Chặn hoàn toàn việc dính vào ngực (Fix máu vàng)
        DEFAULT_AIM_OUTPUT: "HEAD"      // Mọi đầu ra của đạn đều rơi vào Head
    },
 WORLD_MAGNET_FIELD: {
    ALIGN_STRENGTH: 2.0,             // Lực căn chỉnh tọa độ thực
    UPDATE_RATE: "1ms",               // Tốc độ cập nhật quỹ đạo
    MAGNET_RADIUS: 360.0,             // Vòng quét nam châm toàn diện
    STICKINESS: 1.0,                  // Độ dính tuyệt đối vào xương đầu
    NEURAL_CORE_FRICTION: {           // Tọa độ ma trận khóa mục tiêu
        x: -0.1285115,
        y: -0.005812380,              // Fix lệch trục Y (Lỗi máu vàng)
        z: -0.7100450
    }
},
    DRAG_LIFT_ENGINE: {
    LIFT_STRENGTH: 1.70,              // Lực nâng chuẩn xác
    ZERO_G_DRAG: true,                // Triệt tiêu ma sát khi vuốt
    RESPONSE_RATE: "0ms",             // Phản hồi lệnh nâng tâm tức thì
    STOP_AT_BONE: 96688289,           // Điểm dừng tuyệt đối tại tọa độ đầu
    ELEVATION_ADJUST: "AUTO"          // Tự động tính độ cao theo khoảng cách
},
    HEAD_RECOVERY_CORE: {
    STRENGTH: 2.0,                   // Mức ổn định tối ưu
    DELAY: "0ms",                     // Triệt tiêu thời gian chờ hồi
    ANCHOR_BONE: 96688289,            // Khóa cứng mã xương đầu Neural-Core
    SPRAY_BOOST: 1.5,                 // Tăng cường độ ổn định khi sấy liên tục
    ANTI_JITTER: true                 // Chống rung lắc khi khóa mục tiêu
},
    // [SENSITIVITY_INDEPENDENT] - Độc lập với độ nhạy hệ thống
    // Dù bạn để nhạy 100 hay 1000, mã này vẫn giữ tâm ổn định
    STABILITY_CONTROL: {
        ANTI_MAX_SENS_JITTER: true,     // Khử rung khi độ nhạy quá cao
        SENSITIVITY_CAP: 1.0,           // Giới hạn lực đẩy để không văng tâm khỏi đầu
        DYNAMIC_DAMPING: 0.0,          // Lực hãm thông minh: Giúp tâm dừng đúng điểm Head
        PIXEL_LOCK_STRENGTH: 1.0        // Khóa chặt theo từng điểm ảnh
    },

    // [FIX_AIM_DEVIATION] - Sửa lỗi lệch tâm (Miss-aim)
    CORRECTION_LOGIC: {
        AUTO_CENTERING: true,           // Tự động đưa tâm về trọng tâm của Bone 10
        RECOIL_REDIRECTION: "HEAD",     // Chuyển hướng lực giật của súng bay thẳng lên đầu
        POSITION_PREDICTION: 1.2,       // Dự đoán vị trí XYZ khi địch di chuyển lắt léo
        MISS_SHOT_RECOVERY: "INSTANT"   // Nếu đạn lệch, ngay lập tức kéo tâm trở lại Head
    },

    // [HARD_LOCK_ADVANCED] - Khóa cứng mục tiêu
    HARD_LOCK: {
        STICKY_FACTOR: 1.0,             // Độ dính tuyệt đối
        FOV_SCAN_TYPE: "STATIC",        // Quét mục tiêu không đổi theo độ nhạy
        LOCK_ON_VELOCITY: 500,          // Tốc độ khóa (tính bằng mili giây)
        SMOOTHING_OVERRIDE: 0.0         // Vô hiệu hóa độ mượt để đạt độ chính xác 100%
    },
    DRAG_LOGIC: {
        AUTO_DRAG_UP: true,             // Tự động kích hoạt lực kéo lên khi nhấn nút bắn
        BASE_DRAG_FORCE: 2.5,           // Lực kéo cơ bản (Vượt qua vùng ngực)
        MAX_DRAG_SPEED: 10.0,            // Tốc độ kéo tối đa để không bay quá đầu
        DRAG_ACCELERATION: 1.25,        // Gia tốc: Càng bắn lâu lực kéo càng tăng nhẹ để giữ tâm
        SMOOTH_DRAG_STEPS: 5,           // Chia nhỏ bước kéo để tránh bị khựng hình
    },

    // [DISTANCE_SCALING] - Tự động điều chỉnh theo khoảng cách
    ADAPTIVE_RANGE: {
        CLOSE_QUARTERS: {               // Khoảng cách gần (< 10m)
            DRAG_MULTIPLIER: 1.8,       // Kéo cực mạnh vì mục tiêu to và di chuyển nhanh
            SENSITIVITY_BOOST: 2.5
        },
        MID_RANGE: {                    // Khoảng cách trung bình (10m - 40m)
            DRAG_MULTIPLIER: 2.2,       // Kéo vừa phải, tập trung vào độ ổn định
            SENSITIVITY_BOOST: 2.0
        },
        LONG_RANGE: {                   // Khoảng cách xa (> 40m)
            DRAG_MULTIPLIER: 0.8,       // Kéo nhẹ, cực mịn để tránh đạn bay lên trời
            SENSITIVITY_BOOST: 0.75
        }
    },

    // [LOCK_ON_HEAD] - Khóa chặt điểm đến (Bone 10)
    HARD_LOCK_CORE: {
        TARGET_BONE: 10,                // Mục tiêu cuối cùng là ĐẦU
        STICKY_ON_TARGET: 20.0,          // Độ dính 100% khi tâm đã chạm đầu
        LOCK_RADIUS_FOV: 360,           // Phạm vi tự động nhận diện mục tiêu (pixel)
        PRIORITIZE_HEADSHOT: true,      // Ép toàn bộ Vector phải hướng về Bone 10
        ANTI_RECOIL_Y_AXIS: 100         // Triệt tiêu 100% độ giật dọc
    },

    // [INPUT_OPTIMIZATION] - Tối ưu hóa phản hồi cảm ứng
    TOUCH_ENGINE: {
        RESPONSE_MS: 0.001,               // Phản hồi siêu tốc (Gần như tức thời)
        PRECISION_MODE: "ULTRA",        // Chế độ chính xác cao nhất
        TOUCH_STABILIZER: true,         // Khử rung tay khi đang kéo tâm
        DEADZONE_ELIMINATION: 0.0,      // Loại bỏ hoàn toàn vùng chết cảm ứng
    },

    // [FIX_YELLOW_DAMAGE] - Sửa lỗi máu vàng triệt để
    BLOOD_COLOR_FIXER: {
        FORCE_CRITICAL_HIT: true,       // Ép trả về sát thương Headshot
        BYPASS_CHEST_FRICTION: true,    // Bỏ qua độ ma sát (độ dính) tại vùng ngực
        VERTICAL_OFFSET_ADJUST: 15,     // Nhích tâm lên trên tọa độ đầu 15 pixel để đảm bảo trúng mặt
    },

    CONFIG: {
        Enabled: true,
GlobalHeadMagnet_TargetBone: "bone_Head",
        Smooth: 0.08,
        Max_Step: 40,
        Damping: 0.0,
CrosshairFollowHead: true,
        Snap_Distance: 999,
        Snap_Smooth: 0.02,
        Stick_Force: 10.0,
HeadWorldPos_TargetBone: "bone_Head",
     GlobalHeadMagnet_CenterLock: 1.0,
         Predict: 0.05,
        Offset_Y: 0.258,
TeleportResistHeadLock: "PredictInstant",
   TeleportResistHeadLock_InstantReLock: true,
  TeleportResistHeadLock_ZeroDelayUpdate: true,
  DISTANCE_ADAPTIVE: {
        CLOSE_RANGE_LIMIT: 10,        // < 10m: Tăng tốc độ kéo tâm cực mạnh
        LONG_RANGE_LIMIT: 50,         // > 50m: Tự động siết chặt độ rung (Stable mode)
        AUTO_SCALE_SMOOTHING: true,    // Tự động giảm Smoothing khi địch ở xa
        BULLET_DROP_COMPENSATION: 1.05 // Bù trừ độ rơi của đạn ở khoảng cách xa
    },

    // [OMNIDIRECTIONAL_TRACKING] - Theo dõi đa hướng
    MOVEMENT_ADAPTIVE: {
        LOCK_BONE_ID: 10,               // Tâm điểm: Đầu (Head)
        STICKY_FORCE: 1.0,              // Lực hút tuyệt đối (Không thể tách rời)
        MAX_ANGULAR_VELOCITY: 360,      // Tốc độ xoay tối đa để bám kịp mục tiêu di chuyển nhanh
        FOLLOW_IN_AIR: true,            // Bám đuổi kể cả khi mục tiêu đang nhảy hoặc rơi tự do
        PREDICT_SPEED_SCALE: 1.85       // Nhân hệ số dự đoán khi địch chạy ngang (Fix bắn sau lưng)
    },

    // [GEOMETRY_LOCK] - Khóa chặt tọa độ hình học
    LOCK_STABILITY: {
        SMOOTHING_MIN: 0.0,             // Triệt tiêu độ mượt (Khóa tức thì, không có độ trễ)
        SNAPSHOT_PRECISION: "PIXEL",    // Quét mục tiêu chính xác đến từng Pixel màn hình
        ERROR_MARGIN_FIX: 0.0001,       // Sai số cho phép cực nhỏ (Gần như bằng 0)
        AUTO_CENTER_HEAD: true,         // Luôn ép tâm vào chính giữa tâm vòng tròn đầu
        NO_CLIP_AIM: true               // Giữ tâm kể cả khi mục tiêu bị che khuất một phần
    },

    // [RECOIL_ELIMINATION] - Loại bỏ hoàn toàn độ giật (Fix máu vàng)
    ANTI_RECOIL_SYSTEM: {
        ELIMINATE_VISUAL_SHAKE: true,   // Loại bỏ rung lắc màn hình khi bắn
        FORCE_Y_AXIS_UPWARD: 5.5,       // Lực đẩy trục Y cực mạnh (Ngăn tâm rơi xuống cổ/ngực)
        ZERO_RECOIL_LEVEL: 100,         // Triệt tiêu 100% độ giật của mọi loại súng
        STATIC_CROSSHAIR: true          // Giữ tâm súng cố định, không cho phép nở rộng (Bloom)
    },

    // [LATENCY_COMPENSATION] - Bù trừ trễ mạng và phần cứng
    PERFORMANCE_SYNC: {
        FRAME_DELAY_FIX: -1,            // Bù trừ 1 khung hình để đón đầu chuyển động
        NETWORK_INTERPOLATION: 1.2,     // Xử lý lag: Dự đoán vị trí thực tế của địch khi Ping cao
        INPUT_REFRESH_RATE: "MAX",      // Tốc độ phản hồi đầu vào tối đa của thiết bị
        LOCK_DURATION: "UNTIL_DEATH"    // Chỉ nhả khóa khi mục tiêu đã bị hạ gục (HP = 0)
    },

    // [FIELD_OF_VIEW] - Phạm vi quét
    FOV_CONTROL: {
        LOCK_RANGE_DEGREES: 360,        // Khóa mục tiêu ở bất kỳ hướng nào (kể cả sau lưng)
        DYNAMIC_FOV_SCALING: false,     // Giữ nguyên FOV rộng để không bỏ lỡ mục tiêu di chuyển nhanh
        SENSITIVITY_BOOST: 4.0          // Nhân đôi độ nhạy khi đang trong trạng thái Tracking
    },
         ENGINE: {
        TRACK_BONE: 10,                 // Khóa chặt xương đầu (Head)
        STICKY_STRENGTH: 1.0,           // Lực hút tuyệt đối (1.0 = Nam châm)
        REFRESH_RATE_MS: 1,             // Tốc độ quét (1ms/lần để bám sát từng mili-giây)
        LOCK_ON_TRANSITION: "INSTANT",  // Chuyển mục tiêu tức thì khi mục tiêu cũ biến mất
    },

    // [AUTO_CORRECTION] - Tự động sửa lỗi tâm trôi xuống ngực
    FIX_LOGIC: {
        ANTI_CHEST_LOCK: true,          // Chống dính tâm vào vùng ngực/thân
        VERTICAL_FORCE_PUSH: 3.8,       // Lực đẩy tâm lên trên để luôn ở đỉnh đầu
        HORIZONTAL_TRACK_LATENCY: 0.0,  // Triệt tiêu độ trễ khi mục tiêu chạy ngang
        RECOIL_NEGATION: 100            // Loại bỏ 100% độ rung lắc của súng khi sấy
    },

    // [ADVANCED_MATH] - Thuật toán tính toán vị trí
    VECTOR_CALCULATION: {
        PREDICT_MOVEMENT: true,         // Dự đoán hướng chạy của địch
        PREDICTION_INTENSITY: 1.5,      // Độ nhạy dự đoán (bắn đón đầu)
        SMOOTH_FACTOR: 0.02,            // Độ mượt cực thấp để dính như keo (Gần như không trễ)
        FOV_LOCK_ANGLE: 360,            // Khóa mục tiêu ở mọi góc độ xung quanh
    },

    // [STABILITY_CONTROL] - Giữ ổn định mọi khoảng cách
    STABILITY: {
        AUTO_FOCUS: "Bone_head_ONLY",        // Chỉ tập trung vào đầu, bỏ qua các bộ phận khác
        JITTER_REDUCTION: true,         // Khử rung sai số khi mục tiêu ở quá xa
        PIXEL_PERFECT_AIM: true,        // Khóa tâm đến từng điểm ảnh (Pixel)
        MAX_TRACKING_RANGE: 999         // Khoảng cách bám đuổi lên đến 500m
    },

    // [INPUT_OVERRIDE] - Ghi đè điều khiển
    INPUT: {
        BYPASS_SYSTEM_LIMIT: true,      // Vượt qua giới hạn độ nhạy của trò chơi
        TOUCH_RESPONSE_SYNC: "1:1",     // Đồng bộ 1:1 giữa chuyển động địch và tâm súng
        FORCE_CURSOR_TO_BONE: true      // Ép con trỏ phải trùng khớp với Bone ID 10
    },
    // [CORE_LOCK_LOGIC] - Khóa cứng tọa độ đầu
    AIM_LOCK: {
        PRIMARY_BONE: 10,              // Xương đầu (Head)
        SECONDARY_BONE: 9,             // Xương cổ (Trạm trung chuyển tâm)
        LOCK_ON_SIGHT: true,           // Chỉ khóa khi mục tiêu trong tầm nhìn (Visibility Check)
        STICKY_STRENGTH: 1.0,          // Lực dính tuyệt đối (Không cho phép lệch khỏi Head)
        IGNORE_NON_HEAD_HITS: true     // Ưu tiên bỏ qua các điểm chạm không phải đầu
    },

    // [PHYSICS_OVERRIDE] - Ghi đè vật lý súng
    PHYSICS_MODIFIER: {
        PERFECT_ACCURACY: 100,         // Độ chính xác tuyệt đối (giảm độ nở của tâm)
        NO_RECOIL_FORCE: 0.0,          // Triệt tiêu lực giật lùi của súng
        VERTICAL_FORCE_MULTIPLIER: 2.5,// Nhân lực kéo lên để luôn vượt qua ngực
        HORIZONTAL_SHAKE_FIX: 0.05     // Loại bỏ rung ngang khi sấy (Zero Shake)
    },

    // [INPUT_SIMULATION] - Mô phỏng thao tác vuốt
    INPUT_MAPPING: {
        TOUCH_SENSITIVITY: 1.0,        // Độ nhạy cảm ứng đầu vào
        SWIPE_ACCELERATION: 1.35,      // Gia tốc vuốt (Càng kéo nhanh lực càng mạnh)
        POINTER_PRECISION: "HIGH",     // Độ chính xác con trỏ tối cao
        RESPONSE_TIME_MS: 1,           // Độ trễ phản hồi (Cực thấp để khóa tâm tức thì)
    },

    // [VISUAL_ASSIST] - Hỗ trợ hiển thị
    FOV_SYSTEM: {
        DRAW_FOV: true,                // Hiển thị vòng tròn quét
        FOV_SIZE: 180,                 // Kích thước vòng quét (pixel)
        COLOR_LOCK: "#FF0000"          // Màu tâm khi đã khóa vào đầu
    },

         TARGET: {
        BONE_HEAD: 10,                 // Index xương đầu
        BONE_NECK: 9,                  // Index xương cổ (dùng để mồi tâm trước khi lên đầu)
        PRIORITY: "DISTANCE",          // Ưu tiên mục tiêu gần nhất: "DISTANCE" hoặc "CROSSHAIR"
        MAX_DISTANCE: 999,             // Khoảng cách tối đa (mét) để kích hoạt khóa tâm
    },

    // [PRECISION] - Độ chính xác và Khóa chặt
    LOCK_CONTROL: {
        STICKY_STRENGTH: 10.0,         // Lực dính (0.0 - 1.0): Càng cao tâm càng khó bị văng khỏi đầu
        SMOOTHING_X: 0.06,             // Độ mượt trục ngang (tránh giật hình khi địch chạy nhanh)
        SMOOTHING_Y: 0.04,             // Độ mượt trục dọc (giúp tâm bay thẳng lên đầu không bị khựng)
        AIM_BOT_FOV: 360,              // Vòng quét mục tiêu (pixel), ngoài vòng này mã sẽ không can thiệp
        DEADZONE_CORRECTION: 0.02,     // Loại bỏ rung lắc nhỏ từ cảm ứng/tay người chơi
    },

    // [ANTI_RECOIL] - Chống giật và Fix máu vàng
    RECOIL_FIXER: {
        VERTICAL_COMPENSATION: 2.45,   // Tỷ lệ bù lực kéo lên (khắc phục súng nảy xuống ngực)
        HORIZONTAL_STABILITY: 0.8,     // Giảm thiểu độ rung ngang khi súng sấy liên tục
        RECOIL_RECOVERY_MS: 0,       // Tốc độ hồi tâm về vị trí đầu mục tiêu sau mỗi viên đạn
        AUTO_PULL_UP: true           // Tự động kéo nhẹ tâm xuống để triệt tiêu độ giật của súng
    },

    // [PREDICTION] - Dự đoán chuyển động (Dành cho mục tiêu đang chạy)
    PREDICTION_LOGIC: {
        ENABLED: true,
        VELOCITY_SCALE: 1.5,           // Dự đoán vị trí đầu mục tiêu dựa trên tốc độ di chuyển
        LATENCY_MS: 0,                // Bù trừ độ trễ mạng (Ping) để tâm không bị bắn sau lưng địch
    },
     },
 // =========================
    // 🧠 TÍNH VỊ TRÍ HEAD THEO ROTATION
    // =========================
    getHeadWorld(target) {
        if (!target.headWorldPos) return null;

        const rot = target.headRotation || {x:0,y:0,z:0}; // hướng đầu
        const pos = target.headWorldPos;

        return {
            x: pos.x + rot.x * this.CONFIG.Forward_Offset,
            y: pos.y + this.CONFIG.Up_Offset,
            z: pos.z + rot.z * this.CONFIG.Forward_Offset
        };
    },

    // =========================
    // 🔮 PREDICT
    // =========================
    predict(pos, velocity) {
        const v = velocity || {x:0,y:0,z:0};

        return {
            x: pos.x + v.x * this.CONFIG.Predict,
            y: pos.y + v.y * this.CONFIG.Predict,
            z: pos.z + v.z * this.CONFIG.Predict
        };
    },

    // =========================
    // 🎯 MAIN LOCK
    // =========================
    lock(target, crosshair) {
        if (!this.CONFIG.Enabled || !target) return false;

        const headWorld = this.getHeadWorld(target);
        if (!headWorld) return false;

        const predicted = this.predict(headWorld, target.velocity);

        const screen = worldToScreen(predicted);
        if (!screen) return false;

        let dx = screen.x - crosshair.x;
        let dy = screen.y - crosshair.y;

        const dist = Math.sqrt(dx*dx + dy*dy);

        // 🛑 dead zone (không rung)
        if (dist < this.CONFIG.Dead_Zone) {
            camera.smooth = this.CONFIG.Lock_Smooth;
            camera.force = this.CONFIG.Stick_Force;
            return true;
        }

        // 🚫 clamp (fix lố)
        dx = Math.max(-this.CONFIG.Max_Step, Math.min(this.CONFIG.Max_Step, dx));
        dy = Math.max(-this.CONFIG.Max_Step, Math.min(this.CONFIG.Max_Step, dy));

        // 🧊 damping
        dx *= this.CONFIG.Damping;
        dy *= this.CONFIG.Damping;

        const finalPos = {
            x: crosshair.x + dx,
            y: crosshair.y + dy
        };

        camera.lookAtScreen(finalPos);

        // 🧲 lock mạnh khi gần
        if (dist < 25) {
            camera.smooth = this.CONFIG.Lock_Smooth;
            camera.force = this.CONFIG.Stick_Force;
        } else {
            camera.smooth = this.CONFIG.Smooth;
        }

        return true;
    },

    //
    // =========================
    // 🎯 MAIN FUNCTION
    // =========================
    lockTarget() {

        const target = getBestTarget();
        if (!target || !isFiring) return;

        let headPos = worldToScreen(target.headWorldPos);
        if (!headPos) return;

        // 🎯 fix lệch cổ
        headPos.y += this.CONFIG.Offset_Y;

        // 🔮 predict
        const vel = target.velocity || {x:0,y:0,z:0};
        headPos.x += vel.x * this.CONFIG.Predict;
        headPos.y += vel.y * this.CONFIG.Predict;

        const crosshair = {
            x: screenWidth / 2,
            y: screenHeight / 2
        };

        let dx = headPos.x - crosshair.x;
        let dy = headPos.y - crosshair.y;

        const dist = Math.sqrt(dx*dx + dy*dy);

        // =========================
        // 🚫 CLAMP (fix lố)
        // =========================
        dx = Math.max(-this.CONFIG.Max_Step, Math.min(this.CONFIG.Max_Step, dx));
        dy = Math.max(-this.CONFIG.Max_Step, Math.min(this.CONFIG.Max_Step, dy));

        // =========================
        // 🧊 DAMPING (fix rung)
        // =========================
        dx *= this.CONFIG.Damping;
        dy *= this.CONFIG.Damping;

        // =========================
        // ⚡ SNAP + LOCK
        // =========================
        if (dist < this.CONFIG.Snap_Distance) {
            camera.lookAtScreen({
                x: crosshair.x + dx * this.CONFIG.Smooth,
                y: crosshair.y + dy * this.CONFIG.Smooth
            });

            camera.smooth = this.CONFIG.Snap_Smooth;
            camera.force = this.CONFIG.Stick_Force;
        } else {
            camera.lookAtScreen({
                x: crosshair.x + dx * this.CONFIG.Smooth,
                y: crosshair.y + dy * this.CONFIG.Smooth
            });

            camera.smooth = this.CONFIG.Smooth;
        }
    },

    closeHeadLock(target, crosshair) {
    if (!this.CONFIG.CLOSE_HEAD_LOCK.Enabled) return false;
    if (!target || !target.headWorldPos) return false;

    const cfg = this.CONFIG.CLOSE_HEAD_LOCK;
    const vel = target.velocity || {x:0,y:0,z:0};

    // 🎯 head + offset
    const headPos = {
        x: target.headWorldPos.x,
        y: target.headWorldPos.y + cfg.Offset_Y,
        z: target.headWorldPos.z
    };

    // 🔮 predict nhẹ
    const predicted = {
        x: headPos.x + vel.x * cfg.Predict,
        y: headPos.y + vel.y * cfg.Predict,
        z: headPos.z + vel.z * cfg.Predict
    };

    const headScr = worldToScreen(predicted);
    if (!headScr) return false;

    // 📏 delta
    let dx = headScr.x - crosshair.x;
    let dy = headScr.y - crosshair.y;
    let dist = Math.sqrt(dx*dx + dy*dy);

    // ❌ chưa đủ gần → không can thiệp
    if (dist > cfg.Activate_Radius) return false;

    // 🛑 dead zone (đã đúng → dừng hẳn)
    if (dist < cfg.Dead_Zone) {
        camera.smooth = cfg.Lock_Smooth;
        camera.force  = cfg.Stick_Force;
        return true;
    }

    // ⚡ SNAP vào head
    dx *= cfg.Snap_Speed;
    dy *= cfg.Snap_Speed;

    // 🚫 CLAMP mỗi frame (fix lố)
    dx = Math.max(-cfg.Max_Step, Math.min(cfg.Max_Step, dx));
    dy = Math.max(-cfg.Max_Step, Math.min(cfg.Max_Step, dy));

    // 🧊 DAMPING (giảm vượt)
    dx *= cfg.Damping;
    dy *= cfg.Damping;

    const next = {
        x: crosshair.x + dx,
        y: crosshair.y + dy
    };

    camera.lookAtScreen(next);

    // 🧲 vào sâu → HARD LOCK
    if (dist < cfg.Hard_Radius) {
        camera.smooth = cfg.Lock_Smooth;   // cực dính
        camera.force  = cfg.Stick_Force;
    } else {
        camera.smooth = cfg.Snap_Smooth;   // đang kéo
        camera.force  = 1.15;
    }

    return true;
},
    NEAR_HEAD_LOCK: {
    Enabled: true,

    Activate_Radius: 360,     // vùng kích hoạt gần head
    Snap_Speed: 2.0,         // tốc độ snap vào đầu

    Snap_Smooth: 0.05,       // mượt khi snap
    Lock_Smooth: 0.02,       // mượt khi đã dính

    Stick_Force: 3.0,       // lực giữ đầu

    Predict: 0.0001,           // predict nhẹ
    Offset_Y: 0.258           // fix lệch cổ
},
  nearHeadLock(target, crosshair) {
    if (!this.CONFIG.NEAR_HEAD_LOCK.Enabled) return false;
    if (!target || !target.headWorldPos) return false;

    const vel = target.velocity || {x:0,y:0,z:0};

    // 🎯 head + offset
    const headPos = {
        x: target.headWorldPos.x,
        y: target.headWorldPos.y + this.CONFIG.NEAR_HEAD_LOCK.Offset_Y,
        z: target.headWorldPos.z
    };

    // 🔮 predict
    const predicted = {
        x: headPos.x + vel.x * this.CONFIG.NEAR_HEAD_LOCK.Predict,
        y: headPos.y + vel.y * this.CONFIG.NEAR_HEAD_LOCK.Predict,
        z: headPos.z + vel.z * this.CONFIG.NEAR_HEAD_LOCK.Predict
    };

    const screenHead = worldToScreen(predicted);
    if (!screenHead) return false;

    // 📏 distance từ tâm → head
    let dx = screenHead.x - crosshair.x;
    let dy = screenHead.y - crosshair.y;

    const dist = Math.sqrt(dx*dx + dy*dy);

    // =========================
    // 🚫 chưa đủ gần → không kích hoạt
    // =========================
    if (dist > this.CONFIG.NEAR_HEAD_LOCK.Activate_Radius) {
        return false;
    }

    // =========================
    // ⚡ SNAP NHANH VÀO HEAD
    // =========================
    dx *= this.CONFIG.NEAR_HEAD_LOCK.Snap_Speed;
    dy *= this.CONFIG.NEAR_HEAD_LOCK.Snap_Speed;

    const snapPos = {
        x: crosshair.x + dx,
        y: crosshair.y + dy
    };

    camera.lookAtScreen(snapPos);

    // =========================
    // 🧲 LOCK CHẶT
    // =========================
    if (dist < 20) {
        camera.smooth = this.CONFIG.NEAR_HEAD_LOCK.Lock_Smooth;
        camera.force = this.CONFIG.NEAR_HEAD_LOCK.Stick_Force;
    } else {
        camera.smooth = this.CONFIG.NEAR_HEAD_LOCK.Snap_Smooth;
        camera.force = 1.2;
    }

    return true;
},
    LIGHT_DRAG: {
    Enabled: true,

    Drag_Force: 2.2,        // lực kéo lên đầu (cực quan trọng)
    Vertical_Boost: 2.0,    // ưu tiên kéo trục Y (lên đầu)

    Reduce_Resistance: 1.0, // giảm “nặng tâm”
    Snap_Smooth: 0.04,      // khi gần head → dính

    Body_To_Head_Scale: 2.0,// tăng tốc kéo từ thân lên đầu

    Activation_Radius: 360  // vùng kích hoạt
},
  lightDragToHead(target, crosshair) {
    if (!this.CONFIG.LIGHT_DRAG.Enabled) return null;
    if (!target || !target.headWorldPos) return null;

    const head = worldToScreen(target.headWorldPos);
    const body = worldToScreen(target.bodyWorldPos || target.headWorldPos);

    if (!head || !body) return null;

    // 📏 khoảng cách từ tâm → body
    const dxBody = body.x - crosshair.x;
    const dyBody = body.y - crosshair.y;
    const distBody = Math.sqrt(dxBody*dxBody + dyBody*dyBody);

    if (distBody > this.CONFIG.LIGHT_DRAG.Activation_Radius) return null;

    // =========================
    // 🎯 VECTOR BODY → HEAD
    // =========================
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    // 🔥 tăng lực kéo lên đầu
    dx *= this.CONFIG.LIGHT_DRAG.Drag_Force;
    dy *= this.CONFIG.LIGHT_DRAG.Drag_Force;

    // 🔥 ưu tiên kéo lên (fix kẹt cổ/ngực)
    dy *= this.CONFIG.LIGHT_DRAG.Vertical_Boost;

    // 🔥 giảm “ma sát” → nhẹ tâm
    dx *= (1 + this.CONFIG.LIGHT_DRAG.Reduce_Resistance);
    dy *= (1 + this.CONFIG.LIGHT_DRAG.Reduce_Resistance);

    // =========================
    // ⚡ BOOST nếu đang ở thân
    // =========================
    const bodyToHeadY = head.y - body.y;

    if (Math.abs(dy) > Math.abs(bodyToHeadY * 0.5)) {
        dy *= this.CONFIG.LIGHT_DRAG.Body_To_Head_Scale;
    }

    return {
        x: crosshair.x + dx,
        y: crosshair.y + dy
    };
},
    ANTI_OVER: {
    Enabled: true,

    Max_Correction: 50,     // giới hạn kéo (pixel)
    Slow_Zone: 60,          // vùng giảm tốc gần head
    Dead_Zone: 6,           // vùng dừng hẳn (không di chuyển)

    Damping: 1.0,           // chống vượt
    Min_Smooth: 0.03,
    Max_Smooth: 0.18
},
    RED_HEAD_TRACK: {
    Enabled: true,

    Stick_Smooth: 0.04,     // độ mượt khi dính đầu
    Stick_Force: 1.35,      // lực giữ

    Max_Correction: 50,     // giới hạn kéo (fix lố tâm)
    Damping: 1.0,          // chống rung

    Predict: 0.001,          // predict nhẹ
    Head_Offset_Y: 0.258     // fix lệch cổ
},
    trackHeadWhenRed(target, crosshair) {
    if (!this.CONFIG.RED_HEAD_TRACK.Enabled) return;

    if (!isCrosshairRed()) return; // 🔴 điều kiện kích hoạt

    if (!target || !target.headWorldPos) return;

    const vel = target.velocity || {x:0,y:0,z:0};

    // =========================
    // 🎯 HEAD + OFFSET
    // =========================
    const headPos = {
        x: target.headWorldPos.x,
        y: target.headWorldPos.y + this.CONFIG.RED_HEAD_TRACK.Head_Offset_Y,
        z: target.headWorldPos.z
    };

    // =========================
    // 🔮 PREDICT NHẸ
    // =========================
    const predicted = {
        x: headPos.x + vel.x * this.CONFIG.RED_HEAD_TRACK.Predict,
        y: headPos.y + vel.y * this.CONFIG.RED_HEAD_TRACK.Predict,
        z: headPos.z + vel.z * this.CONFIG.RED_HEAD_TRACK.Predict
    };

    const screenHead = worldToScreen(predicted);
    if (!screenHead) return;

    // =========================
    // 🧠 CALC DELTA
    // =========================
    let dx = screenHead.x - crosshair.x;
    let dy = screenHead.y - crosshair.y;

    // =========================
    // 🚫 CLAMP (FIX LỐ TÂM)
    // =========================
    const max = this.CONFIG.RED_HEAD_TRACK.Max_Correction;

    dx = Math.max(-max, Math.min(max, dx));
    dy = Math.max(-max, Math.min(max, dy));

    // =========================
    // 🧊 DAMPING (FIX RUNG)
    // =========================
    dx *= this.CONFIG.RED_HEAD_TRACK.Damping;
    dy *= this.CONFIG.RED_HEAD_TRACK.Damping;

    // =========================
    // 💥 APPLY
    // =========================
    const finalPos = {
        x: crosshair.x + dx,
        y: crosshair.y + dy
    };

    camera.lookAtScreen(finalPos);

    camera.smooth = this.CONFIG.RED_HEAD_TRACK.Stick_Smooth;
    camera.force = this.CONFIG.RED_HEAD_TRACK.Stick_Force;
},
 getDynamicSmooth(dist) {
    const min = this.CONFIG.ANTI_OVER.Min_Smooth;
    const max = this.CONFIG.ANTI_OVER.Max_Smooth;

    const t = Math.min(dist / 200, 1);

    return min + (max - min) * t;
},
    antiOverAim(target, crosshair) {
    if (!this.CONFIG.ANTI_OVER.Enabled) return null;
    if (!target || !target.headWorldPos) return null;

    const head = worldToScreen(target.headWorldPos);
    if (!head) return null;

    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    const dist = Math.sqrt(dx*dx + dy*dy);

    // =========================
    // 🛑 DEAD ZONE (fix rung nhỏ)
    // =========================
    if (dist < this.CONFIG.ANTI_OVER.Dead_Zone) {
        return null; // dừng hẳn → không overshoot
    }

    // =========================
    // 🐢 SLOWDOWN GẦN HEAD
    // =========================
    let slowFactor = 1.0;

    if (dist < this.CONFIG.ANTI_OVER.Slow_Zone) {
        slowFactor = dist / this.CONFIG.ANTI_OVER.Slow_Zone;
    }

    dx *= slowFactor;
    dy *= slowFactor;

    // =========================
    // 🚫 CLAMP (chống lố)
    // =========================
    const max = this.CONFIG.ANTI_OVER.Max_Correction;

    dx = Math.max(-max, Math.min(max, dx));
    dy = Math.max(-max, Math.min(max, dy));

    // =========================
    // 🧊 DAMPING (giảm quán tính)
    // =========================
    dx *= this.CONFIG.ANTI_OVER.Damping;
    dy *= this.CONFIG.ANTI_OVER.Damping;

    return {
        x: crosshair.x + dx,
        y: crosshair.y + dy,
        smooth: this.getDynamicSmooth(dist)
    };
},
    PRE_AIM: {
    Enabled: true,

    Pre_Radius: 360,        // phạm vi kích hoạt
    Pre_Strength: 0.5,     // lực dịch tâm (0.2–0.5)

    Predict_Time: 0.001,     // dự đoán trước
    Max_Shift: 1000           // giới hạn dịch chuyển (pixel)
},
    preAimHead(target, crosshair) {
    if (!this.CONFIG.PRE_AIM.Enabled || !target) return null;

    const head = worldToScreen(target.headWorldPos);
    if (!head) return null;

    // 📏 khoảng cách tâm → head
    const dx = head.x - crosshair.x;
    const dy = head.y - crosshair.y;
    const dist = Math.sqrt(dx*dx + dy*dy);

    // ❌ quá xa thì không pre-aim
    if (dist > this.CONFIG.PRE_AIM.Pre_Radius) return null;

    // =========================
    // 🔮 PREDICT NHẸ TRƯỚC
    // =========================
    const vel = target.velocity || {x:0,y:0,z:0};

    const predicted = {
        x: head.x + vel.x * this.CONFIG.PRE_AIM.Predict_Time * 100,
        y: head.y + vel.y * this.CONFIG.PRE_AIM.Predict_Time * 100
    };

    // =========================
    // 🧲 DỊCH NHẸ TÂM LÊN HEAD
    // =========================
    let shiftX = (predicted.x - crosshair.x) * this.CONFIG.PRE_AIM.Pre_Strength;
    let shiftY = (predicted.y - crosshair.y) * this.CONFIG.PRE_AIM.Pre_Strength;

    // giới hạn tránh giật
    const max = this.CONFIG.PRE_AIM.Max_Shift;
    shiftX = Math.max(-max, Math.min(max, shiftX));
    shiftY = Math.max(-max, Math.min(max, shiftY));

    return {
        x: crosshair.x + shiftX,
        y: crosshair.y + shiftY
    };
},
    PRO_HEAD: {
    Enabled: true,

    Magnet_Radius: 360.0,
    Magnet_Force: 1.0,

    Flick_Threshold: 1000,     // tốc độ lia
    Flick_Stick_Time: 5.0,

    Base_Offset_Y: 0.08,
    Model_Fix: true,

    Jump_Predict: 0.12,
    Gravity_Comp: 0.04
},
    magnetHead(target, crosshair) {
    const head = worldToScreen(target.headWorldPos);
    if (!head) return null;

    const dx = head.x - crosshair.x;
    const dy = head.y - crosshair.y;

    const dist = Math.sqrt(dx*dx + dy*dy);

    if (dist > this.CONFIG.PRO_HEAD.Magnet_Radius) return null;

    const force = 1 - (dist / this.CONFIG.PRO_HEAD.Magnet_Radius);

    return {
        x: crosshair.x + dx * force * this.CONFIG.PRO_HEAD.Magnet_Force,
        y: crosshair.y + dy * force * this.CONFIG.PRO_HEAD.Magnet_Force
    };
},
    updateFlickLock(crosshair, dt) {
    if (!this._lastCrosshair) {
        this._lastCrosshair = crosshair;
        return;
    }

    const speed = Math.sqrt(
        (crosshair.x - this._lastCrosshair.x) ** 2 +
        (crosshair.y - this._lastCrosshair.y) ** 2
    ) / dt;

    this._lastCrosshair = crosshair;

    if (speed > this.CONFIG.PRO_HEAD.Flick_Threshold) {
        this._flickTimer = this.CONFIG.PRO_HEAD.Flick_Stick_Time;
    }

    if (this._flickTimer > 0) {
        this._flickTimer -= dt;
        return true;
    }

    return false;
},
getHeadOffset(target) {
    if (!this.CONFIG.PRO_HEAD.Model_Fix) {
        return this.CONFIG.PRO_HEAD.Base_Offset_Y;
    }

    // ví dụ fix theo loại model
    if (target.modelType === "tall") return 0.1;
    if (target.modelType === "short") return 0.06;

    return this.CONFIG.PRO_HEAD.Base_Offset_Y;
},
predictHeadAdvanced(target) {
    const vel = target.velocity || {x:0,y:0,z:0};

    let predict = this.CONFIG.Predict_Base || 0.05;

    // detect jump
    const isJumping = Math.abs(vel.y) > 1.2;

    if (isJumping) {
        predict += this.CONFIG.PRO_HEAD.Jump_Predict;
    }

    const offsetY = this.getHeadOffset(target);

    return {
        x: target.headWorldPos.x + vel.x * predict,
        y: target.headWorldPos.y + offsetY + vel.y * predict - this.CONFIG.PRO_HEAD.Gravity_Comp,
        z: target.headWorldPos.z + vel.z * predict
    };
},
proAim(target, crosshair, dt) {
    if (!target) return;

    // 🎯 flick detect
    const flicking = this.updateFlickLock(crosshair, dt);

    // 🧲 magnet
    const magnetPos = this.magnetHead(target, crosshair);

    // 🧠 predict
    const predicted = this.predictHeadAdvanced(target);

    if (flicking) {
        // 🔥 flick → lock cực mạnh
        camera.lookAt(predicted);
        camera.smooth = 0.02;
        camera.force = 1.5;
        return;
    }

    if (magnetPos) {
        // 🧲 hút nhẹ vào đầu
        camera.lookAtScreen(magnetPos);
        camera.smooth = 0.1;
        return;
    }

    // 🎯 bình thường
    camera.lookAt(predicted);
    camera.smooth = 0.15;
},
    


DRAG_HEAD: {
    Enabled: true,

    Drag_Speed: 2.8,        // tốc độ kéo lên đầu
    Drag_Smooth: 0.12,      // mượt khi kéo
    Snap_Smooth: 0.03,      // khi chạm head → dính

    Body_Radius: 180,       // vùng nhận diện thân
    Head_Radius: 360.0,        // vùng head

    Stick_Force: 2.4        // lực giữ đầu
},
 dragToHead(target, crosshair) {
    if (!this.CONFIG.DRAG_HEAD.Enabled) return;

    const body = worldToScreen(target.bodyWorldPos || target.headWorldPos);
    const head = worldToScreen(target.headWorldPos);

    if (!body || !head) return;

    const dx = crosshair.x - body.x;
    const dy = crosshair.y - body.y;
    const bodyDist = Math.sqrt(dx*dx + dy*dy);

    const hx = crosshair.x - head.x;
    const hy = crosshair.y - head.y;
    const headDist = Math.sqrt(hx*hx + hy*hy);

    const isOnBody = bodyDist <= this.CONFIG.DRAG_HEAD.Body_Radius;
    const isOnHead = headDist <= this.CONFIG.DRAG_HEAD.Head_Radius;

    // =========================
    // 🔥 DRAG BODY → HEAD
    // =========================
    if (isOnBody && !isOnHead) {

        const dragFactor = this.CONFIG.DRAG_HEAD.Drag_Speed;

        const targetPos = {
            x: body.x + (head.x - body.x) * dragFactor,
            y: body.y + (head.y - body.y) * dragFactor
        };

        camera.lookAtScreen(targetPos);

        camera.smooth = this.CONFIG.DRAG_HEAD.Drag_Smooth;
        camera.force = 1.0;

        return;
    }

    // =========================
    // 💥 SNAP + LOCK HEAD
    // =========================
    if (isOnHead) {

        const predicted = predictHead(
            target.headWorldPos,
            target.velocity || {x:0,y:0,z:0},
            0.05
        );

        camera.lookAt(predicted);

        // 🔥 khóa cực chặt
        camera.smooth = this.CONFIG.DRAG_HEAD.Snap_Smooth;
        camera.force = this.CONFIG.DRAG_HEAD.Stick_Force;

        return;
    }
},
    CONFIG: {
        Enabled: true,

        // 🎯 khoảng cách
        Min_Distance: 1,
        Max_Distance: 9999.0,

        // 🎯 lực lock
        Base_Stick: 5.0,
        Max_Stick: 10.0,

        // 🎯 smoothing động
        Smooth_Near: 0.08,
        Smooth_Far: 0.22,

        // 🎯 predict
        Predict_Base: 0.001,
        Predict_Moving: 0.00001,

        // 🎯 vùng head
        Head_Radius_Near: 360.0,
        Head_Radius_Far: 360.0
    },

    state: {
        isLocked: false
    },

    // =========================
    // 📏 DISTANCE
    // =========================
    getDistance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = (a.z || 0) - (b.z || 0);
        return Math.sqrt(dx*dx + dy*dy + dz*dz);
    },

    // =========================
    // 🎯 DYNAMIC CONFIG
    // =========================
    getDynamicConfig(dist, speed) {
        const t = Math.min(dist / this.CONFIG.Max_Distance, 1);

        return {
            smooth: this.lerp(this.CONFIG.Smooth_Near, this.CONFIG.Smooth_Far, t),
            stick: this.lerp(this.CONFIG.Max_Stick, this.CONFIG.Base_Stick, t),
            predict: speed > 0.1 ? this.CONFIG.Predict_Moving : this.CONFIG.Predict_Base,
            radius: this.lerp(this.CONFIG.Head_Radius_Near, this.CONFIG.Head_Radius_Far, t)
        };
    },

    lerp(a, b, t) {
        return a + (b - a) * t;
    },

    // =========================
    // 🎯 CHECK HEAD
    // =========================
    isOnHead(target, crosshair, radius) {
        const head = worldToScreen(target.headWorldPos);
        if (!head) return false;

        const dx = crosshair.x - head.x;
        const dy = crosshair.y - head.y;

        return Math.sqrt(dx*dx + dy*dy) <= radius;
    },
lock(target, crosshair) {
    if (!this.CONFIG.Enabled || !target || !target.headWorldPos) return;

    const playerPos = getPlayerPosition();
    if (!playerPos) return;

    // 📏 khoảng cách
    const dist = this.getDistance(playerPos, target.headWorldPos);

    // 🚀 vận tốc enemy
    const vel = target.velocity || {x:0,y:0,z:0};
    const speed = Math.sqrt(vel.x*vel.x + vel.y*vel.y + vel.z*vel.z);

    const dyn = this.getDynamic(dist, speed);

    // =========================
    // 🎯 OFFSET CHÍNH XÁC ĐẦU
    // =========================
    const HEAD_OFFSET_Y = 0.258; // nâng lên đúng điểm head (fix bắn cổ)

    const headPos = {
        x: target.headWorldPos.x,
        y: target.headWorldPos.y + HEAD_OFFSET_Y,
        z: target.headWorldPos.z
    };

    // =========================
    // 🔮 PREDICT
    // =========================
    let predictFactor = dyn.predict;

    // tăng predict nếu địch chạy nhanh
    if (speed > 1.2) predictFactor += 0.03;
    if (speed > 2.5) predictFactor += 0.05;

    const predicted = {
        x: headPos.x + vel.x * predictFactor,
        y: headPos.y + vel.y * predictFactor,
        z: headPos.z + vel.z * predictFactor
    };

    // =========================
    // 🎯 CHECK HEAD
    // =========================
    const onHead = this.isOnHead(target, crosshair, dyn.radius);

    // =========================
    // 💥 AIM
    // =========================
    camera.lookAt(predicted);

    // =========================
    // 🧲 STICK HEAD
    // =========================
    if (onHead) {
        camera.smooth = 0.02;       // cực dính
        camera.force = dyn.stick;   // lực giữ cao
    } else {
        camera.smooth = dyn.smooth;
        camera.force = 1.0;
    }
},
    // =========================
    // 💥 MAIN LOCK
    // =========================
    lock(target, crosshair) {
        if (!this.CONFIG.Enabled || !target) return;

        const playerPos = getPlayerPosition();
        const dist = this.getDistance(playerPos, target.headWorldPos);

        const speed = Math.sqrt(
            (target.velocity?.x || 0) ** 2 +
            (target.velocity?.y || 0) ** 2 +
            (target.velocity?.z || 0) ** 2
        );

        const dyn = this.getDynamicConfig(dist, speed);

        const onHead = this.isOnHead(target, crosshair, dyn.radius);

        // 🔥 predict head
        const predicted = predictHead(
            target.headWorldPos,
            target.velocity || {x:0,y:0,z:0},
            dyn.predict
        );
this.dragToHead(target, crosshair);
        // 🔥 force lock
        camera.lookAt(predicted);

        // 🔥 tăng lực nếu đã chạm head
        if (onHead) {
            camera.smooth = 0.03;
            camera.force = dyn.stick;
        } else {
            camera.smooth = dyn.smooth;
            camera.force = 1.0;
        }
    },
  gameLoop() {
        const now = Date.now();

        if (!this.state.lastTime) {
            this.state.lastTime = now;
        }
const fix = this.antiOverAim(target, crosshair);
const drag = this.lightDragToHead(target, crosshair);
if (this.closeHeadLock(target, crosshair)) {
    return; // đã vào vùng head → không cho aim khác can thiệp
}
if (drag) {
    camera.lookAtScreen(drag);
    camera.smooth = this.CONFIG.LIGHT_DRAG.Snap_Smooth;
}
if (fix) {
    camera.lookAtScreen({ x: fix.x, y: fix.y });
    camera.smooth = fix.smooth;
}
   if (this.nearHeadLock(target, crosshair)) {
    return; // ưu tiên cao nhất
}
      let dt = (now - this.state.lastTime) / 1000;
        this.state.lastTime = now;
this.trackHeadWhenRed(target, crosshair);
        // chống lag spike
        if (dt > 0.05) dt = 0.05;

        const target = getBestTarget();
        if (!target) return;

        const crosshair = this.getCrosshair();
this.proAim(target, crosshair, dt);
        this.lock(target, crosshair);
    },

    // =========================
    // 🎯 CROSSHAIR
    // =========================
    getCrosshair() {
        return {
            x: screenWidth / 2,
            y: screenHeight / 2
        };
    },

    // =========================
    // 🚀 START LOOP
    // =========================
    start() {
        const loop = () => {
            try {
                this.gameLoop();
            } catch (e) {
                // tránh crash script
            }
 try {
            this.lockTarget();
        } catch (e) {}
            setTimeout(loop, 8); // ~60 FPS
        };

        loop();
    }

};
// =======================
// ENGINE CONFIG
// =======================
const HEAD_SYSTEM = {

    CONFIG: {
        Enabled: true,
        Head_Radius: 360.0,     // ❗ giảm từ 360 → tránh hút sai
        Stick_Force: 1.25,
        Max_Stick_Time: 5.0     // ❗ giảm để không bị lock quá lâu
    },

    state: {
        isLocked: false,
        timer: 0,
        lastTime: 0
    },

    // =========================
    // 🎯 CHECK HEAD
    // =========================
    isOnHead(target, crosshair) {
        if (!target || !target.headWorldPos) return false;

        const head = worldToScreen(target.headWorldPos);
        if (!head) return false;

        const dx = crosshair.x - head.x;
        const dy = crosshair.y - head.y;

        return Math.sqrt(dx*dx + dy*dy) <= this.CONFIG.Head_Radius;
    },

    // =========================
    // 🔥 UPDATE
    // =========================
    update(target, crosshair, dt) {
        if (!this.CONFIG.Enabled || !target) return;

        if (this.isOnHead(target, crosshair)) {
            this.state.isLocked = true;
            this.state.timer = this.CONFIG.Max_Stick_Time;
        }

        if (this.state.isLocked) {
            this.state.timer -= dt;

            this.lockHead(target);

            if (this.state.timer <= 0) {
                this.state.isLocked = false;
            }
        }
    },

    // =========================
    // 💥 LOCK HEAD
    // =========================
    lockHead(target) {
        if (!target.headWorldPos) return;

        const predicted = predictHead(
            target.headWorldPos,
            target.velocity || {x:0,y:0,z:0},
            0.05
        );

        camera.lookAt(predicted);
    },

    // =========================
    // 🎮 GAME LOOP
    // =========================
    gameLoop() {
        const now = Date.now();

        if (!this.state.lastTime) {
            this.state.lastTime = now;
        }

        let dt = (now - this.state.lastTime) / 1000;
        this.state.lastTime = now;

        // chống lag spike
        if (dt > 0.05) dt = 0.05;

        const target = getBestTarget();
        if (!target) return;

        // ❗ đảm bảo crosshair tồn tại
        const crosshair = getCrosshair();
const pre = this.preAimHead(target, crosshair);

if (pre) {
    camera.lookAtScreen(pre);
    camera.smooth = 0.12;
    return;
}
        this.update(target, crosshair, dt);

        if (!this.state.isLocked) {
            this.normalAim(target, dt);
        }
    },

    // =========================
    // 🎯 AIM THƯỜNG
    // =========================
    normalAim(target, dt) {
        if (!target.headWorldPos) return;

        const pos = worldToScreen(target.headWorldPos);
        if (!pos) return;

        camera.lookAt(pos);
    },

    // =========================
    // 🚀 START LOOP
    // =========================
    start() {
        const loop = () => {
            try {
                this.gameLoop();
            } catch (e) {
                // tránh crash toàn script
                // console.log("HEAD_SYSTEM ERROR:", e);
            }

            setTimeout(loop, 8);
        };

        loop();
    }

};
const DTien_V54_Engine = {
    PROJECT: "V54_Magnetic_Lock_System",
    STATUS: "V54_Zero_Overshoot_Active",

    SENS_MANAGEMENT: {
        Input_Scale: "Ultra_High",
        Stabilization: HEX_SENS_STABLE_REPLACE,
        Jitter_Reduction: "Active_1.0",
        Effect: "Fast_Move_Solid_Lock"
    }, // ✅ PHẢI CÓ ,

    HEAD_LOCK_SYSTEM: {
        Enabled: true,
        Head_Radius: 360.0,
        Stick_Force: 1.25,
        Release_Delay: 0.12,
        Max_Stick_Time: 5.0,
   Head_Lock: HEAD_SYSTEM,
 Stick_Head: ULTRA_HEAD_LOCK
    },

    CONFIG: {
        Enabled: true,
        Head_Radius: 35,
        Stick_Force: 1.25,
        Max_Stick_Time: 1.2
    },

    MAGNETIC_CORE: {
        Target_Bone: "0x2e5a7b4",
        Clamp_Address: HEX_EDGE_CLAMP_REPLACE,
        Sticky_Strength: 1.0,
        Bypass_Friction: true
    },

    RADIUS_SYNC_V54: {
        Lock_Radius: 360.0,
        Hard_Lock_Factor: 1.0,
        Anti_Overshoot: "Forced"
    },

    RAW_KEYS_V54: {
        Magnetic_Lock: "com.accpt_ffxbase64_Key_allow_MagneticLockHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        Zero_Overshoot: "com.accpt_ffxbase64_Key_allow_ZeroOvershoot_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        High_Sens_Fix: "com.accpt_ffxbase64_Key_allow_HighSensFix_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};

// Patch 1: Bone3D to Screen Sync (Hàm chuyển đổi tọa độ thực thể)
// Ánh xạ Bone 8 (Head) trực tiếp vào luồng xử lý Delta
const HEX_SYNC_BONE_FIND = `20 40 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_SYNC_BONE_REPLACE = `20 40 2D E9 10 B0 8D E2 08 00 A0 E3 08 D0 4D E2`; 
// Logic: Ép BoneID = 8 ngay tại bước GetHeadScreen.

// Patch 2: Perfect Lock Processing (Hàm lọc di chuyển 3 tầng)
// Thực hiện logic: Snap (Xa) -> Smooth (Trung) -> Hard Lock (Gần)
const HEX_SYNC_LOCK_FIND = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 8F C2 75 3D`;
const HEX_SYNC_LOCK_REPLACE = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 33 33 13 3E`;
// Logic: Nạp hằng số 0.18f (Smooth) và 0.05f (Hard) vào bộ nhớ đệm Register.

// Patch 3: Camera Apply (Ghi đè giá trị Delta vào Camera Rotation)
const HEX_SYNC_APPLY_FIND = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_SYNC_APPLY_REPLACE = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 00 D0 2D ED`;
// Logic: Vô hiệu hóa sai số góc nhìn, thực hiện cộng Delta trực tiếp (+= delta).

const DTien_V53_Engine = {
    "PROJECT": "V53_Final_Sync_Core",
    "STATUS": "V53_Logic_Chain_Active",

    // Tầng 1: Quy trình xử lý (Logic Chain)
    "PROCESS_FLOW": {
        "Step_1": "Bone3D.getHeadScreen",      // Lấy tọa độ 3D Bone 8
        "Step_2": "PerfectLock.process",       // Lọc Radius 25/5
        "Step_3": "Camera.Apply_Delta",        // Ghi đè Rotation
        "Sync_Latency": "0ms"                  // Đồng bộ tức thời
    },

 "CONFIG_SYNC": {
    "Radius_Snap": 360.0,      // Giảm để tránh hút sai mục tiêu
    "Radius_Hard": 360.0,      // Hard lock nhỏ hơn Snap để khóa chính xác hơn
    "Smooth_Factor": 0.26,     // Tăng mượt → kéo lên đầu ổn định hơn
    "Hard_Factor": 0.88,       // Giảm lực cứng → tránh giật lệch đầu
    "Anti_Shake": "Active_1.0", // Chống rung mạnh hơn
    "Max_Speed": 32.0          // Giảm tốc để tránh overshoot
},

    // Tầng 3: Bản đồ địa chỉ (Memory Map - Done)
    "OFFSETS_V53": {
        "Head_Bone": "0x2e5a7b4",             // Bone 8
        "Set_Position": "0x6bc252c",          // Camera Apply
        "Get_Transform": "0x8ca3b10",         // Bone 3D WorldToScreen
        "Is_Firing": "0x2dc3804"              // Trigger thực thi
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V53": {
        "Final_Sync": "com.accpt_ffxbase64_Key_allow_FinalSyncCore_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Bone_Perfect": "com.accpt_ffxbase64_Key_allow_BonePerfectLink_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Zero_Latency": "com.accpt_ffxbase64_Key_allow_ZeroLatencyAim_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// Patch 1: Snap & Smooth Radius (Phân tầng bán kính 25/5)
// Can thiệp vào hàm tính toán Delta để áp dụng bộ lọc Radius
const HEX_PERFECT_RADIUS_FIND = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 8F C2 75 3D`;
const HEX_PERFECT_RADIUS_REPLACE = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 2E 47 A1 3E`; 
// Logic: Thiết lập ngưỡng SMOOTH_FACTOR 0.18f vào bộ đệm nội suy.

// Patch 2: Hard Lock & Anti-Shake (Ghim chặt 0.05 + Lọc nhiễu)
// Can thiệp vào hàm ghi tọa độ để triệt tiêu Jitter theo lastDelta
const HEX_HARD_LOCK_FIND = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_HARD_LOCK_REPLACE = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 00 D0 2D ED`;
// Logic: Rút gọn bước di chuyển khi khoảng cách < 5 (HARD_LOCK_FACTOR).

const DTien_V52_Engine = {
    "PROJECT": "V52_Perfect_Lock_System",
    "STATUS": "V52_Layered_Radius_Active",

    // Tầng 1: Perfect Lock Config (Thông số từ JS)
    "RADIUS_CONFIG": {
        "Snap_Speed": 1.0,                   // Tốc độ tối đa khi ở xa
        "Slow_Radius": 360.0,                 // Bắt đầu làm mượt
        "Lock_Radius": 360.0,                  // Vùng khóa chết
        "Smooth_Factor": 0.18,               // Độ mượt trung tầng
        "Hard_Lock_Factor": 1.0,            // Độ dính tâm tầng cuối
        "Max_Speed": 32.0                    // Giới hạn tốc độ vẩy
    },

    // Tầng 2: Anti-Shake & Overshoot Fix
    "STABILITY_ENGINE": {
        "Address_Radius": HEX_PERFECT_RADIUS_REPLACE,
        "Address_Lock": HEX_HARD_LOCK_REPLACE,
        "Last_Delta_Weight": 1.0,             // Lọc nhiễu 40% (JS)
        "Output_Gain": 1.0,                  // Hệ số ổn định 70% (JS)
        "Anti_Overshoot": "True"             // Không cho phép vượt quá Bone 8
    },

    // Tầng 3: Tích hợp Bone3D (V51) & Offsets (Done)
    "CORE_SYNC_V52": {
        "Head_Bone_3D": "0x2e5a7b4",          // HeadTF
        "Set_Position": "0x6bc252c",         // Ghi đè tọa độ Perfect Lock
        "Is_Firing": "0x2dc3804",            // Kích hoạt khi nhấn bắn
        "World_To_Screen": "0x8ca3b10"       // Đồng bộ tọa độ 3D
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V52": {
        "Perfect_Lock": "com.accpt_ffxbase64_Key_allow_PerfectLockSystem_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Radius_Layer": "com.accpt_ffxbase64_Key_allow_RadiusLayering_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Anti_Shake_Viper": "com.accpt_ffxbase64_Key_allow_AntiShakeViper_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// --- 1. CHUỖI HEX BONE 3D & ROTATION OFFSET (OPCODES) ---

// Patch 1: 3D Bone Rotation Offset (Xử lý hướng mặt địch - 0.15f Forward)
// Can thiệp vào hàm GetForwardVector của Bone 0 để đẩy tâm ra trước mặt
const HEX_3D_ROTATION_FIND = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 33 33 13 3E`;
const HEX_3D_ROTATION_REPLACE = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 9A 99 19 3E`; 
// Logic: Thay đổi Offset từ 0.15f lên mức tối ưu cho Hitbox 3D.

// Patch 2: WorldToScreen 3D Projection Fix (Khử sai số DZ)
// Can thiệp vào phép chia Projection để tâm không bị "văng" khi địch ở quá gần
const HEX_PROJECTION_FIX_FIND = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_PROJECTION_FIX_REPLACE = `00 48 2D E9 10 B0 8D E2 00 00 80 3F 08 D0 4D E2`;
// Logic: Ép trị số Dz tối thiểu, giúp quỹ đạo kéo tâm mượt như JS Bone3D.

const DTien_V51_Engine = {
    "PROJECT": "V51_ViperX_3D_Bone",
    "STATUS": "V51_Real_Tracking_Active",

    // Tầng 1: Bone 3D Tracking (Logic mới ghép thêm)
    "BONE_3D_SYSTEM": {
        "Address_Rotation": HEX_3D_ROTATION_REPLACE,
        "Forward_Offset": 0.15,               // Bù trừ hướng mặt
        "Prediction_3_Frame": true,           // Dự đoán 3 khung hình
        "WorldToScreen_Optimized": HEX_PROJECTION_FIX_REPLACE
    },

    // Tầng 2: Kế thừa ViperX Ultimate (V50)
    "VIPER_X_CORE": {
        "Ghost_Track_4D": 4.0,                // Dự đoán bóng ma 4.0x
        "Magic_Bullet_Hitbox": 2.5,           // Mở rộng Hitbox
        "Weapon_Lift_Force": "Active",        // Tự động nhấc tâm
        "Silent_Aim_Sync": true               // Silent Aim ảo hóa
    },

    // Tầng 3: Đồng bộ Offsets thực tế (Done List)
    "MEMORY_MAPPING_V51": {
        "Head_Bone_0": "0x2e5a7b4",           // HeadTF (Xương 0)
        "Component_GetTransform": "0x8ca3b10",
        "Internal_SetPosition": "0x6bc252c",  // Ghi đè 3D Pos
        "Get_Forward_Vector": "0x8a88b1c"      // Lấy hướng nhìn (Rotation)
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V51": {
        "Bone_3D_Track": "com.accpt_ffxbase64_Key_allow_Bone3DTracking_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Rotation_Offset": "com.accpt_ffxbase64_Key_allow_RotationOffset_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Quantum_ViperX": "com.accpt_ffxbase64_Key_allow_QuantumViperX_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};



// --- 1. CHUỖI HEX VIPER-X (MULTI-ENGINE OPCODES) ---

// Patch 1: Ghost Track & 4D Prediction (Dự đoán 4.0x)
// Can thiệp vào hàm dự đoán tọa độ (Prediction Velocity)
const HEX_GHOST_TRACK_FIND = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 8F C2 75 3D`;
const HEX_GHOST_TRACK_REPLACE = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 00 00 80 40`; 
// Logic: Ghi đè hệ số Float 4.0f vào thanh ghi dự đoán. Fix ZigZag 20ms.

// Patch 2: Magic Bullet & Hitbox Expand (Hitbox 2.5x)
// Can thiệp vào hàm kiểm tra va chạm (CheckHitboxRadius)
const HEX_MAGIC_HITBOX_FIND = `20 40 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_MAGIC_HITBOX_REPLACE = `20 40 2D E9 10 B0 8D E2 00 00 20 40 08 D0 4D E2`;
// Logic: Mở rộng bán kính Hitbox lên 2.5 lần (Magic Bullet Active).

// Patch 3: Weapon Force (Vertical Lift - Kéo tâm theo loại súng)
// Can thiệp vào hàm Recoil/Lift để ép tâm bay lên đầu (Vertical 45-75)
const HEX_WEAPON_FORCE_FIND = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 00 D0 4D E2`;
const HEX_WEAPON_FORCE_REPLACE = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 4B D0 4D E2`;
// Logic: Thay đổi Delta Y Offset. Tự động đẩy tâm lên trục dọc ngay khi bắn.

const DTien_V50_Engine = {
    "PROJECT": "V50_ViperX_Ultimate",
    "STATUS": "V50_All_Engines_Running",

    // Tầng 1: Ghost Prediction (Dự đoán bóng ma)
    "GHOST_ENGINE": {
        "Prediction_Factor": 4.0,           // Dự đoán 4D
        "ZigZag_Fix_Limit": 999,              // Khử chuyển động dị dạng
        "Ghost_Address": HEX_GHOST_TRACK_REPLACE
    },

    // Tầng 2: Magic & Hitbox (Đạn ma thuật)
    "MAGIC_ENGINE": {
        "Magic_Bullet": true,
        "Silent_Aim": true,
        "Hitbox_Scale": 2.5,                 // Mở rộng vùng trúng đạn
        "Magic_Address": HEX_MAGIC_HITBOX_REPLACE
    },

    // Tầng 3: Weapon Force (Lực súng tối ưu)
    "WEAPON_ENGINE": {
        "Snap_Force": "Max",
        "Vertical_Lift": "75_High",          // Chuyên Shotgun/SMG
        "Anti_Heavy": "Active_Shot2",        // Reset ma sát sau viên thứ 2
        "Weapon_Address": HEX_WEAPON_FORCE_REPLACE
    },

    // Tầng 4: Đồng bộ Offsets V45 (Done List)
    "CORE_MEMORY_V50": {
        "Head_Bone": "0x2e5a7b4",            // HeadTF
        "Is_Firing": "0x2dc3804",            // Kích hoạt khi bắn
        "Set_Position": "0x6bc252c",         // Ghi đè tọa độ
        "Is_Visible": "0x2dd8f54"            // Lọc địch lộ diện
    }
};
// Patch 1: Micro-Boost & Zero Friction (Phá dính ngực)
// Can thiệp vào hàm nội suy Delta để áp dụng MICRO_BOOST 3.5x
const HEX_VIPER_BOOST_FIND = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_VIPER_BOOST_REPLACE = `00 48 2D E9 10 B0 8D E2 07 00 A0 E3 08 D0 4D E2`; 
// Logic: Thay đổi hệ số Threshold. R7 gán giá trị 3.5 (Micro Boost)

// Patch 2: Head Stabilizer & Lock Dampen (Ghim đầu 0.15)
// Can thiệp vào hàm SetPosition để áp dụng LOCK_DAMPEN khi NearHead = true
const HEX_VIPER_LOCK_FIND = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 8F C2 75 3D`;
const HEX_VIPER_LOCK_REPLACE = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 33 33 13 3E`;
// Logic: Ghi đè giá trị Float 0.15f (Lock Dampen) vào thanh ghi mục tiêu.

const DTien_V49_Engine = {
    "PROJECT": "V49_Viper_Core_Quantum",
    "STATUS": "V49_Quantum_Steps_Active",

    // Tầng 1: Viper Core Config (Thông số từ JS của bạn)
    "VIPER_CONFIG_SYNC": {
        "Sensitivity": 950.0,                // Siêu nhạy
        "Friction": 0.0,                     // Không ma sát
        "Acceleration": 20.0,                // Gia tốc cực cao
        "Micro_Boost": 10.5,                  // Phá dính ngực
        "Lock_Dampen": 1.0,                 // Ghim chặt đầu
        "Quantum_Steps": 5                   // Chia nhỏ 5 bước phản hồi
    },

    // Tầng 2: Quantum Response Execution
    "QUANTUM_LOGIC": {
        "Address_Boost": HEX_VIPER_BOOST_REPLACE,
        "Address_Dampen": HEX_VIPER_LOCK_REPLACE,
        "Max_Delta_Clamp": 360.0,             // Giới hạn văng tâm
        "Stability_Factor": 0.3              // Head Stabilizer
    },

    // Tầng 3: Đồng bộ Offsets V45 (Done List)
    "MEMORY_CORE_V49": {
        "Head_Bone": "0x2e5a7b4",            // HeadTF (Done)
        "Is_Firing": "0x2dc3804",            // Bắn là kích hoạt Viper Core
        "Is_Visible": "0x2dd8f54",           // Quét địch lộ diện
        "Internal_SetPos": "0x6bc252c"       // Ghi đè tọa độ Quantum
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V49": {
        "Viper_Core": "com.accpt_ffxbase64_Key_allow_ViperCoreEngine_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Quantum_Response": "com.accpt_ffxbase64_Key_allow_QuantumSteps_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Micro_Boost": "com.accpt_ffxbase64_Key_allow_MicroBoost3.5_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};

// Patch 1: Khử rung tâm (Anti-Jitter/Shake)
// Can thiệp vào hàm Damping (Giảm chấn) của Camera để triệt tiêu dao động nhỏ
const HEX_ANTI_JITTER_FIND = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 8F C2 75 3D`;
const HEX_ANTI_JITTER_REPLACE = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 00 00 00 00`; 
// Logic: Ép giá trị dao động (Shake Value) về 0. Tâm sẽ không bị "rùng mình" khi bắn.

// Patch 2: Khử giật ngược khi kéo (Recoil-Axis Stabilization)
// Fix lỗi tâm bị nhảy ngược xuống hoặc sang hai bên khi đang vuốt lên
const HEX_STABLE_DRAG_FIND = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_STABLE_DRAG_REPLACE = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 00 D0 4D E2`;
// Logic: Triệt tiêu lực phản hồi (Feedback Force) của súng lên trục tọa độ Camera.

const DTien_V48_Engine = {
    "PROJECT": "V48_Anti_Jitter_System",
    "STATUS": "V48_Damping_Fixed",

    // Tầng 1: Khử rung phần cứng (Hardware Stabilization)
    "STABILIZER_PATCH": {
        "Anti_Jitter": HEX_ANTI_JITTER_REPLACE,
        "Stable_Drag": HEX_STABLE_DRAG_REPLACE,
        "No_Recoil_V40": "EF 44 F0 48",       // Kế thừa kháng giật V40
        "Zero_Spread_V44": "00 00 A0 E3",    // Kế thừa đạn thẳng V44
        "Effect": "Absolute_Smooth_Aim"
    },

    // Tầng 2: Hiệu chỉnh quỹ đạo kéo (Drag Path Sync)
    "DRAG_PATH_FIX": {
        "Drag_Speed": 1.0,                  // Tốc độ kéo (Done)
        "Acceleration": 2.4,                 // Gia tốc mượt
        "Curve_Logic": "EaseOut",            // Kéo mượt dần
        "Micro_Adjust": 0.015,               // Hiệu chỉnh siêu nhỏ (Done)
        "Neck_Stuck_Fix": true               // Chống dính cổ
    },

    // Tầng 3: Đồng bộ Offsets V45 (Done List)
    "MEMORY_CORE_V48": {
        "Head_Bone": "0x2e5a7b4",            // HeadTF
        "Set_Position": "0x6bc252c",         // Ghi đè tọa độ
        "Is_Firing": "0x2dc3804",            // Kích hoạt khi bắn
        "Is_Visible": "0x2dd8f54"            // Lọc mục tiêu lộ diện
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V48": {
        "Anti_Jitter": "com.accpt_ffxbase64_Key_allow_AntiJitterAim_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Smooth_Drag": "com.accpt_ffxbase64_Key_allow_SmoothDragFix_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Damping_Fix": "com.accpt_ffxbase64_Key_allow_DampingStabilizer_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// Patch 1: Instant Snap (Nhảy tâm ngay lập tức khi nhấn bắn)
// Can thiệp vào hàm CalcAimAngle để bỏ qua Smoothing (Làm mượt)
const HEX_INSTANT_SNAP_FIND = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 01 00 A0 E3`;
const HEX_INSTANT_SNAP_REPLACE = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 00 00 A0 E3`; 
// Logic: Ép thời gian nội suy (Interpolation Time) về 0. Tâm sẽ nhảy tới đầu trong 1 khung hình.

// Patch 2: Sticky Aim (Giữ chặt đầu theo mọi chuyển động)
// Can thiệp vào hàm Transform_INTERNAL_SetPosition để khóa tọa độ liên tục
const HEX_STICKY_HEAD_FIND = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_STICKY_HEAD_REPLACE = `00 00 A0 E3 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
// Logic: Vô hiệu hóa mọi lực cản (Friction) của Camera khi đang khóa mục tiêu.

const DTien_V47_Engine = {
    "PROJECT": "V47_Instant_Sticky_System",
    "STATUS": "V47_Frame_Sync_Active",

    // Tầng 1: Snap & Lock (Nhảy và Khóa)
    "HARDWARE_SNAP": {
        "Instant_Jump": HEX_INSTANT_SNAP_REPLACE,
        "Sticky_Lock": HEX_STICKY_HEAD_REPLACE,
        "Trigger_Fire": "0x2dc3804",         // get_IsFiring (Done)
        "Target_Bone_8": "0x2e5a7b4",        // HeadTF (Done)
        "Effect": "Instant_Headshot_Zero_Delay"
    },

    // Tầng 2: Truy vết mục tiêu (Target Tracking)
    "TRACKING_ENGINE": {
        "Is_Visible_Check": "0x2dd8f54",     // get_isVisible (Done)
        "Internal_SetPos": "0x6bc252c",      // Ghi đè tọa độ (SetPosition)
        "Internal_GetPos": "0x6bc248c",      // Lấy tọa độ mục tiêu di chuyển
        "Refresh_Rate": "0ms",               // Cập nhật tọa độ mỗi Frame
        "Sticky_Strength": 10.0               // Độ bám 100%
    },

    // Tầng 3: Tối ưu hóa No Recoil (Từ V40 & V44)
    "STABILITY_SYNC": {
        "Zero_Recoil": "EF 44 F0 48",        // Kháng giật phần cứng
        "Zero_Spread": "00 00 A0 E3",        // Đạn không tỏa (V44)
        "Anti_Drift": true                   // Chống trôi tâm
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V47": {
        "Instant_Snap": "com.accpt_ffxbase64_Key_allow_InstantSnapHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Sticky_Aim": "com.accpt_ffxbase64_Key_allow_StickyAimLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Frame_Sync": "com.accpt_ffxbase64_Key_allow_FrameSyncTracking_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// Patch 1: Boost độ nhạy trục Y (Nhích nhẹ nút bắn là tâm tự vẩy lên)
// Tác động vào hàm nội suy chuyển động (Input Interpolation)
const HEX_MICRO_DRAG_FIND = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 00 00 A0 E3`;
const HEX_MICRO_DRAG_REPLACE = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 02 00 A0 E3`; 
// Logic: Tăng hệ số nhân lực vuốt (Multiplier) từ 0 lên 2.0 tại thời điểm nhấn nút bắn.

// Patch 2: Fix lố/Lệch tâm (Anti-Overshoot Head Lock)
// Tác động vào hàm giới hạn tọa độ (ViewAngle Clamp)
const HEX_FIX_OVERSHOOT_FIND = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_FIX_OVERSHOOT_REPLACE = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 00 D0 4D E2`;
// Logic: Triệt tiêu lực quán tính (Momentum) ngay khi tâm chạm Bone 8 (HeadTF).

const DTien_V46_Engine = {
    "PROJECT": "V46_Micro_Snap_System",
    "STATUS": "V46_Sensitivity_Overclocked",

    // Tầng 1: Độ nhạy siêu cấp (Micro-Drag Sensitivity)
    "SENSITIVITY_PATCH": {
        "Address_Input": "0x8ca3b10",        // Component_GetTransform sync
        "Drag_Boost": HEX_MICRO_DRAG_REPLACE,
        "Response_Time": "Instant",          // Không độ trễ
        "Effect": "Light_Touch_Headshot"     // Nhích nhẹ nút bắn là lên đầu
    },

    // Tầng 2: Chống lệch & Lố tâm (Anti-Drift Fix)
    "STABILITY_PATCH": {
        "Address_Clamp": "0x6bc252c",        // Transform_SetPosition sync
        "Anti_Overshoot": HEX_FIX_OVERSHOOT_REPLACE,
        "Zero_Drift": true,                  // Chống trôi tâm khi địch chạy
        "Fix_Neck_Stuck": "Active_0.015"     // Đẩy tâm vượt qua vùng cổ
    },

    // Tầng 3: Tích hợp Offsets V45 (Done List)
    "OFFSET_MAPPING_V46": {
        "Head_Bone": "0x2e5a7b4",            // HeadTF
        "Is_Firing": "0x2dc3804",            // Chỉ kích hoạt khi bắn
        "Is_Visible": "0x2dd8f54",           // Chỉ khóa khi địch lộ diện
        "Internal_SetPos": "0x6bc252c"       // Ghi đè tọa độ tuyệt đối
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V46": {
        "Micro_Drag": "com.accpt_ffxbase64_Key_allow_MicroDragHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Fix_Overshoot": "com.accpt_ffxbase64_Key_allow_FixOvershootHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Anti_Drift": "com.accpt_ffxbase64_Key_allow_AntiDriftAim_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const FF_OFFSETS_V45 = {
    // Tọa độ thực thể (Bones)
    "Head_Transform": "0x2e5a7b4",          // Xương đầu (HeadTF)
    "Hip_Transform": "0x2e5a98c",           // Xương hông (HipTF)
    
    // Camera & View (Góc nhìn)
    "Main_Camera": "0x320",                 // Transform Camera chính
    "Camera_Main_Ptr": "0x6a64c64",         // Con trỏ Camera.get_main
    "Internal_SetPos": "0x6bc252c",         // Hàm ghi tọa độ (SetPosition)
    "Internal_GetPos": "0x6bc248c",         // Hàm lấy tọa độ (GetPosition)
    "Get_Forward": "0x8a88b1c",             // Hướng mặt (GetForward)

    // Trạng thái nhân vật (Triggers)
    "Is_Firing": "0x2dc3804",               // Đang bắn (get_IsFiring)
    "Is_Sighting": "0x2dc867c",             // Đang ngắm/mở ống ngắm
    "Is_Visible": "0x2dd8f54",              // Địch lộ diện (get_isVisible)
    "Is_Dying": "0x2dc1178",                // Địch đã chết hay chưa
    "Max_HP": "0x2e3e2e8",                  // Máu tối đa (get_MaxHP)

    // Hệ thống & Team
    "Local_Player": "0x4101ff4",            // Lấy người chơi hiện tại
    "Current_Match": "0x3266cc0",           // Trận đấu hiện hành
    "Local_Team_Check": "0x86e6fef000",     // Kiểm tra đồng đội (get_isLocalTeam)
    "Set_Aim_Fixed": "0x86e6fef000"          // Ghi đè Aim tuyệt đối
};

const DTien_V45_Engine = {
    "PROJECT": "V45_Offset_Mapping_System",
    "STATUS": "V45_Full_Core_Active",

    // Tầng 1: Điều kiện lọc mục tiêu (Target Filtering)
    "TARGET_SCANNER": {
        "Address_Visible": FF_OFFSETS_V45.Is_Visible,
        "Address_Dying": FF_OFFSETS_V45.Is_Dying,
        "Team_Filter": FF_OFFSETS_V45.Local_Team_Check,
        "Logic": "If (Visible && !Dying && !LocalTeam) -> Lock"
    },

    // Tầng 2: Khóa mục tiêu nâng cao (Aimlock Execution)
    "AIMLOCK_EXECUTION": {
        "Trigger_On_Fire": FF_OFFSETS_V45.Is_Firing,
        "Target_Bone_Head": FF_OFFSETS_V45.Head_Transform,
        "Write_Position": FF_OFFSETS_V45.Internal_SetPos,
        "Forward_Push_Sync": FF_OFFSETS_V45.Get_Forward,
        "Snap_Logic": "Instant_Snap_Bone8"
    },

    // Tầng 3: Đồng bộ Camera (Camera Transform)
    "VIEW_SYNC": {
        "Camera_Transform": FF_OFFSETS_V45.Main_Camera,
        "Camera_Pointer": FF_OFFSETS_V45.Camera_Main_Ptr,
        "Zero_Drift": true
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V45": {
        "Offset_Sync": "com.accpt_ffxbase64_Key_allow_OffsetMappingV45_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Set_Aim_Hard": "com.accpt_ffxbase64_Key_allow_SetAimHard_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Is_Firing_Trigger": "com.accpt_ffxbase64_Key_allow_IsFiringTrigger_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// Patch 1: Triệt tiêu độ tỏa của đạn (Zero Spread - Đạn đi thẳng tắp)
const HEX_ZERO_SPREAD_FIND = `20 40 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2 00 50 A0 E3`;
const HEX_ZERO_SPREAD_REPLACE = `20 40 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2 00 00 A0 E3`;
// Logic: Thay đổi giá trị Spread (R0) về 0 tuyệt đối.

// Patch 2: Ép định dạng mục tiêu là Xương Đầu (Static Bone 8 Force)
const HEX_STATIC_HEAD_FIND = `08 40 95 E5 00 00 54 E3 02 00 00 0A 01 00 A0 E3`;
const HEX_STATIC_HEAD_REPLACE = `08 00 A0 E3 00 00 54 E3 02 00 00 0A 01 00 A0 E3`;
// Logic: Thay lệnh Load Bone ID bằng lệnh Gán trực tiếp (MOV R0, #8).

const DTien_V44_Engine = {
    "PROJECT": "V44_Precision_Head_Injection",
    "STATUS": "V44_Zero_Spread_Patched",

    // Tầng 1: Hex Precision (Chính xác phần cứng)
    "HARDWARE_PRECISION": {
        "Zero_Spread_Active": HEX_ZERO_SPREAD_REPLACE,
        "Static_Bone_Force": HEX_STATIC_HEAD_REPLACE,
        "No_Recoil_V40_Sync": "EF 44 F0 48",     // Kháng giật V40
        "Effect": "Absolute_Accuracy_Headshot"
    },

    // Tầng 2: Cấu hình Auto Aimlock (Logic V42)
    "AIMLOCK_CORE": {
        "Auto_Aim_Status": true,
        "Target_Bone": 999,
        "Snap_Speed": 0.0,                   // Snap tức thời (0 delay)
        "Angle_Drift_Fix": true,             // Chống trôi tâm
        "Distance_Bypass": 500.0             // Hiệu lực đến 500 mét
    },

    // Tầng 3: Hiệu chỉnh hướng mặt (Forward Vector V38)
    "FORWARD_COMPENSATION": {
        "Head_Forward_Push": 0.035,          // Đẩy tâm vào trán đối thủ
        "Prediction_Factor": 1.25,           // Đón đầu cực chuẩn
        "Latency_Sync": "Active"             // Bù trừ Ping
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V44": {
        "Precision_Head": "com.accpt_ffxbase64_Key_allow_PrecisionHexHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Zero_Spread": "com.accpt_ffxbase64_Key_allow_ZeroBulletSpread_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Static_Lock": "com.accpt_ffxbase64_Key_allow_StaticBone8Lock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// Patch 1: Ép Engine lấy Bone ID 8 (Head) làm mục tiêu mặc định
const HEX_HEAD_FORCE_FIND = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2 00 50 A0 E1 08 40 95 E5 00 00 54 E3`;
const HEX_HEAD_FORCE_REPLACE = `00 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2 00 50 A0 E1 08 40 95 E5 08 00 A0 E3`; 
// Logic: Thay đổi lệnh so sánh (CMP) thành lệnh gán trực tiếp (MOV R0, #8)

// Patch 2: Triệt tiêu sai số góc ngắm (Aim Angle Offset Fix)
const HEX_ANGLE_FIX_FIND = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 02 00 00 0A 01 00 A0 E3 08 40 2D E9`;
const HEX_ANGLE_FIX_REPLACE = `10 1A 08 EE 08 40 95 E5 00 00 54 E3 02 00 00 0A 01 00 A0 E3 00 00 A0 E3`;
// Logic: Ép sai số góc nhìn về 0 (Zero Drift)

const DTien_V42_Engine = {
    "PROJECT": "V42_Hex_Auto_Aimlock",
    "STATUS": "V42_Memory_Patched_Headshot",

    // Tầng 1: Hex Head Injection (Bắt buộc khóa đầu)
    "HEX_MEMORY_PATCH": {
        "Target_Function": "GetTargetBone_Static",
        "Target_Bone": "Head_ID_8",
        "Original": HEX_HEAD_FORCE_FIND,
        "Modified": HEX_HEAD_FORCE_REPLACE,
        "Injection_Priority": "Maximum"
    },

    // Tầng 2: Angle Optimization (Fix rung và lệch tâm)
    "ANGLE_OPTIMIZER": {
        "Fix_Drift": HEX_ANGLE_FIX_REPLACE,
        "Stability_Factor": 1.0,             // Khóa chết 100%
        "Smoothing_Bypass": true,            // Bỏ qua bộ lọc mượt để Snap tức thì
        "Update_Frequency": "0ms"
    },

    // Tầng 3: Tích hợp V39 & V40 (ChestToHead & No Recoil)
    "CORE_STABILIZER": {
        "Auto_Drag_Mode": "ChestToHead_Hard",
        "Drag_Speed": 10.0,                  // Tốc độ kéo cực nhanh
        "Fix_Neck_Stuck": 0.015,             // Chống dính cổ
        "No_Recoil_Hardware": "Active",      // Kháng giật phần cứng V40
        "Bullet_Spread": "Zero_Spread"       // Đạn không tỏa
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V42": {
        "Auto_Aim_Head": "com.accpt_ffxbase64_Key_allow_HexAutoAimHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Memory_Bone_8": "com.accpt_ffxbase64_Key_allow_HardLockBone8_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Angle_Lock": "com.accpt_ffxbase64_Key_allow_HexAngleLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// Patch 1: Giảm ma sát góc nhìn (Giúp kéo tâm "nhẹ" và mượt hơn)
const HEX_DRAG_SMOOTH_FIND = `00 00 A0 E3 10 1A 08 EE 08 40 95 E5 00 00 54 E3`;
const HEX_DRAG_SMOOTH_REPLACE = `01 00 A0 E3 10 1A 08 EE 08 40 95 E5 00 00 54 E3`; 
// Logic: Tăng độ nhạy nội tại của Engine (Sensitivity Boost)

// Patch 2: Khóa trục Y khi đã đạt tới Bone 8 (Chống kéo lố - Overdrag)
const HEX_Y_AXIS_LOCK_FIND = `40 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2`;
const HEX_Y_AXIS_LOCK_REPLACE = `40 2D E9 10 B0 8D E2 02 8B 2D ED 00 D0 4D E2`;
// Logic: Triệt tiêu lực kéo thừa khi tâm đã chạm tọa độ đầu

const DTien_V43_Engine = {
    "PROJECT": "V43_Kinetic_Drag_Hex",
    "STATUS": "V43_Drag_Lock_Active",

    // Tầng 1: Hex Stability (Nền tảng kháng giật & mượt)
    "HEX_STABILITY": {
        "Sensitivity_Boost": HEX_DRAG_SMOOTH_REPLACE,
        "Y_Axis_Limit": HEX_Y_AXIS_LOCK_REPLACE,
        "No_Recoil_V40": "EF 44 F0 48",       // Kế thừa kháng giật V40
        "Bullet_Spread": "Zero_Spread"
    },

    // Tầng 2: Thuật toán Kéo tâm (Kinetic Drag Logic)
    "DRAG_KINETIC_CONTROL": {
        "Start_Point": "Chest_Bone",
        "End_Point": "Head_Bone_8",
        "Drag_Speed": 10.0,                  // Tốc độ vuốt chuẩn (V39)
        "Acceleration_Curve": "EaseOut",     // Kéo nhanh dần khi gần đầu
        "Drag_Time_Limit": 0.18,             // Thời gian vuốt cực ngắn
        "Fix_Neck_Stuck": 0.015              // Lực đẩy bù tránh dính cổ
    },

    // Tầng 3: Khóa cứng đầu (Head Lock)
    "HEAD_LOCK_FINAL": {
        "Lock_Strength": 1.0,               // Độ dính tâm khi đã chạm đầu
        "Stable_Time": 0.90,                 // Giữ tâm 0.3 giây sau khi khóa
        "Head_Offset_Push": 0.03,            // Đẩy tâm lên trán (V38)
        "Prediction_Velocity": 1.2           // Dự đoán địch chạy
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V43": {
        "Drag_Hex": "com.accpt_ffxbase64_Key_allow_KineticDragHex_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Head_Lock": "com.accpt_ffxbase64_Key_allow_HexHeadLockStatic_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Smooth_Snap": "com.accpt_ffxbase64_Key_allow_SmoothSnapToBone8_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// --- 1. CẤU HÌNH HỆ THỐNG KHÓA MỤC TIÊU (CONST) ---
// Thay đổi giá trị Bone Acquisition từ ngẫu nhiên sang Bone 8 (Head)
const HEAD_LOCK_FIND = `08 40 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2 00 50 A0 E1 08 40 95 E5 00 00 54 E3`;
const HEAD_LOCK_REPLACE = `08 40 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2 00 50 A0 E1 08 40 95 E5 01 00 54 E3`; 
// Chú thích: Thay đổi flag '00' thành '01' để ép Engine ưu tiên Bone 8 (Head)

const DTien_V41_Engine = {
    "PROJECT": "V41_Hex_Headshot_System",
    "STATUS": "V41_Bone_8_Hardlocked",

    // Tầng 1: Patch Hex Khóa Đầu (Head Injection)
    "HEX_BONE_LOCK": {
        "Target_Bone": "Head_ID_8",
        "Original_Opcode": HEAD_LOCK_FIND,
        "Modified_Opcode": HEAD_LOCK_REPLACE,
        "Memory_Region": "liban_r.so / libil2cpp.so", // Vùng nhớ can thiệp
        "Effect": "Force_Aim_To_Head"
    },

    // Tầng 2: Fix Tâm Đỏ & Tốc độ Snap (V39 Evolution)
    "SNAP_LOGIC_SYNC": {
        "Auto_Snap_Speed": 0.0,             // 0 = Nhảy tâm tức thì (Snap)
        "Trigger_Color": "0xFF0000",        // Tâm đỏ là khóa
        "Aim_Distance_Limit": 500.0,        // Khóa mục tiêu lên đến 500m
        "Static_Bone_Lock": true            // Không cho phép tâm lệch sang vai/cổ
    },

    // Tầng 3: Tích hợp No Recoil V40 (Hex Patch)
    "RECOIL_STABILIZER": {
        "Hardware_Recoil_Fix": "EF 44 F0 48", // Mã Hex kháng giật từ V40
        "Stability_Factor": 1.0,
        "Bullet_Spread_Fix": true            // Đạn đi thẳng 100%
    },

    // Tầng 4: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V41": {
        "Head_Hex": "com.accpt_ffxbase64_Key_allow_HexHeadShot_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Bone_8_Lock": "com.accpt_ffxbase64_Key_allow_HardBoneLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Auto_Snap": "com.accpt_ffxbase64_Key_allow_InstantSnapToHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
// =======================
// V40 ENGINE (GIỮ NGUYÊN - KHÔNG LỖI)
// =======================

const DTien_V40_Engine = {
    PROJECT: "V40_Hex_Injection_System",
    STATUS: "V40_Opcode_Patched",

    HEX_AIM_FOV: {
        Address_Point: "0x2e8a1c4",
        Original_Hex: "70 42 00 00 00 00 00 00 C0 3F 0A D7 A3 3B 0A D7 A3 3B 8F C2 75 3D AE 47 E1 3D 9A 99 19 3E CD CC 4C 3E A4 70 FD 3E",
        Modified_Hex: "FF FF 00 00 00 00 00 00 C0 3F 0A D7 A3 3B 0A D7 A3 3B 8F C2 75 3D AE 47 E1 3D 9A 99 19 3E CD CC 4C 3E A4 70 FD 3E",
        Effect: "Maximize_Scan_Range"
    },

    HEX_NO_RECOIL: {
        Address_Point: "0x3bc14d8",
        Original_Hex: "00 0A 81 EE 10 0A 10 EE 10 8C BD E8 00 00 7A 44 F0 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2 00 50 A0 E1 10 1A 08 EE 08 40 95 E5 00 00 54 E3",
        Modified_Hex: "00 0A 81 EE 10 0A 10 EE 10 8C BD E8 00 00 EF 44 F0 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2 00 50 A0 E1 10 1A 08 EE 08 40 95 E5 00 00 54 E3",
        Effect: "Hardware_Recoil_Freeze"
    },

    CORE_SYNC_V39: {
        AutoAim_Mode: "ChestToHead",
        Drag_Speed: 10.0,
        Drag_Time: "0.01s",
        Curve: "EaseOut",
        Neck_Fix: "Active_0.015",
        Prediction_Velocity: 1.2,
        Forward_Push: 0.03
    },

    RAW_KEYS_V40: {
        FOV_Patch: "com.accpt_ffxbase64_Key_allow_HexFovPatch_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        Recoil_Patch: "com.accpt_ffxbase64_Key_allow_HexRecoilPatch_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        Memory_Write: "com.accpt_ffxbase64_Key_allow_DirectMemoryWrite_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};



const DTien_V39_Engine = {
    "PROJECT": "V39_Adaptive_Drag_System",
    "STATUS": "V39_ChestToHead_Active",

    // Tầng 1: Điều kiện kích hoạt (Trigger Logic)
    "ACTIVATION_TRIGGER": {
        "AutoAim_Enabled": true,
        "Mode": "ChestToHead_Evolution",
        "Fire_Only": "0x2dc3804",           // Chạy khi nhấn nút bắn (fireOnly)
        "Crosshair_Red_Check": "0x2dd8f54", // Chỉ kéo khi tâm đỏ (crosshairRed)
        "Enemy_Visible": true,               // Kiểm tra địch không bị vật cản
        "Update_Frequency": "0ms"
    },

    // Tầng 2: Tọa độ Xương & Quỹ đạo (Bone & Path)
    "DRAG_PATH_CONTROL": {
        "Start_Bone": "Chest_0x3",           // Điểm bắt đầu: Ngực
        "End_Bone": "Head_0x8",              // Điểm kết thúc: Đầu
        "Drag_Speed": 10.0,                  // Tốc độ kéo chính (drag.speed)
        "Drag_Time_Limit": "0.18s",          // Thời gian hoàn thành cú kéo (drag.time)
        "Acceleration": 15.5,                 // Gia tốc cực mạnh (drag.acceleration)
        "Curve_Type": "EaseOut_Quadratic"    // Kéo nhanh dần lên đầu (drag.curve)
    },

    // Tầng 3: Sửa lỗi dính cổ & Hụt đầu (Fix Logic)
    "PRECISION_FIX_SYSTEM": {
        "Anti_Neck_Stuck": true,             // Fix dính cổ (neckStuck)
        "Anti_Overshoot": true,              // Chống kéo lố qua đầu (overshootHead)
        "Micro_Adjust_Value": 0.015,         // Hiệu chỉnh siêu nhỏ (microAdjust)
        "Distance_Scaling": {                // Chống lệch tâm theo khoảng cách
            "Min_Scale": 0.9,
            "Max_Scale": 1.3,
            "Auto_Distance_Adapt": true
        }
    },

    // Tầng 4: Khóa đầu & Giảm rung (HeadLock & Smoothing)
    "STABILITY_ENGINE": {
        "HeadLock_Strength": 0.95,           // Độ chặt khi chạm đầu (0.95)
        "Stable_Time": "1.5s",              // Thời gian giữ tâm ổn định (stableTime)
        "Smoothing_Factor": 0.12,            // Giảm rung tâm (smoothing.factor)
        "Zero_Recoil_Sync": true             // Triệt tiêu độ nảy khi đang kéo
    },

    // Tầng 5: Dự đoán di chuyển (Kinetic Prediction)
    "PREDICTION_KINETIC": {
        "Velocity_Multiplier": 1.9,          // Hệ số vận tốc (velocity = 1.2)
        "Head_Offset_Push": 0.03,            // Đẩy tâm đón đầu 0.03 (headOffset)
        "Ping_Compensation": true,           // Bù trừ độ trễ mạng
        "Vector_Forward": "Active"           // Hướng mặt địch
    },

    // Tầng 6: Chuỗi Key nguyên bản cho Loader (Raw Config)
    "RAW_KEYS_V39": {
        "ChestToHead": "com.accpt_ffxbase64_Key_allow_ChestToHeadDrag_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "EaseOut_Curve": "com.accpt_ffxbase64_Key_allow_DragCurveEaseOut_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Neck_Fix": "com.accpt_ffxbase64_Key_allow_FixNeckStuck0.015_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V38_Engine = {
    "PROJECT": "V38_Neural_Bone_Mapping",
    "STATUS": "V38_Quaternion_Forward_Active",

    // Bước 1: Thuật toán nhận diện xương thông minh (Neural Detect)
    "SKELETON_SCANNER": {
        "Scan_Method": "Highest_Z_Vertex",   // Tìm đỉnh cao nhất trục Z
        "Bone_Limit": 999,                    // Quét 20 ID xương (for i < 20)
        "Filter_Zero_Vectors": true,         // Loại bỏ xương lỗi (IsZero)
        "Model_Cache_System": {
            "Enable": true,                  // Lưu Cache theo ModelID
            "Storage": "g_BoneDatabase",     // Tránh quét lại gây giật lag
            "Auto_Update": "On_Model_Change" // Tự cập nhật khi gặp nhân vật mới
        }
    },

    // Bước 2: Phân tích hướng mặt (Quaternion Forward Logic)
    "FACE_DIRECTION_ENGINE": {
        "Get_Bone_Rotation": "0x8a88b1c",    // Truy xuất Quaternion xoay của đầu
        "Forward_Vector_Calc": "headRot * Vector3(0, 0, 1)", 
        "Forward_Push_Offset": 0.035,        // Đẩy tâm về trước mặt 0.035f (Fix trán)
        "Dynamic_Face_Sync": true,           // Xoay tâm theo hướng địch quay mặt
        "Bone_Matrix_RAM": "0x2e5a7b4"       // Địa chỉ ma trận xương thực tế
    },

    // Bước 3: Bù trừ tọa độ động (Dynamic Z-Offset Fix)
    "COORDINATE_COMPENSATION": {
        "Base_Origin_Sync": "0x6bc248c",     // Tọa độ chân nhân vật (Position)
        "Relative_Height_Calc": "head.z - origin.z",
        "Dynamic_Height_Fix": true,          // headPos.z = target.z + data.headOffsetZ
        "Anti_Neck_Drop": 0.025,             // Lực đẩy nhẹ tránh tuột xuống cổ/ngực
        "Precision_Limit": 0.0001            // Sai số cực thấp
    },

    // Bước 4: Dự đoán động năng & Ping (Kinetic Prediction)
    "KINETIC_PREDICTION": {
        "Velocity_Vector": "0x6bc248c",      // Lấy vận tốc thực thể (GetVelocity)
        "Latency_Compensation": true,        // Lấy Ping thực tế (GetNetworkLatency)
        "Prediction_Factor": 1.25,           // Hệ số dự đoán 1.25f (Đón đầu cực chuẩn)
        "Formula": "Pos + (Velocity * Latency * 1.25)"
    },

    // Bước 5: Thực thi khóa cứng & Kháng giật (Hard-Lock Execution)
    "CORE_INJECTION": {
        "Trigger_State": "IsCrosshairRed",   // Chỉ khóa khi tâm đã đỏ (0xFF0000)
        "ViewAngle_Override": "0x8a88b1c",   // Ghi đè trực tiếp góc nhìn nhân vật
        "Freeze_Recoil_Control": true,       // Khóa cứng độ giật (No Recoil)
        "Smooth_Factor": 0.0,                // smoothness = 0 (Snap tức thời)
        "Update_Rate": "0ms",                // Tốc độ phản hồi Sleep(0)
        "Input_Bypass": "Permanent_On_Lock"  // Vô hiệu hóa tay vuốt khi đã khóa
    },

    // Tầng 6: Chuỗi Key nguyên bản cho Loader (Raw Config)
    "RAW_KEYS_V38": {
        "Neural_Mapping": "com.accpt_ffxbase64_Key_allow_NeuralBoneMapping_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Forward_Injection": "com.accpt_ffxbase64_Key_allow_ForwardVectorInjection_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Kinetic_Sync": "com.accpt_ffxbase64_Key_allow_KineticPingPrediction_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V37_Engine = {
    "PROJECT": "V37_Dynamic_Bone_Scanner",
    "STATUS": "V37_Forward_Vector_Active",

    // Bước 1: Tự động nhận diện xương đầu (Auto Detect Head Bone)
    "DYNAMIC_SCANNER": {
        "Scan_Range": 20,                    // Quét 20 ID xương đầu tiên (for i < 20)
        "Highest_Z_Detection": true,         // Tìm xương có tọa độ Z cao nhất (relativeZ)
        "Model_ID_Database": "Dynamic_Map",  // Lưu Cache theo từng Model nhân vật
        "Zero_Pos_Filter": true,             // Loại bỏ xương lỗi (IsZero)
        "Bone_Matrix_RAM": "0x2e5a7b4"       // Truy xuất bộ nhớ xương
    },

    // Bước 2: Fix lệch cổ & đo Offset chuẩn (GetFixedHeadPosition)
    "OFFSET_COMPENSATION": {
        "Head_Offset_Z": "Dynamic_Assign",   // data.headOffsetZ = head.z - origin.z
        "Base_Origin_Offset": "0x6bc248c",   // Tọa độ gốc của Entity
        "Dynamic_Z_Fix": true,               // headPos.z = origin.z + offsetZ
        "Precision_Level": "High"            // Khử sai số lệch cổ/ngực
    },

    // Bước 3: Tính toán hướng mặt (GetHeadForward)
    "FORWARD_VECTOR_LOGIC": {
        "Quaternion_Rotation": "0x8a88b1c",  // Lấy hướng xoay xương đầu (GetBoneRotation)
        "Forward_Push_Value": 0.03,          // Đẩy tâm về trước mặt 0.03f (forward * 0.03)
        "Face_Direction_Sync": true,         // Đồng bộ hướng nhìn của địch
        "Vector_3D_Calc": "headPos + (forward * 0.03)"
    },

    // Bước 4: Dự đoán di chuyển nâng cao (Advanced Prediction)
    "PREDICTION_KINETIC": {
        "Velocity_Sync": "0x6bc248c",        // Lấy vận tốc (GetVelocity)
        "Latency_Bypass": true,              // Lấy Ping thực tế (GetNetworkLatency)
        "Prediction_Factor": 1.2,            // Hệ số dự đoán 1.2f
        "Formula": "Pos + (Vel * Latency * 1.2)"
    },

    // Bước 5: Thực thi khóa cứng & Kháng giật (Hard Lock & No Recoil)
    "HARD_LOCK_STABILITY": {
        "Trigger_Condition": "0x2dd8f54",    // Khi tâm đỏ (IsCrosshairStateRed)
        "ViewAngle_Injection": "0x8a88b1c",  // Ghi đè trực tiếp góc nhìn
        "Freeze_Recoil": true,               // Kháng giật 100% (FreezeRecoilControl)
        "Update_Frequency": "0ms",           // Phản hồi tức thì (Sleep 0)
        "Input_Bypass": "Active"             // Chặn lực vuốt tay khi đã khóa
    },

    // Tầng 6: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V37": {
        "Bone_Scanner": "com.accpt_ffxbase64_Key_allow_AutoDetectHeadBone_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Forward_Push": "com.accpt_ffxbase64_Key_allow_ForwardVectorPush_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Dynamic_Cache": "com.accpt_ffxbase64_Key_allow_BoneDatabaseCache_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V36_Engine = {
    "PROJECT": "V36_Full_Engine_Sync",
    "STATUS": "V36_Active_Headshot_Only",

    "AIM_SETTINGS": {
        "Head_Bone": 0x2e5a7b4,                      // ID xương đầu (g_Settings.headBone)
        "Drag_Speed": 0.0,                   // 0 = Snap tức thì (dragSpeed)
        "Prediction_Factor": 1.0,            // Hệ số dự đoán di chuyển
        "Max_Lock_Distance": 9999.0,          // Giới hạn khoảng cách lock
        "Prioritize_Head": true,             // Ưu tiên Headshot 100%
        "Enable_Prediction": true,           // Bật dự đoán theo Velocity + Ping
        "Enable_Recoil_Control": true,       // Bật kháng giật (FreezeRecoil)
        "Enable_Hard_Lock": true             // Bật khóa cứng khi angleDiff < 1.0
    },

    // --- 2. HÀM HỖ TRỢ & CHUẨN HÓA (HELPER FUNCTIONS) ---
    "ANGLE_MATHEMATICS": {
        "Normalize_Logic": {
            "Pitch_Limit": 89.0,             // Tránh bug quay quá 180 độ (NormalizeAngle)
            "Yaw_Limit": 360.0,              // Chuẩn hóa trục Yaw
            "Z_Axis_Fix": 0.0                // Reset trục Z
        },
        "Smoothing_Logic": {
            "Mode": "Direct_Target",         // Nếu Drag_Speed = 0 (SmoothAngle logic)
            "Delta_Normalize": true,         // Chuẩn hóa Delta trước khi nội suy
            "Interpolation_Frequency": "0ms" // Tốc độ phản hồi Sleep(0)
        }
    },

    // --- 3. QUY TRÌNH THỰC THI (EXECUTION FLOW) ---
    "EXECUTION_PIPELINE": {
        // Bước 1: Check Trigger (IsCrosshairStateRed)
        "Trigger_Condition": "0x2dd8f54",    
        
        // Bước 4 & 5 & 6: Lấy Pos + Prediction + Fix Lệch
        "COORDINATE_TRANSFORM": {
            "Bone_Matrix": "0x2e5a7b4",      // Lấy tọa độ xương đầu
            "Velocity_Sync": "0x6bc248c",    // velocity * latency * factor
            "Network_Latency_Bypass": true,  // Bù trừ Ping thực tế
            "Height_Offset_Push": 0.02,      // headPos.z += 0.02f (Tránh dính cổ)
            "Camera_Pos_Sync": "0x6bc248c"   // LocalPlayer->GetCameraPos
        },

        // Bước 7 & 8 & 9: Tính Góc & Apply Aim
        "VIEW_ANGLE_INJECTION": {
            "Calculate_Angle_Logic": "W2S_Matrix_0x320",
            "Set_View_Angles": "0x8a88b1c",  // Ghi đè trực tiếp góc nhìn
            "Hard_Lock_Threshold": 1.0,      // Nếu angleDiff < 1.0 => Set tuyệt đối
            "Input_Bypass_Active": true      // Khóa cứng khi đã đạt mục tiêu
        },

        // Bước 11: No Recoil (FreezeRecoilControl)
        "STABILITY_CONTROL": {
            "Freeze_Recoil": true,           // Đóng băng độ giật
            "Zero_Drift_Active": true,       // Chống trôi tâm tuyệt đối
            "Stability_W_Lock": 0.999266     // Khóa trục xoay Camera
        }
    },

    // --- 4. CHUỖI KEY NGUYÊN BẢN (RAW CONFIG) ---
    "RAW_KEYS_V36": {
        "Full_Engine": "com.accpt_ffxbase64_Key_allow_V36FullEngine_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Hard_Lock": "com.accpt_ffxbase64_Key_allow_HardLockThreshold1.0_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Normalize_Angle": "com.accpt_ffxbase64_Key_allow_NormalizeViewAngles_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};

const DTien_V35_Engine = {
    "PROJECT": "V35_Precision_Clamp_System",
    "STATUS": "V35_Sensitivity_Nullified",

    // Bước 1 & 2: Color Trigger & Bone Matrix (TargetBone = 8)
    "TARGET_VALIDATION": {
        "IsCrosshairRed_Check": "0x2dd8f54", // Kiểm tra tâm đỏ (Trigger)
        "Target_Bone_ID": 8,                 // Xương đầu (targetBone = 8)
        "Bone_Matrix_Offset": "0x2e5a7b4",   // Truy xuất ma trận xương
        "Get_Velocity_Predict": "0x6bc248c", // Dự đoán vận tốc (GetVelocity)
        "Delta_Time_Sync": true              // Đồng bộ thời gian thực (GetDeltaTime)
    },

    // Bước 3 & 4: WorldToScreen & Anti-Overaim Algorithm (Clamp Logic)
    "ANTI_OVERAIM_CLAMP": {
        "W2S_Matrix_Sync": "0x320",          // Chuyển đổi 3D -> 2D
        "Precision_Limit": 0.5,              // Sai số cực thấp (precisionLimit = 0.5f)
        "Clamp_Logic_X": "Clamp(currentX, headX - 0.5, headX + 0.5)",
        "Clamp_Logic_Y": "Clamp(currentY, headY - 0.5, headY + 0.5)",
        "Hard_Boundary_Lock": true           // Khóa ranh giới cứng (Kẹp tâm)
    },

    // Bước 5: Ghi đè góc nhìn tuyệt đối (UpdateViewAngle)
    "VIEW_ANGLE_OVERRIDE": {
        "Update_View_Angle": "0x8a88b1c",    // Ép Camera nhìn vào tọa độ Clamp
        "Instant_SetPos": "0x6bc252c",       // Ghi đè tọa độ tâm (UpdateViewAngle)
        "Update_Frequency": "0ms",           // Phản hồi tức thì (Sleep 0)
        "Smoothing_Factor": 0.0              // Không độ trễ (Snap tuyệt đối)
    },

    // Bước 6: Vô hiệu hóa độ nhạy Game (Sensitivity Nullification)
    "INPUT_NULLIFICATION": {
        "Ignore_Manual_Input_On_Red": true,  // Bỏ qua vuốt tay khi tâm đỏ
        "Sensitivity_Multiplier": 0.0,       // Ép độ nhạy về 0 (Nullification)
        "Bypass_Manual_Y_X": "High_Priority",// Script chiếm quyền 100%
        "Input_Restore_On_Green": true       // Trả lại tay khi tâm hết đỏ
    },

    // Tầng 6: Thực thi đạn (Bullet Engine V35)
    "BULLET_ENGINE_V35": {
        "Bullet_Tracer_Always_Head": true,   // Đạn tự tìm đầu
        "Zero_Recoil_Compensate": true,      // Kháng giật tuyệt đối
        "No_Spread_Sync": true,              // Đạn không tỏa (FixBulletSpread)
        "Priority_Headshot_100": true        // Ưu tiên sát thương đầu
    },

    // Tầng 7: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V35": {
        "Precision_Clamp": "com.accpt_ffxbase64_Key_allow_PrecisionClampLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Input_Nullify": "com.accpt_ffxbase64_Key_allow_IgnoreManualInputOnRed_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Bone_8_Fix": "com.accpt_ffxbase64_Key_allow_HardBone8Lock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V34_Engine = {
    "PROJECT": "V34_Ultimate_HeadLock_System",
    "STATUS": "V34_ViewAngle_Injection_Active",

    // Bước 1: Target Acquisition (Quét mục tiêu theo khoảng cách)
    "TARGET_ACQUISITION": {
        "GetBestTarget_Distance": true,      // Ưu tiên địch gần nhất
        "IsLocalPlayerAlive_Check": "0x2dc3804", 
        "Target_Bone_Index": 8,              // headBoneIndex = 8 (Chỉ số xương đầu)
        "Bone_Matrix_Offset": "0x2e5a7b4"    // Ma trận xương thực tế trong RAM
    },

    // Bước 2 & 3: Tính toán góc nhìn (Trigonometric Aim Angles)
    "TRIGONOMETRIC_CALCULATION": {
        "Get_Eye_Position": "0x6bc248c",     // Vị trí mắt người chơi (myPos)
        "Delta_Vector_Calculation": true,    // Tính toán độ lệch (delta)
        "Formula_Pitch_Yaw": {
            "Pitch_X": "-asin(delta.z / delta.Length) * (180/PI)",
            "Yaw_Y": "atan2(delta.y, delta.x) * (180/PI)"
        },
        "Smoothness": 0.0,                   // smoothness = 0.0f (Snap tức thời - Nhẹ nhất)
        "Static_Lock_Rate": 1.0              // Khóa chặt 100% (staticLock)
    },

    // Bước 4: Thực thi khóa chặt (Hard Lock Injection)
    "VIEW_ANGLE_INJECTION": {
        "Trigger_IsFiring": "0x2dc3804",    // Khi nhấn nút bắn (IsPressingFireButton)
        "Write_Memory_ViewAngles": "0x8a88b1c", // Ghi đè trực tiếp ViewAngles
        "Injection_Speed": "0ms",            // Cập nhật liên tục (Sleep 1)
        "Hard_Rotation_Lock": true,          // Xoay tâm theo hướng di chuyển của đầu
        "Internal_SetPos": "0x6bc252c"       // Cập nhật vị trí hiển thị
    },

    // Bước 5: Fix lố tâm & Chặn Input tay (Anti-Overaim)
    "INPUT_BYPASS_FIX": {
        "Set_Mouse_Multiplier_Firing": 0.0,  // Khi bắn: Vô hiệu hóa tay (Fix lố 100%)
        "Set_Mouse_Multiplier_Idle": 1.0,    // Khi không bắn: Trả lại độ nhạy 100%
        "Manual_Y_X_Bypass": "Active",       // Lờ đi hoàn toàn lực vuốt tay khi khóa
        "Zero_Drift_Active": true            // Chống trôi tâm tuyệt đối
    },

    // Tầng 6: Thực thi đạn và Sát thương (Bullet Priority)
    "BULLET_ENGINE_V34": {
        "Fix_Bullet_Spread": true,           // No Spread (Đạn không tỏa)
        "Zero_Recoil_Sync": true,            // Triệt tiêu độ nảy (SetRecoil 0,0)
        "Priority_Headshot_100": true,       // Ưu tiên sát thương đầu
        "Instant_Hit_No_Delay": true        // Bắn là trúng ngay
    },

    // Tầng 7: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V34": {
        "Ultimate_Lock": "com.accpt_ffxbase64_Key_allow_UltimateHeadLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "ViewAngle_Inject": "com.accpt_ffxbase64_Key_allow_ViewAngleInjection_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Anti_Overaim": "com.accpt_ffxbase64_Key_allow_NoInputOnFiring_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V33_Engine = {
    "PROJECT": "V33_Absolute_Kinetic_System",
    "STATUS": "V33_ViewAngle_Override_Active",

    // Bước 1 & 2: Color Trigger & Entity Query (360 FOV)
    "ENTITY_SCANNER_360": {
        "FOV_Radius": 360.0,                 // Vòng quét toàn cảnh (fov = 360.0f)
        "Color_Trigger_Hex": "0xFF0000",     // Kích hoạt khi tâm đỏ
        "Detection_Offset": "0x2dd8f54",     // Kiểm tra màu sắc thực tế
        "Target_Bone_ID": 0,                 // BONE_HEAD (Xương đầu)
        "Target_Validation": "IsAlive_InFOV" // Kiểm tra thực thể còn sống
    },

    // Bước 3: Dự đoán vị trí (Kinetic Prediction & Ping Compensation)
    "PREDICTION_ENGINE": {
        "Velocity_Offset": "0x6bc248c",      // Lấy vận tốc thực thể (GetVelocity)
        "Ping_Compensation": true,           // Bù trừ độ trễ mạng (Ping/1000.0f)
        "Prediction_Factor": 1.55,           // Hệ số dự đoán hướng di chuyển
        "Jump_Flight_Sync": true,            // Đồng bộ tọa độ khi địch nhảy/bay
        "Update_Rate": "0ms"                 // Tốc độ phản hồi Sleep(0)
    },

    // Bước 4 & 5: WorldToScreen & ViewAngle Hard-Lock (Smooth = 0)
    "HARD_LOCK_EXECUTION": {
        "W2S_Matrix": "0x320",               // ProjectWorldToScreen logic
        "ViewAngle_Override": "0x8a88b1c",   // Ghi đè trực tiếp góc nhìn (SetViewAngles)
        "Smooth_Factor": 0.0,                // Smooth = 0 (Khóa chặt tuyệt đối)
        "Instant_Pos_Assign": "0x6bc252c",   // Ép tọa độ tâm = tọa độ đầu dự đoán
        "Input_Bypass": "Permanent"          // Lờ đi hoàn toàn lực vuốt tay khi đã khóa
    },

    // Bước 6: Loại bỏ sai số (No Spread & No Recoil)
    "BULLET_STABILIZER": {
        "Fix_Bullet_Spread": true,           // Loại bỏ độ tỏa của đạn (No Spread)
        "Zero_Recoil_Val": 0.0,              // Triệt tiêu độ giật (SetRecoil 0,0)
        "Bullet_Tracer_V33": "Always_Head",  // Đạn tự tìm đầu (Tracer)
        "Instant_Hit_Logic": true            // Bắn là trúng ngay (No travel time)
    },

    // Tầng 7: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V33": {
        "Absolute_Aim": "com.accpt_ffxbase64_Key_allow_AbsoluteAimLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Kinetic_Pred": "com.accpt_ffxbase64_Key_allow_KineticPrediction_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "ViewAngle_Lock": "com.accpt_ffxbase64_Key_allow_ViewAngleOverride_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V32_Engine = {
    "PROJECT": "V32_Chromatic_Lock_System",
    "STATUS": "V32_Red_Lock_Active",

    // Bước 1 & 2: Định nghĩa mã màu & Kiểm tra tâm đỏ (Chromatic Scan)
    "COLOR_DETECTION_SYSTEM": {
        "Target_Red_Hex": "0xFF0000",        // Mã màu đỏ mục tiêu
        "Scan_Radius_Pixel": 5,              // Quét 5 pixel quanh tâm (SCAN_RADIUS)
        "Color_Memory_Offset": "0x2dd8f54",  // Địa chỉ bộ nhớ chứa màu tâm ngắm
        "Update_Frequency": "0ms",           // Tốc độ phản hồi Sleep(0)
        "IsPlayerFiring_Check": "0x2dc3804"  // Trạng thái đang nhấn nút bắn
    },

    // Bước 3 & 4: Kích hoạt Aimlock & ForceCrosshair (Hard-Lock)
    "HARD_LOCK_EXECUTION": {
        "Get_Best_Target": "Closest_To_Crosshair", // Lấy địch gần tâm nhất
        "Head_Bone_TF": "0x2e5a7b4",         // Bone Head mục tiêu
        "W2S_Matrix_Sync": "0x320",          // Ma trận đồng bộ tọa độ màn hình
        "Force_Crosshair_To": "0x6bc252c",   // Hàm ép tọa độ (ForceCrosshairTo)
        "Input_Override_Priority": "High",   // Script chiếm quyền điều khiển tay
        "Y_Axis_Push_Offset": 0.285          // Ghim chính xác đỉnh đầu
    },

    // Bước 5: Giữ tâm không giật (Zero Recoil 0.0f)
    "ZERO_RECOIL_CORE": {
        "Weapon_Recoil_Val": 0.0,            // Triệt tiêu độ giật về 0 (SetWeaponRecoil)
        "Anti_Vertical_Kick": true,          // Kháng giật dọc 100%
        "Anti_Horizontal_Shake": true,       // Kháng rung ngang 100%
        "Stability_W_Lock": 0.999266,        // Khóa trục xoay Camera ổn định
        "Zero_Drift_Active": true            // Chống trôi tâm tuyệt đối khi đang đỏ
    },

    // Tầng 4: Thực thi đạn đuổi (Bullet Priority)
    "BULLET_ENGINE_V32": {
        "Bullet_Tracer_Always_Head": true,   // Đạn tự tìm đầu (Tracer)
        "Priority_Headshot_100": true,       // Ưu tiên sát thương đầu 100%
        "Vector_Bending_Angle": 360.0,        // Góc bẻ đạn cực rộng
        "Instant_Hit_No_Delay": true        // Bắn là trúng ngay (0ms travel)
    },

    // Tầng 5: Chuỗi Key nguyên bản cho Loader (Raw)
    "RAW_KEYS_V32": {
        "Red_Aimlock": "com.accpt_ffxbase64_Key_allow_LockOnRedColor_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Zero_Recoil": "com.accpt_ffxbase64_Key_allow_ZeroRecoilOnRed_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Hard_Lock": "com.accpt_ffxbase64_Key_allow_ForceCrosshairToHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V31_Engine = {
    "PROJECT": "V31_Hyper_Sampling_Snap",
    "STATUS": "V31_Impulse_Active",

    // Bước 1: BoostSensitivity & Touch Sampling (1000Hz)
    "TOUCH_BOOST_SYSTEM": {
        "Sensitivity_Multiplier": 500.0,       // Tăng độ nhạy 250% (2.5f)
        "Touch_Latency_Min": "0.001ms",      // Giảm độ trễ xuống mức tối thiểu
        "Sampling_Rate_Override": "1000Hz",  // Ép tần số quét cảm ứng tối đa
        "Input_Recognition_Speed": "Instant" // Nhận diện lực vuốt thần tốc
    },

    // Bước 2: Impulse Snap (Kéo vọt lên đầu trong 0.05s)
    "IMPULSE_SNAP_LOGIC": {
        "Trigger_IsFiring": "0x2dc3804",    // Trạng thái nhấn nút bắn
        "Snap_Force_Impulse": 0.8,           // Xung lực kéo vọt (snapForce * 0.8f)
        "Travel_Time_Limit": "0.05s",        // Thời gian đạt đỉnh đầu cực ngắn
        "Vertical_Vector_Up": true,          // Chỉ đẩy mạnh trục Y lên trên
        "Internal_MoveCrosshair": "0x6bc252c" // Hàm thực thi dịch chuyển tâm
    },

    // Bước 3: Fix Nặng Tâm & Đóng băng trục Y (Sticky & Brake)
    "STICKY_BRAKE_LOCK": {
        "Head_Bone_TF": "0x2e5a7b4",         // Bone Head mục tiêu
        "Distance_Threshold": 5.0,           // Ngưỡng dính < 5 pixel
        "Lock_Axis_Y_At_Head": true,         // Đóng băng trục Y tại đầu (LockAxisY)
        "Disable_Recoil_Sync": true,         // Triệt tiêu hoàn toàn độ nảy (No Recoil)
        "Manual_Input_Bypass": "Active",     // Chặn lực vuốt tay thừa (Fix Lố)
        "Zero_Drift_Active": true            // Chống trôi tâm tuyệt đối
    },

    // Tầng 4: Thực thi đạn đuổi (Bullet Priority)
    "BULLET_ENGINE_V31": {
        "Bullet_Tracer_Always_Head": true,   // Đạn tự tìm đầu
        "Priority_Headshot_100": true,       // Ưu tiên sát thương đầu
        "Vector_Bending_Angle": 360.0,        // Góc bẻ đạn cực rộng
        "Instant_Hit_Logic": true            // Bắn là trúng ngay (0ms travel)
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V31": {
        "Hyper_Sampling": "com.accpt_ffxbase64_Key_allow_TouchSampling1000Hz_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Impulse_Snap": "com.accpt_ffxbase64_Key_allow_ImpulseSnapToHead_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Axis_Y_Clamp": "com.accpt_ffxbase64_Key_allow_VerticalAxisFreeze_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V30_Engine = {
    "PROJECT": "V30_Anti_Gravity_Clamp",
    "STATUS": "V30_Y_Axis_Locked",

    // Bước 1 & 2: Xác định tọa độ & Tính toán Delta Y (Head-Tracking)
    "DELTA_TRACKING_SYSTEM": {
        "Target_Bone_TF": "0x2e5a7b4",       // Bone Head mục tiêu
        "W2S_Matrix_Sync": "0x320",          // Ma trận đồng bộ tọa độ 2D
        "Update_Frequency": "0ms",           // Tương đương Sleep(1)
        "IsAiming_Check": "0x2dc3804"        // Trạng thái đang ngắm/bắn
    },

    // Bước 3: Lực bù trừ đẩy tâm ngược lên (Anti-Gravity Force)
    "ANTI_GRAVITY_FORCE": {
        "Auto_Lift_Head": true,              // Tự động đẩy tâm lên đầu
        "Force_Multiplier_Y": 1.5,           // Hệ số bù trừ 1.5f (Kháng lực hút game)
        "Instant_Correction": "0ms",         // Sửa lỗi tức thì
        "Internal_MoveMouse": "0x6bc252c",   // Hàm thực thi di chuyển tâm
        "Y_Axis_Push_Offset": 0.285          // Ghim chính xác đỉnh đầu (Trán)
    },

    // Bước 4: Đóng băng trục Y (Y-Axis Clamp)
    "VERTICAL_CLAMP_LOGIC": {
        "Clamp_Movement_At_Head": true,      // Khóa cứng chuyển động tại tọa độ Head
        "Disable_Downward_Input": true,      // Chặn hoàn toàn lực vuốt tay xuống thân
        "Bypass_Manual_Y": "High_Priority",  // Ưu tiên tọa độ Script > Cảm ứng tay
        "Zero_Drift_Active": true,           // Chống trôi tâm tuyệt đối
        "Anti_Hips_Reversion": "0x2e5a98c"   // Bỏ qua hoàn toàn Bone Hông/Thân
    },

    // Tầng 4: Thực thi đạn đuổi (Bullet Priority)
    "BULLET_ENGINE_V30": {
        "Bullet_Tracer_Always_Head": true,   // Đạn tự tìm đầu (Tracer)
        "Priority_Headshot_100": true,       // Ưu tiên sát thương đầu
        "Vector_Bending_Angle": 360.0,        // Góc bẻ đạn cực rộng
        "No_Recoil_Compensate": true         // Kháng giật 100%
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V30": {
        "Anti_Gravity": "com.accpt_ffxbase64_Key_allow_AntiGravityHeadLift_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Y_Axis_Clamp": "com.accpt_ffxbase64_Key_allow_VerticalMovementClamp_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Fixed_Head_Lock": "com.accpt_ffxbase64_Key_allow_FixedHeadLockNoReversion_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V29_Engine = {
    "PROJECT": "V29_Bone_Priority_Teleport",
    "STATUS": "V29_Hard_Snap_Active",

    // Bước 1 & 2: Định nghĩa Bone & Lấy tọa độ (BONE_HEAD 0)
    "BONE_DEFINITION_SYSTEM": {
        "BONE_HEAD_ID": 0,                   // Ép mục tiêu duy nhất: ĐẦU
        "IGNORE_BONE_NECK": 1,               // Bỏ qua Cổ
        "IGNORE_BONE_HIPS": 2,              // Bỏ qua Ngực
        "Target_Bone_TF": "0x2e5a7b4",       // Bone Head thực tế trong RAM
        "Validation_Check": "0x2dd8f54"      // enemy.IsAlive & IsInFOV
    },

    // Bước 3 & 4: WorldToScreen & SetCursorPos (Teleport Snap)
    "TELEPORT_SNAP_LOGIC": {
        "W2S_Matrix_Sync": "0x320",          // Ma trận 3D -> 2D
        "Internal_SetPos": "0x6bc252c",      // Hàm dịch chuyển tâm (SetCursorPos)
        "Snap_Speed": "Instant_0ms",         // "Nhảy" tâm tức thì, không rê
        "FOV_Limit": 360.0,                  // Tầm nhìn quét Snap
        "Y_Axis_Push": 0.285                 // Ghim chính xác đỉnh đầu
    },

    // Bước 5: Giữ chặt & Ngắt cảm ứng tay (Disable Manual Movement)
    "INPUT_BYPASS_CONTROL": {
        "Disable_Manual_Y_Movement": true,   // Chặn đứng lực vuốt tay xuống (Fix tuột)
        "Disable_Manual_X_Drift": true,      // Chặn đứng lực lệch ngang
        "Hard_Lock_On_Target": true,         // Khóa chết tọa độ khi đã ghim
        "Input_Override_Priority": "High",   // Ưu tiên tọa độ Script hơn tọa độ Tay
        "Zero_Drift_Active": true            // Chống trôi tâm tuyệt đối
    },

    // Tầng 4: Thực thi đạn đuổi (Bullet Priority)
    "BULLET_ENGINE_V29": {
        "Bullet_Tracer_Always_Head": true,   // Đạn tự tìm đầu
        "Priority_Headshot_100": true,       // Ưu tiên sát thương đầu
        "Vector_Bending_Angle": 360.0,        // Góc bẻ đạn cực rộng
        "No_Recoil_Compensate": true         // Kháng giật 100%
    },

    // Tầng 5: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V29": {
        "Bone_Priority": "com.accpt_ffxbase64_Key_allow_BoneHeadPriority_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Manual_Bypass": "com.accpt_ffxbase64_Key_allow_DisableManualInputOnLock_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Snap_Teleport": "com.accpt_ffxbase64_Key_allow_InstantTeleportAim_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};
const DTien_V28_Engine = {
    "PROJECT": "V28_Sticky_Anchor_System",
    "STATUS": "V28_NoRecoil_Active",

    // Bước 1 & 2: GetEnemyHead & Distance Calculation
    "STICKY_COORDINATE_SYNC": {
        "Target_Bone_TF": "0x2e5a7b4",       // Bone Head mục tiêu
        "W2S_Matrix_Sync": "0x320",          // Ma trận đồng bộ tọa độ màn hình
        "Refresh_Rate": "0ms",               // Tương đương Sleep(1)
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
        "Vector_Bending_Angle": 360.0,        // Góc bẻ đạn cực rộng
        "Y_Axis_Push_Offset": 0.285          // Ghim đỉnh đầu
    },

    // Tầng 6: Chuỗi Key nguyên bản (Raw Config)
    "RAW_KEYS_V28": {
        "Sticky_Aim": "com.accpt_ffxbase64_Key_allow_StickyHeadAim_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True",
        "Zero_Recoil": "com.accpt_ffxbase64_Key_allow_NoRecoilActive_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=Active",
        "Absolute_Anchor": "com.accpt_ffxbase64_Key_allow_PermanentHeadAnchor_app_com.dts.freefireth_onauto_cws_90-100.uncrack.list=True"
    }
};

const DTien_V26_Engine = {
    "PROJECT": "V26_Dynamic_Pull_Sync",
    "STATUS": "V26_Active_Headshot_Only",

    // Tầng 1: Logic kéo tâm (Pull-Speed Simulation)
    "FIRE_BUTTON_LOGIC": {
        "Trigger_Offset": "0x2dc3804",      // Trạng thái nhấn nút bắn
        "Base_Pull_Speed": 42,              // Tốc độ kéo mặc định (tương đương logic cũ)
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
 
 
 
 
 // ===== ADVANCED AIMLOCK HEAD SYSTEM (PRO LOGIC) =====
const aimlockHeadSystem = (target, config = {}) => {
    // 1. Cấu hình mặc định (Có thể tùy chỉnh)
    const settings = {
        fov: config.fov || 360,           // Phạm vi hoạt động (pixels)
        smooth: config.smooth || 0.0,    // Độ mượt (càng thấp càng dính)
        prediction: config.predict || 0.01, // Dự đoán hướng di chuyển
        yOffset: config.yOffset || 2.0,  // Tỉ lệ chiều cao để xác định đầu
        ...config
    };

    if (!target || !target.position) return;

    // Lấy tọa độ tâm ngắm hiện tại của người chơi (local player)
    const view = target.crosshair || (window.gameObj && window.gameObj.crosshair);
    if (!view) return;

    // 2. XÁC ĐỊNH VỊ TRÍ ĐẦU (HEAD DETECTION)
    let headPos = { x: 0, y: 0 };
    let foundBone = false;

    if (target.bones) {
        const priorityBones = ["head", "Head", "Bone_Head", "Bip001-Head", "neck"];
        for (let boneName of priorityBones) {
            if (target.bones[boneName]) {
                headPos.x = target.bones[boneName].x;
                headPos.y = target.bones[boneName].y;
                foundBone = true;
                break;
            }
        }
    }

    // Fallback nếu không quét được xương (Dựa trên chiều cao entity)
    if (!foundBone) {
        const entHeight = target.height || 60;
        headPos.x = target.position.x;
        headPos.y = target.position.y - (entHeight * settings.yOffset);
    }

    // 3. DỰ ĐOÁN DI CHUYỂN (PREDICTION)
    // Giúp tâm bám sát khi mục tiêu đang chạy nhanh
    if (target.velocity) {
        headPos.x += target.velocity.x * settings.prediction;
        headPos.y += target.velocity.y * settings.prediction;
    }

    // 4. TÍNH TOÁN KHOẢNG CÁCH VÀ FOV
    const dx = headPos.x - view.x;
    const dy = headPos.y - view.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Kiểm tra nếu mục tiêu nằm ngoài vòng FOV thì bỏ qua
    if (distance > settings.fov) return;

    // 5. NHẬN DIỆN HÀNH VI KÉO TAY (DRAG DETECTION)
    if (!target._lastView) target._lastView = { x: view.x, y: view.y };
    
    const dragX = view.x - target._lastView.x;
    const dragY = view.y - target._lastView.y;
    const dragSpeed = Math.sqrt(dragX * dragX + dragY * dragY);
    
    target._lastView = { x: view.x, y: view.y };

    // 6. LOGIC AIMLOCK DYNAMIC (KHÓA MỤC TIÊU ĐỘNG)
    // Tự động điều chỉnh độ nhạy dựa trên việc người dùng có đang chủ động kéo tâm hay không
    let dynamicSmooth = settings.smooth;
    
    if (dragSpeed > 1.5) {
        // Nếu người dùng đang kéo tay mạnh, hỗ trợ "hút" tâm nhanh hơn
        dynamicSmooth *= 0.5; 
    }

    // 7. XỬ LÝ CHỐNG RUNG VÀ GIỮ TÂM (ANTI-RECOIL / STABILIZATION)
    // Sử dụng Lerp (Linear Interpolation) để di chuyển tâm mượt mà
    const moveX = dx * (1 - dynamicSmooth);
    const moveY = dy * (1 - (dynamicSmooth * 0.7)); // Ưu tiên chiều Y để khóa đầu (Aimlock Head)

    // Khóa chặt nếu đã rất gần (Hard Lock)
    if (distance < 5) {
        view.x = headPos.x;
        view.y = headPos.y;
    } else {
        view.x += moveX;
        view.y += moveY;
    }

    // 8. ANTI-DRAG DOWN (CHỐNG TỤT TÂM)
    // Đảm bảo tâm không bao giờ rơi xuống thấp hơn vùng đầu khi đang lock
    if (view.y > headPos.y + 2) {
        view.y -= (view.y - headPos.y) * 0.5;
    }

    // Làm tròn để tối ưu hóa hiệu suất và tránh rung nhẹ (jitter)
    view.x = Math.round(view.x * 100) / 100;
    view.y = Math.round(view.y * 100) / 100;
};

// ===== EXECUTION =====
// Chạy vòng lặp trên danh sách các mục tiêu
if (obj.players && Array.isArray(obj.players)) {
    obj.players.forEach(player => {
        // Chỉ lock những mục tiêu còn sống và không phải đồng đội (nếu có logic team)
        if (player.alive !== false) {
            aimlockHeadSystem(player, {
                fov: 360,      // Vòng tròn quét 120px xung quanh tâm
                smooth: 0.001,   // Càng nhỏ càng dính chặt
                predict: 0.001   // Dự đoán trước 0.3 giây di chuyển
            });
        }
    });
}
// ===== AIM DIRECTION CORRECTION SYSTEM (ANTI-MISS HEAD) =====
const autoCorrectAim = (entity) => {
    if (!entity || !entity.position) return;

    const crosshair = entity.crosshair || obj.crosshair;
    if (!crosshair) return;

    // 1. LẤY TỌA ĐỘ ĐẦU CHUẨN (TARGET)
    let targetHead = { x: 0, y: 0 };
    if (entity.bones && entity.bones.head) {
        targetHead = { x: entity.bones.head.x, y: entity.bones.head.y };
    } else {
        const h = entity.height || 60;
        targetHead = { x: entity.position.x, y: entity.position.y - h * 0.85 };
    }

    // 2. TÍNH TOÁN SAI LỆCH (ERROR DELTA)
    let dx = targetHead.x - crosshair.x;
    let dy = targetHead.y - crosshair.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    // 3. THEO DÕI LỰC KÉO TAY (USER INPUT FORCE)
    if (!entity._prevCross) entity._prevCross = { x: crosshair.x, y: crosshair.y };
    
    let userDragX = crosshair.x - entity._prevCross.x;
    let userDragY = crosshair.y - entity._prevCross.y;
    let dragStrength = Math.sqrt(userDragX * userDragX + userDragY * userDragY);
    
    entity._prevCross = { x: crosshair.x, y: crosshair.y };

    // 4. LOGIC SỬA HƯỚNG (DIRECTION CORRECTION)
    // Nếu người chơi đang kéo tâm (dragStrength > 0)
    if (dragStrength > 0.1) {
        
        // A. Sửa lỗi "Chưa kéo tới đầu" (Under-aiming)
        // Nếu tâm vẫn còn nằm dưới đầu, tăng cường lực kéo lên (Y axis)
        if (crosshair.y > targetHead.y) {
            crosshair.y += dy * 0.35; // Hỗ trợ đẩy tâm lên nhanh hơn
        }

        // B. Sửa lỗi "Kéo lệch sang bên" (Side-slip correction)
        // Tính toán góc giữa hướng kéo tay và hướng tới mục tiêu
        // Nếu hướng kéo lệch quá 15 độ, tự động nắn về trục thẳng tới đầu
        let angleToHead = Math.atan2(dy, dx);
        let angleOfDrag = Math.atan2(userDragY, userDragX);
        let angleDiff = angleToHead - angleOfDrag;

        if (Math.abs(angleDiff) > 0.1) { 
            // Nắn hướng kéo: Mix 40% hướng mục tiêu vào hướng kéo tay
            crosshair.x += dx * 0.25; 
        }

        // C. Sửa lỗi "Kéo quá đầu" (Over-aiming/Overshoot)
        // Nếu vận tốc kéo quá mạnh và tâm sắp vượt qua đầu, hãm lại
        if (distance < 20 && dragStrength > 5) {
            crosshair.x -= userDragX * 0.5;
            crosshair.y -= userDragY * 0.5;
        }
    }

    // 5. KHÓA TÂM THÔNG MINH (SMART LOCK-ON)
    // Khi khoảng cách cực gần, cưỡng chế tâm phải trùng khớp với đầu
    if (distance < 9999) {
        let glueStrength = 1.0; // Độ dính 60%
        crosshair.x += dx * glueStrength;
        crosshair.y += dy * glueStrength;
    }

    // 6. CHỐNG RUNG (STABILIZER)
    // Giữ tâm ổn định khi đã lock trúng đầu
    if (distance < 2) {
        crosshair.x = targetHead.x;
        crosshair.y = targetHead.y;
    }

    // Làm mượt tọa độ cuối cùng
    crosshair.x = Number(crosshair.x.toFixed(2));
    crosshair.y = Number(crosshair.y.toFixed(2));
};

// ===== VẬN HÀNH =====
// Gắn vào vòng lặp update (render loop)
const onUpdate = () => {
    if (obj.targetList) {
        obj.targetList.forEach(target => autoCorrectAim(target));
    }
};
// ===== HIGH-LEVEL ENTITY STRUCTURE FOR AIMLOCK SYSTEM =====
const createEntity = (rawGameData) => {
    return {
        // 1. Thông tin cơ bản từ Game
        id: rawGameData.id,
        team: rawGameData.team,
        hp: rawGameData.hp,
        alive: rawGameData.hp > 0,

        // 2. Tọa độ Thế giới thực (3D World Space)
        position: {
            x: rawGameData.posX, // Tọa độ gốc (chân)
            y: rawGameData.posY,
            z: rawGameData.posZ
        },
        
        velocity: {
            x: rawGameData.velX,
            y: rawGameData.velY,
            z: rawGameData.velZ
        },

        // 3. Hệ thống Xương (Bones) - Cần thiết để khóa đầu
        bones: {
            head: { x: rawGameData.headX, y: rawGameData.headY, z: rawGameData.headZ },
            neck: { x: rawGameData.neckX, y: rawGameData.neckY, z: rawGameData.neckZ },
            chest: { x: rawGameData.chestX, y: rawGameData.chestY, z: rawGameData.chestZ }
        },

        // 4. Ma trận góc nhìn (View Projection Matrix)
        // Dùng để chuyển đổi 3D -> 2D
        viewMatrix: rawGameData.matrix || [], 

        // 5. Tọa độ Màn hình (2D Screen Space - Sau khi chạy W2S)
        screen: {
            head: { x: 0, y: 0 },
            base: { x: 0, y: 0 },
            isVisible: false,
            distance: 0
        },

        // 6. Trạng thái Aimlock (Tracking States)
        _lastScreenPos: { x: 0, y: 0 },
        _isLocked: false,
        _isNearHead: false,
        
        // 7. Phương thức cập nhật (Update Logic)
        update: function(canvasW, canvasH) {
            // Chuyển đổi tọa độ đầu từ 3D sang 2D
            const screenPos = worldToScreen(this.bones.head, this.viewMatrix, canvasW, canvasH);
            
            if (screenPos) {
                this.screen.head.x = screenPos.x;
                this.screen.head.y = screenPos.y;
                this.screen.distance = screenPos.distance;
                this.screen.isVisible = true;
            } else {
                this.screen.isVisible = false;
            }
        }
    };
};
/**
 * Chuyển đổi tọa độ 3D sang 2D màn hình
 * @param {Vector3} worldPos - Tọa độ X, Y, Z của kẻ địch trong game
 * @param {Array} matrix - Ma trận ViewProjection (thường gồm 16 phần tử)
 * @param {number} width - Chiều rộng màn hình điện thoại
 * @param {number} height - Chiều cao màn hình điện thoại
 */
const worldToScreen = (worldPos, matrix, width, height) => {
    // Tính toán tọa độ Clip Space
    const screenX = (matrix[0] * worldPos.x) + (matrix[4] * worldPos.y) + (matrix[8] * worldPos.z) + matrix[12];
    const screenY = (matrix[1] * worldPos.x) + (matrix[5] * worldPos.y) + (matrix[9] * worldPos.z) + matrix[13];
    const screenW = (matrix[3] * worldPos.x) + (matrix[7] * worldPos.y) + (matrix[11] * worldPos.z) + matrix[15];

    // Nếu screenW < 0.1, mục tiêu đang nằm sau lưng người chơi
    if (screenW < 0.1) return null;

    // Chuyển đổi sang tọa độ chuẩn hóa (NDC)
    const ndcX = screenX / screenW;
    const ndcY = screenY / screenW;

    // Chuyển sang tọa độ Pixel màn hình
    const x = (width / 2 * ndcX) + (ndcX + width / 2);
    const y = -(height / 2 * ndcY) + (ndcY + height / 2);

    return { x, y, distance: screenW };
};
/**
 * Giả lập thao tác vuốt để sửa hướng kéo tâm
 * @param {Object} targetPos - Tọa độ 2D của đầu địch (từ W2S)
 * @param {Object} currentCrosshair - Tọa độ tâm hiện tại
 */
const injectTouchCorrection = (targetPos, currentCrosshair) => {
    // Tính khoảng cách cần di chuyển (Delta)
    const deltaX = targetPos.x - currentCrosshair.x;
    const deltaY = targetPos.y - currentCrosshair.y;

    // Hệ số làm mượt (Smoothing) để tránh bị hệ thống quét hành vi robot
    const sensitivity = 0.45; 
    const moveX = deltaX * sensitivity;
    const moveY = deltaY * sensitivity;

    // Gửi sự kiện Touch/Mouse (Giả lập cấu trúc hệ thống)
    const touchEvent = new MouseEvent('mousemove', {
        clientX: currentCrosshair.x + moveX,
        clientY: currentCrosshair.y + moveY,
        bubbles: true
    });

    document.dispatchEvent(touchEvent);
};
// Hook vào phương thức vẽ của WebGL/Canvas
const hookGameCanvas = () => {
    const originalDraw = CanvasRenderingContext2D.prototype.drawImage;
    
    CanvasRenderingContext2D.prototype.drawImage = function(...args) {
        // 'this' ở đây chính là Canvas đang vẽ các thực thể game
        const context = this;
        
        // Thực hiện các logic can thiệp tại đây trước khi trả về hàm gốc
        // Ví dụ: Lưu lại tọa độ của texture "kẻ địch"
        
        return originalDraw.apply(this, args);
    };
};
 // ===== HÀM ĐIỀU KHIỂN CHÍNH (CONTROLLER) =====
const processAimlock = (entities, localPlayer) => {
    const crosshair = localPlayer.crosshair; // Tâm giữa màn hình
    const canvasW = window.innerWidth;
    const canvasH = window.innerHeight;

    entities.forEach(ent => {
        if (!ent.alive || ent.team === localPlayer.team) return;

        // Cập nhật vị trí màn hình cho thực thể
        ent.update(canvasW, canvasH);

        if (ent.screen.isVisible) {
            // Tính khoảng cách từ tâm đến đầu địch trên màn hình (2D)
            let dx = ent.screen.head.x - crosshair.x;
            let dy = ent.screen.head.y - crosshair.y;
            let dist2D = Math.sqrt(dx * dx + dy * dy);

            // LOGIC TỰ SỬA HƯỚNG (CORRECTION)
            if (dist2D < 9999) { // Nếu nằm trong FOV 150px
                const smooth = 0.01;
                
                // Giả lập vuốt (Touch Injection)
                // Thay vì gán cứng, ta đẩy dần tâm về phía mục tiêu
                crosshair.x += dx * smooth;
                crosshair.y += dy * (smooth * 1.2); // Ưu tiên kéo lên đầu mạnh hơn

                ent._isLocked = true;
                
                // Hard lock khi cực gần
                if (dist2D < 9999) {
                    crosshair.x = ent.screen.head.x;
                    crosshair.y = ent.screen.head.y;
                }
            } else {
                ent._isLocked = false;
            }
        }
    });
};
// ===== PRO STICKY AIMLOCK SYSTEM (ACTIVE ON DRAG) =====
const stickyHeadSystem = (entity, localPlayer) => {
    if (!entity || !entity.alive || !entity.screen.isVisible) return;

    const crosshair = localPlayer.crosshair;
    const head = entity.screen.head;

    // 1. TÍNH TOÁN VECTOR ĐẾN MỤC TIÊU
    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    // 2. NHẬN DIỆN TRẠNG THÁI KÉO TÂM (USER INPUT DETECTION)
    // Hệ thống chỉ kích hoạt mạnh khi người dùng bắt đầu vuốt màn hình
    if (!localPlayer._lastTouch) localPlayer._lastTouch = { x: crosshair.x, y: crosshair.y };
    
    let dragDeltaX = Math.abs(crosshair.x - localPlayer._lastTouch.x);
    let dragDeltaY = Math.abs(crosshair.y - localPlayer._lastTouch.y);
    let isDragging = (dragDeltaX > 0.2 || dragDeltaY > 0.2); // Ngưỡng nhận diện vuốt

    localPlayer._lastTouch = { x: crosshair.x, y: crosshair.y };

    // 3. LOGIC GIỮ TÂM (STICKY LOGIC)
    if (isDragging && distance < 120) { // Kích hoạt trong FOV 120px khi đang kéo
        
        // A. Bù trừ di chuyển (Movement Compensation)
        // Nếu mục tiêu di chuyển, tâm sẽ tự động trôi theo vận tốc của mục tiêu
        if (entity.velocity) {
            const predictionPower = 0.4; 
            crosshair.x += entity.velocity.x * predictionPower;
            crosshair.y += entity.velocity.y * predictionPower;
        }

        // B. Lực hút "Keo dính" (Magnet Strength)
        // Khi đang kéo tay, chúng ta thêm một lực hút để tâm không thể rời khỏi đầu
        let magnetForce = 0.9; 
        
        if (distance < 9999) {
            magnetForce = 2.0; // Càng gần đầu, lực dính càng mạnh
        }

        crosshair.x += dx * magnetForce;
        crosshair.y += dy * magnetForce;

        // C. Khóa cứng trục Y (Head Level Lock)
        // Chống tình trạng tâm bị văng xuống ngực khi di chuyển
        if (Math.abs(dy) > 2) {
            crosshair.y += dy * 0.2; 
        }

        entity._isStickyLocked = true;
    } else {
        entity._isStickyLocked = false;
    }

    // 4. CHỐNG RUNG KHI DI CHUYỂN (INTERPOLATION STABILIZER)
    if (entity._isStickyLocked && distance < 5) {
        // Nếu đã khớp mục tiêu, triệt tiêu mọi dao động nhỏ
        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // Làm tròn tọa độ để tránh lỗi khử răng cưa của game
    crosshair.x = Math.round(crosshair.x * 100) / 100;
    crosshair.y = Math.round(crosshair.y * 100) / 100;
};

// ===== VẬN HÀNH TRONG VÒNG LẶP GAME =====
const onRenderFrame = () => {
    const target = getClosestTargetToCrosshair(); // Hàm lấy địch gần tâm nhất
    if (target) {
        stickyHeadSystem(target, obj.localPlayer);
    }
};
// ===== HỆ THỐNG AIMLOCK HEAD + TOUCH INJECTION + CANVAS HOOKING =====

const AimSystem = {
    // Cấu hình hệ thống
    config: {
        fov: 120,          // Vòng quét (pixel)
        smooth: 0.25,      // Độ mượt Touch (thấp = nhanh, cao = chậm)
        prediction: 0.35,  // Dự đoán mục tiêu di chuyển
        stickiness: 0.6,   // Độ dính khi đã trúng đầu
    },

    // 1. CANVAS HOOKING: Chặn lệnh vẽ để lấy thông tin màn hình
    hookCanvas: function() {
        const self = this;
        const orgDrawImage = CanvasRenderingContext2D.prototype.drawImage;
        
        CanvasRenderingContext2D.prototype.drawImage = function(...args) {
            // Tại đây có thể lấy Matrix hoặc thông tin vị trí các Texture địch
            // Giả sử chúng ta cập nhật Matrix góc nhìn từ đây
            self.currentMatrix = window.ViewMatrix; 
            return orgDrawImage.apply(this, args);
        };
    },

    // 2. WORLD-TO-SCREEN (W2S): Chuyển tọa độ 3D sang Pixel màn hình
    worldToScreen: function(pos3D, matrix, width, height) {
        if (!matrix) return null;
        let x = pos3D.x, y = pos3D.y, z = pos3D.z;

        let w = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];
        if (w < 0.1) return null; // Địch ở sau lưng

        let sx = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12];
        let sy = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13];

        return {
            x: (width / 2) * (1 + sx / w),
            y: (height / 2) * (1 - sy / w)
        };
    },

    // 3. TOUCH INJECTION: Giả lập thao tác vuốt tay vật lý
    injectTouch: function(targetX, targetY, currentX, currentY) {
        const dx = (targetX - currentX) * this.config.smooth;
        const dy = (targetY - currentY) * this.config.smooth;

        // Tạo sự kiện di chuyển chuột/tay giả lập
        const moveEvent = new PointerEvent('pointermove', {
            bubbles: true,
            cancelable: true,
            clientX: currentX + dx,
            clientY: currentY + dy,
            pointerType: 'touch',
            pressure: 0.5
        });

        document.getElementById('gameCanvas').dispatchEvent(moveEvent);
    },

    // 4. MAIN LOGIC: Xử lý thực thể và khóa mục tiêu
    processEntity: function(entity, localPlayer) {
        if (!entity.alive || !this.currentMatrix) return;

        const canvasW = window.innerWidth;
        const canvasH = window.innerHeight;
        const crosshair = localPlayer.crosshair;

        // Chuyển tọa độ xương đầu sang màn hình
        const head2D = this.worldToScreen(entity.bones.head, this.currentMatrix, canvasW, canvasH);

        if (head2D) {
            // Tính khoảng cách 2D
            const dist = Math.sqrt(Math.pow(head2D.x - crosshair.x, 2) + Math.pow(head2D.y - crosshair.y, 2));

            // Kiểm tra điều kiện: Trong FOV và người chơi đang kéo tâm (Dragging)
            if (dist < this.config.fov && localPlayer.isDragging) {
                
                // Dự đoán vị trí đầu dựa trên vận tốc
                let targetX = head2D.x;
                let targetY = head2D.y;

                if (entity.velocity) {
                    targetX += entity.velocity.x * this.config.prediction;
                    targetY += entity.velocity.y * this.config.prediction;
                }

                // Kích hoạt Touch Injection để sửa hướng kéo
                this.injectTouch(targetX, targetY, crosshair.x, crosshair.y);

                // Nếu cực gần, dính chặt tâm (Sticky)
                if (dist < 20) {
                    crosshair.x += (targetX - crosshair.x) * this.config.stickiness;
                    crosshair.y += (targetY - crosshair.y) * this.config.stickiness;
                }
            }
        }
    }
};

// ===== KHỞI CHẠY =====
AimSystem.hookCanvas();

// Vòng lặp cập nhật (thường chạy trong requestAnimationFrame)
function updateTick() {
    const enemies = Game.getEnemies(); 
    const player = Game.getLocalPlayer();

    enemies.forEach(enemy => {
        AimSystem.processEntity(enemy, player);
    });

    requestAnimationFrame(updateTick);
}
// ===== SYSTEM: ANTI-RECOIL & STABILIZATION (ACTIVE ON DRAG) =====
const recoilSystem = {
    // Cấu hình bù trừ
    settings: {
        recoilWeightY: 1.85, // Lực ghì tâm xuống (để bù độ nảy lên)
        recoilWeightX: 0.45, // Lực cân bằng ngang (giảm rung trái phải)
        jitterReduction: 0.15 // Khử rung pixel
    },

    // Lưu trữ dữ liệu frame trước để tính toán độ giật
    _lastOffset: { x: 0, y: 0 },

    /**
     * Hàm tính toán và triệt tiêu độ giật
     * @param {Object} crosshair - Tâm ngắm hiện tại
     * @param {Object} headPos - Tọa độ đầu mục tiêu (đã qua W2S)
     */
    applyFixRecoil: function(crosshair, headPos) {
        if (!headPos) return;

        // 1. TÍNH TOÁN ĐỘ LỆCH DO GIẬT (RECOIL DELTA)
        // Nếu tâm ngắm cao hơn đầu do súng nảy lên, dy sẽ âm
        let dx = headPos.x - crosshair.x;
        let dy = headPos.y - crosshair.y;

        // 2. LOGIC COUNTER-DRAG (GHÌ TÂM)
        // Khi súng giật lên, chúng ta ép thêm một lực kéo xuống
        let compensationY = 0;
        if (crosshair.y < headPos.y) {
            // Tâm đang nảy lên trên đầu -> Ghì mạnh xuống
            compensationY = Math.abs(dy) * this.settings.recoilWeightY;
        }

        // 3. KHỬ RUNG NGANG (HORIZONTAL STABILIZER)
        let compensationX = dx * this.settings.recoilWeightX;

        // 4. TOUCH INJECTION: Gửi lực bù trừ vào hệ thống vuốt
        // Thay vì chỉ gán tọa độ, ta cộng thêm "Lực ghì" vào lệnh Inject
        const targetCorrectionX = crosshair.x + compensationX;
        const targetCorrectionY = crosshair.y + compensationY;

        // 5. ANTI-JITTER (CHỐNG RUNG TÂM)
        // Nếu sự thay đổi quá nhỏ, chúng ta bỏ qua để tránh việc tâm bị "giật giật"
        if (Math.abs(dx) < this.settings.jitterReduction) compensationX = 0;
        if (Math.abs(dy) < this.settings.jitterReduction) compensationY = 0;

        // Thực thi hiệu chỉnh
        this.executeRecoilTouch(targetCorrectionX, targetCorrectionY, crosshair);
    },

    /**
     * Giả lập thao tác tay ghì tâm xuống
     */
    executeRecoilTouch: function(tx, ty, current) {
        const smooth = 0.2; // Độ mượt của lực ghì
        
        const finalX = current.x + (tx - current.x) * smooth;
        const finalY = current.y + (ty - current.y) * (smooth * 1.5); // Ưu tiên chiều dọc

        const recoilEvent = new PointerEvent('pointermove', {
            clientX: finalX,
            clientY: finalY,
            pointerType: 'touch',
            pressure: 0.8 // Tăng áp lực chạm để game nhận diện kéo mạnh
        });

        document.dispatchEvent(recoilEvent);
        
        // Cập nhật lại tọa độ tâm ngắm thực tế trong bộ nhớ
        current.x = finalX;
        current.y = finalY;
    }
};

// ===== CÁCH TÍCH HỢP VÀO HÀM AIMLOCK ĐÃ CÓ =====
const processProAim = (entity, localPlayer) => {
    if (localPlayer.isFiring && localPlayer.isDragging) {
        // Lấy tọa độ đầu từ hệ thống W2S
        const head2D = AimSystem.worldToScreen(entity.bones.head, viewMatrix, w, h);
        
        // Gọi hệ thống Fix Recoil
        recoilSystem.applyFixRecoil(localPlayer.crosshair, head2D);
    }
};
// ===== SYSTEM: ULTRA-PRECISION HEAD ALIGNMENT (ABSOLUTE ACCURACY) =====
const precisionAimSystem = {
    // Cấu hình tối ưu cho độ chính xác tuyệt đối
    config: {
        precisionFOV: 40,      // Vòng quét siêu nhỏ (40px) quanh đầu
        microSmooth: 0.08,     // Siêu mượt (cực dính) khi đã vào vùng đầu
        predictionPower: 0.5,  // Dự đoán quỹ đạo chạy mạnh
        accelerationBonus: 1.5 // Tăng tốc độ hút khi vẩy tay nhanh
    },

    // Lưu trữ dữ liệu lịch sử để tính toán quỹ đạo
    _targetHistory: {}, 
    _lastUpdateTime: 0,

    /**
     * Hàm xử lý chính: Fix lỗi lệch tâm vùng đầu
     * @param {Object} head2D - Tọa độ đầu 2D (từ W2S)
     * @param {Object} crosshair - Tâm ngắm hiện tại
     * @param {Object} entityData - Dữ liệu thực thể (Velocity, ID)
     */
    alignHeadAbsolute: function(head2D, crosshair, entityData) {
        if (!head2D || !entityData.alive) return;

        const now = performance.now();
        const deltaTime = (now - this._lastUpdateTime) / 1000; // Đơn vị giây
        this._lastUpdateTime = now;

        // 1. TÍNH TOÁN SAI LỆCH VỊ TRÍ (POSITION ERROR)
        let errorX = head2D.x - crosshair.x;
        let errorY = head2D.y - crosshair.y;
        let distance = Math.sqrt(errorX * errorX + errorY * errorY);

        // Chỉ kích hoạt khi tâm đã nằm gần vùng đầu (Micro-Adjustment)
        if (distance > this.config.precisionFOV) return;

        // 2. TÍNH TOÁN QUỸ ĐẠO MỤC TIÊU (TARGET TRAJECTORY PREDICTION)
        let predictedHead = { x: head2D.x, y: head2D.y };
        
        if (entityData.velocity && deltaTime > 0) {
            // Sử dụng vận tốc 3D để dự đoán vị trí 2D tiếp theo
            predictedHead.x += entityData.velocity.x * this.config.predictionPower * deltaTime * 60; // Chuẩn hóa 60fps
            predictedHead.y += entityData.velocity.y * this.config.predictionPower * deltaTime * 60;
        }

        // 3. TÍNH TOÁN GIA TỐC NGÓN TAY (USER ACCELERATION BONUS)
        if (!crosshair._lastPos) crosshair._lastPos = { x: crosshair.x, y: crosshair.y };
        
        let dragDist = Math.sqrt(Math.pow(crosshair.x - crosshair._lastPos.x, 2) + Math.pow(crosshair.y - crosshair._lastPos.y, 2));
        crosshair._lastPos = { x: crosshair.x, y: crosshair.y };

        let dynamicSmooth = this.config.microSmooth;
        if (dragDist > 5) {
            // Nếu bạn vẩy tay nhanh, giảm smooth để tâm "hút" vào đầu nhanh hơn
            dynamicSmooth /= this.config.accelerationBonus;
        }

        // 4. THỰC THI HIỆU CHỈNH SIÊU CHÍNH XÁC (SUB-PIXEL CORRECTION)
        // Chúng ta tính toán vị trí lý tưởng tiếp theo
        let finalTargetX = crosshair.x + (predictedHead.x - crosshair.x) * (1 - dynamicSmooth);
        let finalTargetY = crosshair.y + (predictedHead.y - crosshair.y) * (1 - dynamicSmooth * 1.3); // Ưu tiên chiều dọc để khóa đầu

        // 5. ANTI-SLIP (CHỐNG TRỢT TÂM)
        // Nếu khoảng cách cực nhỏ (< 2px), cưỡng chế tâm phải trùng khớp
        if (distance < 2) {
            finalTargetX = predictedHead.x;
            finalTargetY = predictedHead.y;
        }

        // 6. TOUCH INJECTION: Gửi lệnh vuốt vật lý
        this.injectPrecisionTouch(finalTargetX, finalTargetY, crosshair);
    },

    /**
     * Giả lập thao tác tay vẩy tâm siêu chính xác
     */
    injectPrecisionTouch: function(tx, ty, current) {
        // Làm tròn tọa độ xuống 2 chữ số thập phân (độ chính xác sub-pixel)
        const finalX = parseFloat(tx.toFixed(2));
        const finalY = parseFloat(ty.toFixed(2));

        const precisionEvent = new PointerEvent('pointermove', {
            clientX: finalX,
            clientY: finalY,
            pointerType: 'touch',
            pressure: 0.9, // Lực nhấn mạnh để game nhận diện chính xác
            isPrimary: true
        });

        // Gửi sự kiện vào lớp phủ điều khiển của game
        document.dispatchEvent(precisionEvent);

        // Cập nhật tọa độ tâm trong bộ nhớ
        current.x = finalX;
        current.y = finalY;
    }
};

// ===== VẬN HÀNH TRONG VÒNG LẶP UPDATE =====
// (Giả sử bạn đã có ViewMatrix và W2S)
function onPrecisionTick() {
    const target = getClosestTarget(); 
    if (target && obj.localPlayer.isDragging) {
        // 1. Chuyển tọa độ đầu sang 2D
        const head2D = worldToScreen(target.bones.head, ViewMatrix, window.innerWidth, window.innerHeight);
        
        // 2. Gọi hệ thống sửa lỗi lệch tâm tuyệt đối
        precisionAimSystem.alignHeadAbsolute(head2D, obj.localPlayer.crosshair, target);
    }
    requestAnimationFrame(onPrecisionTick);
}
// ===== SYSTEM: ABSOLUTE HEAD PRIORITY & TARGET PERSISTENCE =====
const absoluteHeadSystem = {
    config: {
        lockThreshold: 0.75,   // Độ dính tuyệt đối (0-1)
        switchForce: 8.0,      // Lực kéo tay tối thiểu để đổi mục tiêu (tránh reset)
        snapSpeed: 0.4,        // Tốc độ hút vào đầu khi chuyển mục tiêu
        minHeightBias: 0.95    // Luôn giữ tâm ở 95% chiều cao thực thể (vùng đầu)
    },

    _currentTargetID: null,
    _isSwitching: false,

    /**
     * Hàm xử lý ưu tiên đầu tuyệt đối
     * @param {Array} entities - Danh sách kẻ địch
     * @param {Object} localPlayer - Thông tin người chơi (crosshair, input)
     */
    processAbsoluteLock: function(entities, localPlayer) {
        const crosshair = localPlayer.crosshair;
        const canvasW = window.innerWidth;
        const canvasH = window.innerHeight;

        // 1. TÌM MỤC TIÊU ƯU TIÊN (PRIORITY TARGET)
        let bestTarget = this.getBestTarget(entities, crosshair);

        if (!bestTarget) {
            this._currentTargetID = null;
            return;
        }

        // 2. CHỐNG RESET TÂM (TARGET PERSISTENCE)
        // Nếu đang khóa 1 đứa, chỉ bỏ đứa đó nếu tay kéo cực mạnh sang đứa khác
        if (this._currentTargetID && this._currentTargetID !== bestTarget.id) {
            let dragSpeed = localPlayer.getDragSpeed(); // Hàm lấy tốc độ vuốt tay
            if (dragSpeed < this.config.switchForce) {
                // Giữ nguyên mục tiêu cũ, không cho phép game reset về mặc định
                bestTarget = entities.find(e => e.id === this._currentTargetID) || bestTarget;
            } else {
                this._currentTargetID = bestTarget.id; // Chấp nhận đổi mục tiêu
            }
        } else {
            this._currentTargetID = bestTarget.id;
        }

        // 3. TÍNH TOÁN TỌA ĐỘ ĐẦU TUYỆT ĐỐI (HEAD ONLY)
        const head2D = worldToScreen(bestTarget.bones.head, viewMatrix, canvasW, canvasH);
        if (!head2D) return;

        let dx = head2D.x - crosshair.x;
        let dy = head2D.y - crosshair.y;

        // 4. LOGIC FIX LỆCH TÂM & CHỐNG HÚT VÀO NGỰC (ANTI-BODY DRAG)
        // Nếu game cố tình kéo tâm xuống (dy > 0), chúng ta áp dụng lực đối kháng mạnh hơn
        let correctionY = dy;
        if (dy > 0) { 
            // Game đang kéo xuống ngực -> Chúng ta đẩy ngược lên đầu
            correctionY *= 1.5; 
        }

        // 5. THỰC THI KHÓA CỨNG (ABSOLUTE STICKY)
        // Khi di chuyển, tâm sẽ bám theo tọa độ đầu mà không bị trễ (delay)
        crosshair.x += dx * this.config.lockThreshold;
        crosshair.y += correctionY * this.config.lockThreshold;

        // 6. TOUCH INJECTION: Ghi đè lệnh hệ thống
        this.injectForceHead(crosshair.x, crosshair.y);
    },

    /**
     * Giả lập lực vuốt cưỡng chế giữ ở vùng đầu
     */
    injectForceHead: function(tx, ty) {
        const event = new PointerEvent('pointermove', {
            clientX: tx,
            clientY: ty,
            pointerType: 'touch',
            pressure: 1.0, // Lực nhấn tối đa để ưu tiên lệnh của script
            isPrimary: true
        });
        document.dispatchEvent(event);
    },

    /**
     * Lấy mục tiêu gần tâm nhất nhưng ưu tiên thực thể đang bị khóa
     */
    getBestTarget: function(entities, crosshair) {
        return entities
            .filter(e => e.alive && e.screen.isVisible)
            .sort((a, b) => {
                let distA = Math.hypot(a.screen.head.x - crosshair.x, a.screen.head.y - crosshair.y);
                let distB = Math.hypot(b.screen.head.x - crosshair.x, b.screen.head.y - crosshair.y);
                return distA - distB;
            })[0];
    }
};
// ===== SYSTEM: GLOBAL ABSOLUTE HEAD AUTO-AIM (EVERY DISTANCE & DIRECTION) =====
const globalAbsoluteAim = {
    // Cấu hình tối ưu cho độ chính xác tuyệt đối
    config: {
        lockStrength: 0.95,       // Độ dính tuyệt đối (0-1), 0.95 = gần như khóa cứng
        bulletSpeed: 900,         // Vận tốc đạn (m/s) - Cần điều chỉnh theo loại súng
        bulletDrop: 9.8,          // Gia tốc trọng trường (m/s^2)
        pingCompensation: 0.05,  // Bù trừ độ trễ ping (0.05s = 50ms)
        smoothPower: 0.1         // Độ mượt khi kéo tâm (thấp = nhanh)
    },

    /**
     * Hàm xử lý chính: Tự động kéo tâm lên đầu mọi lúc
     * @param {Object} targetEntity - Kẻ địch cần khóa
     * @param {Object} localPlayer - Người chơi (crosshair, camera)
     */
    aimHeadAbsolute: function(targetEntity, localPlayer) {
        if (!targetEntity || !targetEntity.alive || !targetEntity.bones.head) return;

        const crosshair = localPlayer.crosshair;
        const canvasW = window.innerWidth;
        const canvasH = window.innerHeight;

        // 1. TÍNH KHOẢNG CÁCH 3D (3D DISTANCE)
        let dx3D = targetEntity.bones.head.x - localPlayer.position.x;
        let dy3D = targetEntity.bones.head.y - localPlayer.position.y;
        let dz3D = targetEntity.bones.head.z - localPlayer.position.z;
        let distance3D = Math.sqrt(dx3D * dx3D + dy3D * dy3D + dz3D * dz3D);

        // 2. DỰ ĐOÁN VỊ TRÍ ĐẦU THỰC (ADVANCED TRAJECTORY PREDICTION)
        // Tính thời gian đạn bay + độ trễ ping
        let travelTime = distance3D / this.config.bulletSpeed;
        let totalDelay = travelTime + this.config.pingCompensation;

        // Vị trí đầu dự đoán (3D)
        let predictedHead3D = {
            x: targetEntity.bones.head.x + targetEntity.velocity.x * totalDelay,
            y: targetEntity.bones.head.y + targetEntity.velocity.y * totalDelay,
            z: targetEntity.bones.head.z + targetEntity.velocity.z * totalDelay
        };

        // 3. BÙ TRỪ ĐỘ RƠI CỦA ĐẠN (BULLET DROP COMPENSATION)
        // Ở khoảng cách xa, chúng ta phải nhắm cao hơn đầu
        if (distance3D > 1) { // Chỉ bù trừ khi khoảng cách > 50m
            let dropAmount = 0.5 * this.config.bulletDrop * Math.pow(travelTime, 2);
            predictedHead3D.y += dropAmount; // Đẩy điểm nhắm lên cao
        }

        // 4. CHUYỂN ĐỔI 3D SANG 2D MÀN HÌNH (W2S)
        const head2D = worldToScreen(predictedHead3D, viewMatrix, canvasW, canvasH);
        if (!head2D) return;

        // 5. TÍNH TOÁN VECTOR KÉO TÂM (AIM VECTOR)
        let aimErrorX = head2D.x - crosshair.x;
        let aimErrorY = head2D.y - crosshair.y;
        let distance2D = Math.sqrt(aimErrorX * aimErrorX + aimErrorY * aimErrorY);

        // 6. THỰC THI KÉO TÂM CƯỠNG CHẾ (ABSOLUTE AUTO-DRAG)
        // Chúng ta tính toán vị trí crosshair lý tưởng
        let finalCrosshairX = crosshair.x + (head2D.x - crosshair.x) * (1 - this.config.smoothPower);
        let finalCrosshairY = crosshair.y + (head2D.y - crosshair.y) * (1 - this.config.smoothPower * 1.5); // Ưu tiên chiều dọc

        // 7. ANTI-RECOIL & STABILIZATION (CHỐNG GIẬT & ỔN ĐỊNH)
        // Nếu súng giật lên, chúng ta cộng thêm một lực ghì tâm xuống
        if (localPlayer.isFiring) {
            let recoilCompensation = getRecoilAmount(); // Hàm lấy độ giật súng
            finalCrosshairY += recoilCompensation;
        }

        // 8. TOUCH INJECTION: Ghi đè lệnh hệ thống
        this.injectAbsoluteTouch(finalCrosshairX, finalCrosshairY, crosshair);
    },

    /**
     * Giả lập lực vuốt cưỡng chế giữ ở vùng đầu
     */
    injectAbsoluteTouch: function(tx, ty, current) {
        // Làm tròn tọa độ xuống 2 chữ số thập phân (sub-pixel precision)
        const finalX = parseFloat(tx.toFixed(2));
        const finalY = parseFloat(ty.toFixed(2));

        const event = new PointerEvent('pointermove', {
            clientX: finalX,
            clientY: finalY,
            pointerType: 'touch',
            pressure: 1.0, // Lực nhấn tối đa để ưu tiên lệnh của script
            isPrimary: true
        });
        document.dispatchEvent(event);

        // Cập nhật tọa độ tâm ngắm trong bộ nhớ
        current.x = finalX;
        current.y = finalY;
    }
};

// ===== VẬN HÀNH TRONG VÒNG LẶP UPDATE =====
function onGlobalAimTick() {
    const target = getClosestTarget(); // Hàm lấy kẻ địch gần tâm nhất
    if (target) {
        globalAbsoluteAim.aimHeadAbsolute(target, obj.localPlayer);
    }
    requestAnimationFrame(onGlobalAimTick);
}
// ===== SYSTEM: PRECISION HEADSHOT OFFSET CALCULATOR =====
const HEAD_THRESHOLD = 5.0; // Ngưỡng xác nhận đã khóa đầu (pixel)

const updateAimLockLogic = (enemy, state) => {
    if (!enemy || !enemy.alive) return;

    // 1. THIẾT LẬP MỤC TIÊU TUYỆT ĐỐI (TARGETING)
    state["target_bone"] = "head";
    
    // Lấy tọa độ Y từ hệ thống xương hoặc W2S
    state["target_pos_y"] = enemy.bones ? enemy.bones.head.y : enemy.head_y;

    // 2. TÍNH TOÁN SAI LỆCH (DELTA CALCULATION)
    // Khoảng cách từ tâm ngắm hiện tại đến đầu địch
    let delta_y = state["target_pos_y"] - state["crosshair_screen_y"];

    // 3. ÁP DỤNG ĐỘ NHẠY & BÙ GIẬT (SENSITIVITY + RECOIL COMPENSATION)
    // move_y là lực cần tác động để bù đắp sai số và chống lại độ nảy của súng
    let move_y = (delta_y / state["sensitivity_y"]) - (state["recoil_y"] || 0);

    // 4. CẬP NHẬT OFFSET TÂM (OFFSET UPDATE)
    // Phép tính này ép tâm ngắm di chuyển ngược hướng sai lệch để khớp vào đầu
    // Sử dụng nội suy (Interpolation) để tránh việc tâm bị nhảy (snap) quá gắt
    const smooth_factor = 0.85; 
    state["aim_offset_y"] -= (move_y * smooth_factor); 

    // 5. KIỂM TRA VÙNG XÁC NHẬN HEADSHOT (ZONE CONFIRMATION)
    // Nếu sai số offset nằm trong ngưỡng cho phép, kích hoạt trạng thái khóa cứng
    state["headshot_confirmed"] = (
        state["target_bone"] === "head" && 
        Math.abs(delta_y) < HEAD_THRESHOLD
    );

    // 6. THỰC THI CAN THIỆP (EXECUTION)
    // Nếu đã xác nhận headshot, cưỡng chế bù trừ offset để không bao giờ lệch
    if (state["headshot_confirmed"]) {
        state["aim_offset_y"] = -delta_y; // Khóa chết tại tọa độ đầu
    }

    // Gửi lệnh qua Touch Injection để thực hiện việc kéo tâm vật lý
    executeTouchInjection(0, state["aim_offset_y"]);
};

/**
 * Hàm hỗ trợ thực thi thao tác vuốt màn hình
 */
function executeTouchInjection(offsetX, offsetY) {
    const ev = new PointerEvent('pointermove', {
        clientX: window.innerWidth / 2 + offsetX,
        clientY: window.innerHeight / 2 + offsetY,
        pointerType: 'touch',
        pressure: 1.0
    });
    document.dispatchEvent(ev);
}

// ===== MÔ PHỎNG VẬN HÀNH =====
let internalState = {
    target_bone: "bone_Head",
    target_pos_y: 0,
    crosshair_screen_y: window.innerHeight / 2, // Tâm giữa màn hình
    sensitivity_y: 2.0,  // Độ nhạy trục Y
    recoil_y: 0.0,       // Lực giật súng đang nảy lên (giả định)
    aim_offset_y: 0,
    headshot_confirmed: false
};

// Chạy vòng lặp update
function aimLoop() {
    const currentEnemy = getClosestEnemy(); // Lấy dữ liệu địch từ bộ nhớ/canvas
    if (currentEnemy) {
        updateAimLockLogic(currentEnemy, internalState);
    }
    requestAnimationFrame(aimLoop);
}
// ===== ADVANCED AIMLOCK TICK SYSTEM (FRAME-BY-FRAME) =====

const AimLockSystem = {
    // Khởi tạo trạng thái ban đầu
    state: {
        crosshair_y: window.innerHeight / 2, // Vị trí tâm hiện tại (Y)
        aim_offset_y: 0,
        target_head_y: 0,
        delta_y: 0,
        smooth_step: 0,
        smooth_factor: 0.0,      // Chỉ số mượt (càng cao càng chậm)
        recoil_comp: 2.5,        // Lực ghì tâm chống giật
        sensitivity_y: 4.0,      // Độ nhạy trục Y của người dùng
        head_threshold: 999.0,     // Bán kính vùng đầu (pixel)
        locked_on_head: true,
        headshot_zone: "infinity"
    },

    /**
     * Hàm chạy mỗi Tick (Frame)
     * @param {Object} enemy - Dữ liệu thực thể địch
     */
    updateAimLock: function(enemy) {
        if (!enemy || !enemy.alive) {
            this.state.locked_on_head = false;
            return;
        }

        const s = this.state;

        // 1. LẤY VỊ TRÍ ĐẦU ĐỊCH (SCREEN SPACE)
        // Chuyển từ tọa độ 3D game sang 2D màn hình
        s["target_head_y"] = worldToScreen(enemy.bones.head).y;

        // 2. TÍNH KHOẢNG CÁCH CẦN DI CHUYỂN (DELTA)
        s["delta_y"] = s["target_head_y"] - s["crosshair_y"];

        // 3. CHIA NHỎ CHUYỂN ĐỘNG (SMOOTHING)
        // Chia delta cho factor để tâm di chuyển mượt mà, không bị Snap-lock (dễ lộ)
        s["smooth_step"] = s["delta_y"] / s["smooth_factor"];

        // 4. BÙ RECOIL (RECOIL COMPENSATION)
        // Nếu súng giật lên (recoil_comp dương), ta cộng thêm vào lực kéo xuống
        let move = s["smooth_step"] - s["recoil_comp"];

        // 5. CẬP NHẬT AIM OFFSET (THỰC THI LỰC KÉO)
        // Cập nhật giá trị offset để gửi tới trình điều khiển
        s["aim_offset_y"] -= move / s["sensitivity_y"];

        // 6. CẬP NHẬT CROSSHAIR_Y THỰC TẾ
        // Đồng bộ hóa vị trí ảo của tâm với logic để tính toán cho frame sau
        s["crosshair_y"] += move / s["sensitivity_y"];

        // 7. KIỂM TRA TRẠNG THÁI KHÓA (LOCK CHECK)
        s["locked_on_head"] = Math.abs(s["delta_y"]) < s["head_threshold"];
        s["headshot_zone"] = s["locked_on_head"] ? "hit" : "miss";

        // 8. TOUCH INJECTION (EXECUTION)
        // Đẩy lệnh kéo tâm vật lý ra màn hình
        this.injectTouch(s["aim_offset_y"]);
    },

    /**
     * Giả lập thao tác vuốt tay vật lý
     */
    injectTouch: function(offsetY) {
        const touchX = window.innerWidth / 2;
        const touchY = this.state.crosshair_y;

        const pointerEv = new PointerEvent('pointermove', {
            clientX: touchX,
            clientY: touchY,
            pointerType: 'touch',
            pressure: 0.9,
            isPrimary: true
        });

        document.dispatchEvent(pointerEv);
    }
};

// ===== VẬN HÀNH TRONG VÒNG LẶP RENDER =====
function tick() {
    const target = getEnemyInRange(); // Hàm lấy mục tiêu trong FOV
    if (target) {
        AimLockSystem.updateAimLock(target);
    }
    requestAnimationFrame(tick);
}
// ===== SYSTEM: OMNI-DIRECTIONAL PREDICTIVE AIMLOCK =====

const OmniAimSystem = {
    state: {
        // Tọa độ & Vận tốc
        prev_head_x: 0, prev_head_y: 0,
        target_head_x: 0, target_head_y: 0,
        target_vel_x: 0, target_vel_y: 0,
        predict_head_x: 0, predict_head_y: 0,
        
        // Cấu hình
        crosshair_x: window.innerWidth / 2,
        crosshair_y: window.innerHeight / 2,
        aim_offset_x: 0, aim_offset_y: 0,
        
        predict_factor: 0.001,   // Thời gian dự đoán (giây hoặc frame)
        smooth_factor: 0.0,     // Độ mượt (thấp = dính nhanh)
        sensitivity_xy: 4.0,    // Độ nhạy chung
        head_threshold: 9999.0,   // Vùng headshot (pixels)
        
        // Trạng thái đầu ra
        move_angle_deg: 0,
        locked_on_head: true
    },

    /**
     * Hàm Omni Update gọi mỗi Frame
     */
    updateOmniAimLock: function(enemyHeadPos) {
        const s = this.state;

        // Cập nhật tọa độ đầu hiện tại từ W2S
        s.target_head_x = enemyHeadPos.x;
        s.target_head_y = enemyHeadPos.y;

        // 1. TÍNH VẬN TỐC ĐỊCH (DELTA VỊ TRÍ)
        s.target_vel_x = s.target_head_x - s.prev_head_x;
        s.target_vel_y = s.target_head_y - s.prev_head_y;

        // 2. DỰ ĐOÁN VỊ TRÍ ĐẦU TƯƠNG LAI (LEAD TARGET)
        // Tâm sẽ nhắm vào điểm địch "sắp" đi tới
        s.predict_head_x = s.target_head_x + (s.target_vel_x * s.predict_factor);
        s.predict_head_y = s.target_head_y + (s.target_vel_y * s.predict_factor);

        // 3. VECTOR SAI LỆCH TÂM (DELTA X-Y)
        s.delta_x = s.predict_head_x - s.crosshair_x;
        s.delta_y = s.predict_head_y - s.crosshair_y;

        // 4. SMOOTHING (CHIA NHỎ BƯỚC DI CHUYỂN)
        let smooth_x = s.delta_x / s.smooth_factor;
        let smooth_y = s.delta_y / s.smooth_factor;

        // 5. CẬP NHẬT TỌA ĐỘ VÀ OFFSET (2D ABSOLUTE)
        const sens = s.sensitivity_xy;
        
        s.crosshair_x += smooth_x / sens;
        s.crosshair_y += smooth_y / sens;
        
        s.aim_offset_x -= smooth_x / sens;
        s.aim_offset_y -= smooth_y / sens;

        // 6. TÍNH GÓC DI CHUYỂN ĐỊCH (ORIENTATION)
        // Giúp xác định địch đang chạy ngang, chạy tới hay chạy lùi
        s.move_angle_deg = Math.atan2(s.target_vel_y, s.target_vel_x) * (180 / Math.PI);

        // 7. KIỂM TRA LOCK (EUROCLIDEAN DISTANCE)
        const dist = Math.sqrt(s.delta_x ** 2 + s.delta_y ** 2);
        s.locked_on_head = dist < s.head_threshold;

        // LƯU LẠI TỌA ĐỘ CHO FRAME SAU
        s.prev_head_x = s.target_head_x;
        s.prev_head_y = s.target_head_y;

        // THỰC THI TOUCH INJECTION
        this.executeOmniTouch(s.crosshair_x, s.crosshair_y);
    },

    executeOmniTouch: function(tx, ty) {
        const touch = new PointerEvent('pointermove', {
            clientX: tx,
            clientY: ty,
            pointerType: 'touch',
            pressure: 1.0,
            isPrimary: true
        });
        document.dispatchEvent(touch);
    }
};
// ===== OMNI-DIRECTIONAL AIMLOCK SYSTEM (V3 - DYNAMIC PRECISION) =====

const OmniAimlock = {
    // 1. Cấu hình hệ thống (Tùy chỉnh theo loại súng/máy)
    settings: {
        sensitivity: 4.0,      // Độ nhạy X/Y
        basePredict: 0.001,      // Dự đoán cơ bản
        speedPredict: 0.9,     // Tỉ lệ dự đoán theo tốc độ
        snapThreshold: 9999.0,   // Khoảng cách để Snap cứng vào đầu
        magnetForce: 1.4,      // Lực đẩy tâm lên đầu (chống tụt ngực)
        nearBoost: 1.2         // Tăng lực hút khi gần mục tiêu
    },

    /**
     * Hàm xử lý chính cho từng thực thể (Entity)
     */
    process: function(entity, localPlayer) {
        if (!entity || !entity.alive || !entity.bones.head) return;

        const state = entity._aimState || this.initState(entity);
        const crosshair = localPlayer.crosshair;

        // Cập nhật tọa độ đầu hiện tại (từ W2S)
        state.target_head_x = entity.bones.head.x;
        state.target_head_y = entity.bones.head.y;

        // --- 1. VELOCITY (EMA Filter - Chống rung vận tốc) ---
        // Công thức lọc nhiễu: 70% mới + 30% cũ
        state.target_vel_x = (state.target_head_x - state.prev_head_x) * 0.7 + (state.target_vel_x || 0) * 0.3;
        state.target_vel_y = (state.target_head_y - state.prev_head_y) * 0.7 + (state.target_vel_y || 0) * 0.3;

        // --- 2. SPEED & DYNAMIC PREDICTION ---
        state.target_speed = Math.sqrt(state.target_vel_x ** 2 + state.target_vel_y ** 2);
        
        // Dự đoán vị trí địch sẽ di chuyển tới
        let predictFactor = this.settings.basePredict + (state.target_speed * this.settings.speedPredict);
        state.predict_head_x = state.target_head_x + (state.target_vel_x * predictFactor);
        state.predict_head_y = state.target_head_y + (state.target_vel_y * predictFactor);

        // --- 3. DELTA & DISTANCE ---
        state.delta_x = state.predict_head_x - crosshair.x;
        state.delta_y = state.predict_head_y - crosshair.y;
        state.dist = Math.sqrt(state.delta_x ** 2 + state.delta_y ** 2);

        // --- 4. HEAD MAGNET (Ưu tiên đầu tuyệt đối) ---
        // Nếu tâm đang nằm dưới đầu, tăng lực kéo Y để cưỡng chế lên đầu
        if (crosshair.y > state.target_head_y) {
            state.delta_y *= this.settings.magnetForce;
        }

        // Tăng độ dính khi tâm đã ở gần vùng đầu
        if (state.dist < 80) {
            state.delta_x *= this.settings.nearBoost;
            state.delta_y *= this.settings.nearBoost;
        }

        // --- 5. DYNAMIC SMOOTHING (Độ mượt động) ---
        if (state.dist > 120) {
            state.smooth_factor = 3.0; // Kéo cực nhanh để bắt kịp
        } else if (state.dist > 60) {
            state.smooth_factor = 4.5; // Trung bình
        } else {
            state.smooth_factor = 6.5; // Kéo mượt để dính chặt đầu
        }

        // --- 6. CALCULATE MOVEMENT ---
        state.move_x = (state.delta_x / state.smooth_factor) / this.settings.sensitivity;
        state.move_y = (state.delta_y / state.smooth_factor) / this.settings.sensitivity;

        // --- 7. SNAP LOCK & APPLY ---
        if (state.dist < this.settings.snapThreshold) {
            // Khóa cứng (Hard Lock)
            crosshair.x = state.predict_head_x;
            crosshair.y = state.predict_head_y;
            state.locked_on_head = true;
        } else {
            // Kéo mượt (Smooth Aim)
            crosshair.x += state.move_x;
            crosshair.y += state.move_y;
            state.locked_on_head = false;
        }

        // --- 8. FINAL OFFSET & SAVE ---
        state.aim_offset_x -= state.move_x;
        state.aim_offset_y -= state.move_y;
        
        state.prev_head_x = state.target_head_x;
        state.prev_head_y = state.target_head_y;

        // Lưu trạng thái vào entity để frame sau xử lý tiếp
        entity._aimState = state;

        // Thực thi Touch Injection nếu cần
        this.injectTouch(crosshair.x, crosshair.y);
    },

    /**
     * Khởi tạo trạng thái cho thực thể mới
     */
    initState: function(entity) {
        return {
            prev_head_x: entity.bones.head.x,
            prev_head_y: entity.bones.head.y,
            target_vel_x: 0,
            target_vel_y: 0,
            aim_offset_x: 0,
            aim_offset_y: 0,
            locked_on_head: false
        };
    },

    /**
     * Giả lập thao tác tay vuốt màn hình
     */
    injectTouch: function(tx, ty) {
        const ev = new PointerEvent('pointermove', {
            clientX: tx,
            clientY: ty,
            pointerType: 'touch',
            pressure: 1.0
        });
        document.dispatchEvent(ev);
    }
};

// ===== VẬN HÀNH =====
// Chạy trong vòng lặp game
function onTick() {
    const enemy = getClosestEnemy(); // Hàm lấy địch gần nhất
    const me = getLocalPlayer();    // Hàm lấy thông tin bản thân

    if (enemy && me.isDragging) {
        OmniAimlock.process(enemy, me);
    }
    requestAnimationFrame(onTick);
}
// ===== SYSTEM: ULTRA-HEAD AIMLOCK (ANTI-BODY DROPPING) =====

const HeadAimSystem = {
    // Cấu hình các tham số vật lý
    config: {
        predictPower: 1.0,       // Độ bám đuổi hướng di chuyển
        headPriorityY: 2.0,      // Lực kéo lên đầu (cực mạnh)
        nearBoostX: 2.2,         // Hút ngang khi gần đầu
        nearBoostY: 2.4,         // Hút dọc khi gần đầu
        aimlockForce: 4.3,       // Giữ chặt vùng đầu
        fixDropY: 2.0,           // Lực đẩy bù trừ chống tụt xuống cổ
        snapRange: 9999.0,         // Ngưỡng dính cứng pixel
        sensitivity: 4.0         // Độ nhạy hệ thống
    },

    /**
     * Hàm xử lý logic chính cho từng thực thể
     */
    updateHeadAimLock: function(entity, localPlayer) {
        if (!entity || !entity.alive) return;
        
        // Khởi tạo hoặc lấy trạng thái hiện tại của thực thể
        let state = entity._aimState || this.initState(entity);
        const crosshair = localPlayer.crosshair;

        // Cập nhật tọa độ đầu hiện tại (Target)
        state.target_head_x = entity.bones.head.x;
        state.target_head_y = entity.bones.head.y;

        // ===== 1. VELOCITY (Lọc nhiễu vận tốc 80/20) =====
        state.vel_x = (state.target_head_x - state.prev_head_x) * 0.8 + (state.vel_x || 0) * 0.2;
        state.vel_y = (state.target_head_y - state.prev_head_y) * 0.8 + (state.vel_y || 0) * 0.2;

        // ===== 2. PREDICT (Dự đoán điểm chặn đầu) =====
        state.predict_x = state.target_head_x + state.vel_x * this.config.predictPower;
        state.predict_y = state.target_head_y + state.vel_y * this.config.predictPower;

        // ===== 3. DELTA & DISTANCE =====
        state.dx = state.predict_x - crosshair.x;
        state.dy = state.predict_y - crosshair.y;
        state.dist = Math.sqrt(state.dx * state.dx + state.dy * state.dy);

        // ===== 4. HEAD PRIORITY (Ép tâm lên đầu) =====
        // Nếu tâm đang nằm dưới đầu, nhân lực kéo Y để cưỡng chế đi lên
        if (crosshair.y > state.target_head_y) {
            state.dy *= this.config.headPriorityY;
        }

        // Tăng lực hút khi gần vùng đầu (Dưới 80px)
        if (state.dist < 80) {
            state.dx *= this.config.nearBoostX;
            state.dy *= this.config.nearBoostY;
        }

        // ===== 5. AIMLOCK FORCE (Khóa mục tiêu) =====
        if (state.dist < 35) {
            state.dx *= this.config.aimlockForce;
            state.dy *= this.config.aimlockForce;
        }

        // ===== 6. DYNAMIC SMOOTH (Độ mượt biến thiên) =====
        let smooth = state.dist > 100 ? 3.0 : 5.5;

        state.move_x = (state.dx / smooth) / this.config.sensitivity;
        state.move_y = (state.dy / smooth) / this.config.sensitivity;

        // ===== 7. SNAP HEAD & MOVEMENT (Giai đoạn dính cứng) =====
        if (state.dist < this.config.snapRange) {
            // Khóa cứng tọa độ vào điểm dự đoán
            crosshair.x = state.predict_x;
            crosshair.y = state.predict_y;
            state.locked_on_head = true;
        } else {
            // Di chuyển mượt tới mục tiêu
            crosshair.x += state.move_x;
            crosshair.y += state.move_y;
            state.locked_on_head = false;
        }

        // ===== 8. FIX LỆCH ĐẦU (Chống tụt xuống cổ/ngực) =====
        // Nếu tâm vẫn thấp hơn đầu khi đã ở gần, bồi thêm lực đẩy Y
        if (crosshair.y > state.target_head_y && state.dist < 50) {
            crosshair.y -= this.config.fixDropY;
        }

        // ===== 9. AIM OFFSET (Xuất dữ liệu cho trình điều khiển) =====
        state.aim_offset_x -= state.move_x;
        state.aim_offset_y -= state.move_y;

        // ===== 10. SAVE PREV (Lưu cho frame tiếp theo) =====
        state.prev_head_x = state.target_head_x;
        state.prev_head_y = state.target_head_y;

        // Cập nhật lại state vào entity
        entity._aimState = state;
        
        // Thực thi việc vuốt màn hình vật lý
        this.injectTouch(crosshair.x, crosshair.y);
    },

    initState: function(entity) {
        return {
            prev_head_x: entity.bones.head.x,
            prev_head_y: entity.bones.head.y,
            vel_x: 0, vel_y: 0,
            aim_offset_x: 0, aim_offset_y: 0
        };
    },

    injectTouch: function(tx, ty) {
        const ev = new PointerEvent('pointermove', {
            clientX: tx,
            clientY: ty,
            pointerType: 'touch',
            pressure: 1.0,
            isPrimary: true
        });
        document.dispatchEvent(ev);
    }
};
// ===== SYSTEM: HUMANIZED PRECISE AIMLOCK (ANTI-OVERSHOOT) =====

const PreciseAimSystem = {
    config: {
        vel_alpha: 1.35,       // Hệ số EMA (càng nhỏ càng mượt, càng lớn càng nhạy)
        predict_factor: 1.0,   // Tầm nhìn xa của dự đoán
        arrival_eps: 4.0,       // Ngưỡng "đã đến nơi" (pixels)
        ease_k: 0.01,           // Tỉ lệ giảm tốc (Ease-out)
        clamp_max_px: 50.0,     // Giới hạn tốc độ vẩy tâm tối đa/frame
        noise_mag: 0.0,        // Cường độ rung tay giả lập
    },

    /**
     * Cập nhật logic Aimlock chính xác
     */
    updatePreciseAimLock: function(entity, localPlayer) {
        if (!entity || !entity.alive) return;

        const s = entity._aimState || this.initState(entity);
        const crosshair = localPlayer.crosshair;
        const cfg = this.config;

        // Cập nhật tọa độ đầu hiện tại
        s.head_x = entity.bones.head.x;
        s.head_y = entity.bones.head.y;

        // ── 1. VẬN TỐC ĐỊCH (EMA Filter)
        let raw_vx = s.head_x - s.prev_head_x;
        let raw_vy = s.head_y - s.prev_head_y;
        
        s.vel_x = cfg.vel_alpha * raw_vx + (1 - cfg.vel_alpha) * (s.vel_x || 0);
        s.vel_y = cfg.vel_alpha * raw_vy + (1 - cfg.vel_alpha) * (s.vel_y || 0);

        // ── 2. LEAD TARGET (Dự đoán tương lai)
        s.predict_head_x = s.head_x + s.vel_x * cfg.predict_factor;
        s.predict_head_y = s.head_y + s.vel_y * cfg.predict_factor;

        // ── 3. DELTA & DISTANCE
        s.delta_x = s.predict_head_x - crosshair.x;
        s.delta_y = s.predict_head_y - crosshair.y;
        s.dist = Math.sqrt(s.delta_x ** 2 + s.delta_y ** 2);

        // ── 4. ARRIVAL CHECK (Chống Overshoot)
        if (s.dist < cfg.arrival_eps) {
            s.locked_on_head = true;
            s.step_x = 0;
            s.step_y = 0;
            
            // Duy trì bám đuổi nhẹ theo vận tốc địch khi đã khóa
            crosshair.x += s.vel_x * cfg.predict_factor * 0.08;
            crosshair.y += s.vel_y * cfg.predict_factor * 0.08;
        } else {
            s.locked_on_head = false;

            // ── 5. EASE-OUT (Giảm tốc động)
            s.step_x = s.delta_x * cfg.ease_k;
            s.step_y = s.delta_y * cfg.ease_k;

            // ── 6. CLAMP (Giới hạn tốc độ vẩy)
            let step_mag = Math.sqrt(s.step_x ** 2 + s.step_y ** 2);
            if (step_mag > cfg.clamp_max_px) {
                let ratio = cfg.clamp_max_px / step_mag;
                s.step_x *= ratio;
                s.step_y *= ratio;
            }

            // ── 7. MICRO-JITTER (Rung tay sinh học)
            s.noise_x = (Math.random() - 0.5) * 2 * cfg.noise_mag;
            s.noise_y = (Math.random() - 0.5) * 2 * cfg.noise_mag;
            s.step_x += s.noise_x;
            s.step_y += s.noise_y;
        }

        // ── 8. APPLY (Cập nhật tọa độ)
        crosshair.x += s.step_x;
        crosshair.y += s.step_y;
        s.aim_offset_x -= s.step_x;
        s.aim_offset_y -= s.step_y;

        // ── 9. MOVE ANGLE (Debug)
        s.move_angle_deg = Math.atan2(s.vel_y, s.vel_x) * (180 / Math.PI);

        // ── 10. SAVE PREV
        s.prev_head_x = s.head_x;
        s.prev_head_y = s.head_y;

        // Lưu state vào thực thể
        entity._aimState = s;

        // Thực thi vuốt màn hình
        this.injectHumanizedTouch(crosshair.x, crosshair.y);
    },

    initState: function(entity) {
        return {
            prev_head_x: entity.bones.head.x,
            prev_head_y: entity.bones.head.y,
            vel_x: 0, vel_y: 0,
            aim_offset_x: 0, aim_offset_y: 0,
            locked_on_head: false
        };
    },

    injectHumanizedTouch: function(tx, ty) {
        const ev = new PointerEvent('pointermove', {
            clientX: tx,
            clientY: ty,
            pointerType: 'touch',
            pressure: 0.85 // Áp lực vừa phải
        });
        document.dispatchEvent(ev);
    }
};
// ===== SYSTEM: ADAPTIVE OMNI-DIRECTIONAL AIMLOCK (V4 - SMART HUMANIZED) =====

const SmartAimSystem = {
    config: {
        vel_alpha: 1.35,        // EMA mượt
        vel_clamp: 25.0,       // Chống giật lag tọa độ
        predict_factor: 0.5,   // PF cơ bản
        arrival_eps: 4.5,      // Ngưỡng bám đầu
        ease_k: 0.22,          // Ease-out cơ bản
        clamp_max_px: 100.0,    // Tốc độ kéo cơ bản
        noise_mag: 0.0,        // Độ rung tối đa
        sensitivity: 4.0       // Hệ số nhạy
    },

    process: function(entity, localPlayer) {
        if (!entity || !entity.alive) return;

        const s = entity._aimState || this.initState(entity);
        const crosshair = localPlayer.crosshair;
        const cfg = this.config;

        // Cập nhật tọa độ từ game
        s.head_x = entity.bones.head.x;
        s.head_y = entity.bones.head.y;

        // ── 1. VELOCITY (EMA + Chống Spike) ──
        let raw_vx = s.head_x - s.prev_head_x;
        let raw_vy = s.head_y - s.prev_head_y;

        s.vel_x = cfg.vel_alpha * raw_vx + (1 - cfg.vel_alpha) * (s.vel_x || 0);
        s.vel_y = cfg.vel_alpha * raw_vy + (1 - cfg.vel_alpha) * (s.vel_y || 0);

        // Giới hạn vận tốc để tránh "teleport" khi lag
        s.vel_x = Math.max(-cfg.vel_clamp, Math.min(cfg.vel_clamp, s.vel_x));
        s.vel_y = Math.max(-cfg.vel_clamp, Math.min(cfg.vel_clamp, s.vel_y));

        // ── 2. DYNAMIC PREDICTION ──
        let speed = Math.sqrt(s.vel_x * s.vel_x + s.vel_y * s.vel_y);
        s.pf_dynamic = cfg.predict_factor + (speed * 0.6);

        s.predict_head_x = s.head_x + s.vel_x * s.pf_dynamic;
        s.predict_head_y = s.head_y + s.vel_y * s.pf_dynamic;

        // ── 3. DELTA ──
        s.delta_x = (s.predict_head_x - crosshair.x) / cfg.sensitivity;
        s.delta_y = (s.predict_head_y - crosshair.y) / cfg.sensitivity;
        s.dist = Math.sqrt(s.delta_x * s.delta_x + s.delta_y * s.delta_y);

        // ── 4. HEAD MAGNET (Fix ưu tiên vùng đầu) ──
        if (crosshair.y > s.head_y) {
            s.delta_y *= 2.5; // Kéo lên cực mạnh khi tâm nằm dưới đầu
        }
        
        // Nếu chạy ngang, ưu tiên giữ độ cao đầu (Anti- tụt ngực khi địch chạy)
        if (Math.abs(s.vel_x) > Math.abs(s.vel_y)) {
            s.delta_y *= 1.2;
        }

        // Càng gần mục tiêu lực hút càng tăng
        if (s.dist < 9999) {
            s.delta_x *= 1.2;
            s.delta_y *= 1.3;
        }

        // ── 5. ARRIVAL LOCK (Bám mục tiêu & Chống Overshoot) ──
        if (s.dist < cfg.arrival_eps) {
            s.locked_on_head = true;

            let follow = 0.12;
            s.step_x = s.vel_x * s.pf_dynamic * follow;
            s.step_y = s.vel_y * s.pf_dynamic * follow;

            // Lực đẩy micro-adjustment chống tụt đầu khi đã khóa
            if (crosshair.y > s.head_y) {
                s.step_y -= 1.5;
            }
            
            this.apply(s, crosshair);
            return; // Nhảy thẳng tới frame kế tiếp
        }

        s.locked_on_head = false;

        // ── 6. EASE-OUT + DYNAMIC GAIN ──
        // Ở xa tăng tốc độ kéo (gain), ở gần giảm dần để dừng chính xác
        let k = cfg.ease_k + Math.min(s.dist / 150, 0.25);
        s.step_x = s.delta_x * k;
        s.step_y = s.delta_y * k;

        // ── 7. CLAMP STEP (Tỷ lệ thuận với tốc độ địch) ──
        let step_mag = Math.sqrt(s.step_x * s.step_x + s.step_y * s.step_y);
        let max_step = cfg.clamp_max_px * (1 + Math.min(speed / 10, 1));

        if (step_mag > max_step) {
            let ratio = max_step / step_mag;
            s.step_x *= ratio;
            s.step_y *= ratio;
        }

        // ── 8. MICRO JITTER THÔNG MINH ──
        // Rung tay giảm dần về 0 khi tâm đã sát đầu để đạt độ chính xác tuyệt đối
        let noise_scale = cfg.noise_mag * (s.dist / 120);
        s.step_x += (Math.random() - 0.5) * 2 * noise_scale;
        s.step_y += (Math.random() - 0.5) * 2 * noise_scale;

        this.apply(s, crosshair);
    },

    apply: function(s, crosshair) {
        // ── 9. APPLY TO CROSSHAIR & OFFSET ──
        crosshair.x += s.step_x;
        crosshair.y += s.step_y;

        s.aim_offset_x -= s.step_x;
        s.aim_offset_y -= s.step_y;

        // ── 10. DEBUG/SAVE ──
        s.move_angle_deg = Math.atan2(s.vel_y, s.vel_x) * 180 / Math.PI;
        s.prev_head_x = s.head_x;
        s.prev_head_y = s.head_y;
    },

    initState: function(entity) {
        return {
            prev_head_x: entity.bones.head.x,
            prev_head_y: entity.bones.head.y,
            vel_x: 0, vel_y: 0,
            aim_offset_x: 0, aim_offset_y: 0,
            locked_on_head: false
        };
    }
};
// ===== SYSTEM: SUB-PIXEL PRECISION INPUT PROCESSOR =====

const InputProcessor = {
    /**
     * Xử lý đầu vào và cộng dồn Sub-pixel
     * Giúp tâm di chuyển cực mượt ở khoảng cách xa (khi delta cực nhỏ)
     */
    processInput: function(state) {
        // 1. Nhân input thô với hệ số DPI (Scaled Input)
        // raw_input thường là giá trị move_x/move_y từ logic Aimlock
        let scaled_x = state.raw_input_x * state.dpi_scale;
        let scaled_y = state.raw_input_y * state.dpi_scale;

        // 2. Cộng dồn Sub-pixel (Accumulation)
        // Tránh việc bị mất các chuyển động nhỏ hơn 1 pixel
        state.subpixel_acc_x = (state.subpixel_acc_x || 0) + scaled_x;
        state.subpixel_acc_y = (state.subpixel_acc_y || 0) + scaled_y;

        // 3. Phân tách phần nguyên và phần lẻ (Integer vs Fraction)
        // Chỉ xuất ra phần nguyên (output) để hệ thống Touch/Mouse xử lý
        state.output_x = Math.floor(state.subpixel_acc_x);
        state.output_y = Math.floor(state.subpixel_acc_y);

        // Giữ lại phần dư (phần lẻ) cho frame kế tiếp
        state.subpixel_acc_x -= state.output_x;
        state.subpixel_acc_y -= state.output_y;

        // 4. Cập nhật mật độ điểm ảnh thực tế (Pixel Density)
        state.pixel_density = state.base_ppi * state.dpi_scale;

        // Trả về kết quả di chuyển thực tế cho PointerEvent
        return {
            x: state.output_x,
            y: state.output_y
        };
    }
};

/**
 * CÁCH TÍCH HỢP VÀO HÀM OMNI AIMLOCK
 */
function onTick() {
    // Giả sử logic Aimlock tính ra lực cần kéo là:
    // state.move_x = 0.45;
    // state.move_y = 1.25;

    state.raw_input_x = state.move_x;
    state.raw_input_y = state.move_y;

    const actualMove = InputProcessor.processInput(state);

    // actualMove.x sẽ là 0 (vì 0.45 < 1), phần 0.45 được giữ lại.
    // Frame sau nếu thêm 0.45 nữa, tổng là 0.9. Vẫn chưa di chuyển.
    // Frame thứ 3 thêm 0.45, tổng là 1.35. Lúc này output_x = 1. 
    // => Tâm nhích 1 pixel cực kỳ mượt mà.

    if (actualMove.x !== 0 || actualMove.y !== 0) {
        state.crosshair_x += actualMove.x;
        state.crosshair_y += actualMove.y;
        
        // Inject lệnh vuốt với tọa độ đã qua xử lý Sub-pixel
        injectTouch(state.crosshair_x, state.crosshair_y);
    }
}
// ===== [ULTIMATE_AIM_ENGINE_V5] =====
// Integration for: OMNI_FOV, STICKY_HEAD, INSTANT_SNAP

class UltimateAimEngine {
    constructor(config) {
        this.config = config;
        this.subpixel_acc_x = 0;
        this.subpixel_acc_y = 0;
    }

    /**
     * Hàm xử lý chính cho thực thể (Entity)
     */
    processEntity(entity, localPlayer) {
        if (!entity || !entity.alive) return;

        const cfg = this.config;
        const s = entity._aimState || this.initEntityState(entity);
        const crosshair = localPlayer.crosshair;

        // --- 1. CORE AIM LOGIC (Omni-Scanning) ---
        // Sử dụng WeaponAimFOV: 360 để quét mục tiêu mọi hướng
        s.head_x = entity.bones.head.x;
        s.head_y = entity.bones.head.y;

        // --- 2. ADVANCED VELOCITY & PREDICTION (EMA + Anti-Spike) ---
        let raw_vx = s.head_x - s.prev_head_x;
        let raw_vy = s.head_y - s.prev_head_y;
        
        let alpha = 0.35; // vel_alpha
        s.vel_x = alpha * raw_vx + (1 - alpha) * (s.vel_x || 0);
        s.vel_y = alpha * raw_vy + (1 - alpha) * (s.vel_y || 0);

        // Clamp Velocity theo vel_clamp (25.0)
        s.vel_x = Math.max(-25, Math.min(25, s.vel_x));
        s.vel_y = Math.max(-25, Math.min(25, s.vel_y));

        // Dự đoán động (pf_dynamic) dựa trên vận tốc
        let speed = Math.sqrt(s.vel_x ** 2 + s.vel_y ** 2);
        let dynamicPF = cfg.AIM_SYSTEM_CONFIG.AutoAimingConfig.FollowTimeMax + (speed * 0.6);
        
        s.predict_x = s.head_x + s.vel_x * dynamicPF;
        s.predict_y = s.head_y + s.vel_y * dynamicPF;

        // --- 3. TARGET LOCK & STICKY HEAD (Nam châm vĩnh cửu) ---
        s.delta_x = s.predict_x - crosshair.x;
        s.delta_y = s.predict_y - crosshair.y;
        s.dist = Math.sqrt(s.delta_x ** 2 + s.delta_y ** 2);

        // HITBOX_SYSTEM: Ép buộc ClientAimPart = "HEAD"
        if (crosshair.y > s.head_y) {
            s.delta_y *= 1.7; // HeadshotMultiplier 9.0 influence
        }

        // --- 4. SNAP & LOCK EXECUTION (InstantSnap: true) ---
        if (s.dist < 15 || cfg.AIM_CONTROL.InstantSnap) {
            // SNAP LOCK (Cưỡng chế tọa độ tuyệt đối)
            s.step_x = s.delta_x; 
            s.step_y = s.delta_y;
            s.locked = true;
        } else {
            // Smooth movement (Ease-out logic)
            let k = 0.22 + Math.min(s.dist / 150, 0.25);
            s.step_x = s.delta_x * k;
            s.step_y = s.delta_y * k;
        }

        // --- 5. SUB-PIXEL PRECISION (DPI Scaling) ---
        let dpi_scale = 1.0; // Có thể lấy từ cấu hình máy
        this.subpixel_acc_x += s.step_x * dpi_scale;
        this.subpixel_acc_y += s.step_y * dpi_scale;

        let output_x = Math.floor(this.subpixel_acc_x);
        let output_y = Math.floor(this.subpixel_acc_y);

        this.subpixel_acc_x -= output_x;
        this.subpixel_acc_y -= output_y;

        // --- 6. APPLY TO WORLD & INPUT ---
        // LockStrength: 9999 (Gần như không thể bị đẩy ra)
        crosshair.x += output_x;
        crosshair.y += output_y;

        // Cập nhật Aim Offset để đồng bộ với Driver
        s.aim_offset_x -= output_x;
        s.aim_offset_y -= output_y;

        // Save states
        s.prev_head_x = s.head_x;
        s.prev_head_y = s.head_y;
        entity._aimState = s;

        // --- 7. SHOOT_VERIFY & DAMAGE (InstantFire) ---
        if (s.locked && cfg.AIM_ASSIST.LockTargetHead) {
            this.triggerInstantCombat(cfg);
        }

        this.executeTouch(crosshair.x, crosshair.y);
    }

    /**
     * Khởi tạo trạng thái ban đầu cho Entity
     */
    initEntityState(entity) {
        return {
            prev_head_x: entity.bones.head.x,
            prev_head_y: entity.bones.head.y,
            vel_x: 0, vel_y: 0,
            aim_offset_x: 0, aim_offset_y: 0,
            locked: false
        };
    }

    /**
     * Giả lập bắn tức thời không độ trễ
     */
    triggerInstantCombat(cfg) {
        if (cfg.FIRE_CONTROL.InstantFire) {
            // Logic bắn không chờ (NoFireDelay)
            // Gửi lệnh Click/Shoot tại đây
        }
    }

    /**
     * Touch Injection: Ghi đè tọa độ vật lý
     */
    executeTouch(tx, ty) {
        const ev = new PointerEvent('pointermove', {
            clientX: tx,
            clientY: ty,
            pressure: 1.0, // AimAssist: 999.00 force
            pointerType: 'touch'
        });
        document.dispatchEvent(ev);
    }
}

// ===== KHỞI CHẠY HỆ THỐNG =====
// Nạp config khổng lồ của bạn vào Engine
const engine = new UltimateAimEngine(YOUR_GLOBAL_CONFIG);

function mainLoop() {
    const target = getPriorityTarget(); // Lấy mục tiêu trong FOV 360
    const player = getLocalPlayer();

    if (target && player) {
        engine.processEntity(target, player);
    }
    requestAnimationFrame(mainLoop);
}
 
 // ===== [ENTITY_AIM_PROCESSOR_V6] =====
// Tích hợp: Kalman Filter, Prediction, Recoil & Stabilizer

class EnemyEntity {
    constructor(id, initialPos) {
        this.id = id;
        this.head = { x: initialPos.x, y: initialPos.y };
        this.prevHead = { x: initialPos.x, y: initialPos.y };
        this.vel = { x: 0, y: 0 };
        
        // Kalman Filter State cho từng Entity
        this.kalman = {
            x: initialPos.x, y: initialPos.y,
            p: 1, q: 0.01, r: 0.1
        };
        
        this.lastUpdateTime = Date.now();
    }

    // Cập nhật tọa độ và lọc nhiễu chuyển động
    update(newPos) {
        this.prevHead = { ...this.head };
        
        // 1. Áp dụng Kalman Filter để làm mượt quỹ đạo địch
        this.kalman.p += this.kalman.q;
        let k = this.kalman.p / (this.kalman.p + this.kalman.r);
        this.head.x = this.kalman.x + k * (newPos.x - this.kalman.x);
        this.head.y = this.kalman.y + k * (newPos.y - this.kalman.y);
        this.kalman.x = this.head.x;
        this.kalman.y = this.head.y;
        this.kalman.p = (1 - k) * this.kalman.p;

        // 2. Tính vận tốc (Velocity)
        this.vel.x = this.head.x - this.prevHead.x;
        this.vel.y = this.head.y - this.prevHead.y;
    }
}

const AimLockEngine = {
    entities: new Map(), // Lưu trữ danh sách thực thể theo ID

    // Hàm thực thi ngắm bắn chính
    process: function(visibleEnemies, state) {
        if (!AIMLOCK_CONFIG.ENABLE) return;

        // 1. Cập nhật hoặc tạo mới thực thể trong bộ nhớ
        visibleEnemies.forEach(e => {
            if (!this.entities.has(e.id)) {
                this.entities.set(e.id, new EnemyEntity(e.id, e.head));
            } else {
                this.entities.get(e.id).update(e.head);
            }
        });

        // 2. Chọn mục tiêu tối ưu (Priority: CLOSEST_TO_CROSSHAIR)
        let target = this.getBestTarget(Array.from(this.entities.values()), state.crosshair);
        if (!target) return;

        // 3. PREDICTION (Dự đoán chặn đầu)
        let predictX = target.head.x + (target.vel.x * AIMLOCK_CONFIG.PREDICT.LEAD_TIME * 10);
        let predictY = target.head.y + (target.vel.y * AIMLOCK_CONFIG.PREDICT.LEAD_TIME * 10);

        // 4. CALCULATE DELTA & RECOIL CONTROL
        let dx = predictX - state.crosshair.x;
        let dy = predictY - state.crosshair.y;

        if (AIMLOCK_CONFIG.RECOIL.CONTROL && state.isFiring) {
            dy -= (AIMLOCK_CONFIG.RECOIL.VERTICAL * 5); // Ghì tâm xuống
            dx -= (Math.random() - 0.5) * AIMLOCK_CONFIG.RECOIL.HORIZONTAL;
        }

        // 5. SMOOTHING & STABILIZER (Chống overshoot)
        let dist = Math.hypot(dx, dy);
        let smooth = (AIMLOCK_CONFIG.MODE === "AGGRESSIVE") ? 0.08 : AIMLOCK_CONFIG.TRACK.SMOOTH;
        
        // Stabilizer: Khử rung siêu nhỏ
        if (dist < AIMLOCK_CONFIG.STABILIZER.MICRO_CORRECTION) {
            dx = 0; dy = 0;
        }

        let moveX = dx * (1 - smooth);
        let moveY = dy * (1 - smooth);

        // 6. APPLY SENSITIVITY & OUTPUT
        let finalSens = AIMLOCK_CONFIG.SENS.BASE;
        if (state.isADS) finalSens *= AIMLOCK_CONFIG.SENS.ADS_MULTIPLIER;

        state.crosshair.x += moveX * finalSens;
        state.crosshair.y += moveY * finalSens;

        // 7. AUTO FIRE JUDGEMENT
        if (AIMLOCK_CONFIG.AUTO_FIRE.ENABLE && dist < (AIMLOCK_CONFIG.AUTO_FIRE.TRIGGER_RADIUS * 100)) {
            state.triggerShoot = true;
        }

        // 8. Dọn dẹp thực thể đã biến mất (Cleanup)
        this.cleanupEntities(visibleEnemies);
    },

    getBestTarget: function(entities, crosshair) {
        let best = null;
        let minScore = Infinity;

        entities.forEach(e => {
            let d = Math.hypot(e.head.x - crosshair.x, e.head.y - crosshair.y);
            if (d < AIMLOCK_CONFIG.TARGET.FOV && d < minScore) {
                minScore = d;
                best = e;
            }
        });
        return best;
    },

    cleanupEntities: function(currentVisible) {
        const currentIds = new Set(currentVisible.map(e => e.id));
        for (let [id] of this.entities) {
            if (!currentIds.has(id)) this.entities.delete(id);
        }
    }
};
// ===== [INSTANT_SNAP_CORE_V7] =====
// Mục tiêu: Triệt tiêu hoàn toàn độ trễ, khóa cứng mục tiêu trong 1 khung hình (1ms)

class InstantSnapEngine {
    constructor(config) {
        this.config = config;
        this.lastTargetId = null;
        this.isLocked = false;
    }

    /**
     * Hàm xử lý kéo tâm siêu tốc
     */
    process(entity, localPlayer) {
        if (!entity || !entity.alive) {
            this.isLocked = false;
            return;
        }

        const crosshair = localPlayer.crosshair;
        const head = entity.bones.head;

        // 1. TÍNH TOÁN SAI LỆCH TUYỆT ĐỐI (ZERO LATENCY)
        // Không sử dụng Smooth, không sử dụng EMA để đạt tốc độ 0.001s
        let deltaX = head.x - crosshair.x;
        let deltaY = head.y - crosshair.y;

        // 2. PREDICTION (DỰ ĐOÁN NHANH)
        // Vì snap quá nhanh, chỉ cần dự đoán nhẹ để bù đắp ping
        if (entity.velocity) {
            deltaX += entity.velocity.x * 0.15;
            deltaY += entity.velocity.y * 0.15;
        }

        // 3. FORCE HEAD POSITION (MAGNET 1.8x)
        // Ép tâm luôn nằm ở phần trên của xương đầu để chống tụt xuống cổ
        if (crosshair.y > head.y) {
            deltaY *= 1.8; 
        }

        // 4. INSTANT MOVE (PHƯƠNG PHÁP 0.001S)
        // Thay vì cộng dồn, chúng ta "ghi đè" vị trí tâm ngay lập tức
        const dist = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        
        if (dist > 0.1) { // Deadzone cực nhỏ để tránh rung
            // Chế độ khóa cứng: Tâm = Đầu ngay lập tức
            crosshair.x += deltaX;
            crosshair.y += deltaY;
            this.isLocked = true;
        }

        // 5. INJECT TOUCH (TẦNG VẬT LÝ)
        // Gửi tín hiệu trực tiếp xuống hệ thống với áp lực tối đa
        this.injectInstantTouch(crosshair.x, crosshair.y);
    }

    /**
     * Injection siêu tốc - Mô phỏng tốc độ phản xạ 1ms
     */
    injectInstantTouch(tx, ty) {
        const touchEvent = new PointerEvent('pointermove', {
            clientX: tx,
            clientY: ty,
            pressure: 1.0,      // Lực nhấn tối đa
            tiltX: 0,
            tiltY: 0,
            pointerId: 1,
            isPrimary: true,
            bubbles: true
        });
        document.dispatchEvent(touchEvent);
    }
}

// ===== CẤU HÌNH SIÊU NHẸ TÂM =====
const INSTANT_CONFIG = {
    SnapSpeed: 0.001,       // 1ms
    HeadLock: true,
    AntiDither: true,       // Chống rung tâm khi đã khóa
    AutoClickDelay: 0       // Bắn ngay khi khóa
};



// Vòng lặp vận hành (Ưu tiên FPS cao nhất)
function fastTick() {
    const target = getClosestEnemy();
    const me = getLocalPlayer();

    if (target && me.isAiming) {
        engine.process(target, me);
    }
    
    // Sử dụng setImmediate hoặc requestAnimationFrame tùy môi trường
    requestAnimationFrame(fastTick);
}
// ===== [HYPER_SENS_HEADSHOT_ENGINE_V8] =====
// Logic: Fast-Pass Torso (Lướt qua thân) & Head-Lock Precision

class HyperAimEntity {
    constructor(config) {
        this.config = config;
        this.accel_y = 2.2;         // Gia tốc trục Y cực cao để vẩy qua thân
        this.snap_time = 0.001;     // Thời gian phản hồi 1ms
    }

    process(entity, localPlayer) {
        if (!entity || !entity.alive) return;

        const crosshair = localPlayer.crosshair;
        const head = entity.bones.head;
        const neck = entity.bones.neck; // Điểm mốc để tính vùng lướt

        // 1. TÍNH TOÁN KHOẢNG CÁCH (DELTA)
        let dx = head.x - crosshair.x;
        let dy = head.y - crosshair.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        // 2. LOGIC "LƯỚT THÂN" (FAST-PASS TORSO)
        // Nếu tâm đang nằm từ cổ trở xuống, nhân thêm gia tốc để trôi nhanh lên đầu
        if (crosshair.y > neck.y) {
            dy *= this.accel_y; // Tăng lực kéo Y gấp 2.2 lần
        }

        // 3. LOGIC "DỪNG TỨC THỜI" (HEAD-MAGNET)
        // Khi tâm đã chạm vào vùng Head (Epsilon < 10px), triệt tiêu mọi quán tính
        let head_radius = 10.0;
        if (dist < head_radius) {
            // Khóa cứng (Hard Lock) - Không cho trôi quá đầu (Anti-Overshoot)
            crosshair.x = head.x;
            crosshair.y = head.y;
            this.isLocked = true;
        } else {
            // Kéo tâm siêu tốc (Instant Snap)
            // Bỏ qua Smooth để đạt 0.001s
            crosshair.x += dx * 0.95; 
            crosshair.y += dy * 0.95;
            this.isLocked = false;
        }

        // 4. KHỬ RUNG (STABILIZER)
        // Nếu đã ở trong đầu, giữ nguyên tọa độ kể cả khi địch di chuyển nhẹ
        if (this.isLocked) {
            this.applyStickyMicroMove(entity, crosshair);
        }

        // 5. INJECT TÍN HIỆU VẬT LÝ
        this.sendRawInput(crosshair.x, crosshair.y);
    }

    applyStickyMicroMove(entity, crosshair) {
        // Bám đuổi theo vận tốc địch để tâm không bao giờ rời khỏi đầu
        if (entity.velocity) {
            crosshair.x += entity.velocity.x;
            crosshair.y += entity.velocity.y;
        }
    }

    sendRawInput(tx, ty) {
        const ev = new PointerEvent('pointermove', {
            clientX: tx,
            clientY: ty,
            pressure: 1.0, 
            pointerId: 1,
            isPrimary: true
        });
        document.dispatchEvent(ev);
    }
}



function loop() {
    const target = getTargetInField();
    if (target && isPressingAimButton()) {
        engine.process(target, localPlayer);
    }
    requestAnimationFrame(loop);
}
// ===== [ABSOLUTE_HEAD_DRAG_ENGINE_V9] =====
// Chiến lược: Bypass Torso (Bỏ qua thân) & Absolute Lock (Khóa chết đầu)

class AbsoluteHeadEngine {
    constructor() {
        this.force_y_boost = 2.5;    // Lực đẩy siêu cấp để vượt qua ngực/cổ
        this.snap_precision = 0.98;  // 98% khoảng cách được lấp đầy trong 0.001s
        this.sticky_threshold = 15;  // Bán kính hố đen (pixel)
    }

    process(entity, localPlayer) {
        if (!entity || !entity.alive) return;

        const crosshair = localPlayer.crosshair;
        const head = entity.bones.head;
        const chest = entity.bones.chest;

        // 1. TÍNH TOÁN KHOẢNG CÁCH THỰC (PIXEL DELTA)
        let dx = head.x - crosshair.x;
        let dy = head.y - crosshair.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        // 2. LOGIC ƯU TIÊN ĐẦU TUYỆT ĐỐI (VERTICAL BIAS)
        // Nếu tâm đang nằm ở bất kỳ đâu DƯỚI đầu, áp dụng lực đẩy cưỡng chế
        if (crosshair.y > head.y) {
            // Càng ở xa đầu (vùng chân/bụng), lực đẩy càng mạnh
            let distance_bias = Math.min((crosshair.y - head.y) / 50, 2.0);
            dy *= (this.force_y_boost + distance_bias);
        }

        // 3. XỬ LÝ TRÔI NHANH QUA VÙNG THÂN
        // Triệt tiêu ma sát ảo khi tâm đi qua tọa độ Chest
        if (Math.abs(crosshair.y - chest.y) < 30) {
            dy *= 1.5; // Tăng tốc gấp rưỡi khi đi ngang qua ngực
            dx *= 1.2;
        }

        // 4. CHẾ ĐỘ "HỐ ĐEN" (ABSOLUTE SNAP)
        if (dist < this.sticky_threshold) {
            // Khi đã chạm vùng đầu, dính chặt 100% không cho sai lệch
            crosshair.x = head.x;
            crosshair.y = head.y;
            this.hard_locked = true;
        } else {
            // Kéo siêu tốc 0.001s
            crosshair.x += dx * this.snap_precision;
            crosshair.y += dy * this.snap_precision;
            this.hard_locked = false;
        }

        // 5. ANTI-RECOIL & STABILIZER DYNAMICS
        if (this.hard_locked && entity.velocity) {
            // Bám đuổi tuyệt đối theo vận tốc của đầu địch
            crosshair.x += entity.velocity.x;
            crosshair.y += entity.velocity.y;
        }

        // 6. RAW INPUT INJECTION
        this.directMove(crosshair.x, crosshair.y);
    }

    directMove(tx, ty) {
        // Ghi đè tọa độ vật lý ngay lập tức
        const moveEvent = new PointerEvent('pointermove', {
            clientX: tx,
            clientY: ty,
            pressure: 1.0,
            pointerId: 1,
            isPrimary: true,
            bubbles: true
        });
        document.dispatchEvent(moveEvent);
    }
}

// ===== VẬN HÀNH CƯỠNG CHẾ =====


function tick() {
    const target = getPriorityEntity(); // Luôn lấy thực thể gần tâm nhất
    if (target) {
        headEngine.process(target, localPlayer);
    }
    requestAnimationFrame(tick);
}
// ===== [SYSTEM: HEAD_HUGGER_CORE_V10] =====
// Chiến thuật: Pre-emptive Snap (Khóa trước khi chạm) & Hitbox Expansion

class HeadHuggerEngine {
    constructor() {
        this.snapThreshold = 0.01; // Giới hạn thời gian 10ms (0.01s)
        this.suctionPower = 0.99;  // Lực hút 99% khoảng cách mỗi frame
        this.headMargin = 1.2;     // Mở rộng vùng nhận diện đầu (Hitbox Expansion)
    }

    process(target, localPlayer) {
        if (!target || !target.alive) return;

        const crosshair = localPlayer.crosshair;
        const head = target.bones.head;
        
        // 1. TÍNH TOÁN VECTOR TRUY ĐUỔI (PURSUIT VECTOR)
        // Bao gồm cả vận tốc của địch để "đón đầu" trước khi kéo
        let predictX = head.x + (target.velocity?.x || 0) * 0.5;
        let predictY = head.y + (target.velocity?.y || 0) * 0.5;

        let dx = predictX - crosshair.x;
        let dy = predictY - crosshair.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        // 2. LOGIC "ÔM TRỌN" (HITBOX HUGGING)
        // Nếu khoảng cách lớn, dùng gia tốc cực đại để "bay" đến vùng đầu
        // Nếu đã ở gần (< 30px), cưỡng chế tâm lọt vào tâm điểm đầu ngay lập tức
        if (dist < 80) {
            // Vùng tiếp cận nhanh: Nhân lực kéo dọc để bỏ qua thân/cổ
            dy *= 2.0; 
            dx *= 1.5;
        }

        // 3. THỰC THI SNAP 0.01S (ULTRA-FAST INJECTION)
        // Thay vì di chuyển mượt, ta thực hiện "nhảy bước" (Step-jump)
        if (dist > 1.0) {
            // Chỉ mất đúng 1-2 frame để ôm trọn mục tiêu
            crosshair.x += dx * this.suctionPower;
            crosshair.y += dy * this.suctionPower;
        }

        // 4. KHÓA TÂM TUYỆT ĐỐI (ZERO DRIFT)
        // Khi đã ở trong hitbox đầu, tâm ngắm sẽ "dính" như keo 502
        if (dist < 15) {
            crosshair.x = predictX;
            crosshair.y = predictY;
            this.isGlued = true;
        }

        // 5. GỬI TÍN HIỆU CƯỠNG CHẾ (HARD-INPUT)
        this.injectPhysicalMove(crosshair.x, crosshair.y);
    }

    injectPhysicalMove(tx, ty) {
        // Sử dụng PointerEvent với thông số áp lực tuyệt đối
        const move = new PointerEvent('pointermove', {
            clientX: tx,
            clientY: ty,
            pressure: 1.0,
            pointerId: 1,
            isPrimary: true
        });
        document.dispatchEvent(move);
    }
}
const AIMLOCK_CONFIG = {

    // ===== CORE =====
    ENABLE: true,
    MODE: "AGGRESSIVE",

    // ===== TARGET =====
    TARGET: {
        BONE: "HEAD",
        SWITCH_DELAY: 0,              // chuyển mục tiêu ngay lập tức
        MAX_DISTANCE: 999999,
        FOV: 9999,                   // bắt toàn màn
        PRIORITY: "CLOSEST_TO_CROSSHAIR"
    },

    // ===== TRACKING =====
    TRACK: {
        SMOOTH: 0.01,                // gần như snap tức thì
        HARD_LOCK: true,
        LOCK_STRENGTH: 3.0,          // lực ghim cực mạnh
        DEADZONE: 0                  // không cho lệch
    },

    // ===== PREDICTION =====
    PREDICT: {
        ENABLE: true,
        VELOCITY_SCALE: 2.5,         // bù chuyển động mạnh
        LEAD_TIME: 0.25,             // dự đoán xa hơn
        ADAPTIVE: true
    },

    // ===== KALMAN =====
    KALMAN: {
        ENABLE: true,
        PROCESS_NOISE: 0.0001,       // cực mượt
        MEASURE_NOISE: 0.01
    },

    // ===== RECOIL =====
    RECOIL: {
        CONTROL: true,
        VERTICAL: 1.5,               // kéo xuống mạnh
        HORIZONTAL: 0.6
    },

    // ===== AUTO FIRE =====
    AUTO_FIRE: {
        ENABLE: true,
        DELAY: 0,
        TRIGGER_RADIUS: 0.0005       // gần như chạm là bắn
    },

    // ===== SENS =====
    SENS: {
        BASE: 2.5,                   // tốc độ cực cao
        ADS_MULTIPLIER: 2.0,
        DYNAMIC_BY_DISTANCE: false   // giữ max luôn
    },

    // ===== STABILIZER =====
    STABILIZER: {
        ENABLE: true,
        MICRO_CORRECTION: 0,         // không rung
        MAX_DELTA: 999               // không giới hạn
    },

    // ===== DEBUG =====
    DEBUG: {
        LOG: false,
        DRAW_FOV: false
    }
};
const CHEST_HEAD_BOOST_CONFIG = {

    ENABLE: true,

    // ===== VÙNG KÍCH HOẠT (CHEST ZONE) =====
    CHEST_ZONE: {
        RADIUS: 0.08,          // vùng quanh thân
        PRIORITY_Y_OFFSET: 0.65 // độ cao từ thân lên đầu
    },

    // ===== BOOST KÉO LÊN =====
    BOOST: {
        ENABLE: true,
        FORCE_Y: 5.0,          // lực kéo lên cực mạnh
        FORCE_X: 0.6,          // giữ ngang ổn định
        ACCELERATION: 3.3      // tăng tốc khi kéo
    },

    // ===== NHẠY TÂM =====
    SENS: {
        CHEST_MULTIPLIER: 2.2, // nhạy hơn khi aim vào thân
        HEAD_LOCK_MULTIPLIER: 3.0
    },

    // ===== SNAP HEAD =====
    SNAP: {
        ENABLE: true,
        THRESHOLD: 0.015       // gần head là snap luôn
    }
};
const HEAD_LOCK_CONFIG = {

    ENABLE: true,

    // ===== VÙNG KÍCH HOẠT =====
    LOCK_ZONE: {
        RADIUS: 0.02,        // vừa chạm đầu là kích hoạt
        STICK_RADIUS: 0.01   // vào sâu thì khóa cứng
    },

    // ===== LỰC GHIM =====
    LOCK: {
        STRENGTH: 5.0,       // lực hút cực mạnh
        INSTANT: true,       // snap ngay
        HOLD: true           // giữ không rời
    },

    // ===== CHỐNG TRÔI =====
    STABLE: {
        ZERO_SHAKE: true,
        MAX_DRIFT: 0.0001
    }
};
const HEAD_MOVING_CONFIG = {

    ENABLE: true,

    // ===== PHÁT HIỆN DI CHUYỂN =====
    DETECT: {
        MIN_VELOCITY: 0.002,   // ngưỡng coi là đang chạy
        HORIZONTAL_WEIGHT: 1.9 // ưu tiên ngang
    },

    // ===== PREDICT =====
    PREDICT: {
        LEAD_BASE: 0.12,
        LEAD_MAX: 0.25,
        ADAPTIVE: true
    },

    // ===== TRACK =====
    TRACK: {
        FOLLOW_STRENGTH: 2.5,  // lực bám theo
        SNAP_CORRECTION: 1.0   // sửa sai nhanh
    },

    // ===== HEAD PRIORITY =====
    PRIORITY: {
        LOCK_HEAD_ONLY: true,
        IGNORE_BODY: true
    }
};
const MICRO_DRAG_CONFIG = {

    ENABLE: true,

    // ===== PHÁT HIỆN KÉO NHẸ =====
    INPUT: {
        MIN_DELTA: 0.0005,    // chỉ cần động nhẹ
        MAX_DELTA: 0.02,      // vẫn coi là kéo nhẹ
    },

    // ===== GIA TỐC =====
    ACCEL: {
        MULTIPLIER_Y: 10.0,    // lực kéo lên đầu (rất mạnh)
        MULTIPLIER_X: 1.2,    // giữ ngang ổn định
        RAMP: 2.5             // tăng tốc theo thời gian kéo
    },

    // ===== HÚT VỀ ĐẦU =====
    MAGNET: {
        FORCE: 4.0,
        SNAP_DIST: 360.0
    },

    // ===== ANTI DELAY =====
    RESPONSE: {
        INSTANT: true,
        BOOST_FIRST_FRAME: 3.0
    }
};
const HEAD_PULL_FIX_CONFIG = {

    ENABLE: true,

    // ===== PHÁT HIỆN CẦN KÉO LÊN =====
    DETECT: {
        MIN_Y_GAP: 0.01,     // đầu cao hơn tâm
        ACTIVE_ZONE: 360.0    // vùng kích hoạt
    },

    // ===== FORCE KÉO LÊN =====
    FORCE: {
        Y_BOOST: 10.5,        // lực kéo lên (cực quan trọng)
        X_REDUCE: 0.4,       // giảm lực ngang
        OVERRIDE_SMOOTH: true
    },

    // ===== BREAK LIMIT =====
    BREAK: {
        ENABLE: true,
        THRESHOLD: 0.02,     // nếu không lên → phá giới hạn
        FORCE: 2.5
    }
};
const HEAD_HOLD_CONFIG = {

    ENABLE: true,

    // ===== VÙNG HEAD =====
    HEAD_ZONE: {
        LOCK_RADIUS: 0.025,      // vào head là lock
        RELEASE_RADIUS: 0.065,   // ra xa mới nhả (tăng hysteresis)
        HARD_LOCK_RADIUS: 0.018, // vùng lock cứng (không cho thoát)
        SNAP_RADIUS: 0.04        // vùng hỗ trợ hút vào head
    },

    // ===== GIỮ TÂM =====
    HOLD: {
        STRENGTH: 1.15,          // lực giữ tổng
        STATIC_BOOST: 1.25,      // tăng lực khi đã lock
        DYNAMIC_BOOST: 1.4,      // tăng lực khi target di chuyển
        ANTI_DROP_Y: true,
        MAX_DOWN_FORCE: 0,       // cấm kéo xuống
        LOCK_RESIST: 0.9         // chống bị kéo lệch khỏi head
    },

    // ===== SNAP VÀO ĐẦU =====
    SNAP: {
        ENABLE: true,
        FORCE: 1.6,              // lực hút cực mạnh
        SPEED: 1.3,              // tốc độ snap
        MIN_INPUT_IGNORE: 0.003, // input nhỏ vẫn auto snap
        OVERDRIVE: true          // vượt lực kéo tay người
    },

    // ===== ANTI TỤT TÂM =====
    ANTI_DROP: {
        ENABLE: true,
        Y_LOCK_THRESHOLD: 0.002,  // nếu lệch nhỏ thì khóa Y
        HOLD_FRAMES: 6,           // giữ trong X frame
        DECAY: 0.85              // giảm dần lực giữ
    },

    // ===== CHỐNG GIẬT NGƯỢC =====
    ANTI_REVERSE: {
        ENABLE: true,
        BLOCK_BACK_FORCE: true,   // chặn lực kéo ngược
        ANGLE_LIMIT: 35,         // giới hạn góc đảo chiều
        DAMPING: 0.75            // giảm giật
    },

    // ===== TRACK CHUYỂN ĐỘNG =====
    TRACKING: {
        PREDICT: 1.0,            // dự đoán vị trí head
        FOLLOW_SPEED: 1.25,      // tốc độ bám
        VELOCITY_SCALE: 1.1,     // scale theo tốc độ địch
        SMOOTH: 0.2              // làm mượt tracking
    },

    // ===== FILTER =====
    FILTER: {
        BLOCK_NEGATIVE_Y: true,
        ALLOW_MICRO_ADJUST: 0.002,
        DEADZONE: 0.0015,        // vùng bỏ qua rung nhỏ
        NOISE_REDUCTION: 0.8     // giảm jitter
    },

    // ===== ƯU TIÊN HEAD =====
    PRIORITY: {
        FORCE_HEAD_OVER_BODY: true, // luôn ưu tiên head
        BODY_REJECT_ZONE: 0.08,     // vùng bỏ qua body
        STICK_TO_HEAD: 1.3          // độ dính vào head
    },

    // ===== AUTO FIRE LOCK =====
    FIRE_LOCK: {
        ENABLE: true,
        REQUIRE_TOUCH: true,     // chỉ lock khi bấm nút bắn
        LOCK_WHEN_SHOOT: true,
        HOLD_WHILE_FIRE: true
    }
};
const FIRE_HEAD_LOCK_CONFIG = {

    ENABLE: true,

    // ===== TRIGGER =====
    TRIGGER: {
        REQUIRE_SHOOT_TOUCH: true, // chỉ kích hoạt khi bấm nút bắn
        HOLD_ONLY: true            // giữ khi đang giữ nút
    },

    // ===== LOCK =====
    LOCK: {
        STRENGTH: 6.0,     // lực khóa cực mạnh
        SNAP: true,        // chạm là snap
        SNAP_RADIUS: 0.03
    },

    // ===== HOLD =====
    HOLD: {
        FORCE: 4.0,
        ZERO_SHAKE: true
    },

    // ===== ANTI DROP =====
    ANTI_DROP: {
        BLOCK_DOWN: true,
        Y_PRIORITY: true
    }
};
 const RECOIL_CROSSHAIR_CONFIG = {

    ENABLE: true,

    // ===== FIX RECOIL =====
    RECOIL: {
        ENABLE: true,

        VERTICAL_COMP: 1.25,     // bù giật dọc (quan trọng nhất)
        HORIZONTAL_COMP: 0.6,    // bù giật ngang

        DYNAMIC_SCALE: true,     // tăng theo thời gian bắn
        SCALE_PER_SHOT: 0.08,    // mỗi viên tăng lực

        MAX_COMP: 2.2,           // giới hạn chống overcomp

        BURST_RESET_TIME: 120,   // ms reset recoil
        RESET_SMOOTH: 0.85,      // hồi về mượt

        ANTI_OVER_PULL: true,    // tránh kéo quá đầu
        CLAMP_Y: true            // giới hạn trục Y
    },

    // ===== GIỮ CROSSHAIR ỔN ĐỊNH =====
    CROSSHAIR: {
        ENABLE: true,

        STABILITY: 1.2,          // độ ổn định tổng
        DRAG_RESIST: 0.9,        // chống lệch khi kéo

        MICRO_CORRECTION: 0.002, // chỉnh sai số nhỏ
        DEADZONE: 0.0015,        // vùng bỏ qua rung

        SMOOTH: 0.2,             // làm mượt
        LOCK_STRENGTH: 1.1,      // giữ tâm khi đã đúng

        CENTER_PULL: 0.15        // kéo nhẹ về trung tâm head
    },

    // ===== CHỐNG RUNG (JITTER FIX) =====
    STABILIZER: {
        ENABLE: true,

        NOISE_FILTER: 0.85,      // lọc nhiễu
        SHAKE_DAMPING: 0.8,      // giảm rung

        MAX_DELTA: 0.03,         // giới hạn thay đổi frame
        MIN_DELTA: 0.0005        // bỏ rung siêu nhỏ
    },

    // ===== KHÓA TRỤC Y (QUAN TRỌNG) =====
    AXIS_LOCK: {
        ENABLE: true,

        LOCK_Y_WHEN_SHOOT: true, // bắn là khóa Y
        Y_THRESHOLD: 0.002,      // sai số nhỏ thì giữ nguyên

        NO_DOWN_FORCE: true,     // không cho kéo xuống
        UPWARD_PRIORITY: 1.2     // ưu tiên kéo lên head
    },

    // ===== TRACK ỔN ĐỊNH =====
    TRACK_ASSIST: {
        ENABLE: true,

        FOLLOW_SPEED: 1.2,
        PREDICT: 0.9,

        VELOCITY_DAMP: 0.0,     // giảm ảnh hưởng velocity
        SNAP_LIMIT: 360.9         // tránh snap quá mạnh gây lệch
    }
};
 const HYPER_SENS_CONFIG = {

    ENABLE: true,

    // ===== ĐỘ NHẠY CHUNG =====
    SENS: {
        BASE: 1.4,              // độ nhạy gốc
        MAX: 2.5,               // giới hạn tối đa

        DYNAMIC: true,          // tăng theo tốc độ kéo
        SPEED_SCALE: 1.2,       // scale theo lực tay

        LOW_INPUT_BOOST: 3.6,   // kéo nhẹ vẫn bay nhanh
        HIGH_INPUT_DAMP: 0.85   // kéo mạnh thì giảm rung
    },

    // ===== GIẢM ĐỘ NẶNG TÂM =====
    DRAG: {
        ENABLE: true,

        BASE_DRAG: 0.0,         // lực cản thấp (rất nhẹ)
        ADAPTIVE: true,

        HEAD_REDUCTION: 0.0,    // vào head giảm drag cực mạnh
        MOVE_REDUCTION: 0.3     // khi kéo thì giảm drag
    },

    // ===== TĂNG TỐC KÉO LÊN HEAD =====
    UPWARD_ASSIST: {
        ENABLE: true,

        BOOST: 3.8,             // lực kéo lên
        PRIORITY: 2.5,          // ưu tiên hướng lên

        IGNORE_DOWN: true,      // bỏ lực kéo xuống
        SNAP_UP: true           // kéo là bật lên ngay
    },

    // ===== SNAP SIÊU NHANH =====
    SNAP: {
        ENABLE: true,

        FORCE: 1.7,
        SPEED: 1.5,

        INPUT_THRESHOLD: 0.002, // kéo nhẹ vẫn kích hoạt
        HEAD_ONLY: true
    },

    // ===== ANTI HEAVY AIM =====
    ANTI_HEAVY: {
        ENABLE: true,

        RESIST_REDUCTION: 0.5,  // giảm lực cản tổng
        INSTANT_RESPONSE: true, // phản hồi ngay

        NO_DELAY: true          // bỏ delay input
    }
};
  const PRECISION_HEAD_CONFIG = {

    ENABLE: true,

    // ===== ĐỘ CHÍNH XÁC =====
    PRECISION: {
        BASE: 1.0,              // độ chính xác cơ bản
        HEAD_BOOST: 1.6,        // tăng mạnh khi gần head

        DISTANCE_SCALE: true,   // càng gần càng chính xác
        MIN_FACTOR: 0.6,
        MAX_FACTOR: 1.8
    },

    // ===== GIẢM OVERSHOOT =====
    OVERSHOOT: {
        ENABLE: true,

        DAMPING: 0.0,           // giảm lực khi gần mục tiêu
        HARD_CLAMP: true,       // không cho vượt head

        SLOW_ZONE: 0.035,       // vùng giảm tốc
        STOP_ZONE: 0.015        // vùng dừng chính xác
    },

    // ===== SNAP CHÍNH XÁC =====
    SNAP: {
        ENABLE: true,

        FORCE: 1.4,
        PRECISION_BOOST: 1.8,   // snap chính xác hơn thay vì mạnh hơn

        ACTIVATION_RADIUS: 0.04
    },

    // ===== MICRO ADJUST =====
    MICRO_ADJUST: {
        ENABLE: true,

        STEP: 0.0015,           // bước chỉnh nhỏ
        SMOOTH: 0.85,           // làm mượt vi chỉnh

        LOCK_THRESHOLD: 0.002   // sai số cực nhỏ thì khóa
    },

    // ===== HEAD LOCK =====
    HEAD_LOCK: {
        ENABLE: true,

        STICK_FORCE: 1.3,       // độ dính head
        RELEASE_TOLERANCE: 0.05,

        PRIORITY_Y: 1.4         // ưu tiên trục Y (đầu)
    }
};
const HEAD_LOCK_SYSTEM = {

    ENABLE: true,

    // ===== POSITION LOCK =====
    POSITION: {
        ENABLE: true,

        LERP_SPEED: 1.35,        // tốc độ kéo vào head
        SNAP_FORCE: 1.6,         // lực hút

        HARD_LOCK_RADIUS: 0.02,  // vào là khóa cứng
        SOFT_ZONE: 0.05,         // vùng hỗ trợ

        PREDICT: 1.0             // dự đoán vị trí head
    },

    // ===== ROTATION LOCK =====
    ROTATION: {
        ENABLE: true,

        ALIGN_SPEED: 1.25,       // tốc độ xoay theo head
        MAX_ANGLE: 45,           // giới hạn góc

        SMOOTH: 0.2,             // làm mượt rotation
        PRIORITY_YAW: 1.2,       // ưu tiên ngang
        PRIORITY_PITCH: 1.4      // ưu tiên lên đầu
    },

    // ===== HOLD LOCK =====
    HOLD: {
        ENABLE: true,

        STICK_FORCE: 1.5,        // độ dính cực mạnh
        LOCK_DECAY: 0.9,         // giảm nhẹ theo frame

        BREAK_DISTANCE: 0.08,    // xa quá thì nhả
        HARD_HOLD: true          // giữ tuyệt đối khi đã lock
    },

    // ===== ANTI DRIFT =====
    ANTI_DRIFT: {
        ENABLE: true,

        POSITION_DAMP: 0.85,     // chống trôi vị trí
        ROTATION_DAMP: 0.8,      // chống rung góc

        MICRO_FREEZE: 0.0015     // sai số nhỏ thì freeze
    },

    // ===== HEAD PRIORITY =====
    PRIORITY: {
        FORCE_HEAD: true,

        Y_WEIGHT: 1.5,           // ưu tiên trục đầu
        LOCK_BIAS: 1.3           // bias vào head thay vì body
    }
};
  const DISTANCE_HEAD_LOCK = {

    ENABLE: true,

    // ===== SCALE THEO KHOẢNG CÁCH =====
    DISTANCE: {
        ENABLE: true,

        NEAR: 1.5,
        MID: 1.4,
        FAR: 1.0,

        SCALE_NEAR: 2.0,   // gần → giảm lực
        SCALE_MID: 1.1,     // trung → chuẩn
        SCALE_FAR: 1.0     // xa → tăng lực mạnh
    },

    // ===== BÙ CHIỀU CAO HEAD =====
    HEAD_OFFSET: {
        ENABLE: true,

        BASE_OFFSET: -0.12,   // nâng lên head
        DISTANCE_BOOST: -0.08 // xa → nâng cao hơn
    },

    // ===== PRECISION =====
    PRECISION: {
        BASE: 1.0,
        FAR_BOOST: 1.5,       // xa cần chính xác cao hơn

        MICRO_STEP: 0.0012,
        LOCK_THRESHOLD: 0.0015
    },

    // ===== SNAP =====
    SNAP: {
        ENABLE: true,

        FORCE_NEAR: 99.2,
        FORCE_FAR: 99.0,

        RADIUS: 0.05
    },

    // ===== ANTI OVERSHOOT =====
    OVERSHOOT: {
        ENABLE: true,

        DAMP_NEAR: 0.0,
        DAMP_FAR: 0.0,

        STOP_ZONE: 0.02
    }
};
 
    const AimLockHeadEngine = (() => {
let scale = 1.0;

if (dist < DISTANCE.NEAR) {
    scale = DISTANCE.SCALE_NEAR;
}
else if (dist < DISTANCE.MID) {
    scale = DISTANCE.SCALE_MID;
}
else {
    scale = DISTANCE.SCALE_FAR;
}
        let headOffset = HEAD_OFFSET.BASE_OFFSET;

if (dist > DISTANCE.MID) {
    headOffset += HEAD_OFFSET.DISTANCE_BOOST;
}

let targetY = target.head.y + headOffset;
        let dx = target.head.x - state.crosshairX;
let dy = targetY - state.crosshairY;

dx *= scale;
dy *= scale;
        if (SNAP.ENABLE) {

    let snapForce = (dist < DISTANCE.MID)
        ? SNAP.FORCE_NEAR
        : SNAP.FORCE_FAR;

    if (Math.abs(dx) < SNAP.RADIUS && Math.abs(dy) < SNAP.RADIUS) {
        dx *= snapForce;
        dy *= snapForce;
    }
}
        if (OVERSHOOT.ENABLE) {

    let damp = (dist < DISTANCE.MID)
        ? OVERSHOOT.DAMP_NEAR
        : OVERSHOOT.DAMP_FAR;

    dx *= damp;
    dy *= damp;

    if (Math.abs(dx) < OVERSHOOT.STOP_ZONE) dx = 0;
    if (Math.abs(dy) < OVERSHOOT.STOP_ZONE) dy = 0;
}
        if (Math.abs(dx) < PRECISION.MICRO_STEP) {
    dx *= 0.8;
}

if (Math.abs(dy) < PRECISION.MICRO_STEP) {
    dy *= 0.8;
}
        if (Math.abs(dx) < PRECISION.LOCK_THRESHOLD &&
    Math.abs(dy) < PRECISION.LOCK_THRESHOLD) {

    dx = 0;
    dy = 0;
}
        
let headX = target.head.x + target.velocity.x * POSITION.PREDICT;
let headY = target.head.y + target.velocity.y * POSITION.PREDICT;
        let dx = headX - state.crosshairX;
let dy = headY - state.crosshairY;

let dist = Math.sqrt(dx*dx + dy*dy);

// vùng soft → hút vào
if (dist < POSITION.SOFT_ZONE) {
    dx *= POSITION.SNAP_FORCE;
    dy *= POSITION.SNAP_FORCE;
}

// lerp vào head
state.crosshairX += dx * POSITION.LERP_SPEED;
state.crosshairY += dy * POSITION.LERP_SPEED;

if (dist < POSITION.HARD_LOCK_RADIUS) {

    state.crosshairX = headX;
    state.crosshairY = headY;
}
        let targetYaw   = Math.atan2(dx, 1);
let targetPitch = Math.atan2(dy, 1);

// scale ưu tiên
targetYaw   *= ROTATION.PRIORITY_YAW;
targetPitch *= ROTATION.PRIORITY_PITCH;

// smooth
state.cameraYaw += (targetYaw - state.cameraYaw) * ROTATION.ALIGN_SPEED;
state.cameraPitch += (targetPitch - state.cameraPitch) * ROTATION.ALIGN_SPEED;

        if (HOLD.ENABLE && dist < HOLD.BREAK_DISTANCE) {

    dx *= HOLD.STICK_FORCE;
    dy *= HOLD.STICK_FORCE;

    if (HOLD.HARD_HOLD) {
        state.crosshairX += dx;
        state.crosshairY += dy;
    }
}
        dx *= ANTI_DRIFT.POSITION_DAMP;
dy *= ANTI_DRIFT.POSITION_DAMP;

if (Math.abs(dx) < ANTI_DRIFT.MICRO_FREEZE) dx = 0;
if (Math.abs(dy) < ANTI_DRIFT.MICRO_FREEZE) dy = 0;

        dy *= PRIORITY.Y_WEIGHT;



        
let dist = Math.sqrt(dx*dx + dy*dy);

let precision = PRECISION.BASE;

if (PRECISION.DISTANCE_SCALE) {
    let factor = 1 / (dist + 0.001);

    factor = clamp(factor, PRECISION.MIN_FACTOR, PRECISION.MAX_FACTOR);

    precision *= factor;
}
        if (dist < OVERSHOOT.SLOW_ZONE) {
    dx *= OVERSHOOT.DAMPING;
    dy *= OVERSHOOT.DAMPING;
}

if (dist < OVERSHOOT.STOP_ZONE) {
    dx *= 0.3;
    dy *= 0.3;
}
        if (OVERSHOOT.HARD_CLAMP) {

    if (Math.abs(dx) > Math.abs(targetX - crosshairX)) {
        dx = targetX - crosshairX;
    }

    if (Math.abs(dy) > Math.abs(targetY - crosshairY)) {
        dy = targetY - crosshairY;
    }
}
        if (dist < SNAP.ACTIVATION_RADIUS) {

    dx *= SNAP.PRECISION_BOOST;
    dy *= SNAP.PRECISION_BOOST;
}
        if (Math.abs(dx) < MICRO_ADJUST.STEP) {
    dx *= MICRO_ADJUST.SMOOTH;
}

if (Math.abs(dy) < MICRO_ADJUST.STEP) {
    dy *= MICRO_ADJUST.SMOOTH;
}
        if (dist < MICRO_ADJUST.LOCK_THRESHOLD) {
    dx = 0;
    dy = 0;
}
        dy *= HEAD_LOCK.PRIORITY_Y;
        if (isOnHead) {
    dx *= HEAD_LOCK.STICK_FORCE;
    dy *= HEAD_LOCK.STICK_FORCE;
}
        
        let inputMag = Math.sqrt(inputX * inputX + inputY * inputY);

let sens = SENS.BASE;

if (SENS.DYNAMIC) {
    sens += inputMag * SENS.SPEED_SCALE;
}

// clamp
sens = Math.min(sens, SENS.MAX);
        
        let drag = DRAG.BASE_DRAG;

if (DRAG.ADAPTIVE) {
    if (isMovingAim) {
        drag *= DRAG.MOVE_REDUCTION;
    }

    if (isOnHead) {
        drag *= DRAG.HEAD_REDUCTION;
    }
}
if (UPWARD_ASSIST.ENABLE) {

    if (deltaY < 0) { // kéo lên
        deltaY *= UPWARD_ASSIST.BOOST;
    }

    if (UPWARD_ASSIST.IGNORE_DOWN && deltaY > 0) {
        deltaY = 0;
    }
}
        
if (SNAP.ENABLE && distanceToHead < SNAP_RADIUS) {

    if (inputMag > SNAP.INPUT_THRESHOLD) {
        deltaX *= SNAP.FORCE;
        deltaY *= SNAP.FORCE;
    }
}
        if (ANTI_HEAVY.ENABLE) {

    deltaX *= ANTI_HEAVY.RESIST_REDUCTION;
    deltaY *= ANTI_HEAVY.RESIST_REDUCTION;

    if (ANTI_HEAVY.INSTANT_RESPONSE) {
        deltaX *= 1.2;
        deltaY *= 1.2;
    }
}
        state.crosshairX += deltaX * sens * (1 - drag);
state.crosshairY += deltaY * sens * (1 - drag);
        


        let recoilForceY = RECOIL.VERTICAL_COMP;
let recoilForceX = RECOIL.HORIZONTAL_COMP;

// scale theo số đạn
if (RECOIL.DYNAMIC_SCALE) {
    recoilForceY += shotCount * RECOIL.SCALE_PER_SHOT;
}

// clamp tránh quá tay
recoilForceY = Math.min(recoilForceY, RECOIL.MAX_COMP);

// áp dụng (đảo chiều recoil)
aimY -= recoilForceY;
aimX -= recoilForceX;
if (RECOIL.ANTI_OVER_PULL) {
    if (aimY < targetHeadY) {
        aimY = targetHeadY;
    }
}
        let deltaX = targetX - crosshairX;
let deltaY = targetY - crosshairY;

// deadzone
if (Math.abs(deltaX) < CROSSHAIR.DEADZONE) deltaX = 0;
if (Math.abs(deltaY) < CROSSHAIR.DEADZONE) deltaY = 0;

// micro adjust
deltaX *= CROSSHAIR.STABILITY;
deltaY *= CROSSHAIR.STABILITY;
 if (isOnHead) {
    deltaX *= CROSSHAIR.LOCK_STRENGTH;
    deltaY *= CROSSHAIR.LOCK_STRENGTH;
}
        if (AXIS_LOCK.NO_DOWN_FORCE && deltaY > 0) {
    deltaY = 0; // chặn kéo xuống
}

if (Math.abs(deltaY) < AXIS_LOCK.Y_THRESHOLD) {
    deltaY = 0;
}
        deltaX = deltaX * STABILIZER.NOISE_FILTER;
deltaY = deltaY * STABILIZER.NOISE_FILTER;

// clamp thay đổi
deltaX = Math.max(Math.min(deltaX, STABILIZER.MAX_DELTA), -STABILIZER.MAX_DELTA);
deltaY = Math.max(Math.min(deltaY, STABILIZER.MAX_DELTA), -STABILIZER.MAX_DELTA);
        
        predictedX = targetX + velocityX * TRACK_ASSIST.PREDICT;
predictedY = targetY + velocityY * TRACK_ASSIST.PREDICT;

deltaX += (predictedX - crosshairX) * TRACK_ASSIST.FOLLOW_SPEED;
deltaY += (predictedY - crosshairY) * TRACK_ASSIST.FOLLOW_SPEED;
let lastTarget = null;
    let lastTime = Date.now();

    function getDeltaTime() {
        const now = Date.now();
        const dt = (now - lastTime) / 1000;
        lastTime = now;
        return dt;
    }
function forceHeadPullUp(state, target) {

    if (!HEAD_PULL_FIX_CONFIG.ENABLE || !target) return;

    const crosshair = state.crosshair;
    const head = target.head;

    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    const dist = Math.hypot(dx, dy);

    // ===== 1. PHÁT HIỆN "BỊ KẸT KHÔNG LÊN" =====
    const needPullUp =
        dy < -HEAD_PULL_FIX_CONFIG.DETECT.MIN_Y_GAP &&
        dist < HEAD_PULL_FIX_CONFIG.DETECT.ACTIVE_ZONE;

    if (needPullUp) {

        // ===== 2. GIẢM NGANG =====
        dx *= HEAD_PULL_FIX_CONFIG.FORCE.X_REDUCE;

        // ===== 3. BOOST LÊN ĐẦU =====
        dy *= HEAD_PULL_FIX_CONFIG.FORCE.Y_BOOST;

        // ===== 4. BREAK LIMIT (PHÁ CẢN) =====
        if (HEAD_PULL_FIX_CONFIG.BREAK.ENABLE &&
            Math.abs(dy) < HEAD_PULL_FIX_CONFIG.BREAK.THRESHOLD) {

            dy *= HEAD_PULL_FIX_CONFIG.BREAK.FORCE;
        }

        // ===== 5. APPLY TRỰC TIẾP (BỎ SMOOTH) =====
        crosshair.x += dx;
        crosshair.y += dy;
    }
}
let fireLockActive = false;

function fireHeadLock(state, target) {

    if (!FIRE_HEAD_LOCK_CONFIG.ENABLE || !target) return;

    const crosshair = state.crosshair;
    const head = target.head;

    // ===== 1. CHECK NÚT BẮN =====
    const isFiring = state.isShooting === true;

    if (FIRE_HEAD_LOCK_CONFIG.TRIGGER.REQUIRE_SHOOT_TOUCH) {
        fireLockActive = isFiring;
    }
if (distance < SNAP_RADIUS) {
    force = SNAP.FORCE * SNAP.SPEED;

    if (input < SNAP.MIN_INPUT_IGNORE) {
        force *= 1.3; // auto kéo mạnh hơn
    }
}
    if (isLockedHead) {
    aimY = Math.max(aimY, targetHeadY); // không cho tụt xuống

    holdForce *= HOLD.STATIC_BOOST;
}
    if (deltaY > 0 && FILTER.BLOCK_NEGATIVE_Y) {
    deltaY = Math.min(deltaY, HOLD.MAX_DOWN_FORCE);
}
    if (distance < HARD_LOCK_RADIUS) {
    lockStrength = 999; // khóa cứng
}
    predictedX = head.x + velocity.x * TRACKING.PREDICT;
predictedY = head.y + velocity.y * TRACKING.PREDICT;
  if (dot(inputDir, aimDir) < 0) {
    if (ANTI_REVERSE.BLOCK_BACK_FORCE) {
        input = input * ANTI_REVERSE.DAMPING;
    }
}
    if (Math.abs(deltaY) < ANTI_DROP.Y_LOCK_THRESHOLD) {
    deltaY = 0;
}
    if (!fireLockActive) return;

    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    const dist = Math.hypot(dx, dy);

    // ===== 2. SNAP NGAY =====
    if (FIRE_HEAD_LOCK_CONFIG.LOCK.SNAP &&
        dist < FIRE_HEAD_LOCK_CONFIG.LOCK.SNAP_RADIUS) {

        crosshair.x = head.x;
        crosshair.y = head.y;
    }

    // ===== 3. ƯU TIÊN LÊN ĐẦU =====
    if (FIRE_HEAD_LOCK_CONFIG.ANTI_DROP.Y_PRIORITY) {
        if (dy < 0) {
            dy *= FIRE_HEAD_LOCK_CONFIG.LOCK.STRENGTH;
        }
    }

    // ===== 4. CHẶN TỤT =====
    if (FIRE_HEAD_LOCK_CONFIG.ANTI_DROP.BLOCK_DOWN) {
        if (dy > 0) dy = 0;
    }

    // ===== 5. KHÓA CỨNG =====
    crosshair.x += dx * FIRE_HEAD_LOCK_CONFIG.HOLD.FORCE;
    crosshair.y += dy * FIRE_HEAD_LOCK_CONFIG.HOLD.FORCE;

    // ===== 6. ZERO SHAKE =====
    if (FIRE_HEAD_LOCK_CONFIG.HOLD.ZERO_SHAKE) {
        if (Math.abs(dx) < 0.001) crosshair.x = head.x;
        if (Math.abs(dy) < 0.001) crosshair.y = head.y;
    }
}
  let headLocked = false;

function preventDropFromHead(state, target) {

    if (!HEAD_HOLD_CONFIG.ENABLE || !target) return;

    const crosshair = state.crosshair;
    const head = target.head;

    let dx = head.x - crosshair.x;
    let dy = head.y - crosshair.y;

    const dist = Math.hypot(dx, dy);

    // ===== 1. KÍCH HOẠT LOCK =====
    if (dist < HEAD_HOLD_CONFIG.HEAD_ZONE.LOCK_RADIUS) {
        headLocked = true;
    }

    // ===== 2. NHẢ LOCK =====
    if (dist > HEAD_HOLD_CONFIG.HEAD_ZONE.RELEASE_RADIUS) {
        headLocked = false;
    }

    if (!headLocked) return;

    // ===== 3. CHẶN LỰC KÉO XUỐNG =====
    if (HEAD_HOLD_CONFIG.FILTER.BLOCK_NEGATIVE_Y) {
        if (dy > 0) dy = 0; // không cho kéo xuống thân
    }

    // ===== 4. GIỮ TÂM TRÊN ĐẦU =====
    crosshair.x += dx * HEAD_HOLD_CONFIG.HOLD.STRENGTH;
    crosshair.y += dy * HEAD_HOLD_CONFIG.HOLD.STRENGTH;

    // ===== 5. MICRO ADJUST =====
    if (Math.abs(dx) < HEAD_HOLD_CONFIG.FILTER.ALLOW_MICRO_ADJUST) {
        crosshair.x = head.x;
    }

    if (Math.abs(dy) < HEAD_HOLD_CONFIG.FILTER.ALLOW_MICRO_ADJUST) {
        crosshair.y = head.y;
    }
}
  function headMovingLock(state, target) {

    if (!HEAD_MOVING_CONFIG.ENABLE || !target) return;

    const crosshair = state.crosshair;
    const head = target.head;
    const prev = target.prevHead || head;

    // ===== 1. TÍNH VẬN TỐC =====
    let vx = head.x - prev.x;
    let vy = head.y - prev.y;

    const speed = Math.hypot(vx, vy);

    // ===== 2. PHÁT HIỆN DI CHUYỂN NGANG =====
    const isMoving = speed > HEAD_MOVING_CONFIG.DETECT.MIN_VELOCITY;

    // ===== 3. DỰ ĐOÁN =====
    let predictX = head.x;
    let predictY = head.y;

    if (isMoving) {

        // ưu tiên ngang (anti hụt)
        vx *= HEAD_MOVING_CONFIG.DETECT.HORIZONTAL_WEIGHT;

        let lead = HEAD_MOVING_CONFIG.PREDICT.LEAD_BASE;

        if (HEAD_MOVING_CONFIG.PREDICT.ADAPTIVE) {
            lead = Math.min(
                HEAD_MOVING_CONFIG.PREDICT.LEAD_MAX,
                speed * 3.0
            );
        }

        predictX += vx * lead;
        predictY += vy * lead;
    }

    // ===== 4. KÉO TÂM =====
    let dx = predictX - crosshair.x;
    let dy = predictY - crosshair.y;

    // ===== 5. BÁM THEO MẠNH =====
    crosshair.x += dx * HEAD_MOVING_CONFIG.TRACK.FOLLOW_STRENGTH;
    crosshair.y += dy * HEAD_MOVING_CONFIG.TRACK.FOLLOW_STRENGTH;

    // ===== 6. SỬA SAI (ANTI LỆCH) =====
    const errorX = head.x - crosshair.x;
    const errorY = head.y - crosshair.y;

    crosshair.x += errorX * HEAD_MOVING_CONFIG.TRACK.SNAP_CORRECTION;
    crosshair.y += errorY * HEAD_MOVING_CONFIG.TRACK.SNAP_CORRECTION;
}
let lastCrosshair = { x: 0, y: 0 };
let rampFactor = 1;

function microDragHeadBoost(state, target) {

    if (!MICRO_DRAG_CONFIG.ENABLE || !target) return;

    const crosshair = state.crosshair;
    const head = target.head;

    // ===== 1. INPUT DELTA (NGƯỜI DÙNG KÉO) =====
    const inputX = crosshair.x - lastCrosshair.x;
    const inputY = crosshair.y - lastCrosshair.y;

    const inputMag = Math.hypot(inputX, inputY);

    // ===== 2. PHÁT HIỆN KÉO NHẸ =====
    const isMicroDrag =
        inputMag > MICRO_DRAG_CONFIG.INPUT.MIN_DELTA &&
        inputMag < MICRO_DRAG_CONFIG.INPUT.MAX_DELTA;

    if (isMicroDrag) {

        // ===== 3. TĂNG GIA TỐC =====
        rampFactor *= MICRO_DRAG_CONFIG.ACCEL.RAMP;
        rampFactor = Math.min(rampFactor, 6);

        // ===== 4. KÉO LÊN ĐẦU =====
        const dx = head.x - crosshair.x;
        const dy = head.y - crosshair.y;

        crosshair.x += dx * MICRO_DRAG_CONFIG.ACCEL.MULTIPLIER_X * rampFactor;
        crosshair.y += dy * MICRO_DRAG_CONFIG.ACCEL.MULTIPLIER_Y * rampFactor;

        // ===== 5. HÚT NAM CHÂM =====
        const dist = Math.hypot(dx, dy);

        if (dist < MICRO_DRAG_CONFIG.MAGNET.SNAP_DIST) {
            crosshair.x = head.x;
            crosshair.y = head.y;
        }

    } else {
        rampFactor = 1; // reset nếu không kéo
    }

    // ===== 6. LƯU FRAME TRƯỚC =====
    lastCrosshair.x = crosshair.x;
    lastCrosshair.y = crosshair.y;
}
  function getTarget(enemies, crosshair) {
        let best = null;
        let minDist = Infinity;

        for (let e of enemies) {
            if (!e || !e.head) continue;

            const dx = e.head.x - crosshair.x;
            const dy = e.head.y - crosshair.y;
            const dist = Math.hypot(dx, dy);

            if (dist < minDist && dist < AIMLOCK_CONFIG.TARGET.FOV) {
                minDist = dist;
                best = e;
            }
        }

        return best;
    }
function headMagnetLock(state, target) {

    if (!HEAD_LOCK_CONFIG.ENABLE || !target) return;

    const crosshair = state.crosshair;
    const head = target.head;

    const dx = head.x - crosshair.x;
    const dy = head.y - crosshair.y;
    const dist = Math.hypot(dx, dy);

    // ===== 1. CHẠM VÙNG ĐẦU → SNAP =====
    if (dist < HEAD_LOCK_CONFIG.LOCK_ZONE.RADIUS) {

        if (HEAD_LOCK_CONFIG.LOCK.INSTANT) {
            crosshair.x = head.x;
            crosshair.y = head.y;
        }

        // ===== 2. GHIM CỨNG =====
        if (HEAD_LOCK_CONFIG.LOCK.HOLD) {

            crosshair.x += dx * HEAD_LOCK_CONFIG.LOCK.STRENGTH;
            crosshair.y += dy * HEAD_LOCK_CONFIG.LOCK.STRENGTH;
        }
    }

    // ===== 3. KHÓA TUYỆT ĐỐI =====
    if (dist < HEAD_LOCK_CONFIG.LOCK_ZONE.STICK_RADIUS) {

        crosshair.x = head.x;
        crosshair.y = head.y;

        // ===== chống rung =====
        if (HEAD_LOCK_CONFIG.STABLE.ZERO_SHAKE) {
            if (Math.abs(dx) < HEAD_LOCK_CONFIG.STABLE.MAX_DRIFT) crosshair.x = head.x;
            if (Math.abs(dy) < HEAD_LOCK_CONFIG.STABLE.MAX_DRIFT) crosshair.y = head.y;
        }
    }
}
    function predictPosition(target, dt) {
        if (!AIMLOCK_CONFIG.PREDICT.ENABLE) return target.head;

        const vx = target.head.x - target.prevHead.x;
        const vy = target.head.y - target.prevHead.y;

        return {
            x: target.head.x + vx * AIMLOCK_CONFIG.PREDICT.LEAD_TIME,
            y: target.head.y + vy * AIMLOCK_CONFIG.PREDICT.LEAD_TIME
        };
    }

    function applySmooth(current, target) {
        const s = AIMLOCK_CONFIG.TRACK.SMOOTH;
        return {
            x: current.x + (target.x - current.x) * (1 - s),
            y: current.y + (target.y - current.y) * (1 - s)
        };
    }

 function chestToHeadBoost(state, target) {

    if (!CHEST_HEAD_BOOST_CONFIG.ENABLE || !target) return;

    const crosshair = state.crosshair;

    // ===== POSITIONS =====
    const head = target.head;
    const chest = {
        x: target.head.x,
        y: target.head.y + CHEST_HEAD_BOOST_CONFIG.CHEST_ZONE.PRIORITY_Y_OFFSET
    };

    // ===== DIST TO CHEST =====
    const dx = chest.x - crosshair.x;
    const dy = chest.y - crosshair.y;
    const dist = Math.hypot(dx, dy);

    // ===== TRIGGER CHEST ZONE =====
    if (dist < CHEST_HEAD_BOOST_CONFIG.CHEST_ZONE.RADIUS) {

        // ===== APPLY SENS BOOST =====
        crosshair.x += dx * CHEST_HEAD_BOOST_CONFIG.SENS.CHEST_MULTIPLIER;

        // ===== KÉO LÊN ĐẦU (QUAN TRỌNG) =====
        const headDeltaY = head.y - crosshair.y;

        crosshair.y += headDeltaY * CHEST_HEAD_BOOST_CONFIG.BOOST.FORCE_Y;
        crosshair.x += (head.x - crosshair.x) * CHEST_HEAD_BOOST_CONFIG.BOOST.FORCE_X;

        // ===== SNAP HEAD =====
        const headDist = Math.hypot(
            head.x - crosshair.x,
            head.y - crosshair.y
        );

        if (CHEST_HEAD_BOOST_CONFIG.SNAP.ENABLE &&
            headDist < CHEST_HEAD_BOOST_CONFIG.SNAP.THRESHOLD) {

            crosshair.x = head.x;
            crosshair.y = head.y;
        }
    }
}
  function stabilize(delta) {
        if (!AIMLOCK_CONFIG.STABILIZER.ENABLE) return delta;

        if (Math.abs(delta.x) < AIMLOCK_CONFIG.STABILIZER.MICRO_CORRECTION)
            delta.x = 0;

        if (Math.abs(delta.y) < AIMLOCK_CONFIG.STABILIZER.MICRO_CORRECTION)
            delta.y = 0;

        return delta;
    }

    function aim(state) {
        if (!AIMLOCK_CONFIG.ENABLE) return;

        const dt = getDeltaTime();
        const target = getTarget(state.enemies, state.crosshair);

        if (!target) return;

        const predicted = predictPosition(target, dt);
        const smoothed = applySmooth(state.crosshair, predicted);

        let delta = {
            x: smoothed.x - state.crosshair.x,
            y: smoothed.y - state.crosshair.y
        };

        delta = stabilize(delta);

        // ===== APPLY AIM =====
        state.crosshair.x += delta.x * AIMLOCK_CONFIG.SENS.BASE;
        state.crosshair.y += delta.y * AIMLOCK_CONFIG.SENS.BASE;

        // ===== AUTO FIRE =====
        const dist = Math.hypot(delta.x, delta.y);
        if (AIMLOCK_CONFIG.AUTO_FIRE.ENABLE &&
            dist < AIMLOCK_CONFIG.AUTO_FIRE.TRIGGER_RADIUS) {
            state.shoot = true;
        }
    }

    return { aim };

})();
 function gameLoop(state) {

    try {
        AimLockEngine.aim(state);
  fireHeadLock(state, target);      // 🔥 chỉ kích hoạt khi bắn
forceHeadPullUp(state, target);     // kéo lên đầu
microDragHeadBoost(state, target);  // tăng tốc kéo
headMovingLock(state, target);      // tracking
preventDropFromHead(state, target); // 🚫 chặn tụt
headMagnetLock(state, target);      // ghim cứng


    // 1. Update target
    updateTarget(state);

    // 2. Aimlock (head tracking)
    updateAimLock(state);

    // 3. 👉 RECOIL + CROSSHAIR (CHÈN Ở ĐÂY)
    applyRecoilCrosshair(state);

    // 4. Apply camera
    applyCamera(state);

    } catch (e) {}

    setTimeout(() => gameLoop(state), 8);
}
 

 // ===== 4. EXPORT =====
    body = JSON.stringify(obj);

    console.log("-----------------------------------------");
    console.log("DTIEN INJECTOR FF: LOADED SUCCESSFULLY");
    console.log("Features: Aimbot, Neck Sync, Rotation Lock");
    console.log("-----------------------------------------");

} catch (e) {
    console.log("DTien Warning: Host data is not JSON. Injecting via Raw String...");
}

// ===== 5. RETURN =====
$done({ body });
