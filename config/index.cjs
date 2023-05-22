/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd48247bbdab964bc',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f2209723b15eec388aef4d6172d4d356',

  PROVINCE: '江苏',
  CITY: '泰州',
  
🗓️{{date.DATA}}
城市：{{city.DATA}}
天气☁️：{{weather.DATA}}
温度🌡️: {{min_temperature.DATA}}--{{max_temperature.DATA}}
风向：{{wind_direction.DATA}}
风级：{{wind_scale.DATA}}
温馨提示：{{notice.DATA}}
值得纪念：{{birthday_message.DATA}}
💗：{{earthy_love_words.DATA}}
每日一句😋
中文：{{note_ch.DATA}}
English：{{note_en.DATA}}
和{{poetry_author.DATA}}约个会：{{poetry_content.DATA}}

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owRFT5_M0VrKzp4zPv0xqm1RUd-4',
     //  owRFT59ds7j52hJyky47JjAc_ND0
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'IWfwwvAp68VuHcKAZdh1INEMN7AzDTC6M12uUnlNNNw',
      
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2001', date: '02-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2001', date: '03-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '01-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-01-31' },
      ],
      
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owRFT5_M0VrKzp4zPv0xqm1RUd-4',
    }
  ],

  
}

module.exports = USER_CONFIG

