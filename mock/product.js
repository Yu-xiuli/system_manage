import Mock from 'mockjs'

const data = {
    items: [{
            "id": 1,
            "name": "银色星芒刺绣网纱底裤",
            'brand_id': 49,
            "price": 100,
            "product_category_id": 7,
            "product_sn": "No86577",
            "pic": "https://img.alicdn.com/bao/uploaded/i2/2920015215/O1CN01YqVQja1oOW7NP0Yk5_!!2920015215.jpg",
            "sub_title": "111",
            "description": "111",
            "original_price": 120,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "1000",
            "preview_status": 0,
            "service_ids": null,
            "keywords": "银色星芒刺绣网纱底裤",
            "note": "银色星芒刺绣网纱底裤",
            "album_pics": null,
            "detail_title": "银色星芒刺绣网纱底裤",
            "detail_desc": "银色星芒刺绣网纱底裤",
            "detail_html": "银色星芒刺绣网纱底裤",
            "detail_mobile_html": "银色星芒刺绣网纱底裤",
            "promotion_start_time": null,
            "promotion_end_time": null,
            "promotion_per_limit": null,
            "promotion_type": 0,
            "brand_name": "七匹狼",
            "product_category_name": "外套"
        },
        {
            "id": 2,
            "name": "银色星芒刺绣网纱底裤2",
            'brand_id': 49,
            "price": 100,
            "product_category_id": 7,
            "product_sn": "No86578",
            "pic": "https://gd2.alicdn.com/imgextra/i4/821869906/O1CN01QimhZv2N3021c0xKC_!!821869906.jpg_400x400.jpg",
            "sub_title": "111",
            "description": "111",
            "original_price": 120,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "1000",
            "preview_status": 0,
            "service_ids": null,
            "keywords": "银色星芒刺绣网纱底裤2",
            "note": "银色星芒刺绣网纱底裤",
            "album_pics": null,
            "detail_title": "银色星芒刺绣网纱底裤",
            "detail_desc": "银色星芒刺绣网纱底裤",
            "detail_html": "银色星芒刺绣网纱底裤",
            "detail_mobile_html": "银色星芒刺绣网纱底裤",
            "promotion_start_time": null,
            "promotion_end_time": null,
            "promotion_per_limit": null,
            "promotion_type": 0,
            "brand_name": "七匹狼",
            "product_category_name": "外套"
        },
        {
            "id": 3,
            "name": "银色星芒刺绣网纱底裤3",
            'brand_id': 1,
            "price": 100,
            "product_category_id": 7,
            "product_sn": "No86579",
            "pic": "https://gd3.alicdn.com/imgextra/i1/2920015215/O1CN01T9lWth1oOW8RcL7Wn_!!2920015215.jpg_400x400.jpg",
            "sub_title": "111",
            "description": "111",
            "original_price": 120,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "1000",
            "preview_status": 0,
            "service_ids": null,
            "keywords": "银色星芒刺绣网纱底裤3",
            "note": "银色星芒刺绣网纱底裤",
            "album_pics": null,
            "detail_title": "银色星芒刺绣网纱底裤",
            "detail_desc": "银色星芒刺绣网纱底裤",
            "detail_html": "银色星芒刺绣网纱底裤",
            "detail_mobile_html": "银色星芒刺绣网纱底裤",
            "promotion_start_time": null,
            "promotion_end_time": null,
            "promotion_per_limit": null,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 4,
            "name": "银色星芒刺绣网纱底裤4",
            'brand_id': 1,
            "price": 100,
            "product_category_id": 7,
            "product_sn": "No86580",
            "pic": "https://gd4.alicdn.com/imgextra/i3/0/O1CN01XBboOZ1C8zHMrLBV4_!!0-item_pic.jpg_400x400.jpg",
            "sub_title": "111",
            "description": "111",
            "original_price": 120,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "1000",
            "preview_status": 0,
            "service_ids": null,
            "keywords": "银色星芒刺绣网纱底裤4",
            "note": "银色星芒刺绣网纱底裤",
            "album_pics": null,
            "detail_title": "银色星芒刺绣网纱底裤",
            "detail_desc": "银色星芒刺绣网纱底裤",
            "detail_html": "银色星芒刺绣网纱底裤",
            "detail_mobile_html": "银色星芒刺绣网纱底裤",
            "promotion_start_time": null,
            "promotion_end_time": null,
            "promotion_per_limit": null,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 5,
            "name": "银色星芒刺绣网纱底裤5",
            'brand_id': 1,
            "price": 100,
            "product_category_id": 7,
            "product_sn": "No86580",
            "pic": "https://gd1.alicdn.com/imgextra/i3/114085891/O1CN01kWjVFd1tO7rJA07Ck_!!114085891.jpg",
            "sub_title": "111",
            "description": "111",
            "original_price": 120,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "1000",
            "preview_status": 0,
            "service_ids": null,
            "keywords": "银色星芒刺绣网纱底裤5",
            "note": "银色星芒刺绣网纱底裤",
            "album_pics": null,
            "detail_title": "银色星芒刺绣网纱底裤",
            "detail_desc": "银色星芒刺绣网纱底裤",
            "detail_html": "银色星芒刺绣网纱底裤",
            "detail_mobile_html": "银色星芒刺绣网纱底裤",
            "promotion_start_time": null,
            "promotion_end_time": null,
            "promotion_per_limit": null,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 6,
            "name": "银色星芒刺绣网纱底裤6",
            'brand_id': 1,
            "price": 100,
            "product_category_id": 7,
            "product_sn": "No86580",
            "pic": "https://img.alicdn.com/imgextra/i2/52371042/O1CN01IFJwEX1JZHLLmbOO0_!!52371042.jpg",
            "sub_title": "111",
            "description": "111",
            "original_price": 120,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "1000",
            "preview_status": 0,
            "service_ids": null,
            "keywords": "银色星芒刺绣网纱底裤6",
            "note": "银色星芒刺绣网纱底裤",
            "album_pics": null,
            "detail_title": "银色星芒刺绣网纱底裤",
            "detail_desc": "银色星芒刺绣网纱底裤",
            "detail_html": "银色星芒刺绣网纱底裤",
            "detail_mobile_html": "银色星芒刺绣网纱底裤",
            "promotion_start_time": null,
            "promotion_end_time": null,
            "promotion_per_limit": null,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 7,
            "name": "女式超柔软拉毛运动开衫",
            'brand_id': 1,
            "price": 249,
            "product_category_id": 7,
            "product_sn": "No86577",
            "pic": "https://gd2.alicdn.com/imgextra/i4/52371042/O1CN01aZ88g21JZHH6U3vIi_!!52371042.jpg_400x400.jpg",
            "sub_title": "匠心剪裁，垂感质地",
            "description": "匠心剪裁，垂感质地",
            "original_price": 299.00,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": "string",
            "keywords": "女式超柔软拉毛运动开衫",
            "note": "string",
            "album_pics": "string",
            "detail_title": "string",
            "detail_desc": "string",
            "detail_html": "string",
            "detail_mobile_html": "string",
            "promotion_start_time": "2018-04-26 10:41:03",
            "promotion_end_time": "2018-04-26 10:41:03",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 8,
            "name": "女式超柔软拉毛运动开衫1",
            'brand_id': 1,
            "price": 249,
            "product_category_id": 7,
            "product_sn": "No86577",
            "pic": "https://gd3.alicdn.com/imgextra/i4/821869906/O1CN01mOdJ8N2N3013lPpD8_!!821869906.jpg_400x400.jpg",
            "sub_title": "匠心剪裁，垂感质地",
            "description": "匠心剪裁，垂感质地",
            "original_price": 299.00,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": "string",
            "keywords": "女式超柔软拉毛运动开衫",
            "note": "string",
            "album_pics": "string",
            "detail_title": "string",
            "detail_desc": "string",
            "detail_html": "string",
            "detail_mobile_html": "string",
            "promotion_start_time": "2018-04-26 10:41:03",
            "promotion_end_time": "2018-04-26 10:41:03",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 9,
            "name": "女式超柔软拉毛运动开衫1",
            'brand_id': 1,
            "price": 249,
            "product_category_id": 7,
            "product_sn": "No86577",
            "pic": "https://gd3.alicdn.com/imgextra/i4/821869906/O1CN01mOdJ8N2N3013lPpD8_!!821869906.jpg_400x400.jpg",
            "sub_title": "匠心剪裁，垂感质地",
            "description": "匠心剪裁，垂感质地",
            "original_price": 299.00,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": "string",
            "keywords": "女式超柔软拉毛运动开衫",
            "note": "string",
            "album_pics": "string",
            "detail_title": "string",
            "detail_desc": "string",
            "detail_html": "string",
            "detail_mobile_html": "string",
            "promotion_start_time": "2018-04-26 10:41:03",
            "promotion_end_time": "2018-04-26 10:41:03",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 10,
            "name": "女式超柔软拉毛运动开衫1",
            'brand_id': 1,
            "price": 249,
            "product_category_id": 7,
            "product_sn": "No86577",
            "pic": "https://gd3.alicdn.com/imgextra/i4/821869906/O1CN01mOdJ8N2N3013lPpD8_!!821869906.jpg_400x400.jpg",
            "sub_title": "匠心剪裁，垂感质地",
            "description": "匠心剪裁，垂感质地",
            "original_price": 299.00,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": "string",
            "keywords": "女式超柔软拉毛运动开衫",
            "note": "string",
            "album_pics": "string",
            "detail_title": "string",
            "detail_desc": "string",
            "detail_html": "string",
            "detail_mobile_html": "string",
            "promotion_start_time": "2018-04-26 10:41:03",
            "promotion_end_time": "2018-04-26 10:41:03",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 11,
            "name": "女式超柔软拉毛运动开衫1",
            'brand_id': 1,
            "price": 249,
            "product_category_id": 7,
            "product_sn": "No86577",
            "pic": "https://gd3.alicdn.com/imgextra/i4/821869906/O1CN01mOdJ8N2N3013lPpD8_!!821869906.jpg_400x400.jpg",
            "sub_title": "匠心剪裁，垂感质地",
            "description": "匠心剪裁，垂感质地",
            "original_price": 299.00,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": "string",
            "keywords": "女式超柔软拉毛运动开衫",
            "note": "string",
            "album_pics": "string",
            "detail_title": "string",
            "detail_desc": "string",
            "detail_html": "string",
            "detail_mobile_html": "string",
            "promotion_start_time": "2018-04-26 10:41:03",
            "promotion_end_time": "2018-04-26 10:41:03",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 12,
            "name": "女式超柔软拉毛运动开衫2",
            'brand_id': 1,
            "price": 249,
            "product_category_id": 7,
            "product_sn": "No86577",
            "pic": "https://gd4.alicdn.com/imgextra/i4/2920015215/O1CN017djgeK1oOW62bBlTi_!!2920015215.jpg_400x400.jpg",
            "sub_title": "匠心剪裁，垂感质地",
            "description": "匠心剪裁，垂感质地",
            "original_price": 299.00,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": "string",
            "keywords": "女式超柔软拉毛运动开衫",
            "note": "string",
            "album_pics": "string",
            "detail_title": "string",
            "detail_desc": "string",
            "detail_html": "string",
            "detail_mobile_html": "string",
            "promotion_start_time": "2018-04-26 10:41:03",
            "promotion_end_time": "2018-04-26 10:41:03",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 13,
            "name": "女式超柔软拉毛运动开衫3",
            'brand_id': 1,
            "price": 249,
            "product_category_id": 7,
            "product_sn": "No86577",
            "pic": "https://gd4.alicdn.com/imgextra/i2/313395600/O1CN015KSwsO1rEqcSJgBz8_!!313395600.jpg_400x400.jpg",
            "sub_title": "匠心剪裁，垂感质地",
            "description": "匠心剪裁，垂感质地",
            "original_price": 299.00,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": "string",
            "keywords": "女式超柔软拉毛运动开衫",
            "note": "string",
            "album_pics": "string",
            "detail_title": "string",
            "detail_desc": "string",
            "detail_html": "string",
            "detail_mobile_html": "string",
            "promotion_start_time": "2018-04-26 10:41:03",
            "promotion_end_time": "2018-04-26 10:41:03",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 14,
            "name": "女式超柔软拉毛运动开衫3",
            'brand_id': 1,
            "price": 249,
            "product_category_id": 7,
            "product_sn": "No86577",
            "pic": "https://gd4.alicdn.com/imgextra/i2/313395600/O1CN015KSwsO1rEqcSJgBz8_!!313395600.jpg_400x400.jpg",
            "sub_title": "匠心剪裁，垂感质地",
            "description": "匠心剪裁，垂感质地",
            "original_price": 299.00,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": "string",
            "keywords": "女式超柔软拉毛运动开衫",
            "note": "string",
            "album_pics": "string",
            "detail_title": "string",
            "detail_desc": "string",
            "detail_html": "string",
            "detail_mobile_html": "string",
            "promotion_start_time": "2018-04-26 10:41:03",
            "promotion_end_time": "2018-04-26 10:41:03",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 18,
            "name": "女式超柔软拉毛运动开衫3",
            'brand_id': 1,
            "price": 249,
            "product_category_id": 7,
            "product_sn": "No86577",
            "pic": "https://gd4.alicdn.com/imgextra/i2/313395600/O1CN015KSwsO1rEqcSJgBz8_!!313395600.jpg_400x400.jpg",
            "sub_title": "匠心剪裁，垂感质地",
            "description": "匠心剪裁，垂感质地",
            "original_price": 299.00,
            "stock": 100,
            "low_stock": 20,
            "unit": "件",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": "string",
            "keywords": "女式超柔软拉毛运动开衫",
            "note": "string",
            "album_pics": "string",
            "detail_title": "string",
            "detail_desc": "string",
            "detail_html": "string",
            "detail_mobile_html": "string",
            "promotion_start_time": "2018-04-26 10:41:03",
            "promotion_end_time": "2018-04-26 10:41:03",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "万和",
            "product_category_name": "外套"
        }, {
            "id": 26,
            "name": "华为 HUAWEI P20 ",
            'brand_id': 3,
            "price": 3788,
            "product_category_id": 19,
            "product_sn": "6946605",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg",
            "sub_title": "AI智慧全面屏 6GB +64GB 亮黑色 全网通版 移动联通电信4G手机 双卡双待手机 双卡双待",
            "description": "",
            "original_price": 4288,
            "stock": 1000,
            "low_stock": 0,
            "unit": "件",
            "weight": "0.00",
            "preview_status": 1,
            "service_ids": [2, 3, 1],
            "keywords": "",
            "note": "string",
            "album_pics": ["http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ab46a3cN616bdc41.jpg",
                " http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf5fN2522b9dc.jpg"
            ],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": "<p><img class='wscnph' src='http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ad44f1cNf51f3bb0.jpg' /><img class='wscnph' src='http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ad44fa8Nfcf71c10.jpg' /><img class='wscnph' src='http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ad44fa9N40e78ee0.jpg' /><img class='wscnph' src='http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ad457f4N1c94bdda.jpg' /><img class='wscnph' src='http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ad457f5Nd30de41d.jpg' /><img class='wscnph' src='http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5b10fb0eN0eb053fb.jpg' /></p>",
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 1,
            "brand_name": "华为",
            "product_category_name": "手机通讯"
        }, {
            "id": 27,
            "name": "小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待",
            'brand_id': 6,
            "price": 2699,
            "product_category_id": 19,
            "product_sn": "7437788",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg",
            "sub_title": "骁龙845处理器，红外人脸解锁，AI变焦双摄，AI语音助手小米6X低至1299，点击抢购",
            "description": "小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待",
            "original_price": 2699,
            "stock": 100,
            "low_stock": 0,
            "unit": "",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": [],
            "keywords": "",
            "note": "",
            "album_pics": [],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": '<p><img class="wscnph" src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5b2254e8N414e6d3a.jpg" width="500" /></p>',
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 3,
            "brand_name": "小米",
            "product_category_name": "手机数码"
        }, {
            "id": 28,
            "name": "小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待",
            'brand_id': 6,
            "price": 649,
            "product_category_id": 19,
            "product_sn": "7437789",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5a9d248cN071f4959.jpg",
            "sub_title": "8天超长待机，137g轻巧机身，高通骁龙处理器小米6X低至1299，点击抢购",
            "description": "",
            "original_price": 649,
            "stock": 100,
            "low_stock": 0,
            "unit": "",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": [],
            "keywords": "",
            "note": "",
            "album_pics": [],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": '',
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 4,
            "brand_name": "小米",
            "product_category_name": "手机数码"
        }, {
            "id": 29,
            "name": "Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机",
            'brand_id': 51,
            "price": 5499.00,
            "product_category_id": 19,
            "product_sn": "7437799",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5acc5248N6a5f81cd.jpg",
            "sub_title": "【限时限量抢购】Apple产品年中狂欢节，好物尽享，美在智慧！速来 >> 勾选[保障服务][原厂保2年]，获得AppleCare+全方位服务计划，原厂延保售后无忧。",
            "description": "",
            "original_price": 5499.00,
            "stock": 100,
            "low_stock": 0,
            "unit": "",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": [],
            "keywords": "",
            "note": "",
            "album_pics": [],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": '',
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "苹果",
            "product_category_name": "手机数码"
        }, {
            "id": 30,
            "name": "HLA海澜之家简约动物印花短袖T恤",
            'brand_id': 50,
            "price": 98.00,
            "product_category_id": 8,
            "product_sn": "HNTBJ2E042A",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5ad83a4fN6ff67ecd.jpg!cc_350x449.jpg",
            "sub_title": "2018夏季新品微弹舒适新款短T男生 6月6日-6月20日，满300减30，参与互动赢百元礼券，立即分享赢大奖",
            "description": "",
            "original_price": 98.00,
            "stock": 100,
            "low_stock": 0,
            "unit": "",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": [],
            "keywords": "",
            "note": "",
            "album_pics": [],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": '',
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "海澜之家",
            "product_category_name": "T恤"
        }, {
            "id": 31,
            "name": "HLA海澜之家蓝灰花纹圆领针织布短袖T恤",
            'brand_id': 50,
            "price": 98.00,
            "product_category_id": 8,
            "product_sn": "HNTBJ2E080A",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5ac98b64N70acd82f.jpg!cc_350x449.jpg",
            "sub_title": "2018夏季新品短袖T恤男HNTBJ2E080A 蓝灰花纹80 175/92A/L80A 蓝灰花纹80 175/92A/L",
            "description": "",
            "original_price": 98.00,
            "stock": 100,
            "low_stock": 0,
            "unit": "",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": [],
            "keywords": "",
            "note": "",
            "album_pics": [],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": '',
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "海澜之家",
            "product_category_name": "T恤"
        }, {
            "id": 32,
            "name": "HLA海澜之家短袖T恤男基础款",
            'brand_id': 50,
            "price": 68.00,
            "product_category_id": 8,
            "product_sn": "HNTBJ2E153A",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5a51eb88Na4797877.jpg",
            "sub_title": "HLA海澜之家短袖T恤男基础款简约圆领HNTBJ2E153A藏青(F3)175/92A(50)",
            "description": "",
            "original_price": 68.00,
            "stock": 100,
            "low_stock": 0,
            "unit": "",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": [],
            "keywords": "",
            "note": "",
            "album_pics": [],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": '',
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "海澜之家",
            "product_category_name": "T恤"
        }, {
            "id": 33,
            "name": "小米（MI）小米电视4A ",
            'brand_id': 6,
            "price": 2499.00,
            "product_category_id": 35,
            "product_sn": "4609652",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5b02804dN66004d73.jpg",
            "sub_title": "小米（MI）小米电视4A 55英寸 L55M5-AZ/L55M5-AD 2GB+8GB HDR 4K超高清 人工智能网络液晶平板电视",
            "description": "",
            "original_price": 2499.00,
            "stock": 100,
            "low_stock": 0,
            "unit": "",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": [],
            "keywords": "",
            "note": "",
            "album_pics": [],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": '',
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "小米",
            "product_category_name": "手机数码"
        }, {
            "id": 34,
            "name": "小米（MI）小米电视4A 65英寸",
            'brand_id': 6,
            "price": 3999.00,
            "product_category_id": 35,
            "product_sn": "4609660",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5b028530N51eee7d4.jpg",
            "sub_title": " L65M5-AZ/L65M5-AD 2GB+8GB HDR 4K超高清 人工智能网络液晶平板电视",
            "description": "",
            "original_price": 3999.00,
            "stock": 100,
            "low_stock": 0,
            "unit": "",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": [],
            "keywords": "",
            "note": "",
            "album_pics": [],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": '',
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "小米",
            "product_category_name": "手机数码"
        }, {
            "id": 35,
            "name": "耐克NIKE 男子 休闲鞋 ROSHE RUN 运动鞋 511881-010黑色41码",
            'brand_id': 58,
            "price": 369.00,
            "product_category_id": 29,
            "product_sn": "6799342",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5b235bb9Nf606460b.jpg",
            "sub_title": " 耐克NIKE 男子 休闲鞋 ROSHE RUN 运动鞋 511881-010黑色41码",
            "description": "",
            "original_price": 369.00,
            "stock": 100,
            "low_stock": 0,
            "unit": "",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": [],
            "keywords": "",
            "note": "",
            "album_pics": [],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": '',
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "NIKE",
            "product_category_name": "男鞋"
        }, {
            "id": 36,
            "name": "耐克NIKE 男子 气垫 休闲鞋 AIR MAX 90 ESSENTIAL 运动鞋 AJ1285-101白色41码",
            'brand_id': 58,
            "price": 499.00,
            "product_category_id": 29,
            "product_sn": "6799345",
            "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5b19403eN9f0b3cb8.jpg",
            "sub_title": " 耐克NIKE 男子 气垫 休闲鞋 AIR MAX 90 ESSENTIAL 运动鞋 AJ1285-101白色41码",
            "description": "",
            "original_price": 499.00,
            "stock": 100,
            "low_stock": 0,
            "unit": "",
            "weight": "0.00",
            "preview_status": 0,
            "service_ids": [],
            "keywords": "",
            "note": "",
            "album_pics": [],
            "detail_title": "",
            "detail_desc": "",
            "detail_html": '',
            "detail_mobile_html": "",
            "promotion_start_time": "",
            "promotion_end_time": "",
            "promotion_per_limit": 0,
            "promotion_type": 0,
            "brand_name": "NIKE",
            "product_category_name": "男鞋"
        },

    ],

}



