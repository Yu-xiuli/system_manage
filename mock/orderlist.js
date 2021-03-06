import Mock from 'mockjs'

const data = {
    items: [{
        //编号
        id: 12,
        member_id: 1,
        coupon_id: 2,
        //订单编号
        order_sn: '201809150101000001',
        //提交时间
        create_time: "2018-09-15 12:24:27",
        //用户账号
        member_username: "test",
        //订单金额
        total_amount: 18732.00,
        pay_amount: 16377.75,
        //运费金额
        freight_amount: 20.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 10.00,
        //支付方式0未支付，1支付宝，2微信
        pay_type: 0,
        //订单来源 1：App
        source_type: 1,
        //订单状态：1待发货 2已发货 3 已完成 4已关闭 
        status: 4,
        //订单类型：0->正常订单；1->秒杀订单
        order_type: 0,
        //物流公司(配送方式)
        delivery_company: "顺丰快递",
        //物流单号
        delivery_sn: null,
        //自动确认时间
        auto_confirm_day: 15,
        integration: 13284,
        growth: 0,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大力",
        receiver_phone: '18033441849',
        receiver_post_code: 518000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "南山区",
        receiver_detail_address: "科兴科学园",
        //订单备注
        note: '11111',
        //确认收货状态：0->未确认；1->已确认
        confirm_status: 0,
        //删除状态：0-> 未删除；1-> 已删除
        delete_status: 1,
        //下单时使用的积分
        use_integration: '',
        //支付时间
        payment_time: '',
        delivery_time: null,
        receive_time: null,
        comment_time: null,
        modify_time: '2019-11-09 16:50:28'
    },
    {
        id: 13,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809150102000002',
        create_time: "2018 - 09 - 15 14: 24: 29",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 1,
        source_type: 1,
        status: 1,
        order_type: 0,
        delivery_company: "顺丰快递",
        delivery_sn: null,
        auto_confirm_day: 15,
        integration: 13284,
        growth: 0,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大黎",
        receiver_phone: '18033441849',
        receiver_post_code: 618000,
        receiver_province: "江苏省",
        receiver_city: "常州市",
        receiver_region: "天宁区",
        receiver_detail_address: "东晓街道",
        note: ' ',
        confirm_status: 0,
        delete_status: 0,
        use_integration: 1000,
        payment_time: '2018-10-11 14:04:19',
        delivery_time: null,
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 14,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809130101000001',
        create_time: "2018-09-13 16:57:40",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 2,
        source_type: 1,
        status: 2,
        order_type: 1,
        delivery_company: "顺丰快递",
        delivery_sn: '201707196398345',
        auto_confirm_day: 15,
        integration: 13284,
        growth: 13284,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大莉",
        receiver_phone: '18133441849',
        receiver_post_code: 718000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "福田区",
        receiver_detail_address: "东晓街道",
        note: ' ',
        confirm_status: 0,
        delete_status: 0,
        use_integration: '',
        payment_time: '2018-10-13 13:44:04',
        delivery_time: '2018-10-16 13:43:41',
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 15,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809130102000002',
        create_time: "2018-09-13 17:03:00",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 1,
        source_type: 0,
        status: 3,
        order_type: 0,
        delivery_company: "顺丰快递",
        delivery_sn: '201707196398346',
        auto_confirm_day: 15,
        integration: 13284,
        growth: 13284,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大黎",
        receiver_phone: '18233441849',
        receiver_post_code: 518000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "福田区",
        receiver_detail_address: "东晓街道",
        note: ' ',
        confirm_status: 1,
        delete_status: 0,
        use_integration: 1000,
        payment_time: '2018-10-13 13:44:54',
        delivery_time: '2018-10-16 13:45:01',
        receive_time: '2018-10-18 14:05:31',
        comment_time: null,
        modify_time: null
    },
    {
        id: 16,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809140101000001',
        create_time: "2018-09-14 16:16:16",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 2,
        source_type: 1,
        status: 4,
        order_type: 1,
        delivery_company: "",
        delivery_sn: null,
        auto_confirm_day: 15,
        integration: 13284,
        growth: 13284,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大黎",
        receiver_phone: '18033441849',
        receiver_post_code: 618000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "福田区",
        receiver_detail_address: "东晓街道",
        note: ' ',
        confirm_status: 0,
        delete_status: 0,
        use_integration: null,
        payment_time: '',
        delivery_time: null,
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 17,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809150101000003',
        create_time: "2018-09-15 12:24:27",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 0,
        source_type: 0,
        status: 4,
        order_type: 1,
        delivery_company: "顺丰快递",
        delivery_sn: '201707196398345',
        auto_confirm_day: 15,
        integration: '',
        growth: null,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大黎",
        receiver_phone: '18333441849',
        receiver_post_code: 628000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "福田区",
        receiver_detail_address: "东晓街道",
        note: '1111',
        confirm_status: 0,
        delete_status: 0,
        use_integration: null,
        payment_time: '',
        delivery_time: '2018-10-12 14:01:28',
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 18,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809150102000004',
        create_time: "2018-09-15 14:25:29",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 1,
        source_type: 0,
        status: 1,
        order_type: 0,
        delivery_company: "圆通快递",
        delivery_sn: 'xxxx',
        auto_confirm_day: 15,
        integration: null,
        growth: null,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大理",
        receiver_phone: '18433441849',
        receiver_post_code: 618000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "福田区",
        receiver_detail_address: "东晓街道",
        note: '',
        confirm_status: 0,
        delete_status: 0,
        use_integration: 1000,
        payment_time: null,
        delivery_time: '2018-10-16 14:42:17',
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 19,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809130101000003',
        create_time: "2018-09-13 16:57:40",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 2,
        source_type: 1,
        status: 2,
        order_type: 0,
        delivery_company: "",
        delivery_sn: null,
        auto_confirm_day: 15,
        integration: null,
        growth: null,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大莉",
        receiver_phone: '18833441849',
        receiver_post_code: 618000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "福田区",
        receiver_detail_address: "东晓街道",
        note: '',
        confirm_status: 0,
        delete_status: 0,
        use_integration: null,
        payment_time: '',
        delivery_time: null,
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 20,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809130102000004',
        create_time: "2018-09-13 17:03:00",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 1,
        source_type: 1,
        status: 3,
        order_type: 1,
        delivery_company: "顺丰快递",
        delivery_sn: null,
        auto_confirm_day: 15,
        integration: null,
        growth: 0,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大利",
        receiver_phone: '18033441849',
        receiver_post_code: 618000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "福田区",
        receiver_detail_address: "东晓街道",
        note: '',
        confirm_status: 0,
        delete_status: 0,
        use_integration: null,
        payment_time: '',
        delivery_time: null,
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 21,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809140101000002',
        create_time: "2018-09-14 16:17:16",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 2,
        source_type: 1,
        status: 4,
        order_type: 0,
        delivery_company: "顺丰快递",
        delivery_sn: null,
        auto_confirm_day: 15,
        integration: 18682,
        growth: 18682,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大莉",
        receiver_phone: '18433441849',
        receiver_post_code: 618000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "天宁区",
        receiver_detail_address: "东晓街道",
        note: '',
        confirm_status: 0,
        delete_status: 1,
        use_integration: null,
        payment_time: '',
        delivery_time: null,
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 22,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809150102000005',
        create_time: "2018-09-15 12:24:32",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 0,
        source_type: 0,
        status: 4,
        order_type: 0,
        delivery_company: "顺丰快递",
        delivery_sn: '201707196398345',
        auto_confirm_day: 15,
        integration: 0,
        growth: 0,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大黎",
        receiver_phone: '18033441849',
        receiver_post_code: 618000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "天宁区",
        receiver_detail_address: "东晓街道",
        note: '',
        confirm_status: 0,
        delete_status: 0,
        use_integration: null,
        payment_time: '',
        delivery_time: '2018-10-12 14:01:28',
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 23,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809150102000006',
        create_time: "2018-09-15 14:26:29",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 1,
        source_type: 1,
        status: 1,
        order_type: 1,
        delivery_company: "顺丰快递",
        delivery_sn: 'xxxxccccccxxxxx',
        auto_confirm_day: 15,
        integration: 0,
        growth: 0,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大黎",
        receiver_phone: '18033441849',
        receiver_post_code: 618000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "福田区",
        receiver_detail_address: "东晓街道",
        note: '',
        confirm_status: 0,
        delete_status: 0,
        use_integration: 1000,
        payment_time: '2018-10-16 14:41:28',
        delivery_time: null,
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 24,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809130101100005',
        create_time: "2018-09-13 16:57:40",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 2,
        source_type: 1,
        status: 2,
        order_type: 1,
        delivery_company: "顺丰快递",
        delivery_sn: null,
        auto_confirm_day: 15,
        integration: 18682,
        growth: 18682,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大黎",
        receiver_phone: '18033441849',
        receiver_post_code: 618000,
        receiver_province: "广东省",
        receiver_city: "深圳市",
        receiver_region: "福田区",
        receiver_detail_address: "东晓街道",
        note: '',
        confirm_status: 0,
        delete_status: 0,
        use_integration: 0,
        payment_time: '',
        delivery_time: null,
        receive_time: null,
        comment_time: null,
        modify_time: null
    },
    {
        id: 25,
        member_id: 1,
        coupon_id: 2,
        order_sn: '201809130102000006',
        create_time: "2018-09-13 17:03:00",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 5.00,
        pay_type: 1,
        source_type: 0,
        status: 4,
        order_type: 0,
        delivery_company: "顺丰快递",
        delivery_sn: null,
        auto_confirm_day: 15,
        integration: 18682,
        growth: 18682,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大黎22",
        receiver_phone: '18033441849',
        receiver_post_code: 618000,
        receiver_province: "北京市",
        receiver_city: "北京城区",
        receiver_region: "东城区",
        receiver_detail_address: "东成街道",
        note: 'xxx',
        confirm_status: 0,
        delete_status: 0,
        use_integration: 1000,
        payment_time: '',
        delivery_time: null,
        receive_time: null,
        comment_time: null,
        modify_time: '2018-10-30 15:08:31'
    },
    {
        id: 26,
        member_id: 1,
        coupon_id: 2,
        order_sn:'201809140101100003',
        create_time: "2018-09-14 16:16:16",
        member_username: "test",
        total_amount: 18732.00,
        pay_amount: 16377.75,
        freight_amount: 0.00,
        promotion_amount: 2344.25,
        integration_amount: 0.00,
        coupon_amount: 10.00,
        discount_amount: 0.00,
        pay_type: 2,
        source_type: 1,
        status: 4,
        order_type: 0,
        delivery_company: "顺丰快递",
        delivery_sn: null,
        auto_confirm_day: 15,
        integration: 18682,
        growth: 18682,
        promotion_info: "单品促销,打折优惠：满3件，打7.50折,满减优惠：满1000.00元，减120.00元,满减优惠：满1000.00元，减120.00元,无优惠",
        receiver_name: "大黎",
        receiver_phone: '18033441849',
        receiver_post_code: 618000,
        receiver_province: "江苏省",
        receiver_city: "深圳市",
        receiver_region: "南山区",
        receiver_detail_address: "东晓街道",
        note: ' ',
        confirm_status: 0,
        delete_status: 1,
        use_integration: 1000,
        payment_time: null,
        delivery_time: null,
        receive_time: null,
        comment_time: null,
        modify_time: null
        },
        {
            id: 27,
            member_id: 1,
            coupon_id: null,
            order_sn: '202002250100000001',
            create_time: "2020-02-25 15:59:20",
            member_username: "test",
            total_amount: 540.00,
            pay_amount: 540.00,
            freight_amount: 0.00,
            promotion_amount: 0.00,
            integration_amount: 0.00,
            coupon_amount: 0.00,
            discount_amount: 0.00,
            pay_type: 0,
            source_type: 0,
            status: 0,
            order_type: 0,
            delivery_company: "顺丰快递",
            delivery_sn: null,
            auto_confirm_day:null,
            integration: 0,
            growth: 0,
            promotion_info: "无优惠,无优惠",
            receiver_name: "大黎1",
            receiver_phone: '18033441849',
            receiver_post_code: 618000,
            receiver_province: "广东省",
            receiver_city: "深圳市",
            receiver_region: "南山区",
            receiver_detail_address: "可行科技园",
            note: '',
            confirm_status: 0,
            delete_status: 1,
            use_integration: null,
            payment_time: '',
            delivery_time: null,
            receive_time: null,
            comment_time: null,
            modify_time: null
        },
        {
            id: 28,
            member_id: 1,
            coupon_id: null,
            order_sn: '202002250100000002',
            create_time: "2020-02-25 16:05:47",
            member_username: "test",
            total_amount: 540.00,
            pay_amount: 540.00,
            freight_amount: 0.00,
            promotion_amount: 0.00,
            integration_amount: 0.00,
            coupon_amount: 0.00,
            discount_amount: 0.00,
            pay_type: 0,
            source_type: 1,
            status: 0,
            order_type: 0,
            delivery_company: "顺丰快递",
            delivery_sn: null,
            auto_confirm_day: 15,
            integration: 0,
            growth: 0,
            promotion_info: "无优惠,无优惠",
            receiver_name: "大黎2",
            receiver_phone: '18033441849',
            receiver_post_code: 618000,
            receiver_province: "广东省",
            receiver_city: "深圳市",
            receiver_region: "南山区",
            receiver_detail_address: "可行科技园",
            note: ' ',
            confirm_status: 0,
            delete_status: 1,
            use_integration: null,
            payment_time: '',
            delivery_time: null,
            receive_time: null,
            comment_time: null,
            modify_time: null
        },
        {
            id: 29,
            member_id: 1,
            coupon_id: null,
            order_sn: '202002250100000003',
            create_time: "2020-02-25 16:07:58",
            member_username: "test",
            total_amount: 540.00,
            pay_amount: 540.00,
            freight_amount: 0.00,
            promotion_amount: 0.00,
            integration_amount: 0.00,
            coupon_amount: 0.00,
            discount_amount: 0.00,
            pay_type: 0,
            source_type: 1,
            status: 0,
            order_type: 1,
            delivery_company: "顺丰快递",
            delivery_sn: null,
            auto_confirm_day: null,
            integration: 0,
            growth: 0,
            promotion_info: "无优惠,无优惠",
            receiver_name: "大黎33",
            receiver_phone: '18033441849',
            receiver_post_code: 618000,
            receiver_province: "广东省",
            receiver_city: "深圳市44",
            receiver_region: "南山区",
            receiver_detail_address: "可行科技园",
            note: ' ',
            confirm_status: 0,
            delete_status: 1,
            use_integration: null,
            payment_time: '',
            delivery_time: null,
            receive_time: null,
            comment_time: null,
            modify_time: null
        },
        {
            id: 30,
            member_id: 1,
            coupon_id: null,
            order_sn: '202002250100000004',
            create_time: "2020-02-25 16:50:13",
            member_username: "test",
            total_amount: 240.00,
            pay_amount: 240.00,
            freight_amount: 0.00,
            promotion_amount: 0.00,
            integration_amount: 0.00,
            coupon_amount: 0.00,
            discount_amount: 10.00,
            pay_type: 0,
            source_type: 0,
            status: 2,
            order_type: 0,
            delivery_company: "顺丰快递",
            delivery_sn: '12333333',
            auto_confirm_day: 15,
            integration: 0,
            growth: 0,
            promotion_info: "无优惠,无优惠",
            receiver_name: "大黎45",
            receiver_phone: '18033441849',
            receiver_post_code: 618000,
            receiver_province: "广东省",
            receiver_city: "深圳市",
            receiver_region: "南山区",
            receiver_detail_address: "可行科技园",
            note: ' ',
            confirm_status: 0,
            delete_status: 1,
            use_integration: null,
            payment_time: '2020-02-25 16:53:29',
            delivery_time: '2020-02-25 16:54:03',
            receive_time: null,
            comment_time: null,
            modify_time: '2020-02-25 16:52:51'
        }

    ]
}
/* 
 
FieldTypeComment
idbigint(20)订单id
member_idbigint(20)
coupon_idbigint(20)
order_snvarchar(64)订单编号
create_timedatetime提交时间
member_usernamevarchar(64)用户帐号
total_amountdecimal(10,2)订单总金额
pay_amountdecimal(10,2)应付金额（实际支付金额）
freight_amountdecimal(10,2)运费金额
promotion_amountdecimal(10,2)促销优化金额（促销价、满减、阶梯价）
integration_amountdecimal(10,2)积分抵扣金额
coupon_amountdecimal(10,2)优惠券抵扣金额
discount_amountdecimal(10,2)管理员后台调整订单使用的折扣金额
pay_typeint(1)支付方式：0->未支付；1->支付宝；2->微信
source_typeint(1)订单来源：0->PC订单；1->app订单
statusint(1)订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单
order_typeint(1)订单类型：0->正常订单；1->秒杀订单
delivery_companyvarchar(64)物流公司(配送方式)
delivery_snvarchar(64)物流单号
auto_confirm_dayint(11)自动确认时间（天）
integrationint(11)可以获得的积分
growthint(11)可以活动的成长值
promotion_infovarchar(100)活动信息
bill_typeint(1)发票类型：0->不开发票；1->电子发票；2->纸质发票
bill_headervarchar(200)发票抬头
bill_contentvarchar(200)发票内容
bill_receiver_phonevarchar(32)收票人电话
bill_receiver_emailvarchar(64)收票人邮箱
receiver_namevarchar(100)收货人姓名
receiver_phonevarchar(32)收货人电话
receiver_post_codevarchar(32)收货人邮编
receiver_provincevarchar(32)省份/直辖市
receiver_cityvarchar(32)城市
receiver_regionvarchar(32)区
receiver_detail_addressvarchar(200)详细地址
notevarchar(500)订单备注
confirm_statusint(1)确认收货状态：0->未确认；1->已确认
delete_statusint(1)删除状态：0->未删除；1->已删除
use_integrationint(11)下单时使用的积分
payment_timedatetime支付时间
delivery_timedatetime发货时间
receive_timedatetime确认收货时间
comment_timedatetime评价时间
modify_timedatetime修改时间
 */
