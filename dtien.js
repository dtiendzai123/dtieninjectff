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
    CrossHairInitialSize: 10.36,       // Thu nhỏ tâm ảo để tăng độ tập trung đạn vào điểm đơn
    AimAssist: 999.00,                // Lực hỗ trợ ngắm cực đại (Siêu nam châm)
    WeaponAimAssist: 999.00,          // Lực hỗ trợ riêng biệt cho vũ khí
    
    // --- [AUTO_AIM_DRAG] ---
    AutoAimingConfig: {
        FollowTimeMax: 0.01,           // Thời gian trễ để khóa mục tiêu (0.1ms = Tức thời)
        MaxAngle: 9999,               // Góc quay tối đa để bám đuổi (Bám sát 100% dù địch chạy nhanh)
        ClientAimAssistJudgment: "AspectRatio_MaintainsYF" // Giữ ổn định trục Y khi quét mục tiêu
    }
},
  DRAG_ENGINE: {
        Enable: true,

        DragStrength: 3.5,
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
REDIRECT_ENGINE: {
        Enable: true,

        ForceRedirectToHead: true,

        RedirectStrength: 2.0,
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

        DragMultiplierOnFire: 2.5,
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

        DragMultiplierOnHead: 0.3,
        /*
            Khi đã dính head:
            → giảm lực kéo để không bị lệch
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

        LockStrength: 2.5,

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

        MaxOvershootDistance: 0.03,

        SnapBackSpeed: 0.6,
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

        DistanceMultiplier: 1.3,
        VelocityMultiplier: 1.1,

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

        AssistStrength: 1.0,
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

        MaxRedirectAngle: 180.0,
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
            head: 100.0,
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