export default [{
        url: '/vue-admin-template/product/list',
        type: 'get',
        response: config => {
            const items = data.items;
            const { page = 1, limit = 5 } = config.query
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items.slice((page - 1) * limit, limit * page)
                }
            }
        }

    }, {
        url: '/vue-admin-template/product/detail',
        type: 'get',
        response: config => {
            const items = data.items;

            const id = config.query.id;
            var product = items.find((item) => {
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
        url: '/vue-admin-template/product/edit',
        type: 'post',
        response: config => {
            const items = data.items;
            const listOne = config.body;
            var product = items.map((item) => {
                if (item.id == listOne.id) {
                    return listOne;
                } else {
                    return item;
                }

            })
            console.log(product, "99999999999999999999");
            data.items = product;
            return {
                code: 20000,
                data: {
                    message: "修改成功"
                }
            }
        }
    }, {
        url: '/vue-admin-template/product/delete',
        type: 'get',
        response: config => {
            const id = config.query.id
            const items = data.items
            var index = items.findIndex(item => {
                if (item.id == id) {
                    return true;
                }
            })
            items.splice(index, 1);
            return {
                code: 20000,
                data: {
                    message: "删除商品成功"
                }
            }
        }
    },
    {
        url: '/vue-admin-template/product/new',
        type: 'post',
        response: config => {
            const listOne = config.body;
            listOne.id = data.items[data.items.length - 1].id + 1;
            data.items.push(listOne);
            return {
                code: 20000,
                data: {
                    message: "添加成功"
                }
            }
        }
    }
]