export default [
    {
        url: '/vue-admin-template/order/detail',
        type: 'get',
        response: config => {
            const items = data.items
            const id = config.query.id
            const product = items.find((item) => {
                if (item.id == id) {
                    return item
                }
            })
            return {
                code: 20000,
                data: {
                    items: product
                }
            }
        }
    },
    {
        url: '/vue-admin-template/order/leave',
        type: 'get',
        response: config => {
            const items = data.items
            const id = config.query.id
            const product = items.find((item) => {
                if (item.id == id) {
                    return item
                }
            })
            return {
                code: 20000,
                data: {
                    items: product
                }
            }
        }
    },
    {
        url: '/vue-admin-template/order/edit',
        type: 'post',
        response: config => {
            const items = data.items
            const listone = config.body
            const product = items.map((item) => {
                if (item.id == listone.id) {
                    listone.status=2
                    return listone
                } else {
                    return item
                }
            })
            data.items=product
            return {
                code: 20000,
                data: {
                    message:'success'
                }
            }
        }
    },
    {
        url: '/vue-admin-template/order/delete',
        type: 'get',
        response: config => {
          var id = config.query.id;
          const items = data.items
          var index = items.findIndex(item=>{
            if(item.id == id){
              return true;
            }
          })
          items.splice(index,1);
          return {
            code: 20000,
            data: {
              message: "删除商品成功"
            }
          }
        }
      },
    {
        url: '/vue-admin-template/order/list',
        type: 'get',
        response: config => {
            const {page = 1, limit = 5} = config.query
            const items = data.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    //根据分页信息返回数据
                    items: items.slice((page-1)*limit,limit*page)
                }
            }
        }
    }
    
]
